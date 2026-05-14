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
import { FlaskConical, Newspaper, GraduationCap } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-halle-saale",
      preHeadline: "AI Workflows Halle (Saale)",
      headline: "AI Workflows & Automatisierung in Halle (Saale)",
      metaTitle: "AI Workflows Halle (Saale) - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Halle (Saale). KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Halle (Saale)",
        "KI Automatisierung Halle (Saale)",
        "Workflow Automatisierung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-halle-saale",
      preHeadline: "n8n Automation Halle (Saale)",
      headline: "n8n Automation in Halle (Saale) - Workflows automatisieren",
      metaTitle: "n8n Automation Halle (Saale) | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Halle (Saale). Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Halle (Saale)",
        "n8n Halle (Saale)",
        "Workflow Automation Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-halle-saale",
      preHeadline: "n8n Halle (Saale)",
      headline: "n8n Agentur in Halle (Saale)",
      metaTitle: "n8n Halle (Saale) - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Halle (Saale). Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Halle (Saale) und Umgebung.",
      keywords: [
        "n8n Halle (Saale)",
        "n8n Agentur Halle (Saale)",
        "n8n Beratung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-halle-saale",
      preHeadline: "Automation Halle (Saale)",
      headline: "Automation & Prozessoptimierung in Halle (Saale)",
      metaTitle: "Automation Halle (Saale) - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Halle (Saale). Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Halle (Saale)",
        "Prozessautomatisierung Halle (Saale)",
        "Workflow Automation Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-halle-saale",
      preHeadline: "IT Dienstleister Halle (Saale)",
      headline: "IT Dienstleister in Halle (Saale) - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Halle (Saale) - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Halle (Saale). Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Halle (Saale).",
      keywords: [
        "IT Dienstleister Halle (Saale)",
        "IT Service Halle (Saale)",
        "Digitalisierung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-halle-saale",
      preHeadline: "KI Beratung Halle (Saale)",
      headline: "KI Beratung in Halle (Saale) - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Halle (Saale) - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Halle (Saale). Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Halle (Saale)",
        "KI Lösungen Halle (Saale)",
        "Künstliche Intelligenz Halle (Saale)",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Halle (Saale)",
  slug: "halle-saale",
  bundesland: "Sachsen-Anhalt",
  publish: false,
  nearbySmall: [
    "Merseburg",
    "Weißenfels",
    "Bernburg (Saale)",
    "Naumburg (Saale)",
    "Bitterfeld-Wolfen",
    "Schkopau",
    "Dessau-Roßlau",
    "Delitzsch",
  ],
  crossReference: [
    { name: "Leipzig", slug: "leipzig" },
    { name: "Magdeburg", slug: "magdeburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Halle | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Halle - von Chemiepark Leuna über das Universitätsklinikum bis zum MDR-Hörfunkzentrum.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Halle (Saale)",
      "Workflow-Automatisierung Halle (Saale)",
      "n8n Halle (Saale)",
      "KI Automatisierung Halle (Saale)",
      "Prozessoptimierung Halle (Saale)",
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
          url: "/images/cities/halle-saale.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Halle (Saale)",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/halle-saale.jpg"],
    },
    alternates: {
      canonical: "/standorte/halle-saale",
    },
  };
}

const hallesaaleFaqs = [
  {
    question: "Chemiepark Leuna mit 100+ Unternehmen - wie automatisieren wir REACH, CLP und Störfall-Doku?",
    answer:
      "REACH-Registrierungen, CLP-Kennzeichnung in 25+ Sprachen, ADR/RID-Gefahrgut, Störfallverordnung und IED-Industrie-Emissionsberichte sind hochkomplex. n8n verbindet SAP, EHS-Software, Behörden-Schnittstellen (REACH-IT, ELER) und Sicherheits-Audit-Datenbanken - auditfest und self-hosted.",
  },
  {
    question: "Wasserstoff-Projekte (Total Leuna, Refhyne) - welche Workflows helfen bei Förder- und Genehmigungs-Pipeline?",
    answer:
      "Grüner Wasserstoff in Leuna verlangt Genehmigungs-Workflows über mehrere Behördenebenen (BImSchG, BNetzA, Bezirksregierung), Förder-Reporting (IPCEI, BMWK) und H2-Herkunftsnachweise (CertifHy, RED-II). n8n strukturiert mehrjährige Projekt-Lifecycles.",
  },
  {
    question: "MDR-Hörfunkzentrum & Mitteldeutsches Druck- und Verlagshaus - welche Workflows lohnen sich?",
    answer:
      "Print-/Web-/Audio-/Video-Workflow-Integration, Redaktionssysteme, Rechte-Clearing, Werbevermarktung und Vertriebslogistik der MZ-Tageszeitung. n8n verbindet CMS, DAM, Rechtemanagement und Anzeigen-Systeme.",
  },
  {
    question: "Universitätsklinikum Halle (3.900 MA) - welche Workflows entlasten Versorgung und Forschung?",
    answer:
      "DRG-Abrechnung, Drittmittel-Reporting der Forschungsprojekte, Ethikkommissionen, eCRF und KIS-ePA-Integration. AI Agents klassifizieren Befunde und unterstützen klinische Studien-Logistik - wichtig bei Personalmangel.",
  },
  {
    question: "Strukturwandel-Förderung Kohleausstieg - wie dokumentieren wir Mittelverwendung?",
    answer:
      "Strukturstärkungsgesetz Kohleregionen verlangt Nachweise zu Meilensteinen, Kofinanzierung, CO2-Effekten und Beschäftigungszielen. n8n sammelt Daten aus ERP, Projektmanagement und Energie-Monitoring und meldet automatisch an STBA und EU-EFRE.",
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
          imageSrc="/images/cities/halle-saale.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Halle (Saale)"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Halle (Saale) -{" "}
                Tor zum Mitteldeutschen Chemiedreieck und{" "}
                <BackgroundHero.Highlight>Wasserstoff-Hub</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus DDR-Schwerindustrie wurde Chemiepark Leuna mit 100+ Unternehmen, Universitätsklinikum, MDR-Hörfunkzentrale und Wasserstoff-Pilot. Wir automatisieren genau die Workflows, die ein mitteldeutsches Industrie-Zentrum braucht - REACH, H2-Herkunftsnachweise und Redaktions-Pipelines.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Halle besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={226800}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={100}
              suffix="+"
              label="Unternehmen Chemiepark Leuna (13 km²)"
              index={1}
            />
            <BackgroundHero.Stat
              value={3900}
              label="MA Universitätsklinikum"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel im Chemiedreieck
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus DDR-Schwerindustrie ein Wasserstoff-Hub wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Halle ist die größte Stadt Sachsen-Anhalts und Tor zum Mitteldeutschen Chemiedreieck (Halle-Merseburg-Bitterfeld) - Deutschlands größtem geschlossenen Chemiecluster. Auf 13 km² arbeiten im Chemiepark Leuna 100+ Unternehmen aus 10 Nationen. Daneben wachsen Universitätsklinikum, MDR-Hörfunkzentrale, Mitteldeutsches Druck- und Verlagshaus und Wasserstoff-Pilotprojekte. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/halle-saale.jpg"
            alt="Chemiepark Leuna und Wasserstoff-Hub Halle"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Chemiepark Leuna & Wasserstoff-Hub - wo Buna war, fließt heute grüner H2</Typo.H2>
            <Typo.Paragraph>
              Aus dem ehemaligen DDR-Chemie-Erbe wurde mit InfraLeuna eine Industrie-Infrastruktur, die 100+ Chemieunternehmen aus 10 Nationen anzieht - jetzt mit Total Leuna, Refhyne und Linde als Wasserstoff-Pionieren. Quartiers- und Anlagen-Management bedeutet: REACH, CSRD, H2-Herkunftsnachweise, IPCEI-Reporting. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Halle heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Chemie & Wasserstoff</Typo.H3>
            <Typo.Paragraph>
              REACH/CLP, Störfallverordnung, IED-Emissionen, ADR/RID, H2-Herkunftsnachweise (CertifHy, RED-II) und Förder-Reporting (IPCEI, BMWK).
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Forschung & Klinikum</Typo.H3>
            <Typo.Paragraph>
              Drittmittel-Verwaltung, DRG-Abrechnung, eCRF, Ethik-Kommissionen, KIS-ePA und akademische Lehre an MLU und Uniklinikum.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Newspaper className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Medien & Verlag</Typo.H3>
            <Typo.Paragraph>
              Print-/Web-/Audio-/Video-Workflows, Redaktionssysteme, DAM, Rechtemanagement und Anzeigen-Systeme für MDR und Mitteldeutsches Druck- und Verlagshaus.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Halle hinter sich lässt - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="DDR-Chemie-Erbe weitgehend abgewickelt"
                description="Klassische Buna-/Leuna-Chemie der DDR-Zeit ist verschwunden, riesige Brachflächen wurden in 20+ Jahren mühsam saniert und neu vermarktet."
              />
              <ProsCons.Item
                title="Strukturschwacher Osten - Fachkräftekonkurrenz mit Leipzig"
                description="Halle steht in direkter Konkurrenz zu Leipzig um Fachkräfte, gleichzeitig kämpft die Stadt mit Bevölkerungsschwund und Sparzwang."
              />
              <ProsCons.Item
                title="Bergbau-Erbe Mitteldeutsches Braunkohlerevier"
                description="Kohleausstieg trifft die Region Halle-Leipzig hart, MIBRAG und LEAG mit Tagebau-Reduktion, klassische Bergbau-Service-Lieferanten unter Druck."
              />
              <ProsCons.Item
                title="Print-Erbe der MZ unter Online-Druck"
                description="Mitteldeutsches Druck- und Verlagshaus (MZ-Tageszeitung) muss klassisches Print-Geschäft mit Digital-Migration neu erfinden."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Chemiepark Leuna - 100+ Unternehmen, 13 km², 10 Nationen"
                description="Deutschlands größtes geschlossenes Chemiecluster, mit Domo, Linde, Total, UPM und Dow - plus 'Chemiepark Leuna 3' im Aufbau für Bioökonomie."
              />
              <ProsCons.Item
                title="Wasserstoff-Hub mit Total Leuna, Refhyne und Linde"
                description="Grüne H2-Großprojekte, IPCEI-Förderung, neue Pipelines - das Chemiedreieck wird Deutschlands wichtigste Wasserstoff-Demonstrationsregion."
              />
              <ProsCons.Item
                title="Martin-Luther-Universität + Uniklinikum (5.000 + 3.900 MA)"
                description="Traditionsreiche Universität mit Pharmazie- und Chemie-Forschung, Universitätsklinikum als regionaler Versorger - plus IWH und Fraunhofer-Institute."
              />
              <ProsCons.Item
                title="MDR-Hörfunkzentrale und Medienstandort"
                description="Halle ist Mediensitz für Mitteldeutschland mit MDR-Standort, größter Radiostandort Mitteldeutschlands, plus Filmförderung und Multimedia-Cluster."
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
        <Typo.H2>Häufige Fragen aus Halle</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={hallesaaleFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
