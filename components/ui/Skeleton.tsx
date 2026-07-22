"use client";

import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "shimmer" | "pulse";
}

/**
 * Base Skeleton component with premium shimmer or pulse effects.
 */
export function Skeleton({ className, variant = "shimmer", ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md bg-ink-200/50 dark:bg-ink-800/40",
        variant === "shimmer" ? "shimmer" : "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

/**
 * Skeleton component representing natural-looking text blocks.
 */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2.5 w-full", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4 rounded-pill",
            i === lines - 1 && lines > 1 ? "w-4/6" : i % 2 === 0 ? "w-11/12" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton component representing standard cards (e.g. services, portfolio, blog).
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "p-6 rounded-card border border-ink-200/30 dark:border-ink-800/30 bg-white/40 dark:bg-ink-900/10 backdrop-blur-sm space-y-4 shadow-soft",
        className
      )}
    >
      <Skeleton className="h-44 w-full rounded-md" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4 rounded-sm" />
        <Skeleton className="h-4 w-1/3 rounded-sm" />
      </div>
      <SkeletonText lines={2} className="pt-1" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-9 w-24 rounded-pill" />
      </div>
    </div>
  );
}

/**
 * Skeleton component representing a hero banner structure.
 */
export function SkeletonHero({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "py-16 lg:py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
        className
      )}
    >
      <div className="lg:col-span-7 space-y-6">
        <Skeleton className="h-5 w-32 rounded-pill bg-brand-500/10 dark:bg-brand-500/5" />
        <div className="space-y-4">
          <Skeleton className="h-10 lg:h-14 w-11/12 rounded-md" />
          <Skeleton className="h-10 lg:h-14 w-8/12 rounded-md" />
        </div>
        <SkeletonText lines={3} className="pt-2 max-w-lg" />
        <div className="flex flex-wrap gap-4 pt-4">
          <Skeleton className="h-11 w-36 rounded-pill" />
          <Skeleton className="h-11 w-32 rounded-pill" />
        </div>
      </div>
      <div className="lg:col-span-5 flex justify-center">
        <Skeleton className="h-[320px] lg:h-[400px] w-full max-w-[400px] rounded-card shadow-raised" />
      </div>
    </div>
  );
}
