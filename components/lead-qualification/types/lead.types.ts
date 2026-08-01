export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  score: number;
  status: 'new' | 'qualified' | 'disqualified' | 'in-review';
  source: 'chatbot' | 'form' | 'manual';
  reasoning?: string;
  createdAt: Date;
}

export interface QualificationCriteria {
  budgetFit: number;
  timelineRealistic: number;
  engagementLevel: number;
  decisionMakerAccess: number;
}