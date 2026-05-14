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
import { FlaskConical, Zap, HardHat } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bottrop",
      preHeadline: "AI Workflows Bottrop",
      headline: "AI Workflows & Automatisierung in Bottrop",
      metaTitle: "AI Workflows Bottrop - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bottrop. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bottrop",
        "KI Automatisierung Bottrop",
        "Workflow Automatisierung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bottrop",
      preHeadline: "n8n Automation Bottrop",
      headline: "n8n Automation in Bottrop - Workflows automatisieren",
      metaTitle: "n8n Automation Bottrop | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bottrop. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bottrop",
        "n8n Bottrop",
        "Workflow Automation Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bottrop",
      preHeadline: "n8n Bottrop",
      headline: "n8n Agentur in Bottrop",
      metaTitle: "n8n Bottrop - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bottrop. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bottrop und Umgebung.",
      keywords: [
        "n8n Bottrop",
        "n8n Agentur Bottrop",
        "n8n Beratung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bottrop",
      preHeadline: "Automation Bottrop",
      headline: "Automation & Prozessoptimierung in Bottrop",
      metaTitle: "Automation Bottrop - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bottrop. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bottrop",
        "Prozessautomatisierung Bottrop",
        "Workflow Automation Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bottrop",
      preHeadline: "IT Dienstleister Bottrop",
      headline: "IT Dienstleister in Bottrop - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bottrop - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bottrop. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bottrop.",
      keywords: [
        "IT Dienstleister Bottrop",
        "IT Service Bottrop",
        "Digitalisierung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bottrop",
      preHeadline: "KI Beratung Bottrop",
      headline: "KI Beratung in Bottrop - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bottrop - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bottrop. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bottrop",
        "KI Lösungen Bottrop",
        "Künstliche Intelligenz Bottrop",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bottrop",
  slug: "bottrop",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Dorsten",
    "Marl",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Oberhausen", slug: "oberhausen" },
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

  const title = overrides?.metaTitle ?? "KI in Bottrop | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Bottrop - von MC-Bauchemie bis zu Energiewende-Projekten der Stadtwerke.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Bottrop",
      "Workflow-Automatisierung Bottrop",
      "n8n Bottrop",
      "KI Automatisierung Bottrop",
      "Prozessoptimierung Bottrop",
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
          url: "/images/cities/bottrop.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Bottrop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/bottrop.jpg"],
    },
    alternates: {
      canonical: "/standorte/bottrop",
    },
  };
}

