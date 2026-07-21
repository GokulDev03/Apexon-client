import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageLayout } from "@/layouts/PageLayout";
import { Laptop, Globe2, TrendingUp } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join Apexon Development — we're always looking for senior engineers and designers who care about craft.",
  path: "/careers",
});

const PERKS = [
  { icon: Laptop, title: "Remote-first", description: "Work from anywhere — we hire for output, not office hours." },
  { icon: TrendingUp, title: "Real ownership", description: "You'll work directly with clients and own meaningful pieces of real projects, not busywork." },
  { icon: Globe2, title: "Varied work", description: "Different industries and problems, not the same CRUD app on repeat." },
];

/**
 * Open roles are intentionally left empty here — wire this up to your ATS
 * or a `data/careers.ts` file once real openings exist. JobPosting schema
 * should be added per-role when populated.
 */
const OPEN_ROLES: { title: string; type: string; location: string }[] = [];

export default function CareersPage() {
  return (
    <PageLayout path="/careers">
      <Hero eyebrow="Careers" title="Build software that actually ships" description="We're a small, senior team — every hire matters, and every project is real client work from day one." />

      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PERKS.map((p) => (
            <Card key={p.title} className="flex flex-col gap-4">
              <p.icon size={22} className="text-brand-600" />
              <h3 className="font-display text-lg text-ink-900">{p.title}</h3>
              <p className="text-sm text-ink-600">{p.description}</p>
            </Card>
          ))}
        </Container>
      </Section>

      <Section tone="light">
        <Container className="flex flex-col items-center gap-8">
          <SectionHeading eyebrow="Open Roles" title="Current openings" />
          {OPEN_ROLES.length > 0 ? (
            <div className="w-full max-w-2xl divide-y divide-ink-200">
              {OPEN_ROLES.map((role) => (
                <div key={role.title} className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-medium text-ink-900">{role.title}</p>
                    <p className="text-sm text-ink-500">{role.type} · {role.location}</p>
                  </div>
                  <Button href="/contact" size="sm">Apply</Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-ink-500">
              No open roles right now — but we&apos;re always happy to hear from strong engineers and designers.{" "}
              <Button href="/contact" variant="text">Get in touch →</Button>
            </p>
          )}
        </Container>
      </Section>
    </PageLayout>
  );
}
