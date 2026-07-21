import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { ShieldCheck, Clock, Code2, MessageSquare, Wallet, LifeBuoy } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose Us",
  description: "Senior engineers, transparent pricing, and a process built to remove risk — see what sets Apexon Development apart.",
  path: "/why-choose-us",
});

const REASONS = [
  { icon: Code2, title: "Senior engineers only", description: "No junior developers learning on your project — every engineer has shipped production software before." },
  { icon: Wallet, title: "Fixed, transparent pricing", description: "You get a quote before work starts, and we stick to it unless scope genuinely changes — with your sign-off." },
  { icon: Clock, title: "Realistic timelines", description: "We'd rather tell you 10 weeks and deliver in 9 than promise 6 and deliver in 12." },
  { icon: MessageSquare, title: "Weekly demos, not silence", description: "You see working software every week, not just a status email." },
  { icon: ShieldCheck, title: "You own everything", description: "Full source code and documentation handed over — no lock-in, no dependency on us to keep running." },
  { icon: LifeBuoy, title: "We don't disappear at launch", description: "Every project includes post-launch support, and ongoing plans are available after that." },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout path="/why-choose-us">
      <Hero eyebrow="Why Choose Us" title="A development partner that acts like part of your team" />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <Card key={r.title} className="flex flex-col gap-4">
              <r.icon size={22} className="text-brand-600" />
              <h3 className="font-display text-lg text-ink-900">{r.title}</h3>
              <p className="text-sm text-ink-600">{r.description}</p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section tone="light">
        <Container className="mx-auto max-w-2xl text-center">
          <SectionHeading title="Still comparing options?" description="Talk to us for 30 minutes — no pitch deck, just a straightforward conversation about your project." />
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
