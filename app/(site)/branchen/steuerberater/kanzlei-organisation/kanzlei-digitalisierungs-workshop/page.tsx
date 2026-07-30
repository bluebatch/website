import type { Metadata } from "next";
import Image from "next/image";
import {
  SearchCheck,
  Users,
  ListChecks,
  Map,
  CheckCircle2,
  XCircle,
} from "lucide-react";
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
  title: "Kanzlei-Digitalisierungs-Workshop - Ist-Aufnahme & Fahrplan | Bluebatch",
  description:
    "Der Kanzlei-Digitalisierungs-Workshop: Ist-Aufnahme Ihrer Prozesse, Rollen-Modell, Priorisierung der Automatisierungs-Kandidaten und ein konkreter Fahrplan.",
  openGraph: {
    title: "Kanzlei-Digitalisierungs-Workshop - Bluebatch",
    description:
      "Der Kanzlei-Digitalisierungs-Workshop: Ist-Aufnahme Ihrer Prozesse, Rollen-Modell, Priorisierung der Automatisierungs-Kandidaten und ein konkreter Fahrplan.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop",
  },
};

const ergebnisse = [
  {
    icon: SearchCheck,
    title: "Ist-Aufnahme der Prozesse",
    body: "Wir gehen die wiederkehrenden Abläufe Ihrer Kanzlei durch: Posteingang, Belegwege, FiBu, Lohn, Jahresabschluss, Fristen. Für jeden Prozess halten wir fest, wer ihn macht, welche Tools beteiligt sind und wo Zeit oder Qualität verloren geht.",
  },
  {
    icon: Users,
    title: "Rollen-Modell",
    body: "Aus der Ist-Aufnahme entsteht ein Rollen-Modell für FiBu, Lohn, Jahresabschluss und Backoffice: klare Zuständigkeiten statt \"jeder macht alles\". Das ist die organisatorische Voraussetzung, damit Automatisierung später greifen kann.",
  },
  {
    icon: ListChecks,
    title: "Priorisierte Automatisierungs-Kandidaten",
    body: "Wir bewerten die aufgenommenen Prozesse nach Aufwand und Wirkung und gleichen sie mit 50 erprobten Kanzlei-Use-Cases ab. So entsteht eine ehrliche Shortlist: Was lohnt sich zuerst, was später, was gar nicht.",
  },
  {
    icon: Map,
    title: "Fahrplan",
    body: "Das Ergebnis ist ein dokumentierter Fahrplan mit konkreten nächsten Schritten: welche Organisations-Bausteine zuerst kommen, welcher Prozess als Pilot automatisiert wird und woran Sie den Erfolg messen.",
  },
];

const geeignet = [
  "Kanzleien, die digitalisieren wollen, aber nicht wissen, womit sie anfangen sollen",
  "Kanzleien, in denen Wissen an einzelnen Personen hängt und Prozesse nirgendwo dokumentiert sind",
  "Kanzleien, die vor einer KI- oder Automatisierungs-Entscheidung erst Klarheit über ihre Abläufe wollen",
  "Kanzleiinhaber, die wachsen wollen, ohne dass die interne Reibung mitwächst",
];

const nichtGeeignet = [
  "Kanzleien, die nur ein einzelnes Tool eingeführt haben wollen, ohne die Prozesse anzuschauen",
  "Kanzleien, die eine fertige Automatisierung ohne Beteiligung des Teams erwarten",
];

