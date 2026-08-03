"use client";

import { useEffect, useState } from "react";
import { Lead } from "@/components/lead-qualification/types/lead.types";

const FILTERS = ["All", "Qualified", "In Review", "Disqualified"] as const;
type FilterType = (typeof FILTERS)[number];

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  qualified: { bg: "#eaf3de", text: "#3b6d11" },
  "in-review": { bg: "#faeeda", text: "#854f0b" },
  disqualified: { bg: "#fcebeb", text: "#a32d2d" },
  new: { bg: "#e6f1fb", text: "#0c447c" },
};

function getInitials(name?: string) {
  if (!name) return "?";
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length > 1) {
    const first = parts[0]?.[0] ?? "";
    const second = parts[1]?.[0] ?? "";
    return (first + second).toUpperCase();
  }
  return (parts[0] ?? "").slice(0, 2).toUpperCase();
}

function normalizeStatus(status: string) {
  return status?.toLowerCase().replace(/\s+/g, "-") ?? "new";
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  useEffect(() => {
    fetch("/api/leads/qualify")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredLeads = leads.filter((lead) => {
    if (activeFilter === "All") return true;
    const normalized = normalizeStatus(lead.status);
    return normalized === normalizeStatus(activeFilter);
  });

  const sortedLeads = [...filteredLeads].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h1 className="mb-1 text-xl font-semibold text-[#0d3320]">Leads</h1>
      <p className="mb-5 text-sm text-[#0d3320]/60">
        All leads captured from chatbot conversations.
      </p>

      {/* Filter pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
              activeFilter === filter
                ? "bg-[#0d3320] text-white"
                : "border border-[#0d3320]/15 bg-white text-[#0d3320]/70 hover:bg-[#0d3320]/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="py-10 text-center text-sm text-[#0d3320]/50">
          Loading leads...
        </div>
      )}

      {/* Empty */}
      {!loading && sortedLeads.length === 0 && (
        <div className="py-10 text-center text-sm text-[#0d3320]/50">
          No leads found for this filter.
        </div>
      )}

      {/* Row list */}
      {!loading && sortedLeads.length > 0 && (
        <div className="flex flex-col gap-2">
          {sortedLeads.map((lead) => {
            const statusKey = normalizeStatus(lead.status);
const style = STATUS_STYLES[statusKey] ?? STATUS_STYLES.new ?? { bg: "#e6f1fb", text: "#0c447c" };

            return (
              <div
                key={lead.id}
                className="flex items-center justify-between rounded-lg border border-[#0d3320]/10 bg-white p-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium"
                    style={{ background: style.bg, color: style.text }}
                  >
                    {getInitials(lead.name)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0d3320]">
                      {lead.name || "Unknown"}
                    </p>
                    <p className="text-xs text-[#0d3320]/60">
                      {lead.email}
                      {lead.budget ? ` · ${lead.budget}` : ""}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ background: style.bg, color: style.text }}
                  >
                    {lead.status}
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#0d3320]">
                      {lead.score}
                    </p>
                    <p className="text-[10px] text-[#0d3320]/50">score</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}