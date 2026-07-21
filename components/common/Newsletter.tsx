"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterValues } from "@/schemas/newsletter-schema";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

/** Footer/blog-sidebar newsletter signup — submit handler is a stub for the API-integration phase. */
export function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (values: NewsletterValues) => {
    // TODO: wire up to real newsletter provider / API route.
    console.log("Newsletter signup:", values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Input type="email" placeholder="you@company.com" {...register("email")} error={errors.email?.message} />
      </div>
      <Button type="submit" variant="primary" icon={<ArrowRight size={16} />} disabled={isSubmitting}>
        {isSubmitSuccessful ? "Subscribed" : "Subscribe"}
      </Button>
    </form>
  );
}
