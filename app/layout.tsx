import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";
import { PostHogProvider } from "@/components/providers/posthog";
import { getBlogPosts } from "@/lib/get-blog-posts";
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
          </ContactModal>
        </PostHogProvider>
      </body>
    </html>
  );
}
