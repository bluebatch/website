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
import KpiCard from "@/components/cards/kpi-card";
import NumberedList from "@/components/ui/numbered-list";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Sun, Pill, Activity, FlaskConical } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-freiburg-im-breisgau",
      preHeadline: "AI Workflows Freiburg im Breisgau",
      headline: "AI Workflows & Automatisierung in Freiburg im Breisgau",
      metaTitle: "AI Workflows Freiburg im Breisgau - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Freiburg im Breisgau. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Freiburg im Breisgau",
        "KI Automatisierung Freiburg im Breisgau",
        "Workflow Automatisierung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-freiburg-im-breisgau",
      preHeadline: "n8n Automation Freiburg im Breisgau",
      headline: "n8n Automation in Freiburg im Breisgau - Workflows automatisieren",
      metaTitle: "n8n Automation Freiburg im Breisgau | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Freiburg im Breisgau. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Freiburg im Breisgau",
        "n8n Freiburg im Breisgau",
        "Workflow Automation Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-freiburg-im-breisgau",
      preHeadline: "n8n Freiburg im Breisgau",
      headline: "n8n Agentur in Freiburg im Breisgau",
      metaTitle: "n8n Freiburg im Breisgau - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Freiburg im Breisgau. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Freiburg im Breisgau und Umgebung.",
      keywords: [
        "n8n Freiburg im Breisgau",
        "n8n Agentur Freiburg im Breisgau",
        "n8n Beratung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-freiburg-im-breisgau",
      preHeadline: "Automation Freiburg im Breisgau",
      headline: "Automation & Prozessoptimierung in Freiburg im Breisgau",
      metaTitle: "Automation Freiburg im Breisgau - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Freiburg im Breisgau. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Freiburg im Breisgau",
        "Prozessautomatisierung Freiburg im Breisgau",
        "Workflow Automation Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-freiburg-im-breisgau",
      preHeadline: "IT Dienstleister Freiburg im Breisgau",
      headline: "IT Dienstleister in Freiburg im Breisgau - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Freiburg im Breisgau - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Freiburg im Breisgau. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Freiburg im Breisgau.",
      keywords: [
        "IT Dienstleister Freiburg im Breisgau",
        "IT Service Freiburg im Breisgau",
        "Digitalisierung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-freiburg-im-breisgau",
      preHeadline: "KI Beratung Freiburg im Breisgau",
      headline: "KI Beratung in Freiburg im Breisgau - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Freiburg im Breisgau - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Freiburg im Breisgau. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Freiburg im Breisgau",
        "KI Lösungen Freiburg im Breisgau",
        "Künstliche Intelligenz Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Freiburg im Breisgau",
  slug: "freiburg-im-breisgau",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Emmendingen",
    "Lahr/Schwarzwald",
    "Bad Krozingen",
    "Müllheim",
    "Breisach am Rhein",
    "Lörrach",
  ],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Offenburg", slug: "offenburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Freiburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Freiburger Solar, Pharma und Klinik: PV-Förderprogramm-Pipelines, Pharma-GxP für BioValley, Onkologie-Tumor-Boards am Uniklinikum und Drittmittel-Workflows für Fraunhofer ISE.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Freiburg",
      "n8n Freiburg",
      "Fraunhofer ISE Workflow",
      "BioValley Pharma",
      "Solar Förderung",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/freiburg-im-breisgau.jpg", width: 1200, height: 630, alt: "Freiburg – Solar-Cluster, Universität und Schwarzwald" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/freiburg-im-breisgau.jpg"] },
    alternates: { canonical: "/standorte/freiburg-im-breisgau" },
  };
}

