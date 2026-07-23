"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { AnimatedBackground } from "./AnimatedBackground";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  actions?: ReactNode;
  belowActions?: ReactNode;
  visual?: ReactNode;
  align?: "left" | "center" | "split";
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
export function Hero({
  eyebrow,
  title,
  description,
  actions,
  belowActions,
  visual,
  align = "center",
  tone = "light",
  className,
}: HeroProps) {
  const isSplit = align === "split";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-section-lg",
        tone === "dark" ? "bg-ink-950 text-white" : "bg-ink-50",
        className
      )}
    >
      <AnimatedBackground />
      <Container
        className={cn(
          isSplit
            ? "grid items-center gap-12 lg:grid-cols-2"
            : "flex flex-col gap-6",
          !isSplit && (align === "center" ? "items-center text-center" : "items-start text-left")
        )}
      >
        {/* Left / text column */}
        <div className={cn(isSplit && "flex flex-col items-start gap-6 text-left")}>
          {eyebrow && (
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 rounded-pill bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-500 shadow-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="max-w-3xl font-display text-4xl tracking-tight md:text-6xl"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className={cn(
                "max-w-2xl text-lg",
                tone === "dark" ? "text-ink-300" : "text-ink-600"
              )}
            >
              {description}
            </motion.p>
          )}
          {actions && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-2 flex flex-wrap items-center gap-4"
            >
              {actions}
            </motion.div>
          )}
          {belowActions && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-4"
            >
              {belowActions}
            </motion.div>
          )}
        </div>

        {/* Right / visual column */}
        {isSplit && visual && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {visual}
          </motion.div>
        )}
      </Container>
    </section>
  );
}