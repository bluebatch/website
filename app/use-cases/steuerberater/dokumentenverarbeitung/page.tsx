import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Dokumentenverarbeitung",
  description:
    "Belege, Rechnungen und Steuerdokumente automatisch erkennen, klassifizieren und verarbeiten.",
};

export const metadata: Metadata = {
  title: "Dokumentenverarbeitung – Steuerberater",
  description:
    "Wie bluebatch Steuerberatern hilft, Belege und Dokumente automatisch zu verarbeiten.",
  openGraph: {
    title: "Dokumentenverarbeitung – Steuerberater",
    description:
      "Wie bluebatch Steuerberatern hilft, Belege und Dokumente automatisch zu verarbeiten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokumentenverarbeitung – Steuerberater",
    description:
      "Wie bluebatch Steuerberatern hilft, Belege und Dokumente automatisch zu verarbeiten.",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases/steuerberater"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Steuerberater
      </Link>

      <article>
        <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
          Steuerberater
        </div>
        <Typo.H1>Dokumentenverarbeitung</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Steuerkanzleien erhalten Belege in unterschiedlichsten Formaten –
            Scans, Fotos, PDFs, E-Mail-Anhänge. Die manuelle Sortierung,
            Zuordnung und Erfassung kostet pro Mandant Stunden an Arbeitszeit.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unsere AI-Agenten erkennen Dokumenttypen automatisch, extrahieren
            relevante Daten wie Beträge, Daten und Steuersätze und ordnen sie
            dem richtigen Mandanten und Buchungskonto zu. Die Ergebnisse werden
            direkt in die Buchhaltungssoftware übertragen.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>Belegverarbeitung um 70% beschleunigt</li>
            <li>Erkennungsgenauigkeit über 97%</li>
            <li>Nahtlose Integration in DATEV und Addison</li>
            <li>Mehr Zeit für Mandantenberatung</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
