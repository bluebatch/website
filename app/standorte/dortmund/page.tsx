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
import { ShieldCheck, Truck, Cpu, Cog, GraduationCap, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-dortmund",
      preHeadline: "AI Workflows Dortmund",
      headline: "AI Workflows & Automatisierung in Dortmund",
      metaTitle: "AI Workflows Dortmund - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Dortmund. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Dortmund",
        "KI Automatisierung Dortmund",
        "Workflow Automatisierung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-dortmund",
      preHeadline: "n8n Automation Dortmund",
      headline: "n8n Automation in Dortmund - Workflows automatisieren",
      metaTitle: "n8n Automation Dortmund | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Dortmund. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Dortmund",
        "n8n Dortmund",
        "Workflow Automation Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-dortmund",
      preHeadline: "n8n Dortmund",
      headline: "n8n Agentur in Dortmund",
      metaTitle: "n8n Dortmund - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Dortmund. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Dortmund und Umgebung.",
      keywords: [
        "n8n Dortmund",
        "n8n Agentur Dortmund",
        "n8n Beratung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-dortmund",
      preHeadline: "Automation Dortmund",
      headline: "Automation & Prozessoptimierung in Dortmund",
      metaTitle: "Automation Dortmund - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Dortmund. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Dortmund",
        "Prozessautomatisierung Dortmund",
        "Workflow Automation Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-dortmund",
      preHeadline: "IT Dienstleister Dortmund",
      headline: "IT Dienstleister in Dortmund - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Dortmund - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Dortmund. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Dortmund.",
      keywords: [
        "IT Dienstleister Dortmund",
        "IT Service Dortmund",
        "Digitalisierung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-dortmund",
      preHeadline: "KI Beratung Dortmund",
      headline: "KI Beratung in Dortmund - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Dortmund - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Dortmund. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Dortmund",
        "KI Lösungen Dortmund",
        "Künstliche Intelligenz Dortmund",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Dortmund",
  slug: "dortmund",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Witten",
    "Lünen",
    "Unna",
    "Schwerte",
    "Castrop-Rauxel",
    "Kamen",
    "Werne",
    "Iserlohn",
    "Bergkamen",
    "Herdecke",
    "Wetter (Ruhr)",
    "Selm",
    "Waltrop",
  ],
  crossReference: [
    { name: "Bochum", slug: "bochum" },
    { name: "Essen", slug: "essen" },
    { name: "Hagen", slug: "hagen" },
    { name: "Hamm", slug: "hamm" },
    { name: "Herne", slug: "herne" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Dortmund | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Dortmund - von Signal Iduna und Continentale über Wilo und KHS bis Adesso und Materna.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Dortmund",
      "Workflow-Automatisierung Dortmund",
      "n8n Dortmund",
      "KI Automatisierung Dortmund",
      "Prozessoptimierung Dortmund",
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
          url: "/images/cities/dortmund.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Dortmund",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/dortmund.jpg"],
    },
    alternates: {
      canonical: "/standorte/dortmund",
    },
  };
}

const dortmundFaqs = [
  {
    question: "Signal Iduna, Continentale, DAS - wie hilft n8n bei Schaden- und Vertriebsprozessen?",
    answer:
      "Signal Iduna meldet 393 Mio. EUR Rekord-Vertriebsergebnis. Dunkelverarbeitung von Schadensfällen, KI-gestützte Risikoprüfung, Provisionsabrechnung mit Maklern und IDD-konformes Vermittler-Tracking werden in n8n auditfest abgebildet - BaFin/MaRisk/VAIT-tauglich.",
  },
  {
    question: "Fraunhofer IML ist hier zuhause - wie passt n8n zur Logistikforschung?",
    answer:
      "Sehr gut. Yard-Management, Routenoptimierung, Lieferanten-EDI, KI-basierte Forecasts und autonome Intralogistik-Daten werden in n8n orchestriert. Wir machen Forschungsprototypen aus dem Digital Hub Logistics für mittelständische Speditionen industrietauglich.",
  },
  {
    question: "Wilo, KHS - wie automatisieren wir Maschinenbau-Service?",
    answer:
      "Wartungsverträge, IoT-Daten ausgelieferter Anlagen, Ersatzteilbestellungen, Garantie-Workflows und CPQ-Konfigurationen sind klassische After-Sales-Felder. Wir docken an SAP Service Cloud, IoT-Plattformen und Hersteller-Portale an.",
  },
  {
    question: "Adesso, Materna - wir sind IT-Beratung in Dortmund, brauchen wir n8n?",
    answer:
      "Ja. Time Tracking, Projektabrechnung, Vertragsverwaltung, Resource-Forecasting und Ausschreibungs-Workflows sind selbst in IT-Häusern oft fragmentiert. n8n verbindet Jira, Confluence, DATEV, HubSpot und LinkedIn Sales Navigator zu einem schlanken Backoffice.",
  },
  {
    question: "Klinikum Dortmund und Maximalversorgung - passt n8n unter Pflege-Druck?",
    answer:
      "Ja. DRG-Kodierung, MDK-Prüfungen, Patientenkommunikation, OP-Planung und Abrechnung sind mit n8n und KI-gestützter Klassifikation effizient zu orchestrieren - ohne in die Kern-KIS-Systeme einzugreifen.",
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
          imageSrc="/images/cities/dortmund.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Dortmund"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Dortmund -{" "}
                Versicherungs-Hub, Logistik-Forschung und{" "}
                <BackgroundHero.Highlight>IT-Cluster</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Signal Iduna, Continentale, Adesso, Materna, Wilo, KHS, TU Dortmund
            mit Fraunhofer IML, Klinikum Dortmund - aus der einstigen
            Stahl-Stadt wurde der zweitgrößte Versicherungsstandort
            Deutschlands. Wir bauen n8n-Workflows für Versicherungs-IT,
            Logistik-Forschungstransfer und Maschinenbau-Service.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Dortmunder Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={588000}
              label="Einwohner größte Ruhrgebiet-Stadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={11000}
              label="Signal-Iduna-Konzernbeschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={33000}
              label="TU-Dortmund-Studierende"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Dortmunder Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Signal Iduna steuert anders als Wilo, Fraunhofer IML anders als
          Adesso. Wir bauen für jeden Cluster die passenden n8n-Bausteine -
          vom Schadenakten-OCR bis zum IoT-Service-Workflow.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Signal Iduna, Continentale, DAS - Versicherungs-Hub</Typo.H3>
            <Typo.Paragraph>
              Nach München zweitgrößter Versicherungsstandort Deutschlands.
              Signal Iduna mit 11.000 Konzernbeschäftigten meldet
              Rekord-Vertriebsergebnis. Dunkelverarbeitung, IDD-Tracking,
              BaFin/MaRisk/VAIT-Reports und Maklerprovisionen werden mit
              n8n auditfest abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Fraunhofer IML, Digital Hub Logistics - Logistik-Hauptstadt</Typo.H3>
            <Typo.Paragraph>
              Deutsche Hauptstadt der Logistikforschung. Wir machen
              Yard-Management, Routenoptimierung, Lieferanten-EDI,
              KI-Forecasts und autonome Intralogistik aus IML-Prototypen
              industrietauglich - für Speditionen und Kontraktlogistiker.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Adesso, Materna, akquinet - IT-Beratungs-Cluster</Typo.H3>
            <Typo.Paragraph>
              Ca. 10.000 Beschäftigte in der Dortmunder IT-Beratung. Time
              Tracking, Projektabrechnung, Resource-Forecasting,
              Vertragsverwaltung und Pre-Sales-Workflows werden mit n8n,
              Jira, DATEV und HubSpot zu einem schlanken Backoffice
              verbunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Wilo, KHS, Murtfeldt - Maschinenbau-Hidden-Champions</Typo.H3>
            <Typo.Paragraph>
              Wilo (Pumpen), KHS (Abfüllanlagen) und ostwestfälische
              Mittelständler bedienen globale Service-Märkte. CPQ,
              Wartungsverträge, IoT-Daten ausgelieferter Anlagen,
              Ersatzteil-Workflows und Garantieabwicklung werden mit SAP
              Service Cloud verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TU Dortmund - Mikrosystemtechnik &amp; Forschung</Typo.H3>
            <Typo.Paragraph>
              Mit 33.000 Studierenden und 6.700 Beschäftigten plus dem
              TechnologiePark mit 300 Firmen rund um Sensorik und
              Bildverarbeitung. Drittmittel-Reporting, Spin-off-Onboarding
              und Industriekooperationen werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Klinikum Dortmund, Klinikum Westfalen</Typo.H3>
            <Typo.Paragraph>
              5.500 Beschäftigte im größten kommunalen Klinikbetrieb
              Westfalens. DRG-Kodierung, MDK-Prüfungen, Patientenkommunikation,
              OP-Planung und Abrechnung werden unter Personalmangel mit
              KI-gestützten Workflows entlastet - ohne KIS-Eingriff.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Dortmund eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Dortmund hat den erfolgreichsten Strukturwandel der jüngeren
            Industriegeschichte hinter sich: Aus der Stadt von Kohle, Stahl
            und Bier wurde der zweitgrößte Versicherungsstandort Deutschlands,
            die Hauptstadt der Logistikforschung mit Fraunhofer IML und einer
            der dichtesten IT-Beratungs-Cluster Deutschlands mit Adesso,
            Materna und akquinet. Gleichzeitig wachsen Hidden Champions wie
            Wilo und KHS global. Diese Vielfalt erzeugt sehr unterschiedliche
            Automatisierungs-Use-Cases - wir kennen sie alle.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/dortmund.jpg"
            alt="Dortmund Strukturwandel - Versicherung, Logistik und IT-Beratung mit n8n"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Vom Stahlwerk zum Digital Hub - Dortmund automatisiert weiter</Typo.H2>
            <Typo.Paragraph>
              Phoenix-See, Hoesch-Areal und Westfalenhütte zeigen, wie tief
              Dortmunds Wandel geht. Heute prägen Signal Iduna, Fraunhofer
              IML, Adesso und Wilo das Bild. Smart-City-Initiativen,
              Digital-Hub-Logistik und IT-Beratungs-Skalierung treiben
              Workflow-Automatisierung. Wir helfen Versicherern, Speditionen,
              IT-Häusern und Maschinenbauern, n8n als gemeinsames Rückgrat
              zu etablieren.
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
        <Typo.H2>Dortmund in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={393}
            suffix=" Mio. €"
            subtitle="Signal-Iduna-Vertriebsergebnis 2024"
          />
          <KpiCard
            value={11000}
            subtitle="Signal-Iduna-Konzernbeschäftigte"
          />
          <KpiCard
            value={300}
            subtitle="Firmen im TechnologiePark"
          />
          <KpiCard
            value={6700}
            subtitle="TU-Dortmund-Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 7.5. Bonus — Dortmund-Cluster in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Vier Cluster, vier Zahlen</Typo.H2>
        <Typo.Paragraph>
          Dortmund ist mehr als Borussia: Logistik-Knoten Ruhrgebiet,
          Versicherungs-Hauptsitz, Universitätsstadt und IT-Hub.
        </Typo.Paragraph>
        <SimpleGrid cols={4}>
          <KpiCard
            value={130}
            suffix=" Mio. t"
            subtitle="Güter im Logistik-Drehkreuz Dortmund/Westfalen p.a."
          />
          <KpiCard
            value={15000}
            subtitle="Signal-Iduna-Beschäftigte konzernweit"
          />
          <KpiCard
            value={34000}
            subtitle="Studierende TU Dortmund"
          />
          <KpiCard
            value={5000}
            subtitle="Digital-Hub-Beschäftigte am Standort"
          />
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
        <Typo.H2>Häufige Fragen aus Dortmund</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={dortmundFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
