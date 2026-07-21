import { CTABanner } from "@/components/shared";
import { Button } from "@/components/ui/Button";

/**
 * Secondary/contextual CTA band used mid-page on internal pages (service, industry,
 * technology, location templates) — lighter tone than the homepage's final CTASection.
 */
export function FooterCTASection({
  title = "Let's talk about your project",
  description = "Book a free 30-minute consultation — no pressure, just a clear next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <CTABanner
      tone="light"
      title={title}
      description={description}
      actions={
        <>
          <Button href="/book-consultation" size="lg">
            Book a Consultation
          </Button>
          <Button href="/request-quote" variant="secondary" size="lg">
            Request a Quote
          </Button>
        </>
      }
    />
  );
}
