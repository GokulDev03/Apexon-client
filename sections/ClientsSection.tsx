import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

const CLIENT_LOGOS = ["Google", "Microsoft", "Zoho", "AWS", "Meta", "Twilio"];

export function ClientsSection() {
  return (
    <Section tone="light" className="py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wide text-ink-400">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-70">
          {CLIENT_LOGOS.map((name) => (
            <span key={name} className="text-2xl font-bold text-ink-700">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}