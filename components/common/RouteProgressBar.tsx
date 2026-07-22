"use client";

import { useEffect, useState, useTransition, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteProgressBarInner() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track the current full path to know when navigation has completed
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname + (searchParams?.toString() || ""));
  }, [pathname, searchParams]);

  // Detect when the pathname changes to complete the progress bar
  useEffect(() => {
    const newPath = pathname + (searchParams?.toString() || "");
    if (newPath === currentPath) return;

    setProgress(100);
    const fadeTimer = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 250); // Match transition duration

    return () => clearTimeout(fadeTimer);
  }, [pathname, searchParams, currentPath]);

  // Intercept anchor clicks and window navigation
  useEffect(() => {
    let progressTimer: NodeJS.Timeout;

    const startProgress = () => {
      clearTimeout(progressTimer);
      setVisible(true);
      setProgress(0);

      // Instant 10% jump for immediate tactile visual feedback (< 10ms)
      setProgress(15);

      const tick = () => {
        setProgress((prev) => {
          if (prev >= 96) return prev;
          // Asymptotic increment (faster initially, then slower)
          const remaining = 96 - prev;
          const step = remaining * 0.12;
          return prev + Math.max(step, 0.4);
        });
        progressTimer = setTimeout(tick, 100);
      };

      progressTimer = setTimeout(tick, 50);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      // Find the closest parent anchor tag
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip non-navigation targets
      const target = anchor.getAttribute("target");
      if (target === "_blank") return;

      // Skip special links (tel, mailto, local hashes, js)
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Check if same origin
      try {
        const targetUrl = new URL(href, window.location.href);
        if (targetUrl.origin !== window.location.origin) return;

        const targetPath = targetUrl.pathname + targetUrl.search;
        const currentPathCombined = window.location.pathname + window.location.search;

        // If clicking the current path, perform a fast progress tick and hide
        if (targetPath === currentPathCombined) {
          startProgress();
          setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
              setVisible(false);
              setProgress(0);
            }, 250);
          }, 150);
          return;
        }

        // Start progress indicator immediately
        startProgress();
      } catch (err) {
        // Fallback safely if URL constructor fails
      }
    };

    // Override pushState to capture programmatic navigation (router.push)
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      startProgress();
      return originalPushState.apply(this, args);
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.history.pushState = originalPushState;
      clearTimeout(progressTimer);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        background: "linear-gradient(90deg, #4f46e5 0%, #f59e0b 50%, #f43f5e 100%)",
        boxShadow: "0 1px 12px rgba(79, 70, 229, 0.4), 0 0 4px rgba(244, 63, 94, 0.3)",
      }}
    />
  );
}

/**
 * Reusable top progress bar component for Next.js route transitions.
 * Wrapped in Suspense to preserve NextJS static page rendering and prevent build warnings.
 */
export function RouteProgressBar() {
  return (
    <Suspense fallback={null}>
      <RouteProgressBarInner />
    </Suspense>
  );
}
