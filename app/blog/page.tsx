import type { Metadata } from "next";
import { Suspense } from "react";
import ContentWrapper from "@/components/layout/content-wrapper";
import BlogListFiltered from "@/components/blog/blog-list-filtered";
import { getBlogPosts } from "@/lib/get-blog-posts";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";

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
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Blog</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Bluebatch Blog</Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Expertenwissen zu Workflow-Automatisierung, n8n Custom Nodes und
              effiziente Geschäftsprozesse
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/team-collaboration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Blog Posts Grid with Filter */}
      <ContentWrapper>
        <Suspense>
          <BlogListFiltered posts={posts} />
        </Suspense>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
