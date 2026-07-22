import React from "react";
import { Linkedin, Github, Instagram, Twitter } from "@/components/ui/BrandIcons";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/company/apexon-development", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/apexondev", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/apexondevelopment", icon: Instagram },
  { label: "GitHub", href: "https://github.com/apexon-development", icon: Github },
];