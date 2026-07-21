/**
 * Lightweight service directory used for navigation, filters, and cross-links.
 * Full content (benefits, features, FAQs, SEO copy) lives in /data/services.ts
 */
export interface ServiceNavItem {
  slug: string;
  name: string;
  icon: string; // lucide-react icon name
}

export const SERVICES_NAV: ServiceNavItem[] = [
  { slug: "website-development", name: "Website Development", icon: "Globe" },
  { slug: "web-application-development", name: "Web Application Development", icon: "LayoutDashboard" },
  { slug: "custom-software-development", name: "Custom Software Development", icon: "Code2" },
  { slug: "seo-services", name: "SEO Services", icon: "TrendingUp" },
  { slug: "ui-ux-design", name: "UI/UX Design", icon: "PenTool" },
  { slug: "business-automation", name: "Business Automation", icon: "Workflow" },
  { slug: "api-development", name: "API Development", icon: "Plug" },
  { slug: "website-maintenance", name: "Website Maintenance", icon: "Wrench" },
];
