import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  slug: string;
  name: string;
  icon: string;
  className?: string;
}

/** Used in the homepage "Technologies" logo grid and the /technologies hub. */
export function TechnologyCard({ slug, name, icon, className }: TechnologyCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Code;

  return (
    <Link
      href={`/technologies/${slug}`}
      className={cn(
        "flex flex-col items-center gap-3 rounded-card border border-ink-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft",
        className
      )}
    >
      <Icon size={28} className="text-ink-500 transition-colors group-hover:text-brand-600" />
      <span className="text-sm font-medium text-ink-800">{name}</span>
    </Link>
  );
}
