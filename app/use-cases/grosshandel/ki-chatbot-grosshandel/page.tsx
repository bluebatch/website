import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard, { SimpleCardIcon } from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
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
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import SavingsCard, {
  SavingsBadge,
  SavingsBadgeHighlight,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import RoiCalculation, {
  RoiAssumption,
  RoiRow,
  RoiTotal,
} from "@/components/sections/roi-calculation";
import CrossSellGrid from "@/components/sections/cross-sell-grid";
import ChatConversation, {
  type ChatTurn,
} from "@/components/ui/chat-conversation";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";

export const pageConfig: PageConfig = {
  title: "KI-Chatbot Großhandel",
  description:
    "Open WebUI mit fertigen Connectoren zu Ebootis, MS Navision und SharePoint. In 5 Tagen live.",
};

const defaultMeta = {
  title: "KI-Chatbot Großhandel | Mit ERP-Anbindung in 5 Tagen | Bluebatch",
  description:
    "Open WebUI als sicherer KI-Chatbot für Großhändler. Fertige Connectoren zu Ebootis, MS Navision und SharePoint. 1.000 € Setup, 50 €/Mo Betrieb, 5 Tage bis Go-Live.",
  ogDescription:
    "KI-Chatbot mit ERP-Anbindung für Großhändler: 1.000 € Setup, 50 €/Mo Betrieb, fertige Connectoren zu Ebootis, MS Navision und SharePoint.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "ki chatbot grosshandel",
    "chatbot grosshandel",
    "ki assistent erp",
    "openwebui grosshandel",
    "chatbot ebootis",
    "navision chatbot",
    "ki entry grosshandel",
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
        alt: "Bluebatch KI-Chatbot Großhandel",
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
    canonical: "/use-cases/grosshandel/ki-chatbot-grosshandel",
  },
};

