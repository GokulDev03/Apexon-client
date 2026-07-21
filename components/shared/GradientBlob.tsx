import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  tone?: "brand" | "accent";
}

/** Ambient decorative background blob — used behind hero copy and CTA bands. Purely visual, aria-hidden. */
export function GradientBlob({ className, tone = "brand" }: GradientBlobProps) {
  const gradient =
    tone === "brand"
      ? "from-brand-400/30 via-brand-300/10 to-transparent"
      : "from-accent-400/30 via-accent-300/10 to-transparent";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 h-[480px] w-[480px] rounded-full bg-gradient-to-br blur-3xl animate-float",
        gradient,
        className
      )}
    />
  );
}
