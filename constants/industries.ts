/**
 * Lightweight industry directory used for navigation, filters, and cross-links.
 * Full content lives in /data/industries.ts
 */
export interface IndustryNavItem {
  slug: string;
  name: string;
  icon: string;
}

export const INDUSTRIES_NAV: IndustryNavItem[] = [
  { slug: "startups", name: "Startups", icon: "Rocket" },
  { slug: "small-business", name: "Small Business", icon: "Store" },
  { slug: "medium-business", name: "Medium Business", icon: "Building" },
  { slug: "enterprise", name: "Enterprise", icon: "Building2" },
  { slug: "education", name: "Schools & Education", icon: "GraduationCap" },
  { slug: "healthcare", name: "Hospitals & Healthcare", icon: "HeartPulse" },
  { slug: "restaurants", name: "Restaurants", icon: "UtensilsCrossed" },
  { slug: "ecommerce", name: "Ecommerce", icon: "ShoppingCart" },
  { slug: "manufacturing", name: "Manufacturing", icon: "Factory" },
];
