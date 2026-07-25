import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/utils/formatDate";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  readTimeMinutes: number;
}

export function BlogCard({ slug, title, excerpt, coverImage, category, publishedAt, readTimeMinutes }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block overflow-hidden rounded-card border border-ink-200 bg-white shadow-soft transition-shadow hover:shadow-raised">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
        <Image src={coverImage} alt="website blogs and cost" fill className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <Badge tone="brand">{category}</Badge>
        <h3 className="font-display text-lg text-ink-900">{title}</h3>
        <p className="line-clamp-2 text-sm text-ink-600">{excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-ink-400">
          <span>{formatDate(publishedAt)}</span>
          <span>·</span>
          <span>{readTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
