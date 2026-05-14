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
import { Landmark, Wine, GraduationCap, Languages } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-trier",
  rewrites: [
    {
      source: "/ai-workflows-trier",
      preHeadline: "AI Workflows Trier",
      headline: "AI Workflows & Automatisierung in Trier",
      metaTitle: "AI Workflows Trier - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Trier. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Trier",
        "KI Automatisierung Trier",
        "Workflow Automatisierung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-trier",
      preHeadline: "n8n Automation Trier",
      headline: "n8n Automation in Trier - Workflows automatisieren",
      metaTitle: "n8n Automation Trier | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Trier. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Trier",
        "n8n Trier",
        "Workflow Automation Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-trier",
      preHeadline: "n8n Trier",
      headline: "n8n Agentur in Trier",
      metaTitle: "n8n Trier - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Trier. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Trier und Umgebung.",
      keywords: [
        "n8n Trier",
        "n8n Agentur Trier",
        "n8n Beratung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-trier",
      preHeadline: "Automation Trier",
      headline: "Automation & Prozessoptimierung in Trier",
      metaTitle: "Automation Trier - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Trier. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Trier",
        "Prozessautomatisierung Trier",
        "Workflow Automation Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-trier",
      preHeadline: "IT Dienstleister Trier",
      headline: "IT Dienstleister in Trier - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Trier - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Trier. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Trier.",
      keywords: [
        "IT Dienstleister Trier",
        "IT Service Trier",
        "Digitalisierung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-trier",
      preHeadline: "KI Beratung Trier",
      headline: "KI Beratung in Trier - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Trier - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Trier. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Trier",
        "KI Lösungen Trier",
        "Künstliche Intelligenz Trier",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-trier",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Trier",
  slug: "trier",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Konz",
    "Schweich",
    "Merzig",
    "Wittlich",
    "Saarburg",
  ],
  crossReference: [
    { name: "Saarbrücken", slug: "saarbruecken" },
    { name: "Koblenz", slug: "koblenz" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Trier | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Trierer Tourismus, Weinbau und Forschung: UNESCO-Ticketing mit Alipay/WeChat Pay, VDP-konforme Weingut-Pipelines, Drittmittel-Workflows für Uni Trier und Frontalier-Lohnabrechnung Luxemburg.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Trier",
      "n8n Trier",
      "Mosel Weingut Workflow",
      "UNESCO Tourismus",
      "Frontalier Luxemburg",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/trier.jpg", width: 1200, height: 630, alt: "Trier - Älteste Stadt Deutschlands und UNESCO-Welterbe" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/trier.jpg"] },
    alternates: { canonical: "/ki-agentur-trier" },
  };
}

const trierFaqs = [
  {
    question: "Tourismus mit hohem China-Anteil - wie hilft Automatisierung?",
    answer:
      "Mehrsprachige Ticketing- und Booking-Pipelines mit Alipay/WeChat Pay, automatischer Übersetzung von Bestätigungs-Mails und Group-Booking-Logik. Anbindung an Reservix, Eventim und CRM-Systeme.",
  },
  {
    question: "Mosel-Weingut mit DTC-Versand: was bringt n8n?",
    answer:
      "Bestell-, Altersverifikations-, Mehrwertsteuer- und Versandpipelines zwischen Shopify, Weinbau-ERP (z.B. Lobster, weinbau-software.de) und Versanddienstleistern. Steuermarken-Bestellung beim Hauptzollamt automatisiert.",
  },
  {
    question: "Können wir VDP- und EU-Bio-Compliance abbilden?",
    answer:
      "Ja. Weinkataster, Bio-Zertifizierung, EU-Datenbank-Meldungen und VDP-Klassifikationsanträge in revisionssicheren Pipelines. Audit-Trail für IFS-Wine- und Bio-Audits inklusive.",
  },
  {
    question: "Frontalier-Lohnabrechnung Luxemburg - ist das automatisierbar?",
    answer:
      "Ja. Grenzüberschreitende Lohn-, Sozialversicherungs- und Steuer-Workflows zwischen DATEV/Sage und luxemburgischen Behörden. Frontalier-Bescheinigungen, A1-Bescheinigungen und Quartalsreports automatisch generiert.",
  },
  {
    question: "Wir sind Trierer Mittelstand - wo lohnt sich KI zuerst?",
    answer:
      "Bei Eingangsrechnungs-Verarbeitung, bei Tourismus-Anfrage-Klassifikation und bei Lieferanten-Onboarding. Drei Bereiche, die Innendienst spürbar entlasten - mit ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Trier - Älteste Stadt Deutschlands"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Trier - für UNESCO-Tourismus, Mosel-Weinbau und Universität"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Trier ist mit Porta Nigra, Kaiserthermen und Konstantinbasilika UNESCO-Welterbe und Tourismus-Magnet. Mosel-Weinbau, Universität Trier und Karl-Marx-Erbe prägen die Stadt. Wir bauen Workflows für Tourismus-Logistik, Weingüter und Hochschul-Verwaltung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/trier.jpg"
              alt="Trier - Älteste Stadt Deutschlands und UNESCO-Welterbe"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Trierer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="UNESCO-Welterbe und China-Tourismus:">
              Porta Nigra, Kaiserthermen und Konstantinbasilika locken über 1,5 Mio. Übernachtungsgäste - ein hoher Anteil aus China (Karl-Marx-Geburtshaus). Mehrsprachiges Ticketing, Group-Booking und chinesische Bezahlmethoden (Alipay, WeChat Pay) gehören in Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="Mosel-Weinbau und VDP-Zertifizierung:">
              Hunderte Weingüter im Mosel-Tal (Weinkulturlandschaft Mosel) liefern Spitzenrieslinge nach VDP-Standard. Weinkataster, EU-Bio-Verordnung, Steuermarken-Pflicht und DTC-Versand erfordern automatisierte Compliance-Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Trier und IRB-Lehrstuhl:">
              12.000 Studierende, starker Fokus auf Rechtswissenschaften, Sinologie und Umweltwissenschaften. Das Institut für Rechtspolitik (IRB) und Drittmittel-Projekte erzeugen viel Förder-Verwaltungs-Last.
            </NumberedList.Item>
            <NumberedList.Item title="Karl-Marx-Geburtshaus und China-Diplomatie:">
              Das Karl-Marx-Geburtshaus ist Pilgerstätte für chinesische Kommunal- und Wirtschaftsdelegationen. Diplomatische Empfänge, Geschenk-Logistik und mehrsprachige Reporting-Workflows zwischen Stadt, Friedrich-Ebert-Stiftung und chinesischen Behörden.
            </NumberedList.Item>
            <NumberedList.Item title="Pendlerstadt mit Luxemburg-Achse:">
              Über 25.000 Pendler arbeiten täglich in Luxemburg. Lohnabrechnung, grenzüberschreitende Sozialversicherung (Frontalier-Status) und Steuerfragen sind Workflow-Themen für Personaldienstleister und Steuerberater.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 110000, label: "Einwohner Trier" },
            { value: 1500000, suffix: "+", label: "Übernachtungen pro Jahr" },
            { value: 9, label: "UNESCO-Welterbe-Stätten" },
            { value: 25000, suffix: "+", label: "Pendler nach Luxemburg" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Augusta Treverorum - seit Kaiser Augustus römisches Zentrum
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo UNESCO-Welterbe, Mosel-Weinbau und Karl-Marx-Erbe zusammentreffen, müssen Workflows kulturell-tourismus-spezifisch sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            1,5 Millionen Übernachtungen pro Jahr, neun UNESCO-Welterbe-Stätten, hunderte Mosel-Weingüter und 12.000 Studierende an der Universität - Trier vereint Tourismus, Wein, Forschung und Karl-Marx-Pilgerstätte (besonders aus China). Diese Mischung verlangt spezialisierte Pipelines.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Trierer Tourismus, Weinbau und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>UNESCO-Tourismus- und mehrsprachiges Ticketing</Typo.H3>
            <Typo.Paragraph>
              Mehrsprachige Ticketing-Pipelines (DE/EN/CN/FR), Group-Booking-Workflows und Bezahlmethoden für China (Alipay, WeChat Pay) und EU. Anbindung an Reservix, Eventim und CRM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wine className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VDP-konforme Weingut-Workflows</Typo.H3>
            <Typo.Paragraph>
              Weinkataster, Steuermarken-Workflows, EU-Bio-Verordnung und VDP-Klassifikation. DTC-Versand zwischen Weinbau-ERP, Shopify und Versanddienstleistern - mit Altersverifikation und Mehrwertsteuer-Logik.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Forschungs-Workflows Uni Trier</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an SAP CO, easy-Online und Hochschul-Verwaltungssystem (HISinOne).
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Languages className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Frontalier- und Luxemburg-Pendler-Lohnabrechnung</Typo.H3>
            <Typo.Paragraph>
              Grenzüberschreitende Lohn-, Sozialversicherungs- und Steuer-Workflows zwischen DATEV/Sage, luxemburgischen Behörden und CCSS. Automatische Frontalier-Bescheinigungen und Quartals-Reports.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 7.5. Bonus — Trierer Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Fünf Trierer Eigenheiten</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="UNESCO-Welterbe-Tourismus.">
              Porta Nigra, Konstantinbasilika, Kaiserthermen - größte
              Römerbauten-Sammlung nördlich der Alpen. Workflows für
              Tourismus-Marketing, Gästekarten und Saison-Personal.
            </NumberedList.Item>
            <NumberedList.Item title="VDP-Weingüter an der Mosel.">
              Steillagen-Riesling als Welt-Premium. Workflows für AP-Nummer,
              VDP-Klassifikation, Direktvermarktung und Export in die USA und
              Asien mit Zoll- und Etiketten-Pflichten.
            </NumberedList.Item>
            <NumberedList.Item title="Karl-Marx-Haus und Geburtsstadt-Identität.">
              Forschungsstelle und Museum mit internationalem Publikum,
              Stiftungs-Buchhaltung und wissenschaftliche Drittmittel.
            </NumberedList.Item>
            <NumberedList.Item title="Frontalier nach Luxemburg.">
              Über 25.000 Pendler aus der Region Trier in Großherzogtum.
              Lohn- und Steuer-Workflows zwischen DATEV/Sage, CCSS und ADEM.
              Quartals-Bescheinigungen und Krankenversicherungs-Abstimmung.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Trier mit Schwerpunkt Rechts- und Wirtschaftswissenschaften.">
              Über 12.000 Studierende, EU-Förderprogramme dank Grenzlage,
              Drittmittel-Workflows mit Luxemburg-Forschungsverbund.
            </NumberedList.Item>
          </NumberedList>
        </div>
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
        <Typo.H2>Häufige Fragen aus Trier</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={trierFaqs} />
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
