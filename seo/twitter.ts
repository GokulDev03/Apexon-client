import { seoDefaults } from "@/config/seo.config";
import { siteConfig } from "@/config/site.config";

interface TwitterInput {
  title: string;
  description: string;
  image?: string;
}

export function buildTwitter({ title, description, image }: TwitterInput) {
  return {
    card: "summary_large_image" as const,
    site: seoDefaults.twitterHandle,
    title,
    description,
    images: [image ?? siteConfig.ogImage],
  };
}
