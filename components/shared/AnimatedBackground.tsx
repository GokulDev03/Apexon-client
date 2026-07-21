import { cn } from "@/lib/utils";
import { GradientBlob } from "./GradientBlob";

/** Composed background for hero/CTA sections: subtle grid + two offset gradient blobs. */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
      <GradientBlob tone="brand" className="-left-40 -top-40" />
      <GradientBlob tone="accent" className="-bottom-40 -right-40" />
    </div>
  );
}
