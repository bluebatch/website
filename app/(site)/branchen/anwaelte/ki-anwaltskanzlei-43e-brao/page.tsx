import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
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

const TITLE = "KI in der Anwaltskanzlei nach § 43e BRAO";

export const metadata: Metadata = {
  title: `${TITLE}: Freigabe vor Versand | Bluebatch`,
  description:
    "KI in der Anwaltskanzlei berufsrechtlich sauber einsetzen: Vertragskette nach § 43e BRAO, Gateway mit Einwilligungs-Flag und Kill-Switch, Endkontrolle vor jedem Versand an Gericht oder Mandant.",
  keywords: [
    "KI Anwaltskanzlei",
    "43e BRAO",
    "§ 43e BRAO KI",
    "Private AI Kanzlei",
    "ChatGPT Anwalt erlaubt",
  ],
  openGraph: {
    title: `${TITLE}: Freigabe vor Versand`,
    description:
      "Vertragskette nach § 43e BRAO, Gateway mit Einwilligungs-Flag und Kill-Switch, Endkontrolle vor jedem Versand an Gericht oder Mandant.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE}: Freigabe vor Versand`,
    description:
      "Vertragskette nach § 43e BRAO, Gateway mit Einwilligungs-Flag und Kill-Switch, Endkontrolle vor jedem Versand.",
    images: ogImages(TITLE, "Anwälte").map((i) => i.url),
  },
  alternates: {
    canonical: "/branchen/anwaelte/ki-anwaltskanzlei-43e-brao",
  },
};

const risiken = [
  {
    title: "AVV ohne 43e-Anlage",
    text: "Der Auftragsverarbeitungsvertrag nach Art. 28 DSGVO regelt personenbezogene Daten. § 43e Abs. 8 BRAO lässt den Datenschutz ausdrücklich unberührt, ersetzt das Berufsrecht also nicht. Ohne Textform mit Verschwiegenheitsverpflichtung und Belehrung über § 203 StGB fehlt die berufsrechtliche Grundlage.",
  },
  {
    title: "Anonymisierung, die keine ist",
    text: "Den Mandantennamen zu schwärzen reicht nicht. Aktenzeichen, Beträge, Gegenseite und Sachverhalt bleiben im Text und machen die Akte identifizierbar. Sobald diese Merkmale zusammen in einem Prompt stehen, liegt eine mandatsbezogene Nutzung vor.",
  },
  {
    title: "Kein Kill-Switch",
    text: "§ 43e Abs. 2 Satz 2 BRAO verlangt die unverzügliche Beendigung, wenn der Dienstleister seine Pflichten verletzt. Eine Kündigung per E-Mail ist kein Schalter. Ohne technischen Weg, eine Modellroute in Minuten auf null zu stellen, bleibt die Pflicht Theorie.",
  },
];

const useCases = [
  {
    tag: "Use Case 01",
    title: "Schriftsatz-Rohling",
    text: "Aus einer Akte mit gesetzter Einwilligung entsteht ein Entwurf. Der Anwalt prüft und gibt frei, erst danach geht etwas an Gericht oder Mandant. Autonomer Versand ist ausgeschlossen, nicht abgeschaltet.",
  },
  {
    tag: "Use Case 02",
    title: "Recherche ohne Mandantenbezug",
    text: "Allgemeine Rechtsrecherche läuft im Raum ohne Flag. Sobald Name, Aktenzeichen und Sachverhalt zusammenkommen, greift das Flag nach Abs. 5 und die Anfrage wechselt in den mandatsbezogenen Raum.",
  },
  {
    tag: "Use Case 03",
    title: "Schatten-KI auf dem Laptop",
    text: "Consumer-ChatGPT auf dem Associate-Rechner ist der häufigste Ist-Zustand. Wir sperren diese Wege gemeinsam mit Ihrer IT und öffnen gleichzeitig den erlaubten, damit das Verbot im Alltag hält.",
  },
  {
    tag: "Use Case 04",
    title: "Anbieter wechselt die Region",
    text: "Verlässt eine Route die EU oder wechselt der Unterauftragnehmer, stoppt das Gateway. Kein stilles Failover in ein anderes Rechenzentrum, weil der Anbieter gerade umgeroutet hat.",
  },
];

