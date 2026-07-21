import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { IndustryCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { ArrowRight } from "lucide-react";

/** Homepage "Industries We Serve" — blueprint Step 4.10. */
export function IndustriesSection() {
  return (
    <Section tone="light">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Industries" title="Software that understands your business" />
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES_NAV.map((industry) => (
            <IndustryCard key={industry.slug} {...industry} />
          ))}
        </div>
        <Button href="/industries" variant="secondary" icon={<ArrowRight size={16} />}>
          View All Industries
        </Button>
      </Container>
    </Section>
  );
}
