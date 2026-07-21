export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "pricing" | "process" | "support" | "technical";
}
