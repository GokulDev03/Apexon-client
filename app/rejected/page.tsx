import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";

export default function RejectedPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5ead9]">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0d3320]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d4a574]/10 blur-3xl" />

      <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0d3320]/8">
          <XCircle size={40} className="text-[#0d3320]/50" strokeWidth={1.8} />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0d3320]/40">
            Request Update
          </p>
          <h1 className="font-display text-3xl text-[#0d3320] md:text-4xl">
            This request wasn&apos;t approved
          </h1>
          <p className="mx-auto max-w-md text-[#0d3320]/65">
            This can happen for a few reasons — an incomplete detail, a scheduling conflict, or
            something we&apos;d like to clarify with you first. Feel free to reach out or submit
            a new request.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/book-consultation"
            className="rounded-full bg-[#0d3320] px-6 py-3 text-sm font-semibold text-[#f5ead9] transition hover:bg-[#0a2818]"
          >
            Submit a New Request
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0d3320]/70 transition hover:text-[#0d3320]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Slogan */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-[#0d3320]/10 pt-8">
          <div className="flex items-center gap-2 text-[#0d3320]/40">
            <span className="h-px w-8 bg-[#0d3320]/20" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Apexon</span>
            <span className="h-px w-8 bg-[#0d3320]/20" />
          </div>
          <p className="font-display text-lg italic text-[#0d3320]">
            Quality. Innovation. Results.
          </p>
        </div>
      </main>
    </div>
  );
}