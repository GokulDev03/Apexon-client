import { siteConfig } from "@/config/site.config";

interface OpenGraphInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}

export function buildOpenGraph({ title, description, url, image, type = "website" }: OpenGraphInput) {
  return {
    title,
    description,
    url,
    siteName: siteConfig.name,
    images: [{ url: image ?? siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    locale: siteConfig.locale,
    type,
  };
}
