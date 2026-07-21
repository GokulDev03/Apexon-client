import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, ConsultationForm } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Book a Consultation",
  description: "Book a free 30-minute consultation to discuss your project — no pressure, just a clear next step.",
  path: "/book-consultation",
});

const POINTS = ["No-pressure, 30-minute call", "Come away with a clear next step", "Free, even if you don't move forward with us"];

export default function BookConsultationPage() {
  return (
    <PageLayout path="/book-consultation">
      <Hero eyebrow="Book a Consultation" title="Let's talk through your project" description="Pick a time that works for you — we'll come prepared with questions, not a sales pitch." align="left" />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-1">
            {POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="text-sm text-ink-700">{p}</span>
              </div>
            ))}
          </div>
          <Card className="lg:col-span-2">
            <ConsultationForm />
          </Card>
        </Container>
      </Section>
    </PageLayout>
  );
}
