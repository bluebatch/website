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
import { Factory, GraduationCap, UtensilsCrossed } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-hagen",
      preHeadline: "AI Workflows Hagen",
      headline: "AI Workflows & Automatisierung in Hagen",
      metaTitle: "AI Workflows Hagen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hagen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hagen",
        "KI Automatisierung Hagen",
        "Workflow Automatisierung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hagen",
      preHeadline: "n8n Automation Hagen",
      headline: "n8n Automation in Hagen - Workflows automatisieren",
      metaTitle: "n8n Automation Hagen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hagen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hagen",
        "n8n Hagen",
        "Workflow Automation Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hagen",
      preHeadline: "n8n Hagen",
      headline: "n8n Agentur in Hagen",
      metaTitle: "n8n Hagen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hagen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hagen und Umgebung.",
      keywords: [
        "n8n Hagen",
        "n8n Agentur Hagen",
        "n8n Beratung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hagen",
      preHeadline: "Automation Hagen",
      headline: "Automation & Prozessoptimierung in Hagen",
      metaTitle: "Automation Hagen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hagen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hagen",
        "Prozessautomatisierung Hagen",
        "Workflow Automation Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hagen",
      preHeadline: "IT Dienstleister Hagen",
      headline: "IT Dienstleister in Hagen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hagen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hagen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hagen.",
      keywords: [
        "IT Dienstleister Hagen",
        "IT Service Hagen",
        "Digitalisierung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hagen",
      preHeadline: "KI Beratung Hagen",
      headline: "KI Beratung in Hagen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hagen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hagen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hagen",
        "KI Lösungen Hagen",
        "Künstliche Intelligenz Hagen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hagen",
  slug: "hagen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Iserlohn",
    "Schwelm",
    "Ennepetal",
    "Gevelsberg",
    "Herdecke",
    "Witten",
    "Wetter (Ruhr)",
    "Lüdenscheid",
    "Schwerte",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Bochum", slug: "bochum" },
    { name: "Hamm", slug: "hamm" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Hagen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Hagen - von C.D. Wälzholz und Bilstein Group über Brandt Zwieback bis zur FernUniversität.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Hagen",
      "Workflow-Automatisierung Hagen",
      "n8n Hagen",
      "KI Automatisierung Hagen",
      "Prozessoptimierung Hagen",
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
          url: "/images/cities/hagen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Hagen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/hagen.jpg"],
    },
    alternates: {
      canonical: "/standorte/hagen",
    },
  };
}

