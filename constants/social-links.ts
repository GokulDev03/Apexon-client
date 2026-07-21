import type { LucideIcon } from "lucide-react";
import { Linkedin, Github, Instagram, Dribbble, Twitter } from "lucide-react";

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/company/apexon-development", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/apexondev", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/apexondevelopment", icon: Instagram },
  { label: "GitHub", href: "https://github.com/apexon-development", icon: Github },
  { label: "Dribbble", href: "https://dribbble.com/apexondevelopment", icon: Dribbble },
];
