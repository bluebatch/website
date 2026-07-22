import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";
import { getBlogPosts } from "@/lib/get-blog-posts";
import { resolveHref } from "@/lib/get-canonical-path";

// Standard-Chrome der Hauptseite: Navigation + Footer.
// Die Funnel-Landingpages unter (landingpage-funnel) haben stattdessen ein
// eigenes Minimal-Layout ohne Navigation (Sackgassen-Prinzip).
export default async function SiteLayout({
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
    <>
      <Navigation latestBlogPosts={latestBlogPosts} />
      {children}
      <Footer />
      <CookieConsent />
    </>
  );
}
