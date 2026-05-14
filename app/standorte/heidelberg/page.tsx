import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Building2, Cog, FlaskConical, HeartPulse, GraduationCap, Cpu } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-heidelberg",
      preHeadline: "AI Workflows Heidelberg",
      headline: "AI Workflows & Automatisierung in Heidelberg",
      metaTitle: "AI Workflows Heidelberg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Heidelberg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Heidelberg",
        "KI Automatisierung Heidelberg",
        "Workflow Automatisierung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-heidelberg",
      preHeadline: "n8n Automation Heidelberg",
      headline: "n8n Automation in Heidelberg - Workflows automatisieren",
      metaTitle: "n8n Automation Heidelberg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Heidelberg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Heidelberg",
        "n8n Heidelberg",
        "Workflow Automation Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-heidelberg",
      preHeadline: "n8n Heidelberg",
      headline: "n8n Agentur in Heidelberg",
      metaTitle: "n8n Heidelberg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Heidelberg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Heidelberg und Umgebung.",
      keywords: [
        "n8n Heidelberg",
        "n8n Agentur Heidelberg",
        "n8n Beratung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-heidelberg",
      preHeadline: "Automation Heidelberg",
      headline: "Automation & Prozessoptimierung in Heidelberg",
      metaTitle: "Automation Heidelberg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Heidelberg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Heidelberg",
        "Prozessautomatisierung Heidelberg",
        "Workflow Automation Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-heidelberg",
      preHeadline: "IT Dienstleister Heidelberg",
      headline: "IT Dienstleister in Heidelberg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Heidelberg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Heidelberg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Heidelberg.",
      keywords: [
        "IT Dienstleister Heidelberg",
        "IT Service Heidelberg",
        "Digitalisierung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-heidelberg",
      preHeadline: "KI Beratung Heidelberg",
      headline: "KI Beratung in Heidelberg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Heidelberg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Heidelberg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Heidelberg",
        "KI Lösungen Heidelberg",
        "Künstliche Intelligenz Heidelberg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Heidelberg",
  slug: "heidelberg",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Weinheim",
    "Schwetzingen",
    "Leimen",
    "Wiesloch",
    "Sinsheim",
    "Neckargemünd",
    "Walldorf",
    "Eppelheim",
    "Sandhausen",
    "Dossenheim",
  ],
  crossReference: [
    { name: "Mannheim", slug: "mannheim" },
    { name: "Ludwigshafen am Rhein", slug: "ludwigshafen-am-rhein" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Karlsruhe", slug: "karlsruhe" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Heidelberg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Heidelberg - von Heidelberg Materials und Heidelberger Druckmaschinen über DKFZ und EMBL bis zum Universitätsklinikum.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Heidelberg",
      "Workflow-Automatisierung Heidelberg",
      "n8n Heidelberg",
      "KI Automatisierung Heidelberg",
      "Prozessoptimierung Heidelberg",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/heidelberg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Heidelberg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/heidelberg.jpg"],
    },
    alternates: {
      canonical: "/standorte/heidelberg",
    },
  };
}

