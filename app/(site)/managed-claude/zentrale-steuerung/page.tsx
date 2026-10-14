import type { Metadata } from "next";
import {
  Activity,
  Box,
  ChartColumn,
  Download,
  FileJson,
  FileText,
  Folder,
  Globe,
  PanelTop,
  Plug,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, FaqContainer } from "@/components/ui";
import {
  OfferCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  BannerScreen,
  ConfigScreen,
  ConnectorsScreen,
  FoldersScreen,
  InstructionsScreen,
  LimitsScreen,
  NetworkScreen,
  SetupScreen,
  SkillsScreen,
  StatusScreen,
  TeamScreen,
  UsageScreen,
} from "@/components/mockups/portal-screens";
import { FeatureRow, FeatureIndex, type FeatureIndexGroup } from "@/components/sections";

const description =
  "Das Managed Claude Interface bündelt Ihre KI-Compliance: Kosten in Euro, Limits, Team, Anweisungen, Claude Skills, Connectors, Ordner und Netzwerk.";

export const metadata: Metadata = {
  title: "KI-Compliance für Claude: Kosten, Team und Regeln zentral | Bluebatch",
  description,
  openGraph: {
    title: "KI-Compliance für Claude: Kosten, Team und Regeln zentral",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Compliance%20f%C3%BCr%20Claude%20in%20einem%20Dashboard&eyebrow=Managed%20Claude%20Interface",
        width: 1200,
        height: 630,
        alt: "KI-Compliance für Claude in einem Dashboard",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/zentrale-steuerung",
  },
};

const featureGroups: FeatureIndexGroup[] = [
  {
    title: "Kosten und Budgets",
    items: [
      { href: "#verbrauch", label: "Verbrauch", text: "Kosten in Euro je Tag, Modell und Person.", icon: ChartColumn },
      { href: "#limits", label: "Limits", text: "Budgets für die Kanzlei und jede Person.", icon: SlidersHorizontal },
    ],
  },
  {
    title: "Team und Zugang",
    items: [
      { href: "#team", label: "Team", text: "Einladen, Rollen vergeben, Zugänge sperren.", icon: Users },
      { href: "#einrichtung", label: "Einrichtung", text: "Claude Desktop mit einer Datei verbinden.", icon: Download },
      { href: "#status", label: "Status", text: "Sehen, wer verbunden ist und wer nie.", icon: Activity },
    ],
  },
  {
    title: "Claude einstellen",
    items: [
      { href: "#anweisungen", label: "Anweisungen", text: "Kanzlei-Stil und Regeln für jede Unterhaltung.", icon: FileText },
      { href: "#skills", label: "Skills", text: "Arbeitsabläufe als Plugin an alle verteilen.", icon: Box },
      { href: "#connectors", label: "Connectors", text: "Microsoft 365, Websuche und MCP-Server freigeben.", icon: Plug },
      { href: "#banner", label: "Banner", text: "Die Kanzlei-Leiste oben in Claude Desktop.", icon: PanelTop },
    ],
  },
  {
    title: "Sicherheit und Nachweis",
    items: [
      { href: "#ordner", label: "Ordner", text: "Welche Ordner Claude lesen und beschreiben darf.", icon: Folder, beta: true },
      { href: "#netzwerk", label: "Netzwerk", text: "Kein Internet, freigegebene Adressen oder alles.", icon: Globe, beta: true },
      { href: "#konfiguration", label: "Konfiguration", text: "Nachsehen, was für eine Person wirklich gilt.", icon: FileJson },
    ],
  },
];

