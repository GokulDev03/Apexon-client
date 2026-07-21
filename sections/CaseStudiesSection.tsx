import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CaseStudyCard } from "@/components/cards";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/data/case-studies";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <Section tone="muted">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Proof, Not Promises" title="Case studies with real, measurable results" />
        {featured.length > 0 ? (
          <div className="flex w-full flex-col gap-6">
            {featured.map((study) => (
              <CaseStudyCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                coverImage={study.coverImage}
                industryLabel={INDUSTRIES_NAV.find((i) => i.slug === study.industry)?.name ?? study.industry}
                headlineMetric={study.metrics[0] ? `${study.metrics[0].value} ${study.metrics[0].label}` : undefined}
              />
            ))}
          </div>
        ) : (
          <p className="text-ink-500">Case studies will appear here as projects are published.</p>
        )}
        <Button href="/case-studies" variant="secondary" icon={<ArrowRight size={16} />}>
          View All Case Studies
        </Button>
      </Container>
    </Section>
  );
}