const hagenFaqs = [
  {
    question: "Bilstein, Wälzholz, Hagener Feinstahl - wie laufen CBAM und Werkstoffdaten in der Kaltwalz-Industrie?",
    answer:
      "Kaltband- und Drahtproduzenten brauchen lückenlose CO2-Bilanzierung für CBAM und ESRS-Reporting. n8n verbindet Energiezähler, Stromherkunftsnachweise, Wareneingang und PLM zu einer Pipeline und meldet automatisch an DEHSt und Kunden - inkl. EN 10204-Zeugnis-Generierung.",
  },
  {
    question: "LkSG-Sorgfaltspflichten für Mittelstand: wie automatisieren wir Lieferanten-Audits?",
    answer:
      "Auch Hagener Mittelständler unter 1.000 MA werden als Tier-2-Zulieferer vom OEM in die LkSG-Pflicht gezogen. n8n orchestriert Lieferanten-Self-Assessments, Risiko-Scoring, Eskalations-Workflows und das gesetzlich verlangte Beschwerdeverfahren.",
  },
  {
    question: "FernUni Hagen mit 70.000+ Studierenden - welche Verwaltungs-Workflows lohnen sich?",
    answer:
      "Anmeldungen, Prüfungsverwaltung, Klausurversand, Drittmittel-Reporting und Lernplattform-Integration. n8n verbindet Campus-Management (z.B. CampusOnline), Moodle, SAP HCM und BMBF-Schnittstellen - wichtig bei der Skalierung im Fernstudium.",
  },
  {
    question: "Brandt Zwieback und Lebensmittelproduktion - wie digitalisieren wir IFS Food und HACCP?",
    answer:
      "Allergen-Management, Chargenrückverfolgung, IFS-Food-Audits und Reinigungsnachweise sind in der Backwaren-Produktion zeitkritisch. n8n koppelt MES, Wareneingang und QM zu einer Pipeline und generiert auditfeste Nachweise auf Knopfdruck.",
  },
  {
    question: "ENERVIE / Mark-E als Stadtwerk und KRITIS-Versorger - was ist möglich?",
    answer:
      "Marktkommunikation (MaKo 2024), Smart-Meter-Rollout, BNetzA-Reporting und KRITIS-Meldepflichten ans BSI. n8n betreiben wir self-hosted, BSI-Grundschutz-konform und mit Trennung zwischen IT/OT.",
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
          imageSrc="/images/cities/hagen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Hagen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Hagen -{" "}
                von der Drahtmetropole zur{" "}
                <BackgroundHero.Highlight>Fern-Uni-Verwaltung</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Hagen ist deutsche Drahthauptstadt, Brandt-Sitz und Heim der einzigen staatlichen FernUni. Wir automatisieren genau die Workflows, die ein Tor zum Sauerland braucht - CBAM/LkSG im Stahl, IFS Food in der Lebensmittelproduktion und Massenverwaltung im Fernstudium.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Hagen besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={188000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={70000}
              suffix="+"
              label="FernUni-Studierende"
              index={1}
            />
            <BackgroundHero.Stat
              value={957}
              label="Brandt-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage — Drahtindustrie/FernUni */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/hagen.jpg"
            alt="Drahtindustrie und FernUni in Hagen - Transformation"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Kaltband & Fern-Campus - zwei Welten, gleiche Workflow-DNA</Typo.H2>
            <Typo.Paragraph>
              Wälzholz, Bilstein und Hagener Feinstahl walzen Stahl in Mikrometer-Genauigkeit. Die FernUni betreut mehr Studierende als die meisten Präsenzunis Deutschlands. Beide Welten brauchen End-to-End-Workflows: Energie-/CO2-Daten, Audit-Trails, automatische Reports an Behörden und Kunden. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
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
        <Typo.H2>Wo n8n in Hagen heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Stahl & Drahtindustrie</Typo.H3>
            <Typo.Paragraph>
              CBAM-/CSRD-Reporting, EN 10204-Zeugnisse, LkSG-Sorgfaltspflichten, IATF-16949-Audits und Energiedaten-Pipelines. Anbindung an SAP, PLM, MES und Kunden-Portale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <UtensilsCrossed className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Lebensmittel & Backwaren</Typo.H3>
            <Typo.Paragraph>
              IFS Food, HACCP, Allergen-Management, Chargenrückverfolgung und Reinigungsnachweise. n8n verbindet MES, Wareneingang, QM und EDI an LEH-Zentralen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bildung & Wissenschaft</Typo.H3>
            <Typo.Paragraph>
              FernUni-Skala: Anmeldungen, Klausur-Logistik, Drittmittel-Reporting, Lernplattform-Integration. CampusOnline, Moodle, SAP HCM und BMBF in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel der Drahtindustrie
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn Energiekosten und CBAM zur Existenzfrage werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Hagen war jahrhundertelang Synonym für Drahtfertigung und Kaltband. Heute steht die Stahl- und Drahtindustrie unter dreifachem Druck: Energiekosten, CBAM/CSRD-Compliance und Wettbewerb aus Asien. Gleichzeitig wächst die FernUni in eine Größenordnung von 70.000+ Studierenden, Brandt rollt IFS-Food-Audits aus und ENERVIE muss MaKo 2024 umsetzen. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. ProsCons - Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Hagen hinter sich lässt - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Drahtindustrie unter Energiekosten- und CBAM-Druck"
                description="Kaltwalz- und Drahtfertigung in Hagen kämpft mit deutschen Strompreisen, ab 2026 voll wirksamem CO2-Grenzausgleich und chinesischem Importwettbewerb."
              />
              <ProsCons.Item
                title="Klassische Schwerindustrie schrumpft"
                description="Stahlverarbeiter und Maschinenbauer im südlichen Ruhrgebiet bauen ab - über Jahrzehnte gewachsene Mittelstands-Stellen verschwinden."
              />
              <ProsCons.Item
                title="A45-Talbrücken-Sperrung als Logistik-Bremse"
                description="Sauerland-Anbindung jahrelang massiv eingeschränkt, Umwege belasten Just-in-Time-Lieferanten der Region."
              />
              <ProsCons.Item
                title="Fachkräftemangel im Metall-Mittelstand"
                description="Familienunternehmen ohne IT-Abteilung verlieren Wissen mit ausscheidenden Boomern und finden kaum Nachwuchs für Werkstätten und Verwaltung."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="C.D. Wälzholz & Bilstein Group - Weltklasse-Mittelstand im Kaltband"
                description="Wälzholz mit über 2.500 MA weltweit, Bilstein-Gruppe als deutscher Kaltwalz-Champion - beide investieren in CO2-arme Stahlsorten und digitale Produktion."
              />
              <ProsCons.Item
                title="FernUniversität in Hagen - einzige staatliche Fernuni Deutschlands"
                description="70.000+ Studierende, 2.000+ Mitarbeitende - ein digital-natives Massensystem mit gewaltigem Workflow-Bedarf."
              />
              <ProsCons.Item
                title="Brandt Zwieback - deutscher Marktführer (957 MA)"
                description="Familienunternehmen mit konsequenter Innovation - Marktführer Zwieback, neue Riegel- und Snack-Marken, IFS-Food-Audit-Champion."
              />
              <ProsCons.Item
                title="ENERVIE / Mark-E als regionaler Energie-Anker"
                description="Stadtwerk mit Konzernstruktur, MaKo 2024, Smart-Meter-Rollout und KRITIS-Pflichten - moderner Versorger im Wandel."
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
        <Typo.H2>Häufige Fragen aus Hagen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={hagenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
