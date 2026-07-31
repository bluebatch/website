import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import { Clock, FolderOpen, MessagesSquare, UserCheck } from "lucide-react";
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
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Mandanten-Chatbot",
  description:
    "KI-Chatbot mit Kanzlei-Wissensbasis beantwortet Mandantenfragen rund um die Uhr, fachliche Fragen gehen an den Sachbearbeiter.",
};

export const metadata: Metadata = {
  title: "Mandanten-Chatbot für Steuerkanzleien - 24/7 Antworten | Bluebatch",
  description:
    "Mandanten-Chatbot mit Kanzlei-Wissensbasis: beantwortet Mandantenfragen zu Unterlagen, Abläufen und Portalen rund um die Uhr. Fachliche Steuerfragen gehen mit Kontext an den Sachbearbeiter.",
  openGraph: {
    title: "Mandanten-Chatbot für Steuerkanzleien - Bluebatch",
    description:
      "KI-Chatbot mit Kanzlei-Wissensbasis: Mandantenfragen rund um die Uhr beantwortet, fachliche Fragen mit Kontext an den Sachbearbeiter übergeben.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Mandanten-Chatbot für Steuerkanzleien", "Steuerberater"),
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten/mandanten-chatbot",
  },
};

const fragetypen = [
  {
    icon: FolderOpen,
    title: "Unterlagen und Abläufe",
    body: "Welche Unterlagen brauche ich für die Einkommensteuererklärung? Wie reiche ich Belege ein? Was passiert nach der Abgabe? Der Chatbot beantwortet Prozess-Fragen aus der Kanzlei-Wissensbasis, konsistent und ohne dass ein Mitarbeiter zum Telefon greift.",
  },
  {
    icon: Clock,
    title: "Organisatorisches rund um die Kanzlei",
    body: "Öffnungszeiten, Ansprechpartner, Terminanfragen, Zugang zum Mandantenportal: die Fragen, die täglich per Telefon und Mail eintreffen und immer gleich beantwortet werden. Der Chatbot erledigt sie sofort, auch abends und am Wochenende.",
  },
  {
    icon: UserCheck,
    title: "Fachliches geht an den Menschen",
    body: "Sobald eine Frage steuerlich wird, antwortet der Chatbot nicht selbst. Er sammelt die relevanten Angaben, fasst das Anliegen zusammen und übergibt es mit Kontext an den zuständigen Sachbearbeiter. Steuerberatung bleibt Sache der Kanzlei.",
  },
];

