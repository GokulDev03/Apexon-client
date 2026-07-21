/** Non-content navigation behavior config (breakpoints, scroll thresholds). */
export const navConfig = {
  stickyScrollThreshold: 24, // px scrolled before navbar solidifies (see design system: glass effect)
  mobileBreakpoint: 1024, // matches Tailwind `lg`
} as const;
