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
import { Zap, Landmark, Cpu, GraduationCap, Wheat, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-oldenburg",
  rewrites: [
    {
      source: "/ai-workflows-oldenburg",
      preHeadline: "AI Workflows Oldenburg",
      headline: "AI Workflows & Automatisierung in Oldenburg",
      metaTitle: "AI Workflows Oldenburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Oldenburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Oldenburg",
        "KI Automatisierung Oldenburg",
        "Workflow Automatisierung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-oldenburg",
      preHeadline: "n8n Automation Oldenburg",
      headline: "n8n Automation in Oldenburg - Workflows automatisieren",
      metaTitle: "n8n Automation Oldenburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Oldenburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Oldenburg",
        "n8n Oldenburg",
        "Workflow Automation Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-oldenburg",
      preHeadline: "n8n Oldenburg",
      headline: "n8n Agentur in Oldenburg",
      metaTitle: "n8n Oldenburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Oldenburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Oldenburg und Umgebung.",
      keywords: [
        "n8n Oldenburg",
        "n8n Agentur Oldenburg",
        "n8n Beratung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-oldenburg",
      preHeadline: "Automation Oldenburg",
      headline: "Automation & Prozessoptimierung in Oldenburg",
      metaTitle: "Automation Oldenburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Oldenburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Oldenburg",
        "Prozessautomatisierung Oldenburg",
        "Workflow Automation Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-oldenburg",
      preHeadline: "IT Dienstleister Oldenburg",
      headline: "IT Dienstleister in Oldenburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Oldenburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Oldenburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Oldenburg.",
      keywords: [
        "IT Dienstleister Oldenburg",
        "IT Service Oldenburg",
        "Digitalisierung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-oldenburg",
      preHeadline: "KI Beratung Oldenburg",
      headline: "KI Beratung in Oldenburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Oldenburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Oldenburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Oldenburg",
        "KI Lösungen Oldenburg",
        "Künstliche Intelligenz Oldenburg",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-oldenburg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Oldenburg",
  slug: "oldenburg",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Delmenhorst",
    "Cloppenburg",
    "Westerstede",
    "Rastede",
    "Ganderkesee",
    "Bad Zwischenahn",
  ],
  crossReference: [
    { name: "Bremen", slug: "bremen" },
    { name: "Osnabrück", slug: "osnabrueck" },
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
    "KI-Agentur in Oldenburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im nordwestlichen Niedersachsen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Oldenburg", "n8n Oldenburg", "Workflow-Automatisierung Oldenburg", "KI Beratung Oldenburg", "Prozessoptimierung Oldenburg", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/oldenburg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Oldenburg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/oldenburg.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-oldenburg",
    },
  };
}

const oldenburgFaqs = [
  {
    question: "EWE und EWE TEL – wie hilft n8n bei Energie- und Telco-Workflows?",
    answer:
      "EWE ist mit 9.000 Beschäftigten einer der größten Versorger Norddeutschlands mit Glasfaser, Wasserstoff und Smart Grid. Smart-Meter-Workflows, Tarifwechsel, Anschluss-Prozesse, MaKo/MaBiS-Pipelines werden mit n8n DSGVO-konform on-premise abgebildet.",
  },
  {
    question: "Oldenburgische Landesbank (OLB) – wie helfen wir Mittelstands-Banking?",
    answer:
      "OLB ist überregionale Mittelstandsbank mit 1.600 Beschäftigten. KYC, Kreditprozesse, Servicing, MaRisk-/BAIT-/DORA-Compliance werden mit n8n und KI-gestützter Dokumentenverarbeitung weitestgehend automatisiert.",
  },
  {
    question: "CeWe Color – wie unterstützen wir Massenfertigung mit Personalisierung?",
    answer:
      "CeWe ist europäischer Marktführer im Fotoservice (4.000 weltweit). Auftragsabwicklung, Produktionssteuerung, Versand und Retouren werden End-to-End in n8n abgebildet – inklusive E-Commerce-Anbindung und individueller Personalisierung pro Auftrag.",
  },
  {
    question: "OFFIS, Universität, BTC AG – wie automatisieren wir Forschung und IT-Service?",
    answer:
      "OFFIS-Institut, Universität Oldenburg, BTC AG (EWE-Tochter) und Jade Hochschule arbeiten in Medizininformatik, Energie-IT und Verkehr. Förderantragsmanagement, Drittmittelabrechnung, Beschaffung und HR-Workflows werden mit n8n orchestriert.",
  },
  {
    question: "Agribusiness Weser-Ems – wie helfen Workflows in Lebensmittel und Tierhaltung?",
    answer:
      "Bünting-Gruppe (13.000 Beschäftigte regional), Lebensmittelproduzenten und Agrarunternehmen brauchen automatisierte Bestellabwicklung, Track-and-Trace, Chargenmanagement und Filialsteuerung. Wir bauen n8n-Pipelines für IFS-Compliance und Multi-Standort-Logistik.",
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
          imageSrc="/images/cities/oldenburg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Oldenburg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Oldenburg –{" "}
                EWE, OLB und{" "}
                <BackgroundHero.Highlight>Weser-Ems-Versorgungszentrum</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            EWE, BTC AG, Oldenburgische Landesbank, CeWe Color, Carl von
            Ossietzky Universität, OFFIS, Klinikum Oldenburg, Bünting-Gruppe –
            Oldenburg ist Weser-Ems-Zentrum mit 12,5 Mrd. EUR kumuliertem
            Umsatz. Wir bauen n8n-Workflows für Energie- und Telco-Services,
            Mittelstands-Banking, Foto-Massenproduktion und Agribusiness.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Oldenburger Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={176614}
              label="Einwohner Stadt Oldenburg"
              index={0}
            />
            <BackgroundHero.Stat
              value={12.5}
              suffix=" Mrd. €"
              label="Kumulierter Umsatz Top-Unternehmen"
              index={1}
            />
            <BackgroundHero.Stat
              value={9047}
              label="EWE-Konzernbeschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Oldenburg eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Oldenburg vereint Energiewirtschaft (EWE), Banking (OLB),
            Hightech-Dienstleistungen (BTC, OFFIS) und Forschung (Universität,
            Jade Hochschule) an einem einzigen Standort und dient als urbanes
            Versorgungszentrum für eine der größten Agrar- und
            Tierhaltungsregionen Europas (Weser-Ems). EWE steht vor
            Glasfaser-Rollout, Wasserstoff und Smart Grid, OLB unter
            DORA-/MaRisk-Druck, CeWe unter Margendruck im Massengeschäft.
            Hinzu kommt der Offshore-Wind-Hochlauf der Nordsee mit
            Cuxhaven, Wilhelmshaven und Emden.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/oldenburg.jpg"
            alt="Oldenburg EWE, OLB und Weser-Ems-Cluster – n8n-Workflows für nordwestliches Niedersachsen"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Offshore-Wind, Wasserstoff und Agribusiness – Oldenburg als Drehkreuz</Typo.H2>
            <Typo.Paragraph>
              Mit dem Offshore-Wind-Hochlauf der Nordsee gibt es in der
              Region (Cuxhaven, Wilhelmshaven, Emden) massive Anlagen- und
              Service-Bedarfe. Oldenburg fungiert als Engineering-, IT-
              und Finanzdrehkreuz für diesen Cluster. Wir helfen den
              Mittelständlern entlang dieser Wertschöpfungskette, mit
              schlanken n8n-Workflows skalierbar zu bleiben –
              vom Anschluss-Prozess bis zum Wartungs-Ticket.
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
        <Typo.H2>Oldenburg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={9047}
            subtitle="EWE-Konzernbeschäftigte"
          />
          <KpiCard
            value={2100}
            subtitle="BTC-AG-Beschäftigte"
          />
          <KpiCard
            value={1600}
            subtitle="OLB-Beschäftigte"
          />
          <KpiCard
            value={4000}
            subtitle="CeWe weltweit"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Oldenburger Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          EWE steuert anders als die OLB, CeWe anders als die Universität.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine – vom
          Smart-Meter-Workflow bis zur IFS-konformen Agribusiness-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>EWE AG – Energie, Telco und Wasserstoff</Typo.H3>
            <Typo.Paragraph>
              9.047 Konzernbeschäftigte, regionaler Versorger für Energie,
              Wasser, Telekommunikation. Smart-Meter-Rollout, Tarifwechsel,
              Glasfaser-Anschluss-Prozesse, MaKo/MaBiS-Pipelines und
              Wasserstoff-Workflows werden mit n8n DSGVO-konform abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Oldenburgische Landesbank (OLB) – Mittelstandsbank</Typo.H3>
            <Typo.Paragraph>
              1.600 Beschäftigte, gegründet 1869, überregional aktiv. KYC,
              Kreditprozesse, Servicing, MaRisk-/BAIT-/DORA-Compliance
              werden mit n8n und KI-gestützter Dokumentenverarbeitung
              weitestgehend automatisiert – inklusive Mandanten-Reporting.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BTC AG &amp; OFFIS – IT- und Software-Dienstleister</Typo.H3>
            <Typo.Paragraph>
              BTC AG (EWE-Tochter, 2.100 Beschäftigte), OFFIS-Institut und
              dichte IT-Mittelstandsszene. Projektabrechnung, Time
              Tracking, Resource-Forecasting und Förderprogramm-Workflows
              werden mit n8n verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Carl von Ossietzky Universität, Jade Hochschule</Typo.H3>
            <Typo.Paragraph>
              2.850 Uni-Beschäftigte, Vorreiter in Medizininformatik,
              Sustainable Energy und akustischer Forschung.
              Drittmittel-Workflows, Förderantragsmanagement und
              Industriekooperationen werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wheat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bünting-Gruppe &amp; Weser-Ems-Agribusiness</Typo.H3>
            <Typo.Paragraph>
              Bünting (Combi, Famila Nordwest) mit 13.000 Beschäftigten in
              der Region, plus Lebensmittelproduzenten und Agrarunternehmen.
              Bestellabwicklung, Track-and-Trace, Chargenmanagement und
              Filialsteuerung werden mit n8n und IFS-konformen Workflows
              abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CeWe Color &amp; Klinikum Oldenburg</Typo.H3>
            <Typo.Paragraph>
              CeWe als europäischer Marktführer Foto-Service (4.000
              weltweit), plus 3.500 Klinikum-Beschäftigte. Auftrags-
              und Personalisierungs-Workflows bei CeWe, DRG und
              Personalplanung am Klinikum werden mit n8n entlastet.
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
        <Typo.H2>Häufige Fragen aus Oldenburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={oldenburgFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
