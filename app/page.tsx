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
  title: "Apexon Development — Custom Software, Web & Automation Experts",
  description:
    "Apexon Development builds websites, web applications, custom software, and automation solutions for startups through enterprise.",
  path: "/",
  keywords: ["software development company", "custom software agency", "web development company"],
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
