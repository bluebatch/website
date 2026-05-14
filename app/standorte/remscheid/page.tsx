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
import { Wrench, Flame, ShieldCheck, Headphones } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-remscheid",
  rewrites: [
    {
      source: "/ai-workflows-remscheid",
      preHeadline: "AI Workflows Remscheid",
      headline: "AI Workflows & Automatisierung in Remscheid",
      metaTitle: "AI Workflows Remscheid - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Remscheid. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Remscheid",
        "KI Automatisierung Remscheid",
        "Workflow Automatisierung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-remscheid",
      preHeadline: "n8n Automation Remscheid",
      headline: "n8n Automation in Remscheid - Workflows automatisieren",
      metaTitle: "n8n Automation Remscheid | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Remscheid. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Remscheid",
        "n8n Remscheid",
        "Workflow Automation Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-remscheid",
      preHeadline: "n8n Remscheid",
      headline: "n8n Agentur in Remscheid",
      metaTitle: "n8n Remscheid - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Remscheid. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Remscheid und Umgebung.",
      keywords: [
        "n8n Remscheid",
        "n8n Agentur Remscheid",
        "n8n Beratung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-remscheid",
      preHeadline: "Automation Remscheid",
      headline: "Automation & Prozessoptimierung in Remscheid",
      metaTitle: "Automation Remscheid - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Remscheid. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Remscheid",
        "Prozessautomatisierung Remscheid",
        "Workflow Automation Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-remscheid",
      preHeadline: "IT Dienstleister Remscheid",
      headline: "IT Dienstleister in Remscheid - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Remscheid - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Remscheid. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Remscheid.",
      keywords: [
        "IT Dienstleister Remscheid",
        "IT Service Remscheid",
        "Digitalisierung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-remscheid",
      preHeadline: "KI Beratung Remscheid",
      headline: "KI Beratung in Remscheid - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Remscheid - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Remscheid. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Remscheid",
        "KI Lösungen Remscheid",
        "Künstliche Intelligenz Remscheid",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-remscheid",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Remscheid",
  slug: "remscheid",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hückeswagen",
    "Radevormwald",
    "Wermelskirchen",
  ],
  crossReference: [
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Solingen", slug: "solingen" },
    { name: "Leverkusen", slug: "leverkusen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Remscheid | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Remscheider Werkzeug- und Heizungs-Unternehmen: BAFA/KfW-Wärmepumpen-Pipelines für Vaillant, Premium-Händler-Workflows für Knipex und Stahlwille, ISO-9001-QM und After-Sales-Automatisierung.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Remscheid",
      "n8n Remscheid",
      "Vaillant Workflow",
      "Werkzeugindustrie Automatisierung",
      "BAFA Wärmepumpe",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/remscheid.jpg", width: 1200, height: 630, alt: "Remscheid - Stadt der 1000 Werkzeuge und Heimat von Vaillant" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/remscheid.jpg"] },
    alternates: { canonical: "/ki-agentur-remscheid" },
  };
}

const remscheidFaqs = [
  {
    question: "Vaillant-Fachhandwerker - wie hilft Automatisierung bei BAFA/KfW?",
    answer:
      "Workflows orchestrieren Förderanträge, technische Unterlagen, Bestellfreigaben und Verwendungsnachweise zwischen Handwerker-Portal, ERP, BAFA-Schnittstelle und Kundenakte. Die Antragsbearbeitung verkürzt sich von Wochen auf Tage.",
  },
  {
    question: "Knipex- oder Stahlwille-Händler: was bringt n8n konkret?",
    answer:
      "Händler-Onboarding mit MOQ-Verträgen, EAN-Pflege via PIM, automatische Marketing-Asset-Verteilung und Bestellabwicklung - inklusive Marktschutz-Logik für Premium-Marken. Reduziert manuelle Vertriebs-Innendienst-Last spürbar.",
  },
  {
    question: "Wir sind Werkzeug-Mittelstand - wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskalkulation für Sonderwerkzeuge (CPQ), bei automatischer Lieferanten-Sanktionslisten-Prüfung und bei der Reklamations-Klassifikation mit AI Agents. Drei Bereiche, die Innendienst entlasten.",
  },
  {
    question: "Können wir QM nach ISO 9001 mit n8n abbilden?",
    answer:
      "Ja. Werkstoffprüfberichte, Härteprüfungen, Toleranzmessungen und Audit-Reports werden in revisionssicheren n8n-Workflows orchestriert. Anbindung an MES, ERP und QM-Spezial-Tools wie CAQ AG inklusive.",
  },
  {
    question: "After-Sales mit 50.000+ Fachhandwerkern - wie skaliert das?",
    answer:
      "AI-Agent-Vorklassifikation für eingehende Service-Tickets, automatische Ersatzteil-Bestellung mit Verfügbarkeitsprüfung und Garantie-Workflow mit Vier-Augen-Freigabe. Wir reduzieren die Bearbeitungszeit pro Ticket um 50-70 %.",
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
              {overrides?.preHeadline ?? "Standort Remscheid - Stadt der 1000 Werkzeuge"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Remscheid - für Werkzeugindustrie und Vaillant-Heizungstechnik"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Knipex, Stahlwille, Stabila, Hazet und Vaillant prägen Remscheid. Wir bauen Workflows für ISO-9001-konforme Werkzeug-Fertigung, Heizungs-Wärmepumpen-Förderprogramme (BAFA/KfW) und händlernahe CPQ-Pipelines.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/remscheid.jpg"
              alt="Remscheid - Stadt der 1000 Werkzeuge und Heimat von Vaillant"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Remscheider Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Vaillant und die Wärmepumpen-Energiewende:">
              Vaillant beschäftigt 14.000 Menschen weltweit, davon 2.500+ in Remscheid. Heizungswechsel mit BAFA-/KfW-Förderung erfordert lückenlose Antrags-, Bestell- und Installations-Dokumentation - vom Fachhandwerker bis zur Fördergeld-Auszahlung.
            </NumberedList.Item>
            <NumberedList.Item title="Premium-Werkzeug-Fachhandel mit über 100 Ländern:">
              Knipex (Zangen), Stahlwille (Drehmoment-Tools), Stabila (Wasserwaagen), Hazet (Werkstattausrüstung) - Premium-Marken mit globalem Fachhandels-Vertrieb. Händler-Onboarding, MOQ-Verträge und EAN-Pflege sind komplexe Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="ISO-9001- und Fachhandwerks-Qualitätsanforderungen:">
              Werkzeuge für Profihandwerker unterliegen DIN/ISO-Prüfvorschriften. Werkstoffprüfberichte, Härteprüfungen und Toleranzmessungen werden in QM-Pipelines dokumentiert.
            </NumberedList.Item>
            <NumberedList.Item title="After-Sales und Garantie-Workflows bei Heizgeräten:">
              Vaillant-Heizgeräte haben 5+ Jahre Garantie und werden über 50.000 Fachhandwerker installiert. Service-Tickets, Ersatzteil-Bestellungen und Garantie-Erstattungen sind ein Workflow-intensiver Geschäftsbereich.
            </NumberedList.Item>
            <NumberedList.Item title="Bergische Universität Wuppertal und Handwerkskammer-Anbindung:">
              Ausbildungspartnerschaften und duale Studiengänge mit der BUW erfordern HR-Workflows zwischen Hochschulportal, SAP HCM, Active Directory und IHK/HWK-Systemen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 114000, label: "Einwohner Remscheid" },
            { value: 1867, label: "Markenzeichen \"Stadt der 1000 Werkzeuge\"" },
            { value: 2500, suffix: "+", label: "Vaillant-Beschäftigte am Standort" },
            { value: 50000, suffix: "+", label: "Vaillant-Fachhandwerker-Partner" },
          ]}
        />
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Remscheider Werkzeug- und Heizungs-Unternehmen</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wrench className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Premium-Werkzeug-Händler-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Händler-Onboarding, MOQ-Vereinbarungen, EAN-/GTIN-Pflege und Bestellabwicklung mit globalen Distributoren. SAP-, NetSuite- und PIM-Anbindung an Händlerportale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Flame className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BAFA- und KfW-Förder-Workflows für Wärmepumpen</Typo.H3>
            <Typo.Paragraph>
              Förderanträge, Bestellfreigaben, Installationsdokumentation und Verwendungsnachweise automatisiert zwischen Fachhandwerker, Hersteller und Förderbanken. Schnittstellen zu BAFA-/KfW-Portalen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>ISO-9001-konforme QM-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Werkstoffprüfberichte, Härteprüfungen, Toleranzmessungen und Audit-Reports in revisionssicheren n8n-Workflows. Anbindung an MES, QM-Software und ERP.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Headphones className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>After-Sales- und Garantie-Workflows</Typo.H3>
            <Typo.Paragraph>
              Service-Tickets, Ersatzteil-Bestellungen und Garantie-Erstattungen orchestriert zwischen Salesforce Service Cloud, SAP, Fachhandwerker-Portalen und Logistik. KI-gestützte Ticket-Klassifikation.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Remscheid - seit 1867 "Stadt der 1000 Werkzeuge"
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Werkzeuge weltweit Fachhandelsstandards setzen und Wärmepumpen die Energiewende tragen, müssen Workflows hochpräzise sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Knipex, Stahlwille und Stabila gehören zu den Premium-Marken im professionellen Werkzeugmarkt. Vaillant ist Europas führender Heizungshersteller. Beide Welten verlangen spezialisierte Workflows - für Händler-Pipelines, BAFA/KfW-Förderdokumentation und After-Sales-Service.
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
        <Typo.H2>Häufige Fragen aus Remscheid</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={remscheidFaqs} />
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
