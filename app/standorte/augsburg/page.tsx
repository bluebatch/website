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
import { Bot, Truck, Plane, Cpu } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-augsburg",
      preHeadline: "AI Workflows Augsburg",
      headline: "AI Workflows & Automatisierung in Augsburg",
      metaTitle: "AI Workflows Augsburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Augsburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Augsburg",
        "KI Automatisierung Augsburg",
        "Workflow Automatisierung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-augsburg",
      preHeadline: "n8n Automation Augsburg",
      headline: "n8n Automation in Augsburg - Workflows automatisieren",
      metaTitle: "n8n Automation Augsburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Augsburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Augsburg",
        "n8n Augsburg",
        "Workflow Automation Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-augsburg",
      preHeadline: "n8n Augsburg",
      headline: "n8n Agentur in Augsburg",
      metaTitle: "n8n Augsburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Augsburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Augsburg und Umgebung.",
      keywords: [
        "n8n Augsburg",
        "n8n Agentur Augsburg",
        "n8n Beratung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-augsburg",
      preHeadline: "Automation Augsburg",
      headline: "Automation & Prozessoptimierung in Augsburg",
      metaTitle: "Automation Augsburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Augsburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Augsburg",
        "Prozessautomatisierung Augsburg",
        "Workflow Automation Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-augsburg",
      preHeadline: "IT Dienstleister Augsburg",
      headline: "IT Dienstleister in Augsburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Augsburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Augsburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Augsburg.",
      keywords: [
        "IT Dienstleister Augsburg",
        "IT Service Augsburg",
        "Digitalisierung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-augsburg",
      preHeadline: "KI Beratung Augsburg",
      headline: "KI Beratung in Augsburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Augsburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Augsburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Augsburg",
        "KI Lösungen Augsburg",
        "Künstliche Intelligenz Augsburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Augsburg",
  slug: "augsburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Friedberg",
    "Gersthofen",
    "Neusäß",
    "Königsbrunn",
    "Stadtbergen",
    "Bobingen",
    "Schwabmünchen",
    "Kaufering",
    "Landsberg am Lech",
    "Dachau",
  ],
  crossReference: [
    { name: "München", slug: "muenchen" },
    { name: "Ulm", slug: "ulm" },
    { name: "Ingolstadt", slug: "ingolstadt" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Augsburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Augsburger Robotik, Truck und Aerospace: KUKA-Industrieroboter-Pipelines, MAN-Truck-IATF, AS9100-Aerospace für Premium AEROTEC und Drittmittel-Workflows für Uni Augsburg.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Augsburg",
      "n8n Augsburg",
      "KUKA Robotik",
      "MAN Truck IATF",
      "Premium AEROTEC AS9100",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/augsburg.jpg", width: 1200, height: 630, alt: "Augsburg - KUKA Robotics, MAN und Premium AEROTEC" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/augsburg.jpg"] },
    alternates: { canonical: "/standorte/augsburg" },
  };
}

