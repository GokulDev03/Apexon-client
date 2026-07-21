import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { IndustryCard } from "@/components/cards";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";

export const metadata: Metadata = buildMetadata({
  title: "Software Development by Industry",
  description: "Industry-specific software solutions for startups, enterprises, schools, hospitals, restaurants, ecommerce, manufacturing, and more.",
  path: "/industries",
});

export default function IndustriesHubPage() {
  return (
    <PageLayout path="/industries">
      <Hero eyebrow="Industries" title="Software that understands your industry" description="Every sector has different constraints — we build with yours in mind from day one." />
      <Section tone="muted">
        <Container className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES_NAV.map((i) => (
            <IndustryCard key={i.slug} {...i} />
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
