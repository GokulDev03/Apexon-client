export const COMPANY_INFO = {
  name: "Apexon Development",
  legalName: "Apexon Development LLC",
  tagline: "Software that moves your business forward",
  foundedYear: 2018,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "apexon.development@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91- 9025649921",
  address: {
    street: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://apexon-client.vercel.app",
} as const;
