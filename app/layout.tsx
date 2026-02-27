import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";
import { PostHogProvider } from "@/components/providers/posthog";

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
          <Navigation />

          {children}

          <Footer />
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
