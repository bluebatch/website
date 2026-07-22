import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothAnchorScroll from "@/components/ui/smooth-anchor-scroll";
import { PostHogProvider } from "@/components/providers/posthog";
import MetaPixel from "@/components/marketing/meta-pixel";
import MetaAdsTracker from "@/components/marketing/meta-ads-tracker";
import HubSpotTracking from "@/components/marketing/hubspot-tracking";
import ContactModal from "@/components/contact/contact-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bluebatch.io"),
  title: "Bluebatch – AI Workflow Builder",
  description:
    "Build powerful AI agents that work predictably in production. Transform your business with intelligent automation and AI-powered workflows.",
};

// Navigation + Footer leben bewusst NICHT hier, sondern in app/(site)/layout.tsx —
// die Funnel-Landingpages unter (landingpage-funnel) bekommen nur ihr eigenes
// Minimal-Chrome. ContactModal muss global bleiben: auch Funnel-Seiten nutzen
// ContactButton/useContactModal.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ContactModal>
            {children}

            {/* CookieConsent lebt in den Gruppen-Layouts: (site) mit normalen
                Rechtslinks, (landingpage-funnel) mit den *-funnel-Varianten. */}
            <SmoothAnchorScroll />
            <MetaPixel />
            <MetaAdsTracker />
            <HubSpotTracking />
          </ContactModal>
        </PostHogProvider>
      </body>
    </html>
  );
}
