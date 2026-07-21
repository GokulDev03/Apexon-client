import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { FAQS } from "@/data/faq";
import { FAQ_CATEGORIES } from "@/constants/faqs";
import { faqSchema } from "@/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: "Answers to common questions about pricing, process, support, and working with Apexon Development.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <PageLayout path="/faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer })))) }} />
      <Hero eyebrow="FAQ" title="Frequently asked questions" />
      <Section tone="muted">
        <Container className="mx-auto flex max-w-3xl flex-col gap-16">
          {FAQ_CATEGORIES.map((cat) => {
            const items = FAQS.filter((f) => f.category === cat.value);
            if (items.length === 0) return null;
            return (
              <div key={cat.value}>
                <SectionHeading align="left" title={cat.label} className="mb-8" />
                <FAQAccordion items={items} />
              </div>
            );
          })}
        </Container>
      </Section>
      <FooterCTASection title="Still have questions?" description="Reach out and we'll get back to you within one business day." />
    </PageLayout>
  );
}
