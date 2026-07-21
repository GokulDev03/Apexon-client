import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

interface PortfolioCardProps {
  slug: string;
  title: string;
  coverImage: string;
  industryLabel: string;
  serviceLabel: string;
}

export function PortfolioCard({ slug, title, coverImage, industryLabel, serviceLabel }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="group block overflow-hidden rounded-card border border-ink-200 bg-white shadow-soft transition-shadow hover:shadow-raised">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex gap-2">
          <Badge tone="brand">{industryLabel}</Badge>
          <Badge tone="neutral">{serviceLabel}</Badge>
        </div>
        <h3 className="font-display text-lg text-ink-900">{title}</h3>
      </div>
    </Link>
  );
}
