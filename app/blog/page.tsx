import type { Metadata } from "next";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | BlueBatch - Workflow-Automatisierung & n8n Expertise",
  description:
    "Entdecken Sie unsere Artikel über Workflow-Automatisierung, n8n Custom Nodes, Integrationen und Best Practices für effiziente Geschäftsprozesse.",
  openGraph: {
    title: "BlueBatch Blog - Workflow-Automatisierung Insights",
    description:
      "Expertenwissen zu n8n, Custom Nodes und Automatisierungslösungen",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
  },
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "building-custom-node-dev-guide",
    title:
      "Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger Entwickler-Leitfaden",
    description:
      "Transformieren Sie Ihre Workflow-Automatisierung mit benutzerdefinierten n8n Integrationen, die exakt Ihren Anforderungen entsprechen. Vollständiger Guide zur Custom Node Entwicklung.",
    author: "Max Hänsel",
    date: "2025-02-16",
    image: "/blog/building-custom-node-dev-guide/hero.png",
    tags: ["n8n", "Custom Nodes", "Workflow-Automatisierung", "TypeScript"],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper
        isFirstSection
        background="bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <Typo.H1 className="mb-6">BlueBatch Blog</Typo.H1>
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Expertenwissen zu Workflow-Automatisierung, n8n Custom Nodes und
            effiziente Geschäftsprozesse
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Blog Posts Grid */}
      <ContentWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ContentWrapper>

      {/* Call to Action */}
      <ContentWrapper background="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <Typo.H2 className="mb-6">Benötigen Sie Unterstützung?</Typo.H2>
          <Typo.Paragraph className="text-lg mb-8">
            Unser Team steht Ihnen bei der Entwicklung von Custom Nodes und
            Workflow-Automatisierung zur Seite.
          </Typo.Paragraph>
          <Link
            href="/kontakt"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </ContentWrapper>
    </>
  );
}
