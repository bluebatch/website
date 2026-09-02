import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import GeoSummary from "@/components/ui/geo-summary";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import { ogImages } from "@/lib/og";

const TITLE = "KI und Automatisierung für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE} | Bluebatch`,
  description:
    "KI und Automatisierung für Anwaltskanzleien: DSGVO- und § 203-konform, angebunden an Cloud-Kanzleisoftware wie actaport. Erster Baustein: der actaport Cloud Connector.",
  openGraph: {
    title: `${TITLE} | Bluebatch`,
    description:
      "KI und Automatisierung für Anwaltskanzleien, DSGVO- und § 203-konform, angebunden an actaport. Erster Baustein: der Cloud Connector.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte",
  },
};

const bausteine = [
  {
    href: "/branchen/anwaelte/actaport-cloud-connector",
    title: "Cloud Connector zu actaport",
    tag: "Grundlage",
    linkLabel: "actaport Cloud Connector im Detail",
    description:
      "actaport ist eine cloudbasierte Kanzleisoftware mit REST-API und nativer beA-Integration. Der Cloud Connector macht diese Daten für Automatisierung und KI erreichbar.",
  },
  {
    href: "/branchen/anwaelte/actaport-cloud-connector-implementierung",
    title: "Connector implementieren",
    tag: "Angebot",
    linkLabel: "actaport-Connector implementieren lassen",
    description:
      "Wir binden actaport über die REST-API und n8n an Ihre Prozesse an: Fristen, Akten und Dokumente fließen automatisch, Ihre Kanzlei behält die Kontrolle.",
  },
  {
    href: "/branchen/anwaelte/ki-anwaltskanzlei-43e-brao",
    title: "KI nach § 43e BRAO",
    tag: "Berufsrecht",
    linkLabel: "KI-Gateway nach § 43e BRAO ansehen",
    description:
      "Die Vertragskette nach § 43e BRAO als Gateway gebaut: Textform mit § 203-Belehrung, Einwilligungs-Flag pro Mandat, Kill-Switch und Freigabe vor jedem Versand.",
  },
];

const hubs = [
  {
    href: "/branchen/anwaelte/private-ai",
    title: "Private AI",
    description:
      "Sprachmodelle in eigener, geschützter Umgebung, für Mandatsdaten, die die Kanzlei nicht verlassen dürfen. Inklusive Wissensdatenbank auf den eigenen Schriftsätzen.",
    linkLabel: "Private AI für Kanzleien ansehen",
  },
  {
    href: "/branchen/anwaelte/claude-cowork",
    title: "Claude Cowork",
    description:
      "Verwaltete, § 203-konforme KI-Umgebung als Werkzeug fürs Team: Schriftsatz-Entwürfe, Recherche und Zusammenfassungen, ohne eigene Server.",
    linkLabel: "Claude Cowork für Kanzleien ansehen",
  },
  {
    href: "/branchen/anwaelte/ki-agenten",
    title: "KI-Agenten",
    description:
      "Digitale Sachbearbeiter, die Posteingang und Fristen vorbereiten und zur Prüfung vorlegen. Die Entscheidung bleibt beim Anwalt.",
    linkLabel: "KI-Agenten für Kanzleien ansehen",
  },
  {
    href: "/branchen/anwaelte/workflows",
    title: "Workflows",
    description:
      "Fest automatisierte Abläufe rund um beA, Akten und Dokumente, angebunden an actaport über REST-API und an RA-MICRO über Ablage und Export.",
    linkLabel: "Kanzlei-Workflows ansehen",
  },
];

