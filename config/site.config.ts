import { COMPANY_INFO } from "@/constants/company";

export const siteConfig = {
  name: COMPANY_INFO.name,
  tagline: COMPANY_INFO.tagline,
  url: COMPANY_INFO.siteUrl,
  ogImage: `${COMPANY_INFO.siteUrl}/images/og-default.jpg`,
  locale: "en_US",
  themeColor: "#4F46E5",
} as const;
