import type { CaseStudy } from "@/types/case-study";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "clearpath-clinic-booking-portal",
    title: "How ClearPath Clinic Cut Phone Bookings by 40% in One Month",
    clientName: "ClearPath Clinic",
    industry: "healthcare",
    service: "custom-software-development",
    technologies: ["nextjs", "nodejs", "sql-databases"],
    timeline: "10 weeks",
    coverImage: "/images/case-studies/clearpath-clinic-cover.jpg",
    challenge:
      "ClearPath Clinic ran three providers' schedules through a single shared phone line. During peak hours, hold times regularly exceeded ten minutes, and double-bookings were a recurring source of patient frustration.",
    approach:
      "We started with a two-week discovery phase shadowing front-desk staff to understand real booking patterns, then designed a patient-facing portal with live availability by provider, automated confirmation and reminder emails, and a staff dashboard for manual overrides. The system was built to integrate with the clinic's existing scheduling data rather than replace it outright, minimizing disruption during rollout.",
    metrics: [
      { label: "reduction in phone booking volume (30 days)", value: "40%" },
      { label: "double-bookings since launch", value: "0" },
      { label: "average hold time reduction", value: "7 min" },
    ],
    testimonialId: "testimonial-1",
    portfolioSlug: "clearpath-clinic-booking-portal",
  },
  {
    slug: "northloop-ecommerce-relaunch",
    title: "Northloop's Storefront Relaunch: From 68% to 51% Cart Abandonment",
    clientName: "Northloop",
    industry: "ecommerce",
    service: "website-development",
    technologies: ["shopify", "nextjs"],
    timeline: "6 weeks",
    coverImage: "/images/case-studies/northloop-cover.jpg",
    challenge:
      "Northloop's existing storefront required six steps to complete checkout, with no guest checkout option and slow page loads on mobile, where the majority of their traffic originated.",
    approach:
      "We audited the full purchase funnel, identified the steps causing the highest drop-off, and rebuilt the storefront on Shopify with a condensed two-step checkout, mandatory guest checkout, and an image-loading strategy that cut mobile load times by more than half.",
    metrics: [
      { label: "cart abandonment reduction", value: "17 pts" },
      { label: "mobile page load time", value: "1.6s" },
      { label: "checkout steps reduced from 6 to", value: "2" },
    ],
    testimonialId: "testimonial-2",
    portfolioSlug: "northloop-ecommerce-relaunch",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
