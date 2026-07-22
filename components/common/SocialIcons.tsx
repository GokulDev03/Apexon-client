import { SOCIAL_LINKS } from "@/constants/social-links";
import { cn } from "@/lib/utils";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-colors hover:border-brand-500 hover:text-white"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
