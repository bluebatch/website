import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";
import SmoothAnchorScroll from "@/components/ui/smooth-anchor-scroll";
import { PostHogProvider } from "@/components/providers/posthog";
import MetaPixel from "@/components/marketing/meta-pixel";
import MetaAdsTracker from "@/components/marketing/meta-ads-tracker";
import HubSpotTracking from "@/components/marketing/hubspot-tracking";
import { getBlogPosts } from "@/lib/get-blog-posts";
import { resolveHref } from "@/lib/get-canonical-path";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allPosts = await getBlogPosts();
  const latestBlogPosts = allPosts.slice(0, 5).map((p) => ({
    title: p.title,
    slug: p.slug,
    href: resolveHref(`/blog/${p.slug}`),
  }));

  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ContactModal>
            <Navigation latestBlogPosts={latestBlogPosts} />

            {children}

            <Footer />
            <CookieConsent />
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
