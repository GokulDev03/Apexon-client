export const COMPANY_INFO = {
  name: "Apexon Development",
  legalName: "Apexon Development LLC",
  tagline: "Software that moves your business forward",
  foundedYear: 2018,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@apexondevelopment.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1-000-000-0000",
  address: {
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apexondevelopment.com",
} as const;
