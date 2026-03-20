import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import { AnimatedNumber } from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import IndustryFit from "@/components/sections/industry-fit";
import { FaqContainer } from "@/components/ui/faqs";
import SectionHeader from "@/components/ui/section-header";
import { CityLinksFromMeta } from "@/components/standorte/city-links";


export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-koeln",
      preHeadline: "AI Workflows Köln",
      headline: "AI Workflows & Automatisierung in Köln",
      metaTitle: "AI Workflows Köln - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Köln. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Köln",
        "KI Automatisierung Köln",
        "Workflow Automatisierung Köln",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-koeln",
      preHeadline: "n8n Automation Köln",
      headline: "n8n Automation in Köln - Workflows automatisieren",
      metaTitle: "n8n Automation Köln | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Köln. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Köln",
        "n8n Köln",
        "Workflow Automation Köln",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-koeln",
      preHeadline: "n8n Köln",
      headline: "n8n Agentur in Köln",
      metaTitle: "n8n Köln - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Köln. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Köln und Umgebung.",
      keywords: [
        "n8n Köln",
        "n8n Agentur Köln",
        "n8n Beratung Köln",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-koeln",
      preHeadline: "Automation Köln",
      headline: "Automation & Prozessoptimierung in Köln",
      metaTitle: "Automation Köln - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Köln. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Köln",
        "Prozessautomatisierung Köln",
        "Workflow Automation Köln",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-koeln",
      preHeadline: "IT Dienstleister Köln",
      headline: "IT Dienstleister in Köln - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Köln - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Köln. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Köln.",
      keywords: [
        "IT Dienstleister Köln",
        "IT Service Köln",
        "Digitalisierung Köln",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-koeln",
      preHeadline: "KI Beratung Köln",
      headline: "KI Beratung in Köln - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Köln - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Köln. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Köln",
        "KI Lösungen Köln",
        "Künstliche Intelligenz Köln",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Köln",
  slug: "koeln",
  bundesland: "Nordrhein-Westfalen",
  publish: true,
  nearbySmall: [
    "Troisdorf",
    "Dormagen",
    "Hürth",
    "Frechen",
    "Pulheim",
    "Brühl",
    "Wesseling",
    "Kerpen",
    "Bergheim",
    "Niederkassel",
    "Bornheim",
    "Monheim am Rhein",
    "Rösrath",
    "Erftstadt",
  ],
  crossReference: [
    { name: "Bonn", slug: "bonn" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Bergisch Gladbach", slug: "bergisch-gladbach" },
    { name: "Aachen", slug: "aachen" },
  ],
};

const defaultMeta = {
  title: `Workflow-Automatisierung Köln | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in Köln. n8n-Workflows, API-Integrationen und Prozessoptimierung für Medien, Versicherungen und Chemie.`,
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title = overrides?.metaTitle ?? defaultMeta.title;
  const description = overrides?.metaDescription ?? defaultMeta.description;

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "Workflow-Automatisierung Köln",
      "n8n Köln",
      "KI-Lösungen Köln",
      "Prozessautomatisierung Köln",
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
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Köln",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/bluebatch-social-cover.jpg"],
    },
    alternates: {
      canonical: "/standorte/koeln",
    },
  };
}

