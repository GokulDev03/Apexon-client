import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "light" | "dark" | "muted";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  as?: "section" | "div";
}

const toneStyles: Record<SectionTone, string> = {
  light: "bg-ink-50 text-ink-900",
  dark: "bg-ink-950 text-white",
  muted: "bg-white text-ink-900",
};

/** Standard vertical rhythm wrapper for homepage/page sections (see Design System — Spacing). */
export function Section({ tone = "light", as = "section", className, ...props }: SectionProps) {
  const Tag = as;
  return (
    <Tag
      className={cn("py-section md:py-section-lg", toneStyles[tone], className)}
      {...props}
    />
  );
}
