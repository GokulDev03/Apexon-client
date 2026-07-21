/**
 * Lightweight location directory. Populate with real launch markets.
 * Full content lives in /data/locations.ts
 */
export interface LocationNavItem {
  slug: string;
  city: string;
  country: string;
}

export const LOCATIONS_NAV: LocationNavItem[] = [
  // Example placeholders — replace with real service-area cities before launch.
  { slug: "city-1", city: "City One", country: "Country" },
  { slug: "city-2", city: "City Two", country: "Country" },
];
