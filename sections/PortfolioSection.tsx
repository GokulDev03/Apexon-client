import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PortfolioCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { SERVICES_NAV } from "@/constants/services";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { ArrowRight } from "lucide-react";

/** Homepage "Portfolio Preview" — blueprint Step 4.7. */
export function PortfolioSection() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <Section tone="light">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Our Work" title="Real products, built for real businesses" />
        {featured.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <PortfolioCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                coverImage={project.coverImage}
                industryLabel={INDUSTRIES_NAV.find((i) => i.slug === project.industry)?.name ?? project.industry}
                serviceLabel={SERVICES_NAV.find((s) => s.slug === project.service)?.name ?? project.service}
              />
            ))}
          </div>
        ) : (
          <p className="text-ink-500">Featured projects will appear here once the portfolio is published.</p>
        )}
        <Button href="/portfolio" variant="secondary" icon={<ArrowRight size={16} />}>
          View Full Portfolio
        </Button>
      </Container>
    </Section>
  );
}
