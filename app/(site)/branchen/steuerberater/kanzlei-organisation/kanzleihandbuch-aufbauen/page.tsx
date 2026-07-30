import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Share2, Compass, Bot } from "lucide-react";
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
  title: "Kanzleihandbuch aufbauen - Notion-Wiki statt Ordner | Bluebatch",
  description:
    "Kanzleihandbuch als Notion-Wiki aufbauen: Fundament für Onboarding, Delegation, Führung und KI. Mit Muster-Handbuch (circa 200 Seiten) als Vorlage starten.",
  openGraph: {
    title: "Kanzleihandbuch aufbauen - Bluebatch",
    description:
      "Kanzleihandbuch als Notion-Wiki aufbauen: Fundament für Onboarding, Delegation, Führung und KI. Mit Muster-Handbuch (circa 200 Seiten) als Vorlage starten.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/kanzleihandbuch-aufbauen",
  },
};

const nutzen = [
  {
    icon: GraduationCap,
    title: "Onboarding",
    body: "Neue Mitarbeiter finden jeden Ablauf, jede Vorlage und jede Zuständigkeit an einem Ort, statt wochenlang Kollegen zu fragen. Das Handbuch ist die Grundlage, aus der später ein digitaler Onboarding-Kurs entsteht.",
  },
  {
    icon: Share2,
    title: "Delegation",
    body: "Delegieren funktioniert nur, wenn der Ablauf ohne mündliche Übergabe verständlich ist. Mit dokumentierten Prozessen kann der Inhaber Aufgaben abgeben, ohne dass die Qualität von der Tagesform des Erklärenden abhängt.",
  },
  {
    icon: Compass,
    title: "Führung",
    body: "Standards machen Führung sachlich: Es gibt einen definierten Soll-Prozess, an dem sich Arbeit messen lässt. Diskussionen drehen sich um den Prozess, nicht um Personen, und Verbesserungen landen für alle sichtbar im Handbuch.",
  },
  {
    icon: Bot,
    title: "KI-Einsatz",
    body: "Jede KI, ob Assistent oder Agent, braucht Kontext: Wie arbeitet diese Kanzlei, welche Regeln gelten, welche Ausnahmen gibt es? Ein gepflegtes Kanzleihandbuch ist genau diese Wissensbasis in maschinenlesbarer Form.",
  },
];

