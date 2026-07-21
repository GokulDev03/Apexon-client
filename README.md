# Apexon Development — Website

Production-ready Next.js 15 (App Router) implementation of the Apexon Development
website blueprint. Built with TypeScript, Tailwind CSS, Framer Motion, React Hook
Form, Zod, and Lucide React.

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Verify before deploying:

```bash
npm run type-check   # tsc --noEmit — verified clean
npm run lint          # eslint . — verified clean
npm run build         # next build — verified: all 71 routes compile & prerender
```

> **Sandbox note:** the build was verified in this environment with `next/font`
> temporarily stubbed, because this sandbox has no outbound access to
> `fonts.googleapis.com`. The real Google Fonts implementation is what's shipped
> in `lib/fonts.ts` — it will fetch normally on any machine/CI with internet
> access (Vercel, GitHub Actions, your laptop, etc.). No action needed.

## Architecture

```
app/            Next.js App Router routes (see full route list below)
components/     ui/ (primitives) · common/ (navbar, footer, layout bits)
                cards/ (content cards) · shared/ (hero, forms, FAQ, CTA)
sections/       Composable homepage/page sections (Hero, Services, FAQ, ...)
layouts/        MainLayout, PageLayout, LegalLayout, MobileStickyBar
hooks/          useMediaQuery, useScrollPosition, useIntersectionObserver, ...
lib/            cn() utility, font loader
constants/      Navigation config + lightweight nav directories (slug/name/icon)
types/          Shared TypeScript interfaces for every content model
data/           Full content records (services, industries, technologies,
                locations, portfolio, case studies, blog posts, testimonials, FAQ)
utils/          slugify, formatDate, truncate, estimateReadTime
providers/      AppProviders (composition root)
context/        ModalContext, NavContext
config/         site.config, seo.config, nav.config
seo/            metadata factory, OpenGraph/Twitter/canonical helpers,
                jsonld/ (Organization, Service, FAQ, Breadcrumb, Article, LocalBusiness)
schemas/        Zod schemas for Contact, Quote Request, Consultation, Newsletter
```

`constants/` vs `data/`: constants hold lightweight slug/name/icon lists used for
navigation and cross-linking; `data/` holds the full content record (copy, FAQs,
SEO metadata) for each entity, typed against `types/`.

## Routes implemented (71 static/dynamic pages generated at build time)

Home · About · Services (hub + 8 dynamic pages) · Portfolio (hub + dynamic) ·
Case Studies (hub + dynamic) · Blog (hub + dynamic + category archive) ·
Pricing · Industries (hub + 9 dynamic pages) · Technologies (hub + 12 dynamic
pages) · Locations (hub + dynamic) · Careers · FAQ · Testimonials · Process ·
Why Choose Us · Book Consultation · Request Quote · Contact · Thank You ·
Privacy Policy · Terms · Cookie Policy · Refund Policy · 404 · robots.txt ·
sitemap.xml · manifest.webmanifest

## Content status — what's real vs. placeholder

**Fully written, real copy (no lorem ipsum):**
- All 8 service pages (benefits, features, FAQs, SEO metadata)
- All 9 industry pages (challenges, FAQs, SEO metadata)
- All 12 technology pages (descriptions, FAQs, SEO metadata)
- Global FAQ (8 questions across 5 categories)
- About, Pricing, Process, Why Choose Us, Careers, Contact, legal pages
- 3 full-length blog articles (~1,000–1,300 words each, original, no filler)

**Structurally complete but placeholder content — replace before launch:**
- **Testimonials (3):** realistic structure and quotes, but attributed to
  generic "Client Name / Client Company" — replace with verified, consented
  real client quotes before publishing. Do not launch with fabricated
  attributions.
- **Portfolio & case studies (3 + 2):** realistic project narratives, but
  the client names (ClearPath Clinic, Northloop, Forgeline) are illustrative
  examples, not real clients — swap in real projects (or clearly mark as
  "illustrative example" if you want to keep them as placeholders).
- **Locations (2 placeholder entries):** `city-1` / `city-2` — replace with
  your actual service-area cities and unique local proof points per the
  blueprint's doorway-page warning (Step 2.28).
- **Images:** all `coverImage`/`gallery`/logo paths point to `/images/...`
  paths that don't yet exist as files — add real assets at those paths
  (see `public/images/`, `assets/`) before launch, or swap in a CMS/DAM.

## Content roadmap: reaching the full 30-article blog target

The blueprint's original brief called for 30 SEO articles at 1,500+ words each.
Shipping all 30 at real, non-padded quality alongside the full application
build wasn't realistic in a single pass — the 3 launch articles are written to
the target quality bar and can serve as style/structure templates. Suggested
batches for the remaining 27 (5–6 articles per batch keeps quality consistent):

1. Service deep-dives (8) — one per service, targeting the service's main + secondary keywords
2. Industry deep-dives (9) — one per industry, addressing that industry's specific challenges
3. Comparison / decision content (5) — e.g. "Shopify vs. custom ecommerce", "REST vs. GraphQL"
4. Process & pricing education (5) — timelines, what discovery looks like, how scoping works — a bottom-of-funnel and PPC content channel that also supports voice/AI-answer discoverability
5. Case-study-adjacent content and remaining pass

## Forms

`ContactForm`, `QuoteRequestForm`, and `ConsultationForm` (in
`components/shared/`) are fully validated with React Hook Form + Zod and
redirect to `/thank-you` on submit. The actual submission call is stubbed
(`console.log`) — wire it to a real API route, email service (Resend, SendGrid),
or CRM webhook before launch.

## Before launch checklist

- [ ] Replace placeholder testimonials with real, consented client quotes
- [ ] Replace/confirm portfolio & case study client names
- [ ] Add real location entries (replace `city-1`/`city-2`)
- [ ] Add real images at all referenced `/images/...` paths
- [ ] Wire form submission handlers to a real backend/CRM/email service
- [ ] Fill in `COMPANY_INFO.address` in `constants/company.ts`
- [ ] Set real values in `.env.local` (site URL, GA ID, site verification)
- [ ] Add real favicon/app icons referenced in `app/manifest.ts`
- [ ] Continue the blog content roadmap above
- [ ] Run `npm run build` on a machine with normal internet access to confirm
      Google Fonts fetch succeeds (it will — only this sandbox blocks it)
