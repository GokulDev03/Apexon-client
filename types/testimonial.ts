export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyName: string;
  avatar?: string;
  rating: number; // 1-5
  industry?: string; // industry slug
  service?: string; // service slug
}
