import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thanks for reaching out — we'll be in touch shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <CheckCircle2 size={48} className="text-brand-500" />
      <h1 className="font-display text-3xl text-ink-900 md:text-4xl">Thanks — we&apos;ve got your message</h1>
      <p className="max-w-md text-ink-600">We typically respond within one business day. In the meantime, feel free to explore our work.</p>
      <div className="flex gap-4">
        <Button href="/portfolio" variant="secondary">Explore Our Portfolio</Button>
        <Link href="/" className="flex items-center text-sm text-ink-500 hover:text-ink-700">Back to Home</Link>
      </div>
    </Container>
  );
}
