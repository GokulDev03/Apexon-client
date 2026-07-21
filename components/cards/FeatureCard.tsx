import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-brand-50 text-brand-600">
        <Icon size={20} />
      </div>
      <h3 className="font-display text-lg text-ink-900">{title}</h3>
      <p className="text-sm text-ink-600">{description}</p>
    </Card>
  );
}
