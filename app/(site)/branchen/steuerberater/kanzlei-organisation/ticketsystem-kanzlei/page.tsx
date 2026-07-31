import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import { UserX, EyeOff, CalendarX, Archive } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "Ticketsystem in der Kanzlei - Mandantenkommunikation mit Struktur | Bluebatch",
  description:
    "Ticketsystem statt E-Mail für Steuerkanzleien: Warum das Sammelpostfach nicht skaliert und wie Tickets Zuständigkeit, Status und Fristen sichtbar machen.",
  openGraph: {
    title: "Ticketsystem in der Kanzlei - Bluebatch",
    description:
      "Ticketsystem statt E-Mail für Steuerkanzleien: Warum das Sammelpostfach nicht skaliert und wie Tickets Zuständigkeit, Status und Fristen sichtbar machen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Ticketsystem in der Kanzlei", "Steuerberater"),
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/ticketsystem-kanzlei",
  },
};

const probleme = [
  {
    icon: UserX,
    title: "Keine Zuständigkeit",
    body: "Eine Mail im Sammelpostfach gehört allen und damit niemandem. Jeder hofft, dass ein anderer antwortet, oder zwei antworten doppelt. Ein Ticket hat dagegen immer genau einen Verantwortlichen.",
  },
  {
    icon: EyeOff,
    title: "Kein Status",
    body: "Ist die Anfrage von Montag erledigt, in Arbeit oder untergegangen? Ein Postfach kennt nur gelesen und ungelesen. Ein Ticket kennt offen, in Arbeit, wartet auf Mandant und erledigt, für jeden sichtbar.",
  },
  {
    icon: CalendarX,
    title: "Fristen bleiben unsichtbar",
    body: "In der Mail-Flut sieht niemand, dass hinter einer Anfrage eine Einspruchsfrist steckt. Tickets tragen Fälligkeiten: Was drängt, steht oben, und Überfälliges eskaliert automatisch, statt still zu versanden.",
  },
  {
    icon: Archive,
    title: "Wissen steckt in Postfächern",
    body: "Der Verlauf einer Mandantenanfrage verteilt sich über persönliche Postfächer und CC-Ketten. Bei Urlaub oder Kündigung ist die Historie weg. Im Ticketsystem liegt der komplette Vorgang an einem Ort, für jede Vertretung nachvollziehbar.",
  },
];

