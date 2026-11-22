import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "claude-updates",
  author: "Max Hänsel",
  date: "2026-11-22",
  image: "/blog/claude-updates/claude-updates-november-2026.jpg",
  tags: ["ki", "security"] as BlogTagId[],
  publish: true,
};

const description =
  "Claude Meetings, Sheets, Whiteboards, Claude Data, interaktive Connectoren, Themes und Advisor: die Claude Updates vom November 2026 im Check, mit DSGVO und Bedrock.";

export const metadata: Metadata = {
  title: "Claude Updates November 2026: 7 Neuerungen im Check | Bluebatch",
  description,
  openGraph: {
    title:
      "Claude Updates November 2026: Sieben Neuerungen und was davon in deutschen Unternehmen funktioniert",
    description,
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-updates/claude-updates-november-2026.jpg",
        width: 1200,
        height: 675,
        alt: "Planung mit Haftnotizen an einer Glaswand im Besprechungsraum",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-updates",
  },
};

const linkClass = "text-primary-600 hover:underline";

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

const SRC = {
  video: "https://www.youtube.com/watch?v=OMfU5iq8Eik",
  meetings: "https://support.claude.com/en/articles/18325154-use-claude-meetings",
  whiteboards:
    "https://support.claude.com/en/articles/18324319-get-started-with-claude-whiteboards",
  sheets: "https://support.claude.com/en/articles/18324300",
  data: "https://support.claude.com/en/articles/17454700-get-started-with-claude-data",
  connectors:
    "https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude",
  launch: "https://claude.com/resources/articles/sheets-whiteboards-data",
  themes: "https://claude.com/marketplace/plugins/theme-examples",
  mods: "https://code.claude.com/docs/en/plugins/mods/admin",
  advisor: "https://code.claude.com/docs/en/advisor",
  fableAws:
    "https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5-2.html",
  thirdParty: "https://claude.com/docs/third-party/claude-desktop/feature-matrix",
  serverUs:
    "https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers",
  gdd: "https://www.gdd.de/wp-content/uploads/2026/01/GDD-Kurzpapier-4-Gespraechstranskription.pdf",
  baylda: "https://www.lda.bayern.de/media/baylda_report_15.pdf",
  cms: "https://cms.law/de/deu/legal-updates/it-mitbestimmung-und-ki",
};

// Tabellen auf dem Handy als Karten, wie auf /managed-claude/datenschutz.
const zeileMobil = "max-md:block max-md:py-3";
const zelleMobil = "max-md:block max-md:px-4 max-md:py-1";

function MobilLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs font-medium text-gray-500 md:hidden">
      {children}
    </span>
  );
}

const NEUERUNGEN = [
  {
    name: "Claude Meetings",
    was: "nimmt an Google-Meet-Calls teil, schreibt mit, baut Dokumente",
    status: "Beta seit 12.11., Team und Enterprise",
    bedrock: "nein",
  },
  {
    name: "Whiteboards",
    was: "gemeinsames Board, Claude ordnet Ideen zu Abläufen und Zeitplänen",
    status: "Beta seit 10.11., alle bezahlten Pläne",
    bedrock: "nein",
  },
  {
    name: "Sheets",
    was: "Tabellen mit echten Formeln und Diagrammen",
    status: "Beta seit 10.11., alle bezahlten Pläne",
    bedrock: "nein",
  },
  {
    name: "Claude Data",
    was: "Dashboards und Datengeschichten aus Data Warehouses",
    status: "allgemein verfügbar seit 10.11., alle bezahlten Pläne",
    bedrock: "nein",
  },
  {
    name: "Interaktive Connectoren",
    was: "Notion, Canva, Asana und andere öffnen sich neben dem Chat",
    status: "Vollbild seit 10.11., alle Pläne",
    bedrock: "eingeschränkt",
  },
  {
    name: "Custom Themes",
    was: "eigenes Aussehen für Claude Code in der Desktop-App",
    status: "seit Mitte November",
    bedrock: "ja",
  },
  {
    name: "Advisor",
    was: "Sonnet oder Opus fragen bei wichtigen Entscheidungen Fable 5.2",
    status: "experimentell, Claude Code",
    bedrock: "nein",
  },
];

