import type { Testimonial } from "@/types/testimonial";

/**
 * Placeholder testimonial records with realistic structure.
 * Replace with verified client quotes before launch — do not publish
 * unverified or fabricated attributions.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Apexon rebuilt our booking system in under two months and it hasn't gone down once since launch. Our front desk team actually enjoys using it now.",
    authorName: "Client Name",
    authorRole: "Operations Manager",
    companyName: "Client Company",
    rating: 5,
    industry: "healthcare",
    service: "custom-software-development",
  },
  {
    id: "testimonial-2",
    quote: "We went from a five-page brochure site to a fully functioning online store in six weeks, with none of the scope creep we'd been warned about.",
    authorName: "Client Name",
    authorRole: "Founder",
    companyName: "Client Company",
    rating: 5,
    industry: "ecommerce",
    service: "website-development",
  },
  {
    id: "testimonial-3",
    quote: "The automation they built saved our ops team roughly ten hours a week almost immediately. It paid for itself within the first quarter.",
    authorName: "Client Name",
    authorRole: "COO",
    companyName: "Client Company",
    rating: 5,
    industry: "manufacturing",
    service: "business-automation",
  },
];

export function getTestimonialsByIndustry(industrySlug: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.industry === industrySlug);
}
