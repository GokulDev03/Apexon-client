import { ProjectType, ProjectFeature } from "../types/estimate.types";

// Base price range for each project type (in ₹)
export const BASE_PRICES: Record<ProjectType, { min: number; max: number }> = {
  "landing-page": { min: 5000, max: 10000 },
  "business-website": { min: 10000, max: 30000 },
  "e-commerce": { min: 30000, max: 50000 },
  "web-application": { min: 50000, max: 100000 },
  "custom-software": { min: 100000, max: 150000 },
};

// Add-on features and their price impact
export const FEATURES: ProjectFeature[] = [
  { id: "payment-gateway", label: "Payment Gateway Integration", price: 10000 },
  { id: "admin-panel", label: "Admin Panel / Dashboard", price: 12000 },
  { id: "user-auth", label: "User Login & Authentication", price: 3000 },
  { id: "product-catalog", label: "Product Catalog / Inventory", price: 10000 },
  { id: "blog-cms", label: "Blog / CMS System", price: 12000 },
  { id: "api-integration", label: "Third-party API Integration", price: 5000 },
  { id: "multi-language", label: "Multi-language Support", price: 10000 },
  { id: "seo-setup", label: "SEO Optimization Setup", price: 8000 },
  { id: "chat-support", label: "Live Chat / Chatbot", price: 12000 },
  { id: "mobile-app", label: "Companion Mobile App", price: 30000 },
];

// Timeline multiplier (urgent projects cost more)
export const TIMELINE_MULTIPLIER = {
  standard: 1,
  urgent: 1.3, // 30% more for rush delivery
};

export function getFeaturePrice(featureId: string): number {
  const feature = FEATURES.find((f) => f.id === featureId);
  return feature?.price ?? 0;
}

export function getFeatureLabel(featureId: string): string {
  const feature = FEATURES.find((f) => f.id === featureId);
  return feature?.label ?? featureId;
}