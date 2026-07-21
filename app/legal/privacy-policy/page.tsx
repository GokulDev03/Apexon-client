import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { LegalLayout } from "@/layouts/LegalLayout";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Apexon Development collects, uses, and protects your information.",
  path: "/legal/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="July 21, 2026">
      <p>
        This Privacy Policy explains how {COMPANY_INFO.name} (&quot;we&quot;, &quot;us&quot;) collects, uses, and protects
        information when you visit our website or engage our services. This is a template — have it reviewed by qualified
        legal counsel before publishing, as requirements vary by jurisdiction (e.g. GDPR, CCPA).
      </p>
      <h2>Information We Collect</h2>
      <p>We may collect contact details you submit via forms (name, email, company, phone), and standard analytics data (pages visited, device/browser type, approximate location).</p>
      <h2>How We Use Information</h2>
      <p>We use collected information to respond to inquiries, deliver services, improve our website, and, where you&apos;ve opted in, send occasional updates.</p>
      <h2>Data Sharing</h2>
      <p>We do not sell personal information. We may share data with service providers (e.g. hosting, email, analytics) solely to operate our business.</p>
      <h2>Your Rights</h2>
      <p>Depending on your location, you may have rights to access, correct, or delete your personal data. Contact us at {COMPANY_INFO.email} to make a request.</p>
      <h2>Cookies</h2>
      <p>See our <a href="/legal/cookie-policy">Cookie Policy</a> for details on how we use cookies and tracking technologies.</p>
      <h2>Contact</h2>
      <p>Questions about this policy can be directed to {COMPANY_INFO.email}.</p>
    </LegalLayout>
  );
}