const faqs = [
  {
    question: "Reicht eine AVV für KI in der Kanzlei nach § 43e BRAO?",
    answer:
      "Nein. § 43e Abs. 8 BRAO lässt den Datenschutz unberührt, ersetzt das Berufsrecht aber nicht. Abs. 3 verlangt zusätzlich einen Vertrag in Textform mit Verschwiegenheitsverpflichtung, Belehrung über § 203 StGB, Zugang nur soweit zur Erfüllung erforderlich und dieselbe Verpflichtung für alle Unterauftragnehmer. Wir liefern diese Anlage als IT-Lieferung, die berufsrechtliche Entscheidung bleibt beim Anwalt.",
  },
  {
    question: "Ersetzt KI die persönliche anwaltliche Leistung?",
    answer:
      "Nein. Die BRAK hat in ihren Hinweisen zum Einsatz von KI klargestellt, dass KI die gewissenhafte anwaltliche Leistung unterstützt, aber nicht ersetzt. Die eigenverantwortliche Überprüfung und die Endkontrolle vor Versand bleiben Pflicht. Ein autonom versendeter Schriftsatz ist deshalb kein Ziel, das wir bauen.",
  },
  {
    question: "Braucht jedes Mandat eine Einwilligung?",
    answer:
      "Wenn die Dienstleistung unmittelbar einem Mandat dient, ja, so verlangt es § 43e Abs. 5 BRAO. Interne Recherche ohne Mandantenbezug kann ohne Flag laufen. Das Gateway trennt beide Räume technisch. Abs. 6 stellt außerdem klar, dass die Einwilligung die Pflichten aus Abs. 2 und 3 nicht aufhebt.",
  },
  {
    question: "Was kostet KI für die Anwaltskanzlei nach § 43e BRAO?",
    answer:
      "Der Einstieg ist der Use-Case-Workshop für 1.750 € einmalig: Bestandsaufnahme, erster Use Case und die Entscheidung zwischen Modell im eigenen Haus und EU-API. Die Umsetzung läuft als fest kalkulierter Workflow ab 8.000 € oder als feste Engineer-Kapazität ab 3.000 € pro Monat. Modell- und Hostingkosten kommen dazu.",
  },
  {
    question: "Dürfen Modelle im Ausland laufen?",
    answer:
      "§ 43e Abs. 4 BRAO verlangt bei Auslandsbezug einen vergleichbaren Geheimnisschutz. Das ist eine berufsrechtliche Prüfung und keine Frage, die Standardvertragsklauseln beantworten. Unser Standard ist deshalb die EU-Region, alles andere nur nach ausdrücklicher Prüfung durch die Kanzlei.",
  },
  {
    question: "Wie unterscheidet sich § 43e BRAO von § 203 StGB?",
    answer:
      "§ 203 StGB bestraft das unbefugte Offenbaren eines Geheimnisses. § 43e BRAO organisiert davor die Einschaltung von Dienstleistern: Auswahl, Textform, Belehrung, Unterauftragnehmer, Einwilligung und Beendigung. Der Maschinenraum ist derselbe wie bei § 62a StBerG für Steuerberater, nur das Namensschild ist ein anderes.",
  },
  {
    question: "Was baut Bluebatch bewusst nicht?",
    answer:
      "Keine Rechtsberatung und keine Unbedenklichkeitserklärung der Kammer für einzelne Prompts. Keinen Versand an Gericht oder Mandant ohne Freigabe. Keine Anbindung an Consumer-ChatGPT. Und keine US-API ohne vorherige Prüfung nach Abs. 4. Wer nur Marketingtexte ohne Mandatsbezug schreiben lassen will, braucht dieses Gateway nicht.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            KI in der Anwaltskanzlei nach § 43e BRAO: Freigabe vor Versand
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            § 43e BRAO erlaubt Kanzleien, Dienstleister an Mandatsdaten zu
            lassen, verlangt dafür aber einen Vertrag in Textform mit Belehrung
            über § 203 StGB. Bluebatch baut dafür ein Gateway: einen
            kontrollierten Weg ins Sprachmodell mit Einwilligungs-Flag,
            Kill-Switch und Endkontrolle durch den Anwalt vor jedem Versand an
            Gericht oder Mandant.
          </GeoSummary>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Ausgangslage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum ungeregelte KI in der Akte teuer wird
          </IntroBox.Headline>
          <IntroBox.Subline>
            KI ist in den Kanzleien längst angekommen. In der Legal-Tech-Umfrage
            von Wolters Kluwer für 2026 gaben rund 63 Prozent der deutschen
            Befragten an, KI-Werkzeuge zu nutzen. Der praktische Ist-Zustand ist
            dabei häufig Consumer-ChatGPT auf der Akte.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Das ist nachvollziehbar und trotzdem riskant. Drei Lücken finden wir
            in fast jeder Kanzlei, die wir uns ansehen.
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
            Was § 43e BRAO der Kanzlei abverlangt
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Norm regelt die Inanspruchnahme von Dienstleistungen. Sie
            verbietet externe Anbieter nicht, sie knüpft sie an Bedingungen.
            Vier davon betreffen jedes KI-Projekt unmittelbar.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-4xl">
          <ProseColumns cols={2} wide>
            <ProseColumns.Item title="Abs. 3: Vertrag in Textform">
              <Typo.Paragraph className="text-gray-600">
                Der Vertrag muss die Verpflichtung zur Verschwiegenheit
                enthalten, die Belehrung über die Strafbarkeit nach § 203 StGB,
                die Beschränkung des Zugangs auf das zur Erfüllung
                Erforderliche und dieselbe Verpflichtung für alle
                Unterauftragnehmer. Textform nach § 126b BGB genügt, also PDF
                oder E-Mail.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Abs. 5: Einwilligung des Mandanten">
              <Typo.Paragraph className="text-gray-600">
                Dient die Dienstleistung unmittelbar einem Mandat, braucht es
                die Einwilligung. Technisch heißt das: ein Flag pro Mandat, das
                vor dem Gateway sitzt. Ohne gesetztes Flag nimmt das Gateway
                mandatsbezogene Anfragen gar nicht erst an. Abs. 6 stellt klar,
                dass die Einwilligung die Pflichten aus Abs. 2 und 3 nicht
                ersetzt.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Abs. 2: Auswahl und Beendigung">
              <Typo.Paragraph className="text-gray-600">
                Die Kanzlei schuldet die sorgfältige Auswahl und nach Satz 2 die
                unverzügliche Beendigung bei Pflichtverletzung. Wir
                dokumentieren die Auswahl und bauen die Beendigung als
                Schalter, nicht als Absichtserklärung.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Persönliche Leistung bleibt">
              <Typo.Paragraph className="text-gray-600">
                Die BRAK-Hinweise zum KI-Einsatz halten fest, dass die
                eigenverantwortliche Prüfung und die Endkontrolle vor Versand
                beim Anwalt bleiben. Deshalb ist die Freigabe in unseren
                Use Cases kein Komfortfeature, sondern ein Pflichtschritt im
                Ablauf.
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>

          <Typo.Paragraph className="mt-10 rounded-xl bg-gray-50 p-6 text-sm text-gray-600">
            Diese Seite ordnet die technischen Anforderungen ein und ist keine
            Rechtsberatung. Die berufsrechtliche Bewertung im Einzelfall trifft
            die Kanzlei, gegebenenfalls mit ihrer Kammer. Vertrags- und
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
            gibt es zwei Wege.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left" className="h-full">
            <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              Weg A
            </span>
            <Typo.H3 className="mt-0!">Modell im eigenen Haus</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Das Sprachmodell läuft auf Infrastruktur, die die Kanzlei
              kontrolliert: dedizierter EU-Server oder on-premise. Die
              Drittland-Diskussion entfällt vollständig. Für Kanzleien mit
              strengem Anspruch der kürzeste Weg zur Entscheidung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              Weg B
            </span>
            <Typo.H3 className="mt-0!">EU-API hinter der Klauselkette</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Starke Frontier-Modelle über eine API in der EU-Region, aber nur
              hinter derselben Kette: Anlage nach Abs. 3, kein Training mit
              Kanzleidaten, Unterauftragnehmer benannt und gleich verpflichtet.
              Das Gateway erzwingt Region und Modell, statt auf eine
              Anbietereinstellung zu vertrauen.
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
            braucht, und eine Freigabe am Ende. Erst wenn der erste im Alltag
            trägt, kommt der zweite.
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
            Passt das in Kanzleisoftware, DMS und Entra ID
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ja, unter einer Bedingung: Das Kanzlei-Verzeichnis ist der einzige
            Login, und die direkten Anbieter-URLs sind gesperrt. Sonst bleibt
            der Consumer-Weg offen und das Gateway ist Dekoration.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <ProseColumns cols={3}>
            <ProseColumns.Item title="Entra ID und SSO">
              Der Zugang läuft über die Gruppen, die es in der Kanzlei schon
              gibt, inklusive Conditional Access. Kein zweiter Benutzerkreis,
              der separat gepflegt werden muss.
            </ProseColumns.Item>
            <ProseColumns.Item title="Akte und DMS">
              Angebunden werden nur die Dokumenttypen des jeweiligen Use Case.
              Kein Massen-Upload der Akte. Wie so eine Anbindung praktisch
              aussieht, zeigt unser{" "}
              <InternalLink
                href="/branchen/anwaelte/actaport-cloud-connector"
                variant="underline"
              >
                Cloud Connector zu actaport
              </InternalLink>
              .
            </ProseColumns.Item>
            <ProseColumns.Item title="E-Mail und Fristen">
              Entwürfe ja, Versand nur nach Freigabe. Das gilt für
              Mandantenpost genauso wie für alles, was Richtung Gericht geht.
            </ProseColumns.Item>
          </ProseColumns>
        </div>
      </ContentWrapper>

      {/* Vorgehen */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wie wir die 43e-Kette bauen und in Betrieb nehmen
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Bestand und Sperre</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Welche Werkzeuge laufen heute, welche Daten fließen wohin. Die
                Consumer-Wege werden identifiziert und geschlossen, sobald der
                erlaubte Weg offen ist.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Auswahl und Textform</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Auswahldokumentation nach Abs. 2, dazu die Anlage nach Abs. 3
                neben der bestehenden AVV: Verschwiegenheit, Belehrung nach
                § 203 StGB, Zweckbindung, Unterauftragnehmer, Region und kein
                Training mit Kanzleidaten.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Gateway und Modell-Katalog</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Single Sign-on, Whitelist der freigegebenen Modelle mit
                Ablaufdatum, Zweckfilter und das Einwilligungs-Flag nach Abs. 5
                davor.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Ein Use Case mit Endkontrolle</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Recherche oder Schriftsatz-Rohling, immer mit Freigabe vor
                Versand. Kein zweiter Use Case, bevor der erste im Alltag
                trägt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5} isLast>
              <Typo.H3 className="mt-2!">Betrieb und Kill-Switch</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Regionen und Unterauftragnehmer werden überwacht, das Audit
                hält fest, wer wann welches Modell mit welcher Freigabe genutzt
                hat, ohne Klartext-Vollprotokoll. Der Kill-Switch wird
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
            Welcher Bezugsweg § 43e BRAO technisch trägt
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-12">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                <DataTable.HeaderCell>Consumer-ChatGPT</DataTable.HeaderCell>
                <DataTable.HeaderCell>
                  Legal-Tech-SaaS ohne 43e-Anlage
                </DataTable.HeaderCell>
                <DataTable.HeaderCell>Gateway von Bluebatch</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Textform nach Abs. 3</DataTable.Cell>
                <DataTable.Cell>fehlt</DataTable.Cell>
                <DataTable.Cell>AVV ohne § 203-Belehrung</DataTable.Cell>
                <DataTable.Cell bold>AVV plus 43e-Anlage</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Persönliche Leistung</DataTable.Cell>
                <DataTable.Cell>Entwurf geht direkt raus</DataTable.Cell>
                <DataTable.Cell>Freigabe optional</DataTable.Cell>
                <DataTable.Cell bold>Freigabe vor Versand</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Einwilligung nach Abs. 5</DataTable.Cell>
                <DataTable.Cell>kein Flag</DataTable.Cell>
                <DataTable.Cell>Klausel in den AGB</DataTable.Cell>
                <DataTable.Cell bold>Flag vor dem Gateway</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Auslandsbezug nach Abs. 4</DataTable.Cell>
                <DataTable.Cell>US-Voreinstellung üblich</DataTable.Cell>
                <DataTable.Cell>Standardklauseln als Ersatz gedacht</DataTable.Cell>
                <DataTable.Cell bold>EU als Standard, Abs. 4 extra geprüft</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Beendigung nach Abs. 2</DataTable.Cell>
                <DataTable.Cell>Account bleibt bestehen</DataTable.Cell>
                <DataTable.Cell>Kündigung per E-Mail</DataTable.Cell>
                <DataTable.Cell bold>Route in Minuten auf null</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Passt, wenn</DataTable.Cell>
                <DataTable.Cell>nur öffentliche Recherche</DataTable.Cell>
                <DataTable.Cell>kein Mandatsinhalt ins Modell geht</DataTable.Cell>
                <DataTable.Cell bold>
                  die Akte ins Modell soll und der Nachweis zählt
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
            Was KI für die Anwaltskanzlei nach § 43e BRAO kostet
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
              1.750 € einmalig. Bestandsaufnahme, erster Use Case, Entscheidung
              zwischen Weg A und Weg B und die Liste dessen, was die Anlage
              nach Abs. 3 enthalten muss. Ergebnis ist eine
              Entscheidungsgrundlage, kein Angebot mit offenem Ende.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Umsetzung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Entweder als fest kalkulierter Workflow ab 8.000 € oder als feste
              Engineer-Kapazität ab 3.000 € pro Monat, wenn mehrere Use Cases
              folgen. Modell- und Hostingkosten kommen dazu. Alle Stufen stehen
              in unserem{" "}
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
            auf Akte und DMS, den Einwilligungstext für Abs. 5 und die
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
            <Typo.H3 className="mt-0!">Branche: Anwaltskanzleien</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Das Gateway ist der Governance-Baustein unseres Angebots für{" "}
              <InternalLink href="/branchen/anwaelte" variant="underline">
                KI und Automatisierung in Anwaltskanzleien
              </InternalLink>
              . Dort stehen auch die weiteren Bausteine.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Anbindung: actaport</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Damit das Gateway die Felder eines Use Case bekommt, braucht es
              Zugriff auf die Akte. Für Cloud-Kanzleien führt der Weg über die{" "}
              <InternalLink
                href="/branchen/anwaelte/actaport-cloud-connector-implementierung"
                variant="underline"
              >
                Implementierung des actaport Connectors
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="h-full">
            <Typo.H3 className="mt-0!">Schwester: Steuerkanzlei</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Für Steuerberater gilt mit § 62a StBerG dieselbe Mechanik unter
              anderem Namen. Das beschreibt unsere Seite zu{" "}
              <InternalLink
                href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg"
                variant="underline"
              >
                KI für Steuerberater nach § 62a StBerG
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
          headline="Fragen zu KI nach § 43e BRAO"
          intro="Was Kanzleien uns zu Vertragskette, Endkontrolle und Kosten am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
