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
import { FlaskConical, Activity, Sprout, Microscope } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-goettingen",
      preHeadline: "AI Workflows Göttingen",
      headline: "AI Workflows & Automatisierung in Göttingen",
      metaTitle: "AI Workflows Göttingen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Göttingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Göttingen",
        "KI Automatisierung Göttingen",
        "Workflow Automatisierung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-goettingen",
      preHeadline: "n8n Automation Göttingen",
      headline: "n8n Automation in Göttingen - Workflows automatisieren",
      metaTitle: "n8n Automation Göttingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Göttingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Göttingen",
        "n8n Göttingen",
        "Workflow Automation Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-goettingen",
      preHeadline: "n8n Göttingen",
      headline: "n8n Agentur in Göttingen",
      metaTitle: "n8n Göttingen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Göttingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Göttingen und Umgebung.",
      keywords: [
        "n8n Göttingen",
        "n8n Agentur Göttingen",
        "n8n Beratung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-goettingen",
      preHeadline: "Automation Göttingen",
      headline: "Automation & Prozessoptimierung in Göttingen",
      metaTitle: "Automation Göttingen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Göttingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Göttingen",
        "Prozessautomatisierung Göttingen",
        "Workflow Automation Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-goettingen",
      preHeadline: "IT Dienstleister Göttingen",
      headline: "IT Dienstleister in Göttingen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Göttingen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Göttingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Göttingen.",
      keywords: [
        "IT Dienstleister Göttingen",
        "IT Service Göttingen",
        "Digitalisierung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-goettingen",
      preHeadline: "KI Beratung Göttingen",
      headline: "KI Beratung in Göttingen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Göttingen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Göttingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Göttingen",
        "KI Lösungen Göttingen",
        "Künstliche Intelligenz Göttingen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Göttingen",
  slug: "goettingen",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Northeim",
    "Einbeck",
    "Duderstadt",
    "Hann. Münden",
  ],
  crossReference: [
    { name: "Kassel", slug: "kassel" },
    { name: "Hannover", slug: "hannover" },
    { name: "Braunschweig", slug: "braunschweig" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Göttingen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Göttinger Biotech, MedTech und Forschung: GMP-Pipelines für Sartorius-Umfeld, MDR-Workflows für Ottobock-Prothetik, Sortenzulassung für KWS Saat und Drittmittel-Pipelines für MPI/UMG.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Göttingen",
      "n8n Göttingen",
      "Sartorius GMP",
      "Ottobock MDR",
      "KWS Saat Workflow",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/goettingen.jpg", width: 1200, height: 630, alt: "Göttingen – Sartorius, Ottobock und Wissenschaftsstadt" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/goettingen.jpg"] },
    alternates: { canonical: "/standorte/goettingen" },
  };
}

