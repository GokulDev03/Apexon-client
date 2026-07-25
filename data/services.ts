import type { Service } from "@/types/service";

/**
 * Full service content records — real launch copy (blueprint Step 2.25 / Step 5.1).
 * relatedTechnologies / relatedServices / relatedIndustries reference slugs defined
 * in /data/technologies.ts, /data/services.ts, and /data/industries.ts respectively.
 */
export const SERVICES: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: "Globe",
   shortDescription:
"Custom Website Development services using Next.js and modern technologies to build fast, SEO-friendly, mobile-responsive business websites that generate leads.",
    heroDescription:
"We build custom business websites that are fast, mobile-responsive, SEO-friendly and optimized for lead generation using Next.js, React and modern web technologies.",
    benefits: [
      { title: "Faster page loads", description: "Built on Next.js with image and code optimization baked in, not bolted on." },
      { title: "Built to rank", description: "Clean semantic markup, structured data, and a technical foundation your SEO team will thank you for." },
      { title: "Easy to update", description: "A content structure your team can manage without calling a developer for every text change." },
      { title: "Designed to convert", description: "Every page is built around a clear next action, not just information." },
    ],
    features: [
      "Custom Website Design",
      "Mobile-first responsive layouts",
      "On-page SEO foundation (metadata, schema, sitemap)",
      "Lead Generation Contact Forms",
      "CMS integration where needed",
      "Google Analytics & Search Console Integration",
    ],
    relatedTechnologies: ["nextjs", "react", "typescript", "wordpress"],
    relatedServices: ["ui-ux-design", "seo-services", "website-maintenance"],
    relatedIndustries: ["small-business", "restaurants", "startups"],
    startingPrice: "Starting from a fixed-price quote after a short discovery call",
    faqs: [
      { question: "How long does a website project take?", answer: "Most business websites take 3–6 weeks from kickoff to launch, depending on page count and content readiness." },
      { question: "Will I be able to edit the content myself?", answer: "Yes — for most projects we set up a CMS so your team can update text and images without touching code." },
      { question: "Do you write the content and take the photos?", answer: "We can. Copywriting and stock/curated imagery are available as add-ons if you don't have content ready." },
      { question: "Is SEO included?", answer: "Every website ships with on-page SEO fundamentals in place. Ongoing SEO campaigns are a separate service — see SEO Services." },
      { question: "Can you migrate my existing website?", answer: "Yes, we handle content and URL migration carefully to protect your existing search rankings." },
    ],
    seo: {
      title:
"Website Development Company | Apexon Tech",
      description:
"Apexon Tech provides custom Website Development services with SEO-friendly, fast-loading, mobile-responsive websites built using Next.js, React and modern technologies.",
      mainKeyword: "website development company",
      secondaryKeywords: [
  "business website design",
  "custom website development",
  "responsive website development",
  "SEO friendly website",
  "Next.js website development",
  "React website development"
]
    },
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    icon: "LayoutDashboard",
    shortDescription: "Custom web apps and internal tools built for how your team actually works.",
    heroDescription:
      "From customer-facing SaaS products to internal dashboards, we build web applications that handle real business logic — securely and at scale.",
    benefits: [
      { title: "Built for your workflow", description: "No forcing your process to fit generic software — the app is shaped around how your team works." },
      { title: "Scales with usage", description: "Architecture decisions made upfront so growth doesn't mean a rebuild." },
      { title: "Secure by default", description: "Authentication, authorization, and data handling built to modern security standards." },
      { title: "Maintainable codebase", description: "Documented, typed, tested code your future team (or ours) can safely extend." },
    ],
    features: [
      "User authentication & role-based access",
      "Custom dashboards and reporting",
      "Third-party integrations (payments, CRM, email)",
      "Real-time features where needed",
      "Admin panels for non-technical staff",
      "Cloud deployment and CI/CD setup",
    ],
    relatedTechnologies: ["nextjs", "react", "nodejs", "typescript", "aws"],
    relatedServices: ["api-development", "ui-ux-design", "custom-software-development"],
    relatedIndustries: ["startups", "enterprise", "ecommerce"],
    startingPrice: "Scoped per project after a technical discovery session",
    faqs: [
      { question: "What's the difference between a website and a web application?", answer: "A website mainly presents information; a web application lets users log in and perform actions — think dashboards, portals, or SaaS products." },
      { question: "Do you build MVPs for startups?", answer: "Yes — we scope MVPs specifically to test your core hypothesis fast, without overbuilding." },
      { question: "Can you take over an existing app?", answer: "Yes, we regularly onboard onto existing codebases after a technical audit." },
      { question: "What about hosting and ongoing costs?", answer: "We recommend infrastructure sized to your actual usage and walk you through expected monthly costs before launch." },
    ],
    seo: {
      title: "Web Application Development Company | Apexon Development",
      description: "Custom web application and SaaS development — secure, scalable, and built around your real business workflow.",
      mainKeyword: "web application development company",
      secondaryKeywords: ["custom web app development", "SaaS development services"],
    },
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    icon: "Code2",
    shortDescription: "Bespoke software for the workflows off-the-shelf tools weren't built to handle.",
    heroDescription:
      "When spreadsheets and generic SaaS stop scaling with your operations, we design and build software specific to how your business runs.",
    benefits: [
      { title: "Fits your exact process", description: "No adapting your operations to fit rigid software — we build around your reality." },
      { title: "Removes manual work", description: "Automate the repetitive, error-prone steps your team currently does by hand." },
      { title: "You own it outright", description: "No per-seat licensing traps — the software is yours." },
      { title: "Integrates with what you already use", description: "Connects to your existing systems instead of replacing them wholesale." },
    ],
    features: [
      "Requirements discovery and process mapping",
      "Custom business logic and workflow engines",
      "Legacy system integration",
      "Data migration from spreadsheets/old systems",
      "Role-based internal tools",
      "Long-term support and iteration",
    ],
    relatedTechnologies: ["python-django", "nodejs", "sql-databases", "aws"],
    relatedServices: ["business-automation", "api-development", "web-application-development"],
    relatedIndustries: ["manufacturing", "healthcare", "enterprise"],
    startingPrice: "Scoped after a process discovery workshop",
    faqs: [
      { question: "How is this different from buying existing software?", answer: "Off-the-shelf software is built for the average customer. Custom software is built for your specific process, which usually means less manual workaround." },
      { question: "What industries do you build for?", answer: "Manufacturing, healthcare, logistics, and other operationally complex businesses are common — but any process-heavy business can benefit." },
      { question: "How do you gather requirements?", answer: "We run discovery workshops with the people who actually do the work, not just management, so the software reflects reality." },
      { question: "What happens after launch?", answer: "We offer ongoing support and iteration plans, since operational software tends to evolve as your business does." },
    ],
    seo: {
      title: "Custom Software Development Company | Apexon Development",
      description: "Bespoke software built around your exact business process — replacing spreadsheets and rigid off-the-shelf tools.",
      mainKeyword: "custom software development company",
      secondaryKeywords: ["bespoke software solutions", "enterprise software development"],
    },
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    icon: "TrendingUp",
    shortDescription: "Technical and content SEO that earns rankings, not shortcuts that risk penalties.",
    heroDescription:
      "We combine technical fixes, content strategy, and honest reporting to grow your organic traffic sustainably.",
    benefits: [
      { title: "Technical foundation first", description: "We fix crawlability, speed, and structure issues before chasing keywords." },
      { title: "Content built to rank and convert", description: "Not just traffic — content mapped to what your buyers actually search." },
      { title: "Transparent reporting", description: "You see exactly what we did and what moved, no vague monthly summaries." },
      { title: "No black-hat shortcuts", description: "Every tactic is one we'd be comfortable explaining to Google directly." },
    ],
    features: [
      "Technical SEO audit",
      "Keyword research and content strategy",
      "On-page optimization",
      "Local SEO and Google Business Profile setup",
      "Link building outreach",
      "Monthly performance reporting",
    ],
    relatedTechnologies: ["nextjs", "wordpress"],
    relatedServices: ["website-development", "website-maintenance"],
    relatedIndustries: ["small-business", "ecommerce", "restaurants"],
    startingPrice: "Monthly retainer, sized to your market and current visibility",
    faqs: [
      { question: "How long until I see results?", answer: "Meaningful ranking movement typically takes 3–6 months; SEO is a compounding investment, not an instant fix." },
      { question: "Do you guarantee page-one rankings?", answer: "No credible agency can guarantee specific rankings — anyone who promises that is misrepresenting how search engines work." },
      { question: "Do I need a new website for SEO to work?", answer: "Not always — often we can significantly improve results by optimizing your current site first." },
      { question: "Do you handle local SEO for multiple locations?", answer: "Yes, including Google Business Profile management and location page strategy." },
    ],
    seo: {
      title: "SEO Services Company | Apexon Development",
      description: "Technical and content SEO services focused on sustainable organic growth — no shortcuts, no guesswork.",
      mainKeyword: "SEO services company",
      secondaryKeywords: ["search engine optimization agency", "local SEO services"],
    },
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    icon: "PenTool",
    shortDescription: "Interfaces designed around how real users think, not how the org chart is structured.",
    heroDescription:
      "We design products people can use without a manual — grounded in research, not just visual trends.",
    benefits: [
      { title: "Research-informed decisions", description: "Design choices backed by user flows and testing, not just aesthetic preference." },
      { title: "Consistent design system", description: "Reusable components that keep your product visually and functionally coherent as it grows." },
      { title: "Built for handoff", description: "Developer-ready files and specs that don't get lost in translation." },
      { title: "Accessible by default", description: "WCAG-conscious design decisions from the first wireframe." },
    ],
    features: [
      "User research and journey mapping",
      "Wireframing and prototyping",
      "Design systems and component libraries",
      "Usability testing",
      "Developer handoff documentation",
      "Ongoing design support/retainers",
    ],
    relatedTechnologies: ["react", "nextjs"],
    relatedServices: ["website-development", "web-application-development"],
    relatedIndustries: ["startups", "ecommerce"],
    startingPrice: "Project-based or monthly design retainer",
    faqs: [
      { question: "Do you design first or code first?", answer: "Design first — we prototype and validate the experience before a single line of production code is written." },
      { question: "Can you work with our existing design system?", answer: "Yes, we can extend an existing system or help you build one from scratch if none exists yet." },
      { question: "Do you do user testing?", answer: "Yes, moderated and unmoderated usability testing is available depending on your timeline and budget." },
    ],
    seo: {
      title: "UI/UX Design Agency | Apexon Development",
      description: "Research-driven UI/UX design for web and product teams — wireframes, prototypes, and design systems that hold up at scale.",
      mainKeyword: "UI UX design agency",
      secondaryKeywords: ["product design services", "website UI design company"],
    },
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    icon: "Workflow",
    shortDescription: "Automate the repetitive work eating your team's time — without a full software rebuild.",
    heroDescription:
      "We identify manual bottlenecks in your operations and automate them with targeted tools and integrations, so your team can focus on higher-value work.",
    benefits: [
      { title: "Immediate time savings", description: "Free up hours your team currently spends on copy-paste, manual data entry, or status chasing." },
      { title: "Fewer human errors", description: "Automated processes don't forget steps or mistype data." },
      { title: "Works with your existing tools", description: "We connect what you already use rather than forcing a platform switch." },
      { title: "Scoped for fast ROI", description: "We prioritize automations that pay for themselves quickly, not the flashiest ones." },
    ],
    features: [
      "Process audit and automation opportunity mapping",
      "Workflow automation between existing tools",
      "Custom scripts and internal bots",
      "Notification and approval workflows",
      "Reporting automation",
      "Ongoing monitoring and iteration",
    ],
    relatedTechnologies: ["nodejs", "python-django", "api-integration"],
    relatedServices: ["custom-software-development", "api-development"],
    relatedIndustries: ["manufacturing", "medium-business", "enterprise"],
    startingPrice: "Scoped per automation after a process audit",
    faqs: [
      { question: "What kind of tasks can be automated?", answer: "Common examples: data entry between systems, report generation, approval routing, and repetitive status updates." },
      { question: "Do we need to replace our current software?", answer: "Usually not — most automation projects connect and streamline your existing tools rather than replacing them." },
      { question: "How do you measure ROI?", answer: "We estimate hours saved per week before starting, and check in against that estimate after rollout." },
    ],
    seo: {
      title: "Business Process Automation Services | Apexon Development",
      description: "Targeted workflow and business process automation that connects your existing tools and removes manual busywork.",
      mainKeyword: "business process automation services",
      secondaryKeywords: ["workflow automation company", "RPA development services"],
    },
  },
  {
    slug: "api-development",
    name: "API Development",
    icon: "Plug",
    shortDescription: "Clean, documented APIs that make your data usable — internally and for partners.",
    heroDescription:
      "We design and build REST and GraphQL APIs that are secure, well-documented, and built to be a long-term foundation, not a quick patch.",
    benefits: [
      { title: "Built for real usage patterns", description: "APIs designed around how your apps and partners will actually query data, not a generic CRUD wrapper." },
      { title: "Properly documented", description: "Clear API docs so your team — or a partner's team — can integrate without back-and-forth." },
      { title: "Secure by design", description: "Authentication, rate limiting, and input validation treated as requirements, not afterthoughts." },
      { title: "Versioned for change", description: "A versioning strategy so future changes don't break existing integrations." },
    ],
    features: [
      "REST and GraphQL API design",
      "Third-party API integrations",
      "Authentication (OAuth, API keys, JWT)",
      "Rate limiting and monitoring",
      "API documentation (OpenAPI/Swagger)",
      "Webhooks and event-driven integrations",
    ],
    relatedTechnologies: ["nodejs", "api-integration", "aws"],
    relatedServices: ["web-application-development", "business-automation"],
    relatedIndustries: ["ecommerce", "enterprise"],
    startingPrice: "Scoped per integration or platform",
    faqs: [
      { question: "REST or GraphQL — which do we need?", answer: "It depends on your data shape and client needs; we'll recommend based on your specific use case rather than a default preference." },
      { question: "Can you integrate with [specific third-party service]?", answer: "In most cases, yes — tell us which service and we'll confirm feasibility during discovery." },
      { question: "Do you handle API security audits?", answer: "Yes, we can audit existing APIs for common vulnerabilities as a standalone engagement." },
    ],
    seo: {
      title: "API Development Services | Apexon Development",
      description: "Secure, well-documented REST and GraphQL API development and third-party integrations.",
      mainKeyword: "API development services",
      secondaryKeywords: ["REST API development company", "third-party API integration"],
    },
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    icon: "Wrench",
    shortDescription: "Ongoing updates, monitoring, and support so your website stays fast, secure, and current.",
    heroDescription:
      "Websites need upkeep — security patches, content updates, performance checks. We handle it so it's never an emergency.",
    benefits: [
      { title: "Fewer surprises", description: "Proactive monitoring catches issues before your visitors do." },
      { title: "Stays secure", description: "Regular updates and patches close vulnerabilities before they're exploited." },
      { title: "Fast turnaround on changes", description: "Content and small feature updates handled without a new project each time." },
      { title: "One predictable monthly cost", description: "No surprise invoices for routine upkeep." },
    ],
    features: [
      "Security updates and patching",
      "Uptime and performance monitoring",
      "Regular backups",
      "Content and minor feature updates",
      "Broken link and form monitoring",
      "Monthly health reports",
    ],
    relatedTechnologies: ["wordpress", "nextjs"],
    relatedServices: ["website-development", "seo-services"],
    relatedIndustries: ["small-business", "restaurants", "education"],
    startingPrice: "Monthly plans sized to site complexity",
    faqs: [
      { question: "What's included in a maintenance plan?", answer: "Security updates, backups, uptime monitoring, and a set number of monthly content update hours — exact scope depends on your plan tier." },
      { question: "Do you maintain sites you didn't build?", answer: "Yes, after a short technical audit to understand the existing setup." },
      { question: "What if I need something outside the plan hours?", answer: "Extra work is quoted separately at a pre-agreed hourly rate — no surprise billing." },
    ],
    seo: {
      title: "Website Maintenance Services | Apexon Development",
      description: "Ongoing website maintenance — security updates, monitoring, backups, and content support on a predictable monthly plan.",
      mainKeyword: "website maintenance services",
      secondaryKeywords: ["website support plans", "WordPress maintenance company"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return SERVICES.filter((s) => slugs.includes(s.slug));
}
