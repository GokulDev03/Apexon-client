import { SkeletonHero, SkeletonCard } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 max-w-7xl animate-fade-in">
      {/* Page Skeleton Layout */}
      <SkeletonHero />
      
      <div className="border-t border-ink-200/20 dark:border-ink-800/20 my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      {/* Floating Glassmorphic Indicator */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
        <div className="glass-panel dark:glass-panel-dark px-5 py-3.5 rounded-card flex items-center gap-3.5 shadow-raised border border-white/20 dark:border-white/5">
          <div className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-brand-500 flex items-center justify-center">
              <svg className="animate-spin h-3 w-3 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </span>
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-ink-700 dark:text-ink-300">
            Syncing content...
          </span>
        </div>
      </div>
    </div>
  );
}
