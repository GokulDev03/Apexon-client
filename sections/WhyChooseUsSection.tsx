import { Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/shared";

const REASONS = [
  "Senior engineers only — no learning on your dime",
  "Weekly demos, not radio silence between milestones",
  "Code you own outright, with clean documentation",
  "Straightforward contracts, no lock-in tactics",
];

/** Homepage "Why Choose Us" split section — blueprint Step 4.6. */
export function WhyChooseUsSection() {
  return (
    <Section tone="muted" className="relative overflow-hidden">
      <GradientBlob tone="accent" className="right-0 top-0" />
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">Why Choose Us</span>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            A development partner that acts like part of your team
          </h2>
          <ul className="flex flex-col gap-3">
            {REASONS.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-ink-700">
                <Check size={18} className="mt-0.5 shrink-0 text-brand-500" />
                {reason}
              </li>
            ))}
          </ul>
          <Button href="/why-choose-us" variant="text" className="mt-2">
            See why teams choose Apexon →
          </Button>
        </div>
        <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-brand-100 via-white to-accent-100" />
      </Container>
    </Section>
  );
}
