import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Lagerverwaltung",
  description:
    "Lagerbestände in Echtzeit überwachen und Nachbestellungen automatisch auslösen.",
};

export const metadata: Metadata = {
  title: "Lagerverwaltung – Großhandel",
  description:
    "Wie bluebatch die Lagerverwaltung im Großhandel automatisiert – Echtzeit-Bestände und automatische Nachbestellungen.",
  openGraph: {
    title: "Lagerverwaltung – Großhandel",
    description:
      "Wie bluebatch die Lagerverwaltung im Großhandel automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagerverwaltung – Großhandel",
    description:
      "Wie bluebatch die Lagerverwaltung im Großhandel automatisiert.",
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
        <Typo.H1>Lagerverwaltung</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Ungenaue Lagerbestände führen zu Überbeständen oder Lieferengpässen.
            Manuelle Bestandsprüfungen kosten Zeit und liefern veraltete Daten,
            bevor sie überhaupt ausgewertet werden.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unsere Plattform synchronisiert Lagerbestände in Echtzeit über alle
            Standorte hinweg. AI-basierte Prognosen erkennen Nachfragemuster und
            lösen Nachbestellungen automatisch aus, bevor Engpässe entstehen.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>Lagerkosten um 30% gesenkt</li>
            <li>Lieferfähigkeit auf 99,2% gesteigert</li>
            <li>Manuelle Bestandsprüfungen eliminiert</li>
            <li>Nachbestellungen vollständig automatisiert</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
