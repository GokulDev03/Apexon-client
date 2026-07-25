import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Card } from "@/components/ui/Card";

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string; // lucide-react icon name, resolved dynamically below
}

export function ServiceCard({ slug, name, shortDescription, icon }: ServiceCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Sparkles;

  return (
    <Link href={`/services/${slug} `}>
      
      <Card className="group flex h-full flex-col gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
          <Icon size={20} />
        </div>
        <h3 className="font-display text-lg text-ink-900">{name}</h3>
        <p className="flex-1 text-sm text-ink-600">{shortDescription}</p>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-600">
          Learn more about {name}
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Card>
    </Link>
  );
}
