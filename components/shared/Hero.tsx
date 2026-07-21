"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { AnimatedBackground } from "./AnimatedBackground";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Shared hero shell reused across Home and every internal page template (blueprint Step 4.1 / Step 5). */
export function Hero({ eyebrow, title, description, actions, align = "center", tone = "light", className }: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-section-lg", tone === "dark" ? "bg-ink-950 text-white" : "bg-ink-50", className)}>
      <AnimatedBackground />
      <Container className={cn("flex flex-col gap-6", align === "center" ? "items-center text-center" : "items-start text-left")}>
        {eyebrow && (
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            {eyebrow}
          </motion.span>
        )}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="max-w-3xl font-display text-4xl tracking-tight md:text-6xl">
          {title}
        </motion.h1>
        {description && (
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className={cn("max-w-2xl text-lg", tone === "dark" ? "text-ink-300" : "text-ink-600")}>
            {description}
          </motion.p>
        )}
        {actions && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-2 flex flex-wrap items-center gap-4">
            {actions}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
