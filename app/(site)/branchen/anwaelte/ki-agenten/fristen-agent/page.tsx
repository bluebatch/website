import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import { FlowDiagram } from "@/components/diagrams";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";
import { CalendarClock, FileSearch, ShieldAlert, UserCheck } from "lucide-react";

const TITLE = "Fristen-Agent für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: erkennen, rechnen, vorlegen | Bluebatch`,
  description:
    "Der Fristen-Agent erkennt fristauslösende Dokumente, berechnet Vorfrist und Endfrist und legt sie zur Bestätigung vor. Eingetragen wird erst nach Prüfung, das Vier-Augen-Prinzip bleibt.",
  keywords: [
    "Fristenkontrolle KI",
    "Fristen Kanzlei automatisieren",
    "Fristenkalender Anwalt",
    "fristauslösende Dokumente erkennen",
  ],
  openGraph: {
    title: `${TITLE}: erkennen, rechnen, vorlegen`,
    description:
      "Fristauslösende Dokumente erkennen, Fristen berechnen und zur Bestätigung vorlegen. Eintrag erst nach Prüfung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/ki-agenten/fristen-agent",
  },
};

const leistet = [
  {
    title: "Fristauslöser erkennen",
    text: "Der Agent prüft eingehende Schreiben darauf, ob sie eine Frist auslösen, und benennt die Stelle im Dokument, aus der er das ableitet. Nicht jedes Gerichtsschreiben tut es, und nicht nur Gerichtsschreiben tun es.",
  },
  {
    title: "Zustellung datieren",
    text: "Maßgeblich ist nicht der Tag, an dem jemand die Nachricht öffnet. Der Agent zieht das Zustelldatum aus den Metadaten der beA-Nachricht oder aus dem Empfangsbekenntnis und macht sichtbar, worauf er sich stützt.",
  },
  {
    title: "Vor- und Endfrist rechnen",
    text: "Berechnung nach Ihren Kanzleiregeln, inklusive Vorfrist und der Behandlung von Wochenenden und Feiertagen. Die Regeln kommen aus Ihrem Haus, nicht aus einer Standardannahme.",
  },
  {
    title: "Zur Bestätigung vorlegen",
    text: "Vorschlag mit Herleitung geht an die Fristenverantwortliche. Erst nach Bestätigung wird die Frist in der Kanzleisoftware eingetragen. Ohne Bestätigung passiert nichts.",
  },
];

const faqs = [
  {
    question: "Trägt der Agent Fristen automatisch ein?",
    answer:
      "Nein, und das ist eine bewusste Entscheidung. Die Fristenkontrolle ist der haftungskritischste Vorgang einer Kanzlei. Der Agent liefert Vorschlag und Herleitung, eingetragen wird nach Bestätigung durch die zuständige Person. Der Gewinn liegt darin, dass nichts übersehen wird und die Herleitung dokumentiert ist, nicht darin, den Menschen aus dem Vorgang zu nehmen.",
  },
  {
    question: "Ersetzt das die Fristenkontrolle im Kanzleiablauf?",
    answer:
      "Nein, es ist eine zusätzliche Instanz davor. Ihre bestehende Fristenkontrolle bleibt vollständig bestehen, der Agent arbeitet ihr zu. Wer ihn als Ersatz einsetzt, hat das Werkzeug falsch verstanden, und darauf weisen wir vor dem Projekt hin.",
  },
  {
    question: "Was passiert, wenn der Agent eine Frist übersieht?",
    answer:
      "Genau deshalb ändert er an Ihrem bestehenden Ablauf nichts. Er ist ein zusätzliches Netz, keine Ablösung des vorhandenen. In der Einführungsphase läuft er mit und wird gegen die tatsächlich eingetragenen Fristen gemessen, damit Sie die Trefferquote an echten Vorgängen kennen, bevor sich jemand auf ihn stützt.",
  },
  {
    question: "Funktioniert das mit unserer Kanzleisoftware?",
    answer:
      "Bei actaport schreibt der Workflow die bestätigte Frist über die REST-API zurück. Bei RA-MICRO gibt es keine öffentlich dokumentierte REST-API für Drittsysteme, dort wird die bestätigte Frist als Aufgabe mit allen Daten vorgelegt und im Programm eingetragen. Der Erkennungs- und Rechenteil ist in beiden Fällen derselbe.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Fristen-Agent: erkennen und rechnen, eintragen erst nach Prüfung
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Der Fristen-Agent prüft eingehende Schreiben einer Anwaltskanzlei
            darauf, ob sie eine Frist auslösen, zieht das maßgebliche
            Zustelldatum, berechnet Vorfrist und Endfrist nach den Regeln der
            Kanzlei und legt das Ergebnis mit Herleitung zur Bestätigung vor.
            Eingetragen wird erst nach Prüfung durch die zuständige Person.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/fristen-agent/foto.png"
              alt="Tischkalender mit markierten Terminen neben einer geschlossenen Akte"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Prinzip</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Schritte, und einer davon ist ein Mensch
          </IntroBox.Headline>
        </IntroBox>
        <FlowDiagram
          className="mt-12"
          nodes={[
            {
              icon: <FileSearch className="h-5 w-5" />,
              label: "Dokument pruefen",
              sublabel: "loest es eine Frist aus?",
            },
            {
              icon: <CalendarClock className="h-5 w-5" />,
              label: "Zustellung datieren",
              sublabel: "aus beA-Metadaten oder EB",
            },
            {
              icon: <ShieldAlert className="h-5 w-5" />,
              label: "Fristen rechnen",
              sublabel: "Vorfrist und Endfrist, Kanzleiregeln",
              highlight: true,
            },
            {
              icon: <UserCheck className="h-5 w-5" />,
              label: "Bestaetigung",
              sublabel: "erst danach Eintrag im Kalender",
            },
          ]}
          caption="Der Agent macht die Herleitung sichtbar. Geprüft wird nicht sein Ergebnis, sondern sein Rechenweg, und das geht schneller."
        />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Leistung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was der Agent übernimmt</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {leistet.map((l) => (
            <SimpleCard key={l.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{l.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {l.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src="/images/fristen-agent/ablauf.png"
              alt="Fristenkette vom Auslöser bis zur Bestätigung durch den Berufsträger"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Zusammenspiel</IntroBox.PreHeadline>
          <IntroBox.Headline>Woher die Dokumente kommen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Fristen-Agent setzt auf dem auf, was der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/posteingang-agent"
              variant="underline"
            >
              Posteingangs-Agent
            </InternalLink>{" "}
            bereits gelesen und zugeordnet hat. Der Rückschreibeweg in die
            Kanzleisoftware hängt daran, was sie hergibt, und das erklärt die
            Seite zu{" "}
            <InternalLink
              href="/branchen/anwaelte/workflows"
              variant="underline"
            >
              automatisierten Kanzlei-Workflows
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zur automatisierten Fristenerkennung am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
