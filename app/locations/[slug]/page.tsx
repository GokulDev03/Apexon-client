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
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { localBusinessSchema } from "@/seo/jsonld";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.seo.title,
    description: location.seo.description,
    path: `/locations/${location.slug}`,
    keywords: [location.seo.mainKeyword, ...location.seo.secondaryKeywords],
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const services = SERVICES.filter((s) => location.servicesOffered.includes(s.slug));

  return (
    <PageLayout path={`/locations/${location.slug}`} labels={{ [location.slug]: location.city }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(location)) }} />
      <Hero
        eyebrow="Locations"
        title={`Software Development Company in ${location.city}`}
        description={location.heroDescription || `Local expertise, national-level delivery standards — serving businesses in ${location.city} and the surrounding area.`}
        actions={<Button href="/book-consultation" size="lg">{`Book a Consultation with Our ${location.city} Team`}</Button>}
      />

      {services.length > 0 && (
        <Section tone="muted">
          <Container className="flex flex-col items-center gap-12">
            <SectionHeading eyebrow="Services" title={`Available in ${location.city}`} />
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.slug} slug={s.slug} name={s.name} icon={s.icon} shortDescription={s.shortDescription} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {location.faqs.length > 0 && (
        <Section tone="light">
          <Container className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Local logistics" className="mb-10" />
            <FAQAccordion items={location.faqs.map((f, i) => ({ id: `${location.slug}-faq-${i}`, ...f }))} />
          </Container>
        </Section>
      )}

      <FooterCTASection title={`Book a consultation with our ${location.city} team`} />
    </PageLayout>
  );
}
