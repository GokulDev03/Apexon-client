export interface Industry {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  challenges: { title: string; description: string }[];
  relatedServices: string[]; // service slugs
  relatedTechnologies: string[]; // technology slugs
  caseStudySlug?: string;
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    mainKeyword: string;
    secondaryKeywords: string[];
  };
}
