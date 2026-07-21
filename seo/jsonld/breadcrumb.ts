import type { BreadcrumbSegment } from "../breadcrumb-helper";

export function breadcrumbSchema(segments: BreadcrumbSegment[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: segment.label,
      item: `${siteUrl}${segment.href}`,
    })),
  };
}
