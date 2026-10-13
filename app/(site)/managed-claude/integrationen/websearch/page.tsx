import type { Metadata } from "next";
import { Building2, Gavel, ListOrdered, MessageSquare, Scale, ShieldCheck } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  GeoSummary,
  ProseColumns,
  FaqContainer,
  ComplianceNoticeBox,
  Button,
} from "@/components/ui";
import { SimpleCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import { FlowDiagram } from "@/components/diagrams";
import BrowserFrame from "@/components/mockups/browser-frame";
import PortalMock from "@/components/mockups/portal-mock";
import { BraveLogo } from "@/components/icons/brand-logos";
import SearchAnswerCard from "./search-answer-card";

const meta = {
  title: "Claude Web Search: aktuelle Antworten mit Quellen",
  description:
    "Claude Web Search im Gateway: Claude sucht über Brave Search im Netz und belegt Antworten mit nummerierten Quellen. Inklusive, mit Rückfrage vor jeder Suche.",
};

export const metadata: Metadata = {
  title: `${meta.title} | Bluebatch`,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Web%20Search%20mit%20Quellen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Web Search mit Quellen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/websearch",
  },
};

const useCases = [
  {
    icon: Scale,
    title: "Gesetze und BMF-Schreiben",
    text: "Was gilt seit wann, mit Fundstelle zum Nachlesen. Statt auf dem Wissensstand des Modells stehen zu bleiben.",
  },
  {
    icon: Gavel,
    title: "Urteile und Fachbeiträge",
    text: "Aktuelle Entscheidungen und Aufsätze finden und zusammenfassen. Die fachliche Prüfung bleibt bei Ihnen.",
  },
  {
    icon: Building2,
    title: "Firmen und Märkte",
    text: "Öffentliche Angaben zu Lieferanten, Wettbewerbern oder Branchenzahlen. Bei Mandantennamen vorher überlegen, ob die Suche nötig ist.",
  },
];