const heidelbergFaqs = [
  {
    question: "Heidelberg Materials - wie hilft n8n bei CSRD und CBAM?",
    answer:
      "Baustoffe sind extrem CO2-intensiv. CSRD-Datenpipelines, CBAM-Compliance, CO2-Bilanzen pro Werk, Multi-Currency-Buchhaltung in dutzenden Ländern und ESG-Reporting werden mit n8n auditfest abgebildet - ergänzend zu SAP S/4HANA.",
  },
  {
    question: "Heidelberger Druckmaschinen wandelt sich zum Service-Anbieter - wie passt n8n?",
    answer:
      "SaaS-Subscription-Management, Predictive Maintenance über IoT-Daten, Ersatzteil-eCommerce, globale Servicelogistik und Field-Service-Apps werden mit n8n und SAP Service Cloud verzahnt - inklusive 40 %+ Weltmarktanteil im Offset-Geschäft.",
  },
  {
    question: "DKFZ, EMBL, BioRN - passt n8n in Pharma- und Biotech-Forschung?",
    answer:
      "Ja. GxP-, EMA- und FDA-Konformität, klinische Studien, eCRF-Daten, GMP-Audits, Sortenschutz und IP-Management werden mit n8n und Veeva Vault verbunden. Spin-offs aus DKFZ und Uni profitieren von schlanken, regulatorisch konformen Workflows.",
  },
  {
    question: "Universitätsklinikum - 17.500 Mitarbeitende, wie hilft KI?",
    answer:
      "DRG-Abrechnung, Drittmittel-Reporting (BMBF, EU, DFG), Ethikkommissionen, MDR-Compliance und Patientenkommunikation werden mit n8n und KI-gestützter Klassifikation entlastet - unter Personalmangel und Sparzwang.",
  },
  {
    question: "SAP-Region Heidelberg/Walldorf - wie ergänzen wir SAP-Stacks?",
    answer:
      "Während SAP- und IT-Konzerne hoch digitalisiert arbeiten, bleibt der klassische Mittelstand (Mechanik, Lebensmittel, Logistik, Bau) zurück. Wir bauen n8n als schlanken Orchestrator um SAP S/4HANA und BTP herum - ohne mit SAP-Welten zu konkurrieren.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Analyse bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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

      {/* 1. BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/heidelberg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Heidelberg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Heidelberg -{" "}
                Pharma, Druckmaschinen und{" "}
                <BackgroundHero.Highlight>älteste Uni Deutschlands</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Heidelberg Materials, Heidelberger Druckmaschinen, DKFZ, EMBL,
            Universitätsklinikum, Universität Heidelberg, Springer Nature,
            BioRN-Cluster - Heidelberg ist Wissenschafts-Hotspot und
            DAX-/MDAX-Standort zugleich. Wir bauen n8n-Workflows für
            CSRD/CBAM, Pharma-Compliance, klinische Forschung und
            Druckmaschinen-Service.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Heidelberger Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={155756}
              label="Einwohner Stadt Heidelberg"
              index={0}
            />
            <BackgroundHero.Stat
              value={32178}
              label="Studierende Universität"
              index={1}
            />
            <BackgroundHero.Stat
              value={51000}
              label="Heidelberg-Materials-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Heidelberger Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Heidelberg Materials steuert anders als das DKFZ, der Uni-Klinikum
          anders als Heidelberger Druckmaschinen. Wir bauen für jeden
          Cluster die passenden n8n-Bausteine - von CO2-Bilanz bis zur
          Pharmakovigilanz-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Heidelberg Materials - weltgrößter Baustoffhersteller</Typo.H3>
            <Typo.Paragraph>
              51.000 Konzernbeschäftigte in dutzenden Ländern, Zement,
              Beton, Zuschlagstoffe. CSRD-Datenpipelines, CBAM-Compliance,
              CO2-Bilanzen pro Werk und Multi-Currency-Buchhaltung werden
              mit n8n und SAP S/4HANA verbunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Heidelberger Druckmaschinen - 40 % Weltmarktanteil</Typo.H3>
            <Typo.Paragraph>
              Transformation vom Maschinenbau zum SaaS-/Service-Anbieter.
              Subscription-Management, Predictive Maintenance, IoT-Daten
              installierter Anlagen, Ersatzteil-eCommerce und globale
              Servicelogistik werden mit n8n und SAP Service Cloud verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>DKFZ, EMBL, BioRN - Pharma &amp; Biotech-Cluster</Typo.H3>
            <Typo.Paragraph>
              Größtes deutsches Krebsforschungszentrum, europäisches
              Molekularbiologielabor, 100+ Biotech-Unternehmen. GxP/EMA/FDA,
              klinische Studien, eCRF, GMP-Audits, Sortenschutz und IP-
              Management werden mit n8n und Veeva Vault orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Heidelberg</Typo.H3>
            <Typo.Paragraph>
              17.500 Vollzeitbeschäftigte, Schwerpunkt Onkologie und
              Translational Medicine. DRG-Abrechnung, Drittmittel-Reporting
              an BMBF/EU/DFG, Ethikkommissionen, MDR-Compliance und
              Patientenkommunikation werden mit n8n und KI entlastet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Heidelberg - älteste Uni Deutschlands</Typo.H3>
            <Typo.Paragraph>
              32.178 Studierende, 6.633 internationale. Bewerbungs-,
              Prüfungs-, Visa- und Wohnungsprozesse werden mit n8n digital
              orchestriert - inklusive Drittmittel-Verwaltung und
              Forschungs-Industrie-Kooperationen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>SAP-Region Heidelberg/Walldorf - IT-Mittelstand</Typo.H3>
            <Typo.Paragraph>
              SAP-Konzerne arbeiten hoch digitalisiert, der klassische
              Mittelstand bleibt zurück. Wir bauen n8n als schlanken
              Orchestrator um SAP S/4HANA und BTP herum - ergänzt um
              Microsoft 365, HubSpot und Document AI.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Heidelberg eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Heidelberg ist eine wirtschaftliche Doppelmetropole: einerseits
            eines der weltweit führenden Wissenschafts- und Medizincluster
            (DKFZ, EMBL, Universitätsklinikum), andererseits Sitz von
            Heidelberg Materials (51.000 Konzernbeschäftigte) und
            Heidelberger Druckmaschinen (40 %+ Weltmarktanteil Offset).
            Hinzu kommt die SAP-Region Walldorf und das BioRN-Biotech-
            Cluster mit ca. 100 Unternehmen. CSRD, IVDR, GxP und MDR
            treffen auf hochkomplexe Multi-Country-Compliance.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Heidelberg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={51000}
            subtitle="Heidelberg-Materials-Konzern"
          />
          <KpiCard
            value={17500}
            subtitle="Uni-Klinikum + Universität"
          />
          <KpiCard
            value={40}
            suffix=" %"
            subtitle="Heideldruck Weltmarktanteil Offset"
          />
          <KpiCard
            value={101850}
            subtitle="SV-pflichtig Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/heidelberg.jpg"
            alt="Heidelberg Wissenschaft und Industrie - n8n-Workflows für Pharma, Baustoffe und Druckmaschinen"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>BioRN, DKFZ und 17.500 Klinik-Mitarbeitende - Heidelberg automatisiert Forschung</Typo.H2>
            <Typo.Paragraph>
              Universität, DKFZ und EMBL wickeln zusammen Hunderte Millionen
              Euro Forschungsförderung ab. Mittelverwendung, Audits und
              EU-Reporting sind hochautomatisierungsfähig. Hinzu kommt der
              Schloss-Tourismus mit Millionen Besuchern und der saisonalen
              Hotellerie. Wir bauen Workflows, die Forschung, Versorgung
              und Industrie auf eine gemeinsame n8n-Plattform stellen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
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
        <Typo.H2>Häufige Fragen aus Heidelberg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={heidelbergFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
