import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { Hero, ContactForm } from "@/components/shared";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card } from "@/components/ui/Card";
import { PageLayout } from "@/layouts/PageLayout";
import { COMPANY_INFO } from "@/constants/company";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with Apexon Development — we typically respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageLayout path="/contact">
      <Hero eyebrow="Contact" title="Let's talk about your project" description="Fill out the form or reach us directly — we typically respond within one business day." align="left" />
      <Section tone="muted">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Card className="flex items-center gap-3">
              <Mail size={18} className="text-brand-500" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-ink-700 hover:text-brand-600">{COMPANY_INFO.email}</a>
            </Card>
            <Card className="flex items-center gap-3">
              <Phone size={18} className="text-brand-500" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-ink-700 hover:text-brand-600">{COMPANY_INFO.phone}</a>
            </Card>
            <Card className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-500" />
              <span className="text-sm text-ink-700">Remote-first, serving clients everywhere</span>
            </Card>
          </div>
          <Card className="lg:col-span-2">
            <ContactForm />
          </Card>
        </Container>
      </Section>
    </PageLayout>
  );
}
