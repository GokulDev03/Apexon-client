import { siteConfig } from "@/config/site.config";

/** Build an absolute canonical URL from a site-relative path. */
export function buildCanonical(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}
