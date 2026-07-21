import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import { LegalLayout } from "@/layouts/LegalLayout";
import { COMPANY_INFO } from "@/constants/company";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy",
  description: "Apexon Development's refund and cancellation policy for client engagements.",
  path: "/legal/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" updatedAt="July 21, 2026">
      <p>
        This Refund Policy outlines general terms for payments made to {COMPANY_INFO.name}. This is a template — replace with
        terms matching your actual milestone/payment structure and have it reviewed by legal counsel.
      </p>
      <h2>Milestone Payments</h2>
      <p>Projects are typically billed in milestones tied to project phases. Payments for completed milestones are non-refundable once the associated work has been delivered and approved.</p>
      <h2>Cancellations</h2>
      <p>If a project is cancelled before a milestone is completed, you will be billed only for work completed up to that point, calculated on a pro-rata basis.</p>
      <h2>Retainer & Maintenance Plans</h2>
      <p>Monthly retainer and maintenance plans may be cancelled with notice as specified in your service agreement; unused hours within a billing period are not carried over or refunded unless otherwise agreed.</p>
      <h2>Contact</h2>
      <p>Questions can be directed to {COMPANY_INFO.email}.</p>
    </LegalLayout>
  );
}
