export type ProjectType =
  | "landing-page"
  | "business-website"
  | "e-commerce"
  | "web-application"
  | "custom-software";

export interface ProjectFeature {
  id: string;
  label: string;
  price: number;
}

export interface EstimateRequest {
  projectType: ProjectType;
  features: string[]; // feature ids
  pages?: number;
  timeline?: "standard" | "urgent";
}

export interface EstimateResult {
  projectType: ProjectType;
  basePrice: number;
  featuresTotal: number;
  minEstimate: number;
  maxEstimate: number;
  breakdown: {
    label: string;
    price: number;
  }[];
  reasoning?: string;
}