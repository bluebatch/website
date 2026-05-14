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
import { FlaskConical, Wheat, Zap, Truck, Cpu, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-mannheim",
  rewrites: [
    {
      source: "/ai-workflows-mannheim",
      preHeadline: "AI Workflows Mannheim",
      headline: "AI Workflows & Automatisierung in Mannheim",
      metaTitle: "AI Workflows Mannheim - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mannheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mannheim",
        "KI Automatisierung Mannheim",
        "Workflow Automatisierung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-mannheim",
      preHeadline: "n8n Automation Mannheim",
      headline: "n8n Automation in Mannheim - Workflows automatisieren",
      metaTitle: "n8n Automation Mannheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mannheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mannheim",
        "n8n Mannheim",
        "Workflow Automation Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-mannheim",
      preHeadline: "n8n Mannheim",
      headline: "n8n Agentur in Mannheim",
      metaTitle: "n8n Mannheim - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mannheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mannheim und Umgebung.",
      keywords: [
        "n8n Mannheim",
        "n8n Agentur Mannheim",
        "n8n Beratung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-mannheim",
      preHeadline: "Automation Mannheim",
      headline: "Automation & Prozessoptimierung in Mannheim",
      metaTitle: "Automation Mannheim - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mannheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mannheim",
        "Prozessautomatisierung Mannheim",
        "Workflow Automation Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-mannheim",
      preHeadline: "IT Dienstleister Mannheim",
      headline: "IT Dienstleister in Mannheim - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mannheim - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mannheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mannheim.",
      keywords: [
        "IT Dienstleister Mannheim",
        "IT Service Mannheim",
        "Digitalisierung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-mannheim",
      preHeadline: "KI Beratung Mannheim",
      headline: "KI Beratung in Mannheim - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mannheim - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mannheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mannheim",
        "KI Lösungen Mannheim",
        "Künstliche Intelligenz Mannheim",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-mannheim",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mannheim",
  slug: "mannheim",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Weinheim",
    "Viernheim",
    "Schwetzingen",
    "Frankenthal",
    "Speyer",
    "Worms",
    "Hockenheim",
    "Lampertheim",
    "Bensheim",
    "Sinsheim",
    "Leimen",
    "Wiesloch",
  ],
  crossReference: [
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Ludwigshafen am Rhein", slug: "ludwigshafen-am-rhein" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
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

  const title =
    overrides?.metaTitle ??
    "KI-Agentur in Mannheim | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im industriellen Herz der Metropolregion Rhein-Neckar.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Mannheim", "n8n Mannheim", "Workflow-Automatisierung Mannheim", "KI Beratung Mannheim", "Prozessoptimierung Mannheim", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/mannheim.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Mannheim",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/mannheim.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-mannheim",
    },
  };
}

const mannheimFaqs = [
  {
    question: "Roche Diagnostics - passt n8n in eine GxP/IVDR-Welt?",
    answer:
      "Ja. Roche Diagnostics ist der weltweit größte Diagnostik-Standort. QMS, IVDR-Konformität, technische Dokumentation, Service-Workflows und Marktüberwachung werden mit n8n und Veeva Vault verbunden - auditfest und mit voller Mandantentrennung.",
  },
  {
    question: "John Deere, Daimler Truck - wie helfen wir Landmaschinen-/Nutzfahrzeug-CPQ?",
    answer:
      "John Deere investierte 80 Mio. EUR in robotische Lackierung. CPQ, Precision-Farming-Daten, autonomes Fahren, After-Sales und Ersatzteilversorgung werden mit n8n und SAP Service Cloud orchestriert - inklusive ISOBUS-/CAN-Daten.",
  },
  {
    question: "MVV Energie und Wärmewende - welche Use-Cases?",
    answer:
      "Smart-Meter-Rollout, Tarifwechsel, Netzanschluss-Prozesse, Wasserstoff-Workflows, BNetzA-Reporting und Bilanzkreis-Daten werden mit n8n abgebildet - ergänzt um Kundenkommunikation und Förderprogramm-Anbindung.",
  },
  {
    question: "SAP Walldorf-Ökosystem - wie passt n8n daneben?",
    answer:
      "SAP ist Backbone, n8n ist der schlanke Orchestrator drumherum. Wir bauen Workflows, die SAP S/4HANA, BTP und SuccessFactors mit Microsoft 365, HubSpot, Slack und Document AI verbinden - ohne mit SAP-Welten zu konkurrieren.",
  },
  {
    question: "Mannheimer Hafen - wie automatisieren wir Trimodal-Logistik?",
    answer:
      "Zweitgrößter Binnenhafen Deutschlands. Trimodal-Tracking (Schiene, Schiff, Lkw), Zoll-Workflows (ATLAS, NCTS), Slot-Management und CBAM-Reporting werden in n8n End-to-End orchestriert.",
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
          imageSrc="/images/cities/mannheim.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Mannheim"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Mannheim -{" "}
                Rhein-Neckar-Cluster aus Pharma, Landmaschinen und{" "}
                <BackgroundHero.Highlight>SAP</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Roche Diagnostics, John Deere, Daimler Truck, MVV Energie,
            Universitätsklinikum, Siemens, ABB, SAP-Achse Walldorf,
            BASF-Achse Ludwigshafen, Mannheimer Hafen - Mannheim ist das
            industrielle Herz der Metropolregion Rhein-Neckar. Wir bauen
            n8n-Workflows für Pharma-Compliance, Landmaschinen-CPQ,
            Energiewende und Trimodal-Logistik.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Mannheimer Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={318035}
              label="Einwohner Stadt Mannheim"
              index={0}
            />
            <BackgroundHero.Stat
              value={58.3}
              suffix=" Mrd. €"
              label="Kumulierter Umsatz Top-Unternehmen"
              index={1}
            />
            <BackgroundHero.Stat
              value={2.3}
              suffix=" Mio."
              label="Einwohner Rhein-Neckar"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/mannheim.jpg"
            alt="Mannheim Rhein-Neckar - n8n-Workflows für Pharma, Landmaschinen und Energie"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Rhein-Neckar-Cluster - Heidelberg, Walldorf, Ludwigshafen in 30 Minuten</Typo.H2>
            <Typo.Paragraph>
              Der typische Mannheimer Mittelständler (50-1.000 MA) liefert
              an BASF, Roche, John Deere oder Daimler. Diese Großkunden
              verlangen Lieferanten-Portale, EDI, Audit-Dokumentation und
              CSRD-Reporting. Wir helfen Mittelständlern, mit schlanken
              n8n-Workflows diese Anforderungen zu erfüllen - ohne eigene
              Großorganisation aufbauen zu müssen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Mannheim in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={8500}
            subtitle="Roche-Diagnostics-Beschäftigte"
          />
          <KpiCard
            value={6500}
            subtitle="MVV-Energie-Beschäftigte"
          />
          <KpiCard
            value={3600}
            subtitle="John-Deere-Beschäftigte Mannheim"
          />
          <KpiCard
            value={201518}
            subtitle="SV-pflichtig Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Mannheimer Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Roche steuert anders als John Deere, MVV anders als der Hafen.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine - vom
          IVDR-Dossier bis zur Trimodal-Tracking-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Roche Diagnostics - weltgrößter Diagnostik-Standort</Typo.H3>
            <Typo.Paragraph>
              8.500 Beschäftigte in Mannheim. QMS, IVDR-Konformität,
              technische Dokumentation, Marktüberwachung und Service-
              Workflows werden mit n8n und Veeva Vault verbunden -
              auditfest und mit Mandantentrennung pro Produktlinie.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wheat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>John Deere &amp; Daimler Truck - Landmaschinen &amp; Nutzfahrzeuge</Typo.H3>
            <Typo.Paragraph>
              John Deere Europa-Hauptsitz, Daimler-Truck-Werk Mannheim mit
              3.500 Beschäftigten. CPQ-Konfiguration, Precision Farming,
              ISOBUS-/CAN-Daten, autonomes Fahren, After-Sales und
              Ersatzteilversorgung werden in n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MVV Energie - größter Arbeitgeber Mannheims</Typo.H3>
            <Typo.Paragraph>
              6.500 Beschäftigte, kommunaler Versorger mit Wasserstoff-
              und Wärmenetz-Ausbau. Smart-Meter-Rollout, Tarifwechsel,
              Netzanschluss-Prozesse, BNetzA-Reporting und Bilanzkreise
              laufen als n8n-Pipelines.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>SAP-Beratungsachse Walldorf-Mannheim</Typo.H3>
            <Typo.Paragraph>
              Eine der dichtesten SAP-Beratungsszenen Deutschlands. Wir
              bauen n8n als schlanken Orchestrator um SAP S/4HANA, BTP
              und SuccessFactors herum - ergänzt um Microsoft 365,
              HubSpot, Slack und Document AI.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Mannheimer Hafen - zweitgrößter Binnenhafen Deutschlands</Typo.H3>
            <Typo.Paragraph>
              Intermodale Containerterminals, Rangierbahnhof und
              Hafen-Slots. Trimodal-Tracking (Schiene, Schiff, Lkw),
              ATLAS-/NCTS-Zoll, Slot-Management und CBAM-Reporting
              werden End-to-End in n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Mannheim (UMM)</Typo.H3>
            <Typo.Paragraph>
              5.000 Beschäftigte, einer der größten
              Gesundheits-Standorte der Region. KI-gestützte Aufnahme-,
              Abrechnungs- und Dokumentationsprozesse sowie eCRF-
              Studienverwaltung entlasten unter Personalmangel.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Mannheim eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Mannheim sitzt mitten im innovationsstärksten Raum Europas:
            Heidelberg (DKFZ, EMBL), Walldorf (SAP), Ludwigshafen (BASF),
            Karlsruhe (KIT) - alle in 30 Minuten erreichbar. Roche
            Diagnostics ist hier weltweit größter Diagnostik-Standort,
            John Deere Europa-Hauptsitz, MVV der größte kommunale
            Energieversorger der Region. 58,3 Mrd. EUR kumulierter Umsatz
            am Standort treffen auf strikteste GxP-, IVDR- und CSRD-
            Anforderungen. Automatisierung ist hier nicht Option, sondern
            Wettbewerbsvorteil.
          </Typo.Paragraph>
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
        <Typo.H2>Häufige Fragen aus Mannheim</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={mannheimFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