const useCases: {
  slug: string;
  title: string;
  text: string;
  turns: ChatTurn[];
}[] = [
  {
    slug: "stammdaten",
    title: "Stammdaten",
    text: "Frag nach Artikelnummer, Kundenname, Lieferant oder ATC-Code. Der Bot zieht die aktuellen Daten direkt aus dem ERP.",
    turns: [
      {
        from: "user",
        text: "Welche Lieferanten haben wir für Artikel 47831?",
      },
      {
        from: "bot",
        text: "Drei Lieferanten: Müller GmbH (Haupt, 7 Tage), Schmidt KG (Backup, 14 Tage), Wagner OHG (Promo).",
      },
      {
        from: "user",
        text: "Wer hat aktuell den besten Preis?",
      },
      {
        from: "bot",
        text: "Wagner OHG mit 4,12 € / Stück (Promo bis 31.05.). Müller 4,22 €, Schmidt 4,35 €.",
      },
    ],
  },
  {
    slug: "bestaende",
    title: "Bestände",
    text: "Echtzeit-Lagerbestand über alle Standorte, inkl. reservierter und verfügbarer Mengen.",
    turns: [
      {
        from: "user",
        text: "Wie viele 47831 in Münster verfügbar?",
      },
      {
        from: "bot",
        text: "Münster: 245 Stück, 30 reserviert, 215 frei. Stand vor 12 Sek.",
      },
      {
        from: "user",
        text: "Und in Hamburg?",
      },
      {
        from: "bot",
        text: "Hamburg: 78 Stück, 12 reserviert, 66 frei. Transfer Münster → Hamburg: 1 Tag.",
      },
    ],
  },
  {
    slug: "auftraege",
    title: "Aufträge",
    text: "Auftragsstatus, Lieferdatum, offene Positionen und Rechnungsstand pro Kunde abfragen.",
    turns: [
      {
        from: "user",
        text: "Status Bestellung 22-09413 von Mustermann?",
      },
      {
        from: "bot",
        text: "In Auslieferung. Versand 14.05., Tracking DPD-789-441, Liefertermin 16.05.",
      },
      {
        from: "user",
        text: "Hat der Kunde noch andere offene Bestellungen?",
      },
      {
        from: "bot",
        text: "Ja, zwei: 22-09501 (Versand 17.05.) und 22-09534 (Kommissionierung, morgen).",
      },
    ],
  },
  {
    slug: "belege",
    title: "Belege & Verträge",
    text: "Volltextsuche über alle SharePoint-Dokumente: Lieferantenverträge, Zertifikate, AGBs, Datenblätter.",
    turns: [
      {
        from: "user",
        text: "Zeig mir das aktuelle Datenblatt für Artikel 47831.",
      },
      {
        from: "bot",
        text: "Datenblatt v4.2 (15.03.2026, 2 MB). /Produkte/47831_DB_v4.2.pdf",
      },
      {
        from: "user",
        text: "Was hat sich gegenüber v4.1 geändert?",
      },
      {
        from: "bot",
        text: "Temperaturbereich von -20 °C auf -40 °C erweitert, neue CE-Konformität 2026/EU/15.",
      },
    ],
  },
  {
    slug: "preise",
    title: "Preise & Konditionen",
    text: "Kundenpreise, Rabattstaffeln und Sonderkonditionen pro Kunde aus dem ERP holen.",
    turns: [
      {
        from: "user",
        text: "Nettopreis für Kunde 100432, Artikel 47831, Menge 200?",
      },
      {
        from: "bot",
        text: "Listenpreis 4,80 €, Staffel A (−12 %), Netto 4,22 € / Stück.",
      },
      {
        from: "user",
        text: "Und bei 500 Stück?",
      },
      {
        from: "bot",
        text: "Staffel B (−18 %): Netto 3,94 € / Stück, Gesamt 1.968 €. Ersparnis 140 €.",
      },
    ],
  },
  {
    slug: "lieferanten",
    title: "Lieferanten",
    text: "Lieferantenkonditionen, Mindestbestellmengen und letzte Bestellung aus dem ERP abfragen.",
    turns: [
      {
        from: "user",
        text: "Letzte Bestellung bei Müller GmbH?",
      },
      {
        from: "bot",
        text: "06.05.2026, PO 2026-0438, Wert 12.450 €, Lieferung 12.05.",
      },
      {
        from: "user",
        text: "Durchschnittliche Lieferzeit dieses Jahr?",
      },
      {
        from: "bot",
        text: "6,8 Tage im Schnitt (8 Bestellungen). SLA 7 Tage, also leicht unter Vorgabe.",
      },
    ],
  },
];

const connectors = [
  {
    name: "Ebootis",
    description:
      "Direkter REST-Connector zur Ebootis-Plattform. Stammdaten, Bestände, Aufträge und Belege werden live abgefragt, ohne Replikation. Read-only by default, Write-Permissions nach Freischaltung pro Rolle.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    points: [
      "Live-Zugriff via Ebootis-Web-Service",
      "Read-only Default, Schreibrechte nach Rolle",
      "Nutzer-Kontext aus Single-Sign-On (Azure AD)",
    ],
  },
  {
    name: "MS Navision / Dynamics 365 BC",
    description:
      "OData- und Web-Service-Connector zu Microsoft Dynamics 365 Business Central (vormals Navision). Mandanten-aware, mit Berechtigungs-Vererbung aus der NAV-Rolle.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125S3.75 12.403 3.75 10.125V6.375m16.5 6c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    points: [
      "OData v4 plus klassische Web-Services",
      "Mandantenfähig, BC-Rollen werden respektiert",
      "Onprem-Navision-Versionen ab NAV 2018 unterstützt",
    ],
  },
  {
    name: "SharePoint",
    description:
      "Microsoft Graph API für Dokumenten-Volltextsuche, Versionierung und Metadaten. RAG auf eure Lieferantenverträge, Datenblätter, Zertifikate und AGBs.",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    points: [
      "Volltext und semantische Suche per RAG",
      "Permissions aus SharePoint werden vererbt",
      "Versionierung und Audit-Log bleiben in SharePoint",
    ],
  },
];

