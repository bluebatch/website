import type { Metadata } from "next";
import {
  Cpu,
  FileSignature,
  KeyRound,
  Lock,
  Network,
  Scale,
  Send,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnCallToAction,
  Hero2ColumnHeadline,
  Hero2ColumnImage,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnTextColumn,
} from "@/components/heroes/hero-2-column";
import { FlowDiagram, HubDiagram } from "@/components/diagrams";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns from "@/components/ui/prose-columns";
import SimpleCard from "@/components/cards/simple-card";
import DataTable from "@/components/ui/data-table";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "KI für Steuerberater nach § 62a StBerG";

export const metadata: Metadata = {
  title: `${TITLE}: Gateway statt Consumer-ChatGPT | Bluebatch`,
  description:
    "KI in der Steuerkanzlei berufsrechtlich sauber einsetzen: Vertragskette nach § 62a StBerG, Gateway mit Einwilligungs-Flag und Kill-Switch, Freigabe durch den Berufsträger. Keine Mandatsakte in Consumer-ChatGPT.",
  keywords: [
    "KI Steuerberater",
    "62a StBerG",
    "§ 62a StBerG KI",
    "Private AI Steuerkanzlei",
    "ChatGPT Steuerkanzlei erlaubt",
  ],
  openGraph: {
    title: `${TITLE}: Gateway statt Consumer-ChatGPT`,
    description:
      "Vertragskette nach § 62a StBerG, Gateway mit Einwilligungs-Flag und Kill-Switch, Freigabe durch den Berufsträger. Keine Mandatsakte in Consumer-ChatGPT.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Steuerberater"),
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE}: Gateway statt Consumer-ChatGPT`,
    description:
      "Vertragskette nach § 62a StBerG, Gateway mit Einwilligungs-Flag und Kill-Switch, Freigabe durch den Berufsträger.",
    images: ogImages(TITLE, "Steuerberater").map((i) => i.url),
  },
  alternates: {
    canonical: "/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg",
  },
};

const risiken = [
  {
    title: "AVV ohne 62a-Anlage",
    text: "Der Auftragsverarbeitungsvertrag nach Art. 28 DSGVO regelt personenbezogene Daten. § 62a Abs. 8 StBerG stellt den Datenschutz ausdrücklich daneben, nicht an die Stelle des Berufsrechts. Fehlt die Textform mit Verschwiegenheitsverpflichtung und Belehrung über § 203 StGB, ist der Bezugsweg berufsrechtlich offen.",
  },
  {
    title: "Schatten-KI im Browser",
    text: "Mitarbeitende legen Sachverhalte in privaten ChatGPT-Accounts ab, weil es schneller geht. Die Kanzlei erfährt davon nichts, hat keinen Vertrag, keine Protokolle und keine Möglichkeit, den Weg zu schließen. Nach Abs. 2 schuldet sie aber die sorgfältige Auswahl des Dienstleisters.",
  },
  {
    title: "Kein Kill-Switch",
    text: "§ 62a Abs. 2 Satz 2 StBerG verlangt, die Zusammenarbeit unverzüglich zu beenden, wenn der Dienstleister seine Pflichten verletzt. Ein Kündigungsschreiben ist kein Schalter. Ohne technischen Weg, eine Modellroute in Minuten auf null zu stellen, bleibt die Pflicht auf dem Papier.",
  },
];

const useCases = [
  {
    tag: "Use Case 01",
    title: "Mandantenmail vorbereiten",
    text: "Der Agent lädt nur die Felder, die der Use Case braucht, nicht die ganze Akte. Das Gateway prüft das Einwilligungs-Flag nach Abs. 5. Der Berufsträger gibt den Entwurf frei, erst dann geht er raus.",
  },
  {
    tag: "Use Case 02",
    title: "Bescheid-Vorprüfung",
    text: "Der Agent stellt Bescheid und Erklärung gegenüber und markiert Abweichungen. Die fachliche Bewertung bleibt beim Menschen, § 57 Abs. 1 StBerG verlangt eigenverantwortliche Berufsausübung.",
  },
  {
    tag: "Use Case 03",
    title: "Schatten-KI schließen",
    text: "Die Bestandsaufnahme listet vorhandene Consumer-Accounts. Gemeinsam mit Ihrer IT werden diese Wege gesperrt, während das Gateway den erlaubten Weg öffnet. Verbot ohne Alternative funktioniert nicht.",
  },
  {
    tag: "Use Case 04",
    title: "Anbieter wechselt Unterauftragnehmer",
    text: "Ein Modellwechsel ohne neue Klausel nach Abs. 3 ist ein Bruch der Kette. Das Gateway führt ein Register der freigegebenen Modelle und stoppt Routen, die nicht mehr gedeckt sind.",
  },
];

const faqs = [
  {
    question: "Reicht eine AVV für KI in der Steuerkanzlei nach § 62a StBerG?",
    answer:
      "Nein. § 62a Abs. 8 StBerG stellt den Datenschutz neben das Berufsrecht, nicht an dessen Stelle. Eine Auftragsverarbeitungsvereinbarung nach Art. 28 DSGVO regelt personenbezogene Daten. Abs. 3 verlangt zusätzlich einen Vertrag in Textform mit Verschwiegenheitsverpflichtung, Belehrung über § 203 StGB, Zugang nur soweit zur Erfüllung erforderlich und dieselbe Verpflichtung für alle Unterauftragnehmer. Wir liefern diese Anlage als IT-Lieferung, die berufsrechtliche Verantwortung bleibt bei der Kanzlei.",
  },
  {
    question: "Darf DATEV Copilot neben dem Gateway bleiben?",
    answer:
      "Ja, wenn er im Bestand ist. Wir bauen keinen zweiten Beleg-Copiloten und ersetzen DATEV nicht. Die Bestandsaufnahme nimmt vorhandene Werkzeuge auf und ordnet sie ein. Das Gateway deckt die Fälle ab, in denen Mandatsinhalte in ein Sprachmodell sollen, für das noch keine Kette nach Abs. 3 besteht.",
  },
  {
    question: "Braucht jedes Mandat eine Einwilligung?",
    answer:
      "Wenn die Dienstleistung unmittelbar einem Mandat dient, verlangt § 62a Abs. 5 StBerG die Einwilligung des Mandanten. Interne Texte ohne Mandantenbezug brauchen dieses Flag nicht, Abs. 2 und Abs. 3 gelten trotzdem. Das Gateway trennt beide Räume technisch, damit die Unterscheidung nicht von der Disziplin einzelner Mitarbeitender abhängt.",
  },
  {
    question: "Was kostet KI für Steuerberater nach § 62a StBerG?",
    answer:
      "Der Einstieg ist der Use-Case-Workshop für 1.750 € einmalig: Bestandsaufnahme, Auswahl des ersten Use Case und der Weg, der zu Ihrer Kanzlei passt. Die Umsetzung läuft entweder als fest kalkulierter Workflow ab 8.000 € oder als feste Engineer-Kapazität ab 3.000 € pro Monat. Modell- und Hostingkosten kommen dazu. Alle Pakete stehen auf unserer Seite zum Wachstumsmodell.",
  },
  {
    question: "Ist Bluebatch selbst Berufsgeheimnisträger nach Abs. 7?",
    answer:
      "Nein. § 62a Abs. 7 Satz 2 StBerG lässt Vertragsklauseln nur entfallen, wenn der Dienstleister selbst gesetzlich zur Verschwiegenheit verpflichtet ist. Das trifft auf uns nicht zu, deshalb gehen wir den vollen Weg über Abs. 3 mit Textform, Belehrung und Unterauftragnehmer-Kette.",
  },
  {
    question: "Wie hängt § 62a StBerG mit § 203 StGB zusammen?",
    answer:
      "§ 203 StGB ist die strafrechtliche Untergrenze und bestraft das unbefugte Offenbaren von Geheimnissen. § 62a StBerG organisiert davor die Büroorganisation: sorgfältige Auswahl, Vertrag in Textform, Belehrung, Unterauftragnehmer und Beendigung. Wer § 62a einhält, arbeitet innerhalb der Befugnis, die § 203 voraussetzt.",
  },
  {
    question: "Was baut Bluebatch bewusst nicht?",
    answer:
      "Keine Rechtsberatung und keine Kammer-Bestätigung für einzelne Use Cases. Keine Vollautomatisierung und keinen Versand an Mandant oder Finanzamt ohne Freigabe. Keinen DATEV-Ersatz. Und keine Anbindung an eine US-API ohne vorherige Prüfung nach Abs. 4. Vertragsentwürfe gehen vor Unterschrift an die Kanzlei und deren rechtliche Beratung.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Private AI für Steuerkanzleien
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI für Steuerberater nach § 62a StBerG: Gateway statt
              Consumer-ChatGPT
            </Hero2ColumnHeadline>
            <GeoSummary>
              § 62a StBerG erlaubt Steuerkanzleien, Dienstleister an
              Mandatsdaten zu lassen, verlangt dafür aber einen Vertrag in
              Textform mit Belehrung über § 203 StGB. Bluebatch baut dafür ein
              Gateway: einen kontrollierten Weg ins Sprachmodell mit
              Einwilligungs-Flag, Freigabe durch den Berufsträger und
              Kill-Switch, statt Mandatsakten in Consumer-ChatGPT.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Erstgespräch vereinbaren
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/tax-consulting-workspace.jpg"
              type="image"
              alt="Steuerkanzlei mit kontrolliertem KI-Zugang nach § 62a StBerG"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Ausgangslage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Consumer-KI auf der Mandatsakte teuer wird
          </IntroBox.Headline>
          <IntroBox.Subline>
            KI ist in den Kanzleien angekommen. Laut DATEV-Seismograf 2025
            nutzt rund ein Viertel der Steuerberater generative KI regelmäßig,
            im Jahr davor waren es 9 Prozent. Rund 40 Prozent derjenigen, die
            noch nicht nutzen, nennen rechtliche Unsicherheit als Hürde.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Die Unsicherheit ist berechtigt, aber sie lässt sich auflösen. Drei
            Lücken tauchen in fast jeder Kanzlei auf, die wir uns ansehen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {risiken.map((r) => (
            <SimpleCard key={r.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{r.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {r.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Was das Gesetz verlangt */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Rahmen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was § 62a StBerG der Kanzlei abverlangt
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Norm regelt die Inanspruchnahme von Dienstleistungen. Sie
            verbietet den Einsatz externer Anbieter nicht, sie knüpft ihn an
            Bedingungen. Vier davon betreffen jedes KI-Projekt unmittelbar.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-4xl">
          <ProseColumns cols={2} wide>
            <ProseColumns.Item title="Abs. 3: Vertrag in Textform">
              <Typo.Paragraph className="text-gray-600">
                Der Vertrag muss vier Dinge enthalten: die Verpflichtung zur
                Verschwiegenheit, die Belehrung über die Strafbarkeit nach
                § 203 StGB, die Beschränkung des Zugangs auf das für die
                Erfüllung Erforderliche und dieselbe Verpflichtung für alle
                Unterauftragnehmer. Textform nach § 126b BGB genügt, also PDF
                oder E-Mail, keine Unterschrift nötig.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Abs. 5: Einwilligung des Mandanten">
              <Typo.Paragraph className="text-gray-600">
                Dient die Dienstleistung unmittelbar einem Mandat, braucht es
                die Einwilligung des Mandanten. Technisch heißt das: ein Flag
                pro Mandat, das vor dem Gateway sitzt und nicht dahinter. Ohne
                gesetztes Flag nimmt das Gateway mandatsbezogene Anfragen gar
                nicht erst an.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Abs. 2: Auswahl und Beendigung">
              <Typo.Paragraph className="text-gray-600">
                Die Kanzlei schuldet die sorgfältige Auswahl des Dienstleisters
                und nach Satz 2 die unverzügliche Beendigung, wenn dieser seine
                Pflichten verletzt. Wir dokumentieren die Auswahl und bauen die
                Beendigung als Schalter: eine Route, die sich in Minuten auf
                null stellen lässt.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Abs. 4: Auslandsbezug">
              <Typo.Paragraph className="text-gray-600">
                Sitzt der Dienstleister im Ausland, verlangt Abs. 4 einen
                vergleichbaren Geheimnisschutz. Das ist eine berufsrechtliche
                Prüfung und keine Frage, die eine Standardvertragsklausel
                beantwortet. Unser Standard ist deshalb EU, alles andere geht
                nur nach ausdrücklicher Prüfung.
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>

          <HubDiagram
            className="mt-12"
            center={{
              icon: <FileSignature className="h-5 w-5" />,
              label: "Anlage nach § 62a Abs. 3",
              sublabel: "Textform, neben der bestehenden AVV",
            }}
            spokes={[
              {
                icon: <Lock className="h-5 w-5" />,
                label: "Verschwiegen\u00ADheit",
                sublabel: "vertraglich verpflichtet",
              },
              {
                icon: <Scale className="h-5 w-5" />,
                label: "Belehrung",
                sublabel: "über § 203 StGB",
              },
              {
                icon: <KeyRound className="h-5 w-5" />,
                label: "Zugang begrenzt",
                sublabel: "nur soweit erforderlich",
              },
              {
                icon: <Network className="h-5 w-5" />,
                label: "Unterauftrag\u00ADnehmer",
                sublabel: "gleich verpflichtet",
              },
            ]}
            caption="Vier Inhalte, die der Vertrag nach Abs. 3 tragen muss. Eine AVV nach Art. 28 DSGVO deckt keinen davon ab."
          />

          <Typo.Paragraph className="mt-10 rounded-xl bg-gray-50 p-6 text-sm text-gray-600">
            Diese Seite ordnet die technischen Anforderungen ein und ist keine
            Rechtsberatung. Die berufsrechtliche Bewertung im Einzelfall
            trifft die Kanzlei, gegebenenfalls mit ihrer Kammer. Vertrags- und
            Einwilligungstexte gehen vor Verwendung an Ihre Seite.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Weg A / Weg B */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Zwei Betriebswege</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ab wann sich das Gateway lohnt und welcher Weg passt
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Schwelle ist erreicht, sobald Mandatsinhalte in ein Modell
            sollen und der Vertrag mit dem Anbieter nur eine AVV ist. Ab dort
            gibt es zwei Wege, und die Wahl hängt weniger vom Budget ab als
            von der Haltung der Kanzlei.
          </IntroBox.Paragraph>
        </IntroBox>

        <FlowDiagram
          className="mt-12"
          nodes={[
            {
              icon: <Users className="h-5 w-5" />,
              label: "Kanzlei-Arbeitsplatz",
              sublabel: "Zugang nur über SSO",
            },
            {
              icon: <UserCheck className="h-5 w-5" />,
              label: "Einwilligungs-Flag",
              sublabel: "Abs. 5: Mandat eingewilligt?",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              label: "Gateway",
              sublabel: "Whitelist, Zweckschnitt, Audit, Kill-Switch",
              highlight: true,
            },
            {
              icon: <Cpu className="h-5 w-5" />,
              label: "Modell",
              sublabel: "Weg A im Haus oder Weg B EU-API",
            },
            {
              icon: <Send className="h-5 w-5" />,
              label: "Freigabe",
              sublabel: "Berufsträger gibt frei, dann Versand",
            },
          ]}
          caption="Der kontrollierte Weg: ohne gesetztes Flag nimmt das Gateway mandatsbezogene Anfragen gar nicht erst an, und ohne Freigabe verlässt nichts die Kanzlei."
        />

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left" className="h-full">
            <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              Weg A
            </span>
            <Typo.H3 className="mt-0!">Modell im eigenen Haus</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Das Sprachmodell läuft auf Infrastruktur, die die Kanzlei
              kontrolliert: auf einem dedizierten EU-Server oder on-premise.
              Die Diskussion über Drittländer entfällt, Modelle wie Llama oder
              Mistral bringen dafür genug Qualität mit. Wie das aussieht,
              beschreibt unser{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai"
                variant="underline"
              >
                Private-AI-Ansatz für Kanzleien
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              Weg B
            </span>
            <Typo.H3 className="mt-0!">EU-API hinter der Klauselkette</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Die Kanzlei nutzt starke Frontier-Modelle über eine API in der
              EU-Region, aber nur hinter derselben Vertragskette: Anlage nach
              Abs. 3, kein Training mit Kanzleidaten, Unterauftragnehmer
              benannt und gleich verpflichtet. Das Gateway erzwingt Region und
              Modellauswahl, statt auf eine Anbietereinstellung zu vertrauen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Use Cases */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>In der Praxis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo KI in der Kanzlei mit Freigabe greift
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir schneiden Use Cases eng: ein Prozess, die Felder, die er
            braucht, und eine Freigabe am Ende. Erst wenn der erste läuft,
            kommt der zweite.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {useCases.map((u) => (
            <SimpleCard key={u.title} align="left" className="h-full">
              <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {u.tag}
              </span>
              <Typo.H3 className="mt-0!">{u.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {u.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Integration */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Kanzlei-IT</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Passt das Gateway in DATEV, Entra ID und die bestehende IT
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ja, unter einer Bedingung: Das Kanzlei-Verzeichnis ist der einzige
            Login, und die direkten Anbieter-URLs sind gesperrt. Sonst bleibt
            der Consumer-Weg offen und das Gateway ist Dekoration.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <ProseColumns cols={3}>
            <ProseColumns.Item title="DATEV bleibt Bestand">
              Wir ersetzen DATEV nicht und bauen keinen zweiten Beleg-Copiloten.
              Vorhandene Werkzeuge werden in der Bestandsaufnahme erfasst und
              behalten ihren Platz.
            </ProseColumns.Item>
            <ProseColumns.Item title="Entra ID und SSO">
              Der Zugang läuft über die Gruppen, die es in der Kanzlei schon
              gibt, inklusive Conditional Access. Kein zweiter Benutzerkreis,
              der separat gepflegt werden muss.
            </ProseColumns.Item>
            <ProseColumns.Item title="Nur Use-Case-Felder">
              Das Gateway bekommt die Felder, die der Use Case braucht, nicht
              die Mandatsakte am Stück. Kein Massen-Upload, kein Ordner, der
              vorsichtshalber mitgegeben wird.
            </ProseColumns.Item>
          </ProseColumns>
        </div>
      </ContentWrapper>

      {/* Vorgehen */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wie wir die 62a-Kette bauen und in Betrieb nehmen
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Bestand aufnehmen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Welche Werkzeuge laufen heute, welche Daten fließen wohin,
                welche Verträge liegen vor. Dazu gehören auch die privaten
                ChatGPT-Accounts, die niemand offiziell kennt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Auswahl und Textform</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Auswahldokumentation nach Abs. 2, dazu die Anlage nach Abs. 3
                neben der bestehenden AVV: Verschwiegenheit, Belehrung nach
                § 203 StGB, Zweckbindung, Unterauftragnehmer.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Gateway dicht machen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Single Sign-on, Whitelist der freigegebenen Modelle,
                Netzsperren für die direkten Anbieterwege. Der erlaubte Weg
                muss bequemer sein als der verbotene.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Einwilligungs-Flag</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Das Flag nach Abs. 5 wird vor das Gateway verdrahtet. Ob ein
                Mandat eingewilligt hat, entscheidet die Technik, nicht die
                Erinnerung der Sachbearbeiterin.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5}>
              <Typo.H3 className="mt-2!">Ein Use Case mit Freigabe</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Genau ein Prozess geht live, mit Freigabe durch den
                Berufsträger vor jedem Versand. Kein zweiter Use Case, bevor
                der erste im Alltag trägt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={6} isLast>
              <Typo.H3 className="mt-2!">Betrieb und Kill-Switch</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Modell- und Unterauftragnehmer-Wechsel werden überwacht, das
                Audit hält fest, wer wann welches Modell mit welcher Freigabe
                genutzt hat, ohne Klartext-Vollprotokoll. Der Kill-Switch wird
                getestet, nicht nur dokumentiert.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Welcher Bezugsweg § 62a StBerG technisch trägt
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-12">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                <DataTable.HeaderCell>Consumer-ChatGPT</DataTable.HeaderCell>
                <DataTable.HeaderCell>Nur AVV mit Anbieter</DataTable.HeaderCell>
                <DataTable.HeaderCell>Gateway von Bluebatch</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Textform nach Abs. 3</DataTable.Cell>
                <DataTable.Cell>fehlt</DataTable.Cell>
                <DataTable.Cell>AVV ohne § 203-Belehrung</DataTable.Cell>
                <DataTable.Cell bold>AVV plus 62a-Anlage</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Zugang nur soweit nötig</DataTable.Cell>
                <DataTable.Cell>ganze Akte im Chatfenster</DataTable.Cell>
                <DataTable.Cell>Anbieter-Voreinstellung</DataTable.Cell>
                <DataTable.Cell bold>Schnitt auf Use-Case-Felder</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Unterauftragnehmer</DataTable.Cell>
                <DataTable.Cell>unbekannt</DataTable.Cell>
                <DataTable.Cell>oft unvollständig benannt</DataTable.Cell>
                <DataTable.Cell bold>Register plus Kill-Switch</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Einwilligung nach Abs. 5</DataTable.Cell>
                <DataTable.Cell>kein Flag</DataTable.Cell>
                <DataTable.Cell>selten verdrahtet</DataTable.Cell>
                <DataTable.Cell bold>Flag vor dem Gateway</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Endkontrolle</DataTable.Cell>
                <DataTable.Cell>Mitarbeiter sendet direkt</DataTable.Cell>
                <DataTable.Cell>Freigabe optional</DataTable.Cell>
                <DataTable.Cell bold>Freigabe ist Pflicht</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Passt, wenn</DataTable.Cell>
                <DataTable.Cell>nur interne Texte ohne Mandatsbezug</DataTable.Cell>
                <DataTable.Cell>Sie in der DATEV-Welt bleiben</DataTable.Cell>
                <DataTable.Cell bold>
                  Mandatsdaten ins Modell sollen und der Nachweis zählt
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* Kosten */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Investition</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was KI für Steuerberater nach § 62a StBerG kostet
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir starten klein und mit festem Preis, statt mit einem Projekt,
            dessen Ende niemand kennt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Einstieg: Use-Case-Workshop</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              1.750 € einmalig. Wir nehmen den Bestand auf, wählen den ersten
              Use Case, klären Weg A oder Weg B und listen, was die Anlage nach
              Abs. 3 enthalten muss. Ergebnis ist eine Entscheidungsgrundlage,
              kein Angebot mit offenem Ende.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Umsetzung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Entweder als fest kalkulierter Workflow ab 8.000 € oder als feste
              Engineer-Kapazität ab 3.000 € pro Monat, wenn mehrere Use Cases
              folgen sollen. Modell- und Hostingkosten kommen dazu. Alle Stufen
              stehen in unserem{" "}
              <InternalLink href="/mit-euch-wachsen" variant="underline">
                Wachstumsmodell mit festen Paketpreisen
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="mt-10 rounded-xl bg-gray-50 p-6">
          <Typo.H3 className="mt-0! text-lg">
            Was die Kanzlei beisteuert
          </Typo.H3>
          <Typo.Paragraph className="text-sm text-gray-600">
            Single Sign-on und Netzsperren gemeinsam mit Ihrer IT, den Schnitt
            auf die DATEV-Daten, den Einwilligungstext für Abs. 5 und die
            Entscheidung, wer die Anlage nach Abs. 3 unterschreibt. Kein
            zweites Entwicklungsteam.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Einordnung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo diese Lösung bei Bluebatch steht
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Cluster: Private AI</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Datenhaltung, Modellbetrieb und Governance für Kanzleien bündeln
              wir unter{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai"
                variant="underline"
              >
                Private AI für Steuerkanzleien
              </InternalLink>
              . Das Gateway ist der Zugangsweg in dieses Cluster.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Ausbau: Kanzlei-Wissen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Steht das Gateway, ist der naheliegende nächste Schritt die{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai/kanzlei-wissensdatenbank"
                variant="underline"
              >
                durchsuchbare Kanzlei-Wissensdatenbank
              </InternalLink>{" "}
              auf derselben geschützten Infrastruktur.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Schwester: Anwaltskanzlei</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Für Rechtsanwälte gilt mit § 43e BRAO dieselbe Mechanik unter
              anderem Namen. Das beschreibt unsere Seite zu{" "}
              <InternalLink
                href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao"
                variant="underline"
              >
                KI in der Anwaltskanzlei nach § 43e BRAO
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="mt-12 text-center">
          <Typo.Paragraph className="mx-auto mb-6 max-w-2xl text-gray-600">
            Im Erstgespräch klären wir in 30 Minuten, ob Mandatsinhalte
            überhaupt ins Modell sollen, was heute schon läuft und ob Weg A
            oder Weg B zu Ihrer Kanzlei passt.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zu KI nach § 62a StBerG"
          intro="Was Kanzleien uns zu Vertragskette, Kosten und Verantwortung am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