const faqs = [
  {
    question: "Was bringt ein Ticketsystem einer Steuerkanzlei?",
    answer:
      "Jede Mandantenanfrage wird ein Vorgang mit Verantwortlichem, Status und Fälligkeit. Die Kanzlei sieht jederzeit, was offen ist, wer es bearbeitet und wo Fristen drohen. Anfragen gehen nicht mehr unter, Doppelarbeit entfällt, und Vertretungen können jeden Vorgang lückenlos übernehmen.",
  },
  {
    question: "Müssen Mandanten dafür ein neues Tool lernen?",
    answer:
      "Nein. Mandanten schreiben weiter ganz normal E-Mails, das Ticketsystem wandelt eingehende Mails automatisch in Tickets um und schickt Antworten als normale Mail zurück. Ein Portal-Zugang für Mandanten ist möglich, aber kein Muss für den Start.",
  },
  {
    question: "Ersetzt das Ticketsystem den Mail-Agenten?",
    answer:
      "Nein, die beiden ergänzen sich: Das Ticketsystem ist die Struktur, die Anfragen ordnet und nachverfolgbar macht. Der Mail-Agent ist die KI, die innerhalb dieser Struktur Anfragen einordnet und Antwortentwürfe schreibt. Struktur zuerst, dann lohnt sich die KI doppelt.",
  },
  {
    question: "Wie führt eine Kanzlei ein Ticketsystem ein?",
    answer:
      "Schrittweise: erst ein Kanal, zum Beispiel das zentrale Info-Postfach, mit klaren Kategorien und Zuständigkeiten je Rolle. Persönliche Postfächer folgen später. Wichtig ist die organisatorische Vorarbeit, denn ein Ticketsystem bildet nur die Rollen ab, die die Kanzlei definiert hat.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Ticketsystem statt E-Mail: Mandantenkommunikation mit System
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein Ticketsystem bündelt die gesamte Mandantenkommunikation einer
            Steuerkanzlei an einem Ort: Jede Anfrage wird ein Ticket mit
            Verantwortlichem, Status und Frist. Das klassische Sammelpostfach
            skaliert nicht, weil Zuständigkeit und Bearbeitungsstand
            unsichtbar bleiben. Mit Tickets sieht die Kanzlei jederzeit,
            welche Anfragen offen sind, wer sie bearbeitet und wo Fristen
            drohen.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Warum das Sammelpostfach nicht skaliert */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum das Sammelpostfach nicht skaliert
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Bei 50 Mandanten funktioniert ein gemeinsames Postfach irgendwie.
            Bei 200 Mandanten wird es zum größten Risiko der Kanzlei, aus vier
            Gründen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {probleme.map((item) => {
            const Icon = item.icon;
            return (
              <SimpleCard key={item.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{item.title}</Typo.H3>
                <Typo.Paragraph>{item.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* So arbeitet die Kanzlei mit Tickets */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der Weg einer Mandantenanfrage im Ticketsystem
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Für den Mandanten ändert sich nichts, er schreibt weiter E-Mails.
            Für die Kanzlei ändert sich alles.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Anfrage wird zum Ticket</Typo.H3>
              <Typo.Paragraph>
                Die Mandanten-Mail landet nicht in einem Postfach, sondern wird
                automatisch ein Ticket: mit Mandanten-Zuordnung, Kategorie und
                Eingangszeit. Nichts kann mehr ungesehen in einem persönlichen
                Posteingang liegen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Ticket bekommt Verantwortlichen und Frist</Typo.H3>
              <Typo.Paragraph>
                Nach definierten Regeln geht das Ticket an die zuständige
                Rolle: Belegfragen zur FiBu, Gehaltsthemen zum Lohn,
                Terminwünsche ans Backoffice. Steckt eine Frist dahinter, wird
                sie am Ticket hinterlegt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Bearbeitung mit sichtbarem Status</Typo.H3>
              <Typo.Paragraph>
                Der Verantwortliche arbeitet das Ticket ab, der Status ist für
                das ganze Team sichtbar: in Arbeit, wartet auf Mandant,
                erledigt. Rückfragen und Antworten hängen am Vorgang, nicht in
                CC-Ketten.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Auswertung statt Bauchgefühl</Typo.H3>
              <Typo.Paragraph>
                Die Kanzleileitung sieht, wie viele Anfragen reinkommen, wie
                lange Antworten dauern und welche Themen sich häufen. Häufige
                Fragen wandern als Artikel ins Kanzleihandbuch oder werden
                automatisiert beantwortet.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Abgrenzung Mail-Agent */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Ticketsystem und Mail-Agent: Struktur plus KI
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Das Ticketsystem ordnet die Kommunikation, beantwortet aber
              nichts. Genau da setzt der{" "}
              <InternalLink
                href="/branchen/steuerberater/ki-agenten/mail-agent"
                variant="underline"
              >
                Mail-Agent
              </InternalLink>{" "}
              an: Er liest eingehende Anfragen, erkennt den Mandanten und
              schreibt Antwortentwürfe, die Ihr Team nur noch freigibt.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Die Reihenfolge ist wichtig: Erst die Struktur, dann die KI. Ein
              Mail-Agent auf einem chaotischen Sammelpostfach beschleunigt das
              Chaos. Ein Mail-Agent in einem Ticketsystem mit klaren Rollen
              entlastet die Kanzlei doppelt: Die Struktur verteilt, die KI
              formuliert.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/kanzlei-organisation">
              Zurück zur Übersicht Kanzlei-Organisation
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/client-communication.jpg"
              alt="Strukturierte Mandantenkommunikation im Ticketsystem"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* CTA-Absatz */}
      <ContentWrapper colorScheme="white">
        <div className="text-center max-w-2xl mx-auto">
          <Typo.H2 className="mb-4">
            Wo steht Ihre Mandantenkommunikation heute?
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-6">
            Ob ein Ticketsystem der richtige nächste Schritt ist oder erst die
            Rollen geklärt werden sollten, zeigt die Ist-Aufnahme im{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop"
              variant="underline"
            >
              Kanzlei-Digitalisierungs-Workshop
            </InternalLink>
            .
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum Ticketsystem in der Kanzlei
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
