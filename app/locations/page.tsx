import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { LOCATIONS_NAV } from "@/constants/locations";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";
import { MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Locations We Serve",
  description: "Find the Apexon Development team in your area, or work with us fully remote from anywhere.",
  path: "/locations",
});

export default function LocationsHubPage() {
  return (
    <PageLayout path="/locations">
      <Hero eyebrow="Locations" title="Local presence, remote-friendly delivery" description="Wherever you're based, we deliver the same process and quality — in person where it helps, remote where it's faster." />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS_NAV.map((loc) => (
            <Card key={loc.slug} className="flex flex-col gap-3">
              <MapPin size={20} className="text-brand-500" />
              <h3 className="font-display text-lg text-ink-900">{loc.city}</h3>
              <Button href={`/locations/${loc.slug}`} variant="text">View Details →</Button>
            </Card>
          ))}
        </Container>
      </Section>
      <FooterCTASection />
    </PageLayout>
  );
}
