import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Automatisierte Bestellabwicklung",
  description:
    "Bestellungen automatisch erfassen, validieren und weiterleiten – ohne manuelle Eingriffe.",
};

export const metadata: Metadata = {
  title: "Automatisierte Bestellabwicklung – Großhandel",
  description:
    "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert – von der Erfassung bis zur Auslieferung.",
  openGraph: {
    title: "Automatisierte Bestellabwicklung – Großhandel",
    description:
      "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatisierte Bestellabwicklung – Großhandel",
    description:
      "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert.",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases/grosshandel"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Großhandel
      </Link>

      <article>
        <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
          Großhandel
        </div>
        <Typo.H1>Automatisierte Bestellabwicklung</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Großhändler verarbeiten täglich hunderte Bestellungen über
            unterschiedliche Kanäle – E-Mail, Telefon, Fax und Online-Portale.
            Die manuelle Erfassung ist fehleranfällig, zeitaufwändig und
            skaliert nicht mit wachsendem Bestellvolumen.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unsere AI-Agenten erfassen Bestellungen automatisch aus allen
            Eingangskanälen, validieren Artikelnummern und Mengen gegen das
            Warenwirtschaftssystem und leiten sie direkt zur Kommissionierung
            weiter. Abweichungen werden sofort flaggt und an den zuständigen
            Mitarbeiter eskaliert.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>Bestellerfassung um 80% beschleunigt</li>
            <li>Fehlerquote von 12% auf unter 1% reduziert</li>
            <li>Mitarbeiter für wertschöpfende Aufgaben freigesetzt</li>
            <li>Skalierung ohne zusätzliches Personal</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
