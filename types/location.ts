export interface Location {
  slug: string;
  city: string;
  region?: string;
  country: string;
  heroDescription: string;
  latitude?: number;
  longitude?: number;
  servicesOffered: string[]; // service slugs
  localProofPoints: string[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    mainKeyword: string;
    secondaryKeywords: string[];
  };
}
