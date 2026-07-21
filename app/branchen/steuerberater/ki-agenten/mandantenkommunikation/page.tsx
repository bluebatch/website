import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
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
import ProsCons from "@/components/sections/pros-cons";

export const pageConfig: PageConfig = {
  title: "KI-Mandantenkommunikation",
  description:
    "Routine-Mandantenanfragen automatisch beantworten, Fristen monitoren, Belege strukturiert nachfordern.",
};

const defaultMeta = {
  title: "KI-Mandantenkommunikation für Kanzleien | Bluebatch",
  description:
    "Routine-Mailanfragen kosten 3-5 h/Tag pro Sachbearbeiter. KI klärt FAQ, Fristen und Belegnachforderungen, Belegrücklauf 8 Wo auf 3 Wo.",
  ogDescription:
    "KI-Mandantenkommunikation: Routineanfragen, Fristen-Monitor und Belegkampagnen automatisch.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "KI Mandantenkommunikation",
    "ki mandantenkommunikation",
    "mandantenmanagement automatisieren",
    "ki mandantenmanagement",
    "mandantenportal automatisierung",
    "ki mandanten",
    "Steuerkanzlei Automatisierung",
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
        alt: "Bluebatch KI-Mandantenkommunikation",
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
    canonical: "/use-cases/steuerberater/mandantenkommunikation",
  },
};

const personas = [
  {
    title: "Fristen-Anfragen",
    image: "/images/mandantenkommunikation/persona-fristen.png",
    intro:
      "Wann ist die nächste USt-VA fällig? Habt ihr die ESt schon abgegeben?",
    dialog:
      "Die KI zieht den aktuellen DATEV-Fristenkalender, die letzten eingereichten Unterlagen und antwortet konkret mit Datum, Status und nächstem Schritt.",
    example:
      "Mandant: ‚Wann muss ich was für Q4 abgeben?‘ \nKI: ‚Eure USt-VA Q4 ist am 10.02. fällig. Ich brauche bis 03.02. noch die Eingangsrechnungen Dezember.‘",
  },
  {
    title: "Belegnachforderungen",
    image: "/images/mandantenkommunikation/persona-belege.png",
    intro:
      "Welche Belege fehlen für den Jahresabschluss? Wo lade ich die hoch?",
    dialog:
      "Soll-Ist-Abgleich gegen DATEV-Belegtransfer, personalisierte Liste pro Mandant, Upload-Link direkt ins Portal mit automatischer Bestätigung.",
    example:
      "KI: ‚Für den JA 2025 fehlen: Bankauszüge Q4, Lohnjournal Dezember, Inventarliste. Hier ist dein Upload-Link.‘",
  },
  {
    title: "Status-Abfragen",
    image: "/images/mandantenkommunikation/persona-status.png",
    intro:
      "Wie weit ist meine ESt? Ist meine USt-VA schon raus?",
    dialog:
      "Live-Status aus DATEV Eigenorganisation und dem Mandantenportal, mit Zeitstempel und nächstem Bearbeitungsschritt.",
    example:
      "KI: ‚Eure USt-VA Oktober ist am 12.11. ans Finanzamt gegangen, Quittung liegt im Portal.‘",
  },
];

