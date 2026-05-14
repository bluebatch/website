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
import { Car, Plane, Truck, Cog, ShieldCheck, GraduationCap } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bremen",
      preHeadline: "AI Workflows Bremen",
      headline: "AI Workflows & Automatisierung in Bremen",
      metaTitle: "AI Workflows Bremen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bremen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bremen",
        "KI Automatisierung Bremen",
        "Workflow Automatisierung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bremen",
      preHeadline: "n8n Automation Bremen",
      headline: "n8n Automation in Bremen - Workflows automatisieren",
      metaTitle: "n8n Automation Bremen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bremen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bremen",
        "n8n Bremen",
        "Workflow Automation Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bremen",
      preHeadline: "n8n Bremen",
      headline: "n8n Agentur in Bremen",
      metaTitle: "n8n Bremen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bremen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bremen und Umgebung.",
      keywords: [
        "n8n Bremen",
        "n8n Agentur Bremen",
        "n8n Beratung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bremen",
      preHeadline: "Automation Bremen",
      headline: "Automation & Prozessoptimierung in Bremen",
      metaTitle: "Automation Bremen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bremen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bremen",
        "Prozessautomatisierung Bremen",
        "Workflow Automation Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bremen",
      preHeadline: "IT Dienstleister Bremen",
      headline: "IT Dienstleister in Bremen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bremen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bremen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bremen.",
      keywords: [
        "IT Dienstleister Bremen",
        "IT Service Bremen",
        "Digitalisierung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bremen",
      preHeadline: "KI Beratung Bremen",
      headline: "KI Beratung in Bremen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bremen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bremen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bremen",
        "KI Lösungen Bremen",
        "Künstliche Intelligenz Bremen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bremen",
  slug: "bremen",
  bundesland: "Bremen",
  publish: true,
  nearbySmall: [
    "Delmenhorst",
    "Achim",
    "Verden",
    "Osterholz-Scharmbeck",
    "Stuhr",
    "Weyhe",
    "Syke",
  ],
  crossReference: [
    { name: "Oldenburg", slug: "oldenburg" },
    { name: "Bremerhaven", slug: "bremerhaven" },
    { name: "Hannover", slug: "hannover" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Bremen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Bremen - von Mercedes-Benz und Airbus über OHB und ArianeGroup bis BLG Logistics.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Bremen",
      "Workflow-Automatisierung Bremen",
      "n8n Bremen",
      "KI Automatisierung Bremen",
      "Prozessoptimierung Bremen",
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
          url: "/images/cities/bremen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Bremen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/bremen.jpg"],
    },
    alternates: {
      canonical: "/standorte/bremen",
    },
  };
}

