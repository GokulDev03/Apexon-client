import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechnologyCard } from "@/components/cards";
import { TECHNOLOGIES_NAV } from "@/constants/technologies";
import { PageLayout } from "@/layouts/PageLayout";
import { FooterCTASection } from "@/sections";

export const metadata: Metadata = buildMetadata({
  title: "Our Technology Stack",
  description: "The frontend, backend, database, and cloud technologies we use to build fast, reliable software.",
  path: "/technologies",
});

const LAYERS: { key: "frontend" | "backend" | "database" | "platform" | "cloud"; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & Data" },
  { key: "database", label: "Databases" },
  { key: "platform", label: "Platforms" },
  { key: "cloud", label: "Cloud & Integration" },
];

export default function TechnologiesHubPage() {
  return (
    <PageLayout path="/technologies">
      <Hero eyebrow="Technologies" title="Modern technology, chosen for the job" description="We don't chase every new framework — we use a stable, proven stack matched to what your project actually needs." />
      {LAYERS.map((layer) => {
        const techs = TECHNOLOGIES_NAV.filter((t) => t.layer === layer.key);
        if (techs.length === 0) return null;
        return (
          <Section key={layer.key} tone={layer.key === "frontend" || layer.key === "database" ? "muted" : "light"}>
            <Container className="flex flex-col items-center gap-10">
              <SectionHeading eyebrow={layer.label} title={layer.label} />
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {techs.map((t) => (
                  <TechnologyCard key={t.slug} {...t} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}
      <FooterCTASection />
    </PageLayout>
  );
}
