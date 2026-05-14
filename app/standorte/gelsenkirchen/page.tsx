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
import { Building2, Zap, ShoppingCart } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-gelsenkirchen",
      preHeadline: "AI Workflows Gelsenkirchen",
      headline: "AI Workflows & Automatisierung in Gelsenkirchen",
      metaTitle: "AI Workflows Gelsenkirchen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Gelsenkirchen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Gelsenkirchen",
        "KI Automatisierung Gelsenkirchen",
        "Workflow Automatisierung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-gelsenkirchen",
      preHeadline: "n8n Automation Gelsenkirchen",
      headline: "n8n Automation in Gelsenkirchen - Workflows automatisieren",
      metaTitle: "n8n Automation Gelsenkirchen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Gelsenkirchen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Gelsenkirchen",
        "n8n Gelsenkirchen",
        "Workflow Automation Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-gelsenkirchen",
      preHeadline: "n8n Gelsenkirchen",
      headline: "n8n Agentur in Gelsenkirchen",
      metaTitle: "n8n Gelsenkirchen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Gelsenkirchen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Gelsenkirchen und Umgebung.",
      keywords: [
        "n8n Gelsenkirchen",
        "n8n Agentur Gelsenkirchen",
        "n8n Beratung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-gelsenkirchen",
      preHeadline: "Automation Gelsenkirchen",
      headline: "Automation & Prozessoptimierung in Gelsenkirchen",
      metaTitle: "Automation Gelsenkirchen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Gelsenkirchen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Gelsenkirchen",
        "Prozessautomatisierung Gelsenkirchen",
        "Workflow Automation Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-gelsenkirchen",
      preHeadline: "IT Dienstleister Gelsenkirchen",
      headline: "IT Dienstleister in Gelsenkirchen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Gelsenkirchen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Gelsenkirchen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Gelsenkirchen.",
      keywords: [
        "IT Dienstleister Gelsenkirchen",
        "IT Service Gelsenkirchen",
        "Digitalisierung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-gelsenkirchen",
      preHeadline: "KI Beratung Gelsenkirchen",
      headline: "KI Beratung in Gelsenkirchen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Gelsenkirchen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Gelsenkirchen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Gelsenkirchen",
        "KI Lösungen Gelsenkirchen",
        "Künstliche Intelligenz Gelsenkirchen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Gelsenkirchen",
  slug: "gelsenkirchen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Herten",
    "Marl",
    "Oer-Erkenschwick",
    "Castrop-Rauxel",
    "Dorsten",
    "Haltern am See",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Bochum", slug: "bochum" },
    { name: "Herne", slug: "herne" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Bottrop", slug: "bottrop" },
    { name: "Recklinghausen", slug: "recklinghausen" },
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

  const title = overrides?.metaTitle ?? "KI in Gelsenkirchen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Gelsenkirchen - von ROLLER und Vivawest über Gelsenwasser bis zum FC Schalke 04.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Gelsenkirchen",
      "Workflow-Automatisierung Gelsenkirchen",
      "n8n Gelsenkirchen",
      "KI Automatisierung Gelsenkirchen",
      "Prozessoptimierung Gelsenkirchen",
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
          url: "/images/cities/gelsenkirchen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Gelsenkirchen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/gelsenkirchen.jpg"],
    },
    alternates: {
      canonical: "/standorte/gelsenkirchen",
    },
  };
}

