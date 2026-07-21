import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { LegalLayout } from "@/layouts/LegalLayout";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Apexon Development uses cookies and similar tracking technologies.",
  path: "/legal/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="July 21, 2026">
      <p>
        This Cookie Policy explains how {COMPANY_INFO.name} uses cookies and similar technologies on this website. This is a
        template — pair it with a real consent-management tool (cookie banner) before launch if you operate in jurisdictions
        requiring opt-in consent (e.g. EU/UK).
      </p>
      <h2>What Are Cookies</h2>
      <p>Cookies are small text files stored on your device that help websites function and collect usage information.</p>
      <h2>Cookies We Use</h2>
      <p>Essential cookies (required for core site functionality) and analytics cookies (to understand how visitors use the site). We do not currently use third-party advertising cookies.</p>
      <h2>Managing Cookies</h2>
      <p>You can control or delete cookies through your browser settings. Disabling essential cookies may affect site functionality.</p>
      <h2>Contact</h2>
      <p>Questions can be directed to {COMPANY_INFO.email}.</p>
    </LegalLayout>
  );
}
