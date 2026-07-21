import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
