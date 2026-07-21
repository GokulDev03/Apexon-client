import { Hero } from "@/components/shared";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

/** Homepage hero — blueprint Step 4.1. */
export function HeroSection() {
  return (
    <Hero
      eyebrow="Software Development Agency"
      title="Software that moves your business forward"
      description="We design and build websites, web apps, and custom software for startups through enterprise — on fixed timelines, with a team that stays after launch."
      actions={
        <>
          <Button href="/book-consultation" size="lg" icon={<ArrowRight size={18} />}>
            Book a Consultation
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Our Work
          </Button>
        </>
      }
    />
  );
}
