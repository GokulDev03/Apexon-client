import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { getFAQsByCategory } from "@/data/faq";
import { Search, PenTool, Code2, Bug, Rocket } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Process",
  description: "Discovery, design, development, testing, and launch — a clear, structured process built to reduce project risk.",
  path: "/process",
});

const STEPS = [
  { icon: Search, title: "Discover", description: "We learn your business, users, and constraints through structured discovery sessions — this shapes the entire scope." },
  { icon: PenTool, title: "Design", description: "Wireframes and prototypes validate the experience before any production code is written." },
  { icon: Code2, title: "Develop", description: "Senior engineers build in short, demoable increments — you see working software every week, not just at the end." },
  { icon: Bug, title: "Test", description: "Functional, cross-browser, and accessibility testing before anything goes live." },
  { icon: Rocket, title: "Launch & Support", description: "We handle deployment, monitor closely post-launch, and stay available for the included support window." },
];

export default function ProcessPage() {
  const faqs = getFAQsByCategory("process");

  return (
    <PageLayout path="/process">
      <Hero eyebrow="Our Process" title="A process built to remove risk, not add it" description="Five stages, weekly visibility, and no surprises at the end." />

      <Section tone="muted">
        <Container className="mx-auto flex max-w-3xl flex-col gap-10">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <step.icon size={20} />
                </div>
                {i < STEPS.length - 1 && <div className="mt-2 h-full w-px bg-ink-200" />}
              </div>
              <div className="pb-6">
                <h3 className="font-display text-xl text-ink-900">{`${i + 1}. ${step.title}`}</h3>
                <p className="mt-1 text-ink-600">{step.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </Section>

      {faqs.length > 0 && (
        <Section tone="light">
          <Container className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Process questions" className="mb-10" />
            <FAQAccordion items={faqs} />
          </Container>
        </Section>
      )}

      <FooterCTASection />
    </PageLayout>
  );
}
