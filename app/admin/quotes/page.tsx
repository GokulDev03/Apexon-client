"use client";

import { useEffect, useState } from "react";

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service: string;
  budget?: string | null;
  message: string;
  status: string;
}

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  pending: { bg: "#faeeda", text: "#854f0b" },
  approved: { bg: "#eaf3de", text: "#3b6d11" },
  rejected: { bg: "#fcebeb", text: "#a32d2d" },
};

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="mb-1 text-xl font-semibold text-[#0d3320]">Quote requests</h1>
      <p className="mb-6 text-sm text-[#0d3320]/60">
        Requests submitted through the "Request a Quote" form.
      </p>

      {loading && (
        <div className="py-10 text-center text-sm text-[#0d3320]/50">Loading quotes...</div>
      )}

      {!loading && quotes.length === 0 && (
        <div className="py-10 text-center text-sm text-[#0d3320]/50">No quote requests yet.</div>
      )}

      {!loading && quotes.length > 0 && (
        <div className="flex flex-col gap-3">
          {quotes.map((quote) => {
            const style = STATUS_STYLES[quote.status] ?? STATUS_STYLES.pending ?? { bg: "#faeeda", text: "#854f0b" };
            return (
              <div key={quote.id} className="rounded-lg border border-[#0d3320]/10 bg-white p-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#0d3320]">{quote.name}</p>
                    <p className="text-xs text-[#0d3320]/60">
                      {quote.email}
                      {quote.company ? ` · ${quote.company}` : ""}
                    </p>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ background: style.bg, color: style.text }}
                  >
                    {quote.status}
                  </span>
                </div>

                <div className="mb-2 flex gap-4 text-xs text-[#0d3320]/70">
                  <span><strong className="text-[#0d3320]">Service:</strong> {quote.service}</span>
                  {quote.budget && <span><strong className="text-[#0d3320]">Budget:</strong> {quote.budget}</span>}
                </div>

                <p className="rounded-md bg-[#0d3320]/[0.03] p-2 text-xs text-[#0d3320]/80">
                  {quote.message}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}