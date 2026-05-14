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
import { Cookie, Building, Newspaper, HeartHandshake } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bielefeld",
      preHeadline: "AI Workflows Bielefeld",
      headline: "AI Workflows & Automatisierung in Bielefeld",
      metaTitle: "AI Workflows Bielefeld - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bielefeld. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bielefeld",
        "KI Automatisierung Bielefeld",
        "Workflow Automatisierung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bielefeld",
      preHeadline: "n8n Automation Bielefeld",
      headline: "n8n Automation in Bielefeld - Workflows automatisieren",
      metaTitle: "n8n Automation Bielefeld | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bielefeld. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bielefeld",
        "n8n Bielefeld",
        "Workflow Automation Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bielefeld",
      preHeadline: "n8n Bielefeld",
      headline: "n8n Agentur in Bielefeld",
      metaTitle: "n8n Bielefeld - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bielefeld. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bielefeld und Umgebung.",
      keywords: [
        "n8n Bielefeld",
        "n8n Agentur Bielefeld",
        "n8n Beratung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bielefeld",
      preHeadline: "Automation Bielefeld",
      headline: "Automation & Prozessoptimierung in Bielefeld",
      metaTitle: "Automation Bielefeld - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bielefeld. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bielefeld",
        "Prozessautomatisierung Bielefeld",
        "Workflow Automation Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bielefeld",
      preHeadline: "IT Dienstleister Bielefeld",
      headline: "IT Dienstleister in Bielefeld - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bielefeld - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bielefeld. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bielefeld.",
      keywords: [
        "IT Dienstleister Bielefeld",
        "IT Service Bielefeld",
        "Digitalisierung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bielefeld",
      preHeadline: "KI Beratung Bielefeld",
      headline: "KI Beratung in Bielefeld - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bielefeld - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bielefeld. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bielefeld",
        "KI Lösungen Bielefeld",
        "Künstliche Intelligenz Bielefeld",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bielefeld",
  slug: "bielefeld",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gütersloh",
    "Herford",
    "Detmold",
    "Minden",
    "Bad Salzuflen",
    "Lemgo",
    "Bünde",
    "Löhne",
    "Lage",
    "Enger",
    "Halle (Westfalen)",
    "Rheda-Wiedenbrück",
    "Schloß Holte-Stukenbrock",
    "Versmold",
  ],
  crossReference: [
    { name: "Münster", slug: "muenster" },
    { name: "Paderborn", slug: "paderborn" },
    { name: "Osnabrück", slug: "osnabrueck" },
    { name: "Hannover", slug: "hannover" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Bielefeld | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Bielefelder Lebensmittel, Bau und Medien: HACCP-Pipelines für Dr. Oetker, CE-Fassadenbau für Schüco, Konzern-Konsolidierung für Bertelsmann und Pflege-HR für Bethel.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Bielefeld",
      "n8n Bielefeld",
      "Dr Oetker HACCP",
      "Schüco CE",
      "Bertelsmann Konzern",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/bielefeld.jpg", width: 1200, height: 630, alt: "Bielefeld - Dr. Oetker, Schüco und Bertelsmann-Region" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/bielefeld.jpg"] },
    alternates: { canonical: "/standorte/bielefeld" },
  };
}

