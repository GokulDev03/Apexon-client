export type FAQCategory = "general" | "pricing" | "process" | "support" | "technical";

export const FAQ_CATEGORIES: { value: FAQCategory; label: string }[] = [
  { value: "general", label: "General" },
  { value: "pricing", label: "Pricing" },
  { value: "process", label: "Process" },
  { value: "support", label: "Support" },
  { value: "technical", label: "Technical" },
];
