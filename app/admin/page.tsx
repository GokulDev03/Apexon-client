"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, CheckCircle2, FileText, Clock, ArrowRight } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  score: number;
  status: string;
}

interface Quote {
  id: string;
  name: string;
  email: string;
  service: string;
  status: string;
}

interface Stats {
  totalLeads: number;
  qualifiedLeads: number;
  totalQuotes: number;
  pendingQuotes: number;
  recentLeads: Lead[];
  recentQuotes: Quote[];
}

const DEFAULT_STYLE = { bg: "#e6f1fb", text: "#0c447c" };

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  qualified: { bg: "#eaf3de", text: "#3b6d11" },
  "in-review": { bg: "#faeeda", text: "#854f0b" },
  disqualified: { bg: "#fcebeb", text: "#a32d2d" },
  pending: { bg: "#faeeda", text: "#854f0b" },
  approved: { bg: "#eaf3de", text: "#3b6d11" },
  rejected: { bg: "#fcebeb", text: "#a32d2d" },
  new: DEFAULT_STYLE,
};

function getStatusStyle(status: string) {
  return STATUS_STYLES[status] ?? DEFAULT_STYLE;
}

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

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const cards = [
    { label: "Total Leads", value: stats?.totalLeads ?? 0, icon: Users, color: "#0d3320" },
    { label: "Qualified Leads", value: stats?.qualifiedLeads ?? 0, icon: CheckCircle2, color: "#3b6d11" },
    { label: "Total Quote Requests", value: stats?.totalQuotes ?? 0, icon: FileText, color: "#0c447c" },
    { label: "Pending Quotes", value: stats?.pendingQuotes ?? 0, icon: Clock, color: "#854f0b" },
  ];

  return (
    <div>
      <h1 className="mb-1 text-xl font-semibold text-[#0d3320]">Dashboard</h1>
      <p className="mb-6 text-sm text-[#0d3320]/60">
        Overview of leads and quote requests.
      </p>

      {loading && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-[104px] animate-pulse rounded-xl border border-[#0d3320]/10 bg-white p-4">
              <div className="mb-3 h-9 w-9 rounded-lg bg-[#0d3320]/10" />
              <div className="mb-2 h-6 w-12 rounded bg-[#0d3320]/10" />
              <div className="h-3 w-20 rounded bg-[#0d3320]/10" />
            </div>
          ))}
        </div>
      )}

      {!loading && stats && (
        <>
          {/* Stat cards */}
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className="group animate-[fadeIn_0.4s_ease-out_backwards] rounded-xl border border-[#0d3320]/10 bg-white p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0d3320]/20 hover:shadow-lg hover:shadow-[#0d3320]/5"
                >
                  <div
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 ease-out group-hover:scale-110"
                    style={{ background: `${card.color}15` }}
                  >
                    <Icon size={18} style={{ color: card.color }} />
                  </div>
                  <p className="text-2xl font-semibold text-[#0d3320]">{card.value}</p>
                  <p className="mt-1 text-xs text-[#0d3320]/60">{card.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent activity panels */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Recent Leads */}
            <div className="rounded-xl border border-[#0d3320]/10 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#0d3320]">Recent Leads</h2>
                <Link
                  href="/admin/leads"
                  className="flex items-center gap-1 text-xs font-medium text-[#0d3320]/60 transition hover:text-[#0d3320]"
                >
                  View all <ArrowRight size={12} />
                </Link>
              </div>

              {stats.recentLeads.length === 0 && (
                <p className="py-6 text-center text-xs text-[#0d3320]/40">No leads yet.</p>
              )}

              <div className="flex flex-col gap-1">
                {stats.recentLeads.map((lead) => {
                  const style = getStatusStyle(lead.status);
                  return (
                    <div
                      key={lead.id}
                      className="flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-[#0d3320]/[0.03]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-medium"
                          style={{ background: style.bg, color: style.text }}
                        >
                          {getInitials(lead.name)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#0d3320]">{lead.name || "Unknown"}</p>
                          <p className="text-[11px] text-[#0d3320]/50">{lead.email}</p>
                        </div>
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: style.bg, color: style.text }}
                      >
                        {lead.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Quotes */}
            <div className="rounded-xl border border-[#0d3320]/10 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#0d3320]">Recent Quote Requests</h2>
                <Link
                  href="/admin/quotes"
                  className="flex items-center gap-1 text-xs font-medium text-[#0d3320]/60 transition hover:text-[#0d3320]"
                >
                  View all <ArrowRight size={12} />
                </Link>
              </div>

              {stats.recentQuotes.length === 0 && (
                <p className="py-6 text-center text-xs text-[#0d3320]/40">No quote requests yet.</p>
              )}

              <div className="flex flex-col gap-1">
                {stats.recentQuotes.map((quote) => {
                  const style = getStatusStyle(quote.status);
                  return (
                    <div
                      key={quote.id}
                      className="flex items-center justify-between rounded-lg px-2 py-2 transition hover:bg-[#0d3320]/[0.03]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-medium"
                          style={{ background: style.bg, color: style.text }}
                        >
                          {getInitials(quote.name)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#0d3320]">{quote.name}</p>
                          <p className="text-[11px] text-[#0d3320]/50">{quote.service}</p>
                        </div>
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{ background: style.bg, color: style.text }}
                      >
                        {quote.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick actions + summary */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-[#0d3320]/10 bg-white p-4 lg:col-span-2">
              <h2 className="mb-3 text-sm font-semibold text-[#0d3320]">Quick actions</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <Link
                  href="/admin/leads"
                  className="rounded-lg border border-[#0d3320]/10 px-3 py-2.5 text-center text-xs font-medium text-[#0d3320] transition hover:border-[#0d3320]/25 hover:bg-[#0d3320]/[0.03]"
                >
                  View all leads
                </Link>
                <Link
                  href="/admin/quotes"
                  className="rounded-lg border border-[#0d3320]/10 px-3 py-2.5 text-center text-xs font-medium text-[#0d3320] transition hover:border-[#0d3320]/25 hover:bg-[#0d3320]/[0.03]"
                >
                  View all quotes
                </Link>
                <a
                  href="/"
                  target="_blank"
                  className="rounded-lg border border-[#0d3320]/10 px-3 py-2.5 text-center text-xs font-medium text-[#0d3320] transition hover:border-[#0d3320]/25 hover:bg-[#0d3320]/[0.03]"
                >
                  View website
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-[#0d3320]/10 bg-[#0d3320] p-4">
              <h2 className="mb-3 text-sm font-semibold text-white">Conversion snapshot</h2>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span>Qualified rate</span>
                <span className="font-semibold text-[#d4a574]">
                  {stats.totalLeads > 0
                    ? Math.round((stats.qualifiedLeads / stats.totalLeads) * 100)
                    : 0}
                  %
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#d4a574] transition-all duration-700"
                  style={{
                    width: `${
                      stats.totalLeads > 0
                        ? Math.round((stats.qualifiedLeads / stats.totalLeads) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
              <p className="mt-3 text-[11px] text-white/50">
                {stats.qualifiedLeads} of {stats.totalLeads} leads qualified so far.
              </p>
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}