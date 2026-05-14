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
import { Zap, Truck, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-moers",
  rewrites: [
    {
      source: "/ai-workflows-moers",
      preHeadline: "AI Workflows Moers",
      headline: "AI Workflows & Automatisierung in Moers",
      metaTitle: "AI Workflows Moers - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Moers. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Moers",
        "KI Automatisierung Moers",
        "Workflow Automatisierung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-moers",
      preHeadline: "n8n Automation Moers",
      headline: "n8n Automation in Moers - Workflows automatisieren",
      metaTitle: "n8n Automation Moers | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Moers. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Moers",
        "n8n Moers",
        "Workflow Automation Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-moers",
      preHeadline: "n8n Moers",
      headline: "n8n Agentur in Moers",
      metaTitle: "n8n Moers - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Moers. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Moers und Umgebung.",
      keywords: [
        "n8n Moers",
        "n8n Agentur Moers",
        "n8n Beratung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-moers",
      preHeadline: "Automation Moers",
      headline: "Automation & Prozessoptimierung in Moers",
      metaTitle: "Automation Moers - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Moers. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Moers",
        "Prozessautomatisierung Moers",
        "Workflow Automation Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-moers",
      preHeadline: "IT Dienstleister Moers",
      headline: "IT Dienstleister in Moers - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Moers - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Moers. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Moers.",
      keywords: [
        "IT Dienstleister Moers",
        "IT Service Moers",
        "Digitalisierung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-moers",
      preHeadline: "KI Beratung Moers",
      headline: "KI Beratung in Moers - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Moers - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Moers. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Moers",
        "KI Lösungen Moers",
        "Künstliche Intelligenz Moers",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-moers",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Moers",
  slug: "moers",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Kamp-Lintfort",
    "Neukirchen-Vluyn",
    "Rheinberg",
    "Dinslaken",
    "Wesel",
    "Voerde",
  ],
  crossReference: [
    { name: "Duisburg", slug: "duisburg" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Oberhausen", slug: "oberhausen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Moers | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Moers - von Bethanien und EDEKA Rhein-Ruhr bis zur Energie-Achse Niederrhein.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Moers", "n8n Moers", "Workflow-Automatisierung Moers", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/moers.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Moers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/moers.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-moers",
    },
  };
}

const moersFaqs = [
  {
    question: "EDEKA Rhein-Ruhr Regionalsitz in Moers – wie automatisieren wir Filial-Logistik?",
    answer:
      "EDEKA Rhein-Ruhr betreibt hunderte Märkte aus Moers-Utfort. n8n koppelt Zentrallager-WMS, Filial-Bestellsysteme, EDIFACT-Lieferanten und Personaleinsatzplanung – inklusive Promo- und Aktions-Workflows zwischen Zentrale und Markt.",
  },
  {
    question: "Energie-Achse Niederrhein (RWE/Steag/Uniper/ENNI) – welche Workflows brauchen Industriedienstleister?",
    answer:
      "Wartung von Kraftwerken (Walsum, Voerde, Hünxe), Stillstandsplanung, EAM-Anbindung und Auftragsmanagement gegen Konzern-SAP. n8n verbindet Service-Techniker-Apps, ERP und Lieferanten-Portale zu einer Pipeline.",
  },
  {
    question: "Krankenhaus Bethanien als Stiftungsklinik – welche Workflows entlasten Pflege und Verwaltung?",
    answer:
      "Patientenaufnahme, ePA-Integration, DRG-Abrechnung mit Kostenträgern, MDR-Tracking für Medizinprodukte und Personalplanung. AI Agents klassifizieren Eingangsbefunde und Aufnahmedokumente – kritisch bei Pflegepersonal-Mangel.",
  },
  {
    question: "ENNI Stadt & Service – wie skalieren wir Smart-Meter und Wasser-/Abwasser-Workflows?",
    answer:
      "Smart-Meter-Rollout, MaKo 2024, Tarifwechsel, Anschluss-Workflows und Marktkommunikation. Plus Wasser-/Abwasser-Abrechnung und Verkehrs-/Bäder-Verwaltung. n8n self-hosted und BSI-Grundschutz-konform für KRITIS-Versorger.",
  },
  {
    question: "Niederrhein-Gold und Mittelstand: wie startet ein 200-MA-Betrieb mit Workflow-Automatisierung?",
    answer:
      "Klein anfangen: Auftragsannahme automatisieren, Rechnungs-OCR mit Sage/DATEV, EDI für die größten Handelskunden. In 4-8 Wochen läuft die erste Pipeline, danach iterativ in Versand, CRM und Reklamation ausweiten.",
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
          imageSrc="/images/cities/moers.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Moers"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Moers –{" "}
                von Rheinpreussen zur{" "}
                <BackgroundHero.Highlight>Energie- und Logistik-Achse Niederrhein</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Bergbau und Schacht Rheinpreussen wurde EDEKA-Rhein-Ruhr-HQ, Energie-Achse mit RWE/Steag/Uniper und Krankenhaus Bethanien. Wir automatisieren genau die Workflows, die ein Niederrhein-Standort braucht – Filial-Logistik, Kraftwerk-Wartung und Klinik-Disposition.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Moers besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={101503}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={36921}
              label="SVP-Beschäftigte am Standort"
              index={1}
            />
            <BackgroundHero.Stat
              value={1600}
              label="Mitarbeiter Krankenhaus Bethanien"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="EDEKA Rhein-Ruhr Zentrallager Moers-Utfort"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>EDEKA-Zentrallager Moers-Utfort – wo Bergbau war, fährt heute der LKW</Typo.H2>
            <Typo.Paragraph>
              Aus ehemaligen Bergbauflächen wurde Eurotec-Park und EDEKA-Logistik-Drehkreuz für hunderte Märkte am Rhein. Quartiers- und Logistik-Management bedeutet: WMS-Anbindung, EDIFACT-Lieferanten, Promo-Steuerung und Personaleinsatzplanung. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel am linken Niederrhein
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Steinkohle Logistik und Energie werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Moers war eines der historischen Steinkohlenreviere am linken Niederrhein – mit Schacht Rheinpreussen als Symbol. Heute ist die Stadt eingebettet in die Energie-Achse mit RWE/Steag/Uniper-Kraftwerken in Walsum, Voerde und Hünxe, beherbergt den EDEKA-Rhein-Ruhr-Regionalsitz und das Stiftungs-Krankenhaus Bethanien. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Moers heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Handel & Logistik</Typo.H3>
            <Typo.Paragraph>
              EDEKA-Filial-Logistik, EDIFACT/EANCOM, WMS-Anbindung, Personaleinsatzplanung und Promo-Steuerung. TMS, ERP und Marktsysteme in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Energie-Dienstleister & KRITIS</Typo.H3>
            <Typo.Paragraph>
              Kraftwerks-Wartung, EAM-Anbindung, Stillstandsplanung, MaKo 2024 für Stadtwerke (ENNI) und Smart-Meter-Rollout. Self-hosted, BSI-konform.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Gesundheit & Stiftungsklinik</Typo.H3>
            <Typo.Paragraph>
              Patientenaufnahme, KIS-ePA, DRG-Abrechnung und MDR-Workflows. Stiftungsklinik-Effizienz mit AI-Agents zur Vorab-Klassifikation.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Moers hinter sich gelassen hat – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Schacht Rheinpreussen und Bergbau am Niederrhein abgewickelt"
                description="Ehemaliges Steinkohlerevier des linken Niederrheins, mit Schließungen über Jahrzehnte – komplette Wertschöpfungskette des Bergbaus verschwunden."
              />
              <ProsCons.Item
                title="Kohleausstieg an der Energie-Achse Walsum/Voerde"
                description="RWE, Steag/Iqony und Uniper bauen Kohle-Kraftwerke der Region zurück – Personal- und Service-Lieferanten unter Transformations-Druck."
              />
              <ProsCons.Item
                title="Mittelstand mit fragmentierter IT-Landschaft"
                description="Bauzulieferer und Maschinenbauer 50-500 MA arbeiten oft auf Sage/DATEV/Excel-Inseln – Digitalisierungs-Rückstand kostet Margen."
              />
              <ProsCons.Item
                title="Strukturschwacher Niederrhein, demografischer Druck"
                description="Krankenhaus Bethanien und Stadtverwaltung kämpfen mit Fachkräftemangel und alternder Belegschaft."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="EDEKA Rhein-Ruhr Regionalsitz in Moers-Utfort"
                description="Eine der größten EDEKA-Regionalgesellschaften, Zentrallager und hunderte Märkte – Logistik- und Filial-Workflow-Champion."
              />
              <ProsCons.Item
                title="Energie-Achse Niederrhein im Wasserstoff-Hochlauf"
                description="RWE, Steag (Iqony), Uniper und ENNI im Umfeld – Wasserstoff, Power-to-X, neue Regulierung – riesiger Industriedienstleister-Pool."
              />
              <ProsCons.Item
                title="Krankenhaus Bethanien (1.600 MA) – größter direkter Arbeitgeber"
                description="Stiftungsklinik in Trägerschaft mit Schwerpunkt Innere Medizin und Reha – moderne Klinik-Workflows als Effizienz-Hebel."
              />
              <ProsCons.Item
                title="Niederrhein-Gold & ENNI Stadt & Service als Mittelstand-Anker"
                description="Niederrhein-Gold als großer regionaler Getränkeproduzent (600 MA), ENNI als kommunaler Versorger mit Strom/Wasser/Bäder."
              />
            </ProsCons.Pros>
          </ProsCons>
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
        <Typo.H2>Häufige Fragen aus Moers</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={moersFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
