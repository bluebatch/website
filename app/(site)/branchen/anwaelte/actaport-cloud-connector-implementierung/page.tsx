import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { ogImages } from "@/lib/og";

const TITLE = "actaport Cloud Connector implementieren";

export const metadata: Metadata = {
  title: `${TITLE} - Angebot für Kanzleien | Bluebatch`,
  description:
    "actaport Cloud Connector implementieren lassen: REST-API-Anbindung, n8n-Workflows, sichere Authentifizierung, Test und Übergabe. Festpreis nach Erstgespräch, DSGVO- und § 203-konform.",
  openGraph: {
    title: `${TITLE} - Angebot für Kanzleien | Bluebatch`,
    description:
      "actaport Cloud Connector implementieren lassen: REST-API-Anbindung, n8n-Workflows, Test und Übergabe. Festpreis nach Erstgespräch.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/actaport-cloud-connector-implementierung",
  },
};

const enthalten = [
  {
    title: "REST-API-Anbindung",
    body: "Wir binden Ihre actaport-Installation über die REST-API an, mit sicherer Authentifizierung und klar abgegrenzten Berechtigungen.",
  },
  {
    title: "n8n-Workflows",
    body: "Die konkreten Abläufe bauen wir in n8n: Fristen spiegeln, Dokumente zuordnen, beA-Eingang verarbeiten. Nachvollziehbar und wartbar.",
  },
  {
    title: "Geschützte KI-Schritte",
    body: "Wo KI ins Spiel kommt, läuft sie in einer § 203-konformen Umgebung, mit menschlicher Freigabe für sensible Schritte.",
  },
  {
    title: "Test und Übergabe",
    body: "Wir testen den Connector an echten Fällen im Parallelbetrieb, dokumentieren die Abläufe und übergeben eine laufende Lösung.",
  },
];

const schritte = [
  {
    title: "Erstgespräch und Scope",
    body: "Wir klären, welche actaport-Prozesse den größten Hebel haben und wie Ihre Kanzlei arbeitet. Daraus entsteht ein klarer Umfang.",
  },
  {
    title: "Anbindung einrichten",
    body: "REST-API-Zugang, Authentifizierung und Berechtigungen werden aufgesetzt, in Abstimmung mit Ihrer IT und den actaport-Vorgaben.",
  },
  {
    title: "Workflows bauen",
    body: "Die vereinbarten Abläufe entstehen in n8n, geschützte KI-Schritte werden ergänzt, wo sie Nutzen bringen.",
  },
  {
    title: "Pilot und Übergabe",
    body: "Parallelbetrieb mit echten Fällen, Feinschliff, Dokumentation. Danach läuft der Connector, auf Wunsch mit Wartung durch Bluebatch.",
  },
];

const faqs = [
  {
    question: "Was kostet die Implementierung?",
    answer:
      "Der Preis hängt vom Umfang ab, also davon, wie viele actaport-Prozesse angebunden werden und wie tief die KI-Unterstützung geht. Nach einem kurzen Erstgespräch nennen wir einen Festpreis, damit Sie Planungssicherheit haben.",
  },
  {
    question: "Wie lange dauert es?",
    answer:
      "Ein erster, klar umrissener Connector ist meist in wenigen Wochen produktiv: Anbindung einrichten, die wichtigsten Workflows bauen, im Parallelbetrieb testen, übergeben. Weitere Prozesse kommen danach schrittweise dazu.",
  },
  {
    question: "Ist das DSGVO- und § 203-konform?",
    answer:
      "Ja. Der Connector arbeitet innerhalb der DSGVO-konformen actaport-Umgebung, KI-Schritte laufen § 203-konform in geschützten Umgebungen mit menschlicher Freigabe. Anwaltliche Verschwiegenheit nach § 43a BRAO bleibt gewahrt.",
  },
  {
    question: "Brauchen wir eigene Entwickler?",
    answer:
      "Nein. Bluebatch übernimmt Anbindung, Workflows und Test komplett. Ihre Kanzlei stellt die actaport-Zugänge bereit und gibt die Abläufe frei, den Rest machen wir.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>actaport Cloud Connector implementieren</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Bluebatch implementiert den Cloud Connector zu actaport als festes
            Projekt: REST-API-Anbindung mit sicherer Authentifizierung,
            n8n-Workflows für Fristen, Akten und beA sowie geschützte
            KI-Schritte mit Freigabe. Der Preis ist ein Festpreis nach
            Erstgespräch, die Umsetzung DSGVO- und § 203-konform.
          </GeoSummary>
          <ContactButton icon="chat">Angebot anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Was enthalten ist */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Leistungsumfang</IntroBox.PreHeadline>
          <IntroBox.Headline>Was in der Implementierung steckt</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {enthalten.map((e) => (
            <SimpleCard key={e.title} align="left">
              <Typo.H3>{e.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {e.body}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>In vier Schritten zum Connector</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto mt-12 max-w-2xl">
          <TimelineAsSteps>
            {schritte.map((s, i) => (
              <TimelineAsStepsStep
                key={s.title}
                value={i + 1}
                isLast={i === schritte.length - 1}
              >
                <Typo.H3 className="mt-2!">{s.title}</Typo.H3>
                <Typo.Paragraph>{s.body}</Typo.Paragraph>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Kontext / Rückverlinkung */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="text-center">
          <Typo.Paragraph className="text-gray-600 mb-6">
            Noch unklar, ob sich die Anbindung lohnt? Auf der Übersichtsseite
            erklären wir, was ein{" "}
            <InternalLink
              href="/branchen/anwaelte/actaport-cloud-connector"
              variant="underline"
            >
              Cloud Connector zu actaport
            </InternalLink>{" "}
            leistet und für welche Kanzleien er passt. Zurück zur{" "}
            <InternalLink href="/branchen/anwaelte" variant="underline">
              Anwalts-Branche
            </InternalLink>
            .
          </Typo.Paragraph>
          <ContactButton icon="chat">Über Ihr Projekt sprechen</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
