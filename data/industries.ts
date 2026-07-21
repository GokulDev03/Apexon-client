import type { Industry } from "@/types/industry";

export const INDUSTRIES: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    icon: "Rocket",
    shortDescription: "MVPs and early product builds designed to test your idea fast, without overbuilding.",
    heroDescription: "Ship a real product fast enough to learn from actual users — not a six-month build before you know if anyone wants it.",
    challenges: [
      { title: "Limited runway", description: "Every month of development is a month of burn — speed to a testable product matters." },
      { title: "Unclear scope", description: "It's tempting to build every feature at once instead of the smallest version that proves the idea." },
      { title: "Technical co-founder gap", description: "Many founding teams need a technical partner, not just contractors." },
    ],
    relatedServices: ["web-application-development", "ui-ux-design", "custom-software-development"],
    relatedTechnologies: ["nextjs", "react", "nodejs"],
    faqs: [
      { question: "Can you help scope our MVP?", answer: "Yes — scoping the smallest version that tests your core hypothesis is usually the first thing we do together." },
      { question: "Do you take equity instead of payment?", answer: "We work on standard paid engagements; equity arrangements are considered case by case for the right fit." },
    ],
    seo: {
      title: "Software Development for Startups | Apexon Development",
      description: "MVP and early-stage product development for startups — scoped to test your idea fast without overbuilding.",
      mainKeyword: "software development for startups",
      secondaryKeywords: ["MVP development company", "startup web app development"],
    },
  },
  {
    slug: "small-business",
    name: "Small Business",
    icon: "Store",
    shortDescription: "Affordable, professional websites and tools sized to a small business budget.",
    heroDescription: "A professional online presence and the tools to run more efficiently — without enterprise pricing or complexity.",
    challenges: [
      { title: "Limited budget", description: "Every dollar needs to earn its keep — no room for over-engineered solutions." },
      { title: "No in-house tech team", description: "You need a partner who explains things clearly, not just delivers code." },
      { title: "Time-poor owners", description: "Solutions need to be genuinely low-maintenance to be worth it." },
    ],
    relatedServices: ["website-development", "seo-services", "website-maintenance"],
    relatedTechnologies: ["wordpress", "nextjs"],
    faqs: [
      { question: "Is this affordable for a small business?", answer: "We scope projects to fit realistic small-business budgets and are upfront about cost before any work begins." },
      { question: "Will I need ongoing technical help?", answer: "We build for easy self-management and offer optional low-cost maintenance plans for peace of mind." },
    ],
    seo: {
      title: "Web Development for Small Business | Apexon Development",
      description: "Affordable, professional websites and digital tools built for small business budgets and timelines.",
      mainKeyword: "web development for small business",
      secondaryKeywords: ["small business website design", "affordable software solutions"],
    },
  },
  {
    slug: "medium-business",
    name: "Medium Business",
    icon: "Building",
    shortDescription: "Systems that scale with you as manual processes start breaking down.",
    heroDescription: "The tools that got you here won't get you to the next stage — we build the systems that support real operational growth.",
    challenges: [
      { title: "Outgrowing spreadsheets", description: "Manual processes that worked at a smaller scale start causing real errors and delays." },
      { title: "Disconnected tools", description: "Multiple systems that don't talk to each other create duplicate work." },
      { title: "Growing team, growing complexity", description: "More people means more need for structured, reliable internal tools." },
    ],
    relatedServices: ["custom-software-development", "business-automation", "api-development"],
    relatedTechnologies: ["nodejs", "sql-databases", "aws"],
    faqs: [
      { question: "How do you handle a business still relying on spreadsheets?", answer: "We start with a process audit to understand what's actually happening, then design software that improves on it without disrupting operations." },
    ],
    seo: {
      title: "Software Solutions for Medium Businesses | Apexon Development",
      description: "Custom systems and automation for growing medium-sized businesses outgrowing manual processes.",
      mainKeyword: "software solutions for medium businesses",
      secondaryKeywords: ["SME software development", "business systems integration"],
    },
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    icon: "Building2",
    shortDescription: "Enterprise-grade software delivery with the process and documentation your org requires.",
    heroDescription: "Large-scale systems built with the governance, security, and integration standards enterprise environments demand.",
    challenges: [
      { title: "Legacy system integration", description: "New software has to work alongside systems that can't simply be replaced overnight." },
      { title: "Compliance and security requirements", description: "Formal review processes and documentation are non-negotiable." },
      { title: "Multiple stakeholders", description: "Alignment across departments takes structured communication, not just code delivery." },
    ],
    relatedServices: ["custom-software-development", "api-development", "web-application-development"],
    relatedTechnologies: ["aws", "sql-databases", "typescript"],
    faqs: [
      { question: "Can you work within our existing procurement and security review process?", answer: "Yes, we're used to working within formal enterprise vendor requirements and can support your security/compliance documentation needs." },
    ],
    seo: {
      title: "Enterprise Software Development Company | Apexon Development",
      description: "Enterprise application development and system integration built to your governance, security, and compliance standards.",
      mainKeyword: "enterprise software development company",
      secondaryKeywords: ["enterprise application development", "large-scale system integration"],
    },
  },
  {
    slug: "education",
    name: "Schools & Education",
    icon: "GraduationCap",
    shortDescription: "School and edtech software that's simple enough for staff, students, and parents to actually use.",
    heroDescription: "From school management systems to learning platforms, we build software that respects how busy educators already are.",
    challenges: [
      { title: "Non-technical staff", description: "Software needs to be genuinely intuitive for teachers and administrators, not just IT staff." },
      { title: "Data privacy for minors", description: "Student data requires careful, deliberate handling and access control." },
      { title: "Budget cycles", description: "Education budgets often run on fixed annual cycles that need clear, predictable costs." },
    ],
    relatedServices: ["custom-software-development", "web-application-development"],
    relatedTechnologies: ["nextjs", "sql-databases"],
    faqs: [
      { question: "Do you handle student data privacy considerations?", answer: "Yes, we design access controls and data handling with student privacy as a core requirement, and can work within your institution's specific policies." },
    ],
    seo: {
      title: "Software Development for Schools | Apexon Development",
      description: "School management systems and education technology built for real classroom and administrative use.",
      mainKeyword: "software development for schools",
      secondaryKeywords: ["school management software", "education website development"],
    },
  },
  {
    slug: "healthcare",
    name: "Hospitals & Healthcare",
    icon: "HeartPulse",
    shortDescription: "Healthcare software built with the data sensitivity and reliability this sector requires.",
    heroDescription: "Hospital and clinic software where uptime and data handling aren't optional — they're the baseline requirement.",
    challenges: [
      { title: "Sensitive patient data", description: "Data handling, access control, and audit trails need to be built in from day one." },
      { title: "High reliability requirements", description: "Downtime in a clinical setting has real consequences." },
      { title: "Integration with clinical systems", description: "New software often needs to coexist with existing hospital systems." },
    ],
    relatedServices: ["custom-software-development", "api-development"],
    relatedTechnologies: ["python-django", "sql-databases", "aws"],
    faqs: [
      { question: "Do you build HIPAA-conscious software?", answer: "We design with strong access control, encryption, and audit logging practices; final compliance certification is a process you'll need to run with your compliance officer, and we support that documentation." },
    ],
    seo: {
      title: "Healthcare Software Development Company | Apexon Development",
      description: "Hospital and healthcare software development with rigorous data handling and reliability standards.",
      mainKeyword: "healthcare software development company",
      secondaryKeywords: ["hospital management system development", "HIPAA compliant software"],
    },
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    shortDescription: "Ordering, booking, and web presence tools built for how restaurants actually operate.",
    heroDescription: "From online ordering to reservation systems, we build tools that work under real dinner-rush pressure.",
    challenges: [
      { title: "Non-technical staff at every level", description: "Systems need to be simple enough to use during a busy service, not just in a demo." },
      { title: "Thin margins", description: "Every tool needs to justify its cost quickly, whether through orders or time saved." },
      { title: "Multiple locations", description: "Multi-location menus and ordering need centralized, consistent management." },
    ],
    relatedServices: ["website-development", "web-application-development"],
    relatedTechnologies: ["nextjs", "wordpress"],
    faqs: [
      { question: "Can you build online ordering that avoids third-party delivery app fees?", answer: "Yes — a direct ordering system on your own site is one of the most common projects we build for restaurants." },
    ],
    seo: {
      title: "Restaurant Website & Ordering System Development | Apexon Development",
      description: "Restaurant websites, online ordering, and reservation systems built for real-world service conditions.",
      mainKeyword: "restaurant website development",
      secondaryKeywords: ["online ordering system development", "restaurant app development"],
    },
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    icon: "ShoppingCart",
    shortDescription: "Custom and Shopify-based storefronts built to convert, not just display products.",
    heroDescription: "From storefront design to checkout optimization and backend integrations, we build ecommerce experiences focused on conversion.",
    challenges: [
      { title: "Cart abandonment", description: "Every extra step in checkout is an opportunity for a customer to leave." },
      { title: "Inventory and order sync", description: "Disconnected systems create stock and fulfillment errors." },
      { title: "Platform limitations", description: "Off-the-shelf platforms sometimes can't support specific business models without custom work." },
    ],
    relatedServices: ["website-development", "ui-ux-design", "api-development"],
    relatedTechnologies: ["shopify", "nextjs", "api-integration"],
    faqs: [
      { question: "Shopify or custom-built — which is right for us?", answer: "Shopify suits most standard product catalogs; custom builds make sense when your business model or integrations don't fit Shopify's constraints. We'll recommend honestly based on your case." },
    ],
    seo: {
      title: "Ecommerce Website Development Company | Apexon Development",
      description: "Custom and Shopify ecommerce development focused on conversion, integrations, and reliable checkout.",
      mainKeyword: "ecommerce website development company",
      secondaryKeywords: ["Shopify development agency", "custom ecommerce platform"],
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    shortDescription: "Inventory, production, and reporting software for operationally complex manufacturing businesses.",
    heroDescription: "We build the internal software that keeps inventory accurate, production visible, and reporting reliable.",
    challenges: [
      { title: "Manual inventory tracking", description: "Spreadsheet-based inventory tracking doesn't scale and invites costly errors." },
      { title: "Disconnected floor and office systems", description: "Production data often doesn't flow cleanly into business reporting." },
      { title: "Legacy ERP limitations", description: "Existing ERP systems sometimes need custom extensions rather than a full replacement." },
    ],
    relatedServices: ["custom-software-development", "business-automation", "api-development"],
    relatedTechnologies: ["python-django", "sql-databases", "aws"],
    faqs: [
      { question: "Can you integrate with our existing ERP?", answer: "In most cases yes — we assess your specific ERP's integration options during discovery." },
    ],
    seo: {
      title: "Software for Manufacturing Companies | Apexon Development",
      description: "Inventory, production, and reporting software built for manufacturing operations and ERP integration.",
      mainKeyword: "software for manufacturing companies",
      secondaryKeywords: ["inventory management software development", "ERP development company"],
    },
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
