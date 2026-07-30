import type { Metadata } from "next";
import Image from "next/image";
import { MonitorPlay, Repeat, UserCheck, Gauge } from "lucide-react";
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
  title: "Digitales Mitarbeiter-Onboarding in der Kanzlei - Video-Kurs | Bluebatch",
  description:
    "Digitales Mitarbeiter-Onboarding für Steuerkanzleien: Video-Kurs statt Einarbeitung per Zuruf. Neue Mitarbeiter sind DATEV-fit in einer Woche.",
  openGraph: {
    title: "Digitales Mitarbeiter-Onboarding in der Kanzlei - Bluebatch",
    description:
      "Digitales Mitarbeiter-Onboarding für Steuerkanzleien: Video-Kurs statt Einarbeitung per Zuruf. Neue Mitarbeiter sind DATEV-fit in einer Woche.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/mitarbeiter-onboarding-digital",
  },
};

const vorteile = [
  {
    icon: MonitorPlay,
    title: "Video-Kurs statt Zuruf",
    body: "Der neue Mitarbeiter arbeitet einen strukturierten Kurs durch: Kanzlei-Grundsätze, Tools, DATEV-Abläufe, jeweils als kurzes Video mit Übung. Niemand muss mehr hoffen, dass die Einarbeitung zwischen zwei Fristen Platz findet.",
  },
  {
    icon: Repeat,
    title: "Einmal erstellen, immer wieder nutzen",
    body: "Die Einarbeitung wird zum Asset: Der Kurs entsteht einmal aus Kanzleihandbuch und Prozess-Recordings und steht danach jedem neuen Mitarbeiter zur Verfügung, in gleichbleibender Qualität statt abhängig davon, wer gerade Zeit hat.",
  },
  {
    icon: UserCheck,
    title: "Erfahrene Kollegen bleiben produktiv",
    body: "Statt tagelang danebenzusitzen, übernehmen erfahrene Mitarbeiter nur noch die Punkte, die wirklich ein Gespräch brauchen: Rückfragen, Feedback zu Übungen, Mandanten-Besonderheiten. Der Rest läuft über den Kurs.",
  },
  {
    icon: Gauge,
    title: "DATEV-fit in einer Woche",
    body: "Das Ziel des Kurses ist konkret: Nach einer Woche beherrscht der neue Mitarbeiter die DATEV-Grundabläufe der Kanzlei und kann erste Aufgaben eigenständig übernehmen, mit dem Kanzleihandbuch als Nachschlagewerk für alles Weitere.",
  },
];

