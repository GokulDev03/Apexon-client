import { CTABanner } from "@/components/shared";
import { Button } from "@/components/ui/Button";

/** Homepage final CTA band — blueprint Step 4.14. */
export function CTASection() {
  return (
    <CTABanner
      title="Ready to build something great?"
      description="Tell us about your project and we'll come back with a clear plan, timeline, and fixed-price quote."
      actions={
        <>
          <Button href="/book-consultation" size="lg">
            Book a Consultation
          </Button>
          <Button href="/request-quote" variant="ghost" size="lg" className="border-white/30 text-white hover:bg-white/10">
            Request a Quote
          </Button>
        </>
      }
    />
  );
}