const faqs = [
  {
    question: "Dürfen Anwälte KI und Cloud-Software nutzen?",
    answer:
      "Ja, wenn die Verschwiegenheit gewahrt bleibt. Anwälte unterliegen § 203 StGB und § 43a BRAO. Entscheidend ist, dass Mandantendaten in einer kontrollierten, DSGVO-konformen Umgebung verarbeitet werden. Cloud-Kanzleisoftware wie actaport und geschützte KI-Umgebungen erfüllen diese Anforderungen.",
  },
  {
    question: "Womit fängt eine Kanzlei am besten an?",
    answer:
      "Mit der Anbindung der Software, die Sie ohnehin nutzen. Wenn Ihre Kanzlei mit actaport arbeitet, ist der Cloud Connector der schnellste erste Schritt: Er macht Ihre Akten- und Fristendaten für Automatisierung und KI erreichbar, ohne dass Sie das System wechseln.",
  },
  {
    question: "Funktioniert das auch mit RA-MICRO?",
    answer:
      "Ja, nur auf einem anderen Weg als bei actaport. actaport ist cloudbasiert und stellt eine REST-API bereit, dort läuft die Anbindung direkt über die Schnittstelle. RA-MICRO dokumentiert für Drittsysteme keine offene REST-API, dort führt der Weg über Dokumentenablage, Exporte und das beA-Postfach. Lesen, Verstehen und Zuordnen funktionieren in beiden Fällen, der Unterschied liegt beim Zurückschreiben.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Branchen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI für Anwaltskanzleien: verschwiegen automatisieren
            </Hero2ColumnHeadline>
            <GeoSummary>
              KI und Automatisierung für Anwaltskanzleien heißt bei Bluebatch:
              DSGVO- und § 203-konform, angebunden an die Software, mit der Ihre
              Kanzlei bereits arbeitet. Erster Baustein ist der Cloud Connector
              zu actaport, der Fristen, Akten und Dokumente über die REST-API
              und n8n für Automatisierung und KI erreichbar macht.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Cloud Connector zu actaport, Private AI, KI-Agenten und Workflows
              für Kanzleien
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/consulting-services.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* § 203 als Rahmen */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Verschwiegenheit ist die Grundbedingung
        </Typo.H2>
        <Typo.Paragraph className="text-gray-600 text-center">
          Anwaltskanzleien unterliegen der Verschwiegenheitspflicht nach § 43a
          BRAO und dem strafbewehrten § 203 StGB. Genau wie bei
          Steuerberatern beginnt jede KI- und Automatisierungslösung deshalb
          mit der Frage: In welcher Umgebung dürfen Mandantendaten verarbeitet
          werden? Wir bauen ausschließlich auf Umgebungen auf, die diese
          Anforderung strukturell erfüllen.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Erster Baustein: actaport */}
      <ContentWrapper>
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <Typo.H2 className="mb-4">
            Womit Kanzleien bei uns starten
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Zwei Einstiege, je nach Ausgangslage: die Anbindung der
            Kanzleisoftware, mit der Sie ohnehin arbeiten, oder der
            berufsrechtliche Rahmen für den KI-Einsatz nach § 43e BRAO.
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={2}>
          {bausteine.map((b) => (
            <SimpleCard key={b.href} align="left" className="h-full">
              <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {b.tag}
              </span>
              <Typo.H3>{b.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {b.description}
              </Typo.Paragraph>
              <span className="mt-auto pt-4">
                <InternalLink href={b.href}>{b.linkLabel}</InternalLink>
              </span>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Ausblick: analog Steuerberater */}
      <ContentWrapper colorScheme="gray-light">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <Typo.H2 className="mb-4">Die vier Bausteine für Kanzleien</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Aufgebaut analog zu unserer{" "}
            <InternalLink href="/branchen/steuerberater" variant="underline">
              Steuerberater-Branche
            </InternalLink>
            . Jeder Baustein beantwortet eine eigene Frage: wo die KI läuft,
            womit das Team arbeitet, was eingeschätzt wird und was fest
            abläuft.
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={2}>
          {hubs.map((h) => (
            <SimpleCard key={h.href} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{h.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {h.description}
              </Typo.Paragraph>
              <span className="mt-auto pt-4">
                <InternalLink href={h.href}>{h.linkLabel}</InternalLink>
              </span>
            </SimpleCard>
          ))}
        </SimpleGrid>
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