const augsburgFaqs = [
  {
    question: "KUKA-Zulieferer oder -Integrator: wie hilft Automatisierung?",
    answer:
      "Lieferanten-Onboarding, ROS-Integration, IATF/AS9100-Compliance und Wartungs-Workflows für 100+ Länder. Anbindung an SAP, MES und Field-Service-Apps - verkürzt After-Sales-Bearbeitungszeit um 50-70 %.",
  },
  {
    question: "MAN-Truck-Zulieferer: was bringt IATF-Automatisierung?",
    answer:
      "PPAP-Pakete, EDI-Anbindung an MAN-Lieferantenportal, JIS-/JIT-Lieferpipelines und 8D-Reports in n8n-Pipelines. SAP QM, MES und PLM integriert.",
  },
  {
    question: "Premium-AEROTEC-Umfeld: kann n8n AS9100 abbilden?",
    answer:
      "Ja. AS9100-Compliance, NADCAP-Zertifizierung, ITAR-/EAR-Klassifikation und Airbus-Lieferketten-Workflows in n8n-Pipelines mit Vier-Augen-Freigabe. Anbindung an SAP GTS und Airbus-Portale.",
  },
  {
    question: "Uni Augsburg / Quanten-Cluster: wie hilft Drittmittel-Automatisierung?",
    answer:
      "DFG-, BMBF- und EU-Horizon-Projekte mit Industriepartnern in n8n-Pipelines. Anbindung an HISinOne, SAP CO, easy-Online und Patent-Datenbanken - plus Industriepartnerschafts-Verträge.",
  },
  {
    question: "Wir sind Augsburger Mittelstand: wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskalkulation (CPQ), bei Eingangsrechnungs-Verarbeitung und bei Lieferanten-Sanktionslisten-Prüfung. Drei klassische Industrie-Pain-Points mit klarem ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Augsburg - Fugger-Stadt und Robotik-Cluster"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Augsburg - für KUKA, MAN, Premium AEROTEC und Fugger-Erbe"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              KUKA ist Weltmarktführer für Industrieroboter, MAN baut Lkw und Busse, Premium AEROTEC fertigt Airbus-Strukturkomponenten und die UNESCO-Welterbe-Wassermanagementsystem prägt die Stadt. Wir bauen Workflows für Robotik-Integration, Truck-IATF und Aerospace-AS9100.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/augsburg.jpg"
              alt="Augsburg - KUKA Robotics, MAN und Premium AEROTEC"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 300000, label: "Einwohner Augsburg" },
            { value: 14000, suffix: "+", label: "KUKA-Mitarbeiter weltweit" },
            { value: 1521, label: "Fuggerei gegründet (älteste Sozialsiedlung)" },
            { value: 3, label: "Drittgrößte Stadt Bayerns" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Augsburg - 800 Jahre Wirtschaft mit Fugger-Erbe
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo KUKA Roboter für 100+ Länder fertigt und Premium AEROTEC Airbus-Komponenten in 0,01 mm Toleranz liefert, müssen Workflows Aerospace-präzise sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            KUKA (Augsburg-Hauptsitz, 14.000 weltweit), MAN Truck & Bus, Premium AEROTEC (Airbus-Strukturen), Universität Augsburg und das UNESCO-Welterbe-Wassermanagementsystem - Augsburg vereint Robotik, Truck, Aerospace und Forschung in der drittgrößten Stadt Bayerns.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Augsburger Robotik, Truck und Aerospace</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Bot className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KUKA-Robotik-Lieferanten- und Wartungs-Workflows</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Onboarding, ROS-Integration, IATF/AS9100-Compliance und Wartungs-Workflows für 100+ Länder. Anbindung an SAP, MES und Field-Service-Apps.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MAN-Truck-IATF- und JIS-/JIT-Pipelines</Typo.H3>
            <Typo.Paragraph>
              PPAP-Pakete, EDI-Anbindung an MAN-Lieferantenportal, JIS-/JIT-Lieferpipelines und 8D-Reports. SAP QM, MES und PLM integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Plane className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>AS9100-Aerospace- und NADCAP-Workflows</Typo.H3>
            <Typo.Paragraph>
              AS9100-Compliance, NADCAP-Zertifizierung, ITAR-/EAR-Klassifikation und Airbus-Lieferketten-Workflows in n8n-Pipelines mit Vier-Augen-Freigabe. Anbindung an SAP GTS und Airbus-Portale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Industriepartnerschafts- und Drittmittel-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Horizon-Projekte mit Industriepartnern (KUKA, MAN, Premium AEROTEC). Anbindung an HISinOne, SAP CO, easy-Online und Patent-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Augsburger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="KUKA und Industrieroboter-Globalintegration:">
              KUKA ist Weltmarktführer für Industrieroboter (Automotive, Aerospace, Allgemeinindustrie). Lieferanten-Onboarding, ROS-Integration, IATF/AS9100-Compliance und Wartungs-Workflows für 100+ Länder.
            </NumberedList.Item>
            <NumberedList.Item title="MAN Truck & Bus und IATF-Pipelines:">
              MAN mit Standort Augsburg-Neusäss baut Truck-Komponenten und E-Busse. IATF-16949, PPAP, JIS-/JIT-Pipelines und EDI mit MAN-Lieferantenportal sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Premium AEROTEC und Airbus-AS9100-Compliance:">
              Premium AEROTEC (Tochter Airbus) fertigt Strukturkomponenten für A320, A350 und A380. AS9100-Compliance, NADCAP-Zertifizierung und ITAR-/EAR-Klassifikation sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Augsburg und Quanten-/KI-Cluster:">
              Universität Augsburg mit Quanten-, Materials-Science- und KI-Forschung. Drittmittel, Industriepartnerschaften mit KUKA, MAN, Premium AEROTEC und Drittmittel-Reporting.
            </NumberedList.Item>
            <NumberedList.Item title="Lechfeld-Wasserkraft und Augsburger UNESCO-Welterbe:">
              Wasserwirtschaft seit dem Mittelalter ist UNESCO-Welterbe und prägt Stadtwerke-Workflows. Wasserrechte, Smart-Meter-Rollout und kommunale Energie-Workflows sind Themen.
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
        <Typo.H2>Häufige Fragen aus Augsburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={augsburgFaqs} />
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
