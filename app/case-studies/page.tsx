import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { CaseStudyCard } from "@/components/cards";
import { CASE_STUDIES } from "@/data/case-studies";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "In-depth breakdowns of challenges, solutions, and measurable results from real Apexon Development projects.",
  path: "/case-studies",
});

export default function CaseStudiesHubPage() {
  return (
    <PageLayout path="/case-studies">
      <Hero eyebrow="Case Studies" title="Proof, not promises" description="Every case study covers the real challenge, our approach, and the measurable result." />
      <Section tone="muted">
        <Container className="flex flex-col gap-6">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              coverImage={c.coverImage}
              industryLabel={INDUSTRIES_NAV.find((i) => i.slug === c.industry)?.name ?? c.industry}
              headlineMetric={c.metrics[0] ? `${c.metrics[0].value} ${c.metrics[0].label}` : undefined}
            />
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
