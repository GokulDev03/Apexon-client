import Link from "next/link";
import { FOOTER_NAV } from "@/constants/navigation";
import { COMPANY_INFO } from "@/constants/company";
import { Container } from "./Container";
import { SocialIcons } from "./SocialIcons";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 bg-grid-dark text-ink-300">
      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-5">
        <div className="col-span-2 flex flex-col gap-4">
          <Link href="/" className="font-display text-xl font-semibold text-white">
            Apexon<span className="text-brand-400">.</span>
          </Link>
          <p className="max-w-xs text-sm text-ink-400">{COMPANY_INFO.tagline}</p>
          <SocialIcons />
        </div>

        <FooterColumn title="Services" links={FOOTER_NAV.services} />
        <FooterColumn title="Company" links={FOOTER_NAV.company} />
        <FooterColumn title="Resources" links={FOOTER_NAV.resources} />

        <div className="col-span-2 flex flex-col gap-4 md:col-span-5 md:mt-8 md:flex-row md:items-center md:justify-between md:border-t md:border-ink-800 md:pt-8">
          <div className="text-sm text-ink-400">
            <p>{COMPANY_INFO.email}</p>
            <p>{COMPANY_INFO.phone}</p>
          </div>
          <Button href="/book-consultation" size="sm">
            Book a Consultation
          </Button>
        </div>
      </Container>

      <div className="border-t border-ink-800">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-500 md:flex-row">
          <p>© {year} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {FOOTER_NAV.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink-300">
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-500">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-400 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
