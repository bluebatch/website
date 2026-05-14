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
import { Building2, Car, Recycle, Truck } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-neuss",
  rewrites: [
    {
      source: "/ai-workflows-neuss",
      preHeadline: "AI Workflows Neuss",
      headline: "AI Workflows & Automatisierung in Neuss",
      metaTitle: "AI Workflows Neuss - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Neuss. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Neuss",
        "KI Automatisierung Neuss",
        "Workflow Automatisierung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-neuss",
      preHeadline: "n8n Automation Neuss",
      headline: "n8n Automation in Neuss - Workflows automatisieren",
      metaTitle: "n8n Automation Neuss | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Neuss. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Neuss",
        "n8n Neuss",
        "Workflow Automation Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-neuss",
      preHeadline: "n8n Neuss",
      headline: "n8n Agentur in Neuss",
      metaTitle: "n8n Neuss - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Neuss. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Neuss und Umgebung.",
      keywords: [
        "n8n Neuss",
        "n8n Agentur Neuss",
        "n8n Beratung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-neuss",
      preHeadline: "Automation Neuss",
      headline: "Automation & Prozessoptimierung in Neuss",
      metaTitle: "Automation Neuss - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Neuss. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Neuss",
        "Prozessautomatisierung Neuss",
        "Workflow Automation Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-neuss",
      preHeadline: "IT Dienstleister Neuss",
      headline: "IT Dienstleister in Neuss - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Neuss - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Neuss. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Neuss.",
      keywords: [
        "IT Dienstleister Neuss",
        "IT Service Neuss",
        "Digitalisierung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-neuss",
      preHeadline: "KI Beratung Neuss",
      headline: "KI Beratung in Neuss - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Neuss - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Neuss. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Neuss",
        "KI Lösungen Neuss",
        "Künstliche Intelligenz Neuss",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-neuss",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Neuss",
  slug: "neuss",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Dormagen",
    "Grevenbroich",
    "Kaarst",
    "Meerbusch",
    "Korschenbroich",
    "Jüchen",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Köln", slug: "koeln" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Neuss | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Neusser Industrie und Logistik: US-SOX für 3M-Deutschland, IATF-Pipelines für Pierburg, EU-CBAM für Hydro Aluminium und multimodale Hafen-Workflows für den Rheinhafen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Neuss",
      "n8n Neuss",
      "3M Deutschland SOX",
      "Pierburg IATF",
      "Rheinhafen Zoll",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/neuss.jpg", width: 1200, height: 630, alt: "Neuss - 3M, Pierburg und Rheinhafen-Logistik" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/neuss.jpg"] },
    alternates: { canonical: "/ki-agentur-neuss" },
  };
}

