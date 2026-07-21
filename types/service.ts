export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: string; // lucide-react icon name
  benefits: { title: string; description: string }[];
  features: string[];
  relatedTechnologies: string[]; // technology slugs
  relatedServices: string[]; // service slugs
  relatedIndustries: string[]; // industry slugs
  startingPrice?: string;
  faqs: ServiceFAQ[];
  seo: {
    title: string;
    description: string;
    mainKeyword: string;
    secondaryKeywords: string[];
  };
}
