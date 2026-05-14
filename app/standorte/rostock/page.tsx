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
import { Anchor, Ship, Shield, Microscope } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-rostock",
  rewrites: [
    {
      source: "/ai-workflows-rostock",
      preHeadline: "AI Workflows Rostock",
      headline: "AI Workflows & Automatisierung in Rostock",
      metaTitle: "AI Workflows Rostock - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Rostock. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Rostock",
        "KI Automatisierung Rostock",
        "Workflow Automatisierung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-rostock",
      preHeadline: "n8n Automation Rostock",
      headline: "n8n Automation in Rostock - Workflows automatisieren",
      metaTitle: "n8n Automation Rostock | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Rostock. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Rostock",
        "n8n Rostock",
        "Workflow Automation Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-rostock",
      preHeadline: "n8n Rostock",
      headline: "n8n Agentur in Rostock",
      metaTitle: "n8n Rostock - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Rostock. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Rostock und Umgebung.",
      keywords: [
        "n8n Rostock",
        "n8n Agentur Rostock",
        "n8n Beratung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-rostock",
      preHeadline: "Automation Rostock",
      headline: "Automation & Prozessoptimierung in Rostock",
      metaTitle: "Automation Rostock - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Rostock. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Rostock",
        "Prozessautomatisierung Rostock",
        "Workflow Automation Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-rostock",
      preHeadline: "IT Dienstleister Rostock",
      headline: "IT Dienstleister in Rostock - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Rostock - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Rostock. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Rostock.",
      keywords: [
        "IT Dienstleister Rostock",
        "IT Service Rostock",
        "Digitalisierung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-rostock",
      preHeadline: "KI Beratung Rostock",
      headline: "KI Beratung in Rostock - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Rostock - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Rostock. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Rostock",
        "KI Lösungen Rostock",
        "Künstliche Intelligenz Rostock",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-rostock",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Rostock",
  slug: "rostock",
  bundesland: "Mecklenburg-Vorpommern",
  publish: false,
  nearbySmall: [
    "Wismar",
    "Güstrow",
    "Bad Doberan",
  ],
  crossReference: [
    { name: "Schwerin", slug: "schwerin" },
    { name: "Lübeck", slug: "luebeck" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Rostock | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Rostocker Hafen, Kreuzfahrt und Forschung: Multi-Markt-Pipelines für AIDA, Hafen-Zoll für Ostsee-Reedereien, BAFA-Exportkontrolle für Marine und Drittmittel-Workflows für Uni Rostock und IOW.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Rostock",
      "n8n Rostock",
      "AIDA Workflow",
      "Hafen Rostock Zoll",
      "Marine Compliance",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/rostock.jpg", width: 1200, height: 630, alt: "Rostock – Hafenstadt und MV Werften an der Ostsee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/rostock.jpg"] },
    alternates: { canonical: "/ki-agentur-rostock" },
  };
}

const rostockFaqs = [
  {
    question: "AIDA-Lieferant oder -Partner – wie hilft Automatisierung?",
    answer:
      "Bei Multi-Markt-Buchungspipelines, Lieferanten-Onboarding, Bordversorgungs-Logistik und After-Sales. n8n verbindet Buchungs-Systeme, Bordsysteme, Concierge und CRM zu durchgängigen Pipelines mit revisionssicherem Audit-Trail.",
  },
  {
    question: "Hafen Rostock-Spedition: was bringt n8n konkret?",
    answer:
      "Hafenanmeldungen, ATLAS-Zoll, Gefahrgut-Dokumentation nach IMDG/ADR und EDI mit Stena Line, Scandlines und TT-Line in automatisierten Pipelines. Anbindung an DAKOSY und Hafenbetreiber inklusive.",
  },
  {
    question: "Marine- und Verteidigungs-Zulieferer: ist BAFA automatisierbar?",
    answer:
      "Ja. ITAR-/EAR-Klassifikation, Endverbleibserklärungen, BAFA-ELAN-K2-Antragstellung und Sanktionslisten-Prüfung in n8n-Pipelines mit Vier-Augen-Freigabe. Anbindung an SAP GTS und Compliance-Tools.",
  },
  {
    question: "Wir sind Tourismus-Mittelstand Warnemünde: wo hilft KI?",
    answer:
      "Bei Buchungs-Anfrage-Klassifikation, bei mehrsprachigem Concierge-Service mit AI Agents und bei saisonaler Peak-Skalierung. Hotellerie, Restaurants und Ausflugsanbieter profitieren überproportional.",
  },
  {
    question: "Uni Rostock und IOW: wie skaliert Drittmittel-Reporting?",
    answer:
      "DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Quartals-Reports. Anbindung an SAP CO, easy-Online, ECAS und Forschungsdatenbanken wie PANGAEA – mit revisionssicherem Audit-Trail.",
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
              {overrides?.preHeadline ?? "Standort Rostock – Hanse- und Hafenstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Rostock – für Hafen, Marine, AIDA und Universität"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Rostock ist Mecklenburg-Vorpommerns größter Hafen, Heimat von AIDA Cruises, einer Marine-Tradition und der ältesten Universität im Ostseeraum (seit 1419). Wir bauen Workflows für maritime Logistik, Kreuzfahrt-Operations und Tourismus.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/rostock.jpg"
              alt="Rostock – Hafenstadt und MV Werften an der Ostsee"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Rostock – seit 1419 Universitätsstadt an der Ostsee
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo AIDA Reisen für 70 Märkte buchbar macht und Liebherr Marine 24/7-Service liefert, müssen Workflows global skalieren
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rostock ist Deutschlands viertgrößter Seehafen, Marine-Standort, AIDA-Hauptsitz und Universitätsstadt. Maritime Logistik, Kreuzfahrt-Bordbetrieb, Tourismus an der Ostseeküste und Forschungs-Drittmittel sind die Workflow-Themen.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 210000, label: "Einwohner Rostock" },
            { value: 1419, label: "Gründung Universität Rostock" },
            { value: 70, suffix: "+", label: "AIDA-Märkte weltweit" },
            { value: 4, label: "Hafen-Rang in Deutschland" },
          ]}
        />
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Rostocker Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="AIDA Cruises und Multi-Markt-Buchungspipelines:">
              AIDA mit Hauptsitz Rostock bedient 70+ Märkte mit komplexen Bordreservierungs-Workflows. Mehrsprachige Buchungs-Pipelines, Bordkredit, Versicherungsanbindung und Concierge-Service skalieren nicht ohne tiefe Automatisierung.
            </NumberedList.Item>
            <NumberedList.Item title="Hafen Rostock und Skandinavien-Verkehr:">
              Rostock-Warnemünde ist Deutschlands größter Ostseehafen für Ro-Ro- und Fährverkehr nach Skandinavien (Stena Line, Scandlines, TT-Line). Hafenanmeldungen, Gefahrgut und Zoll sind Workflow-intensiv.
            </NumberedList.Item>
            <NumberedList.Item title="Liebherr-MCCtec und Schiffskrananbau:">
              Liebherr-MCCtec Rostock baut Schiffs- und Hafenkrane für Hamburg, Antwerpen und globale Kunden. After-Sales-Service auf hoher See, Ersatzteil-Logistik und IATF-/ISO-Compliance gehören in spezialisierte Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="MV Werften, Marine und Verteidigung:">
              Marine-Standort Hohe Düne, Marinestützpunkt Rostock und MV-Werften-Erbe (Neptun Werft, Volkswerft) prägen die Industrie. Sicherheitsfreigaben, BAFA-Exportkontrolle und Verteidigungs-Compliance sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Rostock und Ostsee-Forschung:">
              Älteste Universität im Ostseeraum (1419) mit Schwerpunkten Maritimes, Maschinenbau und Medizin. IOW (Leibniz-Institut für Ostseeforschung), DESY-Partnerschaften und Drittmittel-Reporting sind Pipeline-Themen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Rostocker Hafen, Kreuzfahrt und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Anchor className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hafen- und Skandinavien-Zoll-Workflows</Typo.H3>
            <Typo.Paragraph>
              Hafenanmeldungen, ATLAS-Zoll-Anbindung, Gefahrgut nach IMDG/ADR und EDI mit Reedereien (Stena Line, Scandlines, TT-Line). Schnittstellen zu DAKOSY und Hafenbetreiber.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Ship className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>AIDA-Multi-Markt-Buchungs- und Bordbetriebs-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Mehrsprachige Buchungspipelines (70+ Märkte), Bordkredit, Versicherungsanbindung und Concierge-Workflows. Integration zwischen Buchungs-Systemen, Bordsystemen und CRM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Shield className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BAFA-Exportkontrolle und Verteidigungs-Compliance</Typo.H3>
            <Typo.Paragraph>
              ITAR-/EAR-Klassifikation, Endverbleibserklärungen, BAFA-Antragstellung und Sanktionslisten-Prüfung für Marine- und Verteidigungslieferungen. SAP GTS und BAFA-ELAN-K2 angebunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Microscope className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Ostsee-Forschungs-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an SAP CO, easy-Online und Forschungsdatenbanken wie PANGAEA für IOW-Projekte.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
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
        <Typo.H2>Häufige Fragen aus Rostock</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={rostockFaqs} />
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
