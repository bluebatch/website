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
  title: "Blog Workflow Automatisierung & n8n Expertise | Bluebatch",
  description:
    "Im Blog Workflow Themen entdecken: Automatisierung, n8n Custom Nodes, Integrationen und Best Practices für effiziente Geschäftsprozesse.",
  openGraph: {
    title: "Blog Workflow Automatisierung — Bluebatch Insights",
    description:
      "Blog Workflow Wissen zu n8n, Custom Nodes und Automatisierungslösungen",
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
            <Hero2ColumnHeadline>
              Blog Workflow Automatisierung & n8n Expertise
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              In unserem Blog Workflow Themen vertiefen: Von
              Prozessautomatisierung über n8n Custom Nodes bis hin zu
              KI-gestützten Geschäftsprozessen. Unser Blog Workflow Wissen hilft
              euch, repetitive Aufgaben zu eliminieren und Abläufe effizient zu
              gestalten. Entdeckt praxisnahe Blog Workflow Anleitungen,
              Integrationsbeispiele und Best Practices — damit euer Team sich
              auf das konzentriert, was wirklich zählt. Jeder Blog Workflow
              Beitrag basiert auf echten Projekterfahrungen aus dem
              Automatisierungsalltag.
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
