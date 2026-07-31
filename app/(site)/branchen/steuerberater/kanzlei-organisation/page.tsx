import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import {
  ClipboardCheck,
  TrendingDown,
  Users,
  Workflow,
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
import { ProductTileGrid } from "@/components/cards/product-tile";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "Kanzleiorganisation: Prozesse, Handbuch, Onboarding | Bluebatch",
  description:
    "Kanzlei-Organisation für Steuerberater: dokumentierte Prozesse, Kanzleihandbuch, rollenbasierte Struktur und internes Onboarding als Fundament jeder Automatisierung.",
  openGraph: {
    title: "Kanzlei-Organisation für Steuerberater - Bluebatch",
    description:
      "Kanzlei-Organisation für Steuerberater: dokumentierte Prozesse, Kanzleihandbuch, rollenbasierte Struktur und internes Onboarding als Fundament jeder Automatisierung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Kanzlei-Organisation für Steuerberater", "Steuerberater"),
  },
  alternates: {
    canonical: "/branchen/steuerberater/kanzlei-organisation",
  },
};

const fundament = [
  {
    href: "/branchen/steuerberater/kanzlei-organisation/kanzleihandbuch-aufbauen",
    title: "Kanzleihandbuch",
    badge: "Baustein #01",
    role: "Zentrale Wissensbasis",
    stat: "200 S.",
    description:
      "Alle Prozesse und Standards der Kanzlei in einem durchsuchbaren Notion-Wiki. Ein Muster-Handbuch mit circa 200 Seiten dient als Vorlage, statt bei null zu starten.",
    image: "/images/document-automation.jpg",
    features: [
      "Fundament für Delegation und Führung",
      "Basis für jeden KI-Einsatz",
      "Vorlage anpassen statt selbst schreiben",
    ],
    linkLabel: "Zum Kanzleihandbuch",
  },
  {
    href: "/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki",
    title: "Prozessdoku mit KI",
    badge: "Baustein #02",
    role: "Dokumentation nebenbei",
    stat: "0 h",
    description:
      "Screen-Recording aufnehmen, KI transkribiert und schreibt den Handbuch-Artikel. Die Dokumentation entsteht ohne Extra-Zeit im Tagesgeschäft.",
    image: "/images/digital-workflow.jpg",
    features: [
      "Aufnehmen statt aufschreiben",
      "KI-Transkription zu fertigen Artikeln",
      "Standardisierung senkt die Fehlerquote",
    ],
    linkLabel: "Zur Prozessdoku",
  },
  {
    href: "/branchen/steuerberater/kanzlei-organisation/mitarbeiter-onboarding-digital",
    title: "Digitales Onboarding",
    badge: "Baustein #03",
    role: "Einarbeitung per Video-Kurs",
    stat: "1 Wo.",
    description:
      "Neue Mitarbeiter lernen Abläufe und DATEV über einen strukturierten Video-Kurs, statt erfahrene Kollegen wochenlang zu binden. Ziel: DATEV-fit in einer Woche.",
    image: "/images/human-resources.jpg",
    features: [
      "Video-Kurs aus dem Kanzleihandbuch",
      "DATEV-fit in einer Woche",
      "Einmal erstellen, immer wieder nutzen",
    ],
    linkLabel: "Zum digitalen Onboarding",
  },
];

const wirkungen = [
  {
    icon: Users,
    title: "Rollen machen Automatisierung erst möglich",
    body: "Solange jeder alles macht, gibt es keinen Prozess, den eine KI übernehmen könnte. Erst wenn FiBu, Lohn, Jahresabschluss und Backoffice als klare Rollen geschnitten sind, lassen sich einzelne Aufgaben gezielt an Agenten und Workflows übergeben.",
  },
  {
    icon: TrendingDown,
    title: "Standards senken die Fehlerquote",
    body: "Standardisierte, dokumentierte Prozesse sind der wirksamste Hebel gegen Flüchtigkeitsfehler: Jeder Mitarbeiter arbeitet nach demselben Ablauf, statt die eigene Variante zu pflegen. Was dokumentiert ist, lässt sich prüfen, verbessern und delegieren.",
  },
  {
    icon: ClipboardCheck,
    title: "Dokumentation ist das Futter für KI",
    body: "Eine KI kann nur so arbeiten, wie die Kanzlei arbeitet. Das Kanzleihandbuch liefert den Kontext: Wer macht was, in welcher Reihenfolge, mit welchen Ausnahmen. Ohne diese Basis bleibt jedes KI-Projekt ein Blindflug.",
  },
  {
    icon: Workflow,
    title: "Organisierte Prozesse skalieren",
    body: "Wachstum scheitert selten am Mandantenzulauf, sondern an der internen Reibung: Rückfragen, Suchen, Doppelarbeit. Eine organisierte Kanzlei nimmt neue Mandanten und neue Mitarbeiter auf, ohne dass die Qualität kippt.",
  },
];

