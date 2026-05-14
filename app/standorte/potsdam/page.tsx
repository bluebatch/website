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
import { Cpu, Film, Tv, Microscope } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-potsdam",
  rewrites: [
    {
      source: "/ai-workflows-potsdam",
      preHeadline: "AI Workflows Potsdam",
      headline: "AI Workflows & Automatisierung in Potsdam",
      metaTitle: "AI Workflows Potsdam - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Potsdam. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Potsdam",
        "KI Automatisierung Potsdam",
        "Workflow Automatisierung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-potsdam",
      preHeadline: "n8n Automation Potsdam",
      headline: "n8n Automation in Potsdam - Workflows automatisieren",
      metaTitle: "n8n Automation Potsdam | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Potsdam. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Potsdam",
        "n8n Potsdam",
        "Workflow Automation Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-potsdam",
      preHeadline: "n8n Potsdam",
      headline: "n8n Agentur in Potsdam",
      metaTitle: "n8n Potsdam - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Potsdam. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Potsdam und Umgebung.",
      keywords: [
        "n8n Potsdam",
        "n8n Agentur Potsdam",
        "n8n Beratung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-potsdam",
      preHeadline: "Automation Potsdam",
      headline: "Automation & Prozessoptimierung in Potsdam",
      metaTitle: "Automation Potsdam - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Potsdam. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Potsdam",
        "Prozessautomatisierung Potsdam",
        "Workflow Automation Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-potsdam",
      preHeadline: "IT Dienstleister Potsdam",
      headline: "IT Dienstleister in Potsdam - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Potsdam - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Potsdam. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Potsdam.",
      keywords: [
        "IT Dienstleister Potsdam",
        "IT Service Potsdam",
        "Digitalisierung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-potsdam",
      preHeadline: "KI Beratung Potsdam",
      headline: "KI Beratung in Potsdam - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Potsdam - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Potsdam. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Potsdam",
        "KI Lösungen Potsdam",
        "Künstliche Intelligenz Potsdam",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-potsdam",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Potsdam",
  slug: "potsdam",
  bundesland: "Brandenburg",
  publish: false,
  nearbySmall: [
    "Teltow",
    "Werder (Havel)",
    "Ludwigsfelde",
    "Falkensee",
    "Brandenburg an der Havel",
    "Beelitz",
  ],
  crossReference: [
    { name: "Berlin", slug: "berlin" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Potsdam | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Potsdamer IT-Forschung, Film und Wissenschaft: HPI-Stipendien und SAP-Partnerschaften, Babelsberg-Filmproduktion mit DFFF-Tax-Incentives, ARD-Medienrechte und Drittmittel-Pipelines für MPI/PIK.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Potsdam",
      "n8n Potsdam",
      "HPI Workflow",
      "Babelsberg Filmproduktion",
      "MPI Drittmittel",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/potsdam.jpg", width: 1200, height: 630, alt: "Potsdam – HPI, Babelsberg-Filmstudios und Wissenschaftsstadt" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/potsdam.jpg"] },
    alternates: { canonical: "/ki-agentur-potsdam" },
  };
}

const potsdamFaqs = [
  {
    question: "HPI-Spin-off oder SAP-Partner: wie hilft Automatisierung?",
    answer:
      "Bei Stipendienanträgen, Forschungspartnerschaften, Industrieprojekten mit SAP und Drittmittel-Reporting. n8n verbindet HISinOne, SAP CO und ECAS zu durchgängigen Pipelines mit revisionssicherem Audit-Trail.",
  },
  {
    question: "Babelsberg-Filmproduktion: was bringt n8n im Hollywood-Geschäft?",
    answer:
      "Cast-/Crew-Verträge, DFFF-/GMPF-Tax-Incentive-Anträge, Visa-Workflows und Currency-Hedging mit US-Studios in automatisierten Pipelines. Anbindung an Movie Magic Budgeting, DocuSign und Lohnsysteme.",
  },
  {
    question: "RBB-Zulieferer: wie helfen Workflows bei Medienrechten?",
    answer:
      "Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz zwischen ARD-Anstalten in n8n-Pipelines. Anbindung an Mediendatenbanken, GEMA, GVL und Produktions-Management.",
  },
  {
    question: "MPI-/PIK-Forscher: kann n8n Drittmittel-Reporting abbilden?",
    answer:
      "Ja. DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an SAP CO, easy-Online, ECAS und DataCite für Forschungsdaten-Publikation.",
  },
  {
    question: "Pendler nach Berlin – wie skalieren HR-Workflows?",
    answer:
      "Hybrid-Work-Verträge, A1-Bescheinigungen und tarifrechtliche Brandenburg-Spezifika in HR-Pipelines. Anbindung an SAP HCM, Workday und Active Directory – inklusive Onboarding für SAP-/Berlin-Achse.",
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
              {overrides?.preHeadline ?? "Standort Potsdam – Wissenschafts- und Filmstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Potsdam – für HPI, Babelsberg und SAP-Achse Berlin"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Hasso-Plattner-Institut (HPI) ist Deutschlands führendes IT-Engineering-Institut, Studios Babelsberg sind Europas größtes Filmstudio und der Wissenschaftsstandort verbindet AWI, GFZ und MPI. Wir bauen Workflows für IT-Forschung, Film-Produktionsmanagement und Wissenschaftsverwaltung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/potsdam.jpg"
              alt="Potsdam – HPI, Babelsberg-Filmstudios und Wissenschaftsstadt"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Potsdamer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Hasso-Plattner-Institut und Stipendien-Verwaltung:">
              Das HPI ist mit SAP-Mitgründer Hasso Plattner verflochten und Deutschlands führendes IT-Engineering-Institut. Stipendienanträge, Forschungspartnerschaften mit SAP und Drittmittel-Reporting sind ein dichtes Workflow-Geflecht.
            </NumberedList.Item>
            <NumberedList.Item title="Studios Babelsberg und Hollywood-Produktions-Workflows:">
              Europas größtes Filmstudio (Inglourious Basterds, Matrix Resurrections, Squid Game) erfordert internationale Produktions-Workflows: Cast-/Crew-Verträge, Tax-Incentives DFFF/GMPF, Visa und Currency-Hedging mit US-Studios.
            </NumberedList.Item>
            <NumberedList.Item title="RBB und ARD-Medienproduktion:">
              RBB Hauptsitz, ARD-Stargate und Medienproduktion in Babelsberg. Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz mit anderen ARD-Anstalten gehören in spezialisierte Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Max-Planck-, AWI- und GFZ-Forschungs-Cluster:">
              PIK (Klimafolgen), GFZ (Geoforschung), AWI (Polarforschung) und MPI Kolloid-/Grenzflächenforschung – Drittmittel-Volumen in 9-stelliger Höhe pro Jahr. ECAS, easy-Online, DataCite und Forschungsdaten-Management sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Brandenburg-Berlin-Pendler-Effekt:">
              Hohe Pendlerzahl nach Berlin und SAP/Berlin-Achse. Hybrid-Work-Verträge, A1-Bescheinigungen und tarifrechtliche Brandenburg-Spezifika sind HR-Workflow-Themen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 185000, label: "Einwohner Potsdam" },
            { value: 1998, label: "HPI-Gründung durch Hasso Plattner" },
            { value: 1912, label: "Filmstudio Babelsberg gegründet" },
            { value: 5, suffix: "+", label: "Max-Planck- und Leibniz-Institute" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Potsdam – Wissenschaftsstadt mit Babelsberg-Erbe
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Hasso-Plattner KI-Forschung antreibt und Babelsberg Hollywood-Produktionen abwickelt, müssen Workflows technologie- und kreativ-spezifisch sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            HPI, Studios Babelsberg, RBB, Filmpark, Max-Planck-Institute und das Potsdam-Institut für Klimafolgenforschung (PIK) prägen die Stadt. Diese Mischung aus IT-Forschung, Filmproduktion und Wissenschaft verlangt branchenspezifische Pipelines.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Potsdamer IT-Forschung, Film und Wissenschaft</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HPI-Stipendien- und SAP-Partnerschafts-Workflows</Typo.H3>
            <Typo.Paragraph>
              Stipendienanträge, Forschungspartnerschaften, Industrieprojekte mit SAP und Drittmittel-Reporting in n8n-Pipelines. Anbindung an HISinOne, SAP CO und ECAS.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Film className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Babelsberg-Filmproduktions-Workflows</Typo.H3>
            <Typo.Paragraph>
              Cast-/Crew-Verträge, DFFF/GMPF-Tax-Incentive-Anträge, Visa-Workflows und Currency-Hedging mit US-Studios. Anbindung an Movie Magic Budgeting, DocuSign und Lohnsysteme.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Tv className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>RBB- und ARD-Medienrechte-Workflows</Typo.H3>
            <Typo.Paragraph>
              Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz zwischen ARD-Anstalten. Anbindung an Mediendatenbanken, GEMA, GVL und Produktions-Management-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Microscope className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Forschungsdaten-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Reports. Anbindung an SAP CO, easy-Online, ECAS und DataCite für Forschungsdaten-Publikation.
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
        <Typo.H2>Häufige Fragen aus Potsdam</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={potsdamFaqs} />
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
