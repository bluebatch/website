import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
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

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/blog-workflow"],
  rewrites: [
      ],
};

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
    images: ogImages("Blog Workflow Automatisierung — Bluebatch Insights", "Blog"),
  },
  alternates: {
    canonical: "/blog",
  },
};

// Kein searchParams-Zugriff: der Tag-Filter laeuft clientseitig in
// BlogListFiltered. Dadurch bleibt der Hub statisch prerendert und alle
// Post-Links stehen im ausgelieferten HTML.
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
            <Hero2ColumnDescription geo>
              Der Bluebatch Blog sammelt über 70 Praxisartikel zu
              Workflow-Automatisierung und KI für den Mittelstand. Vier
              Themenstränge: Großhandel, Steuerberatung und Personaldienstleister,
              technische n8n- und Custom-Node-Anleitungen sowie
              Workflow-Grundlagen. Jeder Beitrag stammt aus echten
              Automatisierungsprojekten und nennt Aufwand, Werkzeuge und
              Ergebnis, statt allgemein über Digitalisierung zu schreiben.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/workflow-automation-hub.jpg"
              type="image"
              alt="Modern automation operations hub with connected workflow energy streams"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Blog Posts Grid with Filter */}
      <ContentWrapper>
        <BlogListFiltered posts={posts} />
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