const neussFaqs = [
  {
    question: "3M-Deutschland-Umfeld: kann n8n US-SOX abbilden?",
    answer:
      "Ja. Monatsabschluss, IC-Abstimmung, OFAC-Sanktionslisten-Prüfung und FCPA-konforme Lieferantenprüfung in n8n-Pipelines. Anbindung an SAP, US-GAAP-Reporting-Tools und Konzern-Konsolidierungssoftware.",
  },
  {
    question: "Pierburg- oder Rheinmetall-Zulieferer: wie hilft IATF-Automatisierung?",
    answer:
      "PPAP-Pakete, EDI-Anbindung an Covisint, OPS-AT und Premium-OEMs, JIS-/JIT-Lieferpipelines und 8D-Reports in n8n-Pipelines. SAP QM, MES und PLM integriert.",
  },
  {
    question: "Aluminium-Recycling: was bringt n8n bei EU-CBAM?",
    answer:
      "CO2-Grenzausgleichs-Reporting nach EU-CBAM, Recycling-Quoten-Dokumentation und IATF-konforme Walzwerk-QM-Workflows in n8n-Pipelines. Anbindung an SAP, MES und Recycling-Tracking-Tools.",
  },
  {
    question: "Rheinhafen-Spedition: wie skalieren Zoll-Workflows?",
    answer:
      "Containerterminal-, ATLAS-Zoll-, Gefahrgut- und EDI-Workflows mit Reedereien und DB Cargo. Anbindung an DAKOSY, HHLA und Hafenbetreiber - reduziert manuelle Zoll-Bearbeitung um 60-80 %.",
  },
  {
    question: "Wir sind Neusser Mittelstand: wo lohnt sich KI zuerst?",
    answer:
      "Bei Eingangsrechnungs-Verarbeitung, bei Lieferanten-Sanktionslisten-Prüfung und bei multilingualem Customer Service. Drei klassische Industrie-Pain-Points mit klarem ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Neuss - Quirinusstadt am Rhein"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Neuss - für 3M, Pierburg, Hydro Aluminium und Logistik"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              3M Deutschland-Hauptsitz, Pierburg-Antriebstechnik (Rheinmetall), Hydro Aluminium und der Rheinhafen Neuss prägen den Standort. Wir bauen Workflows für US-Konzern-Compliance, IATF-Automotive-Zulieferung und multimodale Hafen-Logistik.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/neuss.jpg"
              alt="Neuss - 3M, Pierburg und Rheinhafen-Logistik"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Neusser Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="3M Deutschland und US-SOX-Compliance:">
              3M-Deutschland-Hauptsitz Neuss unterliegt US-Konzern-Compliance (SOX, FCPA, US-GAAP). Monatsabschluss-Workflows, IC-Abstimmung und Lieferanten-Sanktionslisten-Prüfung (OFAC) sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Pierburg und Rheinmetall-Konzern-Automotive:">
              Pierburg (Tochter Rheinmetall) liefert Antriebskomponenten an Premium-OEMs (BMW, Mercedes, Audi). IATF-16949, PPAP, JIS-/JIT-Lieferpipelines und EDI-Anbindung an Covisint sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Hydro Aluminium und Werkstoff-Recycling:">
              Hydro Aluminium Rolled Products mit Werk Grevenbroich (nahe Neuss) ist Marktführer für Aluminium-Flachprodukte. EU-CBAM (CO2-Grenzausgleich), Recycling-Quoten und IATF-konforme Walzwerke.
            </NumberedList.Item>
            <NumberedList.Item title="Rheinhafen Neuss und multimodale Logistik:">
              Zweitgrößter deutscher Binnenhafen mit Bahn-, LKW- und Rhein-Schiff-Verkehr. Containerterminal, ATLAS-Zoll, Gefahrgut-Dokumentation und EDI mit Reedereien sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Krefeld-Düsseldorf-Köln-Achse:">
              Neuss liegt in der Industrie-Achse Krefeld-Düsseldorf-Köln. Pendlerströme, Konzern-Verflechtungen (Bayer, Henkel, RWE) und Logistik-Knoten erfordern integrierte HR-, Compliance- und Logistik-Workflows.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Neusser Industrie und Logistik</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>US-SOX- und Konzern-Compliance-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Monatsabschluss, IC-Abstimmung, OFAC-Sanktionslisten-Prüfung und FCPA-konforme Lieferantenprüfung. Anbindung an SAP, US-GAAP-Reporting-Tools und Konzern-Konsolidierungssoftware.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IATF-Pipelines für Pierburg-Automotive-Umfeld</Typo.H3>
            <Typo.Paragraph>
              PPAP-Pakete, EDI-Anbindung an Covisint, OPS-AT und Premium-OEMs, JIS-/JIT-Lieferpipelines und 8D-Reports. SAP QM, MES und PLM integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Recycle className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>EU-CBAM- und Aluminium-Recycling-Workflows</Typo.H3>
            <Typo.Paragraph>
              CO2-Grenzausgleichs-Reporting nach EU-CBAM, Recycling-Quoten-Dokumentation und IATF-konforme Walzwerk-QM-Workflows. Anbindung an SAP, MES und Recycling-Tracking-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Multimodale Hafen- und Zoll-Workflows</Typo.H3>
            <Typo.Paragraph>
              Containerterminal-, ATLAS-Zoll-, Gefahrgut- (IMDG, ADR) und EDI-Workflows mit Reedereien und Bahn (DB Cargo). Anbindung an DAKOSY, HHLA und Hafenbetreiber.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Neuss - 3M-Deutschland-Hauptsitz und Rheinhafen-Drehkreuz
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo 3M Deutschland US-Konzern-Reporting und Pierburg IATF-Audits abarbeiten, müssen Workflows global synchronisiert sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            3M-Deutschland-Hauptsitz, Pierburg (Rheinmetall-Konzern), Hydro Aluminium und der zweitgrößte deutsche Binnenhafen - Neuss ist Industrie- und Logistik-Drehkreuz im Rheinland. US-SOX, IATF und Hafen-Zoll sind die zentralen Workflow-Themen.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 158000, label: "Einwohner Neuss" },
            { value: 2, label: "Größter deutscher Binnenhafen" },
            { value: 1000, suffix: "+", label: "3M-Beschäftigte Neuss" },
            { value: 1875, label: "Pierburg-Gründungsjahr" },
          ]}
        />
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
        <Typo.H2>Häufige Fragen aus Neuss</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={neussFaqs} />
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
