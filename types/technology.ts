export type TechnologyLayer = "frontend" | "backend" | "database" | "platform" | "cloud";

export interface Technology {
  slug: string;
  name: string;
  layer: TechnologyLayer;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  logo?: string;
  relatedServices: string[]; // service slugs
  relatedTechnologies: string[]; // technology slugs
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    mainKeyword: string;
    secondaryKeywords: string[];
  };
}
