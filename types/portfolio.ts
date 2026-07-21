export interface PortfolioProject {
  slug: string;
  title: string;
  clientName?: string;
  industry: string; // industry slug
  service: string; // service slug
  technologies: string[]; // technology slugs
  timeline?: string;
  coverImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  results?: string[];
  testimonialId?: string;
  liveUrl?: string;
}
