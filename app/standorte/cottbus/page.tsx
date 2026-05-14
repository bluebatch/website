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
import { Zap, GraduationCap, TrainFront } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-cottbus",
      preHeadline: "AI Workflows Cottbus",
      headline: "AI Workflows & Automatisierung in Cottbus",
      metaTitle: "AI Workflows Cottbus - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Cottbus. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Cottbus",
        "KI Automatisierung Cottbus",
        "Workflow Automatisierung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-cottbus",
      preHeadline: "n8n Automation Cottbus",
      headline: "n8n Automation in Cottbus - Workflows automatisieren",
      metaTitle: "n8n Automation Cottbus | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Cottbus. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Cottbus",
        "n8n Cottbus",
        "Workflow Automation Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-cottbus",
      preHeadline: "n8n Cottbus",
      headline: "n8n Agentur in Cottbus",
      metaTitle: "n8n Cottbus - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Cottbus. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Cottbus und Umgebung.",
      keywords: [
        "n8n Cottbus",
        "n8n Agentur Cottbus",
        "n8n Beratung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-cottbus",
      preHeadline: "Automation Cottbus",
      headline: "Automation & Prozessoptimierung in Cottbus",
      metaTitle: "Automation Cottbus - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Cottbus. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Cottbus",
        "Prozessautomatisierung Cottbus",
        "Workflow Automation Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-cottbus",
      preHeadline: "IT Dienstleister Cottbus",
      headline: "IT Dienstleister in Cottbus - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Cottbus - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Cottbus. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Cottbus.",
      keywords: [
        "IT Dienstleister Cottbus",
        "IT Service Cottbus",
        "Digitalisierung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-cottbus",
      preHeadline: "KI Beratung Cottbus",
      headline: "KI Beratung in Cottbus - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Cottbus - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Cottbus. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Cottbus",
        "KI Lösungen Cottbus",
        "Künstliche Intelligenz Cottbus",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Cottbus",
  slug: "cottbus",
  bundesland: "Brandenburg",
  publish: false,
  nearbySmall: [
    "Spremberg",
    "Forst (Lausitz)",
    "Senftenberg",
    "Guben",
  ],
  crossReference: [
    { name: "Berlin", slug: "berlin" },
    { name: "Dresden", slug: "dresden" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Cottbus | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Cottbus und der Lausitz - von LEAG über das neue DB ICE-Werk bis zur BTU Cottbus-Senftenberg.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Cottbus",
      "Workflow-Automatisierung Cottbus",
      "n8n Cottbus",
      "KI Automatisierung Cottbus",
      "Prozessoptimierung Cottbus",
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
          url: "/images/cities/cottbus.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Cottbus",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/cottbus.jpg"],
    },
    alternates: {
      canonical: "/standorte/cottbus",
    },
  };
}

const cottbusFaqs = [
  {
    question: "17 Mrd. € Strukturwandel-Fördermittel für die Lausitz - wie laufen Nachweise und Reporting?",
    answer:
      "JTF (Just Transition Fund), STARK-Programm, BMWK-Mittel und EFRE-Förderungen verlangen mehrstufige Verwendungs- und Wirkungsnachweise. n8n sammelt Daten aus Buchhaltung, Projektmanagement und Wirkungs-Indikatoren und meldet automatisch an Förderbanken und Bezirksregierung.",
  },
  {
    question: "LEAG in der Kohle-zu-Wasserstoff-Transformation - welche Workflows brauchen wir?",
    answer:
      "Anlagenstilllegung, Rekultivierung, Standort-Umwidmung, Genehmigungs- und Engineering-Prozesse. n8n verbindet Engineering-Daten, BImSchG-Anträge, Rekultivierungs-Doku und Personalplanung über mehrjährige Transformations-Projekte.",
  },
  {
    question: "DB ICE-Werk Cottbus - wie unterstützen Workflows den Werk-Aufbau (Greenfield)?",
    answer:
      "Neuer ICE-Servicestandort mit 1.200 Arbeitsplätzen, Aufbau von Personalrekrutierung, Schulung, Ersatzteillogistik und Wartungsplanung. Greenfield ist ideal für Workflow-First-Architektur ohne Altlasten - n8n koppelt DB-Konzern-IT, Werks-MES und Lieferanten von Tag eins.",
  },
  {
    question: "BTU Cottbus-Senftenberg - welche Forschungs-Workflows lohnen sich?",
    answer:
      "Drittmittel-Verwaltung (BMBF, BMWK, EU Horizon), Projektzeit-Nachweise, Veröffentlichungspflichten und Partner-Koordination mit Fraunhofer IEG, DLR Cottbus und LEAG. n8n strukturiert wachsendes Strukturwandel-Drittmittel-Volumen.",
  },
  {
    question: "Universitätsmedizin Lausitz im Aufbau - welche Workflows beim Greenfield-Hochschulklinikum?",
    answer:
      "1,2 Mrd. € Investition, neue Studienlogistik, Patientenrekrutierung, eCRF, Ethik-Kommissionen und akademische Lehre. n8n strukturiert den Aufbau zwischen Carl-Thiem-Klinikum, BTU und Land Brandenburg.",
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
          imageSrc="/images/cities/cottbus.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Cottbus"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Cottbus -{" "}
                von der Braunkohle-Hauptstadt zur{" "}
                <BackgroundHero.Highlight>dynamischsten Region Deutschlands</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus der LEAG-Braunkohle-Hochburg wird Wasserstoff-Hub, ICE-Werk-Standort und Universitätsmedizin Lausitz - mit 17 Mrd. € Fördermitteln im Rücken. Wir automatisieren genau die Workflows, die ein Strukturwandel-Hotspot braucht - Förder-Reporting, Greenfield-Werks-Aufbau und BTU-Drittmittel.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Cottbus besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={99000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={1}
              label="Platz IW-Regionalranking 2026 (DE)"
              index={1}
            />
            <BackgroundHero.Stat
              value={17}
              suffix=" Mrd. €"
              label="Strukturwandel-Fördermittel Lausitz bis 2038"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/cottbus.jpg"
            alt="DB ICE-Werk Cottbus - Strukturwandel-Hotspot"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>DB ICE-Werk & LEAG-Transformation - wo Tagebau war, fährt heute der ICE 4</Typo.H2>
            <Typo.Paragraph>
              Auf ehemaligen LEAG-Flächen entstehen das größte Bahnwerk Europas, Wasserstoff-Pilotprojekte und neue Industrieansiedlungen (BASF Batterie-Recycling in Schwarzheide). Quartiers- und Werks-Management bedeutet: Förder-Nachweise, Greenfield-Aufbau, Personal-Onboarding und ECM-Dokumentation. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
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
        <Typo.H2>Was Cottbus hinter sich lässt - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Kohleausstieg bis 2038 - LEAG schrumpft Braunkohle-Geschäft"
                description="Lausitz-Tagebaue Welzow-Süd, Nochten, Jänschwalde werden über die nächsten Jahre stillgelegt, ca. 7.000 LEAG-Beschäftigte (Region) in tiefgreifender Transformation."
              />
              <ProsCons.Item
                title="Vattenfall-Erbe und Bergbau-Service-Branche im Umbau"
                description="Hunderte Mittelständler aus Bergbau-Service und Werkstattbau müssen sich neu erfinden, von Bergbauausrüstung zu Wasserstoff oder Recycling."
              />
              <ProsCons.Item
                title="Demografische Überalterung und Fachkräftemangel"
                description="Cottbus ist überaltert, gleichzeitig Magnet für neue Fachkräfte aus Polen und Tschechien - multilinguale HR-Workflows dringend nötig."
              />
              <ProsCons.Item
                title="Komplexer Verwaltungsapparat für 17 Mrd. € Förderung"
                description="Just Transition Fund, STARK, EFRE - mehrstufige Nachweisführung überfordert Kommunen und KMU ohne Workflow-Plattformen."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Platz 1 IW-Regionalranking 2026 - dynamischste Region Deutschlands"
                description="Kein Standort in Deutschland entwickelt sich aktuell so stark wie Cottbus - Stadt wandelt 17 Mrd. € Strukturhilfen in Aufbruch um."
              />
              <ProsCons.Item
                title="DB ICE-Werk Cottbus - größtes Bahnwerk Europas im Aufbau"
                description="Deutsche Bahn baut neues ICE-Werk mit ca. 1.200 Arbeitsplätzen, erster ICE 4-Service ab 2024 - Greenfield-Werk mit reiner Workflow-First-Chance."
              />
              <ProsCons.Item
                title="BTU Cottbus-Senftenberg + Fraunhofer IEG + DLR"
                description="Einzige TU Brandenburgs mit 1.500 MA, dazu Energie- und Wasserstoff-Forschung - Forschungs-Drittmittel-Volumen wächst rasant."
              />
              <ProsCons.Item
                title="Universitätsmedizin Lausitz im Aufbau (1,2 Mrd. €)"
                description="Carl-Thiem-Klinikum wird zur Universitätsmedizin Lausitz aufgewertet - mit 2.500 MA und akademischer Lehre als neuer Schwerpunkt."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Größte Industrie-Transformation Deutschlands
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Tagebau Wasserstoff und ICE-Werk werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Cottbus ist Zentrum der wohl umfassendsten Industrie-Transformation Deutschlands. Mit dem geplanten Kohleausstieg bis 2038 verschiebt sich die regionale Wirtschaft von Braunkohle und Verstromung hin zu Wasserstoff, ICE-Werk, BTU-Forschung und Universitätsmedizin Lausitz. Die Stadt ist laut IW-Regionalranking 2026 die dynamischste Region Deutschlands. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Cottbus heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Energie & Strukturwandel</Typo.H3>
            <Typo.Paragraph>
              Förder-Reporting (JTF, STARK, EFRE), LEAG-Transformations-Doku, Rekultivierungs- und Genehmigungs-Workflows, Wasserstoff-Herkunftsnachweise.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <TrainFront className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Schiene & Greenfield-Werke</Typo.H3>
            <Typo.Paragraph>
              DB ICE-Werk-Aufbau: Personalrekrutierung, Schulung, Ersatzteillogistik, Wartungsplanung. ECM-konforme Doku, DB-Konzern-IT-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Forschung & Universitätsmedizin</Typo.H3>
            <Typo.Paragraph>
              BTU-Drittmittel-Verwaltung, EU/BMBF-Reporting, eCRF, Studienlogistik und akademische Lehre für die wachsende Universitätsmedizin Lausitz.
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
        <Typo.H2>Häufige Fragen aus Cottbus</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={cottbusFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
