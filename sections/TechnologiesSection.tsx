import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechnologyCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { TECHNOLOGIES_NAV } from "@/constants/technologies";
import { ArrowRight } from "lucide-react";

/** Homepage "Technologies" logo grid — blueprint Step 4.9. */
export function TechnologiesSection() {
  return (
    <Section tone="muted">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Our Stack" title="Modern technology, chosen for the job" />
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TECHNOLOGIES_NAV.map((tech) => (
            <TechnologyCard key={tech.slug} {...tech} />
          ))}
        </div>
        <Button href="/technologies" variant="secondary" icon={<ArrowRight size={16} />}>
          Explore Our Tech Stack
        </Button>
      </Container>
    </Section>
  );
}
