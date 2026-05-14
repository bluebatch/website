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
import { Gem, Banknote, CloudSun, Gauge } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-offenbach-am-main",
  rewrites: [
    {
      source: "/ai-workflows-offenbach-am-main",
      preHeadline: "AI Workflows Offenbach am Main",
      headline: "AI Workflows & Automatisierung in Offenbach am Main",
      metaTitle: "AI Workflows Offenbach am Main - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Offenbach am Main. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Offenbach am Main",
        "KI Automatisierung Offenbach am Main",
        "Workflow Automatisierung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-offenbach-am-main",
      preHeadline: "n8n Automation Offenbach am Main",
      headline: "n8n Automation in Offenbach am Main - Workflows automatisieren",
      metaTitle: "n8n Automation Offenbach am Main | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Offenbach am Main. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Offenbach am Main",
        "n8n Offenbach am Main",
        "Workflow Automation Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-offenbach-am-main",
      preHeadline: "n8n Offenbach am Main",
      headline: "n8n Agentur in Offenbach am Main",
      metaTitle: "n8n Offenbach am Main - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Offenbach am Main. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Offenbach am Main und Umgebung.",
      keywords: [
        "n8n Offenbach am Main",
        "n8n Agentur Offenbach am Main",
        "n8n Beratung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-offenbach-am-main",
      preHeadline: "Automation Offenbach am Main",
      headline: "Automation & Prozessoptimierung in Offenbach am Main",
      metaTitle: "Automation Offenbach am Main - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Offenbach am Main. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Offenbach am Main",
        "Prozessautomatisierung Offenbach am Main",
        "Workflow Automation Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-offenbach-am-main",
      preHeadline: "IT Dienstleister Offenbach am Main",
      headline: "IT Dienstleister in Offenbach am Main - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Offenbach am Main - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Offenbach am Main. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Offenbach am Main.",
      keywords: [
        "IT Dienstleister Offenbach am Main",
        "IT Service Offenbach am Main",
        "Digitalisierung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-offenbach-am-main",
      preHeadline: "KI Beratung Offenbach am Main",
      headline: "KI Beratung in Offenbach am Main - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Offenbach am Main - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Offenbach am Main. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Offenbach am Main",
        "KI Lösungen Offenbach am Main",
        "Künstliche Intelligenz Offenbach am Main",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-offenbach-am-main",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Offenbach am Main",
  slug: "offenbach-am-main",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Hanau",
    "Langen",
    "Dreieich",
    "Rodgau",
    "Dietzenbach",
    "Neu-Isenburg",
    "Maintal",
    "Mühlheim am Main",
    "Obertshausen",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Darmstadt", slug: "darmstadt" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Offenbach am Main | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Offenbacher Edelmetall, Banken und Daten: LBMA-Compliance für Heraeus, BaFin-Pipelines für Honda Bank, Wetter-APIs für DWD und US-SOX für Honeywell-Umfeld.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Offenbach",
      "n8n Offenbach",
      "Heraeus LBMA",
      "Honda Bank BaFin",
      "DWD Wetter API",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/offenbach-am-main.jpg", width: 1200, height: 630, alt: "Offenbach am Main – Heraeus, Honda Bank und Deutscher Wetterdienst" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/offenbach-am-main.jpg"] },
    alternates: { canonical: "/ki-agentur-offenbach-am-main" },
  };
}

