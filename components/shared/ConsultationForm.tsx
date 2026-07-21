"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { consultationSchema, type ConsultationValues } from "@/schemas/consultation-schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

/**
 * Lightweight scheduling form. For production, consider swapping this for
 * an embedded scheduling tool (e.g. Cal.com) — this form remains as a
 * no-dependency fallback that still captures a lead.
 */
export function ConsultationForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationValues>({ resolver: zodResolver(consultationSchema) });

  const onSubmit = async (values: ConsultationValues) => {
    // TODO: replace with real API route / scheduling integration.
    console.log("Consultation request:", values);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Full name" {...register("name")} error={errors.name?.message} />
        <Input label="Email" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <Input label="Company (optional)" {...register("company")} error={errors.company?.message} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input label="Preferred date" type="date" {...register("preferredDate")} error={errors.preferredDate?.message} />
        <Input label="Preferred time" type="time" {...register("preferredTime")} error={errors.preferredTime?.message} />
      </div>
      <Textarea label="Anything we should know beforehand? (optional)" {...register("notes")} error={errors.notes?.message} />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Scheduling…" : "Schedule Now"}
      </Button>
    </form>
  );
}
