import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "brand" | "accent" | "success" | "warning" | "error" | "neutral";

const toneStyles: Record<BadgeTone, string> = {
  brand: "bg-brand-50 text-brand-700",
  accent: "bg-accent-50 text-accent-700",
  success: "bg-success/10 text-green-700",
  warning: "bg-warning/10 text-amber-700",
  error: "bg-error/10 text-red-700",
  neutral: "bg-ink-100 text-ink-700",
};

export function Badge({
  tone = "neutral",
  children,
  className,
}: {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium tracking-wide",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
