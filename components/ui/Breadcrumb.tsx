import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbSegment } from "@/seo/breadcrumb-helper";

export function Breadcrumb({ segments }: { segments: BreadcrumbSegment[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-500">
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        return (
          <span key={segment.href} className="flex items-center gap-1.5">
            {isLast ? (
              <span className="font-medium text-ink-900" aria-current="page">
                {segment.label}
              </span>
            ) : (
              <Link href={segment.href} className="hover:text-brand-600">
                {segment.label}
              </Link>
            )}
            {!isLast && <ChevronRight size={14} className="text-ink-300" />}
          </span>
        );
      })}
    </nav>
  );
}