const offenbachFaqs = [
  {
    question: "Heraeus-Zulieferer: kann n8n LBMA-Compliance abbilden?",
    answer:
      "Ja. LBMA-Responsible-Sourcing, GwG-Compliance, Charge-Tracking und Schmelzprotokolle in revisionssicheren n8n-Pipelines. Anbindung an SAP, branchenspezifische Edelmetall-ERPs und LBMA-Schnittstellen.",
  },
  {
    question: "Honda-Bank-Umfeld: was bringt n8n bei BaFin-Compliance?",
    answer:
      "MaRisk, AML/KYC, Sanktionslisten-Prüfung und BaFin-Reporting in n8n-Pipelines. Anbindung an Core-Banking-Systeme, AKTUR und BaFin-MVP-Portal – inklusive Vier-Augen-Freigabe.",
  },
  {
    question: "DWD- oder Wetter-API-Nutzer: wie helfen Workflows?",
    answer:
      "API-Workflows, OpenData-Lizenz-Management, Crisis-Communication-Pipelines und Wetter-Alert-Routing an Versicherer/Energieversorger. Anbindung an DWD-APIs, Mosmix und Climate-Data-Tools.",
  },
  {
    question: "Honeywell-Umfeld: kann n8n US-SOX und ITAR abbilden?",
    answer:
      "Ja. Monatsabschluss, IC-Abstimmung, OFAC-Sanktionslisten-Prüfung, ITAR-/EAR-Klassifikation und FCPA-konforme Lieferantenprüfung. Anbindung an SAP und Konzern-Konsolidierungssoftware.",
  },
  {
    question: "Frankfurt-Pendler-Effekt: wie helfen HR-Workflows?",
    answer:
      "Hybrid-Work-Verträge, Reisekosten-Workflows und A1-Bescheinigungen in n8n-Pipelines. Anbindung an SAP HCM, Workday und Active Directory – plus Steuer-Logik für Frankfurt-Pendler.",
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
              {overrides?.preHeadline ?? "Standort Offenbach – Edelmetall- und Banken-Stadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Offenbach – für Heraeus, Honda Bank und Wetterdienst"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Heraeus ist Welt-Marktführer für Edelmetalle und Sensortechnik, Honda Bank und Honeywell haben Hauptsitze in Offenbach und der Deutsche Wetterdienst sitzt vor Ort. Wir bauen Workflows für Edelmetall-Compliance, Banken-Reporting und Wetter-Daten-APIs.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/offenbach-am-main.jpg"
              alt="Offenbach am Main – Heraeus, Honda Bank und Deutscher Wetterdienst"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Offenbacher Edelmetall, Banken und Daten</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Gem className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Platinmetall- und LBMA-Workflows für Heraeus-Umfeld</Typo.H3>
            <Typo.Paragraph>
              LBMA-Responsible-Sourcing, GwG-Compliance, Charge-Tracking und Schmelzprotokolle in revisionssicheren n8n-Pipelines. Anbindung an SAP, branchenspezifische Edelmetall-ERPs und LBMA-Schnittstellen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Banknote className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BaFin- und Banken-Compliance-Workflows</Typo.H3>
            <Typo.Paragraph>
              MaRisk, AML/KYC, Sanktionslisten-Prüfung und BaFin-Reporting in n8n-Pipelines. Anbindung an Core-Banking-Systeme, AKTUR und BaFin-MVP-Portal.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <CloudSun className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Wetter-API- und OpenData-Lizenz-Workflows</Typo.H3>
            <Typo.Paragraph>
              API-Workflows, OpenData-Lizenz-Management, Crisis-Communication-Pipelines und Wetter-Alert-Routing an Versicherer/Energieversorger. Anbindung an DWD-APIs, Mosmix und Climate-Data-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Gauge className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>US-SOX- und ITAR-Workflows für Honeywell-Umfeld</Typo.H3>
            <Typo.Paragraph>
              Monatsabschluss, IC-Abstimmung, OFAC-Sanktionslisten-Prüfung, ITAR-/EAR-Klassifikation und FCPA-konforme Lieferantenprüfung. Anbindung an SAP und Konzern-Konsolidierungssoftware.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 134000, label: "Einwohner Offenbach" },
            { value: 15000, suffix: "+", label: "Heraeus-Mitarbeiter weltweit" },
            { value: 1851, label: "Heraeus-Gründung" },
            { value: 1, label: "DWD-Hauptsitz Deutschland" },
          ]}
        />
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Offenbacher Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Heraeus und Platinmetall-LBMA-Compliance:">
              Heraeus ist Welt-Marktführer für Edelmetalle (Platin, Palladium, Rhodium), Sensoren und Spezial-Beleuchtung. LBMA-Zertifizierung, GwG-Compliance und Charge-Tracking gehören in revisionssichere Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Honda Bank und Auto-Finanzierungs-BaFin-Compliance:">
              Honda Bank Europe in Offenbach betreibt Autofinanzierungen und Leasing. BaFin-Aufsicht, MaRisk, AML/KYC und Sanktionslisten-Prüfung sind Pflicht – mit revisionssicheren Compliance-Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Deutscher Wetterdienst und Wetter-API-Wirtschaft:">
              DWD in Offenbach liefert Wetter- und Klimadaten an Versicherer, Energieversorger und Logistik-Unternehmen. API-Workflows, OpenData-Lizenz-Management und Crisis-Communication-Pipelines sind Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Honeywell-Hauptsitz und Industriesensorik:">
              Honeywell mit Hauptsitz in Offenbach (Deutschland) liefert Industrie-, Building- und Aerospace-Sensorik. US-SOX, ITAR/EAR und FCPA-Compliance sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Frankfurt-Achse und Pendlerstadt:">
              Offenbach liegt an der Frankfurt-Achse mit hohen Pendlerströmen. Bahn-, Bank- und IT-Pendler erzeugen HR-, Reisekosten- und Hybrid-Work-Workflow-Bedarfe.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Offenbach – seit 1851 Heraeus-Stadt am Main
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Heraeus Platinmetalle für globale Industrie verarbeitet und Honda Bank Auto-Finanzierungen regelt, sind Workflows die regulatorische Schlagader
          </IntroBox.Headline>
          <IntroBox.Subline>
            Heraeus mit 15.000 Mitarbeitern weltweit, Honda Bank mit Autofinanzierungs-Portfolio, Honeywell-Hauptsitz und der Deutsche Wetterdienst (DWD) – Offenbach vereint Edelmetall-Verarbeitung, Banken-Compliance und Wetter-/Klima-Datenwirtschaft.
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
        <Typo.H2>Häufige Fragen aus Offenbach</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={offenbachFaqs} />
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
