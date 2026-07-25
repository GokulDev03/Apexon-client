import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thanks for reaching out — we'll be in touch shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5ead9]">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#0d3320]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#d4a574]/10 blur-3xl" />

      <Container className="relative flex min-h-screen flex-col items-center justify-center gap-8 py-24 text-center">
        {/* Success icon with glow ring */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0d3320]/10" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0d3320]">
            <CheckCircle2 size={40} className="text-[#d4a574]" strokeWidth={2} />
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#d4a574]">
            Request Received
          </p>
          <h1 className="font-display text-3xl text-[#0d3320] md:text-4xl">
            Thanks — we&apos;ve got your message
          </h1>
          <p className="mx-auto max-w-md text-[#0d3320]/70">
            We typically respond within one business day. In the meantime, feel free to explore our work.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/portfolio" size="lg">
            Explore Our Portfolio
          </Button>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-[#0d3320]/70 transition hover:text-[#0d3320]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Cross-promo card: Apexon Web Store */}
        <a
          href="https://apexon-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex w-full max-w-md items-center justify-between gap-4 rounded-2xl border border-[#0d3320]/15 bg-white/60 p-5 text-left shadow-soft transition hover:border-[#0d3320]/30 hover:shadow-raised"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a574]">
              Also check out
            </p>
            <p className="mt-1 font-semibold text-[#0d3320]">Apexon Web Store</p>
            <p className="mt-0.5 text-sm text-[#0d3320]/60">
              Book web, mobile, AI &amp; cloud services online with fixed pricing.
            </p>
          </div>
          <ArrowUpRight
            size={22}
            className="shrink-0 text-[#0d3320]/50 transition group-hover:text-[#0d3320]"
          />
        </a>

        {/* Slogan */}
        <div className="mt-8 flex flex-col items-center gap-2 border-t border-[#0d3320]/10 pt-8">
          <div className="flex items-center gap-2 text-[#0d3320]/40">
            <span className="h-px w-8 bg-[#0d3320]/20" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Apexon</span>
            <span className="h-px w-8 bg-[#0d3320]/20" />
          </div>
          <p className="font-display text-lg italic text-[#0d3320]">
            Quality. Innovation. Results.
          </p>
        </div>
      </Container>
    </div>
  );
}