const bremenFaqs = [
  {
    question: "Mercedes-Werk Bremen baut C-Klasse, GLC, EQE SUV – wie passt n8n zu Zulieferern?",
    answer:
      "JIT/JIS-Abrufe, EDI/VDA-Belege, Qualitätsdokumentation (IATF 16949), APQP-Phasen und Catena-X-Datenraum-Anbindung sind n8n-Standard. Wir kennen die typischen Schnittstellen zu SAP-Mandanten, Mercedes-Lieferantenportalen und Jaggaer.",
  },
  {
    question: "Airbus, ArianeGroup, OHB – passt n8n zu Aerospace-Compliance?",
    answer:
      "Ja. EN 9100, NADCAP, ITAR, ESA-Standards, Konfigurationsmanagement und Lieferanten-Audits sind extrem dokumentationsintensiv. Wir bauen Workflows, die diese Pflichten reduzieren und ArianeGroup-Kostenziele bei Ariane 6 unterstützen.",
  },
  {
    question: "Hafen Bremerhaven – können wir Zoll- und Yard-Workflows automatisieren?",
    answer:
      "Ja. ATLAS, NCTS, Reederei-Schnittstellen, Yard-Management-Systeme (CTB, Eurogate), CBAM-Reporting und Automobilumschlag-Slots werden in n8n End-to-End orchestriert – inklusive multilingualer Frachtkommunikation.",
  },
  {
    question: "ArcelorMittal stellt auf grünen Stahl um – wie helfen n8n und KI?",
    answer:
      "CO2-Tracking, Herkunftsnachweise nach EU-Taxonomie, Wasserstoff-Logistik, CBAM-Datenpipelines und Förderdokumentation für Transformations-Programme sind klassische n8n-Felder. Wir docken an SAP, Klimaschutz-Tools und BAFA-Schnittstellen an.",
  },
  {
    question: "Atlas Elektronik, Lürssen – wie deckt n8n Wehrtechnik-Compliance ab?",
    answer:
      "BAFA-Anbindung, Dual-Use-Prüfungen, Geheimschutz, Sicherheitsüberprüfungen, langfristige Wartungs- und Ersatzteildokumentation für Marine-Aufträge werden auditfest abgebildet – mit klarer Mandantentrennung pro Projekt.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Analyse über Pilot-Workflows bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/bremen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Bremen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Bremen –{" "}
                Mercedes, Airbus, Raumfahrt und{" "}
                <BackgroundHero.Highlight>Hafenwirtschaft</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Mercedes-Benz, Airbus, ArianeGroup, OHB, BLG Logistics, Beck&apos;s,
            ArcelorMittal, Atlas Elektronik – Bremen ist mit 55,2 % Exportquote
            das exportstärkste Bundesland Deutschlands. Wir bauen
            n8n-Workflows für Tier-1-Zulieferer, Aerospace-Compliance,
            Hafenwirtschaft und maritime Wehrtechnik.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Bremer Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={569000}
              label="Einwohner Stadt Bremen"
              index={0}
            />
            <BackgroundHero.Stat
              value={55.2}
              suffix=" %"
              label="Exportquote (Bundesland-Rekord)"
              index={1}
            />
            <BackgroundHero.Stat
              value={13000}
              label="Mercedes-Werk-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Bremen in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={13000}
            subtitle="Mercedes-Bremen-Beschäftigte"
          />
          <KpiCard
            value={12000}
            subtitle="Aerospace-Beschäftigte Region"
          />
          <KpiCard
            value={6500}
            subtitle="BLG-Logistics-Beschäftigte"
          />
          <KpiCard
            value={2}
            suffix=" Mio."
            subtitle="Fahrzeugumschlag Bremerhaven / Jahr"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Bremen eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Bremen ist das zweitgrößte Mercedes-Werk weltweit, Europas
            zweitwichtigster Raumfahrt-Hub nach Toulouse und Standort des
            viertgrößten Containerhafens Europas. Mit über 2 Mio. umgeschlagenen
            Fahrzeugen pro Jahr in Bremerhaven, 12.000 Beschäftigten in 140
            Luft- und Raumfahrtunternehmen und der grünen Stahlwende bei
            ArcelorMittal entsteht enormer Automatisierungsdruck. Hinzu kommt
            das Verteidigungs-Cluster aus TKMS, Atlas Elektronik und Lürssen,
            das unter strikter Exportkontrolle und Geheimschutz arbeitet.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Bremerhaven Hafen, Airbus Bremen und Mercedes-Werk – n8n-Workflows für Bremens Industrie"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>55,2 % Exportquote – Bremen lebt von durchgängigen Workflows</Typo.H2>
            <Typo.Paragraph>
              Bremen ist das exportstärkste Bundesland Deutschlands. Jede
              Tonne Stahl, jede C-Klasse, jeder Airbus-Rumpf und jeder
              Container muss vier bis sechs Behörden, Reedereien und
              Compliance-Systeme durchlaufen. Wir helfen Tier-2-Zulieferern,
              Werften und Logistikern, mit schlanken n8n-Workflows
              wettbewerbsfähig zu bleiben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Bremer Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Mercedes-Bremen steuert anders als ArianeGroup, BLG anders als
          ArcelorMittal. Wir bauen für jeden Cluster die passenden
          n8n-Bausteine – vom Catena-X-Konnektor bis zur NCTS-Zollanmeldung.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Mercedes-Benz Werk Bremen – C-Klasse, GLC, EQE SUV</Typo.H3>
            <Typo.Paragraph>
              13.000 Beschäftigte, größter Mercedes-Standort nach Sindelfingen.
              Wir bauen Workflows für JIT/JIS-Sequenzierung, EDI/VDA-Belege,
              IATF-16949-Doku, APQP-Phasen und Catena-X-Datenräume entlang
              der gesamten Tier-1-/Tier-2-Wertschöpfung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Plane className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Airbus, ArianeGroup, OHB – Luft- und Raumfahrt</Typo.H3>
            <Typo.Paragraph>
              12.000 Beschäftigte in 140 Firmen, Europas zweitwichtigster
              Raumfahrt-Hub. EN 9100, NADCAP, ITAR und ESA-Standards,
              Konfigurationsmanagement und Lieferanten-Audits werden
              automatisiert – inklusive Kostendruck-Workflows für Ariane 6.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BLG Logistics, Eurogate – Hafen und Containerumschlag</Typo.H3>
            <Typo.Paragraph>
              6.500 BLG-Beschäftigte, Bremerhaven viertgrößter Containerhafen
              Europas, über 2 Mio. Fahrzeuge pro Jahr. ATLAS-/NCTS-Zoll,
              Yard-Management, Reederei-Schnittstellen, CBAM-Reporting und
              multilinguale Frachtkommunikation werden orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>ArcelorMittal Bremen – grüner Stahl mit Wasserstoff</Typo.H3>
            <Typo.Paragraph>
              3.300 Beschäftigte, Hochofen und Stahlwerk in Transformation.
              CO2-Tracking, Herkunftsnachweise nach EU-Taxonomie,
              Wasserstoff-Logistik, CBAM-Datenpipelines und BAFA-
              Förderdokumentation werden in n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Atlas Elektronik (TKMS), Lürssen – maritime Wehrtechnik</Typo.H3>
            <Typo.Paragraph>
              Marinetechnik, U-Boot-Elektronik, Yachtbau, Marineschiffbau.
              BAFA-Exportkontrolle, Dual-Use-Prüfung, Geheimschutz,
              Sicherheitsüberprüfungen und langfristige Service-Doku werden
              mandantengetrennt und auditfest verwaltet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Bremen, DFKI, Fraunhofer, MPI</Typo.H3>
            <Typo.Paragraph>
              3.300 Uni-Beschäftigte, ein dichtes Forschungs-Ökosystem mit
              DFKI, Fraunhofer und Max-Planck. Drittmittel-Verwaltung,
              Förderanträge an BMBF/EU/DFG und Industriekooperationen werden
              als End-to-End-Workflows abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 7.5. Bonus — Bremerhaven & Bremen-Hafen */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Bremerhaven Containerhafen – zweitgrößter Containerumschlag Deutschlands"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Bremerhaven &amp; Bremen-Hafen – zweitgrößter Containerhafen Deutschlands</Typo.H2>
            <Typo.Paragraph>
              4,6 Mio. TEU jährlich, größter Autoverladehafen Europas mit über
              1,7 Mio. Fahrzeugen, Eurogate-Terminals und BLG Logistics als
              Drehkreuz: Bremen lebt Logistik in einer Tiefe, die anderswo
              undenkbar ist. Wir bauen Workflows, die Zollabwicklung (ATLAS),
              Hafenbahn-Slots, EDIFACT-COPRAR-Meldungen, Lieferkettenpflichten
              nach LkSG und CO2-Reporting für Reedereien wie Hapag-Lloyd
              orchestrieren – auditfest und durchgängig.
            </Typo.Paragraph>
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
        <Typo.H2>Häufige Fragen aus Bremen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bremenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
