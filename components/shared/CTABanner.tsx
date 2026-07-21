import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { AnimatedBackground } from "./AnimatedBackground";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description?: string;
  actions: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Final-CTA band reused on the homepage and at the bottom of every internal page template. */
export function CTABanner({ title, description, actions, tone = "dark", className }: CTABannerProps) {
  return (
    <section className={cn("relative overflow-hidden py-section", tone === "dark" ? "bg-ink-950 text-white" : "bg-brand-50", className)}>
      <AnimatedBackground />
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
        {description && <p className={cn("max-w-xl text-lg", tone === "dark" ? "text-ink-300" : "text-ink-600")}>{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">{actions}</div>
      </Container>
    </section>
  );
}
