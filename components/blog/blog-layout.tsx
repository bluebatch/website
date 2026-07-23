import { ReactNode } from "react";
import type { Metadata } from "next";
import Typo from "@/components/ui/typo";
import ContentWrapper from "../layout/content-wrapper";
import type { BlogMeta } from "@/lib/meta-custom";
import { getAuthor } from "@/lib/blog-authors";

const SITE_ORIGIN = "https://bluebatch.io";

type BlogLayoutProps = {
  children: ReactNode;
  /** metaCustom der Seite — erzeugt das Article-Schema */
  meta?: BlogMeta;
  /** metadata der Seite — liefert Titel und Beschreibung fuer das Schema */
  metadata?: Metadata;
};

/**
 * Article-JSON-LD aus den Daten, die jede Blogseite ohnehin exportiert.
 *
 * Bewusst hier und nicht je Seite: eine Auszeichnung, die pro Seite gepflegt
 * werden muss, landet erfahrungsgemaess bei "28 von 217" und bleibt dort.
 */
function articleSchema(meta: BlogMeta, metadata?: Metadata) {
  const rawTitle = typeof metadata?.title === "string" ? metadata.title : "";
  const headline = rawTitle.replace(/ \| Bluebatch$/, "");
  const author = getAuthor(meta.author);
  const url = `${SITE_ORIGIN}/blog/${meta.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: metadata?.description ?? undefined,
    image: meta.image ? `${SITE_ORIGIN}${meta.image}` : undefined,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.linkedIn ? { sameAs: author.linkedIn } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Bluebatch",
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

function BlogLayout({ children, meta, metadata }: BlogLayoutProps) {
  return (
    <ContentWrapper noPadding bodyWidth="wide">
      {meta && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema(meta, metadata)),
          }}
        />
      )}
      <div className="grid grid-cols-1 xl:grid-cols-[200px_1fr_300px] gap-6">
        {/* Left Sidebar - Hidden on Mobile */}
        <div className="hidden xl:block"></div>
        {children}
      </div>
    </ContentWrapper>
  );
}

type BlogLayoutContentProps = {
  children: ReactNode;
};

function BlogLayoutContent({ children }: BlogLayoutContentProps) {
  return <div className="overflow-hidden px-4 xl:px-0">{children}</div>;
}

type BlogLayoutNavigationProps = {
  children: ReactNode;
  title?: string;
};

function BlogLayoutNavigation({
  children,
  title = "Inhaltsverzeichnis",
}: BlogLayoutNavigationProps) {
  return (
    <div>
      <aside className="sticky top-30 p-6">
        <Typo.H3 className="mb-6">{title}</Typo.H3>
        <ol className="space-y-2 text-sm">{children}</ol>
      </aside>
    </div>
  );
}

type BlogLayoutNavigationItemProps = {
  idLink: string;
  children: ReactNode;
};

function BlogLayoutNavigationItem({
  idLink,
  children,
}: BlogLayoutNavigationItemProps) {
  return (
    <li>
      <a
        href={`#${idLink}`}
        className="text-primary-600 hover:text-primary-700"
      >
        {children}
      </a>
    </li>
  );
}

type BlogLayoutNavigationSubItemProps = {
  idLink: string;
  children: ReactNode;
};

function BlogLayoutNavigationSubItem({
  idLink,
  children,
}: BlogLayoutNavigationSubItemProps) {
  return (
    <li className="pl-4">
      <a
        href={`#${idLink}`}
        className="text-primary-400 hover:text-primary-700 text-xs"
      >
        {children}
      </a>
    </li>
  );
}

BlogLayout.Content = BlogLayoutContent;
BlogLayout.Navigation = BlogLayoutNavigation;
BlogLayout.NavigationItem = BlogLayoutNavigationItem;
BlogLayout.NavigationSubItem = BlogLayoutNavigationSubItem;

export default BlogLayout;
