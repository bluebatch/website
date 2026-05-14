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
import { Anchor, UtensilsCrossed, Wind } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bremerhaven",
      preHeadline: "AI Workflows Bremerhaven",
      headline: "AI Workflows & Automatisierung in Bremerhaven",
      metaTitle: "AI Workflows Bremerhaven - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bremerhaven. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bremerhaven",
        "KI Automatisierung Bremerhaven",
        "Workflow Automatisierung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bremerhaven",
      preHeadline: "n8n Automation Bremerhaven",
      headline: "n8n Automation in Bremerhaven - Workflows automatisieren",
      metaTitle: "n8n Automation Bremerhaven | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bremerhaven. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bremerhaven",
        "n8n Bremerhaven",
        "Workflow Automation Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bremerhaven",
      preHeadline: "n8n Bremerhaven",
      headline: "n8n Agentur in Bremerhaven",
      metaTitle: "n8n Bremerhaven - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bremerhaven. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bremerhaven und Umgebung.",
      keywords: [
        "n8n Bremerhaven",
        "n8n Agentur Bremerhaven",
        "n8n Beratung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bremerhaven",
      preHeadline: "Automation Bremerhaven",
      headline: "Automation & Prozessoptimierung in Bremerhaven",
      metaTitle: "Automation Bremerhaven - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bremerhaven. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bremerhaven",
        "Prozessautomatisierung Bremerhaven",
        "Workflow Automation Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bremerhaven",
      preHeadline: "IT Dienstleister Bremerhaven",
      headline: "IT Dienstleister in Bremerhaven - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bremerhaven - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bremerhaven. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bremerhaven.",
      keywords: [
        "IT Dienstleister Bremerhaven",
        "IT Service Bremerhaven",
        "Digitalisierung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bremerhaven",
      preHeadline: "KI Beratung Bremerhaven",
      headline: "KI Beratung in Bremerhaven - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bremerhaven - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bremerhaven. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bremerhaven",
        "KI Lösungen Bremerhaven",
        "Künstliche Intelligenz Bremerhaven",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bremerhaven",
  slug: "bremerhaven",
  bundesland: "Bremen",
  publish: false,
  nearbySmall: [
    "Cuxhaven",
    "Nordenham",
  ],
  crossReference: [
    { name: "Bremen", slug: "bremen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Bremerhaven | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Bremerhaven - von Containerhafen und Fischwirtschaft bis Offshore-Windenergie.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Bremerhaven",
      "Workflow-Automatisierung Bremerhaven",
      "n8n Bremerhaven",
      "KI Automatisierung Bremerhaven",
      "Prozessoptimierung Bremerhaven",
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
          url: "/images/cities/bremerhaven.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Bremerhaven",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/bremerhaven.jpg"],
    },
    alternates: {
      canonical: "/standorte/bremerhaven",
    },
  };
}

const bremerhavenFaqs = [
  {
    question: "Fischwirtschaft mit >50% Marktanteil – wie automatisieren wir IUU- und MSC-Doku?",
    answer:
      "EU-Fischereiverordnung (IUU – Illegal, Unreported, Unregulated Fishing), MSC-/ASC-Zertifizierung, Allergen-Management und Chargen-Rückverfolgung von Fang bis Tiefkühlfilet sind hochfrequent. n8n koppelt ERP, MES, Wareneingang und EU-Datenbanken zu auditfesten Pipelines – wichtig für Frosta, Nordsee und Deutsche See.",
  },
  {
    question: "Eurogate, BLG Logistics & Auto-Umschlag >2 Mio. Fahrzeuge/Jahr – welche Hafen-Workflows?",
    answer:
      "Slot-Management, ATLAS/NCTS-Zoll, Container-Verfolgung, EDI an Reedereien (CODECO, BAPLIE), Yard-Management und Auto-Compound-Disposition. n8n verbindet TOS, TMS und Cargo-Plattformen 24/7 – wichtig im Vorlauf CBAM und EU-Zollkodex 2025.",
  },
  {
    question: "Offshore-Wind-Service: wie helfen Workflows beim Crew-Transport und Wartungs-Tracking?",
    answer:
      "Service-Wind-Techniker fahren mit CTV/SOV raus, brauchen HSE-Briefings, Ersatzteil-Logistik und lückenlose Wartungs-Dokumentation. n8n integriert CMMS, Crew-Apps und Wetterdienste – wichtig für Deutsche WindTechnik, EEW und andere Service-Provider.",
  },
  {
    question: "AWI und Klimaforschung – wie automatisieren wir Drittmittel- und Forschungs-Workflows?",
    answer:
      "EU Horizon, BMBF, ESA, US-NSF mit unterschiedlichen Reporting-Standards. n8n synchronisiert SAP, Projektmanagement und Drittmittel-Verwaltung, generiert Berichte und meldet automatisch an Förderbanken – wichtig bei Polarstern-Forschungsprojekten.",
  },
  {
    question: "Lloyd-Werft Kreuzfahrt-Refit – welche Workflows brauchen wir bei ISM-Code und MARPOL?",
    answer:
      "Refit-Projekte verlangen ISM-Code-konforme Doku, Subunternehmer-Koordination, ISO 9001/14001 und MARPOL-Nachweise. n8n bündelt Projektmanagement, Klassifikations-Schnittstellen (DNV, Lloyd's Register) und Werften-EHS zu einer auditfesten Pipeline.",
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
          imageSrc="/images/cities/bremerhaven.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Bremerhaven"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Bremerhaven –{" "}
                vom Senvion-Aus zum{" "}
                <BackgroundHero.Highlight>Offshore-Service- und Containerhub</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus der Senvion-Insolvenz wurde ein Offshore-Service-Cluster, parallel laufen Eurogate, BLG und 200.000 t Fischverarbeitung im 24/7-Modus. Wir automatisieren genau die Workflows, die ein Hafen-Standort im Wandel braucht – ATLAS, IUU-Doku und Offshore-Service.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Bremerhaven besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={113000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={200000}
              suffix=" t"
              label="Fischverarbeitung jährlich (über 50% DE)"
              index={1}
            />
            <BackgroundHero.Stat
              value={2}
              suffix=" Mio."
              label="Auto-Umschlag/Jahr"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Bremerhaven heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Anchor className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hafen, Container & Auto-Umschlag</Typo.H3>
            <Typo.Paragraph>
              ATLAS/NCTS-Zoll, TOS- und EDI-Anbindung an Reedereien (CODECO/BAPLIE), Slot-Management, Yard-Disposition und Auto-Compound-Steuerung – 24/7-fähig.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <UtensilsCrossed className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Fisch & Tiefkühlkost</Typo.H3>
            <Typo.Paragraph>
              IUU-Doku, MSC/ASC-Zertifizierung, Allergen-Management, Chargenrückverfolgung von Fang bis TK-Produkt. ERP, MES und LEH-EDI in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wind className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Offshore-Wind & Maritime Service</Typo.H3>
            <Typo.Paragraph>
              CMMS-Anbindung, Crew-Transport-Tracking, HSE-Briefings, Ersatzteil-Logistik für CTV/SOV. Plus ISM-Code- und MARPOL-Workflows für Lloyd-Werft.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Bremerhaven hinter sich gelassen hat – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Senvion-Insolvenz 2019 – Offshore-Hersteller weg"
                description="Senvion (ehemals REpower) war führender Offshore-Turbinen-Hersteller in Bremerhaven – Insolvenz und Werksschließung trafen die Stadt hart."
              />
              <ProsCons.Item
                title="Hochseefischerei seit Jahrzehnten Geschichte"
                description="Bremerhaven war einst Deutschlands größter Fischereihafen – heute kommt der Fisch importiert über See, traditionelle Fischer-Berufe sind verschwunden."
              />
              <ProsCons.Item
                title="Haushaltsnotlage-Stadt mit Sparzwang"
                description="Bremerhaven gehört zu den finanzschwächsten Großstädten Deutschlands, Verwaltung und Sozialleistungen unter massivem Druck."
              />
              <ProsCons.Item
                title="Adwen/BARD-Erbe – frühe Offshore-Pioniere insolvent"
                description="Mehrere Offshore-Wind-Pioniere der ersten Generation (Adwen, BARD) verschwunden – Stadt musste sich auf Service- und Logistik-Rolle neu aufstellen."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="4.-größter Containerhafen Europas + Auto-Umschlag"
                description="Eurogate Container-Terminal mit 1.500 MA, BLG Logistics mit 2.500 MA – >2 Mio. Fahrzeuge/Jahr und 24/7-Hafenbetrieb."
              />
              <ProsCons.Item
                title="Fisch- und Tiefkühl-Cluster (>200.000 t/a, >50% DE-Marktanteil)"
                description="Frosta, Nordsee, Deutsche See und Iglo-Tradition – über 4.000 Beschäftigte im Fischereihafen, Lebensmittel-Champion an der Nordsee."
              />
              <ProsCons.Item
                title="Offshore-Wind-Service-Hub mit seeschifftiefem Wasser"
                description="Deutsche WindTechnik, EEW und Service-Provider nutzen den direkten Tiefwasser-Zugang – Bremerhaven ist Service-Logistik-Drehkreuz für Nord- und Ostsee-Windparks."
              />
              <ProsCons.Item
                title="Alfred-Wegener-Institut + Klimahaus 8° Ost"
                description="AWI mit 1.200 Beschäftigten und Polarstern-Schiff als deutscher Hub für Polar- und Meeresforschung, Klimahaus als Tourismus-Magnet."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Containerhafen und Offshore-Hub Bremerhaven"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Containerhafen & Offshore-Hub – wo Senvion war, fährt heute das Service-CTV</Typo.H2>
            <Typo.Paragraph>
              Aus dem ehemaligen Senvion-Areal wurden Service-Standorte für Offshore-Wind. Parallel laufen Eurogate und BLG den Container- und Auto-Umschlag, im Fischereihafen werden 200.000 t Fisch verarbeitet, das AWI orchestriert globale Klimaforschung. Quartiers- und Logistik-Management bedeutet: Zollabwicklung, Service-Pipelines, IUU-Doku. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
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
            Strukturwandel von Fischerei zur Offshore-Wind- und Klima-Forschung
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Hochseefischerei Offshore-Wind und Klimaforschung wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bremerhaven hat seine Hochseefischerei lange hinter sich – heute ist die Stadt zweitgrößte im Land Bremen mit 4.-größtem Containerhafen Europas, über 50% Marktanteil Fischverarbeitung Deutschland und einer Offshore-Wind-Service-Achse, die nach dem Senvion-Aus 2019 neu sortiert wurde. Dazu Alfred-Wegener-Institut, Lloyd-Werft und das Klimahaus 8° Ost als Tourismus-Anker. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
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
        <Typo.H2>Häufige Fragen aus Bremerhaven</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bremerhavenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
