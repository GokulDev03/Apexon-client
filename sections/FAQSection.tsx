import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/shared";
import { Button } from "@/components/ui/Button";
import { FAQS } from "@/data/faq";

/** Homepage "FAQ Preview" — blueprint Step 4.12. Shows first 6; full list lives on /faq. */
export function FAQSection() {
  const preview = FAQS.slice(0, 6);

  return (
    <Section tone="muted">
      <Container className="mx-auto flex max-w-3xl flex-col items-center gap-10">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        {preview.length > 0 ? (
          <div className="w-full">
            <FAQAccordion items={preview} />
          </div>
        ) : (
          <p className="text-ink-500">FAQs will appear here once published.</p>
        )}
        <Button href="/faq" variant="text">
          View All FAQs →
        </Button>
      </Container>
    </Section>
  );
}
