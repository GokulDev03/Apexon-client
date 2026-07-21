import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import { SERVICES } from "@/data/services";
import { getCaseStudyBySlug } from "@/data/case-studies";
import { AlertCircle } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${industry.slug}`,
    keywords: [industry.seo.mainKeyword, ...industry.seo.secondaryKeywords],
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = SERVICES.filter((s) => industry.relatedServices.includes(s.slug));
  const caseStudy = industry.caseStudySlug ? getCaseStudyBySlug(industry.caseStudySlug) : undefined;

  return (
    <PageLayout path={`/industries/${industry.slug}`} labels={{ [industry.slug]: industry.name }}>
      <Hero
        eyebrow="Industries"
        title={`Software Solutions for ${industry.name}`}
        description={industry.heroDescription}
        actions={<Button href="/book-consultation" size="lg">Talk to Our Team</Button>}
      />

      <Section tone="muted">
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading eyebrow="Challenges" title={`What makes ${industry.name.toLowerCase()} different`} />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {industry.challenges.map((c) => (
              <Card key={c.title} className="flex flex-col gap-3">
                <AlertCircle size={20} className="text-accent-500" />
                <h3 className="font-display text-lg text-ink-900">{c.title}</h3>
                <p className="text-sm text-ink-600">{c.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {relatedServices.length > 0 && (
        <Section tone="light">
          <Container className="flex flex-col items-center gap-12">
            <SectionHeading eyebrow="How We Help" title="Relevant services" />
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} name={s.name} icon={s.icon} shortDescription={s.shortDescription} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {caseStudy && (
        <Section tone="muted">
          <Container className="flex flex-col items-center gap-6 text-center">
            <SectionHeading eyebrow="Case Study" title={caseStudy.title} />
            <Button href={`/case-studies/${caseStudy.slug}`} variant="secondary">Read the Case Study</Button>
          </Container>
        </Section>
      )}

      {industry.faqs.length > 0 && (
        <Section tone="light">
          <Container className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-10" />
            <FAQAccordion items={industry.faqs.map((f, i) => ({ id: `${industry.slug}-faq-${i}`, ...f }))} />
          </Container>
        </Section>
      )}

      <FooterCTASection title={`Let's talk about software for ${industry.name.toLowerCase()}`} />
    </PageLayout>
  );
}