const faqs = [
  {
    question: "Wie lange dauert der Kanzlei-Digitalisierungs-Workshop?",
    answer:
      "Der Kern ist ein kompakter Workshop-Tag mit Inhaber und Schlüsselpersonen, vor Ort in Ihrer Kanzlei oder remote. Dazu kommen ein kurzes Vorgespräch zur Vorbereitung und die dokumentierte Auswertung mit dem Fahrplan im Nachgang.",
  },
  {
    question: "Was kostet der Workshop?",
    answer:
      "Der Workshop ist ein Festpreis-Format, abhängig von Kanzleigröße und davon, ob wir vor Ort oder remote arbeiten. Er ist bewusst als überschaubarer Einstieg kalkuliert: Sie bekommen erst Klarheit und einen Fahrplan, bevor Sie in Umsetzung investieren. Die konkrete Zahl nennen wir Ihnen im Erstgespräch.",
  },
  {
    question: "Wer sollte aus der Kanzlei teilnehmen?",
    answer:
      "Mindestens der Inhaber oder die Kanzleileitung plus die Personen, die die Kernprozesse täglich machen, typischerweise je eine Stimme aus FiBu, Lohn und Jahresabschluss. Die besten Ist-Aufnahmen entstehen, wenn die Praxis mit am Tisch sitzt, nicht nur die Führung.",
  },
  {
    question: "Was passiert nach dem Workshop?",
    answer:
      "Sie erhalten den Fahrplan als Dokument und entscheiden selbst, was Sie damit machen: intern umsetzen, einzelne Bausteine wie Kanzleihandbuch oder Prozessdokumentation mit uns angehen oder einen priorisierten Prozess als Automatisierungs-Pilot starten. Der Workshop verpflichtet zu nichts Weiterem.",
  },
  {
    question: "Muss die Kanzlei schon digital arbeiten?",
    answer:
      "Nein. Der Workshop holt die Kanzlei dort ab, wo sie steht. Gerade wenn heute noch viel über Papier, Zuruf und ein Sammelpostfach läuft, ist die Ist-Aufnahme am wertvollsten, weil die größten Hebel dann offen zutage liegen.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Der Kanzlei-Digitalisierungs-Workshop</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Der Kanzlei-Digitalisierungs-Workshop von Bluebatch ist eine
            strukturierte Ist-Aufnahme für Steuerkanzleien: Wir erfassen Ihre
            Prozesse, entwickeln ein Rollen-Modell für FiBu, Lohn,
            Jahresabschluss und Backoffice, priorisieren
            Automatisierungs-Kandidaten anhand von 50 erprobten Kanzlei-Use-Cases
            und erstellen einen konkreten Fahrplan. Das
            Ergebnis: eine dokumentierte Grundlage für planbare
            Digitalisierung.
          </GeoSummary>
          <ContactButton icon="chat">Workshop anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Warum ein Workshop */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Bevor Sie automatisieren: erst verstehen, was da ist
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Die meisten Digitalisierungs-Projekte in Kanzleien scheitern
              nicht an der Technik, sondern daran, dass niemand vorher
              aufgeschrieben hat, wie die Kanzlei eigentlich arbeitet. Ein Tool
              nach dem anderen wird eingeführt, aber die Abläufe dahinter
              bleiben Kopfwissen.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der Workshop dreht die Reihenfolge um: erst die Ist-Aufnahme,
              dann die Rollen, dann die Priorisierung. Er ist der Einstieg in
              die{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation"
                variant="underline"
              >
                Kanzlei-Organisation
              </InternalLink>
              , auf der jede spätere Automatisierung aufbaut.
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/strategic-thinking.jpg"
              alt="Workshop-Situation: Prozesse einer Kanzlei an der Wand"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Die vier Ergebnisse */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vier Ergebnisse</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was Sie aus dem Workshop mitnehmen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Workshop produziert keine Folien fürs Regal, sondern vier
            konkrete Arbeitsergebnisse, mit denen Ihre Kanzlei direkt
            weiterarbeiten kann.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {ergebnisse.map((item) => {
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

      {/* Ablauf */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>So läuft der Workshop ab</IntroBox.Headline>
          <IntroBox.Paragraph>
            Vom Vorgespräch bis zum Fahrplan: fünf Schritte, klar getaktet,
            mit Ihrem Team statt über Ihr Team.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Vorgespräch und Vorbereitung</Typo.H3>
              <Typo.Paragraph>
                Kurzes Gespräch vorab: Kanzleigröße, Team, Software-Landschaft,
                die drängendsten Baustellen. Sie bekommen eine kleine
                Vorbereitungs-Checkliste, mehr Vorarbeit braucht es nicht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Ist-Aufnahme der Prozesse</Typo.H3>
              <Typo.Paragraph>
                Gemeinsam mit Ihren Schlüsselpersonen nehmen wir die
                Kernprozesse auf: vom Posteingang über den Belegweg bis zum
                Jahresabschluss. Ehrlich, ohne Schuldzuweisungen, mit Blick auf
                Zeitfresser und Fehlerquellen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Rollen-Modell entwickeln</Typo.H3>
              <Typo.Paragraph>
                Wir ordnen die Aufgaben den Rollen FiBu, Lohn, Jahresabschluss
                und Backoffice zu und markieren, wo heute Zuständigkeiten
                verschwimmen. Das Modell wird so konkret, dass es ab dem
                nächsten Montag gelten könnte.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Automatisierungs-Kandidaten priorisieren</Typo.H3>
              <Typo.Paragraph>
                Jeder aufgenommene Prozess wird nach Wirkung und Aufwand
                bewertet und mit erprobten Kanzlei-Use-Cases abgeglichen. Was
                oben auf der Liste landet, muss sich rechnen, nicht nur gut
                anhören.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5}>
              <Typo.H3>Fahrplan und Übergabe</Typo.H3>
              <Typo.Paragraph>
                Sie erhalten die dokumentierte Ist-Aufnahme, das Rollen-Modell
                und den priorisierten Fahrplan als Dokument. Damit können Sie
                intern weiterarbeiten oder einzelne Schritte mit uns umsetzen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Für wen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Für wen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Für welche Kanzleien sich der Workshop lohnt
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <Typo.H3>Gut geeignet</Typo.H3>
            <ul className="mt-2 space-y-3 text-gray-600">
              {geeignet.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600 font-bold">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SimpleCard>
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700">
              <XCircle className="h-6 w-6" />
            </span>
            <Typo.H3>Eher nicht der richtige Rahmen</Typo.H3>
            <ul className="mt-2 space-y-3 text-gray-600">
              {nichtGeeignet.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-500 font-bold">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Typo.Paragraph className="mt-4">
              Unsicher, ob der Workshop passt? Schreiben Sie uns zwei Sätze zu
              Ihrer Situation, wir sagen ehrlich, ob er sich für Sie lohnt.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="text-center mt-12">
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum Digitalisierungs-Workshop
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
