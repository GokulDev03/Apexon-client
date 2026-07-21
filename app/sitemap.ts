import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { SERVICES_NAV } from "@/constants/services";
import { INDUSTRIES_NAV } from "@/constants/industries";
import { TECHNOLOGIES_NAV } from "@/constants/technologies";
import { LOCATIONS_NAV } from "@/constants/locations";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { CASE_STUDIES } from "@/data/case-studies";
import { BLOG_POSTS } from "@/data/blogs";

/**
 * Dynamic sitemap generator. Static routes + every dynamic slug
 * (services, industries, technologies, locations, portfolio, case
 * studies, blog) are included automatically as data is populated.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/pricing",
    "/industries",
    "/technologies",
    "/locations",
    "/careers",
    "/faq",
    "/testimonials",
    "/process",
    "/why-choose-us",
    "/book-consultation",
    "/request-quote",
    "/contact",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/cookie-policy",
    "/legal/refund-policy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const dynamicRoutes = [
    ...SERVICES_NAV.map((s) => `/services/${s.slug}`),
    ...INDUSTRIES_NAV.map((i) => `/industries/${i.slug}`),
    ...TECHNOLOGIES_NAV.map((t) => `/technologies/${t.slug}`),
    ...LOCATIONS_NAV.map((l) => `/locations/${l.slug}`),
    ...PORTFOLIO_PROJECTS.map((p) => `/portfolio/${p.slug}`),
    ...CASE_STUDIES.map((c) => `/case-studies/${c.slug}`),
    ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
