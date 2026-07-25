import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { SERVICES_NAV } from "@/constants/services";
import { SERVICES } from "@/data/services";
import { ArrowRight } from "lucide-react";

/** Homepage "Services Overview" — blueprint Step 4.4. */
export function ServicesSection() {
  return (
    <Section tone="muted">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
  eyebrow="Our Services"
  title="Website Development, Web Applications & Custom Software Services"
  description="Apexon Tech provides website development, custom web applications, e-commerce development, UI/UX design, SEO services, API integration, AI automation and long-term website maintenance for businesses of all sizes."
/>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_NAV.map((service) => {
            const full = SERVICES.find((s) => s.slug === service.slug);
            return (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                icon={service.icon}
                shortDescription={full?.shortDescription || "Learn how this service can move your project forward."}
              />
            );
          })}
        </div>
        <Button href="/services" variant="secondary" icon={<ArrowRight size={16} />}>
          Explore Our Services
        </Button>
      </Container>
    </Section>
  );
}