const freiburgFaqs = [
  {
    question: "Fraunhofer-Partner: wie hilft n8n bei Drittmittel-Reporting?",
    answer:
      "DFG-, BMBF-, BMWK- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports automatisiert. Anbindung an SAP CO, easy-Online und ECAS – verkürzt Verwaltungsaufwand spürbar.",
  },
  {
    question: "Pharma-KMU im BioValley: was bringt Automatisierung?",
    answer:
      "GMP-/GDP-Workflows, klinische Studien-Reporting nach ICH-GCP, EMA-eCTD-Submissions und Pharmakovigilanz-Meldungen in versionierten Pipelines mit Audit-Trail. Notified-Body- und EMA-Schnittstellen integriert.",
  },
  {
    question: "Uniklinikum-Onkologie: kann n8n Tumor-Boards unterstützen?",
    answer:
      "Ja. Tumor-Board-Dokumentation, klinische Studien nach ICH-GCP, REDCap-Anbindung und Ethikkommissions-Voten in revisionssicheren Pipelines. EOCC-konforme Dokumentation für CCCF-Zertifizierung.",
  },
  {
    question: "Solar-Mittelstand: wie helfen Workflows bei PV-Förderung?",
    answer:
      "BAFA-, KfW- und EEG-Förderanträge, Verwendungsnachweise und Smart-Meter-Rollout automatisiert. Anbindung an Solar-ERPs, Smart-Meter-Plattformen und Förderbanken-Portale.",
  },
  {
    question: "Wir sind Cleantech-Spin-off: wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskalkulation (CPQ), bei Eingangsrechnungs-Verarbeitung und bei Lieferanten-Onboarding. Klassische Spin-off-Pain-Points mit klarem ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Freiburg – Solar-Hauptstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Freiburg – für Fraunhofer ISE, Solar-Cluster und Uni-Klinikum"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Fraunhofer ISE ist Europas größtes Solarforschungsinstitut, das Universitätsklinikum Freiburg ist Top-Standort für Onkologie und BioValley verbindet Pharma in DE/FR/CH. Wir bauen Workflows für PV-Förderprogramme, klinische Studien und Pharma-Compliance.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/freiburg-im-breisgau.jpg"
              alt="Freiburg – Solar-Cluster, Universität und Schwarzwald"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Freiburger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Fraunhofer ISE und Solar-Förderprogramm-Pipelines:">
              Als Europas größtes Solarforschungsinstitut koordiniert Fraunhofer ISE BMWK-, BMBF- und EU-Horizon-Projekte. Drittmittel-Reporting, Patentanmeldungen und Industriekooperationen mit BSW, Meyer Burger und Q CELLS sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="BioValley und Pharma-Achse Basel/Strasbourg:">
              Roche (Basel), Boehringer (Biberach), Sanofi (Strasbourg) und Freiburger Spin-offs bilden das BioValley. Pharma-GxP-Workflows, klinische Studien-Reporting und EMA-Submissions sind hochreguliert.
            </NumberedList.Item>
            <NumberedList.Item title="Universitätsklinikum als Onkologie-Spitzenzentrum:">
              Comprehensive Cancer Center Freiburg (CCCF) ist EOCC-zertifiziert. Tumor-Board-Dokumentation, klinische Studien-Workflows nach ICH-GCP und Studien-Datenbanken (REDCap) sind dichtes Workflow-Geflecht.
            </NumberedList.Item>
            <NumberedList.Item title="Solar- und Cleantech-Mittelstand:">
              Solar Cluster Baden-Württemberg, badenova-Energie und über 200 Cleantech-KMU. PV-Förderanträge (KfW, BAFA), CO2-Zertifikate-Workflows und Smart-Meter-Rollout sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Freiburg und Exzellenzcluster:">
              Albert-Ludwigs-Universität mit BIOSS, livMatS und CIBSS-Exzellenzclustern. DFG-Förderung, Stellenbesetzung mit internationalen Forschern und Visa-Workflows mit Auslandsbehörden.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Freiburg – Europas Solar-Hauptstadt im BioValley
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Fraunhofer ISE die nächste Solar-Generation entwickelt und Universitätsklinikum Onkologie weltweit ausstrahlt, müssen Workflows wissenschaftlich präzise sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mit Fraunhofer ISE (1200+ Mitarbeiter), Uniklinikum (12.000+ Mitarbeiter), BioValley-Pharma-Achse Basel und Solar-Mittelstand vereint Freiburg Forschung, Medizin und Cleantech wie kaum eine andere Stadt. Diese Spezialisierung verlangt branchenspezifische Workflows.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Freiburger Solar, Pharma und Klinik</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sun className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Solar-Förderprogramm- und PV-Workflows</Typo.H3>
            <Typo.Paragraph>
              BAFA-, KfW- und EEG-Förderanträge, Verwendungsnachweise und Quartalsreports automatisiert. Anbindung an Solar-ERPs, Smart-Meter-Plattformen und Förderbanken-Schnittstellen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Pill className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Pharma-GxP- und EMA-Submission-Pipelines</Typo.H3>
            <Typo.Paragraph>
              GMP-/GDP-Workflows, klinische Studien-Reporting nach ICH-GCP, EMA-eCTD-Submissions und Pharmakovigilanz-Meldungen in versionierten n8n-Pipelines mit Audit-Trail.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Activity className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Onkologie-Tumor-Board- und Studien-Workflows</Typo.H3>
            <Typo.Paragraph>
              Tumor-Board-Dokumentation, klinische Studien nach ICH-GCP, REDCap-Anbindung und Ethikkommissions-Voten in revisionssicheren Pipelines. EOCC-konforme Dokumentation.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel-Reporting für Fraunhofer und Uni</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF-, BMWK- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Reports. Anbindung an SAP CO, easy-Online, ECAS und Patentdatenbanken.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 236000, label: "Einwohner Freiburg" },
            { value: 1200, suffix: "+", label: "Fraunhofer ISE Mitarbeiter" },
            { value: 12000, suffix: "+", label: "Beschäftigte Uniklinikum" },
            { value: 1457, label: "Gründung Universität Freiburg" },
          ]}
        />
      </ContentWrapper>

      {/* 7.5. Bonus — Freiburg in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Freiburg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={1300}
            subtitle="Fraunhofer-ISE-Beschäftigte"
          />
          <KpiCard
            value={700}
            subtitle="Pfizer-Standort Freiburg"
          />
          <KpiCard
            value={12000}
            subtitle="Beschäftigte Uniklinikum Freiburg"
          />
          <KpiCard
            value={300}
            suffix="+"
            subtitle="Firmen im BioValley-Cluster Oberrhein"
          />
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
        <Typo.H2>Häufige Fragen aus Freiburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={freiburgFaqs} />
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
