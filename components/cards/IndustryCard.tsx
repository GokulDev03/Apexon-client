import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface IndustryCardProps {
  slug: string;
  name: string;
  icon: string;
}

export function IndustryCard({ slug, name, icon }: IndustryCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Building;

  return (
    <Link href={`/industries/${slug}`}>
      <Card className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-accent-600">
          <Icon size={22} />
        </div>
        <span className="font-medium text-ink-800">{name}</span>
      </Card>
    </Link>
  );
}
