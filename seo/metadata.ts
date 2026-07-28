import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { seoDefaults } from "@/config/seo.config";
import { buildOpenGraph } from "./opengraph";
import { buildTwitter } from "./twitter";
import { buildCanonical } from "./canonical";

export interface PageSeoInput {
  title: string;
  description: string;
  path: string; // e.g. "/services/website-development"
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Central metadata factory. Call from each route's `generateMetadata()`
 * so every page gets consistent title templating, canonical URL,
 * OpenGraph, and Twitter card data without duplicating boilerplate.
 */
export function generateMetadata(input: PageSeoInput): Metadata {
  const { title, description, path, image, noIndex, keywords } = input;
  const url = buildCanonical(path);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: buildOpenGraph({ title, description, url, image }),
    twitter: buildTwitter({ title, description, image }),
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: seoDefaults.defaultTitle,
    template: seoDefaults.titleTemplate,
  },
  description: seoDefaults.defaultDescription,
  metadataBase: new URL(siteConfig.url),
  verification: {
  google: "pqpD2RfrUGyCzweVTLBGmu4lw9xvc3i5toDrcJIToOM",
},
};
