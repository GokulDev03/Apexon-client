// constants/qualificationRules.ts

export const BUDGET_SCORES: Record<string, number> = {
  'below-5k': 10,
  '5k-15k': 25,
  '15k-50k': 40,
  '50k-plus': 50,
};

export const TIMELINE_SCORES: Record<string, number> = {
  'immediate': 30,
  '1-3-months': 25,
  '3-6-months': 15,
  'exploring': 5,
};

export const ENGAGEMENT_WEIGHTS = {
  respondedQuickly: 10,
  providedContactInfo: 10,
  askedDetailedQuestions: 10,
};

export const QUALIFICATION_THRESHOLDS = {
  QUALIFIED: 70,      // score >= 70 → qualified
  IN_REVIEW: 40,      // 40-69 → needs manual review
  DISQUALIFIED: 0,    // below 40 → disqualified
};

export function getLeadStatus(score: number): 'qualified' | 'in-review' | 'disqualified' {
  if (score >= QUALIFICATION_THRESHOLDS.QUALIFIED) return 'qualified';
  if (score >= QUALIFICATION_THRESHOLDS.IN_REVIEW) return 'in-review';
  return 'disqualified';
}