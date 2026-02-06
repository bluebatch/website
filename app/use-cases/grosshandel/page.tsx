import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import { getSubPages } from "@/lib/get-subpages";

export const metadata: Metadata = {
  title: "Großhandel – Use Cases",
  description:
    "Wie bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
  openGraph: {
    title: "Großhandel – Use Cases",
    description:
      "Wie bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Großhandel – Use Cases",
    description:
      "Wie bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
  },
};

export default async function Page() {
  const subPages = await getSubPages("app/use-cases/grosshandel", (f) =>
    import(`./${f}/page`),
  );

  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Alle Use Cases
      </Link>

      <Typo.H1>Großhandel</Typo.H1>
      <Typo.Paragraph>
        Automatisierung und Prozessoptimierung für den Großhandel.
      </Typo.Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {subPages.map((page) => (
          <Link
            key={page.slug}
            href={`/use-cases/grosshandel/${page.slug}`}
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