const bottropFaqs = [
  {
    question: "MC-Bauchemie liefert in 40+ Länder - wie automatisieren wir REACH und Multi-Country-Compliance?",
    answer:
      "REACH, CLP, kundenspezifische Rezepturen und Sicherheitsdatenblätter in 40+ Sprachen sind hochkomplex. n8n koppelt SAP, EHS-Software, REACH-IT und länderspezifische Behörden-Schnittstellen - self-hosted und auditfest, mit zentraler SDB-Pflege.",
  },
  {
    question: "InnovationCity Ruhr / Wärmewende-Projekte - welche Workflows brauchen wir bei Stadtwerken Bottrop?",
    answer:
      "Heizkostenverordnung, CO2-Bepreisung, KWKG-Förderung, Einspeisemanagement und Quartiers-IoT für die Wärmewende. n8n verbindet Energiemonitoring, Stadtwerks-ERP, Förderstellen und Bürger-Portale - wichtig im Modellstadt-Programm.",
  },
  {
    question: "Eurovia Teerbau & Bauwirtschaft - welche Workflows entlasten bei Fachkräftemangel?",
    answer:
      "Projektkalkulationen, digitale Bautagebücher, Subunternehmer-Verträge und Aufmaß-/Abrechnung sind hochgradig manuell. n8n koppelt ERP, Bau-Apps und Aufmaß-Tools, AI-Agents extrahieren Lieferscheine und Stundennachweise - direkter Zeit-Hebel.",
  },
  {
    question: "RAG-Ewigkeitsaufgaben (Grubenwasser, Bodenmonitoring) - wie automatisieren wir die Doku?",
    answer:
      "Grubenwasserhaltung, Pumpenbetrieb, Bodenmonitoring und Senkungs-Tracking müssen über Jahrzehnte dokumentiert werden. IoT-Sensorik wird via n8n in Audit-Trails geschrieben, Monitoring-Dashboards an die RAG-Stiftung gemeldet.",
  },
  {
    question: "Strukturwandel-Förderung & Folgeprojekte - wie hält man Förder-Reporting im Griff?",
    answer:
      "Just Transition Fund, EU-Strukturfonds, NRW-Förderungen und Klimaschutzprojekte verlangen detaillierte Verwendungsnachweise. n8n strukturiert Mittelabfluss, Meilensteine und CO2-Wirkungs-Reports - auditfest gegenüber Bezirksregierung Münster und EU.",
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
          imageSrc="/images/cities/bottrop.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Bottrop"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Bottrop -{" "}
                von der letzten Steinkohle-Zeche zur{" "}
                <BackgroundHero.Highlight>InnovationCity Ruhr</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Prosper-Haniel als letzter deutscher Steinkohle-Zeche wurde Modellstadt für klimagerechten Stadtumbau, MC-Bauchemie-Welt-HQ und HRW-Campus. Wir automatisieren genau die Workflows, die ein InnovationCity-Standort braucht - REACH-Compliance, Förder-Reporting und Wärmewende-Daten.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Bottrop besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={117000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={50}
              suffix=" %"
              label="CO2-Reduktion 2010 bis 2020 (InnovationCity)"
              index={1}
            />
            <BackgroundHero.Stat
              value={2500}
              label="MC-Bauchemie Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Modellstadt für den Strukturwandel des Ruhrgebiets
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn die letzte deutsche Zeche schließt?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mit der Schließung von Prosper-Haniel im Dezember 2018 endete in Bottrop der deutsche Steinkohlebergbau. Seitdem ist die Stadt Modellprojekt für klimagerechten Stadtumbau (InnovationCity Ruhr), erreichte das CO2-Ziel von -50% bis 2020 und positioniert sich als Standort für Bauchemie, Umwelttechnik und Wärmewende. MC-Bauchemie liefert von hier in 40+ Länder, Eurovia baut Straßen, die Hochschule Ruhr West forscht zu Energie. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Bottrop heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bauchemie & Spezial-Industrie</Typo.H3>
            <Typo.Paragraph>
              REACH/CLP, kundenspezifische Rezepturen, mehrsprachige Sicherheitsdatenblätter und Multi-Country-Compliance für globale Bauchemie-Lieferungen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Energiewende & InnovationCity</Typo.H3>
            <Typo.Paragraph>
              Heizkostenverordnung, KWKG, CO2-Bepreisung, Quartiers-IoT, Bürger-Portale und Förder-Reporting für Wärmewende- und Smart-City-Projekte.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HardHat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bauwirtschaft & Bergbau-Erbe</Typo.H3>
            <Typo.Paragraph>
              Projektkalkulation, digitale Bautagebücher, Subunternehmer-Abrechnung und IoT-Doku für RAG-Ewigkeitsaufgaben (Grubenwasser, Bodenmonitoring).
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/bottrop.jpg"
            alt="InnovationCity Ruhr Bottrop - Modellstadt für klimagerechten Stadtumbau"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>InnovationCity Ruhr - wo Prosper-Haniel war, wird heute klimaneutral saniert</Typo.H2>
            <Typo.Paragraph>
              Aus dem ehemaligen Bergbau-Standort wurde bundesweit beachtetes Modellprojekt für klimagerechten Stadtumbau - mit erreichtem CO2-Ziel von -50% bis 2020. Quartiers- und Energiewende-Management bedeutet: Heizkostenverordnung, KWKG-Förderung, Quartiers-IoT, Bürger-Portale. Daneben hält MC-Bauchemie globale REACH-Compliance, Eurovia baut Straßen, RAG dokumentiert Ewigkeitsaufgaben. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Bottrop hinter sich gelassen hat - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Prosper-Haniel geschlossen Dezember 2018"
                description="Letzte deutsche Steinkohlezeche endgültig stillgelegt - Ende einer 200-jährigen Industrie-Ära mit komplettem Wegfall der Bergbau-Wertschöpfungskette."
              />
              <ProsCons.Item
                title="RAG-Ewigkeitsaufgaben binden Region langfristig"
                description="Grubenwasserhaltung, Bodenmonitoring, Pumpenbetrieb und Senkungs-Tracking müssen über Jahrzehnte fortgeführt werden - Dauer-Belastung für Region und RAG-Stiftung."
              />
              <ProsCons.Item
                title="Klassische Brauerei-Tradition unter Druck"
                description="Stauder/Diebels-Region und regionale Brauerei-Mittelständler kämpfen mit sinkendem Bierabsatz und LEH-Konzentration."
              />
              <ProsCons.Item
                title="Mittelstand mit Excel-Backoffice und Inhaberführung"
                description="Wie überall im Ruhrgebiet sind Bottroper Mittelständler oft inhabergeführt mit Excel-getriebenen Prozessen - Digitalisierungs-Rückstand und Nachfolge-Risiken."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="InnovationCity Ruhr - CO2-Ziel -50% bis 2020 erreicht"
                description="Modellstadt für klimagerechten Stadtumbau, bundesweit beachtetes Vorzeigeprojekt mit Folgeprojekten zu zirkulärer Wirtschaft, Smart-City und IoT."
              />
              <ProsCons.Item
                title="MC-Bauchemie (2.500 MA) - globaler Bauchemie-Spezialist"
                description="Liefert in 40+ Länder, Spezial- und Beton-Technologie - einer der größten Familien-Mittelständler der Bauchemie-Branche."
              />
              <ProsCons.Item
                title="Stadtwerke Bottrop & Hochschule Ruhr West"
                description="Stadtwerke als Vorreiter Wärmewende, HRW-Campus mit 2.000 Studierenden und Schwerpunkten in Energietechnik und Informatik."
              />
              <ProsCons.Item
                title="Knappschaftskrankenhaus + Diakonisches Werk"
                description="Beide mit ca. 1.200 Beschäftigten - Bergbau-Erbe als Klinikversorger und größter Sozialwirtschafts-Arbeitgeber der Region."
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
        <Typo.H2>Häufige Fragen aus Bottrop</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bottropFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
