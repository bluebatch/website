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
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import StepJourneyRow from "@/components/sections/step-journey-row";
import CrossSellGrid from "@/components/sections/cross-sell-grid";

export const pageConfig: PageConfig = {
  title: "Mandanten-Onboarding",
  description:
    "GwG-konformes Mandanten-Onboarding für Steuerkanzleien in 30 Minuten statt 4-8 Stunden.",
};

const defaultMeta = {
  title: "KI-Mandanten-Onboarding GwG | Bluebatch",
  description:
    "Manuelles Onboarding dauert 4-8 h pro Mandant. KI-Workflow für GwG/KYC, DATEV-Anlage und Vollmachten senkt Aufwand um 85% und Fehler um 80%.",
  ogDescription:
    "GwG-konformes Mandanten-Onboarding in 30 Minuten statt 4-8 Stunden. Self-Service-Frontend, KYC-Pipeline, DATEV-Anlage in einem n8n-Workflow.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "ki mandanten onboarding",
    "ki mandanten",
    "kanzlei digitalisieren",
    "steuerkanzlei digitalisierung",
    "GwG Steuerberater",
    "KYC Steuerberater",
    "DATEV Mandanten-Anlage",
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
        alt: "Bluebatch KI-Mandanten-Onboarding",
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
    canonical: "/use-cases/steuerberater/mandanten-onboarding",
  },
};

