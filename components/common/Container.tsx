import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Max-width content wrapper — matches the Tailwind `container` config in tailwind.config.ts. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container", className)} {...props} />;
}
