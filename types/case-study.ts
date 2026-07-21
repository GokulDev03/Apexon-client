export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  clientName?: string;
  industry: string; // industry slug
  service: string; // service slug
  technologies: string[]; // technology slugs
  timeline?: string;
  coverImage: string;
  challenge: string;
  approach: string;
  metrics: CaseStudyMetric[];
  testimonialId?: string;
  portfolioSlug?: string;
}