const VERFUEGBARKEIT = [
  {
    name: "Claude Meetings",
    claudeAi: "Beta, nur Google Meet",
    bedrock: "nein",
    gateway: "kein Bot im Call, Teams-Transkripte über den Microsoft-365-Connector",
  },
  { name: "Whiteboards", claudeAi: "Beta", bedrock: "nein", gateway: "nein" },
  {
    name: "Sheets",
    claudeAi: "Beta",
    bedrock: "nein",
    gateway: "nein, Cowork legt Excel-Dateien im Arbeitsordner an",
  },
  {
    name: "Claude Data",
    claudeAi: "allgemein verfügbar",
    bedrock: "nein, Data Warehouses nur per MCP abfragbar",
    gateway: "Artefakte: Dashboards und Berichte als Seite im Portal",
  },
  {
    name: "Interaktive Connectoren",
    claudeAi: "ja",
    bedrock: "eingeschränkt",
    gateway: "eingeschränkt, wie bei Bedrock",
  },
  { name: "Custom Themes", claudeAi: "ja", bedrock: "ja", gateway: "ja" },
  {
    name: "Advisor",
    claudeAi: "ja, in Claude Code",
    bedrock: "nein",
    gateway: "nein, Opus 5.5 und Subagents",
  },
  {
    name: "Fable 5.2",
    claudeAi: "ja",
    bedrock: "nur mit globalem Routing",
    gateway: "nein, kein EU-Profil",
  },
];

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Updates November 2026: Sieben Neuerungen und was davon in
          deutschen Unternehmen funktioniert
        </BlogHero.Headline>

        <GeoSummary>
          Im November 2026 hat Anthropic Claude Meetings, Claude Sheets, Claude
          Whiteboards und Claude Data veröffentlicht, dazu interaktive
          Connectoren, Custom Themes für Claude Code und den Advisor. Die vier
          Büro-Funktionen gibt es nur in claude.ai mit Datenspeicherung in den
          USA, nicht über Amazon Bedrock in der EU. Der Advisor ist auf Bedrock
          ausdrücklich nicht verfügbar. Claude Meetings berührt in Deutschland §
          201 StGB, die DSGVO und die Mitbestimmung des Betriebsrats.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>15 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-11-22">22. November 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-updates/claude-updates-november-2026.jpg"
          alt="Planung mit Haftnotizen an einer Glaswand im Besprechungsraum"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="kurzfassung">Kurzfassung</Typo.H2>
            <Typo.Paragraph>
              Anthropic hat im November 2026 sieben Neuerungen für Claude
              veröffentlicht. Vier davon sollen Software ersetzen, für die viele
              Firmen heute zahlen: Claude Meetings statt Granola oder Otter,
              Sheets statt einfacher Tabellen, Whiteboards statt Miro und Claude
              Data statt einfacher BI-Dashboards. Dazu kommen interaktive
              Connectoren, eigene Themes für Claude Code und der Advisor, der
              ein stärkeres Modell nur bei schwierigen Entscheidungen fragt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Jay von RoboNuggets hat die sieben Neuerungen in einem viel
              gesehenen <Ext href={SRC.video}>Video</Ext> vorgestellt. Wir haben
              jede Angabe mit den Hilfeseiten von Anthropic abgeglichen und an
              mehreren Stellen korrigiert.
            </Typo.Paragraph>

            <DataTable compact>
              <DataTable.Head>
                <DataTable.Row className="max-md:hidden">
                  <DataTable.HeaderCell>Neuerung</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was sie tut</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Status und Pläne</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Über Bedrock</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {NEUERUNGEN.map(({ name, was, status, bedrock }) => (
                  <DataTable.Row key={name} className={zeileMobil}>
                    <DataTable.Cell
                      bold
                      className={`${zelleMobil} max-md:text-base`}
                    >
                      {name}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>{was}</DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Status und Pläne</MobilLabel>
                      {status}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Über Amazon Bedrock</MobilLabel>
                      {bedrock}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph className="mt-6">
              Der Haken für deutsche Unternehmen: Die vier Büro-Funktionen gibt
              es nur in claude.ai, wo Anthropic Daten laut{" "}
              <Ext href={SRC.serverUs}>eigener Angabe</Ext> in den USA
              speichert. Über Amazon Bedrock mit Verarbeitung in der EU gibt es
              sie nicht, und den Advisor schließt Anthropic dort ausdrücklich
              aus. Wer Claude Meetings einsetzen will, braucht vorher eine
              saubere Grundlage nach DSGVO, § 201 StGB und
              Betriebsverfassungsgesetz.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="meetings">Claude Meetings: Claude sitzt mit im Call</Typo.H2>

            <Typo.H3>Was Claude Meetings kann</Typo.H3>
            <Typo.Paragraph>
              Seit dem 12. November 2026 nimmt Claude als eigener Teilnehmer an
              Videocalls teil. Die Funktion ist in der Beta, nur für Team- und
              Enterprise-Pläne, im Browser und in Claude Desktop. Sie
              funktioniert nur mit Google Meet. Andere Plattformen kündigt
              Anthropic ohne Datum an, Microsoft Teams und Zoom gehen also noch
              nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>So läuft es ab:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Sie verbinden einmal Google Calendar, wählen einen Termin und
                klicken auf „Add Claude“. Auf Wunsch tritt Claude allen
                Terminen automatisch bei, oder allen außer Einzelgesprächen.
              </Typo.ListItem>
              <Typo.ListItem>
                Im Call erscheint Claude als Kachel. Auf Zuruf beantwortet es
                Fragen im Meet-Chat, fasst Vereinbarungen zusammen und baut
                Dokumente, Whiteboards oder Folien, während Sie noch sprechen.
              </Typo.ListItem>
              <Typo.ListItem>
                Nach dem Call bekommt jedes Meeting eine eigene Seite mit
                Zusammenfassung, Aufgaben, Transkript und allem, was Claude
                erstellt hat. Die Teilnehmer aus Ihrer Organisation erhalten
                eine Recap-Mail.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Was Anthropic dabei speichert</Typo.H3>
            <Typo.Paragraph>
              Laut <Ext href={SRC.meetings}>Hilfeseite</Ext> speichert Claude
              Transkript, Zusammenfassung und Beschreibungen des geteilten
              Bildschirms, aber kein Audio. Beim Beitritt schreibt Claude einen
              Hinweis in den Chat.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Externe Gäste:</strong> Bei Team ist das standardmäßig
                erlaubt, bei Enterprise nimmt Claude standardmäßig nur an
                internen Calls teil. Ist es nicht erlaubt, verlässt Claude den
                Call, sobald ein Externer beitritt. Ist es erlaubt, landen auch
                die Aussagen der Gäste in Transkript und Notizen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Gesperrt</strong> ist die Beta für Organisationen mit
                Zero Data Retention, HIPAA-Konfiguration oder eigenen
                Schlüsseln.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Speicherort und Dauer</strong> nennt Anthropic für
                Meetings nicht. Für die kommerziellen Produkte gilt allgemein:
                Die Daten liegen in den USA.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die Verantwortung legt Anthropic zu Ihnen: Bevor Sie Claude
              hinzufügen, sollen Sie sicherstellen, dass alle im Call mit der
              Transkription einverstanden sind.
            </Typo.Paragraph>

            <Typo.H3>Was das in Deutschland bedeutet</Typo.H3>
            <Typo.Paragraph>
              Für einen KI-Bot im Call greifen gleich drei Regelwerke. Das
              ersetzt keine Rechtsberatung, zeigt aber, wo Sie hinschauen
              müssen.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>§ 201 StGB:</strong> Wer das nichtöffentlich gesprochene
                Wort unbefugt aufnimmt, macht sich strafbar. Die GDD schreibt in
                ihrem <Ext href={SRC.gdd}>Kurzpapier zur Gesprächstranskription</Ext>{" "}
                vom Januar 2026, dass die meisten Tools das Audio
                zwischenspeichern und damit technisch eine Aufnahme vorliegt.
                Dass Claude kein Audio dauerhaft ablegt, reicht also nicht als
                Entlastung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>DSGVO:</strong> Das Bayerische Landesamt für
                Datenschutzaufsicht wertet Transkription in seinem{" "}
                <Ext href={SRC.baylda}>Tätigkeitsbericht 2025</Ext> als
                Verarbeitung personenbezogener Daten, auch ohne gespeicherte
                Aufzeichnung. Eine pauschale oder dauerhafte Aktivierung sei
                regelmäßig nicht geboten. Das trifft genau den automatischen
                Beitritt. Widerspricht jemand im laufenden Call, muss die
                Transkription ab dann aufhören.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Betriebsrat:</strong> Automatische Protokolle zeigen,
                wer was gesagt hat. Arbeitsrechtler der Kanzlei{" "}
                <Ext href={SRC.cms}>CMS</Ext> sehen die Mitbestimmung nach § 87
                Abs. 1 Nr. 6 BetrVG bei solchen KI-Systemen deshalb regelmäßig
                als eröffnet an.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Datenschutz-Folgenabschätzung:</strong> Die Muss-Liste
                der Datenschutzkonferenz nennt KI, die mit Betroffenen
                interagiert. Ein Bot, der im Call antwortet und Aussagen
                Personen zuordnet, gehört deshalb auf den Prüfstand.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die GDD empfiehlt, schon in der Einladung über Zweck, Umfang,
              Speicherdauer und das eingesetzte KI-System zu informieren.
            </Typo.Paragraph>

            <Typo.H3>Der Weg für Firmen mit Microsoft Teams</Typo.H3>
            <Typo.Paragraph>
              Die meisten Unternehmen im Mittelstand arbeiten mit Teams, nicht
              mit Google Meet. Dort geht ein anderer Weg: Teams erstellt das
              Transkript selbst, mit dem bekannten Hinweis für alle
              Teilnehmer. Claude liest es nach dem Call über den{" "}
              <Link
                href="/managed-claude/integrationen/microsoft"
                className={linkClass}
              >
                Microsoft-365-Connector
              </Link>
              , der dafür eine zusätzliche Leseberechtigung für Transkripte
              braucht, und schreibt daraus Protokoll, Aufgaben und
              Follow-up-Mail.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Pflichten zu Information und Betriebsrat bleiben dieselben.
              Aber es sitzt kein zusätzlicher Bot im Call, und das Transkript
              liegt in Ihrem Microsoft-Tenant statt bei einem weiteren Anbieter.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-updates/zwei-wege-meeting-protokoll.png"
              alt="Diagramm: Weg 1 Claude Meetings mit Google Meet und Speicherung in den USA, Weg 2 Teams-Transkript, das Claude nach dem Call über den Microsoft-365-Connector und Bedrock in der EU verarbeitet"
              width={1200}
              height={675}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="artefakte">
              Sheets, Whiteboards und Data: die neuen Artefakte
            </Typo.H2>
            <Typo.Paragraph>
              Artefakte sind die Inhalte, die Claude neben dem Chat erstellt,
              etwa Dokumente, Folien oder kleine Anwendungen. Seit dem{" "}
              <Ext href={SRC.launch}>10. November 2026</Ext> gibt es drei neue
              Arten davon.
            </Typo.Paragraph>

            <Typo.H3>Claude Whiteboards</Typo.H3>
            <Typo.Paragraph>
              Ein Whiteboard ist eine gemeinsame Fläche, auf der Sie sprechen,
              tippen oder skizzieren. Claude ordnet die Ideen zu Diagrammen,
              Abläufen und Gruppen. Ein Satz wie „Starte ein Whiteboard, um
              unseren Produktstart zu planen“ reicht, und Claude legt die
              Schritte in eine Reihenfolge, auf Wunsch als Zeitplan mit
              Verantwortlichen und Terminen.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Sie markieren einen Bereich und lassen nur diesen Teil ändern.
                Das Diktat funktioniert auch auf Deutsch.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Pläne:</strong> Pro, Max, Ultra, Team und Enterprise.
                Im Video heißt es „jeder Plan“, der Free-Plan fehlt laut{" "}
                <Ext href={SRC.whiteboards}>Hilfeseite</Ext> aber. Bei
                Enterprise bleibt die Funktion aus, bis ein Admin sie
                einschaltet.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Export:</strong> als Datei nur PNG. Zusätzlich gibt es
                „Senden an“ Lucid, Miro und Zoho Vani, und Claude macht aus
                einem Board ein Dokument oder eine Präsentation.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Import:</strong> Alte Miro-Boards lassen sich nicht
                einlesen. Der Tipp aus dem Video funktioniert trotzdem:
                Screenshot machen und Claude das Board nachbauen lassen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Claude Sheets</Typo.H3>
            <Typo.Paragraph>
              Sheets ist eine Tabellenkalkulation in Claude. Claude schreibt
              echte Formeln, die Sie über Zellen und Reiter kopieren. Ein Klick
              auf eine Zahl zeigt, wie sie berechnet wurde. Bedingte
              Formatierung und Diagramme sind dabei, Import aus Excel, CSV und
              Google Sheets ebenso, Export als <code>.xlsx</code> oder CSV.
            </Typo.Paragraph>
            <Typo.Paragraph>Die Grenzen sind deutlich:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Ein Blatt fasst mindestens 200.000 gefüllte Zellen. Zum Start
                waren es laut t3n noch 100.000.
              </Typo.ListItem>
              <Typo.ListItem>
                Pivot-Tabellen, geschützte Bereiche und PDF-Export fehlen noch.
                Makros, VBA, Power Query und DAX gibt es nicht.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Keine Live-Daten:</strong> Im Video rät Jay, ein Sheet
                per geplanter Aufgabe jede Woche mit Zahlen aus Stripe zu
                füllen. Laut <Ext href={SRC.sheets}>Anthropic</Ext> können
                Sheets aber keine Live-Daten aus verbundenen Apps ziehen.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Für Tracker, Budgets und kleine Auswertungen reicht das. Wer in
              Excel mit Makros oder Power Query arbeitet, bleibt bei Excel.
            </Typo.Paragraph>

            <Typo.H3>Claude Data</Typo.H3>
            <Typo.Paragraph>
              Claude Data hieß bis vor Kurzem Claude Dashboards und ist seit dem
              10. November allgemein verfügbar. Es verbindet sich mit Data
              Warehouses wie BigQuery, Snowflake, Databricks, Redshift oder
              ClickHouse und mit anderen verbundenen Apps, etwa Salesforce. Sie
              beschreiben, was Sie wissen wollen, und Claude baut die
              Auswertung.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Vier Formate:</strong> ein Dashboard, einen
                Scrollyteller als Datengeschichte zum Durchscrollen, ein Visual
                Short als kurzes Video und eine Visual Analysis als Text zum
                Ausdrucken.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Nachvollziehbar:</strong> Hinter jedem Diagramm steht
                eine SQL-Abfrage, die Sie sehen können.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktualität:</strong> Die Daten werden beim Öffnen
                aktualisiert, wenn sie fällig sind. Einen festen Zeitplan gibt
                es nicht, auch wenn das Video von „automatisch aktuell“
                spricht.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Für größere Firmen sind zwei Beta-Funktionen interessant:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Zertifizierte Abfragen:</strong> Das Datenteam gibt die
                offizielle Formel für eine Kennzahl frei, Diagramme darauf
                tragen ein Abzeichen. Das löst ein bekanntes Problem: Vertrieb
                und Controlling rechnen den Umsatz unterschiedlich. Wer die
                Abfrage ändert, entfernt die Zertifizierung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Live-Sharing:</strong> Hier ist Vorsicht nötig. Wer ein
                Dashboard bekommt, sieht die Daten laut{" "}
                <Ext href={SRC.data}>Hilfeseite</Ext> mit Ihrem Zugriff, auch
                wenn er selbst keinen Zugang zur Quelle hat. Teilen Sie ein
                Dashboard mit Kunden- oder Gehaltsdaten, geben Sie genau diese
                Daten weiter. Bei Team sind beide Funktionen standardmäßig an,
                bei Enterprise aus.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="connectoren-themes">
              Interaktive Connectoren und Themes
            </Typo.H2>

            <Typo.H3>Interaktive Connectoren</Typo.H3>
            <Typo.Paragraph>
              Connectoren verbinden Claude mit anderen Programmen. Seit Januar
              2026 können manche davon ihre eigene Oberfläche im Chat zeigen,
              auf Basis der offenen MCP-Erweiterung MCP Apps. Seit dem 10.
              November öffnen sie sich als volle App neben dem Gespräch oder im
              Vollbild. Sie und Claude arbeiten dann darin wie im Original, ohne
              zwischen Fenstern zu wechseln.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Anthropic nennt unter anderem Asana, Box, Canva, Figma, Slack,
                Notion und Atlassian. HubSpot, das im Video als Beispiel fällt,
                steht nicht auf der{" "}
                <Ext href={SRC.connectors}>Liste der interaktiven Connectoren</Ext>
                .
              </Typo.ListItem>
              <Typo.ListItem>
                Admins in Team und Enterprise können die interaktive Oberfläche
                abschalten. Der Connector bleibt dann als Text nutzbar.
              </Typo.ListItem>
              <Typo.ListItem>
                Die Oberflächen laufen in einem abgeschotteten Rahmen mit
                strengen Regeln, welche Adressen sie aufrufen dürfen.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Auch Claude Desktop im Betrieb über Bedrock zeigt diese
              Oberflächen. Sie werden dort aber über eine Domain von Anthropic
              geladen, die sich abschalten lässt, und Connectoren mit dem
              Vermerk „Made by Anthropic“ fehlen.
            </Typo.Paragraph>

            <Typo.H3>Custom Themes für Claude Code</Typo.H3>
            <Typo.Paragraph>
              Im Code-Tab von Claude Desktop können Sie Farben, Hell- und
              Dunkelmodus und animierte Hintergründe ändern. Anthropic liefert
              ein <Ext href={SRC.themes}>Plugin mit Beispielen</Ext>,
              inzwischen 38 Szenen statt der 20 aus dem Video. Ein Satz an
              Claude reicht auch: Beschreiben Sie das gewünschte Aussehen, und
              Claude baut es.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nützlich wird das, wenn ein Theme etwas anzeigt. Nutzer haben
              Themes gebaut, bei denen es stärker schneit, je voller das
              Kontextfenster wird, oder ein Lagerfeuer, das herunterbrennt, wenn
              das Nutzungslimit näher rückt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die IT ist ein Detail wichtig. Themes sind technisch Mods,
              also Code, den ein Plugin in Claude Code ausführt. Mods laufen mit
              den Rechten der Person außerhalb der Sandbox, die Freigaben für
              Werkzeuge greifen dafür nicht. Admins können Mods über{" "}
              <Ext href={SRC.mods}>verwaltete Einstellungen</Ext> stoppen. Wer{" "}
              <Link href="/blog/claude-plugins" className={linkClass}>
                Claude Plugins
              </Link>{" "}
              zentral verteilt, entscheidet damit auch, welche Mods ins
              Unternehmen kommen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="advisor">
              Advisor und Fable 5.2: das starke Modell nur bei Bedarf
            </Typo.H2>
            <Typo.Paragraph>
              Am 9. November 2026 hat Anthropic Fable 5.2 veröffentlicht, sein
              bisher stärkstes Modell. Es ist auch das teuerste: Über die API
              kostet es 8 US-Dollar je Million Eingabe-Tokens und 40 US-Dollar
              je Million Ausgabe-Tokens.
            </Typo.Paragraph>

            <Typo.H3>So funktioniert der Advisor</Typo.H3>
            <Typo.Paragraph>
              Der Advisor in Claude Code löst das Kostenproblem auf eine
              einfache Art. Ihr Alltagsmodell, etwa Sonnet oder Opus, arbeitet
              wie gewohnt. Nur bei wichtigen Entscheidungen zieht es das
              stärkere Modell hinzu, zum Beispiel bevor es einen Plan umsetzt
              oder wenn es am selben Fehler hängen bleibt.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Mit <code>/advisor fable</code> schalten Sie ihn für eine
                Sitzung ein, mit der Einstellung <code>advisorModel</code>{" "}
                dauerhaft.
              </Typo.ListItem>
              <Typo.ListItem>
                Der Berater muss mindestens so stark sein wie das Hauptmodell.
              </Typo.ListItem>
              <Typo.ListItem>
                Anthropic bezeichnet die Funktion als experimentell.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Jay berichtet, dass Claude Fable bei ihm in vier Tagen rund 460
              Mal gefragt hat, bei nur 3 Prozent Fable-Verbrauch in seinem Plan.
              Das sind persönliche Zahlen. Laut Anthropic liest jeder
              Advisor-Aufruf das ganze bisherige Gespräch neu, ohne
              Zwischenspeicher. Bei langen Sitzungen summiert sich das. Wie sich
              die Kosten von Claude Code zusammensetzen, steht unter{" "}
              <Link href="/blog/claude-code-kosten" className={linkClass}>
                Claude Code Kosten
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Nicht über Bedrock</Typo.H3>
            <Typo.Paragraph>
              Für Unternehmen, die Claude über die eigene Cloud nutzen, ist der
              Advisor keine Option. Anthropic schreibt in der{" "}
              <Ext href={SRC.advisor}>Doku zum Advisor</Ext> ausdrücklich, dass
              er auf Amazon Bedrock, Google Clouds Agent Platform und Microsoft
              Foundry nicht verfügbar ist. Er läuft nur über die API von
              Anthropic und die von Anthropic betriebenen Angebote bei AWS und
              Google Cloud.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Auch Fable 5.2 selbst ist für EU-Firmen auf Bedrock schwierig. AWS
              bietet das Modell laut{" "}
              <Ext href={SRC.fableAws}>Modellkarte</Ext> aus europäischen
              Regionen nur über globales Routing an, ein EU-Profil gibt es
              nicht. Die Anfragen können also außerhalb der EU verarbeitet
              werden. Außerdem verlangt AWS für Fable 5.2 einen eigenen
              Aufbewahrungsmodus.
            </Typo.Paragraph>

            <Typo.H3>Was stattdessen geht</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>
                  <code>opusplan</code>:
                </strong>{" "}
                Opus plant, Sonnet setzt um. Das läuft auch über Bedrock.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Subagents mit eigenem Modell:</strong> Für schwierige
                Teilaufgaben bekommt ein Subagent ein stärkeres Modell.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Opus 5.5 nutzen:</strong> Jay sagt selbst, dass Opus
                5.5 für die meisten Aufgaben in der Wissensarbeit reicht.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bedrock-gateway">
              Was davon über Bedrock und im Private Claude AI Gateway geht
            </Typo.H2>
            <Typo.Paragraph>
              Wer Claude über Amazon Bedrock nutzt, arbeitet in Claude Desktop
              im sogenannten Third-Party-Modus, mit Chat, Cowork und Claude
              Code. Die Anfragen verarbeitet der Cloud-Anbieter in der gewählten
              Region, der Verlauf liegt auf dem Rechner. Was dort laut{" "}
              <Ext href={SRC.thirdParty}>Funktionsübersicht</Ext> grundsätzlich
              fehlt: claude.ai im Browser, Sitzungen in der Cloud von Anthropic
              und das Teilen von Inhalten zwischen Nutzern. Deshalb fehlen auch
              die neuen Artefakte. Meetings, Whiteboards, Sheets und Claude Data
              tauchen in der Dokumentation für diesen Betrieb nicht auf. Wie der
              Betrieb über Bedrock im Detail aussieht, beschreibt unser Beitrag{" "}
              <Link
                href="/blog/claude-cowork-bedrock-dsgvo"
                className={linkClass}
              >
                Claude Cowork mit Amazon Bedrock
              </Link>
              .
            </Typo.Paragraph>

            <DataTable compact>
              <DataTable.Head>
                <DataTable.Row className="max-md:hidden">
                  <DataTable.HeaderCell>Neuerung</DataTable.HeaderCell>
                  <DataTable.HeaderCell>claude.ai</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Über Bedrock</DataTable.HeaderCell>
                  <DataTable.HeaderCell className="bg-primary-950">
                    Private Claude AI Gateway
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {VERFUEGBARKEIT.map(({ name, claudeAi, bedrock, gateway }) => (
                  <DataTable.Row key={name} className={zeileMobil}>
                    <DataTable.Cell
                      bold
                      className={`${zelleMobil} max-md:text-base`}
                    >
                      {name}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>claude.ai</MobilLabel>
                      {claudeAi}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Über Amazon Bedrock</MobilLabel>
                      {bedrock}
                    </DataTable.Cell>
                    <DataTable.Cell
                      bold
                      className={`bg-primary-50/70 ${zelleMobil} max-md:mx-4 max-md:mt-1 max-md:rounded-lg max-md:px-3 max-md:py-2`}
                    >
                      <MobilLabel>Private Claude AI Gateway</MobilLabel>
                      {gateway}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>

            <Typo.H3 className="mt-8">
              Artefakte im Gateway statt Claude Data
            </Typo.H3>
            <Typo.Paragraph>
              Im Private Claude AI Gateway legt Claude Dashboards, Auswertungen,
              Berichte und Checklisten als HTML-Seite im Portal ab, aus dem
              Chat, aus Cowork oder aus Claude Code.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Jede Seite hat eine feste Adresse, der Zugang läuft über die
                Anmeldung im Portal.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Live-Daten:</strong> Häkchen, Status, Notizen und
                Formulare landen in einer kleinen Datenbank je Seite. Alle, die
                die Seite offen haben, sehen Änderungen sofort.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Freigaben:</strong> Lesen, Mitarbeiten oder Bearbeiten,
                je Person, für die ganze Organisation oder per Link. Eine neue
                Seite sieht zunächst nur, wer sie angelegt hat.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Versionen:</strong> Jede Änderung ist eine neue
                Version, nichts wird überschrieben.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Gespeichert</strong> wird im Gateway in Frankfurt, die
                Modelle laufen über Bedrock innerhalb der EU.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Ehrlich gesagt: Zertifizierte Abfragen und Videos aus Zahlen
              bietet das Gateway nicht. Für die meisten Auswertungen im
              Mittelstand braucht es sie auch nicht.
            </Typo.Paragraph>

            <Typo.H3>Modelle</Typo.H3>
            <Typo.Paragraph>
              Im Gateway stehen Opus 5.5, Sonnet 5.5 und Haiku 5.5 zur Wahl,
              alle über EU-Inference-Profile von Bedrock. Fable 5.2 fehlt
              bewusst: Bedrock bietet es aus der EU nur mit globalem Routing
              an, und Modelle ohne EU-Profil nehmen wir nicht ins Gateway. Der
              Advisor ginge über Bedrock ohnehin nicht. Mehr dazu unter{" "}
              <Link href="/managed-claude/datenschutz" className={linkClass}>
                Datenschutz bei Private Claude
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Connectoren und Plugins</Typo.H3>
            <Typo.Paragraph>
              Statt eines Meeting-Bots verbindet das Gateway Claude mit Ihrem
              Microsoft 365: Outlook, Kalender, OneDrive, SharePoint und Teams,
              mit den Rechten der angemeldeten Person. Eigene MCP-Server und
              Plugins mit Skills verteilen Sie zentral über das Portal an alle
              oder an einzelne Teams, siehe{" "}
              <Link href="/managed-claude/plugins" className={linkClass}>
                Plugins im Private Claude AI Gateway
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="empfehlung">Welche Neuerung sich für Sie lohnt</Typo.H2>
            <Typo.Paragraph>
              Jay gibt am Ende seines Videos einen guten Rat: Picken Sie sich
              die Funktionen heraus, die Ihre Arbeit wirklich verändern, statt
              alle lernen zu wollen. Anthropic veröffentlicht so schnell, dass
              niemand alles beherrscht.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Geschäftsführung:</strong> Kennzahlen als Dashboard sind
                der größte Hebel. Legen Sie vorher fest, wer die offizielle
                Formel für Umsatz und Marge bestimmt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Controlling und Buchhaltung:</strong> Sheets eignet sich
                für schnelle Auswertungen. Pivot-Tabellen, Makros und Power
                Query bleiben in Excel.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Projektleitung und Vertrieb:</strong> Whiteboards helfen
                bei Planungen und Workshops. Claude Meetings erst nach der
                Checkliste unten.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Entwicklung:</strong> Der Advisor lohnt sich mit der API
                von Anthropic. Über Bedrock nehmen Sie <code>opusplan</code>{" "}
                oder Subagents. Themes mit Kontextanzeige sind nützlich, sollten
                aber über die IT kommen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>IT und Datenschutz:</strong> Prüfen Sie die
                Admin-Schalter. Bei Enterprise sind Sheets und Whiteboards aus,
                bis Sie sie einschalten, Claude Data ist seit dem 20. November
                standardmäßig an, Live-Sharing bleibt aus.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Checkliste vor dem ersten Meeting mit Claude</Typo.H3>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <Typo.ListItem>
                Rechtsgrundlage festlegen und die Abwägung schriftlich
                festhalten
              </Typo.ListItem>
              <Typo.ListItem>
                In der Einladung auf die KI-Transkription hinweisen, mit Zweck,
                Speicherdauer und Empfängern
              </Typo.ListItem>
              <Typo.ListItem>
                Den Betriebsrat einbinden, mindestens mit einer
                Duldungsvereinbarung
              </Typo.ListItem>
              <Typo.ListItem>
                Prüfen, ob eine Datenschutz-Folgenabschätzung nötig ist, und das
                Ergebnis dokumentieren
              </Typo.ListItem>
              <Typo.ListItem>
                Automatischen Beitritt ausschalten und Claude nur zu einzelnen
                Terminen holen
              </Typo.ListItem>
              <Typo.ListItem>
                Externe Gäste nur nach deren Zustimmung transkribieren
              </Typo.ListItem>
              <Typo.ListItem>
                Vertrag zur Auftragsverarbeitung und Speicherort prüfen, die
                Daten liegen in den USA
              </Typo.ListItem>
            </ol>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Ist Claude Meetings DSGVO-konform?",
                  answer:
                    "Nicht von selbst. Anthropic speichert Transkripte, aber kein Audio, und die Daten liegen in den USA. Für den Einsatz in Deutschland brauchen Sie eine Rechtsgrundlage, die Information aller Teilnehmer vor dem Call, meist den Betriebsrat und eine Prüfung der Datenschutz-Folgenabschätzung. Den automatischen Beitritt zu allen Terminen sehen Aufsichtsbehörden kritisch.",
                },
                {
                  question: "Funktioniert Claude Meetings mit Microsoft Teams?",
                  answer:
                    "Nein, derzeit nur mit Google Meet. Anthropic kündigt weitere Plattformen ohne Datum an. Mit Teams geht der Umweg über das Teams-Transkript, das Claude nach dem Call über den Microsoft-365-Connector liest.",
                },
                {
                  question: "Was ist Claude Data?",
                  answer:
                    "Claude Data ist der neue Name von Claude Dashboards. Claude verbindet sich mit Data Warehouses wie BigQuery oder Snowflake und baut daraus Dashboards, Datengeschichten, kurze Videos oder schriftliche Auswertungen. Seit dem 10. November 2026 ist es allgemein verfügbar.",
                },
                {
                  question: "Ersetzt Claude Sheets Excel?",
                  answer:
                    "Für einfache Tabellen, Tracker und Budgets ja. Für große Datenmengen, Pivot-Tabellen, Makros, VBA oder Power Query nicht. Sheets fasst mindestens 200.000 gefüllte Zellen und zieht keine Live-Daten aus anderen Programmen.",
                },
                {
                  question: "Was ist der Claude Advisor?",
                  answer:
                    "Eine experimentelle Funktion in Claude Code. Ein günstigeres Modell wie Sonnet oder Opus fragt bei wichtigen Entscheidungen ein stärkeres Modell wie Fable 5.2 um Rat. Sie aktivieren ihn mit /advisor fable.",
                },
                {
                  question:
                    "Gibt es die neuen Claude-Funktionen über Amazon Bedrock?",
                  answer:
                    "Größtenteils nein. Meetings, Whiteboards, Sheets und Claude Data gibt es nur in claude.ai. Der Advisor ist auf Bedrock ausdrücklich nicht verfügbar. Interaktive Connectoren und Themes funktionieren auch über Bedrock, die Connectoren mit Einschränkungen.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu den Claude Updates
              </FaqContainer.Headline>
            </FaqContainer>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Sie wollen Claude im Unternehmen nutzen, aber mit Verarbeitung in
              der EU und klaren Regeln? Das Private Claude AI Gateway bringt
              Claude Desktop mit Chat, Cowork und Code über Amazon Bedrock,
              dazu Artefakte, den Microsoft-365-Connector und zentral verteilte
              Plugins.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im{" "}
              <Link href="/managed-claude/onboarding" className={linkClass}>
                Onboarding
              </Link>{" "}
              richten wir das Gateway mit Ihnen ein und bauen den ersten
              Anwendungsfall, etwa Protokolle aus Teams-Besprechungen oder ein
              Dashboard für Ihre Kennzahlen. Oder{" "}
              <Link href="/contact" className={linkClass}>
                sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurzfassung">
            Kurzfassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="meetings">
            Claude Meetings
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="artefakte">
            Sheets, Whiteboards, Data
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="connectoren-themes">
            Connectoren und Themes
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="advisor">
            Advisor und Fable 5.2
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bedrock-gateway">
            Bedrock und Gateway
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="empfehlung">
            Welche Neuerung lohnt sich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">FAQ</BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechster-schritt">
            Nächster Schritt
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
