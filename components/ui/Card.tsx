import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Base surface used by all card-family components (see components/cards). */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-ink-200 bg-white p-6 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-raised",
        className
      )}
      {...props}
    />
  );
}