const stats = [
  { value: 30, suffix: " Min", label: "statt 4-8 Stunden" },
  { value: 85, suffix: "%", label: "Aufwandsreduktion" },
  { value: 80, suffix: "%", label: "Fehlerreduktion" },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/mandanten-onboarding/hero-welcome.png"
          overlayOpacity={0.7}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            KI-Mandanten-Onboarding
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            <>
              KI Mandanten Onboarding:{" "}
              <BackgroundHero.Highlight>
                GwG-konform
              </BackgroundHero.Highlight>{" "}
              in 30 Minuten
            </>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Stammdaten, GwG-Identifizierung, PEP- und Sanktionslisten-Check,
            Vollmacht und DATEV-Anlage in einem automatisierten Workflow. Statt
            4-8 Stunden manueller Arbeit pro Neumandant ein revisionssicherer
            n8n-Workflow mit Audit-Trail.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. STEP-JOURNEY-SECTION */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Die Journey</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft das Onboarding für Steuerkanzlei Digitalisierung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Fünf Schritte vom Erstkontakt bis zum produktiven Mandat. Was vorher
            4-8 Stunden Kanzlei-Zeit kostete, läuft als orchestrierter Workflow
            durch.
          </IntroBox.Subline>
        </IntroBox>

        <StepJourneyRow className="mt-12">
          <StepJourneyRow.Step
            n={1}
            duration="15-20 Min Mandanten-Zeit"
            imageSrc="/images/mandanten-onboarding/journey-1-data.png"
            imageAlt="Selfservice-Fragebogen"
          >
            <StepJourneyRow.Title>Selfservice-Fragebogen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Personalisierter Link, Web-Fragebogen im Kanzlei-Design.
              Stammdaten, Steuer-IDs, Bankverbindungen, UBO und Mandate werden
              strukturiert erfasst, Dokumente direkt hochgeladen.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>

          <StepJourneyRow.Step
            n={2}
            duration="2 Min automatisch"
            imageSrc="/images/mandanten-onboarding/journey-1-data.png"
            imageAlt="KI-Datenvalidierung"
          >
            <StepJourneyRow.Title>KI-Datenvalidierung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              KI-Agent liest Dokumente, gleicht Eingaben mit Handelsregister,
              Unternehmensregister und Transparenzregister ab und meldet falsche
              IBAN oder ungültige Steuernummern direkt zurück.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>

          <StepJourneyRow.Step
            n={3}
            duration="5 Min automatisch"
            imageSrc="/images/mandanten-onboarding/journey-2-check.png"
            imageAlt="GwG-Pipeline"
          >
            <StepJourneyRow.Title>GwG-Pipeline</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Video-Ident oder POSTIDENT, Sanktionslisten-Screening (EU, OFAC,
              UN), PEP-Check und Risikoeinstufung. Jede Prüfung landet
              revisionssicher im Audit-Trail.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>

          <StepJourneyRow.Step
            n={4}
            duration="3 Min Mandanten-Zeit"
            imageSrc="/images/mandanten-onboarding/journey-2-check.png"
            imageAlt="Vollmacht und ELSTER"
          >
            <StepJourneyRow.Title>Vollmacht und ELSTER</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Vollmacht aus Template generiert, per DocuSign oder Adobe Sign
              elektronisch unterzeichnet, Beauftragungsbestätigung automatisch
              an ELSTER. Kein Drucken, kein Postversand.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>

          <StepJourneyRow.Step
            n={5}
            duration="2 Min automatisch"
            imageSrc="/images/mandanten-onboarding/journey-3-datev.png"
            imageAlt="DATEV-Anlage und Welcome"
          >
            <StepJourneyRow.Title>DATEV-Anlage und Welcome</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Mandant, UBO, Bankkonten und Mandate via DATEVconnect-API
              angelegt. Mandantenportal-Account, Belegtransfer und Welcome-Pack
              stehen am ersten Buchungstag.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      {/* 3. GWG-COMPLIANCE-BOX */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
              Compliance
            </div>
            <Typo.H2 className="mt-4 text-white">
              GwG, PEP und Embargo: Pflicht, nicht Kür
            </Typo.H2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              § 2 Abs. 1 Nr. 12 GwG verpflichtet jede Kanzlei zur dokumentierten
              Identifizierung, Risikobewertung und fortlaufenden Überwachung.
              Verstöße kosten bis zu 1 Mio. € und gefährden die Bestellung.
              Manuelle Excel-Listen halten einer BaFin- oder StBK-Prüfung nicht
              stand.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  GwG-Pflicht
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  § 2 Abs. 1 Nr. 12
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Identifizierung, Risikobewertung, Überwachung
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  PEP-Check
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  Global
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Politisch exponierte Personen + Re-Check
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Embargo-Listen
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  EU, OFAC, UN
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Inkl. BaFin-Konsolidierungsliste
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white/5 shadow-2xl">
            <Image
              src="/images/mandanten-onboarding/compliance-shield.png"
              alt="GwG-Compliance Schild"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 4. WORKFLOW-DIAGRAMM */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            GwG-Pipeline: Sechs Stationen mit Reject-Branches
          </IntroBox.Headline>
          <IntroBox.Subline>
            Jeder Neumandant durchläuft dieselbe Pipeline. Treffer bei PEP,
            Embargo oder Risikoeinstufung stoppen den Flow und eskalieren
            revisionssicher.
          </IntroBox.Subline>
        </IntroBox>
        <WorkflowDiagram variant="circular">
          <WorkflowDiagram.Step
            n={1}
            title="Datenerfassung"
            description="Fragebogen + Upload"
          />
          <WorkflowDiagram.Step
            n={2}
            title="PEP-Check"
            description="Politisch exponierte Personen"
            reject="Reject"
          />
          <WorkflowDiagram.Step
            n={3}
            title="Embargo"
            description="EU, OFAC, UN-Listen"
            reject="Reject"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Risikoeinstufung"
            description="Niedrig, Mittel, Hoch"
            reject="Reject"
          />
          <WorkflowDiagram.Step
            n={5}
            title="DATEV-Anlage"
            description="via DATEVconnect-API"
          />
          <WorkflowDiagram.Step
            n={6}
            title="Welcome-Pack"
            description="Portal + Kick-off"
          />
          <WorkflowDiagram.Footnote>
            <strong>Reject-Branches:</strong> Treffer auf PEP-Listen,
            Sanktionslisten oder hohe Risikoeinstufung stoppen den Workflow
            automatisch und eskalieren an den zuständigen Sachbearbeiter mit
            dokumentiertem Audit-Trail.
          </WorkflowDiagram.Footnote>
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 5. VORHER / NACHHER */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Vorher vs. nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom 8-Stunden-Marathon zum 30-Minuten-Workflow
          </IntroBox.Headline>
          <IntroBox.Subline>
            Konkret, was sich pro Neumandant ändert, wenn Mandantenaufnahme als
            n8n-Workflow läuft.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Sekretariat tippt Mandantendaten manuell in DATEV (60-90 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                Sachbearbeiter recherchiert Handelsregister, Bundesanzeiger,
                Transparenzregister (30-60 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                GwG-Identifizierung per Papier, Sanktionslisten in Excel
                geprüft (60 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                Vollmacht in Word erstellt, gedruckt, per Post versendet,
                eingescannt abgelegt (45 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                Steuerberater unterschreibt nach 8-12 Mails Hin und Her (60 Min)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: 4-8 Stunden pro Mandant</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: n8n-Workflow</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Mandant füllt Selfservice-Fragebogen (15-20 Min, ohne
                Kanzlei-Zeit)
              </ComparisonListItem>
              <ComparisonListItem>
                KI validiert Stammdaten und reichert sie automatisch an
                (2 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                Video-Ident plus PEP- und Sanktions-Check automatisch (5 Min)
              </ComparisonListItem>
              <ComparisonListItem>
                Vollmacht per DocuSign elektronisch signiert (3 Min Mandanten-Zeit)
              </ComparisonListItem>
              <ComparisonListItem>
                DATEV-Anlage via API, ELSTER-Beauftragung automatisch (2 Min)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Gesamt: 30 Minuten Kanzlei-Zeit pro Mandant
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 6. WARUM BLUEBATCH — ProsCons */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Warum Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bluebatch vs. spezialisierte Onboarding-SaaS
          </IntroBox.Headline>
          <IntroBox.Subline>
            Worin wir uns konkret von KYCnow, KanzleiDrive oder Mandanten-Manager
            unterscheiden, und warum das in der Praxis zählt.
          </IntroBox.Subline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Voller n8n-Stack, kein Vendor-Lock-in"
              description="Beliebige Tools kombinierbar: IDnow, Webid, Comply Advantage, SCHUFA, DocuSign, DATEVconnect. Wechselst du einen Anbieter, bleibt der Workflow bestehen."
            />
            <ProsCons.Item
              title="Self-Service-Frontend im Kanzlei-CI"
              description="Der Mandanten-Fragebogen sieht aus wie ein Stück eurer Website, nicht wie ein generisches SaaS-Tool. Logo, Farben, Tonalität in eurer Hand."
            />
            <ProsCons.Item
              title="Revisionssicherer GwG-Audit-Trail"
              description="Jede Identifizierung, jeder Sanktionslisten-Check, jede Risikobewertung wird mit Zeitstempel, Quelle und Bearbeiter im DMS abgelegt. BaFin- und StBK-Prüfung werden Formalie."
            />
            <ProsCons.Item
              title="Hosting in Deutschland, on-premise möglich"
              description="Mandantendaten verlassen die EU nicht. Auf eigenem Server, in Hetzner-Box oder bei uns in Frankfurt, du wählst. Berufsgeheimnis bleibt geschützt."
            />
          </ProsCons.Pros>

          <ProsCons.Cons>
            <ProsCons.Item
              title="An KanzleiDrive-Stack gekoppelt"
              description="KYCnow funktioniert vor allem in Kombination mit KanzleiDrive. Wer DATEV oder andere Mandanten-Software nutzt, hat keinen vollen Funktionsumfang."
              side="cons"
            />
            <ProsCons.Item
              title="Generisches Frontend"
              description="Spezialisierte SaaS-Anbieter liefern ein eigenes UI, das nicht zur Kanzlei-CI passt. Der Mandant erkennt sofort, dass er auf einer fremden Plattform ist."
              side="cons"
            />
            <ProsCons.Item
              title="Cloud-only, US-/EU-Mix"
              description="Generische Workflow-Tools (Soldan, FireStart) hosten in der Cloud, oft auf AWS oder Azure. On-Premise-Setup bei Steuerkanzleien ist nicht vorgesehen."
              side="cons"
            />
            <ProsCons.Item
              title="Schwache GwG-Tiefe"
              description="Mandanten-Manager und ähnliche Onboarding-Tools sind funktional gut, aber bei GwG-Prüfung, PEP-Check und Risikobewertung oft oberflächlich."
              side="cons"
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* 7. CROSS-SELL */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Auch interessant</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Verwandte Lösungen für die Steuerkanzlei
          </CrossSellGrid.Headline>

          <CrossSellGrid.Card href="/use-cases/steuerberater/mandantenkommunikation">
            <CrossSellGrid.Title>Mandantenkommunikation</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Routine-Anfragen, Belegnachforderungen und Fristen-Reminder über
              n8n und RAG, automatisch beantwortet im Kanzlei-Ton.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>

          <CrossSellGrid.Card href="/use-cases/steuerberater/belegpruefung">
            <CrossSellGrid.Title>Belegprüfung</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              GoBD-konforme KI-Belegerfassung mit DATEV-Übergabe und RAG auf
              eurer Buchungshistorie.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>

          <CrossSellGrid.Card href="/use-cases/steuerberater">
            <CrossSellGrid.Title>Alle Steuerberater Use Cases</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Workflows für Onboarding, Belege, Mandantenkommunikation, DATEV
              und Jahresabschluss im Überblick.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
        </CrossSellGrid>
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie erfüllt euer Workflow die GwG-Anforderungen für Steuerberater?",
              answer:
                "Der n8n-Workflow setzt § 2 Abs. 1 Nr. 12 GwG vollständig um: dokumentierte Identifizierung per Video-Ident oder POSTIDENT, Risikobewertung (Niedrig, Mittel, Hoch) regelbasiert plus KI-gestützt, Sanktionslisten-Screening (EU, OFAC, UN), PEP-Check, fortlaufende Überwachung mit monatlichem Re-Check. Jede Prüfung landet revisionssicher im Audit-Trail in eurem DMS, inklusive Zeitstempel, Quelle und Bearbeiter. BaFin- und StBK-Prüfungen werden zur Formalie.",
            },
            {
              question:
                "Ist die digitale Identifizierung rechtssicher für die Mandatsannahme?",
              answer:
                "Ja. Wir nutzen zertifizierte Anbieter (IDnow, Webid, POSTIDENT), die für GwG-konforme Identifizierung bei Steuerberatern, Banken und Versicherungen zugelassen sind. Video-Ident und eID erfüllen die Anforderungen des § 11 GwG, das Identifizierungsergebnis inklusive Ausweiskopie wird revisionssicher abgelegt.",
            },
            {
              question:
                "Welche Sanktions- und PEP-Listen werden geprüft, und wie oft?",
              answer:
                "EU-Sanktionsliste, OFAC (USA), UN-Sanktionsliste, BaFin-Konsolidierungsliste und globale PEP-Datenbanken (z.B. via Comply Advantage). Erstprüfung bei Mandatsaufnahme, dann automatischer Re-Check als Cron-Job in n8n (Standard monatlich, auf Wunsch wöchentlich). Treffer werden eskaliert und dokumentiert.",
            },
            {
              question:
                "Was wenn der Mandant das Selfservice-Formular nicht ausfüllt?",
              answer:
                "Der Workflow versendet automatisch Reminder (E-Mail, optional SMS) nach 3, 7 und 14 Tagen. Falls keine Reaktion erfolgt, wird der zuständige Sachbearbeiter informiert und kann persönlich nachfassen. Alternativ kann das Sekretariat die Daten im Backend einpflegen, der GwG-Prozess läuft trotzdem über die KI-Pipeline.",
            },
            {
              question:
                "Wie wird das Audit-Trail bei einer BaFin- oder StBK-Prüfung verwendet?",
              answer:
                "Pro Mandant existiert ein vollständiger Audit-Trail: alle Identifizierungsdokumente, Sanktionslisten-Treffer (mit Datum und Listen-Version), PEP-Status, Risikobewertung und unterzeichnete Vollmachten. Auf Knopfdruck wird ein PDF-Export generiert, das du dem Prüfer übergibst. Aufbewahrungsfrist nach GwG (5 Jahre nach Mandatsende) wird automatisch eingehalten.",
            },
            {
              question:
                "Wie funktioniert die DATEV-Anlage, brauchen wir DATEVconnect?",
              answer:
                "Bevorzugte Variante ist DATEVconnect (mit DATEV REST-Schnittstellen), dann läuft die Mandanten-, UBO-, Bank- und Mandats-Anlage komplett automatisch. Falls DATEVconnect nicht verfügbar ist, gehen wir über CSV-Import oder DATEV-Belegtransfer. Im Audit klären wir, welcher Weg in deiner Kanzlei rechtlich und technisch tragfähig ist.",
            },
            {
              question:
                "Können wir den Onboarding-Flow nach unserer Kanzlei-CI gestalten und passt das zu unserer steuerkanzlei digitalisierung?",
              answer:
                "Ja, das Selfservice-Frontend wird auf eure Domain, eure Farben, eure Tonalität und euer Logo zugeschnitten. Der Mandant nimmt das als nahtlosen Teil eurer Kanzlei wahr, nicht als externes SaaS-Tool. Damit fügt sich das Onboarding-Modul in eine größere Strategie ki mandanten und kanzlei digitalisieren ein, ohne den persönlichen Charakter eurer Kanzlei zu verwässern.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 9. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