const faqs = [
  {
    question: "Was ist das Managed Claude Interface?",
    answer:
      "Das Managed Claude Interface ist das Dashboard des Private Claude AI Gateway von Bluebatch. Admins sehen dort Verbrauch und Kosten in Euro, setzen Limits, verwalten das Team und legen Anweisungen, Skills, Connectors, Banner sowie Richtlinien für Ordner und Netzwerk fest. Claude Desktop holt sich diese Einstellungen auf jedem Rechner selbst.",
  },
  {
    question: "Ist das Managed Claude Interface dasselbe wie die Claude Admin Console?",
    answer:
      "Nein. Die Claude Admin Console gehört zu den Abos von Anthropic, etwa Claude Team und Enterprise. Das Managed Claude Interface ist die Verwaltung Ihrer Organisation im Private Claude AI Gateway. Es übernimmt dieselbe Rolle, also Team, Rollen, Verbrauch und Einstellungen, dazu kommen Budgets in Euro, Ordner- und Netzwerk-Richtlinien und die Konfiguration je Person.",
  },
  {
    question: "Wie hilft das Interface bei der KI-Compliance?",
    answer:
      "KI-Compliance heißt im Alltag: Es ist geregelt, wer KI nutzt, mit welchen Daten und zu welchen Kosten, und das lässt sich zeigen. Das Interface setzt diese Regeln technisch um, mit Zugang nur über Ihr Team und SSO, Budgets je Person, zentralen Anweisungen, freigegebenen Ordnern und Webadressen. Die Konfiguration je Person dient als Nachweis. Die Pflicht zur KI-Kompetenz der Mitarbeiter ersetzt das nicht, dafür gibt es unser Coaching.",
  },
  {
    question: "Wie setze ich KI-Richtlinien für Unternehmen im Interface um?",
    answer:
      "Inhaltliche Regeln wie Stil, Fundstellen oder was Claude nicht tun soll, kommen in die Anweisungen. Technische Regeln setzen Sie über Connectors, Ordner, Netzwerk und Limits. Die schriftliche KI-Richtlinie bleibt sinnvoll, das Interface sorgt dafür, dass die wichtigsten Punkte auf jedem Rechner gelten.",
  },
  {
    question: "Was sind Claude Skills und wie verteile ich sie?",
    answer:
      "Ein Skill ist eine Arbeitsanleitung für Claude: wann er greift und wie eine Aufgabe Schritt für Schritt erledigt wird, etwa „Honorarrechnung prüfen“. Admins legen Skills im Interface in Bibliotheken an. Claude Desktop zeigt sie automatisch als Plugin der Organisation unter Anpassen, Plugins, Organisation.",
  },
  {
    question: "Wer sieht was im Interface?",
    answer:
      "Mitglieder sehen ihren eigenen Verbrauch und die Einrichtung. Alles andere, also Limits, Team, Connectors, Anweisungen, Banner, Skills, Ordner, Netzwerk, Status und Konfiguration, ist Admins vorbehalten. Ordner und Netzwerk sind als Beta gekennzeichnet: nutzbar, Umfang und Oberfläche können sich aber noch ändern.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <IntroBox textCentered size="small">
          <IntroBox.PreHeadline>Managed Claude Interface</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="mx-auto max-w-4xl text-center text-balance">KI-Compliance für Claude in einem Dashboard</Typo.H1>
        <GeoSummary align="center">
          Das Managed Claude Interface ist das Dashboard des Private Claude AI Gateway von Bluebatch und der zentrale
          Ort für KI-Compliance. Admins sehen dort die Kosten in Euro, setzen Budgets, verwalten Team und Rollen und
          legen für die ganze Kanzlei fest, welche Anweisungen, Skills, Connectors, Ordner und Webadressen Claude
          Desktop nutzen darf.
        </GeoSummary>
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <ContactButton icon="chat">Live-Demo vereinbaren</ContactButton>
          <InternalLink href="#funktionen" resolve={false}>
            Alle 12 Funktionen ansehen
          </InternalLink>
        </div>
        <div className="relative isolate mt-14 lg:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[5%] -top-10 bottom-[10%] -z-10 rounded-[4rem] bg-gradient-to-b from-primary-200/70 via-primary-100/40 to-transparent blur-3xl"
          />
          <UsageScreen tilt />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="funktionen">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">12 Funktionen, vier Aufgaben</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was bei Anthropic die Claude Admin Console ist, ist hier das Managed Claude Interface: die Verwaltung
            Ihrer Organisation im Private Claude AI Gateway. Mitglieder sehen ihren Verbrauch und die Einrichtung, alles andere
            steuern Admins.
          </IntroBox.Paragraph>
        </IntroBox>
        <FeatureIndex groups={featureGroups} />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Kosten und Budgets</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Kosten sehen, bevor die Rechnung kommt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Abgerechnet wird nach Verbrauch, ohne Lizenz pro Kopf. Damit das planbar bleibt, sehen Sie jeden Euro
            und setzen Grenzen, die das Gateway durchsetzt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow id="verbrauch">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <ChartColumn aria-hidden /> Verbrauch
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Jeder Euro nach Tag, Modell und Person
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Der Verbrauch zeigt die Kosten in Euro für einen frei wählbaren Zeitraum, von den letzten 7 Tagen
                bis zum letzten Quartal. Admins sehen die ganze Organisation oder eine einzelne Person, Mitglieder
                ihren eigenen Verbrauch.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>Die Monatskosten prüfen, ohne Export und ohne Excel.</FeatureRow.Point>
                <FeatureRow.Point>
                  Sehen, welches Modell das Geld kostet: Opus für die schweren Fälle, Haiku für Routine.
                </FeatureRow.Point>
                <FeatureRow.Point>
                  Erkennen, wer Claude schon täglich nutzt und wer noch Unterstützung braucht.
                </FeatureRow.Point>
              </FeatureRow.Points>
              <InternalLink href="/managed-claude/preise" className="mt-6">
                Preise je Modell und Million Tokens
              </InternalLink>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <UsageScreen view="person" sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="limits" reverse>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <SlidersHorizontal aria-hidden /> Limits
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Budgets, die das Gateway wirklich durchsetzt
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Für die ganze Organisation und für jede Person legen Sie ein Limit in Euro fest, das täglich,
                wöchentlich oder alle 30 Tage zurückgesetzt wird. Ist es erreicht, lehnt das Gateway weitere
                Anfragen ab, bis der Zeitraum abläuft.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>Ein Kanzlei-Budget, zum Beispiel 1.500 € im Monat, als harte Obergrenze setzen.</FeatureRow.Point>
                <FeatureRow.Point>Auszubildenden ein kleines Wochenbudget geben, Berufsträgern mehr Spielraum.</FeatureRow.Point>
                <FeatureRow.Point>Das Feld leer lassen, wo kein Limit nötig ist.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <LimitsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Team und Zugang</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Wer Claude nutzt, entscheiden Sie</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zugang gibt es über Ihr Team im Interface und die Anmeldung per SSO, nicht über private Konten. Neue
            Mitarbeiter sind in wenigen Minuten startklar.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow id="team">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Users aria-hidden /> Team
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Einladen, Rollen vergeben, sperren
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Im Team sehen Sie Mitglieder, Admins, gesperrte Zugänge und offene Einladungen auf einen Blick. Es
                gibt zwei Rollen: Mitglieder nutzen Claude und sehen den eigenen Verbrauch, Admins sehen alles im
                Team und verwalten Mitglieder und Limits.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Neue Mitarbeiter per E-Mail einladen, sie legen beim ersten Login ihr Konto an.
                </FeatureRow.Point>
                <FeatureRow.Point>
                  Bei Austritt den Zugang sperren oder entfernen. Der bisherige Verbrauch bleibt in der Auswertung.
                </FeatureRow.Point>
                <FeatureRow.Point>Nach Name, Rolle oder Status filtern, auch bei vielen Mitgliedern.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <TeamScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <SimpleGrid cols={2} className="gap-y-20 lg:gap-x-14">
            <FeatureRow.Tile id="einrichtung">
              <FeatureRow.TileText>
                <FeatureRow.Label>
                  <Download aria-hidden /> Einrichtung
                </FeatureRow.Label>
                <Typo.H3 disableMargin className="mb-4">
                  Claude Desktop mit einer Datei verbinden
                </Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Jede Person lädt unter Einrichtung eine Datei herunter: <code className="whitespace-nowrap">claude.reg</code> für das eigene
                  Windows-Konto, <code className="whitespace-nowrap">claude-machine.reg</code> systemweit, etwa für Terminalserver, oder{" "}
                  <code className="whitespace-nowrap">ai_gateway.json</code> für Mac und Windows. Danach holt sich Claude Desktop die
                  Einstellungen der Kanzlei selbst, angemeldet wird per SSO.
                </Typo.Paragraph>
              </FeatureRow.TileText>
              <FeatureRow.TileMedia>
                <SetupScreen compact />
              </FeatureRow.TileMedia>
            </FeatureRow.Tile>
            <FeatureRow.Tile id="status">
              <FeatureRow.TileText>
                <FeatureRow.Label>
                  <Activity aria-hidden /> Status
                </FeatureRow.Label>
                <Typo.H3 disableMargin className="mb-4">
                  Sehen, wer verbunden ist
                </Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Der Status zeigt, wann jede Person zuletzt ihre Konfiguration abgeholt hat: verbunden, länger
                  nicht oder nie verbunden. So fällt auf, wer beim Start noch Hilfe braucht, bevor jemand auf ein
                  privates Konto ausweicht.
                </Typo.Paragraph>
              </FeatureRow.TileText>
              <FeatureRow.TileMedia>
                <StatusScreen compact />
              </FeatureRow.TileMedia>
            </FeatureRow.Tile>
          </SimpleGrid>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude für die Kanzlei einstellen</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Einmal einstellen, auf jedem Rechner wirksam</IntroBox.Headline>
          <IntroBox.Paragraph>
            Anweisungen, Skills, Connectors und Banner legen Sie einmal im Interface fest. Claude Desktop holt sie
            beim nächsten Start auf jeden Rechner, niemand richtet Geräte einzeln ein.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow id="anweisungen">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <FileText aria-hidden /> Anweisungen
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Regeln, die Claude in jeder Unterhaltung kennt
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Anweisungen sind Texte, die Claude bei jeder Unterhaltung mitbekommt, zum Beispiel der Kanzlei-Stil
                oder die Regel, immer Fundstellen zu nennen. Sie legen die Reihenfolge fest, pausieren einzelne
                Anweisungen und weisen sie allen oder ausgewählten Personen zu.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>Sie-Form, Fachbegriffe und Tonfall der Kanzlei einmal festlegen.</FeatureRow.Point>
                <FeatureRow.Point>Der Lohnbuchhaltung eigene Begriffe und Fristen mitgeben.</FeatureRow.Point>
                <FeatureRow.Point>
                  In der Vorschau prüfen, was eine bestimmte Person bekommt, bis zu 3.000 Zeichen.
                </FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <InstructionsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="skills" reverse>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Box aria-hidden /> Skills
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Claude Skills für die Abläufe Ihrer Kanzlei
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Ein Skill beschreibt Schritt für Schritt, wie Ihre Kanzlei eine Aufgabe erledigt, und wann Claude
                ihn nutzen soll. Skills liegen in Bibliotheken mit Themen und erscheinen automatisch als Plugin in
                Claude Desktop, unter Anpassen → Plugins → Organisation.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Den Ablauf „Honorarrechnung prüfen“ einmal aufschreiben, statt ihn jedem neu zu erklären.
                </FeatureRow.Point>
                <FeatureRow.Point>Mandantenpost, Abrechnung und Fristen als Themen sortieren.</FeatureRow.Point>
                <FeatureRow.Point>Skills verteilen, ohne dass jemand selbst etwas installiert.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <SkillsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="connectors">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Plug aria-hidden /> Connectors
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Systeme anbinden, Zugriff je Person
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Connectors verbinden Claude mit Ihren Systemen: Microsoft 365 mit Outlook, Kalender und OneDrive
                über eine eigene App-Registrierung im Entra ID, die Websuche über Brave und eigene MCP-Server. Jeden
                Connector schalten Sie an oder aus und weisen ihn allen oder ausgewählten Personen zu.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>Outlook nur für die Personen freigeben, die damit arbeiten.</FeatureRow.Point>
                <FeatureRow.Point>
                  Festlegen, ob Claude vor jeder Websuche fragt. Suchen ohne Rückfrage ist für
                  Berufsgeheimnisträger unter Umständen nicht mit § 203 StGB vereinbar.
                </FeatureRow.Point>
                <FeatureRow.Point>
                  Vorlagen wie Notion, Atlassian oder Pipedrive nutzen oder einen eigenen MCP-Server eintragen.
                </FeatureRow.Point>
              </FeatureRow.Points>
              <InternalLink href="/managed-claude/integrationen" className="mt-6">
                Integrationen und MCP-Server im Überblick
              </InternalLink>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <ConnectorsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="banner" reverse>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <PanelTop aria-hidden /> Banner
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Auf jedem Bildschirm klar: Das ist die Kanzlei-Umgebung
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Das Banner ist eine farbige Leiste oben in Claude Desktop, zum Beispiel „Kanzlei Müller · Private
                Gateway“. Text und Farben wählen Sie selbst, die Vorschau zeigt sofort, wie es aussieht.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Mitarbeiter sehen auf einen Blick, dass sie in der freigegebenen Umgebung arbeiten und nicht in
                  einem privaten Konto.
                </FeatureRow.Point>
                <FeatureRow.Point>Die Farbe passend zum Erscheinungsbild der Kanzlei wählen.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <BannerScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Sicherheit und Nachweis</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">KI-Compliance, die sich nachweisen lässt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ordner und Netzwerk begrenzen, was Claude auf dem Rechner und im Netz erreicht. Die Konfiguration zeigt
            für jede Person, was davon tatsächlich gilt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow id="ordner">
            <FeatureRow.Text>
              <FeatureRow.Label beta>
                <Folder aria-hidden /> Ordner
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Nur die Ordner, die Claude sehen soll
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Mit Ordner-Richtlinien legen Sie fest, welche lokalen Ordner Claude lesen darf und wo es auch
                schreiben darf, als Standard für alle oder je Person. Alles außerhalb dieser Ordner bleibt für
                Claude unsichtbar.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Die Akten nur lesend freigeben, Entwürfe landen in einem eigenen Ablageordner.
                </FeatureRow.Point>
                <FeatureRow.Point>Der Lohnbuchhaltung zusätzlich das Lohnlaufwerk freigeben, allen anderen nicht.</FeatureRow.Point>
                <FeatureRow.Point>In der Übersicht „Wer hat was“ sehen, welche Richtlinie für wen gilt.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <FoldersScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="netzwerk" reverse>
            <FeatureRow.Text>
              <FeatureRow.Label beta>
                <Globe aria-hidden /> Netzwerk
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Kein Internet, nur dejure.org oder alles
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Netzwerk-Richtlinien bestimmen, welche Adressen im Netz Claude erreichen darf: kein Internet, nur
                freigegebene Adressen oder uneingeschränkt. Je Person gilt genau eine Richtlinie.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Für die Recherche nur Quellen wie dejure.org, gesetze-im-internet.de und das BMF freigeben.
                </FeatureRow.Point>
                <FeatureRow.Point>Auszubildende ganz ohne Internet arbeiten lassen.</FeatureRow.Point>
                <FeatureRow.Point>Einzelnen Berufsträgern uneingeschränkten Zugang geben.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <NetworkScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="konfiguration">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <FileJson aria-hidden /> Konfiguration
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Nachweisen, was für wen gilt
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Die Konfiguration zeigt je Person auf einen Blick, was Claude Desktop ausgeliefert bekommt: Bereiche
                Chat, Cowork und Code, Banner, Microsoft 365, Websuche, MCP-Server, gesperrte Werkzeuge,
                Anweisungen, Netzwerk und Ordner. Darunter steht die vollständige Konfiguration als JSON.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Für die Dokumentation, etwa nach § 62a StBerG, zeigen, welche Regeln technisch greifen.
                </FeatureRow.Point>
                <FeatureRow.Point>Fehler finden, wenn bei einer Person ein Connector fehlt.</FeatureRow.Point>
                <FeatureRow.Point>
                  Änderungen sofort in der Vorschau prüfen, in der App gelten sie nach dem nächsten Neustart.
                </FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <ConfigScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>KI-Richtlinien für Unternehmen</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Von der Richtlinie auf Papier zur Regel im System</IntroBox.Headline>
          <IntroBox.Paragraph>
            Viele Kanzleien und Unternehmen haben eine KI-Richtlinie als PDF. Ob sie eingehalten wird, sieht
            niemand. Im Managed Claude Interface werden die wichtigsten Punkte zu Einstellungen.
          </IntroBox.Paragraph>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <BeforeCard>
            <ComparisonHeadline>KI-Richtlinie als PDF</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                „Keine Mandantendaten in private KI-Konten“ steht im Handbuch, geprüft wird es nicht.
              </ComparisonListItem>
              <ComparisonListItem>Jeder Rechner ist anders eingerichtet.</ComparisonListItem>
              <ComparisonListItem>Kosten tauchen erst auf der Kreditkarte auf.</ComparisonListItem>
              <ComparisonListItem>Wer was darf, weiß nur die IT.</ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>KI-Richtlinie im Interface</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Alle arbeiten über das Gateway in Ihrer Organisation, Anmeldung per SSO.</ComparisonListItem>
              <ComparisonListItem>Anweisungen, Skills und Connectors kommen zentral auf jeden Rechner.</ComparisonListItem>
              <ComparisonListItem>Budgets je Person, das Gateway setzt sie durch.</ComparisonListItem>
              <ComparisonListItem>Ordner, Netzwerk und Konfiguration je Person einsehbar.</ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline className="text-balance">Wie es weitergeht</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/claude-app"
            title="Claude App"
            description="Chat, Cowork und Projekte in Claude Desktop, verbunden über das Gateway."
            linkLabel="Zur Claude App"
          />
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Claude über AWS Bedrock in der EU, Gateway in Frankfurt."
            linkLabel="Architektur ansehen"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Wie wir Limits, Anweisungen und Richtlinien gemeinsam mit Ihnen einrichten."
            linkLabel="Zum Onboarding"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zum Managed Claude Interface"
          intro="Was Kanzleiinhaber und Admins vor dem Start wissen wollen."
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline className="text-balance">Das Interface live sehen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten zeigen wir Ihnen das Managed Claude Interface mit einer Beispiel-Kanzlei und klären, wer
            bei Ihnen Zugriff bekommt, welche Limits sinnvoll sind und welche Regeln Sie zuerst einstellen. Drei
            Tage danach haben Sie ein Angebot mit Festpreis.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Live-Demo vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
