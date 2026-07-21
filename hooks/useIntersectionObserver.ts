"use client";

import { useEffect, useRef, useState } from "react";

interface Options extends IntersectionObserverInit {
  once?: boolean;
}

/** Drives scroll-triggered reveal animations (see blueprint Step 9 — animation placement). */
export function useIntersectionObserver<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { once = true, ...observerOptions } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) observer.unobserve(node);
      } else if (!once) {
        setIsVisible(false);
      }
    }, observerOptions);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return { ref, isVisible };
}
