import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection, StatsSection } from "@/sections";
import { Target, Handshake, Sparkles } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Apexon Development builds custom software, websites, and automation for businesses that want a partner, not just a vendor.",
  path: "/about",
});

const VALUES = [
  { icon: Target, title: "Outcomes over output", description: "We measure success by what the software does for your business, not lines of code shipped." },
  { icon: Handshake, title: "Straightforward partnership", description: "Clear scopes, honest timelines, and no surprise invoices — we'd rather earn trust than manage expectations after the fact." },
  { icon: Sparkles, title: "Craft matters", description: "Clean, documented, maintainable code — because software you can't extend later isn't really finished." },
];

export default function AboutPage() {
  return (
    <PageLayout path="/about">
      <Hero
        eyebrow="About Us"
        title="A development partner that acts like part of your team"
        description="We started Apexon Development because too many software projects were sold on promises and delivered as disappointments. We build differently."
      />

      <Section tone="muted">
        <Container className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <SectionHeading eyebrow="Our Story" title="Why we exist" />
          <p className="text-ink-600">
            We&apos;ve seen the same pattern too many times: a business hires an agency, gets a beautiful proposal, and ends up with a
            project that&apos;s late, over budget, or quietly abandoned after launch. Apexon Development was built around fixing that —
            transparent scoping, realistic timelines, and support that doesn&apos;t disappear the day the invoice is paid.
          </p>
        </Container>
      </Section>

      <StatsSection />

      <Section tone="light">
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading eyebrow="Values" title="What guides how we work" />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Card key={v.title} className="flex flex-col gap-4">
                <v.icon size={22} className="text-brand-600" />
                <h3 className="font-display text-lg text-ink-900">{v.title}</h3>
                <p className="text-sm text-ink-600">{v.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <FooterCTASection title="Want to work with us?" />
    </PageLayout>
  );
}
