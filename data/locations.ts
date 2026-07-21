import type { Location } from "@/types/location";
import { LOCATIONS_NAV } from "@/constants/locations";

export const LOCATIONS: Location[] = LOCATIONS_NAV.map((nav) => ({
  slug: nav.slug,
  city: nav.city,
  country: nav.country,
  heroDescription: "", // TODO
  servicesOffered: [], // TODO
  localProofPoints: [], // TODO — must be genuine, unique per city (see blueprint Step 2.28 note)
  faqs: [],
  seo: {
    title: "",
    description: "",
    mainKeyword: "",
    secondaryKeywords: [],
  },
}));

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
