"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { contactSchema, type ContactFormValues } from "@/schemas/contact-schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

/** Generic contact form — POSTs to a future `/api/contact` route handler (stubbed here). */
export function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: replace with real API route / email service call.
    console.log("Contact form submission:", values);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <Input label="Full name" placeholder="Jane Doe" {...register("name")} error={errors.name?.message} />
      <Input label="Email" type="email" placeholder="jane@company.com" {...register("email")} error={errors.email?.message} />
      <Input label="Company (optional)" placeholder="Company name" {...register("company")} error={errors.company?.message} />
      <Textarea label="Message" placeholder="Tell us a bit about what you need" {...register("message")} error={errors.message?.message} />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
