import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Bus, Building2, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-recklinghausen",
  rewrites: [
    {
      source: "/ai-workflows-recklinghausen",
      preHeadline: "AI Workflows Recklinghausen",
      headline: "AI Workflows & Automatisierung in Recklinghausen",
      metaTitle: "AI Workflows Recklinghausen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Recklinghausen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Recklinghausen",
        "KI Automatisierung Recklinghausen",
        "Workflow Automatisierung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-recklinghausen",
      preHeadline: "n8n Automation Recklinghausen",
      headline: "n8n Automation in Recklinghausen - Workflows automatisieren",
      metaTitle: "n8n Automation Recklinghausen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Recklinghausen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Recklinghausen",
        "n8n Recklinghausen",
        "Workflow Automation Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-recklinghausen",
      preHeadline: "n8n Recklinghausen",
      headline: "n8n Agentur in Recklinghausen",
      metaTitle: "n8n Recklinghausen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Recklinghausen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Recklinghausen und Umgebung.",
      keywords: [
        "n8n Recklinghausen",
        "n8n Agentur Recklinghausen",
        "n8n Beratung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-recklinghausen",
      preHeadline: "Automation Recklinghausen",
      headline: "Automation & Prozessoptimierung in Recklinghausen",
      metaTitle: "Automation Recklinghausen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Recklinghausen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Recklinghausen",
        "Prozessautomatisierung Recklinghausen",
        "Workflow Automation Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-recklinghausen",
      preHeadline: "IT Dienstleister Recklinghausen",
      headline: "IT Dienstleister in Recklinghausen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Recklinghausen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Recklinghausen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Recklinghausen.",
      keywords: [
        "IT Dienstleister Recklinghausen",
        "IT Service Recklinghausen",
        "Digitalisierung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-recklinghausen",
      preHeadline: "KI Beratung Recklinghausen",
      headline: "KI Beratung in Recklinghausen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Recklinghausen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Recklinghausen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Recklinghausen",
        "KI Lösungen Recklinghausen",
        "Künstliche Intelligenz Recklinghausen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-recklinghausen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Recklinghausen",
  slug: "recklinghausen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Herten",
    "Marl",
    "Castrop-Rauxel",
    "Gladbeck",
    "Oer-Erkenschwick",
    "Haltern am See",
    "Dorsten",
    "Waltrop",
    "Datteln",
  ],
  crossReference: [
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Herne", slug: "herne" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Bochum", slug: "bochum" },
    { name: "Essen", slug: "essen" },
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
    "KI in Recklinghausen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im bevölkerungsreichsten Landkreis Deutschlands.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Recklinghausen", "n8n Recklinghausen", "Workflow-Automatisierung Recklinghausen", "KI Beratung Recklinghausen", "Prozessoptimierung Recklinghausen", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/recklinghausen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Recklinghausen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/recklinghausen.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-recklinghausen",
    },
  };
}

