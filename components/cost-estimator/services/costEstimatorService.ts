import {
  ProjectType,
  EstimateRequest,
  EstimateResult,
} from "../types/estimate.types";
import {
  BASE_PRICES,
  FEATURES,
  TIMELINE_MULTIPLIER,
  getFeaturePrice,
  getFeatureLabel,
} from "../constants/pricingRules";

// Step 1: Calculate estimate from structured request (rule-based, no AI needed here)
export function calculateEstimate(request: EstimateRequest): EstimateResult {
  const base = BASE_PRICES[request.projectType] ?? BASE_PRICES["business-website"];

  const breakdown: { label: string; price: number }[] = [
    { label: `Base (${request.projectType})`, price: base.min },
  ];

  let featuresTotal = 0;
  for (const featureId of request.features) {
    const price = getFeaturePrice(featureId);
    if (price > 0) {
      featuresTotal += price;
      breakdown.push({ label: getFeatureLabel(featureId), price });
    }
  }

  const multiplier = TIMELINE_MULTIPLIER[request.timeline ?? "standard"];

  const minEstimate = Math.round((base.min + featuresTotal) * multiplier);
  const maxEstimate = Math.round((base.max + featuresTotal) * multiplier);

  return {
    projectType: request.projectType,
    basePrice: base.min,
    featuresTotal,
    minEstimate,
    maxEstimate,
    breakdown,
  };
}

// Step 2: Extract project requirements from a natural language message using AI
export async function extractProjectRequirements(
  message: string
): Promise<EstimateRequest | null> {
  try {
    const res = await fetch("/api/cost-estimate/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (!data?.projectType) return null;

    return data as EstimateRequest;
  } catch (err) {
    console.error("Failed to extract project requirements:", err);
    return null;
  }
}

// Step 3: Full flow — message in, estimate out
export async function estimateFromMessage(
  message: string
): Promise<EstimateResult | null> {
  const requirements = await extractProjectRequirements(message);
  if (!requirements) return null;

  return calculateEstimate(requirements);
}