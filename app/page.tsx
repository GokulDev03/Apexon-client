import type { Metadata } from "next";
import { generateMetadata as buildMetadata } from "@/seo/metadata";
import {
  HeroSection,
  ClientsSection,
  StatsSection,
  ServicesSection,
  FeaturesSection,
  WhyChooseUsSection,
  PortfolioSection,
  TechnologiesSection,
  IndustriesSection,
  TestimonialsSection,
  FAQSection,
  LatestBlogsSection,
  CTASection,
} from "@/sections";

export const metadata: Metadata = buildMetadata({
 title:
"Website Development Company in India | Web, Software & AI Solutions | Apexon Tech",
  description:
"Apexon Tech provides Website Development, Web Application Development, Custom Software, E-Commerce Solutions, UI/UX Design, SEO Services and AI Automation for startups and enterprises.",
  path: "/",
 keywords: [
  "web development company",
  "web development agency",
  "custom website development",
  "website design company",
  "web design services",
  "software development company",
   "SEO services",
  "ui ux design",
  "Next.js development",
  "React development",
  "API integration",
  "website maintenance",
  "Apexon Tech"
],
});

/** Home page — composed of every section defined in blueprint Step 4. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TechnologiesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <LatestBlogsSection />
      <CTASection />
    </>
  );
}