const recklinghausenFaqs = [
  {
    question: "Vestische Straßenbahnen elektrifizieren ihre Busflotte – welche Workflows brauchen wir?",
    answer:
      "E-Bus-Flotten brauchen Ladeplanung, Fahrer-Disposition, Werkstatt-Workflows und Echtzeit-Fahrgastinformation. n8n verbindet Depot-Management, IBIS, Echtzeit-PV, ITCS und EFM-Systeme – inklusive Schnittstelle zum Verkehrsverbund Rhein-Ruhr (VRR).",
  },
  {
    question: "Vivawest hat hier seinen Schwerpunkt – welche Wohnungs-Workflows können wir automatisieren?",
    answer:
      "Mieter-Onboarding, Schadensmanagement via Hausmeister-App, Heizkostenabrechnung nach Heizkostenverordnung, Modernisierungs-Kommunikation und CSRD-Reporting. Wir koppeln Wodis, GES und Domus an Mieter-Portale und WhatsApp.",
  },
  {
    question: "Knappschaft Kliniken kämpfen mit Personalmangel – wo entlastet KI?",
    answer:
      "Patientenaufnahme, ePA-Befüllung, DRG-Abrechnung mit Kostenträgern und Pflegedokumentation sind die Engpässe. AI Agents klassifizieren Eingangspost, extrahieren Befunde und füllen Vorlagen vor – wichtig in Krankenhäusern mit knappem Pflegepersonal.",
  },
  {
    question: "Kreis Recklinghausen ist der bevölkerungsreichste Landkreis Deutschlands – was leistet n8n in der Verwaltung?",
    answer:
      "OZG-konforme Bürger-Self-Services, automatisches Routing von Anträgen an Sachgebiete, KI-Triage von Bürgeranfragen und Aktenführung im DMS. Wir integrieren etablierte Fachverfahren (z.B. AKDB, civento) ohne Big-Bang-Migration.",
  },
  {
    question: "Strukturwandel-Förderung nach Bergbau-Ende: wie dokumentieren wir Mittelverwendung?",
    answer:
      "Strukturstärkungsgesetz, RAG-Stiftung und EU-EFRE verlangen lückenlose Verwendungsnachweise. n8n sammelt Daten aus Buchhaltung, Projektmanagement und Energie-Monitoring, generiert Quartalsberichte und meldet automatisch an die Förderstellen.",
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
          imageSrc="/images/cities/recklinghausen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Recklinghausen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Recklinghausen –{" "}
                vom Bergbau-Vest zum{" "}
                <BackgroundHero.Highlight>bevölkerungsreichsten Landkreis Deutschlands</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus 500.000 Bergleuten und der Zeche Auguste Victoria wurde Vivawest-Bestand, Knappschaft-Klinik-Verbund und Vestische-E-Bus-Flotte. Wir automatisieren genau die Workflows, die das Vest nach 2015 braucht – ÖPNV-Disposition, Mieter-Workflows und Bürger-Self-Services.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Recklinghausen besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={116000}
              label="Einwohner Stadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={615000}
              label="Einwohner Kreis (bevölkerungsreichster DE)"
              index={1}
            />
            <BackgroundHero.Stat
              value={994}
              label="Mitarbeiter Vestische Straßenbahnen"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel im Vest seit 2015
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn 500.000 Bergleute Geschichte sind?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Recklinghausen ist Kreisstadt des bevölkerungsreichsten Landkreises Deutschlands – und Erbe einer ehemaligen Bergbau-Region, in der 2015 mit der Zeche Auguste Victoria in Marl die letzte Förderung endete. Die Vestische elektrifiziert ihre Busflotte, Vivawest modernisiert 120.000 Wohnungen unter GEG-Druck, Knappschaft Kliniken kämpfen mit Pflege-Personalmangel. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. ProsCons – Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was das Vest hinter sich gelassen hat – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Zeche Auguste Victoria geschlossen (2015)"
                description="Letzte Steinkohleförderung des Vests in Marl beendet – Ende einer Ära mit zur Blütezeit 500.000 Bergleuten im Vest."
              />
              <ProsCons.Item
                title="BMW-Reifenwerk und alte Industrie unter Druck"
                description="Klassische Industrie-Großbetriebe der Region bauen ab oder restrukturieren, Zulieferer-Mittelstand muss neu sortieren."
              />
              <ProsCons.Item
                title="Strukturschwacher Landkreis mit hoher Arbeitslosigkeit"
                description="Höhere Arbeitslosenquote als NRW-Durchschnitt, gleichzeitig Sparzwang in Verwaltung und kommunalen Betrieben."
              />
              <ProsCons.Item
                title="Letzter Straßenbahnbetrieb bereits 1982 eingestellt"
                description="Die Vestische musste komplett auf Bus umstellen – heute steht die nächste Transformation an: Elektrifizierung der gesamten Flotte."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Vestische Straßenbahnen – größtes kommunales Busunternehmen im VRR"
                description="994 Beschäftigte, deckt das gesamte Vest, Bottrop und Nord-Gelsenkirchen ab – jetzt mit E-Bus-Ausbau und Echtzeit-Daten."
              />
              <ProsCons.Item
                title="Vivawest mit Regionalschwerpunkt im Vest"
                description="120.000 Wohnungen im Bestand, GdW-Mitglied, massive Modernisierungs-Pipeline für Heizungswende und CSRD-Reporting."
              />
              <ProsCons.Item
                title="Knappschaft Kliniken & Prosper-Hospital"
                description="Bergbau-Erbe als Klinikverbund: ca. 1.500 Beschäftigte Knappschaftskrankenhaus, ca. 1.200 Prosper – Versorgung einer alternden Region."
              />
              <ProsCons.Item
                title="Bevölkerungsreichster Landkreis Deutschlands"
                description="615.000 Einwohner im Kreis Recklinghausen, Verwaltung mit 2.000 Mitarbeitern – Bürger-Workflows in Großstadt-Dimension."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 5. BoundlessImage — Vestische E-Bus-Transformation */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/recklinghausen.jpg"
            alt="Vestische E-Bus-Depot Recklinghausen – Transformation des ÖPNV"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Vestische E-Bus-Depot – wo Diesel war, lädt heute der Akku</Typo.H2>
            <Typo.Paragraph>
              Die Vestische elektrifiziert schrittweise ihre Flotte. Aus dem klassischen Diesel-Depot wird ein Hochleistungs-Ladestandort mit Lastmanagement, Werkstatt-Workflows für Hochvolt-Technik und neuen Schnittstellen zur Stadtwerke-Energieversorgung. n8n verbindet Depot-Management, ITCS, EFM und Echtzeit-PV zu einer Pipeline – ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 — Lösungs-Use-Cases */}
      <ContentWrapper>
        <Typo.H2>Wo n8n im Vest heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Bus className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>ÖPNV & Verkehr</Typo.H3>
            <Typo.Paragraph>
              E-Bus-Ladeplanung, Fahrer-Disposition, Werkstatt-Workflows, IBIS/ITCS- und EFM-Integration. Anbindung an Verkehrsverbund Rhein-Ruhr und Echtzeit-Fahrgastinformation.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Wohnungswirtschaft</Typo.H3>
            <Typo.Paragraph>
              Mieter-Onboarding, Reparatur-Ticketing, Heizkosten- und CO2-Reporting, GEG-Konformität. Anbindung an Wodis, Domus, GES, Hausmeister-Apps und CAFM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Gesundheit & Verwaltung</Typo.H3>
            <Typo.Paragraph>
              Patientenaufnahme, ePA-Befüllung, DRG-Abrechnung und MDR-Doku. Plus OZG-konforme Bürger-Self-Services für Kreis und Stadt.
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
        <Typo.H2>Häufige Fragen aus Recklinghausen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={recklinghausenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