const faqs = [
  {
    question: "Arbeitet Bluebatch auch mit Kölner Medienunternehmen?",
    answer:
      "Ja, wir verstehen die Anforderungen von Content-Workflows, Redaktionssystemen und Multi-Channel-Distribution. Ob automatisierte Metadaten-Pflege, Cross-Channel-Publishing oder Medienplanung — wir entwickeln n8n-Workflows, die sich nahtlos in bestehende Redaktionsprozesse integrieren.",
  },
  {
    question: "Ist n8n DSGVO-konform?",
    answer:
      "Absolut. n8n wird self-hosted auf Ihrer eigenen Infrastruktur betrieben. Keine Daten verlassen Ihr Netzwerk. Das ist besonders für Versicherungen und Medienunternehmen in Köln relevant, die strenge Datenschutzanforderungen erfüllen müssen.",
  },
  {
    question:
      "Können Versicherungsprozesse mit n8n automatisiert werden?",
    answer:
      "Ja, Claims Processing, Policenverwaltung, Compliance-Reporting und Kunden-Onboarding sind typische Use Cases. Wir haben Erfahrung mit der Anbindung an gängige Versicherungs-Kernsysteme und Legacy-Anwendungen.",
  },
  {
    question:
      "Was unterscheidet Bluebatch von anderen Automatisierungsagenturen?",
    answer:
      "Unser Fokus liegt ausschließlich auf n8n und KI-gestützter Automatisierung. Wir bringen branchenspezifische Expertise mit — insbesondere für die Kölner Kernbranchen Medien, Versicherungen und Chemie — und bieten persönliche Betreuung statt anonymer Ticketsysteme.",
  },
  {
    question:
      "Wie lange dauert die Implementierung eines n8n-Workflows?",
    answer:
      "Ein einzelner Workflow ist typischerweise in 1-2 Wochen einsatzbereit. Komplexere Projekte mit mehreren Integrationen und KI-Komponenten dauern 4-8 Wochen. Nach einem kostenlosen Erstgespräch erhalten Sie eine realistische Zeitschätzung.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  if (!metaCustom.publish) notFound();

  return (
    <>
      {/* Hero */}
      <BackgroundHero imageSrc="/images/digital-marketplace.jpg" overlayOpacity={0.8} opacityBackground="white">
        <BackgroundHero.TopLabel>
          {overrides?.preHeadline ?? "Standort Köln"}
        </BackgroundHero.TopLabel>
        <BackgroundHero.Headline>
          {overrides?.headline ??
            "Workflow-Automatisierung für Kölns Wirtschaft"}
        </BackgroundHero.Headline>
        <BackgroundHero.Description>
          Medien, Versicherungen, Chemie, Messe — Kölns vielfältige
          Wirtschaft verdient maßgeschneiderte n8n-Automatisierung und
          KI-Lösungen. Bluebatch ist Ihr Partner für intelligente
          Prozessoptimierung im Rheinland.
        </BackgroundHero.Description>
        <BackgroundHero.CallToAction>
          <ContactButton icon="chat">
            Kostenlose Erstberatung
          </ContactButton>
        </BackgroundHero.CallToAction>
      </BackgroundHero>

      {/* KPI Stats */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={4}>
          <SimpleCard align="center">
            <Typo.H2>
              <AnimatedNumber value={74} suffix=" Mrd. €" />
            </Typo.H2>
            <Typo.Paragraph textColor="muted">
              Bruttoinlandsprodukt
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="center">
            <Typo.H2>
              <AnimatedNumber value={627} suffix=".200" />
            </Typo.H2>
            <Typo.Paragraph textColor="muted">
              Beschäftigte
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="center">
            <Typo.H2>
              <AnimatedNumber value={50} suffix=".000+" />
            </Typo.H2>
            <Typo.Paragraph textColor="muted">
              Medienbeschäftigte
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="center">
            <Typo.H2>
              <AnimatedNumber value={17} suffix=" Mio." />
            </Typo.H2>
            <Typo.Paragraph textColor="muted">
              Einwohner im 100-km-Radius
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Medienhauptstadt */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/digital-workflow.jpg"
            alt="Digitale Medienproduktion und Content-Workflows in Köln — Automatisierung für TV-Studios und Mediapark"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Medienhauptstadt Deutschland</Typo.H2>
            <Typo.Paragraph>
              Ein Drittel der deutschen TV-Produktion kommt aus Köln. WDR
              — der größte Medienanbieter der EU —, RTL, Brainpool und
              Deutschlandradio haben hier ihren Sitz. Über 50.000 Menschen
              arbeiten in der Medien- und Kommunikationsbranche, allein der
              Mediapark bietet 5.000 Arbeitsplätze.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n automatisiert Content-Workflows zwischen Redaktion,
              Produktion und Distribution. Cross-Channel-Publishing,
              automatisierte Metadaten-Pflege, Social-Media-Scheduling und
              Rechtemanagement — Prozesse, die in Medienhäusern täglich
              Stunden kosten, laufen mit n8n im Hintergrund.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* Versicherungsstandort */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/business-analytics.jpg"
            alt="Versicherungsstandort Köln — Datenanalyse und Prozessautomatisierung für Claims Processing und Policenverwaltung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Versicherungsstandort Nr. 2</Typo.H2>
            <Typo.Paragraph>
              Über 50 Versicherungs- und Rückversicherungsunternehmen haben
              ihren Hauptsitz in Köln, weitere 60 unterhalten
              Niederlassungen. DEVK, Gothaer, AXA, Zurich, Generali und
              DKV prägen den Standort als zweitgrößten
              Versicherungsstandort Deutschlands nach München.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Claims Processing, KYC-Onboarding, Policenverwaltung und
              Compliance-Reporting sind klassische n8n-Use-Cases.
              Besonders die Anbindung an Legacy-Kernsysteme und die
              Integration von InsurTech-Lösungen profitieren von n8ns
              Flexibilität mit über 1.200 Konnektoren.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* Chemie & Industrie */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/process-automation.jpg"
            alt="Chemieindustrie und Prozessautomatisierung in der Region Köln — Qualitätskontrolle und Compliance-Workflows"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Chemie & Industrie am Rhein</Typo.H2>
            <Typo.Paragraph>
              Fast 80.000 Beschäftigte erwirtschaften über ein Viertel des
              deutschen Chemie-Umsatzes in der Region. Lanxess,
              Bayer (Leverkusen), Ineos und ExxonMobil Chemical bilden
              ein Cluster, das durch den Verein ChemCologne vernetzt wird.
              Dazu kommen Ford mit der europäischen E-Auto-Produktion und
              über 150.000 Logistik-Beschäftigte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Qualitätskontrolle, REACH- und GHS-Compliance-Dokumentation,
              Lieferketten-Automatisierung und Chargenmanagement — n8n
              verbindet Labor-, ERP- und Compliance-Systeme zu
              durchgängigen Workflows, die Fehler reduzieren und
              Auditierbarkeit sicherstellen.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* Industry Fit */}
      <ContentWrapper colorScheme="gray">
        <SectionHeader
          smallHeadline="Branchencheck"
          largeHeadline="Für wen passt Automatisierung?"
          description="Nicht jedes Unternehmen profitiert gleich stark von Workflow-Automatisierung. Hier eine ehrliche Einschätzung für den Standort Köln."
          showButton={false}
        />
        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Medienunternehmen mit Multi-Channel-Distribution">
              Redaktionen, TV-Produktionen und Verlage, die Inhalte über
              mehrere Kanäle ausspielen — automatisiertes Publishing spart
              täglich Stunden.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Versicherungen mit hohem Dokumentenaufkommen">
              Claims Processing, Policenverwaltung und
              Compliance-Reporting mit tausenden Dokumenten pro Woche
              profitieren enorm von Automatisierung.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Chemieunternehmen mit Compliance-Anforderungen">
              REACH-Dokumentation, Sicherheitsdatenblätter und
              Qualitätsprotokolle — regulatorische Prozesse, die keine
              Fehler verzeihen.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Handelsunternehmen mit komplexen Lieferketten">
              REWE Group und andere Handelsunternehmen mit
              Bestandsmanagement, automatischer Nachbestellung und
              Omnichannel-Fulfillment.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Messeorganisatoren mit Ausstellermanagement">
              Koelnmesse und Partner mit Registrierung,
              Lead-Management und CRM-Synchronisation für 34.500
              ausstellende Unternehmen jährlich.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Gaming-Studios mit Build- und Release-Pipelines">
              Gamescom-Stadt Köln: CI/CD-Workflows, automatisierte
              QA-Prozesse und Release-Management für Spieleentwickler.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Rein handwerkliche Betriebe ohne digitale Prozesse">
              Wenn keine digitalen Systeme vorhanden sind, fehlt die Basis
              für Workflow-Automatisierung. Hier empfehlen wir zunächst
              eine Digitalisierungsberatung.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Unternehmen ohne IT-Infrastruktur">
              n8n benötigt eine grundlegende IT-Umgebung. Ohne Server,
              Cloud-Zugang oder API-fähige Systeme ist die
              Einstiegshürde zu hoch.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Einmalige Projekte ohne wiederkehrende Abläufe">
              Automatisierung lohnt sich bei wiederkehrenden Prozessen.
              Bei einmaligen Projekten ist der
              Implementierungsaufwand nicht gerechtfertigt.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* Prozess-Teaser */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Unser Vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Idee zum automatisierten Workflow
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ob Medienhaus am Mediapark, Versicherung am Rhein oder
            Chemieunternehmen im Kölner Umland — unser bewährtes
            6-Phasen-Framework bringt Ihre Prozesse strukturiert und
            transparent auf Autopilot.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 text-center">
          <Link
            href="/unser-prozess"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm"
          >
            Unser Prozess im Detail <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </ContentWrapper>

      {/* City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>FAQ zur Workflow-Automatisierung in Köln</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
