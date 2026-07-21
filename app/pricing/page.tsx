import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageLayout } from "@/layouts/PageLayout";
import { getFAQsByCategory } from "@/data/faq";
import { Check } from "lucide-react";
import { faqSchema } from "@/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description: "Transparent, fixed-price quotes for websites, web applications, and custom software — no surprise invoices.",
  path: "/pricing",
});

const TIERS = [
  {
    name: "Starter",
    audience: "Small businesses & startups",
    priceNote: "Fixed-price, scoped after discovery",
    features: ["Custom-designed website (up to 8 pages)", "On-page SEO foundation", "CMS for self-managed edits", "2 weeks post-launch support"],
  },
  {
    name: "Growth",
    audience: "Medium businesses & ecommerce",
    priceNote: "Fixed-price, scoped after discovery",
    features: ["Website or web app with custom functionality", "Integrations (CRM, payments, email)", "On-page SEO + analytics setup", "30 days post-launch support"],
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "Enterprises & complex systems",
    priceNote: "Custom quote after technical discovery",
    features: ["Custom software or multi-system integration", "Dedicated project manager", "Security & compliance documentation support", "Ongoing support plan included"],
  },
];

export default function PricingPage() {
  const faqs = getFAQsByCategory("pricing");

  return (
    <PageLayout path="/pricing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))) }} />
      <Hero
        eyebrow="Pricing"
        title="Transparent pricing, no surprise invoices"
        description="Every project gets a fixed-price quote after a short discovery call — you'll know the full cost before any work begins."
      />

      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <Card key={tier.name} className={tier.featured ? "border-brand-500 shadow-glow" : undefined}>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-display text-2xl text-ink-900">{tier.name}</h3>
                  <p className="text-sm text-ink-500">{tier.audience}</p>
                </div>
                <p className="font-medium text-brand-600">{tier.priceNote}</p>
                <ul className="flex flex-col gap-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/request-quote" variant={tier.featured ? "primary" : "secondary"} className="mt-2">
                  Request a Quote
                </Button>
              </div>
            </Card>
          ))}
        </Container>
      </Section>

      <Section tone="light">
        <Container className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Pricing questions" className="mb-10" />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
    </PageLayout>
  );
}
