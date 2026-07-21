import { COMPANY_INFO } from "@/constants/company";
import { SOCIAL_LINKS } from "@/constants/social-links";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: COMPANY_INFO.siteUrl,
    logo: `${COMPANY_INFO.siteUrl}/images/logo.png`,
    foundingDate: String(COMPANY_INFO.foundedYear),
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}
