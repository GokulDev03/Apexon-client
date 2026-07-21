import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  coverImage: string;
  industryLabel: string;
  headlineMetric?: string;
}

export function CaseStudyCard({ slug, title, coverImage, industryLabel, headlineMetric }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="group grid grid-cols-1 gap-6 rounded-card border border-ink-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-raised md:grid-cols-2 md:items-center">
      <div className="relative aspect-video overflow-hidden rounded-sm bg-ink-100">
        <Image src={coverImage} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">{industryLabel}</span>
        <h3 className="font-display text-xl text-ink-900">{title}</h3>
        {headlineMetric && <p className="font-display text-2xl text-brand-600">{headlineMetric}</p>}
        <span className="flex items-center gap-1 text-sm font-medium text-ink-700">
          Read case study
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
