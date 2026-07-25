import type { PortfolioProject } from "@/types/portfolio";

/**
 * Sample portfolio records with real structure and placeholder imagery paths.
 * Replace `coverImage`/`gallery` with real project screenshots and swap in
 * real client names (or "Confidential Client" where NDAs apply) before launch.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "clearpath-clinic-booking-portal",
    title: "ClearPath Clinic — Patient Booking Portal", 
    clientName: "ClearPath Clinic",
    industry: "healthcare",
    service: "custom-software-development",
    technologies: ["nextjs", "nodejs", "sql-databases"],
    timeline: "10 weeks",
    coverImage: "/images/portfolio/clearpath-clinic-cover-v2.svg",
    gallery: ["/images/portfolio/clearpath-clinic-1.jpg", "/images/portfolio/clearpath-clinic-2.jpg"],
    challenge:
      "ClearPath's front desk was booking appointments entirely by phone, causing double-bookings and long hold times during peak hours.",
    solution:
      "We built a patient-facing booking portal with real-time availability, automated confirmation emails, and an admin dashboard for staff to manage schedules across three providers.",
    results: ["40% drop in phone booking volume within the first month", "Zero double-bookings since launch"],
    testimonialId: "testimonial-1",
  },
  {
    slug: "northloop-ecommerce-relaunch",
    title: "Northloop — Ecommerce Storefront Relaunch",
    clientName: "Northloop",
    industry: "ecommerce",
    service: "website-development",
    technologies: ["shopify", "nextjs"],
    timeline: "6 weeks",
    coverImage: "/images/portfolio/northloop-cover-v2.svg",
    gallery: ["/images/portfolio/northloop-1.jpg", "/images/portfolio/northloop-2.jpg"],
    challenge:
      "Northloop's old storefront had a 68% cart abandonment rate and a checkout flow that took an average of six steps.",
    solution:
      "We rebuilt the storefront on Shopify with a streamlined two-step checkout, faster page loads, and clearer product imagery hierarchy.",
    results: ["Cart abandonment reduced to 51%", "Average page load time cut from 4.1s to 1.6s"],
    testimonialId: "testimonial-2",
  },
  {
    slug: "forgeline-inventory-automation",
    title: "Forgeline Manufacturing — Inventory Automation",
    clientName: "Forgeline Manufacturing",
    industry: "manufacturing",
    service: "business-automation",
    technologies: ["python-django", "sql-databases", "aws"],
    timeline: "12 weeks",
    coverImage: "/images/portfolio/forgeline-cover-v2.svg",
    gallery: ["/images/portfolio/forgeline-1.jpg"],
    challenge:
      "Forgeline tracked raw material inventory across two warehouses using shared spreadsheets, leading to frequent stock discrepancies.",
    solution:
      "We built a centralized inventory system with barcode scanning, automated low-stock alerts, and a reporting dashboard synced across both locations.",
    results: ["Stock discrepancies reduced by an estimated 90%", "~10 hours/week saved on manual reconciliation"],
    testimonialId: "testimonial-3",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getPortfolioByService(serviceSlug: string): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.service === serviceSlug);
}

export function getPortfolioByIndustry(industrySlug: string): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.industry === industrySlug);
}
