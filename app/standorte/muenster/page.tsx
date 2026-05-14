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
  mainRewrite: "/ki-agentur-muenster",
  rewrites: [
    {
      source: "/ai-workflows-muenster",
      preHeadline: "AI Workflows Münster",
      headline: "AI Workflows & Automatisierung in Münster",
      metaTitle: "AI Workflows Münster - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Münster. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Münster",
        "KI Automatisierung Münster",
        "Workflow Automatisierung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-muenster",
      preHeadline: "n8n Automation Münster",
      headline: "n8n Automation in Münster - Workflows automatisieren",
      metaTitle: "n8n Automation Münster | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Münster. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Münster",
        "n8n Münster",
        "Workflow Automation Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-muenster",
      preHeadline: "n8n Münster",
      headline: "n8n Agentur in Münster",
      metaTitle: "n8n Münster - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Münster. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Münster und Umgebung.",
      keywords: [
        "n8n Münster",
        "n8n Agentur Münster",
        "n8n Beratung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-muenster",
      preHeadline: "Automation Münster",
      headline: "Automation & Prozessoptimierung in Münster",
      metaTitle: "Automation Münster - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Münster. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Münster",
        "Prozessautomatisierung Münster",
        "Workflow Automation Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-muenster",
      preHeadline: "IT Dienstleister Münster",
      headline: "IT Dienstleister in Münster - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Münster - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Münster. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Münster.",
      keywords: [
        "IT Dienstleister Münster",
        "IT Service Münster",
        "Digitalisierung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-muenster",
      preHeadline: "KI Beratung Münster",
      headline: "KI Beratung in Münster - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Münster - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Münster. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Münster",
        "KI Lösungen Münster",
        "Künstliche Intelligenz Münster",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-muenster",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Münster",
  slug: "muenster",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Greven",
    "Emsdetten",
    "Steinfurt",
    "Warendorf",
    "Coesfeld",
    "Dülmen",
    "Ahlen",
    "Rheine",
    "Ibbenbüren",
    "Telgte",
  ],
  crossReference: [
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Osnabrück", slug: "osnabrueck" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Hamm", slug: "hamm" },
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
    "KI-Agentur in Münster | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Versicherungs- und Hochschul-Automatisierung in Münster: n8n-Workflows für LVM, Provinzial, BASF Coatings, UKM und Bezirksregierung – BaFin-, IDD- und DORA-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Münster",
      "n8n Münster",
      "LVM Provinzial Workflow",
      "Versicherung Automatisierung Westfalen",
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
          url: "/images/cities/muenster.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Münster",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/muenster.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-muenster",
    },
  };
}

