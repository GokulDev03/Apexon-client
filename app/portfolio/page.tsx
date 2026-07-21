import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { PortfolioCard } from "@/components/cards";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { SERVICES_NAV } from "@/constants/services";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";

export const metadata: Metadata = buildMetadata({
  title: "Our Portfolio",
  description: "Real projects delivered for real businesses — browse work across industries and services.",
  path: "/portfolio",
});

export default function PortfolioHubPage() {
  return (
    <PageLayout path="/portfolio">
      <Hero eyebrow="Portfolio" title="Real products, built for real businesses" />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((p) => (
            <PortfolioCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              coverImage={p.coverImage}
              industryLabel={INDUSTRIES_NAV.find((i) => i.slug === p.industry)?.name ?? p.industry}
              serviceLabel={SERVICES_NAV.find((s) => s.slug === p.service)?.name ?? p.service}
            />
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