const belegkampagneSteps = [
  {
    nr: "01",
    title: "Soll-Ist-Abgleich gegen DATEV",
    desc: "Cron-Job vergleicht den DATEV-Belegtransfer-Eingang pro Mandant mit dem Soll-Bestand: USt-VA-Belege, Lohnunterlagen, Bank-Auszüge, Spesen. Was fehlt, landet auf einer Liste.",
  },
  {
    nr: "02",
    title: "Personalisierte Mandanten-Mail",
    desc: "Pro Mandant wird eine individuelle Mail generiert, mit konkreter Liste, Bezug auf den letzten Monat und einem Upload-Link, der direkt in den richtigen Portal-Ordner führt.",
  },
  {
    nr: "03",
    title: "Upload und Auto-Bestätigung",
    desc: "Mandant lädt Belege per Portal oder schickt sie per Mail-Anhang zurück. Der Workflow nimmt sie auf, dankt automatisch und schließt den Eintrag in der offenen Liste.",
  },
  {
    nr: "04",
    title: "Eskalation nach 14 und 7 Tagen",
    desc: "Kein Eingang? Auto-Reminder geht nach 14 Tagen, ein zweiter nach 7 Tagen vor der Frist. Bei Nichtreaktion landet ein Task beim zuständigen Sachbearbeiter.",
  },
  {
    nr: "05",
    title: "Kampagnen-Reporting",
    desc: "Pro Mandantenklasse wird ausgewertet, wer wie schnell reagiert. Die Kanzlei sieht auf einen Blick, welche Mandanten den Rücklauf bremsen, und kann zielgerichtet nachhaken.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO — StatsLeadHero */}
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>
          Use Case Steuerberater
        </StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          KI Mandantenkommunikation für Steuerkanzleien
        </StatsLeadHero.Headline>
        <StatsLeadHero.Description>
          Routine-Anfragen, Belegnachforderungen und Fristen-Reminder laufen
          automatisch über einen n8n-Workflow mit RAG auf der Mandantenakte.
          Sachbearbeiter sparen 3 bis 5 Stunden pro Tag, Mandanten bekommen
          rund um die Uhr eine Antwort.
        </StatsLeadHero.Description>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Demo anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard value={60} suffix=" %" subtitle="Weniger Routineanfragen" />
          <KpiCard
            valueText="3 Wochen"
            subtitle="Belegrücklauf, statt vorher 8 Wochen"
          />
          <KpiCard value={24} suffix=" / 7" subtitle="Erreichbarkeit" />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/mandantenkommunikation/hero-side-visual.png"
          alt="Mandantin am Smartphone, KI-Antwort mit Häkchen"
        />
      </StatsLeadHero>

      {/* 2. PERSONA-CARDS — Was die KI für dich beantwortet */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Was die KI übernimmt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Anfragetypen, die 60 Prozent deines Postfachs ausmachen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Fristen, Belege, Status. Diese drei Cluster sind in jeder Kanzlei
            die Routine-Treiber. Die KI antwortet konkret, weil sie aus DATEV
            und der Mandantenakte zieht, nicht aus einem generischen
            FAQ-Bestand.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {personas.map((persona) => (
            <SimpleCard key={persona.title} align="left">
              <SimpleCard.Image
                src={persona.image}
                alt={persona.title}
                size="lg"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">
                {persona.title}
              </h3>
              <p className="mt-3 text-sm font-medium text-gray-500">
                {persona.intro}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-gray-700">
                {persona.dialog}
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm italic leading-relaxed text-gray-700">
                {persona.example.split("\n").map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. WORKFLOW-DIAGRAMM — Branching */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Mail-Eingang, Klassifikation, drei Pfade
          </IntroBox.Headline>
          <IntroBox.Subline>
            Jede eingehende Mail wird vom LLM klassifiziert und automatisch in
            einen der drei Pfade geroutet. Mensch wird nur gebraucht, wenn die
            KI eskaliert oder ein Sachbearbeiter freigibt.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="branching">
          <WorkflowDiagram.Trigger
            title="Mail-Eingang"
            subtitle="Outlook, Portal, WhatsApp"
          />
          <WorkflowDiagram.Branch label="RAG-Antwort" tone="primary">
            Routine-Klassen wie Status, Fristen, FAQ. Antwort wird aus DATEV
            und Mandantenakte generiert, optional über Approval-Queue.
          </WorkflowDiagram.Branch>
          <WorkflowDiagram.Branch label="Belegkampagne" tone="secondary">
            Fehlende Belege werden über Auto-Reminder eingetrieben, Upload-Link
            führt direkt ins Portal mit Auto-Bestätigung.
          </WorkflowDiagram.Branch>
          <WorkflowDiagram.Branch label="Eskalation" tone="cta">
            Fachliche Anfragen, negative Sentiments oder rechtliche Themen
            werden mit SLA-Timer an den zuständigen Sachbearbeiter geroutet.
          </WorkflowDiagram.Branch>
          <WorkflowDiagram.Sink
            title="Sync in CRM / DATEV"
            subtitle="Status, Task, Audit-Trail"
          />
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 4. BELEGKAMPAGNEN-WORKFLOW — IntroBox + 5 alternierende Steps */}
      <ContentWrapper colorScheme="gradient-cool" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Belegkampagnen-Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So treibt die KI Belege ein, ohne dass dein Team nachhakt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Belegnachforderung ist der Nummer-eins-Engpass in Kanzleien.
            Bluebatch macht daraus eine mass-personalisierte Kampagne, die den
            Rücklauf von acht auf drei Wochen drückt.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10">
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <Image
              src="/images/mandantenkommunikation/belegkampagne-flow.png"
              alt="Belegkampagne: eine Steuerberaterin, viele Mandanten-Avatare, automatischer Mail-Flow"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {belegkampagneSteps.map((step, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={step.nr}
                  className={`grid grid-cols-1 items-center gap-6 md:gap-10 ${
                    reversed
                      ? "md:grid-cols-[1fr_120px]"
                      : "md:grid-cols-[120px_1fr]"
                  }`}
                >
                  <div
                    className={`flex md:justify-center ${
                      reversed ? "md:order-2" : ""
                    }`}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-primary-600 shadow-md">
                      {step.nr}
                    </div>
                  </div>
                  <div
                    className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 ${
                      reversed ? "md:order-1" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentWrapper>

      {/* 5. COMPARISON CARD — Vorher / Nachher */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wie sich der Kanzleialltag mit KI-Mandantenmanagement verändert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Konkret, was sich zwischen Outlook-Chaos und orchestriertem
            n8n-Workflow unterscheidet, auf Ebene von Sachbearbeiter,
            Belegrücklauf, Fristen und Mandanten-Erlebnis.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>
              Vorher: Outlook-Postfach, manuell
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Sachbearbeiter klärt täglich 3 bis 5 h Routine-Mails
              </ComparisonListItem>
              <ComparisonListItem>
                Belegrücklauf 8 bis 12 Wochen, 3 bis 5 Erinnerungen pro Mandant
              </ComparisonListItem>
              <ComparisonListItem>
                Fristen-Tracking in Excel und Outlook-Kalender,
                Fristverletzungen regelmäßig
              </ComparisonListItem>
              <ComparisonListItem>
                Mandant wartet im Schnitt 1 bis 2 Werktage auf eine Antwort
              </ComparisonListItem>
              <ComparisonListItem>
                Status-Auskunft ‚Wie weit ist mein JA?‘ nur per Mail oder
                Telefon
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Effekt: überlastete Sachbearbeiter, frustrierte Mandanten
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: n8n, LLM und RAG auf Mandantenakte
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                60 bis 70 Prozent der Routine wird automatisch (mit Approval)
                beantwortet
              </ComparisonListItem>
              <ComparisonListItem>
                Belegrücklauf 2 bis 4 Wochen durch personalisierte
                Belegkampagnen
              </ComparisonListItem>
              <ComparisonListItem>
                Fristen-Monitor mit Auto-Reminder, Fristverletzungen minus 90
                Prozent
              </ComparisonListItem>
              <ComparisonListItem>
                Mandant bekommt 24/7 sofort eine Antwort, Status jederzeit im
                Portal sichtbar
              </ComparisonListItem>
              <ComparisonListItem>
                Sachbearbeiter prüft pro Antwort 15 Sekunden, Beratungszeit
                steigt spürbar
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Effekt: Mandanten-NPS plus 15 bis 25 Punkte, Sachbearbeiter
              wieder entlastet
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 6. WARUM BLUEBATCH — ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Warum Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bluebatch vs. TaxDome, DrMailo und DATEV-Standard
          </IntroBox.Headline>
          <IntroBox.Subline>
            Was unseren Ansatz für ki mandanten unterscheidet, wenn deutsche
            Steuer-FAQ, DATEV-Integration und Berufsgeheimnis nicht
            verhandelbar sind.
          </IntroBox.Subline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Deutsche Steuer-FAQ, deutscher Tonfall"
              description="Templates und LLM-Prompts sind auf deutsches Steuerrecht und deinen Kanzlei-Tonfall trainiert, nicht aus dem US-Markt importiert wie bei TaxDome."
            />
            <ProsCons.Item
              title="RAG auf der echten Mandantenakte"
              description="Antworten beziehen sich auf konkrete DATEV-Stände, offene Fristen und eingereichte Belege, nicht auf generische Wissensbasis. Konkret statt floskelhaft."
            />
            <ProsCons.Item
              title="Multi-Channel: Mail, Portal, WhatsApp"
              description="Ein Workflow für alle Kanäle. Mandanten wählen, wo sie schreiben, du behältst alles im selben System."
            />
            <ProsCons.Item
              title="Berufsgeheimnis-Hosting in DE"
              description="On-Premise oder gehostet in Frankfurt, AVV mit deutschem Vertragspartner, kein Sub-Sub-DPA über drei US-Töchter."
            />
            <ProsCons.Item
              title="DATEV-Statussynchronisation"
              description="Bidirektional gegen DATEV Eigenorganisation comfort und DATEV-Belegtransfer, kein paralleles Datensilo wie bei reinen Mail-Tools."
            />
          </ProsCons.Pros>

          <ProsCons.Cons>
            <ProsCons.Item
              title="TaxDome und KanzleiDrive"
              description="Mandantenportale mit Chat, aber englisch-getrieben, schwache deutsche Steuer-FAQ und KI-Funktionen rudimentär."
              side="cons"
            />
            <ProsCons.Item
              title="DrMailo"
              description="KI-Mail-Assistent für Kanzleien, aber kein End-to-End-Flow für Belegkampagnen, Fristen-Monitor und Portal-Chatbot."
              side="cons"
            />
            <ProsCons.Item
              title="DATEV ‚Meine Steuern‘"
              description="Mandanten-App vorhanden, aber ohne Chatbot-Layer, ohne Klassifikator, ohne automatische Belegkampagnen."
              side="cons"
            />
            <ProsCons.Item
              title="Generische US-SaaS-Chatbots"
              description="Intercom, Drift und Co. kennen keinen DATEV-Stand, keinen Belegtransfer und keine USt-VA-Frist. Müssen pro Anfrage neu zum Sachbearbeiter eskalieren."
              side="cons"
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 7. CROSS-SELL */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center md:p-10">
          <Typo.H3>Mandantenportal als Teil eines größeren Stacks</Typo.H3>
          <Typo.Paragraph>
            Die Mandantenkommunikation läuft selten isoliert. Belegprüfung,
            DATEV-Task-Sync und Dokumentenverarbeitung greifen direkt in den
            selben Workflow, deshalb betreuen wir alle drei Stränge aus einem
            Guss.
          </Typo.Paragraph>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/use-cases/steuerberater/belegpruefung"
              className="inline-flex items-center gap-2 rounded-full border border-primary-600 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              KI-Belegerfassung
            </Link>
            <Link
              href="/use-cases/steuerberater/datev-jira-task-orchestration"
              className="inline-flex items-center gap-2 rounded-full border border-primary-600 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              DATEV-Jira-Sync
            </Link>
            <Link
              href="/use-cases/steuerberater/dokumentenverarbeitung"
              className="inline-flex items-center gap-2 rounded-full border border-primary-600 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              KI-Dokumentenverarbeitung
            </Link>
          </div>
        </div>
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer
          faqs={[
            {
              question:
                "Wie verhindert ihr, dass die KI rechtsverbindliche Aussagen macht?",
              answer:
                "Der Klassifikator trennt Routine (Status, Fristen, FAQ) strikt von fachlichen Steuerfragen. Routine-Antworten enthalten verifizierte Daten aus DATEV und der Mandantenakte, fachliche Anfragen werden automatisch an den zuständigen Sachbearbeiter eskaliert, ohne dass die KI einen Vorschlag formuliert. Jede Antwort kann mit einem Disclaimer versehen werden und durchläuft optional die Approval-Queue, bevor sie an den Mandanten geht.",
            },
            {
              question:
                "Wie funktioniert mandantenportal automatisierung mit DATEV?",
              answer:
                "Wir setzen auf bidirektionale Sync-Pfade: HTTP-Requests an die DATEV-Schnittstellen, Dateiaustausch über DATEV-Belegtransfer und ergänzend Middleware wie DATEVconnect für tiefere Integration. Der Mandantenportal-Chatbot zieht Status, Fristen und Belegrückstände live aus DATEV, schreibt aber nichts zurück, ohne dass ein Sachbearbeiter freigegeben hat. Konkrete Schnittstelle wird im Audit der ersten Woche entschieden.",
            },
            {
              question:
                "Kann der Chatbot auch komplexe Rückfragen zur Steuererklärung beantworten?",
              answer:
                "Nein, und das ist Absicht. Steuerberatung bleibt bei deinen Mitarbeitern. Der Chatbot beantwortet organisatorische und prozessbezogene Fragen: ‚Welche Belege fehlen noch?‘, ‚Wie ist der Stand meiner ESt?‘, ‚Bis wann muss ich was einreichen?‘. Sobald die Anfrage fachlich wird oder eine bestimmte Confidence-Schwelle unterschritten ist, wird automatisch an einen Sachbearbeiter eskaliert.",
            },
            {
              question:
                "Wie funktioniert die Belegkampagne, woher weiß der Workflow, was fehlt?",
              answer:
                "Der Workflow gleicht die im DATEV-Belegtransfer hochgeladenen Belege mit dem Soll-Bestand pro Mandant ab: USt-VA-Belege pro Monat, Lohnunterlagen, Bank-Auszüge, Spesen, Eingangsrechnungen. Was fehlt, wird in einer personalisierten Liste pro Mandant verschickt, mit Upload-Link ins Portal und Erinnerungs-Eskalation nach 14 und 7 Tagen. Beim Upload wird der Eintrag automatisch geschlossen.",
            },
            {
              question:
                "Was passiert, wenn ein Mandant emotional oder aufgebracht schreibt?",
              answer:
                "Der Klassifikator hat eine eigene Sentiment-Stufe. Negative oder eskalative Mails (etwa Beschwerde wegen Verspätungszuschlag, Drohung mit Kanzlei-Wechsel, emotionale Sprache) werden nicht automatisch beantwortet, sondern als ‚Sachbearbeiter sofort‘ markiert, dem zuständigen Berater zugewiesen und mit SLA-Timer überwacht. Die KI bereitet eine sachliche Vorlage, der Mensch antwortet.",
            },
            {
              question: "Können wir den Sprachstil pro Kanzlei anpassen?",
              answer:
                "Ja. Wir nehmen 20 bis 30 echte Antwortbeispiele deiner Kanzlei, leiten daraus Tonfall, Anredeformen, typische Formulierungen und Signatur ab. Die LLM-Templates werden darauf gefittet, neue Mitarbeiter schreiben automatisch im Kanzlei-Stil. Auf Wunsch differenzieren wir den Tonfall pro Mandantenklasse, etwa formeller für Beirats-Mandate, lockerer für Existenzgründer.",
            },
            {
              question:
                "Wie sind DSGVO, Berufsgeheimnis und Mandantengeheimnis geschützt?",
              answer:
                "Datenminimierung, Hosting in Deutschland (Frankfurt) oder On-Premise in der Kanzlei-Infrastruktur, TLS-Verschlüsselung, Auftragsverarbeitungsvertrag mit deutschem Vertragspartner, automatisches Lösch- und Aufbewahrungskonzept, vollständige Audit-Trails pro Mandant. LLM-Calls laufen über Privacy-LLM-Setup ohne Trainings-Opt-in. Das Berufsgeheimnis nach § 203 StGB wird vertraglich gewahrt.",
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
