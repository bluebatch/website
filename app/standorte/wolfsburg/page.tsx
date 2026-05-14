import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import DataTable from "@/components/ui/data-table";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-wolfsburg",
  rewrites: [
    {
      source: "/ai-workflows-wolfsburg",
      preHeadline: "AI Workflows Wolfsburg",
      headline: "AI Workflows & Automatisierung in Wolfsburg",
      metaTitle: "AI Workflows Wolfsburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wolfsburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wolfsburg",
        "KI Automatisierung Wolfsburg",
        "Workflow Automatisierung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wolfsburg",
      preHeadline: "n8n Automation Wolfsburg",
      headline: "n8n Automation in Wolfsburg - Workflows automatisieren",
      metaTitle: "n8n Automation Wolfsburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wolfsburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wolfsburg",
        "n8n Wolfsburg",
        "Workflow Automation Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wolfsburg",
      preHeadline: "n8n Wolfsburg",
      headline: "n8n Agentur in Wolfsburg",
      metaTitle: "n8n Wolfsburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wolfsburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wolfsburg und Umgebung.",
      keywords: [
        "n8n Wolfsburg",
        "n8n Agentur Wolfsburg",
        "n8n Beratung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wolfsburg",
      preHeadline: "Automation Wolfsburg",
      headline: "Automation & Prozessoptimierung in Wolfsburg",
      metaTitle: "Automation Wolfsburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wolfsburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wolfsburg",
        "Prozessautomatisierung Wolfsburg",
        "Workflow Automation Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wolfsburg",
      preHeadline: "IT Dienstleister Wolfsburg",
      headline: "IT Dienstleister in Wolfsburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wolfsburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wolfsburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wolfsburg.",
      keywords: [
        "IT Dienstleister Wolfsburg",
        "IT Service Wolfsburg",
        "Digitalisierung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wolfsburg",
      preHeadline: "KI Beratung Wolfsburg",
      headline: "KI Beratung in Wolfsburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wolfsburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wolfsburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wolfsburg",
        "KI Lösungen Wolfsburg",
        "Künstliche Intelligenz Wolfsburg",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-wolfsburg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wolfsburg",
  slug: "wolfsburg",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Gifhorn",
    "Helmstedt",
    "Wolfenbüttel",
    "Peine",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hannover", slug: "hannover" },
    { name: "Magdeburg", slug: "magdeburg" },
  ],
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title =
    overrides?.metaTitle ??
    "KI-Agentur in Wolfsburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Automotive-Automatisierung am Konzernsitz der Volkswagen AG: n8n-Workflows für VW-Zulieferer, Volkswagen Financial Services, CARIAD und den Trinity-Hochlauf – IATF-16949-, Catena-X- und VDA-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Wolfsburg",
      "n8n Wolfsburg",
      "VW Zulieferer Workflow",
      "Catena-X Wolfsburg",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/wolfsburg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Wolfsburg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/wolfsburg.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-wolfsburg",
    },
  };
}

