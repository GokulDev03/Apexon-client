import { COMPANY_INFO } from "@/constants/company";
import type { Service } from "@/types/service";

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.heroDescription || service.shortDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.siteUrl,
    },
    url: `${COMPANY_INFO.siteUrl}/services/${service.slug}`,
  };
}
