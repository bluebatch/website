import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Kanzlei-Wissensdatenbank mit RAG auf eigener Infrastruktur | Bluebatch",
  description:
    "Durchsuchbare Wissensdatenbank für Steuerkanzleien: internes Wissen inklusive Live-Call-Aufzeichnungen per RAG erschließen, auf eigener Infrastruktur, konform mit DSGVO und § 203 StGB.",
  openGraph: {
    title: "Kanzlei-Wissensdatenbank mit RAG - Bluebatch",
    description:
      "Durchsuchbare Wissensdatenbank für Steuerkanzleien: internes Wissen inklusive Live-Call-Aufzeichnungen per RAG erschließen, auf eigener Infrastruktur, konform mit DSGVO und § 203 StGB.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/steuerberater/private-ai/kanzlei-wissensdatenbank",
  },
};

const faqs = [
  {
    question: "Was ist eine Kanzlei-Wissensdatenbank mit RAG?",
    answer:
      "RAG (Retrieval-Augmented Generation) verbindet eine durchsuchbare Dokumentensammlung mit einem Sprachmodell: Bei einer Frage sucht das System zuerst die passenden Stellen aus den Kanzlei-Dokumenten heraus und formuliert daraus eine Antwort mit Quellenangabe. Das Modell antwortet also aus dem Wissen der Kanzlei, nicht aus seinem Trainingswissen.",
  },
  {
    question: "Welche Inhalte gehören in die Wissensdatenbank?",
    answer:
      "Alles, was Kanzlei-Wissen trägt: Vermerke und Gutachten, Vorlagen und Arbeitsanweisungen, Fachnotizen zu Spezialthemen und auf Wunsch transkribierte Live-Call-Aufzeichnungen. Gerade Besprechungen enthalten Wissen, das sonst nirgendwo dokumentiert wird.",
  },
  {
    question: "Ist das mit DSGVO und § 203 StGB vereinbar?",
    answer:
      "Ja, wenn die Wissensdatenbank auf Infrastruktur läuft, die die Kanzlei kontrolliert: auf einem dedizierten EU-Server oder on-premise, mit AVV und ohne Training fremder Modelle mit Kanzleidaten. Genau dafür steht der Private-AI-Ansatz. Öffentliche KI-Tools mit unklarem Datenfluss scheiden für Mandantendaten in der Regel aus.",
  },
  {
    question: "Sehen alle Mitarbeiter alle Inhalte?",
    answer:
      "Nein. Die Wissensdatenbank übernimmt Zugriffsrechte: Wer ein Dokument nicht öffnen darf, bekommt es auch nicht als Quelle in einer Antwort. Rollen und Berechtigungen werden bei der Einrichtung definiert.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Kanzlei-Wissensdatenbank: durchsuchbares Wissen auf eigener
            Infrastruktur
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Eine Kanzlei-Wissensdatenbank macht das interne Wissen einer
            Steuerkanzlei per RAG (Retrieval-Augmented Generation)
            durchsuchbar: Vermerke, Vorlagen, Fachnotizen und sogar
            Live-Call-Aufzeichnungen. Die Wissensdatenbank läuft auf eigener
            Infrastruktur mit EU-Hosting oder on-premise, konform mit DSGVO
            und § 203 StGB, sodass Mandantendaten die kontrollierte Umgebung
            der Kanzlei nie verlassen.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem: Wissen versickert */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Das Wissen ist da, nur findet es niemand
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Jede Kanzlei hat ihr Wissen längst erarbeitet: Der
              Spezialfall von vor zwei Jahren liegt als Vermerk in der
              Handakte, die Argumentation gegen das Finanzamt in einem
              Schriftsatz, die Einschätzung des Berufsträgers in einer
              Besprechung, die niemand protokolliert hat. Wer heute vor
              derselben Frage steht, fragt den Kollegen, sucht in
              Ordnerstrukturen oder erarbeitet alles noch einmal.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Eine durchsuchbare Wissensdatenbank dreht das um: Mitarbeiter
              stellen ihre Frage in normaler Sprache und bekommen eine
              Antwort aus den eigenen Kanzlei-Dokumenten, mit Verweis auf die
              Quelle. Die Grundlage dafür ist{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai"
                variant="underline"
              >
                Private AI
              </InternalLink>
              : KI auf Infrastruktur, die die Kanzlei kontrolliert.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/private-ai">
              Zum Private-AI-Hub für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/data-flow.jpg"
              alt="Durchsuchbare Kanzlei-Wissensdatenbank"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Wie RAG funktioniert */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            RAG: vom Dokumentenberg zur Antwort mit Quelle
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Hinter der Wissensdatenbank steht RAG, Retrieval-Augmented
            Generation. Das Prinzip lässt sich in vier Schritten erklären,
            ganz ohne KI-Fachvokabular.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Wissen einsammeln</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Vermerke, Gutachten, Vorlagen, Arbeitsanweisungen und
                Fachnotizen werden angebunden, aus Dateiablage,
                Dokumentenmanagement oder Wiki. Die Dokumente bleiben, wo sie
                sind, die Wissensdatenbank erschließt sie.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Inhalte durchsuchbar machen</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Das System zerlegt die Dokumente in Abschnitte und legt sie
                in einem Suchindex ab, der nach Bedeutung findet, nicht nur
                nach Stichworten. Eine Suche nach Fragen zur
                Betriebsaufspaltung findet auch den Vermerk, der das Wort nie
                wörtlich verwendet.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Fragen in normaler Sprache</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Mitarbeiter fragen wie im Gespräch: Wie haben wir das beim
                letzten vergleichbaren Fall begründet? Das System sucht die
                relevanten Abschnitte aus allen Quellen zusammen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Antwort mit Quellenangabe</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Das Sprachmodell formuliert aus den gefundenen Abschnitten
                eine Antwort und nennt die Quelldokumente. Jede Aussage lässt
                sich mit einem Klick am Original prüfen, entscheidend für
                fachliche Verlässlichkeit.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Live-Call-Aufzeichnungen */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full order-last md:order-first">
            <Image
              src="/images/communication-tools.jpg"
              alt="Wissen aus Live-Call-Aufzeichnungen erschließen"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">
              Auch Besprechungen werden Wissen: Live-Call-Aufzeichnungen
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Das wertvollste Kanzlei-Wissen entsteht oft mündlich: in der
              Fallbesprechung, im Mandantengespräch, in der internen
              Schulung. Genau dieses Wissen wird üblicherweise nie
              dokumentiert. Eine Wissensdatenbank kann das ändern:
              Aufgezeichnete Calls werden transkribiert und fließen als
              durchsuchbare Quelle in die Datenbank ein.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Damit wird auch die Einschätzung aus einer Besprechung von vor
              einem Jahr wieder auffindbar, mit Datum und Zusammenhang.
              Selbstverständlich nur mit Einwilligung der Beteiligten und
              innerhalb der geschützten Umgebung, in der auch alle anderen
              Kanzleidaten liegen.
            </Typo.Paragraph>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Eigene Infrastruktur + Querverweise */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Basis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum die Wissensdatenbank auf eigene Infrastruktur gehört
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Eine Wissensdatenbank enthält konzentriert das Sensibelste, was
            eine Kanzlei hat: Mandantenfälle, Einschätzungen, interne
            Diskussionen. Die Infrastruktur-Frage ist deshalb keine
            Nebensache, sondern die Voraussetzung.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>Daten bleiben unter Kontrolle</Typo.H3>
            <Typo.Paragraph>
              Suchindex und Sprachmodell laufen auf einem dedizierten
              EU-Server oder im eigenen Haus, mit AVV und ohne Training
              fremder Modelle mit Kanzleidaten. Konform mit DSGVO und § 203
              StGB, statt Mandantenwissen in einen öffentlichen Dienst zu
              laden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Baustein der Private-AI-Umgebung</Typo.H3>
            <Typo.Paragraph>
              Die Wissensdatenbank ist ein typischer Ausbau einer bestehenden
              Private-AI-Umgebung: Dieselbe geschützte Infrastruktur, die
              das Kanzlei-Team für Textentwürfe und Analysen nutzt, bekommt
              Zugriff auf das gesammelte Kanzlei-Wissen. Details dazu auf dem{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai"
                variant="underline"
              >
                Private-AI-Hub
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Alternative: verwaltete Umgebung</Typo.H3>
            <Typo.Paragraph>
              Kanzleien, die keine eigene Infrastruktur betreiben wollen,
              erreichen ein vergleichbares Schutzniveau mit{" "}
              <InternalLink
                href="/branchen/steuerberater/claude-cowork"
                variant="underline"
              >
                Claude Cowork
              </InternalLink>
              : einer verwalteten, DSGVO- und § 203-konformen
              Claude-Umgebung, in der Kanzlei-Wissen ebenfalls als
              Wissensbasis eingebunden werden kann.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="text-center mt-12">
          <Typo.Paragraph className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Im Erstgespräch klären wir, welche Wissensquellen Ihre Kanzlei
            hat und welche Infrastruktur-Variante dazu passt.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
