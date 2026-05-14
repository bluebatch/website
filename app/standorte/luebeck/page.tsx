import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import NumberedList from "@/components/ui/numbered-list";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { HeartPulse, Building2, Ship, Cookie } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-luebeck",
  rewrites: [
    {
      source: "/ai-workflows-luebeck",
      preHeadline: "AI Workflows Lübeck",
      headline: "AI Workflows & Automatisierung in Lübeck",
      metaTitle: "AI Workflows Lübeck - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Lübeck. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Lübeck",
        "KI Automatisierung Lübeck",
        "Workflow Automatisierung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-luebeck",
      preHeadline: "n8n Automation Lübeck",
      headline: "n8n Automation in Lübeck - Workflows automatisieren",
      metaTitle: "n8n Automation Lübeck | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Lübeck. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Lübeck",
        "n8n Lübeck",
        "Workflow Automation Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-luebeck",
      preHeadline: "n8n Lübeck",
      headline: "n8n Agentur in Lübeck",
      metaTitle: "n8n Lübeck - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Lübeck. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Lübeck und Umgebung.",
      keywords: [
        "n8n Lübeck",
        "n8n Agentur Lübeck",
        "n8n Beratung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-luebeck",
      preHeadline: "Automation Lübeck",
      headline: "Automation & Prozessoptimierung in Lübeck",
      metaTitle: "Automation Lübeck - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Lübeck. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Lübeck",
        "Prozessautomatisierung Lübeck",
        "Workflow Automation Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-luebeck",
      preHeadline: "IT Dienstleister Lübeck",
      headline: "IT Dienstleister in Lübeck - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Lübeck - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Lübeck. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Lübeck.",
      keywords: [
        "IT Dienstleister Lübeck",
        "IT Service Lübeck",
        "Digitalisierung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-luebeck",
      preHeadline: "KI Beratung Lübeck",
      headline: "KI Beratung in Lübeck - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Lübeck - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Lübeck. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Lübeck",
        "KI Lösungen Lübeck",
        "Künstliche Intelligenz Lübeck",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-luebeck",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Lübeck",
  slug: "luebeck",
  bundesland: "Schleswig-Holstein",
  publish: false,
  nearbySmall: [
    "Bad Oldesloe",
    "Ahrensburg",
    "Bad Schwartau",
    "Eutin",
    "Ratzeburg",
    "Wismar",
  ],
  crossReference: [
    { name: "Hamburg", slug: "hamburg" },
    { name: "Kiel", slug: "kiel" },
    { name: "Rostock", slug: "rostock" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Lübeck | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Lübecker MedTech, Holding und Hafen: MDR-Pipelines für Drägerwerk-Umfeld, Multi-Töchter-Konsolidierung bei Possehl, Hafen-Zoll für Ostsee-Reedereien und Marzipan-DTC für Niederegger.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Lübeck",
      "n8n Lübeck",
      "Drägerwerk MDR",
      "Possehl Holding Workflow",
      "Hafen Lübeck Zoll",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/luebeck.jpg", width: 1200, height: 630, alt: "Lübeck - Hanse-Hafen und Drägerwerk-Medizintechnik" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/luebeck.jpg"] },
    alternates: { canonical: "/ki-agentur-luebeck" },
  };
}

const luebeckFaqs = [
  {
    question: "Drägerwerk-Zulieferer - kann n8n MDR-Compliance abbilden?",
    answer:
      "Ja. Technische Dokumentation, klinische Bewertung, PMS-Plan und Vigilance-Meldungen werden in versionierten n8n-Pipelines mit Notified-Body-Schnittstellen (TÜV SÜD, BSI) orchestriert. Risikomanagement-Akten nach ISO 14971 revisionssicher versioniert.",
  },
  {
    question: "Possehl-Holding-Tochter: wie hilft Automatisierung konkret?",
    answer:
      "Bei Konzern-ERP-Konsolidierung zwischen SAP, Dynamics, Infor und Sage. Monatsabschluss-, IC-Abstimmungs- und Reporting-Workflows direkt an Lucanet oder SAP BPC - verkürzt Closing-Zeit um 40-60 %.",
  },
  {
    question: "Hafen Lübeck: was bringt n8n im Logistik-Alltag?",
    answer:
      "Hafenanmeldungen, ATLAS-Zoll, Gefahrgut nach IMDG/ADR und EDI mit Reedereien (Finnlines, TT-Line, Stena Line) in automatisierten Pipelines. Anbindung an DAKOSY, HHLA und EORI-Systeme inklusive.",
  },
  {
    question: "Wir sind Lübecker Lebensmittel-Mittelstand - wo hilft KI?",
    answer:
      "Bei HACCP-Charge-Tracking, bei automatischer Bestellabwicklung mit Großhandel (z.B. Edeka, Rewe) und bei saisonaler Peak-Skalierung. Marzipan-, Backwaren- und Wein-Branche profitieren überproportional.",
  },
  {
    question: "Wie skalieren wir mit dem UKSH und Uni Lübeck zusammen?",
    answer:
      "MDR-konforme Studien-Workflows, Ethikkommissions-Voten, klinische Forschungsdaten-Management und Drittmittel-Reporting. Anbindung an SAP, easy-Online, REDCap und Notified-Body-Portale.",
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

      {/* 1. Hero2Column mit Image (statt BackgroundHero — Varianz!) */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Standort Lübeck - Königin der Hanse"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Lübeck - für Drägerwerk, Possehl und Hanse-Hafen"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Drägerwerk fertigt Medizin- und Sicherheitstechnik weltweit, Possehl-Holding bündelt 200 Töchter im Mittelstand, Niederegger ist Welt-Marktführer für Marzipan und der Hafen Lübeck verbindet Skandinavien mit dem Kontinent. Wir bauen Workflows für MDR-Medizinprodukte, Holding-Konsolidierung und Hafen-Logistik.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/luebeck.jpg"
              alt="Lübeck - Hanse-Hafen und Drägerwerk-Medizintechnik"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Lübecker Medizintechnik, Holding und Hafen</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MDR- und ISO-13485-Pipelines für Drägerwerk-Umfeld</Typo.H3>
            <Typo.Paragraph>
              Technische Dokumentation, klinische Bewertung, Post-Market-Surveillance und Vigilance-Meldungen in n8n-Pipelines. Notified-Body-Anbindung (TÜV SÜD, BSI) und revisionssichere Risikomanagement-Akten nach ISO 14971.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Possehl-Multi-Töchter-Konsolidierungs-Workflows</Typo.H3>
            <Typo.Paragraph>
              Konzern-ERP-Integration zwischen SAP, Dynamics, Infor und Sage. Monatsabschluss-, IC-Abstimmungs- und Reporting-Pipelines an Holding-Konsolidierungs-Tools wie Lucanet oder SAP BPC.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Ship className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hafen- und Skandinavien-Zoll-Workflows</Typo.H3>
            <Typo.Paragraph>
              Hafenanmeldungen, ATLAS-Zoll-Anbindung, Gefahrgut-Dokumentation (IMDG, ADR) und EDI mit Reedereien wie Finnlines, TT-Line und Stena Line. Schnittstellen zu DAKOSY und HHLA-Logistik.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cookie className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Marzipan-DTC- und Geschenk-Personalisierung</Typo.H3>
            <Typo.Paragraph>
              Geschenk-Konfiguration, mehrsprachige Bestellpipelines (DE/EN/CN/JP), HACCP-Charge-Tracking und saisonale Peak-Skalierung. Anbindung an Shopify, ERP und Versanddienstleister.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Lübecker Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Drägerwerk und MDR-Compliance für Medizingeräte:">
              Als Weltmarktführer für Beatmungsgeräte, Narkose- und Atemschutzsysteme unterliegt Dräger der MDR (EU 2017/745), FDA 21 CFR 820 und ISO 13485. Technische Dokumentation, klinische Bewertung und Post-Market-Surveillance binden ganze Teams.
            </NumberedList.Item>
            <NumberedList.Item title="Possehl-Holding und Multi-Töchter-Konsolidierung:">
              Die Possehl-Holding bündelt 200+ Tochterfirmen mit verschiedenen ERP-Systemen (SAP, Microsoft Dynamics, Infor, Sage). Konzernkonsolidierung, Konzern-Reporting und ICP-Bereinigungen sind ein Workflow-Großthema.
            </NumberedList.Item>
            <NumberedList.Item title="Hafen Lübeck und Skandinavien-Logistik:">
              Lübeck ist Deutschlands größter Ostseehafen und Logistik-Drehkreuz nach Skandinavien (Finnlines, TT-Line, Lübeck-Travemünde). Hafenanmeldungen, Zoll und Gefahrgut-Dokumentation gehören in automatisierte Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Niederegger und Marzipan-Premium-DTC:">
              Niederegger ist seit 1806 Weltmarke für Marzipan. DTC-Geschäft in über 100 Länder, Lebensmittel-Compliance (HACCP, Bio), Geschenk-Personalisierung und saisonale Peaks (Weihnachten/Ostern) sind hochkomplexe Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="UKSH und Forschungsexzellenz:">
              Universitätsklinikum Schleswig-Holstein mit Campus Lübeck und der Universität zu Lübeck (MedTech-Schwerpunkt) bilden eine hochspezialisierte Forschungs-Achse. Drittmittel, Ethikkommissionen und MDR-Studien sind dicht orchestriert.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 217000, label: "Einwohner Lübeck" },
            { value: 16000, suffix: "+", label: "Dräger-Mitarbeiter weltweit" },
            { value: 200, suffix: "+", label: "Possehl-Tochterfirmen" },
            { value: 1143, label: "Hanse-Gründung Lübeck" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Lübeck - seit 1143 Königin der Hanse
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Beatmungsgeräte MDR-zertifiziert werden und 200 Possehl-Töchter konsolidiert werden müssen, sind Workflows die Lebensader
          </IntroBox.Headline>
          <IntroBox.Subline>
            Drägerwerk mit 16.000 Mitarbeitern weltweit, Possehl-Holding mit über 15.000 Beschäftigten in über 30 Ländern, Niederegger als Welt-Marktführer für Marzipan - Lübecks Wirtschaft ist Holding-, MedTech- und Maritim-geprägt. Spezialisierte Workflows sind hier nicht Luxus, sondern Voraussetzung.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 8. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 6. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Lübeck</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={luebeckFaqs} />
        </div>
        <div className="mt-8">
          <Typo.Paragraph>
            Wie wir die Implementierung Schritt für Schritt strukturieren, beschreiben wir
            auf der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