const gelsenkirchenFaqs = [
  {
    question: "Vivawest verwaltet 120.000 Wohnungen - wie automatisieren wir Mieter-Workflows in dieser Größenordnung?",
    answer:
      "Vivawest hat eigene Plattformen. Für regionale Wohnungsverwalter und Vivawest-Tochtergesellschaften bauen wir dieselben Bausteine: Mieterportal, Reparatur-Ticketing via WhatsApp/E-Mail in CAFM-Systeme, Nebenkostenabrechnung, Modernisierungs-Kommunikation - mit Anbindung an Wodis, Domus, GES, immowelt und immoscout.",
  },
  {
    question: "Gelsenwasser fällt unter KRITIS - wie sicher ist n8n für Versorger?",
    answer:
      "Self-hosted, BSI-Grundschutz-konform deploybar, mit Härtung nach CIS-Benchmarks. KRITIS-Meldepflichten ans BSI laufen automatisiert, mit unveränderlichem WORM-Audit-Trail. Wir trennen Workflows nach Schutzbedarfsklassen und betreiben separate n8n-Instanzen für IT/OT.",
  },
  {
    question: "ROLLER hat deutschlandweit Filialen - wie orchestrieren wir EDI und Filialdaten?",
    answer:
      "ROLLER, Möbel-Großhändler und Filialisten brauchen EDI-Anbindung an Lieferanten, automatische Filial-Disposition, Bestandssync zwischen Filialen und ZE-Lager und Reklamations-Workflows. n8n verbindet ERP (z.B. Microsoft Dynamics), Filial-Systeme und EDIFACT/EANCOM-Partner.",
  },
  {
    question: "Strukturwandel-Fördermittel (RAG-Stiftung, Strukturstärkungsgesetz) - wie dokumentieren wir das?",
    answer:
      "Fördermittel verlangen detaillierte Mittelverwendung, Meilensteine, CO2-Einsparungen und Verwendungsnachweise. n8n sammelt Daten aus ERP, Energiemonitoring und Projektmanagement, generiert die Nachweise und versendet sie an Bezirksregierung Münster und Förderbanken.",
  },
  {
    question: "St. Augustinus Klinik-Holding - welche Workflows helfen im Krankenhausverbund?",
    answer:
      "Mehrstandort-Klinikgruppen brauchen einheitliche Patientenaufnahme, gemeinsame Beschaffung, DRG-Abrechnung und MDR-Konformität bei Medizinprodukten. n8n verbindet KIS, ePA, Materialwirtschaft und Kostenträger - ideal bei knappem Pflegepersonal.",
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
          imageSrc="/images/cities/gelsenkirchen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Gelsenkirchen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Gelsenkirchen -{" "}
                von der Zechenstadt zum{" "}
                <BackgroundHero.Highlight>Energiewende-Labor</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Zeche und RAG wurde Vivawest-HQ, Gelsenwasser, ROLLER-Möbelimperium und Solarpark Scholven. Wir automatisieren genau die Workflows, die eine Stadt nach dem Bergbau braucht - Wohnungs-Disposition, KRITIS-Reporting und Filial-EDI.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Gelsenkirchen besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={263000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={6000}
              label="ROLLER-Konzernbeschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={1580}
              label="Gelsenwasser-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage — Solarpark Scholven */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/gelsenkirchen.jpg"
            alt="Solarpark Scholven - Strukturwandel in Gelsenkirchen"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Solarpark Scholven - wo Kraftwerk war, wächst heute Photovoltaik</Typo.H2>
            <Typo.Paragraph>
              Das ehemalige Kohlekraftwerks- und Bergbau-Areal Scholven beherbergt heute einen der größten städtischen Solarparks, daneben Wasserstoff-Erprobung und neue Industrie-Ansiedlungen. Quartiers- und Anlagenmanagement bedeutet: Fördermittelanträge, Genehmigungs-Workflows mit Bezirksregierung Münster, Energie-Reporting an die BNetzA. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
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
            Strukturwandel ist hier seit 2018 Alltag
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn die letzte Zeche geht?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Gelsenkirchen hat 2018 mit dem Ende der RAG-Förderung die letzte Zeche der Region verloren - und mit Vivawest, Gelsenwasser, ROLLER und St. Augustinus neue Säulen aufgebaut. Auf Halden wachsen Solarparks, im Bestand modernisieren Wohnungsgesellschaften Hunderttausende Wohnungen unter CSRD- und GEG-Druck. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 — Lösungs-Use-Cases */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Gelsenkirchen heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Wohnungswirtschaft</Typo.H3>
            <Typo.Paragraph>
              CSRD/ESG-Reporting, Mieter-Self-Service, Reparatur-Ticketing, Heizkostenabrechnung und CO2-Bilanzierung. Anbindung an Wodis, Domus, GES, immowelt, immoscout.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KRITIS & Versorgung</Typo.H3>
            <Typo.Paragraph>
              Gelsenwasser, Stadtwerke und Energiewende-Projekte - sensible Versorgungsdaten. n8n self-hosted, audit-fest und BSI-Grundschutz-tauglich, mit Schnittstellen zu IT/OT-Welt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Handel & Filialnetz</Typo.H3>
            <Typo.Paragraph>
              EDI an Lieferanten, Filial-Disposition, Bestands-Sync zwischen Filialen und ZE-Lager, Reklamations-Workflows. ERP/Dynamics, EDIFACT/EANCOM und Marktplätze in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons - Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Gelsenkirchen hinter sich gelassen hat - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Ende der RAG-Förderung 2018 - Steinkohle Geschichte"
                description="Über Jahrzehnte der größte Arbeitgeber der Stadt, mit der letzten Zeche brach die komplette Lieferkette für Bergbau-Zulieferer weg."
              />
              <ProsCons.Item
                title="Ruhr Oel / BP-Raffinerie unter Druck"
                description="Mineralöl-Standort im Strukturumbruch, Personal- und Investitionsentscheidungen in Richtung erneuerbare Treibstoffe noch unklar."
              />
              <ProsCons.Item
                title="Höchste Arbeitslosenquote in Westdeutschland"
                description="Sozial- und Verwaltungs-Workflows überlastet, Fachkräftemangel in Pflege, IT und Verwaltung verschärft die Lage."
              />
              <ProsCons.Item
                title="FC Schalke 04 in finanzieller Dauerkrise"
                description="Aus Bundesliga abgestiegen, Sponsoring- und Hospitality-Erlöse unter Druck - ein wirtschaftlicher Anker wankt."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Vivawest - größtes privates Wohnungsunternehmen NRWs"
                description="120.000+ Wohnungen, Konzernzentrale in Gelsenkirchen, massive Modernisierungs- und Digitalisierungsoffensive unter GEG und CSRD."
              />
              <ProsCons.Item
                title="Gelsenwasser AG - KRITIS-Versorger mit 1.580 Mitarbeitern"
                description="Überregionaler Wasserversorger mit kommunalen Beteiligungen, BSI-Meldepflichten und Energie-Diversifikation."
              />
              <ProsCons.Item
                title="ROLLER - Konzernzentrale mit 6.000 Beschäftigten"
                description="Deutschlandweiter Möbel-Filialist mit komplexer ERP-, EDI- und Filial-Disposition - Digitalisierung-Vorbild im Möbelhandel."
              />
              <ProsCons.Item
                title="Solarpark Scholven & Wasserstoff-Pilote auf Halden"
                description="Auf ehemaligen Bergbauflächen entstehen Photovoltaik-Großanlagen (Uniper/RWE) und H2-Erprobungsprojekte."
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
        <Typo.H2>Häufige Fragen aus Gelsenkirchen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={gelsenkirchenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