const faqs = [
  {
    question: "Was gehört zur Kanzlei-Organisation?",
    answer:
      "Vier Bausteine: ein Kanzleihandbuch als zentrale Wissensbasis, dokumentierte Prozesse für die wiederkehrenden Abläufe, eine rollenbasierte Struktur mit klaren Zuständigkeiten für FiBu, Lohn, Jahresabschluss und Backoffice sowie ein strukturiertes Onboarding für neue Mitarbeiter. Dazu kommt eine kanalisierte Mandantenkommunikation, zum Beispiel über ein Ticketsystem statt eines Sammelpostfachs.",
  },
  {
    question: "Warum ist Organisation die Voraussetzung für Automatisierung?",
    answer:
      "Automatisierung kann nur Prozesse übernehmen, die es als Prozesse gibt. Ein chaotischer Ablauf wird durch KI nicht besser, sondern schneller chaotisch. Erst wenn Rollen klar geschnitten und Abläufe dokumentiert sind, lässt sich entscheiden, welche Schritte ein Workflow oder ein KI-Agent übernimmt und wo der Mensch freigibt.",
  },
  {
    question: "Wie fängt eine Kanzlei am besten an?",
    answer:
      "Mit einer Ist-Aufnahme: Welche Prozesse gibt es, wer macht was, wo entstehen Fehler und Wartezeiten? Genau dafür gibt es den Kanzlei-Digitalisierungs-Workshop. Danach folgen Rollen-Modell und Kanzleihandbuch, die Prozessdokumentation läuft per Screen-Recording und KI nebenbei mit.",
  },
  {
    question: "Braucht eine kleine Kanzlei das überhaupt?",
    answer:
      "Gerade kleine Kanzleien profitieren: Wenn Wissen nur in den Köpfen von zwei oder drei Leistungsträgern steckt, ist jeder Ausfall und jede Kündigung ein Risiko. Ein Handbuch und dokumentierte Prozesse machen die Kanzlei unabhängiger von Einzelpersonen und verkürzen jede Einarbeitung.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Kanzlei-Organisation: Prozesse, Handbuch, Onboarding</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Kanzlei-Organisation heißt: Die Steuerkanzlei arbeitet mit
            dokumentierten Prozessen, einem Kanzleihandbuch und klaren Rollen
            für FiBu, Lohn, Jahresabschluss und Backoffice. Bluebatch
            unterstützt Kanzleien dabei mit einem Digitalisierungs-Workshop,
            Prozessdokumentation per KI und digitalem Mitarbeiter-Onboarding.
            Standardisierte Prozesse senken die Fehlerquote und sind die
            Voraussetzung für jede Automatisierung.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Warum Organisation vor Automatisierung */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Erst die Organisation, dann die Automatisierung
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Viele Kanzleien wollen mit KI starten und merken im ersten
              Gespräch: Es gibt gar keinen definierten Prozess, den man
              automatisieren könnte. Wer einen unklaren Ablauf automatisiert,
              bekommt denselben Wildwuchs, nur schneller. Deshalb beginnt
              Digitalisierung bei uns nicht mit einem Tool, sondern mit der{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation/rollenbasierte-kanzlei"
                variant="underline"
              >
                rollenbasierten Organisation
              </InternalLink>{" "}
              der Kanzlei.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der zweite Schritt ist die Dokumentation: Standardisierte,
              dokumentierte Prozesse senken die Fehlerquote und machen
              sichtbar, welche Schritte sich an{" "}
              <InternalLink
                href="/branchen/steuerberater/workflows"
                variant="underline"
              >
                automatisierte Workflows
              </InternalLink>{" "}
              übergeben lassen. Dank{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki"
                variant="underline"
              >
                Prozessdoku mit KI
              </InternalLink>{" "}
              kostet das keine Extra-Zeit mehr.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater">
              Zur Übersicht: KI und Automatisierung für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/process-mapping.jpg"
              alt="Prozesslandkarte einer organisierten Kanzlei"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Was Organisation bewirkt */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Kanzlei als Betrieb</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was eine organisierte Kanzlei anders macht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Steuerliches Fachwissen ist in jeder Kanzlei vorhanden. Der
            Unterschied zwischen Dauerstress und ruhigem Wachstum liegt in der
            Betriebsführung: Rollen, Standards, Dokumentation.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {wirkungen.map((item) => {
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

      {/* Die drei Bausteine */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Fundament</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Bausteine, die aufeinander aufbauen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Handbuch, Prozessdokumentation und Onboarding greifen ineinander:
            Das Handbuch ist der Ort, die Prozessdoku füllt ihn, das Onboarding
            macht daraus einen Lernpfad für neue Mitarbeiter.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <ProductTileGrid items={fundament} cols={3} />
        </div>
      </ContentWrapper>

      {/* Der Weg zur organisierten Kanzlei */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Schritt für Schritt</IntroBox.PreHeadline>
          <IntroBox.Headline>Der Weg zur organisierten Kanzlei</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kanzlei-Organisation ist kein Großprojekt, sondern eine Abfolge
            überschaubarer Schritte. In dieser Reihenfolge hat es sich bewährt.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Rollen klären</Typo.H3>
              <Typo.Paragraph>
                Wer verantwortet FiBu, Lohn, Jahresabschluss, Backoffice? Die{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/rollenbasierte-kanzlei"
                  variant="underline"
                >
                  rollenbasierte Kanzlei
                </InternalLink>{" "}
                ersetzt das Prinzip &quot;jeder macht alles&quot; durch klare
                Zuständigkeiten, inklusive Dashboards, in denen jede Rolle nur
                ihre relevanten Daten sieht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Handbuch aufsetzen</Typo.H3>
              <Typo.Paragraph>
                Ein{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/kanzleihandbuch-aufbauen"
                  variant="underline"
                >
                  Kanzleihandbuch als Notion-Wiki
                </InternalLink>{" "}
                wird zur zentralen Wissensbasis. Als Startpunkt dient ein
                Muster-Handbuch mit circa 200 Seiten, das an die eigene Kanzlei
                angepasst wird, statt alles selbst zu schreiben.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Prozesse nebenbei dokumentieren</Typo.H3>
              <Typo.Paragraph>
                Mit{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki"
                  variant="underline"
                >
                  Prozessdoku per Screen-Recording und KI
                </InternalLink>{" "}
                entsteht die Dokumentation während der normalen Arbeit: Ablauf
                einmal aufnehmen, die KI schreibt den Artikel fürs Handbuch.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Kommunikation und Einarbeitung kanalisieren</Typo.H3>
              <Typo.Paragraph>
                Ein{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/ticketsystem-kanzlei"
                  variant="underline"
                >
                  Ticketsystem für die Mandantenkommunikation
                </InternalLink>{" "}
                ersetzt das Sammelpostfach, und das{" "}
                <InternalLink
                  href="/branchen/steuerberater/kanzlei-organisation/mitarbeiter-onboarding-digital"
                  variant="underline"
                >
                  digitale Mitarbeiter-Onboarding
                </InternalLink>{" "}
                macht neue Kollegen in einer Woche DATEV-fit.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Einstieg: Workshop */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full order-last md:order-first">
            <Image
              src="/images/business-roadmap.jpg"
              alt="Fahrplan aus dem Kanzlei-Digitalisierungs-Workshop"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">
              Der schnellste Einstieg: ein Workshop, ein Fahrplan
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Wenn Sie nicht wissen, wo Sie anfangen sollen: Im{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop"
                variant="underline"
              >
                Kanzlei-Digitalisierungs-Workshop
              </InternalLink>{" "}
              nehmen wir gemeinsam Ihre Prozesse auf, entwickeln das
              Rollen-Modell und priorisieren die Automatisierungs-Kandidaten.
              Am Ende steht ein Fahrplan, mit dem Ihre Kanzlei weiß, was zuerst
              kommt und warum.
            </Typo.Paragraph>
            <div className="mt-6">
              <ContactButton icon="chat">Workshop anfragen</ContactButton>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zur Kanzlei-Organisation
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
