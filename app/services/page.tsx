import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { ServiceCard } from "@/components/cards";
import { SERVICES } from "@/data/services";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { breadcrumbSchema } from "@/seo/jsonld";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services",
  description: "Website development, web applications, custom software, SEO, UI/UX design, automation, API development, and maintenance — under one roof.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <PageLayout path="/services">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Services", href: "/services" }], siteConfig.url)) }}
      />
      <Hero
        eyebrow="Services"
        title="Everything you need to build and grow, in one place"
        description="From your first line of code to long-term support — we cover the full lifecycle of a software product."
      />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} slug={service.slug} name={service.name} icon={service.icon} shortDescription={service.shortDescription} />
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
