import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Mandantenkommunikation",
  description:
    "Mandantenanfragen automatisiert beantworten und Dokumentenaustausch vereinfachen.",
};

export const metadata: Metadata = {
  title: "Mandantenkommunikation – Steuerberater",
  description:
    "Wie bluebatch die Mandantenkommunikation für Steuerberater automatisiert.",
  openGraph: {
    title: "Mandantenkommunikation – Steuerberater",
    description:
      "Wie bluebatch die Mandantenkommunikation für Steuerberater automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandantenkommunikation – Steuerberater",
    description:
      "Wie bluebatch die Mandantenkommunikation für Steuerberater automatisiert.",
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
        <Typo.H1>Mandantenkommunikation</Typo.H1>

        <section className="mb-12">
          <Typo.H2>Herausforderung</Typo.H2>
          <Typo.Paragraph>
            Mandanten stellen wiederkehrende Fragen zu Fristen, Bescheiden und
            fehlenden Unterlagen. Jede einzelne Anfrage bindet Kapazitäten in
            der Kanzlei, obwohl die Antworten oft standardisiert sind.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Lösung</Typo.H2>
          <Typo.Paragraph>
            Unser AI-Agent beantwortet Standardanfragen automatisch per E-Mail
            oder über ein Mandantenportal. Er erinnert proaktiv an fehlende
            Unterlagen, informiert über Fristverläufe und eskaliert komplexe
            Anliegen an den zuständigen Steuerberater.
          </Typo.Paragraph>
        </section>

        <section className="mb-12">
          <Typo.H2>Ergebnisse</Typo.H2>
          <ul className="space-y-2 text-base md:text-lg text-gray-700">
            <li>60% weniger Routineanfragen im Team</li>
            <li>Antwortzeit von Tagen auf Minuten reduziert</li>
            <li>Mandantenzufriedenheit um 40% gesteigert</li>
            <li>Fehlende Unterlagen 3x schneller eingesammelt</li>
          </ul>
        </section>
      </article>
    </ContentWrapper>
  );
}