const faqs = [
  {
    question: "Wie entsteht der Onboarding-Kurs?",
    answer:
      "Aus dem, was die Kanzlei-Organisation ohnehin produziert: Das Kanzleihandbuch liefert die Struktur und die Inhalte, die Screen-Recordings aus der Prozessdokumentation liefern das Videomaterial. Daraus wird ein Lernpfad mit Kapiteln, kurzen Videos und Kontrollfragen aufgebaut.",
  },
  {
    question: "Ist eine Woche für DATEV realistisch?",
    answer:
      "Für die Grundabläufe der eigenen Kanzlei ja, und genau darum geht es: Der Kurs vermittelt nicht ganz DATEV, sondern die Wege, die in dieser Kanzlei täglich gebraucht werden, vom Beleg bis zur Auswertung. Spezialthemen kommen später rollenbezogen dazu.",
  },
  {
    question: "Lohnt sich das auch bei wenigen Neueinstellungen?",
    answer:
      "Ja, denn der Kurs wirkt über Neueinstellungen hinaus: Er dient als Auffrischung bei Vertretungen, als Standard bei Prozessänderungen und als Qualitätssicherung, wenn Aufgaben zwischen Rollen wandern. Und jede einzelne Einarbeitung, die nicht per Zuruf läuft, spart erfahrenen Mitarbeitern Tage.",
  },
  {
    question: "Was kostet der Aufbau eines digitalen Onboardings?",
    answer:
      "Das hängt vor allem davon ab, wie weit Kanzleihandbuch und Prozessdokumentation schon sind: Wo beides existiert, ist der Kurs vor allem Struktur- und Schnittarbeit. Wo noch nichts dokumentiert ist, beginnt der Weg beim Handbuch. Eine Einschätzung für Ihre Ausgangslage geben wir im Erstgespräch.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Digitales Mitarbeiter-Onboarding: DATEV-fit in einer Woche
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Digitales Mitarbeiter-Onboarding heißt: Neue Kanzlei-Mitarbeiter
            lernen Abläufe, Tools und DATEV über einen strukturierten
            Video-Kurs statt per Zuruf. Das Ziel: DATEV-fit in einer Woche,
            ohne dass erfahrene Kollegen tagelang danebensitzen. Grundlage
            sind das Kanzleihandbuch und dokumentierte Prozesse, aus denen die
            Kurs-Inhalte einmal erstellt und immer wieder genutzt werden.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Einarbeitung per Zuruf: teuer, langsam, zufällig
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              In den meisten Kanzleien läuft Onboarding so: Der neue
              Mitarbeiter bekommt einen Platz neben einer erfahrenen Kollegin
              und schaut zu. Wochenlang. Die Kollegin schafft in der Zeit ihre
              eigene Arbeit nicht, und was der Neue lernt, hängt davon ab,
              welche Fälle zufällig gerade auf dem Tisch liegen.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Bei Fachkräftemangel ist das doppelt bitter: Die knappste
              Ressource der Kanzlei, die Zeit der Leistungsträger, wird für
              etwas verbraucht, das ein Kurs besser und wiederholbar leisten
              kann. Digitales Onboarding ist deshalb ein zentraler Baustein
              der{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation"
                variant="underline"
              >
                Kanzlei-Organisation
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/human-resources.jpg"
              alt="Neuer Mitarbeiter beim digitalen Onboarding"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Vorteile */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Prinzip</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Onboarding als Kurs, nicht als Nebenbei-Aufgabe
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Digitales Onboarding macht die Einarbeitung planbar: gleiche
            Inhalte, gleiche Qualität, gleicher Zeitrahmen, für jeden neuen
            Mitarbeiter.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {vorteile.map((item) => {
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

      {/* Die erste Woche */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So kann die erste Woche aussehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom ersten Tag zur ersten eigenen Aufgabe
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein beispielhafter Lernpfad, wie er aus Kanzleihandbuch und
            Prozess-Videos entsteht. Die Inhalte richten sich nach der Rolle,
            die der neue Mitarbeiter übernimmt.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Kanzlei und Grundsätze</Typo.H3>
              <Typo.Paragraph>
                Wie die Kanzlei arbeitet: Mandantenstruktur, Kommunikationswege,
                Qualitätsstandards, Rollenverteilung. Der neue Mitarbeiter
                versteht das System, bevor er das erste Tool öffnet.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Tools und Zugänge</Typo.H3>
              <Typo.Paragraph>
                Arbeitsplatz einrichten, Zugänge testen, die Werkzeuglandschaft
                kennenlernen: DMS, Kanzleihandbuch, Kommunikation. Jedes Video
                zeigt den echten Bildschirm der Kanzlei, keine generischen
                Schulungsfolien.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>DATEV-Grundabläufe</Typo.H3>
              <Typo.Paragraph>
                Die täglichen DATEV-Wege der Kanzlei als Videos mit Übungen:
                Belege erfassen, Buchungen prüfen, Auswertungen ziehen. Geübt
                wird an Beispielfällen, nicht am lebenden Mandanten.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Erste Aufgaben mit Review</Typo.H3>
              <Typo.Paragraph>
                Am Ende der Woche übernimmt der neue Mitarbeiter erste echte
                Aufgaben seiner Rolle. Eine erfahrene Kollegin reviewt die
                Ergebnisse, gezielt und punktuell statt dauerhaft daneben.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Typo.Paragraph className="text-gray-600 mb-6">
            Voraussetzung für den Kurs sind dokumentierte Prozesse: Sie
            entstehen im{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/kanzleihandbuch-aufbauen"
              variant="underline"
            >
              Kanzleihandbuch
            </InternalLink>{" "}
            und per{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki"
              variant="underline"
            >
              Prozessdoku mit KI
            </InternalLink>
            . Wo Ihre Kanzlei steht und was zuerst kommt, klärt der{" "}
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
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum digitalen Onboarding
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
