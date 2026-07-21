import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

const CLIENT_LOGOS = ["client-1", "client-2", "client-3", "client-4", "client-5", "client-6"];

/** Homepage "Trusted By" logo strip — blueprint Step 4.2. Replace slugs with real client SVGs before launch. */
export function ClientsSection() {
  return (
    <Section tone="light" className="py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wide text-ink-400">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
          {CLIENT_LOGOS.map((slug) => (
            <div key={slug} className="h-8 w-28 rounded bg-ink-200" aria-label={slug} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
