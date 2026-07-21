"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <Section tone="light">
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
              className="flex flex-col items-center gap-4 rounded-card border border-ink-200 bg-white p-10 text-center shadow-soft"
            >
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-ink-800">&ldquo;{current.quote}&rdquo;</p>
              <div>
                <p className="font-medium text-ink-900">{current.authorName}</p>
                <p className="text-sm text-ink-500">
                  {current.authorRole}, {current.companyName}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink-200 bg-white p-2 shadow-soft hover:bg-ink-100">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-x-[-50%] -translate-y-1/2 translate-x-1/2 rounded-full border border-ink-200 bg-white p-2 shadow-soft hover:bg-ink-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </Section>
  );
}
