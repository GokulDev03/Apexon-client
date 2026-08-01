// services/leadQualificationService.ts

import { Lead } from '../types/lead.types';
import {
  BUDGET_SCORES,
  TIMELINE_SCORES,
  ENGAGEMENT_WEIGHTS,
  getLeadStatus,
} from '../constants/qualificationRules';

interface ChatData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  respondedQuickly?: boolean;
  providedContactInfo?: boolean;
  askedDetailedQuestions?: boolean;
}

export async function qualifyLead(chatData: ChatData): Promise<Lead> {
  let score = 0;

  const budgetScore = chatData.budget ? BUDGET_SCORES[chatData.budget] : undefined;
  if (budgetScore) {
    score += budgetScore;
  }

  const timelineScore = chatData.timeline ? TIMELINE_SCORES[chatData.timeline] : undefined;
  if (timelineScore) {
    score += timelineScore;
  }

  if (chatData.respondedQuickly) score += ENGAGEMENT_WEIGHTS.respondedQuickly;
  if (chatData.providedContactInfo) score += ENGAGEMENT_WEIGHTS.providedContactInfo;
  if (chatData.askedDetailedQuestions) score += ENGAGEMENT_WEIGHTS.askedDetailedQuestions;

  score = Math.min(score, 100);
  const status = getLeadStatus(score);
  // ...rest of the function stays same

  // 2. Optional: AI reasoning (call your AI API for a short explanation)
  const reasoning = await generateReasoning(chatData, score, status);

  // 3. Save to DB via API route
  const savedLead = await saveLead({
    ...chatData,
    score,
    status,
    reasoning,
  });

  return savedLead;
}

async function generateReasoning(
  chatData: ChatData,
  score: number,
  status: string
): Promise<string> {
  try {
    const response = await fetch('/api/leads/reasoning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatData, score, status }),
    });
    const data = await response.json();
    return data.reasoning ?? '';
  } catch (err) {
    console.error('Reasoning generation failed:', err);
    return '';
  }
}

async function saveLead(leadData: Partial<Lead>): Promise<Lead> {
  const response = await fetch('/api/leads/qualify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    throw new Error('Failed to save lead');
  }

  return response.json();
}