const faqs = [
  {
    question: "Was ist ein Mandanten-Chatbot mit Kanzlei-Wissensbasis?",
    answer:
      "Ein KI-Agent, der Fragen von Mandanten rund um die Uhr beantwortet, auf Basis einer Wissensbasis, die die Kanzlei selbst pflegt: Abläufe, benötigte Unterlagen, Portale, Ansprechpartner, Organisatorisches. Er antwortet nur mit dem, was in dieser Wissensbasis steht, und übergibt fachliche Steuerfragen an den zuständigen Sachbearbeiter.",
  },
  {
    question: "Beantwortet der Chatbot auch steuerliche Fachfragen?",
    answer:
      "Nein, und das ist Absicht. Der Chatbot beantwortet organisatorische und prozessbezogene Fragen. Wird eine Anfrage fachlich, sammelt er die relevanten Angaben und leitet das Anliegen mit Zusammenfassung an den zuständigen Sachbearbeiter weiter. Die Steuerberatung bleibt beim Berufsträger.",
  },
  {
    question: "Woher bekommt der Chatbot sein Wissen?",
    answer:
      "Aus der Kanzlei-Wissensbasis: dokumentierte Abläufe, Checklisten für benötigte Unterlagen, Portal-Anleitungen, häufige Fragen mit den Antworten der Kanzlei. Die Kanzlei entscheidet, was hineinkommt, und kann Inhalte jederzeit ergänzen oder korrigieren. Je besser die Wissensbasis gepflegt ist, desto mehr Anfragen beantwortet der Chatbot korrekt.",
  },
  {
    question:
      "Was unterscheidet den Mandanten-Chatbot von der KI-Mandantenkommunikation?",
    answer:
      "Die Richtung. Beim Mandanten-Chatbot fragt der Mandant aktiv und bekommt sofort eine Antwort aus der Kanzlei-Wissensbasis. Die KI-Mandantenkommunikation arbeitet umgekehrt proaktiv: Die Kanzlei geht auf Mandanten zu, etwa mit Belegnachforderungen und Fristen-Erinnerungen. Beide Bausteine ergänzen sich und teilen sich in vielen Kanzleien dieselbe Wissensbasis.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Mandanten-Chatbot mit Kanzlei-Wissensbasis</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein Mandanten-Chatbot ist ein KI-Agent, der Fragen von Mandanten
            rund um die Uhr beantwortet, auf Basis der Kanzlei-Wissensbasis:
            Abläufe, benötigte Unterlagen, Portale, Organisatorisches.
            Fachliche Steuerfragen beantwortet der Chatbot nicht, sondern
            leitet sie mit Kontext an den zuständigen Sachbearbeiter weiter.
            Die Kanzlei bleibt erreichbar, ohne dass das Team jede
            Routinefrage selbst beantwortet.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Was der Chatbot beantwortet */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was der Chatbot übernimmt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Routinefragen sofort beantwortet, Fachliches sauber übergeben
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein großer Teil der Mandantenanfragen ist keine Steuerberatung,
            sondern Organisation. Genau dieser Teil lässt sich an einen
            Chatbot geben, mit klarer Grenze zum Fachlichen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {fragetypen.map((f) => {
            const Icon = f.icon;
            return (
              <SimpleCard key={f.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{f.title}</Typo.H3>
                <Typo.Paragraph>{f.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Wie eine Anfrage läuft */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So läuft eine Anfrage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Mandantenfrage zur Antwort oder zum Sachbearbeiter
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Anfrage nimmt einen von zwei Wegen: Sie wird sofort aus der
            Wissensbasis beantwortet, oder sie geht strukturiert an einen
            Menschen. Ein dritter Weg, das Raten, ist ausgeschlossen.
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Mandant stellt eine Frage</Typo.H3>
            <Typo.Paragraph>
              Auf der Kanzlei-Website oder im Mandantenportal, zu jeder
              Uhrzeit. Der Chatbot fragt bei Bedarf nach, um das Anliegen
              genau zu verstehen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Chatbot prüft die Kanzlei-Wissensbasis</Typo.H3>
            <Typo.Paragraph>
              Der KI-Agent sucht die Antwort ausschließlich in den
              hinterlegten Inhalten der Kanzlei: Abläufe, Checklisten,
              Portal-Anleitungen, häufige Fragen. Was dort nicht steht,
              wird nicht erfunden.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Antwort oder Übergabe</Typo.H3>
            <Typo.Paragraph>
              Organisatorische Fragen beantwortet der Chatbot sofort.
              Fachliche oder unklare Anliegen fasst er zusammen und
              übergibt sie mit allen relevanten Angaben an den zuständigen
              Sachbearbeiter, der Mandant erfährt, dass sich jemand meldet.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Die Wissensbasis wächst mit</Typo.H3>
            <Typo.Paragraph>
              Wiederkehrende Fragen, die heute noch beim Team landen, nimmt
              die Kanzlei in die Wissensbasis auf. So beantwortet der
              Chatbot mit der Zeit einen immer größeren Teil der Anfragen
              selbst.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Abgrenzung zur Mandantenkommunikation */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/client-communication.jpg"
              alt="Mandantin stellt dem Kanzlei-Chatbot eine Frage am Smartphone"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <MessagesSquare className="h-6 w-6" />
            </span>
            <Typo.H2 className="mb-4">
              Chatbot oder Mandantenkommunikation? Die Richtung entscheidet
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Beim Mandanten-Chatbot fragt der Mandant aktiv, und die
              Kanzlei antwortet automatisch. Die{" "}
              <InternalLink
                href="/branchen/steuerberater/ki-agenten/mandantenkommunikation"
                variant="underline"
              >
                KI-Mandantenkommunikation
              </InternalLink>{" "}
              dreht die Richtung um: Die Kanzlei kommuniziert proaktiv,
              fordert Belege nach und erinnert an Fristen. Beide Bausteine
              ergänzen sich, viele Kanzleien starten mit einem und bauen
              den anderen später dazu.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der Mandanten-Chatbot ist einer von mehreren digitalen
              Mitarbeitern aus unserem Katalog. Einen Überblick über alle
              gibt der Hub{" "}
              <InternalLink
                href="/branchen/steuerberater/ki-agenten"
                variant="underline"
              >
                KI-Agenten für Steuerberater
              </InternalLink>
              .
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/ki-agenten">
              Alle KI-Agenten für Steuerkanzleien ansehen
            </InternalLink>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
