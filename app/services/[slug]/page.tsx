import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, FAQAccordion } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ServiceCard, PortfolioCard, BlogCard } from "@/components/cards";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { TECHNOLOGIES_NAV } from "@/constants/technologies";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { getPortfolioByService } from "@/data/portfolio";
import { BLOG_POSTS } from "@/data/blogs";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/seo/jsonld";
import { siteConfig } from "@/config/site.config";
import { CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    keywords: [service.seo.mainKeyword, ...service.seo.secondaryKeywords],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => service.relatedServices.includes(s.slug));
  const relatedTech = TECHNOLOGIES_NAV.filter((t) => service.relatedTechnologies.includes(t.slug));
  const relatedIndustries = INDUSTRIES_NAV.filter((i) => service.relatedIndustries.includes(i.slug));
  const projects = getPortfolioByService(service.slug).slice(0, 3);
  const relatedBlogs = BLOG_POSTS.filter((b) => b.relatedServiceSlugs.includes(service.slug)).slice(0, 2);

  return (
    <PageLayout path={`/services/${service.slug}`} labels={{ [service.slug]: service.name }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name, href: `/services/${service.slug}` }],
              siteConfig.url
            )
          ),
        }}
      />

      <Hero
        eyebrow="Services"
        title={service.name}
        description={service.heroDescription}
        actions={
          <>
            <Button href="/request-quote" size="lg">Get a Free Quote</Button>
            <Button href="/book-consultation" variant="secondary" size="lg">Book a Consultation</Button>
          </>
        }
      />

      {/* Benefits */}
      <Section tone="muted">
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading eyebrow="Benefits" title={`Why businesses choose us for ${service.name.toLowerCase()}`} />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <Card key={b.title}>
                <h3 className="mb-2 font-display text-lg text-ink-900">{b.title}</h3>
                <p className="text-sm text-ink-600">{b.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section tone="light">
        <Container className="flex flex-col items-center gap-10">
          <SectionHeading eyebrow="What's Included" title="Everything covered in this service" />
          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-sm border border-ink-200 bg-white p-4">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="text-ink-700">{feature}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Technologies */}
      {relatedTech.length > 0 && (
        <Section tone="muted">
          <Container className="flex flex-col items-center gap-8">
            <SectionHeading eyebrow="Technologies" title="Built with tools chosen for the job" />
            <div className="flex flex-wrap justify-center gap-3">
              {relatedTech.map((t) => (
                <Button key={t.slug} href={`/technologies/${t.slug}`} variant="ghost" size="sm">{t.name}</Button>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Portfolio */}
      {projects.length > 0 && (
        <Section tone="light">
          <Container className="flex flex-col items-center gap-12">
            <SectionHeading eyebrow="Portfolio" title={`Recent ${service.name} projects`} />
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <PortfolioCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  coverImage={p.coverImage}
                  industryLabel={INDUSTRIES_NAV.find((i) => i.slug === p.industry)?.name ?? p.industry}
                  serviceLabel={service.name}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <Section tone="muted">
          <Container className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Common questions" className="mb-10" />
            <FAQAccordion items={service.faqs.map((f, i) => ({ id: `${service.slug}-faq-${i}`, ...f }))} />
          </Container>
        </Section>
      )}

      <FooterCTASection title={`Ready to start your ${service.name.toLowerCase()} project?`} />

      {/* Related services + blogs + industries */}
      <Section tone="light">
        <Container className="flex flex-col gap-16">
          {relatedServices.length > 0 && (
            <div>
              <SectionHeading align="left" eyebrow="Related Services" title="You might also need" className="mb-8" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {relatedServices.map((s) => (
                  <ServiceCard key={s.slug} slug={s.slug} name={s.name} icon={s.icon} shortDescription={s.shortDescription} />
                ))}
              </div>
            </div>
          )}

          {relatedBlogs.length > 0 && (
            <div>
              <SectionHeading align="left" eyebrow="Related Reading" title="From the blog" className="mb-8" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedBlogs.map((post) => (
                  <BlogCard key={post.slug} {...post} />
                ))}
              </div>
            </div>
          )}

          {relatedIndustries.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-ink-500">Common for:</span>
              {relatedIndustries.map((i) => (
                <Button key={i.slug} href={`/industries/${i.slug}`} variant="ghost" size="sm">{i.name}</Button>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </PageLayout>
  );
}
