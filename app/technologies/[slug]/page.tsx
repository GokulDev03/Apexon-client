import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { TECHNOLOGIES, getTechnologyBySlug } from "@/data/technologies";
import { SERVICES } from "@/data/services";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return TECHNOLOGIES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return {};
  return buildMetadata({
    title: tech.seo.title,
    description: tech.seo.description,
    path: `/technologies/${tech.slug}`,
    keywords: [tech.seo.mainKeyword, ...tech.seo.secondaryKeywords],
  });
}

export default async function TechnologyPage({ params }: Props) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();

  const relatedServices = SERVICES.filter((s) => tech.relatedServices.includes(s.slug));

  return (
    <PageLayout path={`/technologies/${tech.slug}`} labels={{ [tech.slug]: tech.name }}>
      <Hero
        eyebrow="Technology"
        title={`${tech.name} Development Services`}
        description={tech.heroDescription}
        actions={<Button href="/book-consultation" size="lg">{`Hire ${tech.name} Developers`}</Button>}
      />

      {relatedServices.length > 0 && (
        <Section tone="muted">
          <Container className="flex flex-col items-center gap-12">
            <SectionHeading eyebrow="Related Services" title={`Where we use ${tech.name}`} />
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedServices.map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} name={s.name} icon={s.icon} shortDescription={s.shortDescription} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {tech.faqs.length > 0 && (
        <Section tone="light">
          <Container className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-10" />
            <FAQAccordion items={tech.faqs.map((f, i) => ({ id: `${tech.slug}-faq-${i}`, ...f }))} />
          </Container>
        </Section>
      )}

      <FooterCTASection title={`Have a ${tech.name} project in mind?`} />
    </PageLayout>
  );
}
