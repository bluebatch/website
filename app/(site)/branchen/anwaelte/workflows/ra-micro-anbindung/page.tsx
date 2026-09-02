import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns from "@/components/ui/prose-columns";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "RA-MICRO an Automatisierung anbinden";

export const metadata: Metadata = {
  title: `${TITLE} | Bluebatch`,
  description:
    "RA-MICRO automatisieren, ohne offene REST-API: Anbindung über Dokumentenablage, Exporte und beA-Postfach. Was dabei geht, was nicht, und wie der Schnitt sauber bleibt.",
  keywords: [
    "RA-MICRO Schnittstelle",
    "RA-MICRO automatisieren",
    "RA-MICRO n8n",
    "RA-MICRO Anbindung",
  ],
  openGraph: {
    title: `${TITLE} | Bluebatch`,
    description:
      "Anbindung über Dokumentenablage, Exporte und beA-Postfach. Was geht, was nicht, und wo der Schnitt liegt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/workflows/ra-micro-anbindung",
  },
};

const wege = [
  {
    title: "Dokumentenablage",
    text: "RA-MICRO legt Dokumente strukturiert ab. Diese Struktur ist der verlässlichste Ansatzpunkt: Neue Dateien werden erkannt, gelesen, klassifiziert und ausgewertet, ohne dass in das Programm hineingegriffen wird.",
  },
  {
    title: "Exporte",
    text: "Wo RA-MICRO Listen und Auswertungen ausgeben kann, nutzen wir das als Datenquelle. Regelmäßige Exporte sind unelegant, aber stabil, und sie brechen nicht mit dem nächsten Programmupdate.",
  },
  {
    title: "beA-Postfach",
    text: "Der elektronische Rechtsverkehr läuft ohnehin über beA. Für den Eingang ist das ein eigener, gut greifbarer Kanal, unabhängig davon, was die Kanzleisoftware nach außen freigibt.",
  },
  {
    title: "Vorlage statt Rückschreiben",
    text: "Was nicht zuverlässig zurückgeschrieben werden kann, wird als fertige Aufgabe vorgelegt: alle Daten aufbereitet, ein Schritt zum Eintragen. Das ist ehrlicher als eine brüchige Automatik.",
  },
];

const faqs = [
  {
    question: "Hat RA-MICRO eine API für Drittsysteme?",
    answer:
      "Öffentlich dokumentiert findet sich keine REST-API für Drittanbieter. RA-MICRO beschreibt sich als Kanzleisoftware mit Modulen für E-Akte, beA, Fristen, Gebühren, Zwangsvollstreckung und Buchhaltung, wahlweise lokal oder in der RA-MICRO Cloud betrieben. Für Automatisierung heißt das: Der Weg führt über die Ablage, über Exporte und über beA, nicht über eine Schnittstelle. Ob in Ihrer Installation oder Ihrem Vertrag mehr möglich ist, klären wir mit Ihnen und gegebenenfalls mit dem Hersteller.",
  },
  {
    question: "Ist das dann Bastelei?",
    answer:
      "Nein, aber es ist eine andere Bauweise. Statt eine API aufzurufen, arbeiten wir mit den Artefakten, die das Programm ohnehin erzeugt. Das ist robuster, als es klingt, weil Ablagestrukturen sich seltener ändern als Programmoberflächen. Was wir nicht tun: die Oberfläche fernsteuern oder direkt in die Datenbank schreiben. Beides ist fragil und im Zweifel nicht vom Vertrag mit dem Hersteller gedeckt.",
  },
  {
    question: "Was lässt sich damit realistisch automatisieren?",
    answer:
      "Der gesamte Eingangsweg: Post lesen, klassifizieren, der Akte zuordnen, Fristbezug erkennen, Aufgaben verteilen, Entwürfe vorbereiten und Auswertungen erzeugen. Was schwerer wird, ist das automatische Zurückschreiben in RA-MICRO. Genau deshalb legen wir dort vor, statt zu schreiben.",
  },
  {
    question: "Lohnt sich ein Wechsel zu actaport?",
    answer:
      "Das ist eine Entscheidung über die Kanzleisoftware, nicht über Automatisierung, und die treffen wir nicht für Sie. Fakt ist: Mit einer offenen REST-API ist die Anbindung schneller und günstiger. Wenn ein Wechsel ohnehin im Raum steht, ist das ein Argument. Wenn nicht, ist RA-MICRO kein Ausschlusskriterium für Automatisierung.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            RA-MICRO anbinden: Automatisierung ohne offene Schnittstelle
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            RA-MICRO ist eine der verbreitetsten Kanzleisoftwares in
            Deutschland, dokumentiert für Drittsysteme aber keine offene
            REST-API. Automatisierung läuft deshalb über die Dokumentenablage,
            über Exporte und über das beA-Postfach. Damit lassen sich
            Posteingang, Zuordnung und Fristerkennung automatisieren, während
            der Eintrag im Programm ein bestätigter Schritt bleibt.
          </GeoSummary>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Die ehrliche Ausgangslage
        </Typo.H2>
        <Typo.Paragraph className="mb-4 text-center text-gray-600">
          Viele Automatisierungsangebote setzen stillschweigend voraus, dass
          jede Software eine API hat. Bei RA-MICRO ist das nicht der Fall, und
          wer das erst im Projekt merkt, baut entweder etwas Fragiles oder
          liefert gar nicht.
        </Typo.Paragraph>
        <Typo.Paragraph className="text-center text-gray-600">
          Wir sagen es deshalb vorher: Der Weg ist ein anderer als bei einer
          Cloud-Software, das Ergebnis im Alltag aber vergleichbar. Der
          Unterschied liegt im Rückschreiben, nicht im Lesen und Verstehen.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Anbindungswege</IntroBox.PreHeadline>
          <IntroBox.Headline>Vier Wege, die tragen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {wege.map((w) => (
            <SimpleCard key={w.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{w.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {w.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Abgrenzung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was wir bewusst nicht bauen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Es gäbe Wege, die technisch funktionieren und trotzdem falsch sind.
            Wir nennen sie hier, damit klar ist, wo unsere Grenze liegt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto mt-12 max-w-4xl">
          <ProseColumns cols={2} wide>
            <ProseColumns.Item title="Keine Oberflächen-Fernsteuerung">
              <Typo.Paragraph className="text-gray-600">
                Ein Skript, das Mausklicks im Programm nachahmt, funktioniert
                bis zum nächsten Update und fällt dann still aus. In einer
                Kanzlei, in der Fristen an Abläufen hängen, ist stiller Ausfall
                der schlechteste Fehlermodus.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Kein direkter Datenbankzugriff">
              <Typo.Paragraph className="text-gray-600">
                Schreibend in die Datenbank eines Kanzleiprogramms zu greifen,
                ist ein Risiko für die Datenintegrität und im Zweifel nicht vom
                Vertrag mit dem Hersteller gedeckt. Lesende Auswertungen prüfen
                wir im Einzelfall gemeinsam mit Ihnen.
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was darauf aufsetzt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Steht die Anbindung, laufen darauf der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/posteingang-agent"
              variant="underline"
            >
              Posteingangs-Agent
            </InternalLink>{" "}
            und der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/fristen-agent"
              variant="underline"
            >
              Fristen-Agent
            </InternalLink>
            . Kanzleien mit actaport nehmen stattdessen den{" "}
            <InternalLink
              href="/branchen/anwaelte/actaport-cloud-connector-implementierung"
              variant="underline"
            >
              actaport Connector
            </InternalLink>
            , der direkt über die REST-API arbeitet.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zur Anbindung von RA-MICRO am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
