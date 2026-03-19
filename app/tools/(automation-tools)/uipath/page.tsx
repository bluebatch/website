import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";

export const metadata: Metadata = {
  title:
    "UiPath: Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
  description:
    "UiPath ehrlich bewertet: RPA-Marktführer für Desktop-Automatisierung mit 1,78 Mrd. € ARR. Stärken, Schwächen, echte Preise und wann API-Automatisierung die bessere Wahl ist.",
  openGraph: {
    title:
      "UiPath: Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
    description:
      "UiPath ist der RPA-Marktführer für Desktop-Automatisierung. Wir analysieren Stärken, Schwächen, echte Kosten und zeigen, wann API-Automatisierung sinnvoller ist.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch UiPath Analyse und Beratung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UiPath: Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
    description:
      "UiPath ehrlich bewertet: Desktop-RPA-Marktführer mit echten Preisen, Stärken und Grenzen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/uipath",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              UiPath – der RPA-Marktführer für Desktop-Automatisierung
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              UiPath ist nicht irgendein Automatisierungstool – es ist die
              weltweit führende Plattform für Robotic Process Automation. Aber
              RPA ist ein grundlegend anderer Ansatz als API-Automatisierung.
              Hier erfahren Sie ehrlich, was UiPath kann, was es kostet und wo
              die Grenzen liegen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Automatisierungsstrategie besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Desktop-RPA • 1,78 Mrd. € ARR • NYSE: PATH • 10.800+ Kunden
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/technology-integration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. Was ist UiPath? */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist UiPath?</IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath ist eine grundlegend andere Art von Automatisierung als Tools
            wie n8n, Make oder Zapier. Während API-Tools Systeme über
            Schnittstellen verbinden, simuliert UiPath menschliche
            Interaktionen mit digitalen Systemen: Klicken, Tippen, Lesen von
            Bildschirminhalten, Kopieren von Daten zwischen Anwendungen.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3">Das Unternehmen</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Gegründet 2005 als &quot;DeskOver&quot; in Bukarest von Daniel
              Dines und Marius Tirca. 2015 Umbenennung zu UiPath, 2021
              Börsengang an der NYSE (PATH) – eines der größten
              Software-IPOs der US-Geschichte. Hauptsitz heute in New York,
              über 4.000 Mitarbeiter, 10.800+ Kunden weltweit. Daniel Dines
              ist seit Juni 2024 als CEO zurückgekehrt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Die Architektur</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              UiPath basiert auf drei Schichten: Studio (Entwicklungsumgebung
              zum Erstellen von Workflows per Drag-and-Drop oder Code),
              Orchestrator (zentrale Verwaltung, Scheduling, Monitoring aller
              Robots) und Robots (Ausführungsagenten, die die Workflows
              abarbeiten). Diese Architektur ist mächtig, aber auch komplex.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Marktposition</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              7-facher Gartner Leader für RPA mit ca. 34% Marktanteil – mit
              großem Abstand Marktführer. 1,78 Milliarden € Annual Recurring
              Revenue (Q3 FY2026, +11% YoY). Der globale RPA-Markt lag 2024
              bei 3,8 Mrd. € und soll bis 2034 auf 211 Mrd. € wachsen.
              Deutschland ist mit 8% Nutzeranteil der viertgrößte Markt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">
              RPA vs. API-Automatisierung
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Der entscheidende Unterschied: UiPath automatisiert
              Benutzeroberflächen (Desktop-RPA). API-Tools automatisieren
              System-zu-System-Kommunikation. Wenn Ihre Software APIs bietet,
              ist API-Automatisierung schneller, stabiler und günstiger. UiPath
              wird dann relevant, wenn es keine APIs gibt – bei
              Legacy-Systemen, Mainframes, Citrix oder alten
              Desktop-Anwendungen.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Stärken und Grenzen von UiPath
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath ist nicht ohne Grund Marktführer – aber es kommt mit realen
            Herausforderungen, die man vor einer Entscheidung kennen sollte.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Desktop- & GUI-Automatisierung"
              description="UiPaths Kernkompetenz: Software-Roboter simulieren menschliche Klicks, Eingaben und Bildschirminteraktionen. Damit lassen sich Legacy-Systeme ohne APIs automatisieren – Citrix, Mainframes, SAP-GUI und alte Desktop-Anwendungen. Das unterscheidet UiPath grundlegend von API-basierten Tools."
            />
            <ProsCons.Item
              title="Computer Vision der 3. Generation"
              description="KI-Module erkennen UI-Elemente visuell wie ein Mensch – auch wenn klassische Selektoren versagen. Besonders wertvoll für Remote-Desktop-Sitzungen, Citrix-Umgebungen und Anwendungen mit dynamischen Oberflächen."
            />
            <ProsCons.Item
              title="Document Understanding mit GenAI"
              description="Intelligente Dokumentenverarbeitung (IXP) extrahiert Daten aus Rechnungen, Verträgen und Formularen. GenAI-Extraktion verarbeitet auch unstrukturierte Dokumente. Validation Station ermöglicht Human-in-the-Loop bei kritischen Entscheidungen."
            />
            <ProsCons.Item
              title="Process Mining & Task Mining"
              description="Process Mining analysiert Systemlogs und visualisiert tatsächliche Geschäftsprozesse. Task Mining beobachtet Desktop-Aktivitäten (mit Einwilligung) und identifiziert Automatisierungskandidaten. Beide zusammen quantifizieren das reale Einsparpotential."
            />
            <ProsCons.Item
              title="Attended & Unattended Robots"
              description="Attended Robots arbeiten neben dem Mitarbeiter am Desktop und werden manuell ausgelöst – ideal für Front-Office. Unattended Robots laufen autonom auf Servern, 24/7, für Back-Office-Aufgaben wie Rechnungsverarbeitung oder Datenabgleich."
            />
            <ProsCons.Item
              title="Enterprise Governance & Compliance"
              description="Orchestrator als zentrale Verwaltungsplattform mit RBAC, Audit Trails, Queue Management und Credential-Verwaltung. Geeignet für regulierte Branchen: Finanzwesen, Gesundheitswesen, Versicherungen. Skalierbar auf tausende Robots."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Sehr hohe Kosten"
              description="Unattended Robots kosten ab ca. 4.000,- €/Jahr pro Stück. Ein typischer Enterprise-Deal liegt bei 87.000,- €+/Jahr, breite Deployments schnell bei 200.000,- € – 500.000,- €+. Für KMU und Mittelstand ist UiPath schlicht überdimensioniert und zu teuer."
            />
            <ProsCons.Item
              title="Fragile UI-Selektoren"
              description="Änderungen an Benutzeroberflächen – ein Windows-Update, ein neues SAP-Release, ein Browser-Upgrade – können Automatisierungen komplett zerstören. Selektoren müssen dann manuell neu geschrieben werden. Dieser Wartungsaufwand wird häufig unterschätzt."
            />
            <ProsCons.Item
              title=".NET-Abhängigkeit & steile Lernkurve"
              description="UiPath basiert auf dem .NET-Framework, was die Flexibilität einschränkt. Die Architektur (Studio, Orchestrator, Robots) ist komplex. Neue Nutzer brauchen Wochen bis Monate Einarbeitung, idealerweise mit UiPath-Academy-Zertifizierung."
            />
            <ProsCons.Item
              title="Probleme bei Major-Upgrades"
              description="Neue UiPath-Releases sind anfangs instabil und die Rückwärtskompatibilität ist mangelhaft. Bei Major-Upgrades berichten Nutzer, dass bis zu 90% des bestehenden Codes angepasst werden muss. Das verursacht erhebliche Folgekosten."
            />
            <ProsCons.Item
              title="Langsamer Support"
              description="Der Kundensupport wird in Community-Reviews wiederholt als langsam und nicht immer effektiv beschrieben. Für Unternehmen, die auf schnelle Problemlösung angewiesen sind, kann das zum Risiko werden."
            />
            <ProsCons.Item
              title="Overkill für API-Workflows"
              description="Wenn Ihre Systeme moderne APIs bieten – CRM, ERP, Cloud-Services – brauchen Sie keine Desktop-RPA. UiPath ist dann wie ein Vorschlaghammer für einen Nagel. API-basierte Workflow-Tools erledigen denselben Job schneller, stabiler und für einen Bruchteil der Kosten."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 4. Kosten & Betrieb */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Kosten und Betrieb</IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath bietet zwei Lizenzmodelle: Unified Pricing (kreditbasiert)
            und Flex Pricing (lizenzbasiert). Die tatsächlichen Kosten hängen
            stark von der Anzahl der Robots und dem Nutzungsumfang ab.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mb-12">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
              <DataTable.HeaderCell>Zielgruppe</DataTable.HeaderCell>
              <DataTable.HeaderCell>Umfang</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Community (Free)</DataTable.Cell>
              <DataTable.Cell>0,- €</DataTable.Cell>
              <DataTable.Cell>Einzelpersonen, Unternehmen &lt;5M € Umsatz</DataTable.Cell>
              <DataTable.Cell>Studio, Orchestrator, 2 Attended Robots, eingeschränkt</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Basic</DataTable.Cell>
              <DataTable.Cell>ab 25,- €/Monat</DataTable.Cell>
              <DataTable.Cell>Einzelpersonen, kleine Teams</DataTable.Cell>
              <DataTable.Cell>Persönliche Automationen, 99,9% Uptime, Bronze-Support</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Standard</DataTable.Cell>
              <DataTable.Cell>Auf Anfrage</DataTable.Cell>
              <DataTable.Cell>Unternehmen, größere Teams</DataTable.Cell>
              <DataTable.Cell>Alles in Basic + AI Agents, Enterprise-Features, skalierbar</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Enterprise</DataTable.Cell>
              <DataTable.Cell>Verhandlungsbasis</DataTable.Cell>
              <DataTable.Cell>Großunternehmen</DataTable.Cell>
              <DataTable.Cell>Unbegrenzte Robots, AI Agents, Multi-Cloud/On-Premise</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <SimpleGrid cols={3} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">
              Unattended Robot
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Ab ca. 4.000,- €/Jahr (~333,- €/Monat) pro Robot. Läuft autonom auf
              Servern, 24/7. Je mehr Robots Sie brauchen, desto linearer
              steigen die Kosten.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">
              Typischer Enterprise-Deal
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Ab ca. 87.000,- €+/Jahr für breitere Deployments. Bei größeren
              Organisationen schnell 200.000,- € – 500.000,- €+ jährlich. Dazu kommen
              Implementierungskosten von 50.000,- € – 200.000,- €.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">
              Laufende Wartung
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              20-30% der Lizenzkosten jährlich für Wartung und Updates.
              Zusätzlich: Schulungsbedarf (UiPath Academy), RPA-Entwickler
              (Fachkräfte sind rar und teuer) und Wartung bei
              UI-Änderungen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KI & Agentic AI */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic Automation</IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath investiert massiv in KI. Die Plattform hat sich 2025/2026
            von einem reinen RPA-Tool zu einer Hyperautomation-Plattform
            entwickelt, die RPA, KI-Agenten und Process Mining vereint.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3">AI Center & Document Understanding</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Das AI Center integriert Machine-Learning-Modelle direkt in
              Workflows – inklusive Out-of-the-Box-Modelle, Custom Model
              Training und Integration von OpenAI, Azure AI und anderen
              LLM-Providern. Document Understanding (IXP) nutzt
              GenAI-Extraktion für intelligente Dokumentenverarbeitung und
              kann auch unstrukturierte Dokumente verarbeiten. Model
              Pre-Labeling beschleunigt das Training um bis zu 80%.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">
              Maestro & Agent Builder
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              UiPath Maestro ist die Orchestrierungs-Engine für Agentic
              Automation: KI-Agenten, Robots und Menschen arbeiten in einem
              einzigen Workflow zusammen. Der Agent Builder bietet einen
              visuellen Canvas mit Debugging, Auto-Optimierung und Templates.
              Agenten können über Teams, Slack, per Sprache oder Desktop
              ausgelöst werden. Dazu kommen Autopilot und Clipboard AI als
              niedrigschwellige Einstiegspunkte.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Brancheneignung</IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath ist nicht für jedes Unternehmen die richtige Wahl. Die
            Plattform entfaltet ihren Wert dort, wo Legacy-Systeme ohne APIs
            automatisiert werden müssen.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Banken & Finanzdienstleister">
              Legacy-Desktop-Anwendungen, Mainframe-Zugriff, KYC-Prozesse,
              regulatorisches Reporting. Viele Banken arbeiten noch mit Systemen
              ohne moderne APIs.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Gesundheitswesen">
              Claims Processing (Bearbeitungszeit um 50-75% reduzierbar),
              Patientenaufnahme, Terminplanung über mehrere alte Systeme hinweg.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Fertigung & Produktion">
              SAP-GUI-Automatisierung, ERP-Dateneingabe, Bestandskontrolle in
              Legacy-Systemen. Deloitte/UiPath automatisiert fast 60% der
              ERP-Testfälle.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Versicherungen">
              Schadenbearbeitung, Policenverwaltung und Betrugserkennung über
              Desktop-Anwendungen, die seit Jahrzehnten im Einsatz sind.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Einfache API-Integrationen">
              Wenn Ihre Systeme REST-APIs bieten (CRM, Cloud-ERP, SaaS-Tools),
              ist UiPath massiv überdimensioniert. API-Automatisierung ist hier
              schneller, stabiler und kostet einen Bruchteil.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Startups & kleine Unternehmen">
              UiPath richtet sich primär an Unternehmen mit über 1 Mrd. €
              Jahresumsatz. Für KMU sind die Kosten und die Komplexität nicht
              gerechtfertigt.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Web-native Unternehmen">
              Wer ausschließlich mit modernen Cloud-Anwendungen arbeitet,
              braucht keine Desktop-RPA. Hier sind API-basierte Workflows die
              effizientere Lösung.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Budget-bewusste Automatisierung">
              Bei jährlichen Kosten von 50.000,- €+ aufwärts und
              Implementierungszeiten von 3-6 Monaten ist UiPath keine Lösung
              für schnelle, kostengünstige Automatisierung.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>UiPath im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            UiPath ist ein Desktop-RPA-Tool. Der Vergleich mit API-basierten
            Automatisierungstools ist daher ein Vergleich verschiedener
            Kategorien – aber genau diesen Vergleich sollten Sie anstellen,
            bevor Sie investieren.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="uipath" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