const muensterFaqs = [
  {
    question: "Wir arbeiten bei LVM oder Provinzial – wie deckt n8n BaFin, IDD und DORA ab?",
    answer:
      "Self-hosted on-premise im LVM- oder Provinzial-Rechenzentrum. Wir docken an msg.Insurit, inSurance Suite oder SAP for Insurance an und automatisieren Antragsstrecken, Schadenbearbeitung, KYC-Onboarding und Provisionsabrechnung mit Maklern – mit Vier-Augen-Freigaben, vollständigem Audit-Trail und DORA-Resilienztests.",
  },
  {
    question: "Hilft n8n beim Schaden-Boom durch Klima- und Cyber-Risiken?",
    answer:
      "Genau dort. Bei LVM mit 3,9 Millionen Kunden und Provinzial mit über 7 Mrd. EUR Beitragseinnahmen explodieren die Schadensvolumina. Wir automatisieren Schadenmeldung-Ingest, Erstprüfung mit KI-Klassifikation, Sachverständigen-Beauftragung und Auszahlungs-Workflows mit SEPA-Anbindung an die Hausbank.",
  },
  {
    question: "Was bringt n8n bei BASF Coatings für Lack-Lieferungen an OEMs?",
    answer:
      "BASF Coatings produziert in Münster Lacke für die globale Automotive-Welt. Wir automatisieren GxP-/IATF-Qualitäts-Workflows, REACH-/SCIP-Meldungen und Catena-X-Anbindung an OEMs wie VW, BMW, Mercedes – mit PCF-Berechnung pro Charge und Lieferkettendokumentation nach LkSG.",
  },
  {
    question: "Helft ihr UKM und konfessionellen Kliniken in Münster?",
    answer:
      "Ja. Mit über 11.000 Beschäftigten am UKM und tausenden in konfessionellen Großkliniken automatisieren wir Patientenaufnahme mit FHIR-Anbindung an die ePA, DRG-Kodierung, Pflegedokumentation und Personaleinsatzplanung. KIM-E-Mail und eRezept via Telematikinfrastruktur sind Standard.",
  },
  {
    question: "Was machen wir mit Agrar- und Lebensmittel-Mittelstand im Münsterland?",
    answer:
      "Westfleisch, Agravis und Co. brauchen automatisierte Disposition, Track-and-Trace nach Tier-Arzneimittelgesetz und Lieferanten-Management. Wir bauen die EDI-Anbindung zwischen Erzeugern, Schlachthöfen und Handel auf, mit QS-, EUREP-GAP- und CSRD-Reporting nach ESRS S2.",
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
          imageSrc="/images/cities/muenster.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Münster"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Münster –{" "}
                Versicherungs- und Hochschulstadt{" "}
                <BackgroundHero.Highlight>Westfalens</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            LVM, Provinzial, BASF Coatings, UKM und die Bezirksregierung
            prägen den Münsteraner Arbeitsmarkt. Wir automatisieren BaFin-,
            IDD- und DORA-Workflows mit self-hosted n8n – auditfest,
            on-premise und ohne Datenfluss in US-Clouds.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Versicherungs-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={3900}
              label="LVM-Beschäftigte"
              index={0}
            />
            <BackgroundHero.Stat
              value={4500}
              label="Provinzial Holding"
              index={1}
            />
            <BackgroundHero.Stat
              value={7}
              suffix=" Mrd. €"
              label="Provinzial-Beitragseinnahmen 2024"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            LVM, Provinzial, BASF Coatings – Versicherer trifft Lack-Weltmarktführer
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Westfalens Versicherungshauptstadt auf das größte BASF-Lackwerk trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Münster ist die Versicherungs-Hauptstadt Westfalens und gleichzeitig
            Hochschul-, Verwaltungs- und Industriestandort. LVM mit 3,9 Millionen
            Kunden, Provinzial mit über 7 Mrd. EUR Beitragseinnahmen, BASF
            Coatings als weltgrößtes BASF-Lackwerk und die WWU mit 45.000
            Studierenden bündeln vier Welten an einem Ort – mit massiven
            Compliance-Pflichten und Workflow-Bedarf.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            LVM Versicherung ist mit rund 3.900 Beschäftigten und 3,9 Millionen
            Kunden der größte Versicherer Münsters. Die Provinzial Holding
            beschäftigt etwa 4.500 Mitarbeiter und hat 2024 über 7 Milliarden
            Euro Beitragseinnahmen verbucht – ein Wachstum von 7 Prozent. Beide
            stehen unter BaFin- und MaRisk-Aufsicht, müssen die IDD-Vermittlerregeln
            einhalten, KYC nach Geldwäschegesetz, DORA-Resilienztests gegen
            IT-Ausfälle und steigende Schadensvolumina durch Klima- und
            Cyber-Risiken bewältigen. Antragsstrecken, Schadenbearbeitung,
            Maklerprovisionen, Vertrags- und Compliance-Workflows sind hier
            einer der größten Automatisierungsmärkte in NRW.
          </Typo.Paragraph>
          <Typo.Paragraph>
            BASF Coatings produziert in Münster mit rund 2.650 Beschäftigten
            Fahrzeug-, Industrie- und Reparaturlacke für die globale
            Automotive-Welt. GxP-/IATF-16949-Qualität, REACH-/SCIP-Meldungen
            an die ECHA und Lieferketten-Doku nach LkSG sind hier Pflicht.
            Im Umfeld liefern Chemie-, Verpackungs- und Anlagenbau-Mittelständler
            zu, die selber Workflow-Automatisierung brauchen, um in den
            BASF-Rahmenverträgen zu bleiben. Die WWU mit 45.000 Studierenden,
            ca. 7.500 Beschäftigten und das UKM (Universitätsklinikum Münster)
            mit über 11.000 Mitarbeitern bilden den wissenschaftlich-medizinischen
            Block.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Hinzu kommen die Bezirksregierung Münster (zuständig für ganz
            Westfalen-Lippe), das Oberlandesgericht, mehrere Bundesbehörden
            und die Stadtverwaltung mit zusammen tausenden Beschäftigten.
            OZG 2.0, eAkte und KI-Assistenten für Sachbearbeitung sind hohe
            Priorität – Münster kann hier Pilot-Standort für ganz
            Westfalen-Lippe sein. Im Münsterland kommen Westfleisch, Agravis
            und der Agrar-Mittelstand hinzu, mit eigenen QS-, Tierarzneimittel-
            und CSRD-Anforderungen. Wie wir die Implementierung in sechs
            Phasen ausrollen, beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/banking-compliance.jpg"
              alt="Versicherungs- und IDD-Automatisierung für LVM, Provinzial und Maklerorganisationen in Münster"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                LVM und Provinzial bauen InsurTech-Teams – was machen Makler?
              </Typo.H2>
              <Typo.Paragraph>
                Große Versicherer investieren in eigene Data-Science- und
                Digital-Teams. Maklerorganisationen, Vermittlerpools,
                Schadenregulierer und der Münsteraner Versicherungs-Mittelstand
                brauchen einen pragmatischen Hebel: schlanke n8n-Workflows,
                die KYC-Antragsprüfung, Provisionsabrechnung und Schadenmeldung
                automatisieren – ohne IT-Großprojekt. Self-hosted, in eurem
                deutschen Rechenzentrum, modular erweiterbar.
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
            { value: 320000, label: "Einwohner Münster" },
            { value: 11000, label: "UKM-Beschäftigte" },
            { value: 45000, label: "WWU-Studierende" },
            { value: 2650, label: "BASF Coatings Münster" },
          ]}
        />
      </ContentWrapper>

      {/* 4. DataTable – Versicherungs-/Industrie-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Versicherungs- und Industrie-Prozesse automatisieren
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
                <DataTable.Cell bold>LVM/Provinzial Schadenmeldung</DataTable.Cell>
                <DataTable.Cell>45 Min/Fall</DataTable.Cell>
                <DataTable.Cell>3 Min</DataTable.Cell>
                <DataTable.Cell bold>~93 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>IDD-konforme Maklerprovision</DataTable.Cell>
                <DataTable.Cell>2 Tage/Monat</DataTable.Cell>
                <DataTable.Cell>30 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>KYC-Vermittler-Onboarding</DataTable.Cell>
                <DataTable.Cell>3 Tage</DataTable.Cell>
                <DataTable.Cell>2 Std.</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>BASF Coatings IATF-CoA-Review</DataTable.Cell>
                <DataTable.Cell>2 Std./Charge</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>OZG-Antrag Bezirksregierung</DataTable.Cell>
                <DataTable.Cell>3 Std./Antrag</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
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
        <Typo.H2>Häufige Fragen aus Münster</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={muensterFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
