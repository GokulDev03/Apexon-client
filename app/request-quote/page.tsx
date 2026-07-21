import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, QuoteRequestForm } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description: "Tell us about your project and get a fixed-price quote — no obligation, no pressure.",
  path: "/request-quote",
});

export default function RequestQuotePage() {
  return (
    <PageLayout path="/request-quote">
      <Hero eyebrow="Request a Quote" title="Get a fixed-price quote for your project" description="Tell us a bit about what you need — we'll come back with a clear scope and price, usually within two business days." align="left" />
      <Section tone="muted">
        <Container className="mx-auto max-w-2xl">
          <Card>
            <QuoteRequestForm />
          </Card>
        </Container>
      </Section>
    </PageLayout>
  );
}
