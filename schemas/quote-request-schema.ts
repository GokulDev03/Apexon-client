import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  serviceSlug: z.string().min(1, "Please select a service"),
  budgetRange: z.enum(["under-5k", "5k-15k", "15k-50k", "50k-plus", "not-sure"]),
  projectDetails: z.string().min(20, "Please share a few more details about your project"),
});

export type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;
