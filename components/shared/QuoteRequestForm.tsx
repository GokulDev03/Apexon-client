"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { quoteRequestSchema, type QuoteRequestValues } from "@/schemas/quote-request-schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { SERVICES_NAV } from "@/constants/services";

const BUDGET_OPTIONS: { value: QuoteRequestValues["budgetRange"]; label: string }[] = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export function QuoteRequestForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestValues>({ resolver: zodResolver(quoteRequestSchema) });

  const onSubmit = async (values: QuoteRequestValues) => {
    // TODO: replace with real API route / CRM lead-creation call.
    console.log("Quote request submission:", values);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Full name" {...register("name")} error={errors.name?.message} />
        <Input label="Email" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Company (optional)" {...register("company")} error={errors.company?.message} />
        <Input label="Phone (optional)" {...register("phone")} error={errors.phone?.message} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="serviceSlug" className="text-sm font-medium text-ink-700">Service needed</label>
        <select
          id="serviceSlug"
          {...register("serviceSlug")}
          className="rounded-sm border border-ink-200 bg-white px-4 py-3.5 text-base text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">Select a service</option>
          {SERVICES_NAV.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
        {errors.serviceSlug && <span className="text-sm text-error">{errors.serviceSlug.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="budgetRange" className="text-sm font-medium text-ink-700">Estimated budget</label>
        <select
          id="budgetRange"
          {...register("budgetRange")}
          className="rounded-sm border border-ink-200 bg-white px-4 py-3.5 text-base text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>
      </div>

      <Textarea label="Project details" placeholder="What are you trying to build?" {...register("projectDetails")} error={errors.projectDetails?.message} />

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Request"}
      </Button>
    </form>
  );
}
