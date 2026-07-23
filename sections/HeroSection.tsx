// import { Hero } from "@/components/shared";
// import { Button } from "@/components/ui/Button";
// import { ArrowRight } from "lucide-react";

// /** Homepage hero — blueprint Step 4.1. */
// export function HeroSection() {
//   return (
//     <Hero
//       eyebrow="Software Development Agency"
//       title="Software that moves your business forward"
//       description="We design and build websites, web apps, and custom software for startups through enterprise — on fixed timelines, with a team that stays after launch."
//       actions={
//         <>
//           <Button href="/book-consultation" size="lg" icon={<ArrowRight size={18} />}>
//             Book a Consultation
//           </Button>
//           <Button href="/portfolio" variant="secondary" size="lg">
//             View Our Work
//           </Button>
//         </>
//       }
//     />
//   );
// }


import { Hero } from "@/components/shared";
import { DashboardMockup } from "@/components/shared/DashboardMockup";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Star } from "lucide-react";

const AVATARS = ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg", "/avatars/4.jpg"];

export function HeroSection() {
  return (
    <Hero
      align="split"
      eyebrow="Software Development Agency"
      title={
        <>
          Software that moves your business{" "}
          <span className="italic text-brand-500">forward</span>
        </>
      }
      description="We design and build modern websites, web apps, and custom software for startups and enterprises — on fixed timelines, with a team that stays after launch."
      actions={
        <>
          <Button href="/book-consultation" size="lg" icon={<ArrowRight size={18} />}>
            Book a Consultation
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg" icon={<Play size={16} />} iconPosition="left">
            View Our Work
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
                alt=""
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
            <p className="text-xs text-ink-500">4.9/5 from 120+ clients</p>
          </div>
        </div>
      }
      visual={<DashboardMockup />}
    />
  );
}