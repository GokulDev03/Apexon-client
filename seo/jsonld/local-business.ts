import { COMPANY_INFO } from "@/constants/company";
import type { Location } from "@/types/location";

export function localBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${COMPANY_INFO.name} — ${location.city}`,
    url: `${COMPANY_INFO.siteUrl}/locations/${location.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    geo: location.latitude && location.longitude
      ? { "@type": "GeoCoordinates", latitude: location.latitude, longitude: location.longitude }
      : undefined,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
  };
}
