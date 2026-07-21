import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow && <Badge tone="brand">{eyebrow}</Badge>}
      <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-4xl">{title}</h2>
      {description && <p className="max-w-xl text-lg text-ink-600">{description}</p>}
    </div>
  );
}