const upgradePath = [
  {
    href: "/use-cases/grosshandel/auftragserfassung",
    title: "Auftragserfassung automatisieren",
    description:
      "Wenn der Chatbot Stammdaten zuverlässig liefert, sind eingehende Bestellungen aus E-Mail und PDF der nächste logische Schritt.",
  },
  {
    href: "/use-cases/grosshandel/bestellabwicklung",
    title: "Bestellabwicklung end-to-end",
    description:
      "Von der Bestellung über Validierung, Lager-Routing bis zum Versand, vollautomatisch durch n8n.",
  },
  {
    href: "/use-cases/grosshandel/invoice-bot",
    title: "Invoice-Bot für Eingangsrechnungen",
    description:
      "Eingangsrechnungen automatisch erfassen, prüfen und zur Freigabe weiterleiten. Logischer Ausbau, sobald die ERP-Connectoren stehen.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Pilot für den Großhandel
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Chatbot für deinen Großhandel mit ERP-Anbindung, in 5 Tagen
              live
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Open WebUI als sichere, selbst-gehostete Chat-Oberfläche, plus
              fertige n8n-Connectoren zu Ebootis, MS Navision und SharePoint.
              Stammdaten, Bestände, Aufträge und Belege per Chat statt durch
              fünf ERP-Masken klicken. Schneller Pilot, geringe Investition,
              klarer Pfad zu größeren Workflows.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Pilot anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <div className="mt-8">
              <SimpleGrid cols={3}>
                <KpiCard
                  valueText="1.000 €"
                  subtitle="Setup, einmalig pauschal"
                />
                <KpiCard
                  valueText="5 Tage"
                  subtitle="Von Kickoff bis Go-Live"
                />
                <KpiCard
                  value={3}
                  subtitle="Connectoren out-of-the-box"
                />
              </SimpleGrid>
            </div>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/ki-chatbot-grosshandel/hero-chatbot.png"
              alt="KI-Chatbot mit ERP-Anbindung, Chat-Interface trifft Live-Daten"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. WORKFLOW */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>So funktioniert der Bot</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Mitarbeiter-Chat bis zur ERP-Antwort, in unter 3 Sekunden
          </IntroBox.Headline>
          <IntroBox.Subline>
            Open WebUI nimmt die Frage entgegen, klassifiziert den Intent,
            ruft den passenden n8n-Workflow auf, der wiederum den richtigen
            ERP-Endpoint anfragt. Antwort wird in Klartext zurückformatiert,
            inklusive Quelle und Zeitstempel.
          </IntroBox.Subline>
        </IntroBox>
        <WorkflowDiagram variant="circular">
          <WorkflowDiagram.Step
            n={1}
            title="Chat-Eingabe"
            description="Mitarbeiter stellt Frage in Open WebUI, Single-Sign-On gegen Azure AD."
          />
          <WorkflowDiagram.Step
            n={2}
            title="Intent-Erkennung"
            description="LLM klassifiziert: Stammdaten, Bestand, Auftrag, Beleg, Preis oder Lieferant."
          />
          <WorkflowDiagram.Step
            n={3}
            title="ERP-Query"
            description="n8n-Workflow ruft Ebootis, Navision oder SharePoint auf, mit Nutzer-Kontext."
          />
          <WorkflowDiagram.Step
            n={4}
            title="Antwort-Formatierung"
            description="LLM bringt Roh-Daten in Klartext, mit Quelle, Zeitstempel und Folgefrage-Vorschlag."
          />
          <WorkflowDiagram.Step
            n={5}
            title="Audit-Log"
            description="Jede Anfrage wird mit User, Frage, Quelle und Antwort revisionssicher protokolliert."
          />
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 3. USE CASES */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Was du fragen kannst</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Sechs Anfragetypen, die täglich im Großhandel vorkommen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Stammdaten, Bestände, Aufträge, Belege, Preise und Lieferanten
            sind die Routine-Trigger im Tagesgeschäft. Der Chatbot ersetzt
            kein ERP, er macht den Zugriff schneller und vermeidet
            Klick-Marathons durch fünf Masken.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue={useCases[0].slug} className="mt-10">
          <TabNavigation>
            {useCases.map((uc) => (
              <TabItem key={uc.slug} value={uc.slug}>
                {uc.title}
              </TabItem>
            ))}
          </TabNavigation>

          {useCases.map((uc) => (
            <TabContent key={uc.slug} value={uc.slug}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
                <div>
                  <Typo.H3 className="mt-0!">{uc.title}</Typo.H3>
                  <Typo.Paragraph textColor="muted">{uc.text}</Typo.Paragraph>
                </div>
                <div>
                  <ChatConversation turns={uc.turns} />
                </div>
              </div>
            </TabContent>
          ))}
        </TabGroup>
      </ContentWrapper>

      {/* 4. CONNECTORS */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>
            Out-of-the-box Connectoren
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Systeme, die wir am ersten Tag anbinden
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ebootis, Microsoft Dynamics 365 Business Central (vormals
            Navision) und SharePoint decken den Kern eines deutschen
            Großhandels ab. Weitere Connectoren auf Anfrage, in der Regel
            innerhalb von 2-3 Tagen produktiv.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {connectors.map((c) => (
            <SimpleCard key={c.name} align="left">
              <SimpleCardIcon size="lg" color="primary-gradient">
                {c.icon}
              </SimpleCardIcon>
              <Typo.H3 className="mt-4!">{c.name}</Typo.H3>
              <Typo.Paragraph className="mb-4!" textColor="muted">
                {c.description}
              </Typo.Paragraph>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <Typo.Paragraph className="mt-8 text-center" textColor="muted">
          Weitere ERP-, DMS- oder Webshop-Systeme auf Anfrage. SAP Business
          One, JTL, Sage 100, Microsoft Dynamics NAV onprem, Lexware und
          DATEV-Unternehmen-Online sind die häufigsten Folge-Connectoren.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 5. VORHER / NACHHER */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Eine Frage statt fünf Masken
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein typischer Großhändler-Mitarbeiter klickt 30-60 Mal pro Tag
            durch ERP-Masken, Outlook und Excel, nur um Auskünfte für Kunden,
            Lieferanten oder Kollegen zu geben.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
          <ComparisonCard>
            <BeforeCard>
              <ComparisonHeadline>
                Vorher: Klick-Marathon durch ERP-Masken
              </ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  ERP öffnen, Artikel-Suche, Filter setzen, Detail-Ansicht
                </ComparisonListItem>
                <ComparisonListItem>
                  Bestand-Modul wechseln, Standort filtern, reserviert vs.
                  verfügbar selber abziehen
                </ComparisonListItem>
                <ComparisonListItem>
                  SharePoint extra öffnen, Dokumentbibliothek durchsuchen,
                  Versionen vergleichen
                </ComparisonListItem>
                <ComparisonListItem>
                  Outlook-Mail an Kollegen, weil drei Klicks fehlen oder die
                  Rolle die Maske nicht hat
                </ComparisonListItem>
                <ComparisonListItem>
                  5-10 Min pro Auskunft, 30-60 Auskünfte pro Tag und
                  Sachbearbeiter
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                3-5 Stunden pro Tag und Mitarbeiter mit Klick-Suche
              </ComparisonFooter>
            </BeforeCard>
            <AfterCard>
              <ComparisonHeadline>
                Nachher: eine Frage im Chat
              </ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  Mitarbeiter fragt in Open WebUI, in eigenen Worten
                </ComparisonListItem>
                <ComparisonListItem>
                  Bot greift live auf Ebootis, Navision und SharePoint zu
                </ComparisonListItem>
                <ComparisonListItem>
                  Antwort in Klartext mit Quelle und Zeitstempel
                </ComparisonListItem>
                <ComparisonListItem>
                  Bei sensiblen Daten: Permissions werden aus ERP- und
                  SharePoint-Rolle vererbt
                </ComparisonListItem>
                <ComparisonListItem>
                  Unter 30 Sekunden pro Auskunft, kein Modul-Wechsel mehr
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                30-60 Min pro Tag und Mitarbeiter, alles im Chat
              </ComparisonFooter>
            </AfterCard>
          </ComparisonCard>

          <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/ki-chatbot-grosshandel/comparison-visual.png"
              alt="Vorher Klick-Marathon durch viele Fenster, nachher ein einziges Chat-Fenster"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 6. ROI */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Was kostet das?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Niedriger Einstieg, damit der Pilot keine Hürde ist
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für eine Großhandelskanzlei mit 5 Sachbearbeitern,
            die täglich Stammdaten und Bestände abfragen.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>2-3</SavingsBadgeHighlight> Monaten
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">1.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">50 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                450 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>
              5 Sachbearbeiter, 2 Stunden pro Monat eingesparte Such-Zeit pro
              Mitarbeiter
            </RoiAssumption>
            <RoiRow label="Sachbearbeiter">5</RoiRow>
            <RoiRow label="Stunden gespart pro Mitarbeiter pro Monat">
              2 h
            </RoiRow>
            <RoiRow label="Stundensatz">50 € / h</RoiRow>
            <RoiRow label="Brutto pro Monat (5 × 2 × 50 €)" highlight>
              500 €
            </RoiRow>
            <RoiRow label="Betrieb pro Monat">− 50 €</RoiRow>
            <RoiTotal label="Netto pro Monat">450 €</RoiTotal>
          </RoiCalculation>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/roi-rechner/service-requests?requests=300&before=10&after=1&hourly=50&tier=small&setup=1000&maint=50"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700"
          >
            Eigenes ROI mit dem Calculator berechnen
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </ContentWrapper>

      {/* 7. UPGRADE-PATH */}
      <ContentWrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
          <div className="relative aspect-video w-full overflow-hidden border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/ki-chatbot-grosshandel/upgrade-path.png"
              alt="Vom Chat zur vollen Automatisierung, Wachstumspfad für KI-Workflows"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Was danach kommt</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Chat heute, vollautomatische Workflows morgen
              </IntroBox.Headline>
              <IntroBox.Subline>
                Sobald Open WebUI fest im Tagesgeschäft sitzt und die
                Connectoren stabil laufen, sind die nächsten Schritte
                naheliegend: dieselben Verbindungen, dieselbe Audit-Logik,
                jetzt für End-to-End-Workflows.
              </IntroBox.Subline>
            </IntroBox>
          </div>
        </div>

        <SimpleGrid cols={3} className="mt-12">
          {upgradePath.map((step) => (
            <SimpleCard key={step.href} align="left">
              <Link href={step.href} className="group">
                <Typo.H3 className="mt-2! group-hover:text-primary-600 transition">
                  {step.title}
                </Typo.H3>
                <Typo.Paragraph className="mb-0!" textColor="muted">
                  {step.description}
                </Typo.Paragraph>
              </Link>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 8. CROSS-SELL */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Verwandte Use Cases</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Mehr Großhandels-Workflows aus dem Bluebatch-Stack
          </CrossSellGrid.Headline>
          <CrossSellGrid.Card href="/use-cases/grosshandel/auftragserfassung">
            <CrossSellGrid.Title>Auftragserfassung</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Bestellungen aus E-Mail, PDF und Portal automatisch erfassen
              und ans ERP übergeben.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/use-cases/grosshandel/lagerverwaltung">
            <CrossSellGrid.Title>Lagerverwaltung</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Echtzeit-Bestand über Standorte, Bedarfsprognose und
              automatische Nachbestellung.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/use-cases/grosshandel">
            <CrossSellGrid.Title>Alle Großhandels Use Cases</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Übersicht aller Workflows für Großhändler, von der
              Auftragserfassung bis zur 3-Wege-Rechnungsprüfung.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
        </CrossSellGrid>
      </ContentWrapper>

      {/* 9. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Was ist Open WebUI und warum nutzt ihr das?",
              answer:
                "Open WebUI ist eine quelloffene, selbst-gehostete Chat-Oberfläche, die mit verschiedenen LLM-Backends (OpenAI, Anthropic, lokale Modelle via Ollama) kommuniziert. Wir nutzen es, weil es DSGVO-freundlich auf eurer eigenen Infrastruktur läuft, der Code öffentlich auditierbar ist und es eine etablierte Plattform mit aktiver Community ist. Kein Vendor-Lock-in, ihr behaltet eure Daten und könnt das LLM jederzeit wechseln.",
            },
            {
              question:
                "Wo laufen die Daten, ist DSGVO-konform alles in Deutschland?",
              answer:
                "Standard-Deployment auf Hetzner in Falkenstein oder Nürnberg, AVV ist abgeschlossen, alle Daten bleiben in Deutschland. Für das LLM nutzen wir per Default Claude Sonnet via Anthropic-EU oder GPT-4 via Azure-OpenAI-EU, beide DSGVO-konform. Auf Wunsch komplett lokal mit Llama oder Mistral via Ollama, dann verlassen keine Daten euer Netzwerk.",
            },
            {
              question:
                "Welche LLMs werden verwendet, wer entscheidet das?",
              answer:
                "Per Default Claude Sonnet 4.5 für die Hauptkonversation, GPT-4o-mini für günstige Klassifikations-Schritte. Ihr könnt im Open WebUI jederzeit zwischen Modellen wechseln, auch lokale Modelle (Llama 3.3, Qwen 2.5, Mistral) sind via Ollama nutzbar. Pricing für API-Modelle läuft direkt über euren Anbieter-Account, wir betreiben kein Proxy.",
            },
            {
              question:
                "Was, wenn unser ERP nicht Ebootis oder Navision ist?",
              answer:
                "Andere Connectoren bauen wir on-demand, in der Regel innerhalb 2-3 Tagen, sobald eine REST- oder OData-Schnittstelle existiert. SAP Business One, JTL, Sage 100, Lexware Office, DATEV-Unternehmen-Online und gängige Webshops (Shopware, OXID, JTL-Shop) sind Routine-Connectoren mit klarer Preisliste.",
            },
            {
              question:
                "Wie lange dauert die Einrichtung wirklich, sind 5 Tage realistisch?",
              answer:
                "Tag 1: Open WebUI auf eurem Server installieren, Azure AD oder SSO anbinden. Tag 2: ERP-API-Zugang einrichten und ersten Connector verbinden. Tag 3-4: Connectoren für die anderen zwei Systeme, Test mit echten Daten. Tag 5: Sachbearbeiter-Onboarding, Beispiel-Prompts, Übergabe. Voraussetzung: ihr habt einen Linux-Server mit Docker (oder wir hosten mit), die API-Zugänge zu ERP und SharePoint sind technisch freigeschaltet.",
            },
            {
              question:
                "Welche Hardware brauchen wir?",
              answer:
                "Open WebUI selbst ist anspruchslos: ein kleiner Linux-Server mit 4 GB RAM und Docker reicht. Wenn ihr LLMs lokal betreiben wollt (Ollama, Mistral, Llama), braucht ihr eine GPU, typischerweise eine RTX 4090 oder Quadro RTX 6000. Wenn ihr Cloud-LLMs nutzt (Claude, GPT-4), reicht der kleine Server für 50+ aktive Nutzer.",
            },
            {
              question:
                "Was passiert mit den Audit-Logs, wer kann was abrufen?",
              answer:
                "Jede Anfrage wird mit Nutzer, Frage, Quelle, Antwort und Zeitstempel revisionssicher protokolliert, Standard-Speicher ist eine Postgres-Datenbank auf eurem Server. Zugriff auf das Audit-Log haben nur Admins, typischerweise IT-Leitung plus Datenschutzbeauftragter. Logs lassen sich nach Datum oder Nutzer exportieren, für Betriebsrat oder Compliance.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 10. FINAL CTA */}
      <ConsultationCtaDefault />
    </>
  );
}