const faqs = [
  {
    question: "Was gehört in ein Kanzleihandbuch?",
    answer:
      "Die Kernprozesse (Posteingang, Belegwege, FiBu, Lohn, Jahresabschluss, Fristenkontrolle), Zuständigkeiten und Rollen, Software-Anleitungen, Vorlagen und Checklisten sowie die Grundsätze der Kanzlei, etwa zu Kommunikation und Qualität. Kurz: alles, was ein neuer Mitarbeiter wissen muss, um eigenständig zu arbeiten.",
  },
  {
    question: "Warum Notion und kein Ordner im DMS?",
    answer:
      "Ein Handbuch lebt davon, dass es gefunden, gelesen und gepflegt wird. Notion ist als Wiki dafür gebaut: Volltextsuche, Verlinkungen zwischen Artikeln, Kommentare, Zugriffsrechte und eine niedrige Hürde, Inhalte zu ändern. PDF-Sammlungen in Ordnern veralten dagegen still und leise.",
  },
  {
    question: "Wie lange dauert der Aufbau eines Kanzleihandbuchs?",
    answer:
      "Mit dem Muster-Handbuch als Vorlage steht das Grundgerüst schnell: Struktur übernehmen, an die eigene Kanzlei anpassen, offensichtlich Unpassendes streichen. Die eigentliche Füllung mit den eigenen Prozessen läuft danach kontinuierlich, am besten per Prozessdokumentation mit KI nebenbei im Tagesgeschäft.",
  },
  {
    question: "Wer pflegt das Handbuch im Alltag?",
    answer:
      "Bewährt hat sich das Prinzip: Wer einen Prozess ändert, aktualisiert den Artikel dazu, und pro Rolle gibt es einen Verantwortlichen für die Aktualität ihrer Seiten. Mit KI-gestützter Prozessdoku ist die Pflege kein Schreibprojekt mehr, sondern ein Nebenprodukt der Arbeit.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Kanzleihandbuch aufbauen: das Betriebssystem Ihrer Kanzlei</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein Kanzleihandbuch ist die zentrale Prozess- und
            Wissensdokumentation einer Steuerkanzlei, aufgebaut als
            durchsuchbares Notion-Wiki. Das Handbuch ist das Fundament für
            Mitarbeiter-Onboarding, Delegation, Führung und den KI-Einsatz.
            Statt bei null zu starten, passen Kanzleien ein Muster-Handbuch
            mit circa 200 Seiten an die eigenen Abläufe an.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Wenn das Wissen der Kanzlei nur in Köpfen steckt
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Wie wird der Posteingang sortiert? Welche Schritte gehören zur
              Lohnabrechnung für Mandant X? Was ist bei der Fristenkontrolle zu
              beachten? In vielen Kanzleien gibt es auf diese Fragen genau eine
              Antwort: &quot;Frag die Kollegin, die das immer macht.&quot;
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Das funktioniert, bis die Kollegin krank wird, kündigt oder in
              Rente geht. Ein Kanzleihandbuch löst diese Abhängigkeit: Das
              Wissen gehört der Kanzlei, nicht einzelnen Personen. Es ist der
              erste Baustein der{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation"
                variant="underline"
              >
                Kanzlei-Organisation
              </InternalLink>{" "}
              und die Voraussetzung für alles, was danach kommt.
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/document-automation.jpg"
              alt="Digitales Kanzleihandbuch als Wiki"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Vier Nutzen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Fundament für vier Dinge</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wofür das Kanzleihandbuch die Grundlage legt
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Handbuch ist kein Selbstzweck. Es zahlt auf vier Bereiche ein,
            die jede wachsende Kanzlei beschäftigen: Onboarding, Delegation,
            Führung und KI.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {nutzen.map((item) => {
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

      {/* Muster-Handbuch + Vorgehen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vorlage statt leeres Blatt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Mit dem Muster-Handbuch starten, nicht bei null
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die größte Hürde beim Kanzleihandbuch ist der Anfang: 200 leere
            Seiten schreibt niemand neben dem Tagesgeschäft. Deshalb starten
            wir mit einem Muster-Handbuch von circa 200 Seiten, das die
            typischen Kanzleiprozesse bereits abdeckt und nur noch angepasst
            wird.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Vorlage übernehmen</Typo.H3>
              <Typo.Paragraph>
                Das Muster-Handbuch wird als Notion-Wiki für Ihre Kanzlei
                aufgesetzt: Struktur, Kapitel und Standard-Prozesse stehen
                damit vom ersten Tag an. Zugriffsrechte regeln, wer lesen und
                wer ändern darf.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>An die eigene Kanzlei anpassen</Typo.H3>
              <Typo.Paragraph>
                Rolle für Rolle wird die Vorlage mit der Realität abgeglichen:
                Was passt, bleibt. Was anders läuft, wird geändert. Was fehlt,
                kommt auf die Liste. So entsteht in Wochen, was als
                Schreibprojekt Jahre bräuchte.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Mit KI lebendig halten</Typo.H3>
              <Typo.Paragraph>
                Neue und geänderte Abläufe fließen per{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki"
                  variant="underline"
                >
                  Prozessdoku mit KI
                </InternalLink>{" "}
                ins Handbuch: Screen-Recording aufnehmen, die KI schreibt den
                Artikel. Aus dem fertigen Handbuch entsteht dann das{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/mitarbeiter-onboarding-digital"
                  variant="underline"
                >
                  digitale Mitarbeiter-Onboarding
                </InternalLink>
                .
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Typo.Paragraph className="text-gray-600 mb-6">
            Wo Ihr Handbuch am besten ansetzt, zeigt die Ist-Aufnahme im{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop"
              variant="underline"
            >
              Kanzlei-Digitalisierungs-Workshop
            </InternalLink>
            : Dort entsteht die Prozessliste, die das Handbuch füllt.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum Kanzleihandbuch
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
