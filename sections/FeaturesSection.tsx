import { CheckCircle2, Timer, Users, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/cards";

const FEATURES = [
  { icon: CheckCircle2, title: "Fixed, Transparent Pricing", description: "Know your investment upfront — no surprise invoices, no scope creep without sign-off." },
  { icon: Users, title: "A Dedicated Project Manager", description: "One point of contact who knows your project inside out, from kickoff to launch." },
  { icon: Timer, title: "Realistic, Honest Timelines", description: "We plan around your real launch date, not an optimistic one we quietly slip." },
  { icon: ShieldCheck, title: "Support After You Launch", description: "Every engagement includes a post-launch support window — we don't disappear at go-live." },
];

/** Homepage "What Sets Us Apart" — blueprint Step 4.5. */
export function FeaturesSection() {
  return (
    <Section tone="light">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading eyebrow="Why It Works" title="A process built to remove risk, not add it" />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
