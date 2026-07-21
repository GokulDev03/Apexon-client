import type { NavItem } from "@/types/navigation";
import { SERVICES_NAV } from "./services";
import { INDUSTRIES_NAV } from "./industries";
import { TECHNOLOGIES_NAV } from "./technologies";

export const MAIN_NAV: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    megaMenu: {
      label: "Services",
      href: "/services",
      columns: [
        {
          title: "Development",
          links: SERVICES_NAV.filter((s) =>
            ["website-development", "web-application-development", "custom-software-development", "api-development"].includes(s.slug)
          ).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
        },
        {
          title: "Design & Growth",
          links: SERVICES_NAV.filter((s) =>
            ["ui-ux-design", "seo-services", "business-automation", "website-maintenance"].includes(s.slug)
          ).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
        },
        {
          title: "By Industry",
          links: INDUSTRIES_NAV.slice(0, 5).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
        },
      ],
      featured: {
        title: "Featured case study",
        description: "See how we helped a client scale with a custom platform.",
        href: "/case-studies",
        image: "/images/featured-case-study.jpg",
      },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      label: "Industries",
      href: "/industries",
      columns: [
        {
          title: "Business",
          links: INDUSTRIES_NAV.filter((i) =>
            ["startups", "small-business", "medium-business", "enterprise"].includes(i.slug)
          ).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
        },
        {
          title: "Specialized",
          links: INDUSTRIES_NAV.filter((i) =>
            ["education", "healthcare", "restaurants", "ecommerce", "manufacturing"].includes(i.slug)
          ).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
        },
      ],
    },
  },
  {
    label: "Technologies",
    href: "/technologies",
    megaMenu: {
      label: "Technologies",
      href: "/technologies",
      columns: [
        {
          title: "Frontend",
          links: TECHNOLOGIES_NAV.filter((t) => t.layer === "frontend").map((t) => ({ label: t.name, href: `/technologies/${t.slug}` })),
        },
        {
          title: "Backend & Data",
          links: TECHNOLOGIES_NAV.filter((t) => t.layer === "backend" || t.layer === "database").map((t) => ({ label: t.name, href: `/technologies/${t.slug}` })),
        },
        {
          title: "Platforms & Cloud",
          links: TECHNOLOGIES_NAV.filter((t) => t.layer === "platform" || t.layer === "cloud").map((t) => ({ label: t.name, href: `/technologies/${t.slug}` })),
        },
      ],
    },
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const MOBILE_NAV: NavItem[] = MAIN_NAV;

export const FOOTER_NAV = {
  services: SERVICES_NAV.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Process", href: "/process" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Locations", href: "/locations" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Refund Policy", href: "/legal/refund-policy" },
  ],
};
