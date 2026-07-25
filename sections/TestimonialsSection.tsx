"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";

/** Homepage "Testimonials" carousel — blueprint Step 4.11. */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  if (TESTIMONIALS.length === 0) {
    return (
      <Section tone="light">
        <Container className="flex flex-col items-center gap-8">
          <SectionHeading eyebrow="Client Voices" title="What our clients say" />
          <p className="text-ink-500">Testimonials will appear here as clients are onboarded.</p>
        </Container>
      </Section>
    );
  }

  const current = TESTIMONIALS[index];
  if (!current) return null;

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Section tone="light" className="bg-[#f5ead9]">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Client Voices" title="What our clients say" />

        <div className="relative w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center gap-5 rounded-2xl bg-[#0d3320] p-10 text-center shadow-2xl sm:p-12"
            >
              {/* Decorative quote mark */}
              <Quote
                size={48}
                className="absolute left-6 top-6 text-[#d4a574] opacity-20"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 text-[#d4a574]">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="max-w-xl text-lg leading-relaxed text-[#f5ead9] sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px w-16 bg-[#d4a574]/40" />

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574]/15 text-lg font-bold text-[#d4a574]">
                  {current.authorName.charAt(0)}
                </div>
                <p className="mt-2 font-semibold text-[#f5ead9]">{current.authorName}</p>
                <p className="text-sm text-[#d4a574]">
                  {current.authorRole}, {current.companyName}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0d3320]/15 bg-white p-2.5 shadow-lg transition hover:bg-[#0d3320] hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-[#0d3320]/15 bg-white p-2.5 shadow-lg transition hover:bg-[#0d3320] hover:text-white"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#0d3320]" : "w-2 bg-[#0d3320]/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}