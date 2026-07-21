import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
import ProsCons from "@/components/sections/pros-cons";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import KpiCard from "@/components/cards/kpi-card";
import CrossSellGrid from "@/components/sections/cross-sell-grid";

export const pageConfig: PageConfig = {
  title: "Dokumentenverarbeitung",
  description:
    "Belege, Rechnungen und Quittungen automatisch erkennen, klassifizieren und nach DATEV buchen.",
};

const defaultMeta = {
  title: "KI-Dokumente Steuerberater | Bluebatch",
  description:
    "Belegerfassung bindet 41 h/Monat pro Mandant. KI-OCR klassifiziert und extrahiert Belege in unter 1 Min und spart 1.500-3.000 €/Mo.",
  ogDescription:
    "KI-Dokumente für Steuerberater: Belege, Rechnungen und Quittungen automatisch klassifizieren, extrahieren und buchen.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "ki dokumente steuerberater",
    "belegerfassung automatisieren",
    "ki rechnungserkennung",
    "ki tools steuerberater",
    "Dokumentenverarbeitung Steuerberater",
    "DATEV Belegerfassung",
    "OCR Steuerkanzlei",
    "Bluebatch",
  ],
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Dokumente Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater/dokumentenverarbeitung",
  },
};

const stats = [
  { value: 41, suffix: " h/Mo", label: "Ersparnis pro Mandant" },
  { value: 88, suffix: "%", label: "Zeitersparnis pro Beleg" },
  { value: 99, suffix: "%", label: "OCR-Trefferquote" },
  { value: 3, prefix: "€", suffix: "k/Mo", label: "ROI pro Mandant" },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/dokumentenverarbeitung/hero-document-flow.png"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            KI-Dokumente Steuerberater
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            <>
              KI-Dokumente für Steuerberater:{" "}
              <BackgroundHero.Highlight>
                Belege, Rechnungen und Quittungen
              </BackgroundHero.Highlight>
              <br />
              automatisch erfassen
            </>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Belegerfassung bindet pro Mandant rund 41 Stunden pro Monat. KI-OCR
            klassifiziert Eingangsrechnungen, Bewirtungsbelege, Kassenbons und
            Reisekosten, extrahiert alle Pflichtfelder und liefert einen
            DATEV-fertigen Buchungsvorschlag, von 25 Minuten auf unter 1 Minute
            pro Beleg.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. SVG-WORKFLOW-DIAGRAMM */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Wie der Workflow läuft</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Belegerfassung automatisieren: Vom Posteingang bis in den
            DATEV-Audit-Trail
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow mit Multi-OCR und KI-Klassifikation übernimmt
            Eingangsrechnungen, Bewirtungsbelege, Reisekosten und Kassenbons,
            extrahiert alle Pflichtfelder und liefert einen GoBD-konformen
            Buchungsvorschlag, in sechs Schritten.
          </IntroBox.Subline>
        </IntroBox>
        <WorkflowDiagram variant="circular">
          <WorkflowDiagram.Step
            n={1}
            title="Multi-Channel-Inbox"
            description="E-Mail, Pendelordner, DUO, Mobile-App, XRechnung, Drive"
          />
          <WorkflowDiagram.Step
            n={2}
            title="KI-Klassifikation"
            description="Belegtyp erkennen, OCR-Modell wählen"
          />
          <WorkflowDiagram.Step
            n={3}
            title="Rechnungserkennung"
            description="Lieferant, Beträge, USt, IBAN extrahieren"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Buchungsvorschlag"
            description="RAG aus Historie, Sachkonto plus Steuerschlüssel"
          />
          <WorkflowDiagram.Step
            n={5}
            title="DATEV-Export"
            description="DATEVconnect, Lexware, sevDesk, candis"
          />
          <WorkflowDiagram.Step
            n={6}
            title="Audit-Trail"
            description="GoBD-konform, Zeitstempel, Hashwert, Original-Beleg"
          />
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 3. TAB-SECTION: 4 INPUT-KANÄLE */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vier Eingangskanäle</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Egal wie eure Mandanten Belege schicken, ein Workflow nimmt sie auf
          </IntroBox.Headline>
          <IntroBox.Subline>
            PDF per Mail, E-Mail-Postfach mit Anhang, Cloud-Drive-Folder oder
            Scanner-Output: jeder Kanal landet im gleichen Klassifikator und im
            gleichen Audit-Trail.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="pdf" className="mt-10">
          <TabNavigation>
            <TabItem value="pdf">PDF-Upload</TabItem>
            <TabItem value="email">E-Mail-Postfach</TabItem>
            <TabItem value="drive">Cloud-Drive</TabItem>
            <TabItem value="scanner">Scanner</TabItem>
          </TabNavigation>

          <TabContent value="pdf">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <Typo.H3 className="mt-0!">PDF direkt hochladen</Typo.H3>
                <Typo.Paragraph>
                  Eingangsrechnung als PDF landet im Mandanten-Upload-Ordner
                  oder im Bluebatch-Drop, der Workflow holt sie ab. Multi-OCR
                  läuft sofort an, Confidence wird pro Feld bewertet, Belegbild
                  wird mit der späteren Buchung verknüpft. Auch durchsuchbare
                  PDFs aus DUO oder Belegtransfer werden ohne Vorverarbeitung
                  übernommen.
                </Typo.Paragraph>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Klippa und Mindee als Primär-OCR</li>
                  <li>Azure Document Intelligence für komplexe Layouts</li>
                  <li>Tesseract als Fallback bei Rate-Limits</li>
                </ul>
              </div>
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/images/dokumentenverarbeitung/tab-pdf.png"
                  alt="PDF-Upload Belegerkennung"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>
          </TabContent>

          <TabContent value="email">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <Typo.H3 className="mt-0!">E-Mail-Postfach mit Anhang</Typo.H3>
                <Typo.Paragraph>
                  Ihr legt für jeden Mandanten ein Sammelpostfach an, der
                  Workflow überwacht eingehende Mails per IMAP rund um die Uhr.
                  Anhänge werden extrahiert, der Mailtext mitgelesen für
                  Kontext, Spam und Marketing-Mails werden automatisch
                  ausgesteuert. Beleg geht in dieselbe Klassifikation und
                  Rechnungserkennung wie alle anderen Kanäle.
                </Typo.Paragraph>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>IMAP, Microsoft Graph, Gmail-API</li>
                  <li>Pro Mandant eigene Mail-Adresse</li>
                  <li>Mailtext fließt in den RAG-Kontext ein</li>
                </ul>
              </div>
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/images/dokumentenverarbeitung/tab-email.png"
                  alt="E-Mail-Postfach Belegannahme"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>
          </TabContent>

          <TabContent value="drive">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <Typo.H3 className="mt-0!">Cloud-Drive-Sync</Typo.H3>
                <Typo.Paragraph>
                  Google Drive, OneDrive, Dropbox oder SharePoint: der Workflow
                  überwacht den Mandanten-Folder, neue Dateien werden sofort
                  abgeholt, OCR läuft an, das Original bleibt im Drive
                  versioniert liegen. Kein Mandant muss seine gewohnte
                  Drive-Routine ändern, ihr bekommt trotzdem strukturierte
                  Buchungssätze in DATEV.
                </Typo.Paragraph>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Watch-Folder pro Mandant und pro Belegtyp</li>
                  <li>Original bleibt versioniert im Drive</li>
                  <li>Bidirektionaler Sync für korrigierte Belege</li>
                </ul>
              </div>
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/images/dokumentenverarbeitung/tab-drive.png"
                  alt="Cloud-Drive-Sync Belegannahme"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>
          </TabContent>

          <TabContent value="scanner">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <Typo.H3 className="mt-0!">Scanner und Pendelordner</Typo.H3>
                <Typo.Paragraph>
                  Papier-Pendelordner aus der Kanzlei wird einmal gescannt, der
                  Scanner-Output landet im Watch-Folder. Mehrseitige PDFs
                  werden automatisch in Einzelbelege gesplittet, schräge oder
                  schlecht ausgeleuchtete Seiten per AI-Modell entzerrt und
                  rotiert. Auch Handy-Fotos aus der Mobile-App laufen über
                  diesen Kanal.
                </Typo.Paragraph>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Auto-Split mehrseitiger Scans</li>
                  <li>Entzerrung und Rotation per AI-Vorverarbeitung</li>
                  <li>Mobile-App-Fotos im gleichen Workflow</li>
                </ul>
              </div>
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/images/dokumentenverarbeitung/tab-scanner.png"
                  alt="Scanner-Output Belegannahme"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </div>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* 4. STATS-SECTION (4 KpiCards) */}
      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark>
          <IntroBox.PreHeadline>Was Mandanten messen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Zahlen, die Belegerfassung verändern
          </IntroBox.Headline>
          <IntroBox.Subline>
            Durchschnittswerte aus Pilot-Mandaten mit 100 Eingangsrechnungen
            pro Monat, hybrider Belegmix, zwei Sachbearbeiter.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            valueText="41 Std"
            subtitle="Eingesparte Erfassung pro Mandant und Monat"
          />
          <KpiCard
            valueText="1 Min"
            subtitle="Pro Beleg, statt vorher 25 Minuten"
          />
          <KpiCard
            valueText="1-3 %"
            subtitle="Fehlerquote nach KI-Review, statt vorher 5-10 %"
          />
          <KpiCard
            valueText="4 Tage"
            subtitle="Belegrücklauf via App-Reminder, statt normalerweise bis zu 4 Wochen"
          />
        </div>
      </ContentWrapper>

      {/* 5. VORHER / NACHHER */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Belegerfassung in der Kanzlei, einmal mit und einmal ohne KI
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein typischer Mandant mit 100 Eingangsrechnungen pro Monat, zwei
            Sachbearbeiter, hybrider Belegmix aus Papier, PDF und Mobile-App.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/dokumentenverarbeitung/comparison-visual.png"
              alt="Belegerfassung Vorher und Nachher"
              fill
              className="object-contain p-4"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <ComparisonCard>
            <BeforeCard>
              <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  25 Minuten pro Beleg, vom Pendelordner bis zur Buchung
                </ComparisonListItem>
                <ComparisonListItem>
                  41 Stunden pro Monat Erfassungsaufwand, nur für diesen einen
                  Mandanten
                </ComparisonListItem>
                <ComparisonListItem>
                  5-10 Prozent Erfassungsfehler, Zahlendreher und falsche
                  Steuerschlüssel
                </ComparisonListItem>
                <ComparisonListItem>
                  Sechs verschiedene Belegkanäle, sechs Mini-Workflows, keiner
                  vollständig
                </ComparisonListItem>
                <ComparisonListItem>
                  Belegrücklauf nach Anforderung im Schnitt 4 Wochen
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                Gesamt: ~3.000 €/Monat pro Mandant
              </ComparisonFooter>
            </BeforeCard>

            <AfterCard>
              <ComparisonHeadline>Nachher: Mit Bluebatch</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  Unter 1 Minute pro Standardbeleg, Sachbearbeiter prüft nur
                  noch
                </ComparisonListItem>
                <ComparisonListItem>
                  5 Stunden pro Monat für Review und Exceptions
                </ComparisonListItem>
                <ComparisonListItem>
                  Fehlerquote auf 1-3 Prozent, GoBD-Audit-Trail pro Beleg
                </ComparisonListItem>
                <ComparisonListItem>
                  Ein einziger Workflow für alle Kanäle inkl. Mobile-App und
                  XRechnung
                </ComparisonListItem>
                <ComparisonListItem>
                  Belegrücklauf via App-Reminder auf 3-5 Tage verkürzt
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                Gesamt: ~400 €/Monat pro Mandant
              </ComparisonFooter>
            </AfterCard>
          </ComparisonCard>
        </div>
      </ContentWrapper>

      {/* 6. PROS / CONS */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Warum Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bluebatch vs. DATEV-only und Closed-SaaS-Tools
          </IntroBox.Headline>
          <IntroBox.Subline>
            Wo wir uns konkret von DATEV Belegerkennung, Candis, Finmatics und
            GetMyInvoices unterscheiden, und warum das in der Steuerkanzlei den
            Unterschied macht.
          </IntroBox.Subline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Multi-OCR Best-of-Breed"
              description="Klippa, Mindee, Azure Document Intelligence, Tesseract als Fallback. Pro Belegtyp das beste Modell, Trefferquote 95-99 Prozent auch bei Kassenbons und Handy-Fotos."
            />
            <ProsCons.Item
              title="Individuelle Kontierung pro Mandant"
              description="Jeder Mandant bekommt sein eigenes Konten-Mapping und seine eigenen Regeln. RAG aus der Buchungshistorie sorgt dafür, dass Sachkonto-Vorschläge zu eurer Kanzlei-Logik passen."
            />
            <ProsCons.Item
              title="Hybride Belegwelt im Griff"
              description="Papier-Pendelordner, PDF-Mail, DATEV DUO, XRechnung, Mobile-App-Foto, ein einziger Workflow, ein einziger Audit-Trail, ein einziger Ausgang nach DATEV."
            />
            <ProsCons.Item
              title="Kein Lock-in, API-First"
              description="Open-Source-n8n, eure Workflows liegen bei euch. DATEV, Lexware, sevDesk, candis, ihr seid frei in der Wahl und beim Wechsel."
            />
          </ProsCons.Pros>

          <ProsCons.Cons>
            <ProsCons.Item
              title="DATEV-only, schwach bei Sonderbelegen"
              description="DATEV Belegerkennung ist ordentlich für Standard-Eingangsrechnungen, bricht aber bei Bewirtungsbelegen, Kassenbons und Mobile-App-Fotos ein. Kein Best-of-Breed-Routing."
              side="cons"
            />
            <ProsCons.Item
              title="Closed-SaaS-Logik nicht anpassbar"
              description="Candis, Finmatics und GetMyInvoices sind starke Tools, aber ihr Kontierungs-Modell ist hartkodiert. Eure Kanzlei-Logik passt nur teilweise, individuelle Regeln pro Mandant kaum möglich."
              side="cons"
            />
            <ProsCons.Item
              title="Belegfokus statt End-to-End"
              description="Viele Tools enden beim Belegbild plus Metadaten. Buchungsvorschlag, Steuerschlüssel-Logik und §13b-Erkennung bleiben bei euren Sachbearbeitern, die Marge bleibt damit auch dort."
              side="cons"
            />
            <ProsCons.Item
              title="Vendor-Lock-in und Preisschraube"
              description="Sobald euer Mandanten-Stamm im SaaS-Tool liegt, wird ein Wechsel teuer. Preiserhöhungen über 30 Prozent in 2 Jahren sind im Markt dokumentiert."
              side="cons"
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 7. CLIENT LOGOS */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Welche Belegtypen erkennt der Workflow zuverlässig?",
              answer:
                "Eingangsrechnungen, Ausgangsrechnungen, Bewirtungsbelege, Kassenbons, Tankquittungen, Reisekostenabrechnungen, Bankauszüge, Verträge, XRechnung und ZUGFeRD. Die KI-Klassifikation entscheidet auf Basis von Layout, Text und Pflichtfeldern, welches OCR-Modell und welche Extraktions-Logik greift. Standardbelege erreichen 95-99 Prozent Trefferquote, Sonderfälle wie handschriftliche Kassenbons liegen bei 85-92 Prozent.",
            },
            {
              question:
                "Wie hoch ist die OCR-Genauigkeit bei schlechten Scans und Handy-Fotos?",
              answer:
                "Bei sauberen digitalen PDFs erreichen wir 99 Prozent, bei guten Scans 95-98 Prozent, bei Handy-Fotos mit Schatten und Schräglage 85-92 Prozent. Der Workflow flaggt jede Extraktion mit niedrigem Confidence-Score für die Review-Queue, sodass kein Beleg unbemerkt mit falschen Daten gebucht wird. Mobile-App-Aufnahmen werden vor der OCR per AI-Modell entzerrt, rotiert und entzieht.",
            },
            {
              question:
                "Können wir eigene Kontierungsregeln pro Mandant hinterlegen?",
              answer:
                "Ja. Jeder Mandant bekommt sein eigenes Kontenrahmen-Mapping (SKR03, SKR04, individuelle Sachkonten), seine eigenen Kostenstellen und seine eigene Vorsteuer-Logik. Über RAG-Suche in der Buchungshistorie schlägt der Workflow das Sachkonto vor, das in vergleichbaren Fällen genutzt wurde. Sonderregeln wie Bewirtungs-Splitting 70/100 Prozent, Reverse-Charge nach §13b UStG oder innergemeinschaftlicher Erwerb sind als Bausteine im Workflow konfigurierbar.",
            },
            {
              question:
                "Was passiert mit Belegen, die mehrere Positionen oder Splits enthalten?",
              answer:
                "Die KI-Rechnungserkennung extrahiert Positionen einzeln, inklusive Mengen, Einzelpreisen, USt-Sätzen und Bestellbezug. Für Splits zwischen verschiedenen Kostenstellen oder Sachkonten schlägt der Workflow eine Aufteilung vor, die der Sachbearbeiter in der Review-Queue mit zwei Klicks bestätigt. Bei Bewirtungsbelegen wird der 70-Prozent-Abzug automatisch berechnet, bei Tankquittungen die private Nutzungsentnahme nach Vorgaben des Mandanten.",
            },
            {
              question:
                "Wie funktioniert die Synchronisation mit den DATEV-Stammdaten?",
              answer:
                "Über DATEVconnect synchronisiert der Workflow Kreditoren, Debitoren, Sachkonten, Kostenstellen und Mandanten-Stammdaten im Hintergrund, typischerweise stündlich oder bei Bedarf. Neue Lieferanten werden anhand der USt-ID, IBAN und Name automatisch erkannt und als Vorschlag in DATEV angelegt. Für ältere DATEV-Versionen ohne Connect-API nutzen wir EXTF-Import und CSV-Datei-Sync.",
            },
            {
              question:
                "Können wir auch nicht-DATEV-Kunden (Lexware, sevDesk) anbinden?",
              answer:
                "Ja. Der gleiche Workflow exportiert auch nach Lexware Office, sevDesk, candis, Finmatics, BMD und über generische REST-APIs in eigene Buchhaltungs-Backends. Für Mandanten mit hybriden Konstellationen, ein Teil DATEV, ein Teil Lexware, läuft der Workflow parallel und routet pro Mandant in das richtige Zielsystem.",
            },
            {
              question:
                "Ist die Lösung GoBD-konform und übersteht die Betriebsprüfung?",
              answer:
                "Ja. Jeder Verarbeitungsschritt wird mit Zeitstempel, Hashwert, User und Original-Beleg im Audit-Trail abgelegt. Belegbilder werden revisionssicher archiviert (10 Jahre Aufbewahrung), Buchungen sind unveränderbar und nachvollziehbar. Wir liefern eine Verfahrensdokumentation als Vorlage für die Abnahme durch euren IT-Prüfer oder die BP.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 9. CROSS-SELL */}
      <ContentWrapper colorScheme="gray-light">
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Nach Go-Live</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Belegprüfung, DATEV-Sync und mehr
          </CrossSellGrid.Headline>

          <CrossSellGrid.Card href="/use-cases/steuerberater/belegpruefung">
            <CrossSellGrid.Title>KI-Belegprüfung</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              GoBD-konforme Prüfung, DATEV-Übergabe, RAG auf Buchungshistorie.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>

          <CrossSellGrid.Card href="/use-cases/steuerberater/datev-jira-task-orchestration">
            <CrossSellGrid.Title>DATEV-Jira-Sync</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Bidirektionaler Task-Sync zwischen DATEV und eurem Workflow-Tool.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>

          <CrossSellGrid.Card href="/use-cases/steuerberater">
            <CrossSellGrid.Title>Alle Steuerberater Use Cases</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Überblick über sämtliche KI-Workflows für Steuerkanzleien.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
        </CrossSellGrid>
      </ContentWrapper>

      {/* 10. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
