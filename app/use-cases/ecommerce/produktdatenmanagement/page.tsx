import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Produktdatenmanagement",
  description:
    "Produktdaten automatisch pflegen, anreichern und über alle Kanäle synchronisieren.",
};

export const metadata: Metadata = {
  title: "Produktdatenmanagement – E-Commerce | BlueBatch",
  description:
    "Wie BlueBatch E-Commerce-Unternehmen hilft, Produktdaten automatisch zu pflegen und zu synchronisieren.",
  openGraph: {
    title: "Produktdatenmanagement – E-Commerce | BlueBatch",
    description:
      "Produktdaten automatisch pflegen, anreichern und über alle Kanäle synchronisieren.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [{ url: "/images/bluebatch-social-cover.jpg", width: 1200, height: 630, alt: "BlueBatch Produktdatenmanagement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Produktdatenmanagement – E-Commerce | BlueBatch",
    description:
      "Produktdaten automatisch pflegen, anreichern und über alle Kanäle synchronisieren.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/ecommerce/produktdatenmanagement",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases/ecommerce"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← E-Commerce
      </Link>

      <article>
        <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
          E-Commerce
        </div>
        <Typo.H1>Produktdatenmanagement</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Online-Händler verwalten tausende Produkte über mehrere Kanäle –
            eigener Shop, Marktplätze, Social Commerce. Inkonsistente
            Produktdaten führen zu Retouren, schlechten Rankings und
            Kundenverlust.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unsere Plattform zentralisiert Produktdaten und synchronisiert
            Titel, Beschreibungen, Preise und Bilder automatisch über alle
            Verkaufskanäle. AI-Agenten reichern Produkttexte an, optimieren sie
            für SEO und übersetzen sie bei Bedarf.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>Produktpflege-Aufwand um 65% reduziert</li>
            <li>Datenkonsistenz über alle Kanäle auf 99%</li>
            <li>SEO-optimierte Texte für höhere Sichtbarkeit</li>
            <li>Time-to-Market für neue Produkte halbiert</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
