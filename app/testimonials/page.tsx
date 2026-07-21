import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials",
  description: "What clients say about working with Apexon Development.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <PageLayout path="/testimonials">
      <Hero eyebrow="Testimonials" title="What our clients say" />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} className="flex flex-col gap-4">
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-ink-700">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-medium text-ink-900">{t.authorName}</p>
                <p className="text-sm text-ink-500">{t.authorRole}, {t.companyName}</p>
              </div>
            </Card>
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