const goettingenFaqs = [
  {
    question: "Sartorius-Zulieferer: kann n8n GMP-Compliance abbilden?",
    answer:
      "Ja. GMP-Compliance, USP-/EP-Pharmakopöe-Konformität, Charge-Rückverfolgung und Pharmakovigilanz-Meldungen in n8n-Pipelines mit Audit-Trail. Anbindung an SAP GxP-Module, MES und LIMS.",
  },
  {
    question: "Ottobock-Umfeld: wie hilft Automatisierung bei MDR?",
    answer:
      "Technische Dokumentation, klinische Bewertung, PMS-Plan und Vigilance-Meldungen in versionierten Pipelines mit Notified-Body-Anbindung (TÜV SÜD, BSI). Risikomanagement nach ISO 14971 inklusive.",
  },
  {
    question: "KWS-Saat-Partner: was bringt n8n bei Sortenzulassung?",
    answer:
      "Sortenzulassungs-Anträge (BSA), GVO-Compliance, Saatgut-Zertifizierung und FAO-konforme Drittmarkt-Exportworkflows in n8n-Pipelines. Anbindung an SAP, Sortenlisten und Pflanzenschutz-Datenbanken.",
  },
  {
    question: "MPI-Forscher: kann n8n Drittmittel-Reporting abbilden?",
    answer:
      "Ja. DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an SAP CO, easy-Online, ECAS und DataCite – plus Tierschutz-Workflows für DPZ.",
  },
  {
    question: "UMG-Translationsprojekt: wie helfen Workflows?",
    answer:
      "Klinische Studien nach ICH-GCP, Ethikkommissions-Voten, Tumor-Board-Dokumentation und Translation in Sartorius-/Ottobock-Industrie. Anbindung an REDCap, SAP und Patentdatenbanken.",
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
              {overrides?.preHeadline ?? "Standort Göttingen – Stadt, die Wissen schafft"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Göttingen – für Sartorius, Ottobock und Bioprozess-Cluster"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Sartorius ist DAX-Konzern für Bioprozess-Technologie, Ottobock Weltmarktführer für Prothetik, KWS Saat einer der größten Saatgut-Hersteller und die Universität Göttingen Nobelpreisträger-Schmiede. Wir bauen Workflows für Bioprozess-Compliance, MDR-Prothetik und Saatgut-Forschung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/goettingen.jpg"
              alt="Göttingen – Sartorius, Ottobock und Wissenschaftsstadt"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Göttinger Biotech, MedTech und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>GMP- und Bioprozess-Workflows für Sartorius-Umfeld</Typo.H3>
            <Typo.Paragraph>
              GMP-Compliance, USP-/EP-Pharmakopöe-Konformität, Charge-Rückverfolgung und Pharmakovigilanz-Meldungen in n8n-Pipelines. Anbindung an SAP GxP-Module, MES und LIMS.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Activity className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MDR-Pipelines für Prothetik-Hersteller</Typo.H3>
            <Typo.Paragraph>
              Technische Dokumentation, klinische Bewertung, PMS-Plan und Vigilance-Meldungen in versionierten Pipelines mit Notified-Body-Anbindung (TÜV SÜD, BSI). MDR-Klasse-IIa/IIb-konform.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sprout className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Sortenzulassungs- und Saatgut-Workflows</Typo.H3>
            <Typo.Paragraph>
              Sortenzulassung (BSA), GVO-Compliance, Saatgut-Zertifizierung und FAO-konforme Drittmarkt-Exportworkflows. Anbindung an SAP, Sortenlisten und Pflanzenschutz-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Microscope className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MPI- und DPZ-Drittmittel-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Reports. Tierschutz-Workflows nach Tierschutzversuchstier-Verordnung. Anbindung an SAP CO, easy-Online und DataCite.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Göttingen – Stadt der 47 Nobelpreisträger
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Sartorius Bioreaktoren für Biontech fertigt und Ottobock Prothetik weltweit liefert, müssen Workflows Pharma-präzise sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Sartorius (DAX-30, 13.000 Mitarbeiter), Ottobock (8.000 weltweit), KWS Saat (5.700 weltweit) und Universität Göttingen mit dem UMG-Klinikum – diese Mischung aus DAX-Biotech, MDR-MedTech und Agrar-Forschung verlangt branchenspezifische Pipelines.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Göttinger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Sartorius und Bioprozess-GMP-Pipelines:">
              Als DAX-30-Konzern liefert Sartorius Bioreaktoren, Filter und Single-Use-Systeme an Pharma-Konzerne (Biontech, Pfizer, Moderna). GMP-Compliance, USP-/EP-Pharmakopöe-Konformität und Charge-Rückverfolgung sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Ottobock und MDR-Prothetik-Workflows:">
              Weltmarktführer für Prothetik und Orthetik (Knie, Hand, Arm) mit MDR-Klasse-IIa/IIb-Geräten. Technische Dokumentation, klinische Bewertung und Vigilance-Meldungen sind ein dichtes Workflow-Geflecht.
            </NumberedList.Item>
            <NumberedList.Item title="KWS Saat und Sortenzulassung:">
              KWS Saat züchtet Mais, Zuckerrüben und Getreide für 70 Märkte. Sortenzulassung (BSA), GVO-Compliance, Saatgut-Zertifizierung und Drittmarkt-Exportworkflows nach FAO-Standards sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Max-Planck-Institute und DPZ:">
              Max-Planck-Institute für Multidisziplinäre Wissenschaften, Sonnensystemforschung, Dynamik und das Deutsche Primatenzentrum (DPZ) erzeugen 9-stellige Drittmittel-Volumen. ECAS, easy-Online, DataCite und Tierschutz-Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="UMG-Universitätsmedizin und Translation:">
              Universitätsmedizin Göttingen (UMG) als translationaler Forschungsmotor zwischen Klinik und Sartorius-/Ottobock-Industrie. Tumor-Boards, klinische Studien nach ICH-GCP und Ethikkommissions-Voten sind dicht orchestriert.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 118000, label: "Einwohner Göttingen" },
            { value: 47, label: "Nobelpreisträger" },
            { value: 13000, suffix: "+", label: "Sartorius-Mitarbeiter weltweit" },
            { value: 8000, suffix: "+", label: "Ottobock-Mitarbeiter weltweit" },
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
        <Typo.H2>Häufige Fragen aus Göttingen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={goettingenFaqs} />
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