const bielefeldFaqs = [
  {
    question: "Dr.-Oetker- oder Lebensmittel-Mittelstand: wie hilft n8n bei HACCP?",
    answer:
      "HACCP, IFS Food, Charge-Rückverfolgung, Allergen-Management und Bio-Zertifizierung in revisionssicheren n8n-Pipelines mit Audit-Trail. Anbindung an SAP, MES und QM-Systeme.",
  },
  {
    question: "Schüco- oder Fassadenbau-Mittelstand: was bringt n8n bei CE?",
    answer:
      "CE-Konformität nach EN 14351, Energieausweis-Workflows und BIM-Pipelines (Allplan, Revit, Solibri). Anbindung an SAP, PLM und KfW-Förderportale - inklusive automatischer Konformitätserklärungen.",
  },
  {
    question: "Bertelsmann-Konzern-Tochter: wie hilft Multi-Branchen-Konsolidierung?",
    answer:
      "Multi-Branchen-ERP-Konsolidierung zwischen SAP, Dynamics, Sage. Monatsabschluss-, IC-Abstimmungs- und Reporting-Workflows an Lucanet oder SAP BPC - verkürzt Closing-Zeit um 40-60 %.",
  },
  {
    question: "Bethel- oder Diakonie-Träger: kann n8n Pflege-HR abbilden?",
    answer:
      "Ja. Pflege-Personal-Onboarding zwischen Klinik-/Pflege-ERP, SAP HCM, IT-Bereitstellung und Schulungs-Plattformen. AVR-Diakonie-Tarif und MDR-Hilfsmittel-Compliance inklusive.",
  },
  {
    question: "Wir sind OWL-Maschinenbau-Hidden-Champion: wo lohnt sich KI?",
    answer:
      "Bei CPQ für Sonderanlagen, bei After-Sales-Ticket-Klassifikation und bei Lieferanten-Onboarding. Drei klassische Maschinenbau-Pain-Points mit klarem ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Bielefeld - Ostwestfälischer Mittelstands-Hub"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Bielefeld - für Dr. Oetker, Schüco und Bertelsmann-Region"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Dr. Oetker fertigt Lebensmittel für 40 Länder, Schüco ist Welt-Marktführer für Aluminium-Fassaden, Bertelsmann (Gütersloh) prägt die Medienlandschaft und Bethel ist Deutschlands größte diakonische Einrichtung. Wir bauen Workflows für Lebensmittel-HACCP, Fassadenbau-CE und Medien-Rechte.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/bielefeld.jpg"
              alt="Bielefeld - Dr. Oetker, Schüco und Bertelsmann-Region"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 340000, label: "Einwohner Bielefeld" },
            { value: 12000, suffix: "+", label: "Dr.-Oetker-Mitarbeiter weltweit" },
            { value: 5500, suffix: "+", label: "Schüco-Mitarbeiter weltweit" },
            { value: 16500, suffix: "+", label: "Bethel-Mitarbeiter" },
          ]}
        />
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Bielefelder Lebensmittel, Bau und Medien</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cookie className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HACCP- und IFS-Food-Workflows für Lebensmittelindustrie</Typo.H3>
            <Typo.Paragraph>
              HACCP, IFS Food, Charge-Rückverfolgung, Allergen-Management und Bio-Zertifizierung in revisionssicheren n8n-Pipelines mit Audit-Trail. Anbindung an SAP, MES und QM-Systeme.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Fassadenbau-CE- und BIM-Pipelines</Typo.H3>
            <Typo.Paragraph>
              CE-Konformität nach EN 14351, Energieausweis-Workflows und BIM-Pipelines (Allplan, Revit, Solibri) für Aluminium-Fassaden. Anbindung an SAP, PLM und KfW-Förderportale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Newspaper className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Multi-Branchen-Konzern-Konsolidierung für Bertelsmann-Umfeld</Typo.H3>
            <Typo.Paragraph>
              Multi-Branchen-ERP-Konsolidierung zwischen SAP, Dynamics, Sage. Monatsabschluss-, IC-Abstimmungs- und Reporting-Workflows an Konzern-Konsolidierungs-Tools wie Lucanet oder SAP BPC.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartHandshake className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Pflege-Personal- und kirchliche-Tarifvertrags-Workflows</Typo.H3>
            <Typo.Paragraph>
              Pflege-Personal-Onboarding zwischen Klinik-/Pflege-ERP, SAP HCM, IT-Bereitstellung und Schulungs-Plattformen. AVR-Diakonie-Tarif und MDR-Hilfsmittel-Compliance inklusive.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Bielefeld - Ostwestfälisches Familien-Unternehmer-Cluster
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Dr. Oetker Backmischungen für 40 Länder fertigt und Schüco Aluminium-Fassaden global liefert, sind Workflows der Rückgrat-Code
          </IntroBox.Headline>
          <IntroBox.Subline>
            Dr. Oetker (12.000 weltweit), Schüco (5.500 weltweit), Bertelsmann-Konzern (Region Gütersloh, 145.000 weltweit), Bethel (16.500 MA, Deutschlands größte diakonische Einrichtung) - Bielefeld und Ostwestfalen-Lippe vereinen Lebensmittel, Baustoff, Medien und Sozialwirtschaft.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Bielefelder Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Dr. Oetker und HACCP-Lebensmittel-Pipelines:">
              Dr. Oetker fertigt Backmischungen, Pizza und Pudding für 40+ Länder. HACCP, IFS Food, Charge-Rückverfolgung, Allergen-Management und Bio-Zertifizierung sind Pflicht - mit Audit-Trail für IFS-Audits.
            </NumberedList.Item>
            <NumberedList.Item title="Schüco und Fassadenbau-CE-Konformität:">
              Schüco ist Weltmarktführer für Aluminium-Fenster und -Fassaden, gefragt von Skyscrapern in Dubai bis Berlin. CE-Konformität nach EN 14351, Energieausweis-Workflows und BIM-Pipelines sind Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Bertelsmann-Konzern und Multi-Branchen-Konsolidierung:">
              Bertelsmann (Gütersloh, 145.000 weltweit) ist Konzern mit RTL, Penguin Random House, Arvato und BMG. Multi-Branchen-ERP-Konsolidierung, Rechte-Verwaltung und Verlags-Workflows sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Bethel und diakonische Multi-Standort-Workflows:">
              Bethel ist mit 16.500 MA und 200+ Einrichtungen Deutschlands größte diakonische Einrichtung. Pflege-Personal-Onboarding, MDR-Compliance bei Hilfsmitteln und kirchliche Tarifverträge sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Ostwestfalen-Maschinenbau und Hidden Champions:">
              Miele (Gütersloh), Beckhoff Automation (Verl), Phoenix Contact und 500+ Mittelständler. CE-Konformität, IATF, ATEX und Maschinenrichtlinie sind dichtes Workflow-Geflecht.
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
        <Typo.H2>Häufige Fragen aus Bielefeld</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bielefeldFaqs} />
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
