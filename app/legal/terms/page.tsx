import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { LegalLayout } from "@/layouts/LegalLayout";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "The terms governing use of the Apexon Development website and services.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updatedAt="July 21, 2026">
      <p>
        These Terms of Service govern your use of the {COMPANY_INFO.name} website and any services engaged through it. This is a
        template — have it reviewed by qualified legal counsel before publishing, and replace with terms specific to your actual
        service agreements/contracts.
      </p>
      <h2>Use of the Website</h2>
      <p>You agree to use this website only for lawful purposes and not to misuse or attempt to disrupt its normal operation.</p>
      <h2>Services</h2>
      <p>Specific project terms, deliverables, timelines, and payment schedules are governed by individual service agreements/contracts, not solely by this page.</p>
      <h2>Intellectual Property</h2>
      <p>Unless otherwise agreed in a signed contract, website content is owned by {COMPANY_INFO.name} and may not be reproduced without permission.</p>
      <h2>Limitation of Liability</h2>
      <p>{COMPANY_INFO.name} is not liable for indirect or consequential damages arising from use of this website, to the fullest extent permitted by law.</p>
      <h2>Changes to These Terms</h2>
      <p>We may update these terms periodically; continued use of the site constitutes acceptance of the current version.</p>
      <h2>Contact</h2>
      <p>Questions can be directed to {COMPANY_INFO.email}.</p>
    </LegalLayout>
  );
}
