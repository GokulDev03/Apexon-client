

import { Hero } from "@/components/shared";
import { DashboardMockup } from "@/components/shared/DashboardMockup";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Star } from "lucide-react";

const AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Client1",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Client2",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Client3",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Client4",
];;

export function HeroSection() {
  return (
    <Hero
      align="split"
      eyebrow="Website Development • Web Applications • AI Automation"
     title={
  <>
    <span className="text-brand-500">
      Website Development Company
    </span>
    <br />
    Building Modern Websites, Web Applications &
    <span className="italic text-brand-500">
      {" "}Custom Software
    </span>
  </>
}
description="
Apexon Tech provides professional Website Development,
Web Application Development, Custom Software,
E-Commerce Solutions, UI/UX Design,
SEO Services and AI Automation
for startups and enterprises worldwide.
"
      actions={
        <>
          <Button href="/book-consultation" size="lg" icon={<ArrowRight size={18} />}>
           Get Free Consultation
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg" icon={<Play size={16} />} iconPosition="left">
            View Our Portfolio
          </Button>
        </>
      }
      belowActions={
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Satisfied software development client"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs text-ink-500">Trusted by 120+ businesses • Rated 4.9/5</p>
          </div>
        </div>
      }
      visual={<DashboardMockup />}
    />
  );
}