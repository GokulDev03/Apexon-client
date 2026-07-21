"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const STATS: Stat[] = [
  { label: "Projects Delivered", value: 120, suffix: "+" },
  { label: "Client Retention", value: 98, suffix: "%" },
  { label: "Industries Served", value: 12 },
  { label: "Years of Experience", value: 8, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="font-display text-4xl text-ink-900 md:text-5xl">
      {value}
      {suffix}
    </span>
  );
}

/** Homepage "Statistics" section — blueprint Step 4.3. */
export function StatsSection() {
  return (
    <Section tone="muted">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <CountUp target={stat.value} suffix={stat.suffix} />
            <span className="text-sm text-ink-500">{stat.label}</span>
          </div>
        ))}
      </Container>
    </Section>
  );
}