const faqs = [
  {
    question: "Was ist die Claude Web Search im Gateway?",
    answer:
      "Eine Websuche, die Claude im Private Claude AI Gateway nutzt, um aktuelle Informationen zu finden. Claude bildet Suchbegriffe, sucht über Brave Search, liest die Treffer und antwortet mit nummerierten Quellen. Die Suche ist standardmäßig dabei und läuft über das Gateway.",
  },
  {
    question: "Ist das dieselbe Websuche wie in claude.ai?",
    answer:
      "Nein. In claude.ai sucht Claude über die Infrastruktur von Anthropic. Im Gateway läuft die Claude Websuche über Brave Search und wird im Gateway betrieben. So legen Sie fest, wer suchen darf und ob Claude vorher fragt.",
  },
  {
    question: "Warum fragt Claude vor jeder Suche nach?",
    answer:
      "Weil Suchbegriffe an einen externen Suchanbieter gehen. Claude bildet sie aus dem Gespräch, und darin können Mandantennamen oder Details aus Akten stecken. Mit der Rückfrage sieht die Person die Begriffe, bevor sie rausgehen. Für Berufsgeheimnisträger ist das mit Blick auf § 203 StGB die sichere Einstellung.",
  },
  {
    question: "Kostet die Websuche extra?",
    answer:
      "Die Websuche ist standardmäßig inklusive, ohne eigenes Such-Abo und ohne eigene Einrichtung. Im Portal sehen Sie die Suchen im Verbrauch unter Werkzeuge, neben den Modellkosten.",
  },
  {
    question: "Kann ich die Websuche abschalten?",
    answer:
      "Ja. Im Portal schalten Admins die Websuche unter Connectors aus oder weisen sie nur ausgewählten Personen zu. Personen mit der Netzwerk-Richtlinie „Kein Internet“ sind ohnehin ausgeschlossen.",
  },
  {
    question: "Woran erkenne ich, ob eine Antwort stimmt?",
    answer:
      "An den Quellen. Jede Aussage aus dem Netz bekommt eine Nummer, unten steht die Fundstelle. Was in einen Schriftsatz oder eine Mandantenmail geht, prüfen Sie dort nach, wie bei jeder anderen Recherche auch.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
            <BraveLogo className="h-4 w-4" />
            Integration · Websuche über Brave Search
          </span>
        </div>
        <Typo.H1 className="text-center">Claude Web Search: aktuelle Antworten mit Quellen</Typo.H1>
        <GeoSummary align="center">
          Im Private Claude AI Gateway ist die Claude Web Search standardmäßig dabei. Claude sucht über Brave Search im Netz und belegt Antworten mit nummerierten Quellen, etwa zu Gesetzesänderungen, Urteilen oder Fristen. Vor jeder Suche fragt Claude nach, damit keine Mandantennamen ungeprüft an den Suchanbieter gehen.
        </GeoSummary>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
          <Button variant="secondary" href="#rueckfrage">
            Warum Claude vorher fragt
          </Button>
        </div>
        <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-gradient-to-br from-orange-50 via-white to-primary-50 p-3 ring-1 ring-gray-100 sm:p-8">
          <SearchAnswerCard />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude Websuche</IntroBox.PreHeadline>
          <IntroBox.Headline>So läuft eine Suche</IntroBox.Headline>
        </IntroBox>
        <FlowDiagram
          className="bg-white! shadow-sm"
          nodes={[
            { icon: <MessageSquare className="h-5 w-5" />, label: "Ihre Frage", sublabel: "im Chat oder in Cowork" },
            { icon: <ShieldCheck className="h-5 w-5" />, label: "Suchbegriffe freigeben", sublabel: "Claude fragt vorher", highlight: true },
            { icon: <BraveLogo className="h-6 w-6" />, label: "Brave Search", sublabel: "über das Gateway" },
            { icon: <ListOrdered className="h-5 w-5" />, label: "Antwort mit Quellen", sublabel: "nummeriert, zum Nachlesen" },
          ]}
          caption="Die Treffer liest Claude selbst und fasst sie zusammen. Jede Aussage aus dem Netz bekommt eine Nummer mit Fundstelle."
        />
      </ContentWrapper>

      <ContentWrapper id="rueckfrage">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Rückfrage vor jeder Suche</IntroBox.PreHeadline>
              <IntroBox.Headline>Ohne Rückfrage suchen? Nur mit Bedacht</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph textColor="muted">
              Standardmäßig fragt Claude vor jeder Suche nach. Die Person sieht die Suchbegriffe, bevor sie an Brave gehen, und kann ablehnen oder umformulieren. Im Portal lässt sich die Option „Ohne Rückfrage suchen“ einschalten. Dann schickt Claude die Begriffe ohne Bestätigung los.
            </Typo.Paragraph>
            <ComplianceNoticeBox className="mt-6">
              <ComplianceNoticeBox.Label>Hinweis für Berufsgeheimnisträger</ComplianceNoticeBox.Label>
              <ComplianceNoticeBox.Headline>§ 203 StGB im Blick behalten</ComplianceNoticeBox.Headline>
              <ComplianceNoticeBox.Body>
                Ohne Rückfrage können vertrauliche Informationen das Gateway verlassen, etwa Namen von Mandanten oder Details aus Akten. Für Berufsgeheimnisträger ist diese Einstellung unter Umständen nicht mit § 203 StGB vereinbar. Das Portal weist beim Einschalten darauf hin, die Verantwortung liegt dann bei Ihnen.
              </ComplianceNoticeBox.Body>
            </ComplianceNoticeBox>
          </div>
          <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/connectors">
            <PortalMock active="connectors" compact>
              <PortalMock.Card className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <BraveLogo className="h-5 w-5" />
                  <span className="text-[13px] font-semibold">Websuche</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-gray-200 px-2.5 py-2">
                  <span className="text-[11px] font-medium text-gray-700">Websuche aktiv</span>
                  <PortalMock.Switch />
                </div>
                <div className="flex items-center gap-2 px-0.5 text-[11px] text-gray-700">
                  <span className="h-3.5 w-3.5 shrink-0 rounded-sm border border-gray-400 bg-white" aria-hidden />
                  Ohne Rückfrage suchen
                </div>
                <p className="text-[10px] leading-relaxed text-gray-500">
                  Claude sucht über das Gateway im Netz, ohne dass eine Person einen eigenen Suchanbieter braucht. Ohne Haken fragt Claude vor jeder Suche nach, die Person sieht also die Suchbegriffe, bevor sie rausgehen. Personen mit der Netzwerk-Richtlinie „Kein Internet“ bleiben ausgeschlossen.
                </p>
                <div className="flex justify-end gap-2">
                  <PortalMock.Button>Abbrechen</PortalMock.Button>
                  <PortalMock.Button variant="primary">Speichern</PortalMock.Button>
                </div>
              </PortalMock.Card>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                <div className="mb-1 text-[12px] font-semibold text-amber-900">Websuche ohne Rückfrage?</div>
                <p className="text-[10px] leading-relaxed text-amber-900/80">
                  Für Berufsgeheimnisträger ist diese Einstellung unter Umständen nicht mit § 203 StGB vereinbar. Mit dem Aktivieren übernehmen Sie dafür die Verantwortung.
                </p>
              </div>
            </PortalMock>
          </BrowserFrame>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Im Alltag</IntroBox.PreHeadline>
          <IntroBox.Headline>Wofür die Websuche taugt</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3}>
          {useCases.map((u) => {
            const Icon = u.icon;
            return (
              <SimpleCard key={u.title} align="left" className="rounded-2xl">
                <SimpleCard.Icon background="primary-gradient" color="white" size="sm" className="mb-4">
                  <Icon className="h-6 w-6" />
                </SimpleCard.Icon>
                <Typo.H3 className="mt-0!">{u.title}</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  {u.text}
                </Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Gesteuert über das Gateway</IntroBox.PreHeadline>
          <IntroBox.Headline>Wer sucht, entscheiden Sie</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Brave Search im Gateway">
            Gesucht wird über die Brave Search API, einen unabhängigen Suchindex. Betrieben im Gateway, niemand braucht einen eigenen Suchanbieter oder eigenen Schlüssel.
          </ProseColumns.Item>
          <ProseColumns.Item title="Je Person steuerbar">
            Die Websuche gilt für alle oder für ausgewählte Personen. Wer die Netzwerk-Richtlinie „Kein Internet“ hat, sucht auch nicht.
          </ProseColumns.Item>
          <ProseColumns.Item title="Im Verbrauch sichtbar">
            Die Suchen stehen im Portal unter Verbrauch bei den Werkzeugen, neben den Modellkosten. Kein eigenes Abo, keine eigene Einrichtung.
          </ProseColumns.Item>
        </ProseColumns>
        <div className="mt-10 text-center">
          <InternalLink href="/managed-claude/integrationen">Weitere Integrationen: DATEV, Outlook und eigene Systeme</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer headline="Häufige Fragen zur Claude Web Search" faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude mit Websuche, aber kontrolliert?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Einstellungen für Ihr Haus passen. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
