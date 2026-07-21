import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/ui/Badge";
import { PortfolioCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { PORTFOLIO_PROJECTS, getPortfolioBySlug } from "@/data/portfolio";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { SERVICES_NAV } from "@/constants/services";
import { TESTIMONIALS } from "@/data/testimonials";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} | Portfolio`,
    description: project.challenge,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const industry = INDUSTRIES_NAV.find((i) => i.slug === project.industry);
  const service = SERVICES_NAV.find((s) => s.slug === project.service);
  const testimonial = project.testimonialId ? TESTIMONIALS.find((t) => t.id === project.testimonialId) : undefined;
  const related = PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug && p.industry === project.industry).slice(0, 3);

  return (
    <PageLayout path={`/portfolio/${project.slug}`} labels={{ [project.slug]: project.title }}>
      <Section tone="light" className="pt-8">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {industry && <Badge tone="brand">{industry.name}</Badge>}
            {service && <Badge tone="neutral">{service.name}</Badge>}
          </div>
          <h1 className="max-w-3xl font-display text-4xl tracking-tight md:text-5xl">{project.title}</h1>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-ink-100">
            <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-display text-2xl text-ink-900">The Challenge</h2>
            <p className="text-ink-600">{project.challenge}</p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-2xl text-ink-900">The Solution</h2>
            <p className="text-ink-600">{project.solution}</p>
          </div>
        </Container>
      </Section>

      {project.results && project.results.length > 0 && (
        <Section tone="light">
          <Container>
            <h2 className="mb-6 text-center font-display text-2xl text-ink-900">Results</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {project.results.map((r) => (
                <div key={r} className="rounded-card border border-ink-200 bg-white px-6 py-4 text-center shadow-soft">
                  <p className="font-medium text-brand-600">{r}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {testimonial && (
        <Section tone="muted">
          <Container className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-ink-800">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-4 font-medium text-ink-900">{testimonial.authorName}</p>
            <p className="text-sm text-ink-500">{testimonial.authorRole}, {testimonial.companyName}</p>
          </Container>
        </Section>
      )}

      {related.length > 0 && (
        <Section tone="light">
          <Container className="flex flex-col gap-8">
            <h2 className="text-center font-display text-2xl text-ink-900">Related Projects</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <PortfolioCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  coverImage={p.coverImage}
                  industryLabel={INDUSTRIES_NAV.find((i) => i.slug === p.industry)?.name ?? p.industry}
                  serviceLabel={SERVICES_NAV.find((s) => s.slug === p.service)?.name ?? p.service}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FooterCTASection title="Want results like this for your project?" />
    </PageLayout>
  );
}
