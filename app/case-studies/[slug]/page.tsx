import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/data/case-studies";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { SERVICES_NAV } from "@/constants/services";
import { TESTIMONIALS } from "@/data/testimonials";
import { breadcrumbSchema } from "@/seo/jsonld";
import { siteConfig } from "@/config/site.config";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return buildMetadata({ title: `${study.title} | Case Study`, description: study.challenge, path: `/case-studies/${study.slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const industry = INDUSTRIES_NAV.find((i) => i.slug === study.industry);
  const service = SERVICES_NAV.find((s) => s.slug === study.service);
  const testimonial = study.testimonialId ? TESTIMONIALS.find((t) => t.id === study.testimonialId) : undefined;

  return (
    <PageLayout path={`/case-studies/${study.slug}`} labels={{ [study.slug]: study.title }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              [{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: study.title, href: `/case-studies/${study.slug}` }],
              siteConfig.url
            )
          ),
        }}
      />
      <Section tone="light" className="pt-8">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {industry && <Badge tone="brand">{industry.name}</Badge>}
            {service && <Badge tone="neutral">{service.name}</Badge>}
            {study.timeline && <Badge tone="neutral">{study.timeline}</Badge>}
          </div>
          <h1 className="max-w-3xl font-display text-4xl tracking-tight md:text-5xl">{study.title}</h1>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-ink-100">
            <Image src={study.coverImage} alt={study.title} fill className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="flex flex-wrap justify-center gap-6">
            {study.metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center gap-1 rounded-card border border-ink-200 bg-white px-8 py-6 text-center shadow-soft">
                <span className="font-display text-3xl text-brand-600">{m.value}</span>
                <span className="text-sm text-ink-500">{m.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="mx-auto flex max-w-3xl flex-col gap-10">
          <div>
            <h2 className="mb-3 font-display text-2xl text-ink-900">The Challenge</h2>
            <p className="text-ink-600">{study.challenge}</p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-2xl text-ink-900">Our Approach</h2>
            <p className="text-ink-600">{study.approach}</p>
          </div>
        </Container>
      </Section>

      {testimonial && (
        <Section tone="muted">
          <Container className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-ink-800">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-4 font-medium text-ink-900">{testimonial.authorName}</p>
            <p className="text-sm text-ink-500">{testimonial.authorRole}, {testimonial.companyName}</p>
          </Container>
        </Section>
      )}

      {study.portfolioSlug && (
        <Section tone="light">
          <Container className="text-center">
            <Button href={`/portfolio/${study.portfolioSlug}`} variant="secondary">View Full Project in Portfolio</Button>
          </Container>
        </Section>
      )}

      <FooterCTASection title="Want to be our next case study?" />
    </PageLayout>
  );
}
