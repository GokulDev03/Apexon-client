export interface BreadcrumbSegment {
  label: string;
  href: string;
}

/** Build breadcrumb segments from a URL path, capitalizing/segmenting for display. */
export function buildBreadcrumbs(path: string, labels?: Record<string, string>): BreadcrumbSegment[] {
  const parts = path.split("/").filter(Boolean);
  let href = "";

  return [
    { label: "Home", href: "/" },
    ...parts.map((part) => {
      href += `/${part}`;
      const label = labels?.[part] ?? part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      return { label, href };
    }),
  ];
}
