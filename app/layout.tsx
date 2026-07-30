import type { Metadata } from "next";
import { fontBody, fontDisplay, fontMono } from "@/lib/fonts";
import { defaultMetadata } from "@/seo/metadata";
import { organizationSchema } from "@/seo/jsonld";
import { AppProviders } from "@/providers/AppProviders";
import { MainLayout } from "@/layouts/MainLayout";
import ChatBot from "@/components/chatbot/ChatBot";
import "./globals.css";
import OfferToast from "@/components/OfferToast";
import AuthProvider from "@/components/auth/AuthProvider";
import LoginPopup from "@/components/auth/LoginPopup";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <AuthProvider>
          <AppProviders>
            <MainLayout>{children}</MainLayout>
            <OfferToast />
            <ChatBot />
            <LoginPopup />
          </AppProviders>
        </AuthProvider>
      </body>
    </html>
  );
}