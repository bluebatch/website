import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import { ogImages } from "@/lib/og";
import {
  FlowDiagram,
} from "@/components/diagrams/integration-diagram";
import { Database, Plug, Workflow, Sparkles } from "lucide-react";

const TITLE = "Cloud Connector zu actaport für Kanzleien";

export const metadata: Metadata = {
  title: `${TITLE} | Bluebatch`,
  description:
    "Der Cloud Connector zu actaport macht die Kanzleisoftware über REST-API und n8n für Automatisierung und KI erreichbar: Fristen, Akten, Dokumente und beA - DSGVO- und § 203-konform.",
  openGraph: {
    title: `${TITLE} | Bluebatch`,
    description:
      "Der Cloud Connector zu actaport macht die Kanzleisoftware über REST-API und n8n für Automatisierung und KI erreichbar - DSGVO- und § 203-konform.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/actaport-cloud-connector",
  },
};

const nutzen = [
  {
    title: "Fristen und Wiedervorlagen",
    body: "Fristen aus actaport in Kalender und Erinnerungssysteme spiegeln, Wiedervorlagen automatisch anlegen. Kein Termin hängt mehr nur in der Akte.",
  },
  {
    title: "Akten- und Dokumentenfluss",
    body: "Neue Dokumente klassifizieren, ablegen und den richtigen Akten zuordnen. Ein- und ausgehende Schreiben laufen strukturiert durch die Kanzlei.",
  },
  {
    title: "beA-Workflows",
    body: "actaport integriert die beA-Nachrichten wie E-Mails. Der Connector kann diesen Eingang weiterverarbeiten: sortieren, zuordnen, Entwürfe vorbereiten.",
  },
  {
    title: "KI auf Kanzleidaten",
    body: "Mit der Anbindung werden Ihre Aktendaten für geschützte KI erreichbar - für Zusammenfassungen, Recherche-Kontext oder Standardschreiben, immer mit Freigabe.",
  },
];

const faqs = [
  {
    question: "Was ist actaport?",
    answer:
      "actaport ist eine cloudbasierte Kanzleisoftware für Rechtsanwälte: Akten, Fristen, Dokumente, Finanzen und Kommunikation laufen im Browser zusammen, ohne eigene IT-Hardware. Die beA-Anbindung ist nativ integriert, und über eine REST-API lässt sich actaport mit anderen Systemen verbinden.",
  },
  {
    question: "Was ist ein Cloud Connector zu actaport?",
    answer:
      "Der Cloud Connector ist die Brücke zwischen actaport und Ihren übrigen Systemen. Er nutzt die REST-API und die n8n-Unterstützung von actaport, damit Akten-, Fristen- und Dokumentendaten automatisch fließen und für KI erreichbar werden - ohne dass jemand Daten manuell überträgt.",
  },
  {
    question: "Bleibt das mit der Verschwiegenheit vereinbar?",
    answer:
      "Ja. Der Connector arbeitet innerhalb der DSGVO-konformen actaport-Umgebung, und für KI-Schritte nutzen wir geschützte, § 203-konforme Umgebungen. Mandantendaten verlassen die kontrollierte Umgebung nicht, und sensible Schritte laufen mit menschlicher Freigabe.",
  },
  {
    question: "Muss die Kanzlei die Software wechseln?",
    answer:
      "Nein. Der Connector setzt auf Ihrer bestehenden actaport-Installation auf. actaport bleibt das führende System, wir koppeln Automatisierung und KI an, statt etwas zu ersetzen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Cloud Connector zu actaport</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein Cloud Connector zu actaport verbindet die cloudbasierte
            Kanzleisoftware über ihre REST-API und n8n mit Automatisierung und
            KI. Fristen, Akten, Dokumente und beA-Nachrichten werden so ohne
            manuelle Übertragung nutzbar. Bluebatch baut diese Anbindung
            DSGVO- und § 203-konform, actaport bleibt das führende System.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Datenfluss-Diagramm */}
      <ContentWrapper colorScheme="gray-light">
        <FlowDiagram
          bidirectional
          nodes={[
            {
              label: "actaport",
              sublabel: "Kanzleisoftware",
              icon: <Database className="h-5 w-5" />,
              highlight: true,
            },
            {
              label: "Cloud Connector",
              sublabel: "REST-API",
              icon: <Plug className="h-5 w-5" />,
            },
            {
              label: "n8n",
              sublabel: "Workflows",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              label: "KI & Systeme",
              sublabel: "geschützt, mit Freigabe",
              icon: <Sparkles className="h-5 w-5" />,
            },
          ]}
          caption="Der Connector macht actaport-Daten für Automatisierung und KI erreichbar, in beide Richtungen."
        />
      </ContentWrapper>

      {/* Was der Connector möglich macht */}
      <ContentWrapper>
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <Typo.H2 className="mb-4">Was der Connector möglich macht</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Sobald actaport angebunden ist, lassen sich die typischen
            Kanzlei-Prozesse automatisieren und mit KI unterstützen.
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={2}>
          {nutzen.map((n) => (
            <SimpleCard key={n.title} align="left">
              <Typo.H3>{n.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {n.body}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Überleitung zur Money Page */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="text-center">
          <Typo.H2 className="mb-4">
            Von der Idee zur laufenden Anbindung
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-6">
            Wenn Ihre Kanzlei mit actaport arbeitet, bauen wir den Cloud
            Connector als festes Projekt: Anbindung, Workflows, Test und
            Übergabe. Wie das konkret abläuft und was enthalten ist, steht auf
            der Angebotsseite.
          </Typo.Paragraph>
          <InternalLink href="/branchen/anwaelte/actaport-cloud-connector-implementierung">
            actaport Cloud Connector implementieren lassen
          </InternalLink>
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
