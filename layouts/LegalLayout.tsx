import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";

/** Simple, calm layout for legal/policy pages — no animation, per Image Strategy (Step 9). */
export function LegalLayout({ title, updatedAt, children }: { title: string; updatedAt: string; children: ReactNode }) {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="font-display text-4xl text-ink-900">{title}</h1>
      <p className="mt-2 text-sm text-ink-500">Last updated: {updatedAt}</p>
      <div className="prose prose-ink mt-10 max-w-none">{children}</div>
    </Container>
  );
}
