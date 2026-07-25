import type { BlogPost } from "@/types/blog";

const AUTHOR = {
  name: "Apexon Editorial Team",
  slug: "apexon-editorial",
  role: "Engineering & Strategy",
  avatar: "/images/authors/apexon-editorial.jpg",
  bio: "Written by the Apexon Development team, drawing on lessons from real client projects.",
};

/**
 * Launch blog set. These 3 articles are written to full quality as templates
 * for the content calendar — see README.md "Content Roadmap" for the plan to
 * reach the full 30-article target defined in the blueprint.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-your-business-needs-custom-software",
    title: "7 Signs Your Business Has Outgrown Off-the-Shelf Software",
    excerpt:
      "Spreadsheets and generic SaaS tools work great until they don't. Here's how to tell your business has hit that point.",
    coverImage: "/images/blog/blog-outgrown-software.svg",
    category: "Custom Software",
    tags: ["custom software", "business operations", "SaaS"],
    author: AUTHOR,
    publishedAt: "2026-06-02",
    readTimeMinutes: 7,
    relatedServiceSlugs: ["custom-software-development", "business-automation"],
    seo: {
      title: "7 Signs Your Business Needs Custom Software | Apexon Development",
      description: "How to recognize when spreadsheets and off-the-shelf SaaS tools have stopped scaling with your business — and what to do about it.",
    },
    content: `Most businesses start with spreadsheets, and there's nothing wrong with that. A spreadsheet is fast to set up, requires no developers, and gets the job done when your team is small and your processes are simple. The problem isn't spreadsheets themselves — it's not knowing when you've outgrown them.

We see the same patterns repeat across clients who eventually come to us for custom software. Here are seven signs worth paying attention to.

## 1. Multiple people are editing the same file

If more than two or three people regularly update the same spreadsheet, you're one accidental overwrite away from a real problem. Version control isn't a spreadsheet's strong suit, and "final_v3_ACTUAL.xlsx" is a warning sign, not a punchline.

## 2. You're copying data between systems by hand

Manually re-entering the same customer or order information into a second tool — your accounting software, your CRM, your inventory tracker — is exactly the kind of repetitive task that quietly eats hours every week and introduces errors nobody notices until a customer complains.

## 3. Your "process" lives in one person's head

If onboarding a new hire involves someone explaining an unwritten process that isn't documented anywhere, that knowledge is a liability. Software forces a process to be explicit — which is uncomfortable at first, but valuable once it's done.

## 4. You've built a Frankenstein of formulas and macros

Complex nested formulas, VBA macros, and a spreadsheet that "breaks if you touch the wrong cell" are signs that what you actually have is a fragile piece of custom software — just one built in a tool that was never designed for it.

## 5. Reporting takes a full day (or more) each month

If generating a monthly report means someone manually pulling numbers from three different places and reconciling them by hand, that's a task software should be doing automatically, in seconds, not hours.

## 6. You've said "we just need one more feature" more than once

If you keep bolting extensions onto a generic tool that wasn't built for your specific workflow, at some point it's worth asking whether a tool built specifically for your workflow would actually cost less in the long run.

## 7. Errors are starting to cost real money

Early on, a data entry mistake might mean a minor inconvenience. As you scale, the same category of error can mean a missed shipment, a billing mistake, or a compliance issue. The cost of errors tends to grow faster than the business does.

## What to do about it

None of this means you need to rebuild everything overnight. The businesses that get the most value from custom software usually start with the single most painful process — the one costing the most time or causing the most errors — and automate or rebuild just that piece first.

That's typically where we start too: a short discovery conversation to understand what's actually happening day-to-day, followed by a scoped recommendation for what's worth building now versus what can wait. If any of the signs above sound familiar, it's worth a conversation before the problem gets more expensive to fix.`,
  },
  {
    slug: "nextjs-vs-wordpress-choosing-the-right-platform",
    title: "Next.js vs. WordPress: Choosing the Right Platform for Your Business Website",
    excerpt:
      "Both platforms can produce a great website. The right choice depends on who's updating your content and what your site needs to do.",
    coverImage: "/images/blog/blog-nextjs-wordpress.svg",
    category: "Website Development",
    tags: ["Next.js", "WordPress", "web development"],
    author: AUTHOR,
    publishedAt: "2026-06-16",
    readTimeMinutes: 8,
    relatedServiceSlugs: ["website-development"],
    seo: {
      title: "Next.js vs WordPress: Which Is Right for Your Website? | Apexon Development",
      description: "A practical comparison of Next.js and WordPress for business websites — performance, content management, cost, and when to choose each.",
    },
    content: `"Which platform should we use?" is one of the first questions almost every client asks us, and the honest answer is: it depends on what you actually need the site to do, and who's going to be updating it.

## What WordPress does well

WordPress powers a meaningful share of the web for good reason. Its content management experience is mature, the plugin ecosystem covers almost any common need, and non-technical staff can generally learn to update pages and blog posts without much training. If your site is primarily content-driven — a blog, a marketing site with frequent copy updates, or a business that wants marketing staff editing pages directly — WordPress remains a strong, sensible choice.

The tradeoffs: performance can suffer if the site accumulates too many plugins, security requires ongoing maintenance (WordPress's popularity makes it a common target), and highly custom functionality can mean fighting against the platform's conventions rather than working with them.

## What Next.js does well

Next.js is a React framework, not a content management system — which means it requires custom development rather than picking a theme and installing plugins. In exchange, you get a level of performance and flexibility that's difficult to match in WordPress: server-side rendering and static generation produce genuinely fast page loads, the codebase scales cleanly as functionality grows, and there's no plugin bloat because you only build what you need.

The tradeoffs: content updates typically require either a headless CMS integration (which adds setup cost) or a developer, and the total build cost is usually higher upfront than a WordPress site, since more is custom-built rather than configured.

## A practical way to decide

Ask yourself these three questions:

**Who updates the content, and how often?** If it's non-technical staff making frequent changes, WordPress (or Next.js with a headless CMS) fits better than a fully custom Next.js site with no CMS layer.

**Does the site need custom functionality beyond content?** Booking systems, calculators, user accounts, or anything approaching "web application" territory tends to be cleaner to build in Next.js than to force into WordPress.

**How much does page speed matter to your business?** For most sites, both platforms can be made reasonably fast with the right setup. But if you're in a competitive SEO space where every fraction of a second of load time matters, Next.js's performance ceiling is higher.

## Our general approach

For marketing-heavy small business sites with frequent content updates and modest functionality needs, we often recommend WordPress or a headless CMS setup — it's the more cost-effective long-term fit. For businesses that need custom functionality, are performance-sensitive, or plan to grow into a web application over time, we lean toward Next.js.

There's no universally "better" platform — only the one that fits your actual content workflow and functionality needs. If you're not sure which side of that line your project falls on, that's exactly the kind of question worth working through in a discovery call before any code gets written.`,
  },
  {
    slug: "how-much-does-a-business-website-cost",
    title: "How Much Does a Business Website Actually Cost in 2026?",
    excerpt:
      "A realistic breakdown of what drives website pricing — and why the cheapest quote isn't always the best value.",
    coverImage: "/images/blog/website-cost-cover.svg",
    category: "Pricing & Planning",
    tags: ["pricing", "website development", "budgeting"],
    author: AUTHOR,
    publishedAt: "2026-06-30",
    readTimeMinutes: 6,
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    seo: {
      title: "How Much Does a Business Website Cost? | Apexon Development",
      description: "A realistic pricing breakdown for business websites — what drives cost, typical ranges, and how to budget for your project.",
    },
    content: `"How much will this cost?" is usually the first question we get, and it's a fair one — but the honest answer is always "it depends," so let's break down what it actually depends on.

## The main cost drivers

**Number of unique page templates.** A five-page brochure site with one layout costs far less than a site with a homepage, service pages, a blog, and a portfolio, each with distinct designs.

**Custom design vs. template-based design.** A fully custom design, built specifically around your brand, costs more upfront than a well-executed template — but it also differentiates you from competitors using similar off-the-shelf themes.

**Functionality beyond content.** Booking systems, ecommerce, gated content, or user accounts all add development time beyond a standard content site.

**Content readiness.** If you already have final copy and images ready to go, the project moves faster. If content needs to be written and sourced as part of the project, that's additional scope — worth planning for either way.

**Integrations.** Connecting to a CRM, email marketing platform, payment processor, or existing internal systems adds development and testing time.

## Realistic price ranges

These are general ranges, not quotes — every project should get an actual scoped estimate:

- **Simple brochure website (5–8 pages, template-based design):** typically the lowest end of the range, suitable for very early-stage businesses needing a professional web presence quickly.
- **Custom-designed business website with CMS:** a mid-range investment reflecting custom design work, on-page SEO setup, and a content management system your team can use independently.
- **Website with custom functionality (booking, gated content, integrations):** priced higher to reflect the additional development and testing required beyond standard content pages.
- **Ecommerce storefront:** varies significantly based on product catalog size, payment/shipping integrations, and whether it's platform-based (like Shopify) or fully custom.

## Why the cheapest quote isn't always the best value

A very low quote usually means one of a few things: a heavily templated build with limited customization, inexperienced developers learning on your project, or a scope that will grow (with additional charges) once you're already committed. None of these are necessarily dishonest — but they're worth understanding before you sign.

The questions worth asking any agency, including us: What exactly is included in this quote? What happens if scope changes mid-project? Who owns the code and design files when it's done? What does support look like after launch?

## How we price projects

We scope every project individually after a short discovery call, and provide a fixed-price quote before any work begins — so you know the full cost upfront, not just a starting estimate that grows as the project progresses. If you're planning a website project and want a realistic number to budget against, that discovery conversation costs nothing and usually takes less than 30 minutes.`,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((b) => b.slug === slug);
}

export function getRelatedBlogPosts(slug: string, count = 3): BlogPost[] {
  const current = getBlogBySlug(slug);
  if (!current) return [];
  return BLOG_POSTS.filter((b) => b.slug !== slug && b.category === current.category).slice(0, count);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(BLOG_POSTS.map((b) => b.category)));
}
