/**
 * Lightweight technology directory used for navigation, filters, and cross-links.
 * Full content lives in /data/technologies.ts
 */
import type { TechnologyLayer } from "@/types/technology";

export interface TechnologyNavItem {
  slug: string;
  name: string;
  layer: TechnologyLayer;
  icon: string;
}

export const TECHNOLOGIES_NAV: TechnologyNavItem[] = [
  { slug: "nextjs", name: "Next.js", layer: "frontend", icon: "Layers" },
  { slug: "react", name: "React", layer: "frontend", icon: "Atom" },
  { slug: "typescript", name: "TypeScript", layer: "frontend", icon: "FileCode" },
  { slug: "nodejs", name: "Node.js", layer: "backend", icon: "Server" },
  { slug: "python-django", name: "Python / Django", layer: "backend", icon: "Terminal" },
  { slug: "php-laravel", name: "PHP / Laravel", layer: "backend", icon: "Code" },
  { slug: "sql-databases", name: "SQL Databases", layer: "database", icon: "Database" },
  { slug: "mongodb", name: "MongoDB", layer: "database", icon: "Leaf" },
  { slug: "wordpress", name: "WordPress", layer: "platform", icon: "Feather" },
  { slug: "shopify", name: "Shopify", layer: "platform", icon: "ShoppingBag" },
  { slug: "aws", name: "AWS Cloud", layer: "cloud", icon: "Cloud" },
  { slug: "api-integration", name: "API Integration", layer: "cloud", icon: "Network" },
];
