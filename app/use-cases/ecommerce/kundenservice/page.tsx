import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Kundenservice Automation",
  description:
    "Kundenanfragen automatisch kategorisieren, beantworten und eskalieren.",
};

export const metadata: Metadata = {
  title: "Kundenservice Automation – E-Commerce",
  description:
    "Wie bluebatch den Kundenservice im E-Commerce automatisiert – schnellere Antworten, weniger Tickets.",
  openGraph: {
    title: "Kundenservice Automation – E-Commerce",
    description:
      "Wie bluebatch den Kundenservice im E-Commerce automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundenservice Automation – E-Commerce",
    description:
      "Wie bluebatch den Kundenservice im E-Commerce automatisiert.",
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
        <Typo.H1>Kundenservice Automation</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Wachsende Bestellzahlen bedeuten mehr Kundenanfragen – zu
            Lieferstatus, Retouren, Produktfragen. Support-Teams kommen nicht
            hinterher, Antwortzeiten steigen und Kundenbewertungen sinken.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unser AI-Agent kategorisiert eingehende Anfragen automatisch,
            beantwortet Standardfragen sofort und eskaliert komplexe Fälle mit
            vollständigem Kontext an das Support-Team. Er greift dabei auf
            Bestelldaten, Tracking-Informationen und Produktkatalog zu.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>70% der Anfragen automatisch beantwortet</li>
            <li>Durchschnittliche Antwortzeit unter 2 Minuten</li>
            <li>Support-Kosten um 45% gesenkt</li>
            <li>Kundenzufriedenheit um 30% gesteigert</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
