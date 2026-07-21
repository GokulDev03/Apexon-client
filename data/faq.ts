import type { FAQItem } from "@/types/faq";

/** Global FAQ list — powers /faq, the homepage FAQ preview, and the FAQPage schema on both. */
export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "pricing",
    question: "How much does a typical project cost?",
    answer:
      "It depends on scope — a small business website starts in the low thousands, while custom software and web applications are scoped individually after a discovery call. We always provide a fixed-price quote before work begins.",
  },
  {
    id: "faq-2",
    category: "process",
    question: "How long does a project take from start to finish?",
    answer:
      "Websites typically take 3–6 weeks. Web applications and custom software range from 8–20+ weeks depending on complexity. We'll give you a realistic timeline during scoping, not just an optimistic one.",
  },
  {
    id: "faq-3",
    category: "process",
    question: "What does your development process look like?",
    answer:
      "Discovery, design, development, testing, and launch — with weekly check-ins throughout. See our full Process page for a detailed breakdown of each stage.",
  },
  {
    id: "faq-4",
    category: "general",
    question: "Do you work with businesses outside your local area?",
    answer:
      "Yes — most of our engagements are fully remote, with video calls and async updates. Local, in-person meetings are available where relevant.",
  },
  {
    id: "faq-5",
    category: "support",
    question: "What happens after my project launches?",
    answer:
      "Every project includes a post-launch support window to catch any issues. After that, we offer ongoing maintenance plans if you want continued support.",
  },
  {
    id: "faq-6",
    category: "technical",
    question: "Who owns the code once the project is finished?",
    answer:
      "You do. We hand over full source code and documentation — there's no vendor lock-in.",
  },
  {
    id: "faq-7",
    category: "general",
    question: "Can you work with our existing in-house developers?",
    answer:
      "Yes, we regularly work alongside internal teams — either augmenting capacity or handling a specific workstream independently.",
  },
  {
    id: "faq-8",
    category: "pricing",
    question: "Do you require payment upfront?",
    answer:
      "We typically split payment into milestones tied to project phases, so you're never paying for work that hasn't been delivered.",
  },
];

export function getFAQsByCategory(category: FAQItem["category"]): FAQItem[] {
  return FAQS.filter((f) => f.category === category);
}
