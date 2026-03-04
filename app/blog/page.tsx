import type { Metadata } from "next";
import { Suspense } from "react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import Link from "next/link";
import BlogListFiltered from "@/components/blog/blog-list-filtered";
import { getBlogPosts } from "@/lib/get-blog-posts";

export const metadata: Metadata = {
  title: "Blog | Bluebatch - Workflow-Automatisierung & n8n Expertise",
  description:
    "Entdecken Sie unsere Artikel über Workflow-Automatisierung, n8n Custom Nodes, Integrationen und Best Practices für effiziente Geschäftsprozesse.",
  openGraph: {
    title: "Bluebatch Blog - Workflow-Automatisierung Insights",
    description:
      "Expertenwissen zu n8n, Custom Nodes und Automatisierungslösungen",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <ContentWrapper
        isFirstSection
        colorScheme="gradient-cool"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Typo.H1 className="mb-6">Bluebatch Blog</Typo.H1>
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Expertenwissen zu Workflow-Automatisierung, n8n Custom Nodes und
            effiziente Geschäftsprozesse
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Blog Posts Grid with Filter */}
      <ContentWrapper>
        <div className="max-w-6xl mx-auto">
          <Suspense>
            <BlogListFiltered posts={posts} />
          </Suspense>
        </div>
      </ContentWrapper>

      {/* Call to Action */}
      <ContentWrapper colorScheme="gradient-cool">
        <div className="max-w-4xl mx-auto text-center">
          <Typo.H2 className="mb-6">Benötigen Sie Unterstützung?</Typo.H2>
          <Typo.Paragraph className="text-lg mb-8">
            Unser Team steht Ihnen bei der Entwicklung von Custom Nodes und
            Workflow-Automatisierung zur Seite.
          </Typo.Paragraph>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </ContentWrapper>
    </>
  );
}