const wolfsburgFaqs = [
  {
    question: "Wir sind VW-Tier-1 in Wolfsburg – wie integriert ihr n8n in unsere JIS-Welt?",
    answer:
      "Self-hosted on-premise, mit Anbindung an SAP S/4HANA, das VW-Group-Supplier-Portal und Catena-X-Datenräume. Wir decken VDA-4905-EDIFACT-Abrufe für Golf, Tiguan und Trinity ab, IATF-16949-konforme APQP/PPAP-Doku und Quality-Notifications via Asset Administration Shell.",
  },
  {
    question: "Lassen sich CARIAD-Software-Workflows mit n8n abbilden?",
    answer:
      "Ja. Wir docken an Jira, GitLab und Azure DevOps an, automatisieren Release-Pipelines, ASPICE-Doku, ISO-26262-Safety-Cases und ISO-21434-Cybersecurity-Nachweise. Für den Trinity-Hochlauf bedeutet das: Software-Defined-Vehicle-Workflows von Commit bis Type-Approval, mit Vier-Augen-Freigaben an den richtigen Gates.",
  },
  {
    question: "Was bringt n8n bei Volkswagen Financial Services?",
    answer:
      "VW Financial Services ist BaFin-reguliert und unter MaRisk-Aufsicht. Wir automatisieren KYC-Onboarding für Leasing-Kunden, Schadenmeldungen aus der Flotten-Versicherung, Provisionsabrechnung mit Händlerorganisationen und die DORA-Resilienztests. Self-hosted, ohne dass Kundendaten US-Clouds sehen.",
  },
  {
    question: "Helft ihr beim Trinity-Hochlauf ab 2026?",
    answer:
      "Ja, das ist genau unser Fall. Trinity läuft auf der SSP-Plattform mit Batteriezellen aus Salzgitter. Wir bauen Workflows für Lieferanten-Onboarding nach Catena-X, PCF-Berechnung pro Bauteil, Quality-Gates und die Kommunikation zwischen Stammwerk Wolfsburg, Komponentenwerken und CARIAD-Software.",
  },
  {
    question: "Wir sind 300-MA-Zulieferer in Gifhorn – lohnt sich das?",
    answer:
      "Gerade dann. Bei jeder Schicht-Anpassung im Stammwerk müsst ihr die JIS-Sequenzierung neu kalibrieren. Wer aus den VW-Rahmenverträgen fliegt, weil EDI- oder Catena-X-Anbindung fehlt, verliert sofort Jahresumsatz im Millionenbereich. Wir bauen das zum Festpreis in 4 bis 8 Wochen produktiv.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (!metaCustom.publish) notFound();

  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>

      {/* 1. BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/wolfsburg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Wolfsburg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Wolfsburg –{" "}
                Automotive-Automatisierung am{" "}
                <BackgroundHero.Highlight>VW-Konzernsitz</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Volkswagen, VW Financial Services und CARIAD prägen den Wolfsburger
            Arbeitsmarkt. Wir automatisieren JIS-, Catena-X- und
            CARIAD-Workflows mit self-hosted n8n – IATF-16949-, ASPICE- und
            DORA-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Automotive-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={61000}
              label="VW-Beschäftigte am Standort"
              index={0}
            />
            <BackgroundHero.Stat
              value={7000}
              label="Mitarbeiter VW Financial Services"
              index={1}
            />
            <BackgroundHero.Stat
              value={12}
              label="Konzernmarken (VW, Audi, Porsche, MAN …)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Volkswagen, CARIAD, VW Financial Services – Mono-Industrie unter Druck
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo der größte europäische Autokonzern um seine Zukunft kämpft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Wolfsburg wurde 1938 eigens für Volkswagen gegründet, und ohne
            VW gäbe es die Stadt nicht in heutiger Form. Konzernzentrale,
            Stammwerk, CARIAD-Software und Volkswagen Financial Services
            sitzen hier dicht beieinander. Vier regulatorische Welten,
            eine gemeinsame Antwort: auditfeste, on-premise Workflows.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Das VW-Stammwerk Wolfsburg ist eine der größten zusammenhängenden
            Fahrzeugfabriken der Welt: über 6 km² Werksfläche, 1,6 km² bebaute
            Hallenfläche, 75 km Werkstraßen, 60 km Werkschienen und rund
            61.000 Beschäftigte am Standort. Hier laufen Golf, Tiguan, Touran
            und ab 2026 der VW Trinity vom Band – das Elektro-Flaggschiff
            auf der SSP-Plattform mit Batteriezellen aus Salzgitter und
            CO2-armem Stahl. Hunderte Tier-1- und Tier-2-Zulieferer arbeiten
            in JIS-Sequenzierung direkt im Werksgelände oder in unmittelbarer
            Nähe. Bei jeder Schicht-Anpassung müssen Prozesse neu kalibriert
            werden – ohne EDIFACT-, Catena-X- und IATF-16949-konforme Workflows
            ist das schlicht nicht beherrschbar.
          </Typo.Paragraph>
          <Typo.Paragraph>
            CARIAD, die VW-Software-Tochter, soll den Konzern in den
            Software-Defined-Vehicle-Modus bringen. ASPICE-Doku, ISO-26262
            Functional Safety und ISO-21434 Cybersecurity sind dabei
            Pflichtthemen, von Commit bis Type-Approval. Parallel sitzt
            Volkswagen Financial Services mit rund 7.000 Beschäftigten als
            BaFin-regulierter Anbieter für Leasing, Bank, Versicherung und
            Flottenmanagement direkt nebenan. KYC, MaRisk, DORA-Resilienztests
            und Provisionsabrechnung mit der Händlerorganisation erzeugen
            hochfrequente Compliance-Workflows.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Die Krise gibt dem Standort zusätzliche Brisanz: sinkende Margen,
            schwache ID-Verkäufe, chinesische Konkurrenz, das Diesel-Erbe
            und CARIAD-Software-Probleme. Die Konzernzentrale muss
            Verwaltungs-Overhead reduzieren, Entscheidungsprozesse
            beschleunigen und gleichzeitig den Trinity-Hochlauf perfekt
            abliefern. Hinzu kommen die Autostadt mit über 2 Millionen
            Besuchern pro Jahr und die Wolfsburg AG als Diversifizierungs-Vehikel.
            Wie wir das in sechs Phasen ausrollen, beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/wolfsburg.jpg"
              alt="Catena-X- und JIS-Automatisierung für VW-Zulieferer in Wolfsburg"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                VW investiert Milliarden in CARIAD – was machen Mittelständler im Werk?
              </Typo.H2>
              <Typo.Paragraph>
                VW und CARIAD bauen massive Software-Teams auf. Mittelständische
                Zulieferer in JIS-Anbindung, Spezialfertiger im Werksumfeld und
                Engineering-Dienstleister brauchen einen pragmatischen Hebel:
                schlanke n8n-Workflows zwischen SAP, VW-Lieferantenportal und
                Catena-X. Self-hosted, on-premise, modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 124000, label: "Einwohner Wolfsburg" },
            { value: 13000, label: "Direkte Fahrzeugproduktion" },
            { value: 6, suffix: " km²", label: "VW-Werk-Fläche" },
            { value: 2000000, label: "Autostadt-Besucher pro Jahr" },
          ]}
        />
      </ContentWrapper>

      {/* 4. DataTable – Automotive-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            VW-, CARIAD- und Financial-Services-Prozesse automatisieren
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der konkrete Zeitgewinn pro Workflow
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-8">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Prozess</DataTable.HeaderCell>
                <DataTable.HeaderCell>Manuell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Automatisiert</DataTable.HeaderCell>
                <DataTable.HeaderCell>Zeitersparnis</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>JIS-Sequenz-Anpassung Stammwerk</DataTable.Cell>
                <DataTable.Cell>3 Std./Schicht</DataTable.Cell>
                <DataTable.Cell>5 Min</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Catena-X PCF für Trinity-Bauteil</DataTable.Cell>
                <DataTable.Cell>4 Std./Bauteil</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ASPICE-/ISO-26262-Release-Doku</DataTable.Cell>
                <DataTable.Cell>1 Tag/Release</DataTable.Cell>
                <DataTable.Cell>30 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>VW FS Leasing-KYC</DataTable.Cell>
                <DataTable.Cell>2 Tage</DataTable.Cell>
                <DataTable.Cell>1 Std.</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Autostadt-Auslieferungs-Termin</DataTable.Cell>
                <DataTable.Cell>20 Min/Kunde</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~90 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 7. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Wolfsburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={wolfsburgFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
