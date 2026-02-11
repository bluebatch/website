import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import { getSubPages } from "@/lib/get-subpages";

export const metadata: Metadata = {
  title: "E-Commerce – Use Cases | BlueBatch",
  description:
    "Wie BlueBatch E-Commerce-Unternehmen bei Produktdatenmanagement und Kundenservice unterstützt.",
  openGraph: {
    title: "E-Commerce – BlueBatch Use Cases",
    description:
      "Produktdaten und Kundenservice automatisieren – für Skalierung ohne wachsende Teams.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce – BlueBatch Use Cases",
    description:
      "Produktdaten und Kundenservice automatisieren – für Skalierung ohne wachsende Teams.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/ecommerce",
  },
};

export default async function Page() {
  const subPages = await getSubPages(
    "app/use-cases/ecommerce",
    (f) => import(`./${f}/page`),
  );

  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Alle Use Cases
      </Link>

      <Typo.H1>E-Commerce</Typo.H1>
      <Typo.Paragraph>
        Automatisierung und Skalierung für Online-Händler.
      </Typo.Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {subPages.map((page) => (
          <Link
            key={page.slug}
            href={`/use-cases/ecommerce/${page.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 mb-3">
                {page.title}
              </h2>
              <p className="text-gray-600 mb-4">{page.description}</p>
              <span className="text-sm font-medium text-primary-600 group-hover:underline">
                Mehr erfahren →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
