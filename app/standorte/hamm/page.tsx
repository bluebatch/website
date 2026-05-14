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
import { Truck, Factory, Zap } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-hamm",
      preHeadline: "AI Workflows Hamm",
      headline: "AI Workflows & Automatisierung in Hamm",
      metaTitle: "AI Workflows Hamm - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hamm. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hamm",
        "KI Automatisierung Hamm",
        "Workflow Automatisierung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hamm",
      preHeadline: "n8n Automation Hamm",
      headline: "n8n Automation in Hamm - Workflows automatisieren",
      metaTitle: "n8n Automation Hamm | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hamm. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hamm",
        "n8n Hamm",
        "Workflow Automation Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hamm",
      preHeadline: "n8n Hamm",
      headline: "n8n Agentur in Hamm",
      metaTitle: "n8n Hamm - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hamm. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hamm und Umgebung.",
      keywords: [
        "n8n Hamm",
        "n8n Agentur Hamm",
        "n8n Beratung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hamm",
      preHeadline: "Automation Hamm",
      headline: "Automation & Prozessoptimierung in Hamm",
      metaTitle: "Automation Hamm - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hamm. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hamm",
        "Prozessautomatisierung Hamm",
        "Workflow Automation Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hamm",
      preHeadline: "IT Dienstleister Hamm",
      headline: "IT Dienstleister in Hamm - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hamm - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hamm. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hamm.",
      keywords: [
        "IT Dienstleister Hamm",
        "IT Service Hamm",
        "Digitalisierung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hamm",
      preHeadline: "KI Beratung Hamm",
      headline: "KI Beratung in Hamm - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hamm - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hamm. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hamm",
        "KI Lösungen Hamm",
        "Künstliche Intelligenz Hamm",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hamm",
  slug: "hamm",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Unna",
    "Kamen",
    "Bergkamen",
    "Lünen",
    "Ahlen",
    "Beckum",
    "Soest",
    "Lippstadt",
    "Werne",
    "Selm",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Münster", slug: "muenster" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Hagen", slug: "hagen" },
    { name: "Paderborn", slug: "paderborn" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Hamm | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Hamm - von Hoffmeier Industrieanlagen über Hesse Lignal bis Klinikum Hamm und Lippehäfen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Hamm",
      "Workflow-Automatisierung Hamm",
      "n8n Hamm",
      "KI Automatisierung Hamm",
      "Prozessoptimierung Hamm",
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
          url: "/images/cities/hamm.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Hamm",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/hamm.jpg"],
    },
    alternates: {
      canonical: "/standorte/hamm",
    },
  };
}

const hammFaqs = [
  {
    question: "Hamm ist DB-Rangier- und Wartungsstandort – wie helfen Workflows in der Bahnlogistik?",
    answer:
      "Wagenstammdaten, Trassen-Anmeldungen (DB Netz), Wartungsdokumentation und EBA-Sicherheitsaudits sind Workflow-intensiv. n8n verbindet TPS, IRIS, SAP und Cargo-Plattformen – inklusive ECM-konformer Wartungs-Nachweise.",
  },
  {
    question: "Lippehäfen / Stadthafen – können wir Zoll und Massengut-Umschlag automatisieren?",
    answer:
      "Ja. ATLAS-Zollanmeldungen, NCTS-Versandverfahren und Frachtdokumentation für Massengut und Container laufen vollautomatisch. n8n liest Frachtbriefe (CMR), prüft gegen Bestellung und schreibt in TMS/WMS.",
  },
  {
    question: "Hoffmeier-Stahlbau: lassen sich Bautagebücher und Stücklisten digitalisieren?",
    answer:
      "Ja, klassischer Anwendungsfall. Bautagebücher als App, Stücklisten-Sync zwischen CAD/PLM und ERP, automatische Subunternehmer-Abrechnung mit Aufmaß und Rechnungsprüfung. Mit OCR/KI für Lieferscheine und Stundennachweise.",
  },
  {
    question: "Kraftwerk Westfalen wird auf Gas/H2 umgebaut – welche Workflows sind sinnvoll?",
    answer:
      "Mehrjährige Genehmigungs-Projekte mit BNetzA, BImSchG-Anträge, Fördermittel-Reporting (IPCEI, KWKG) und H2-Herkunftsnachweise. n8n hält Aktenbestände durchgängig, generiert Berichte und meldet automatisch an Behörden.",
  },
  {
    question: "Hesse Lignal – wie helfen Workflows einer Chemie-Spezialfirma?",
    answer:
      "REACH-Doku, CLP-Etikettierung, IFRA-Konformität bei Lacken, Sicherheitsdatenblatt-Pflege in 25+ Sprachen. n8n synchronisiert SAP, EHS-Software, EHS-Behörden und Kunden-Portale.",
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
          imageSrc="/images/cities/hamm.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Hamm"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Hamm –{" "}
                vom Bergbau-Hamm zum{" "}
                <BackgroundHero.Highlight>Eisenbahn- und Energiehub</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Zeche Heinrich-Robert wurden Lippehäfen, RWE-Kraftwerksumbau und Konversionsflächen wie der Erin-Park. Wir automatisieren genau die Workflows, die ein Eisenbahnknoten im Wandel braucht – ATLAS-Zoll, Bahnlogistik und Bautagebücher.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Hamm besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={180000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={5.5}
              suffix=" Mrd. €"
              label="BIP"
              index={1}
            />
            <BackgroundHero.Stat
              value={1400}
              label="Hoffmeier-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. ProsCons – Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Hamm hinter sich lässt – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Zeche Heinrich-Robert geschlossen (2010)"
                description="Letzte Steinkohleförderung in Hamm beendet – das Heinrich-Robert-Areal wird seitdem zum Konversionsstandort umgebaut."
              />
              <ProsCons.Item
                title="Kraftwerk Westfalen (RWE) im Reservebetrieb"
                description="Steinkohle-Kraftwerk in Hamm-Uentrop seit Jahren in Kohleausstieg, Personal- und Anlagenzukunft im Umbau zu Gas/H2."
              />
              <ProsCons.Item
                title="Erin-Park und alte Bergbauflächen unter Konversionsdruck"
                description="Brachflächen, Altlasten, Genehmigungs-Bürokratie – Konversion zieht sich über Jahre und bindet Planungsressourcen."
              />
              <ProsCons.Item
                title="Klassischer Mittelstand-Schwerindustrie unter Energiedruck"
                description="Stahlverarbeiter und Edelstahlwerke im Hammer Umfeld kämpfen mit Strompreisen und Asien-Konkurrenz."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Einer der größten Eisenbahnknoten Westdeutschlands"
                description="DB Rangierbahnhof, DB Cargo-Wartung, intermodale Terminals – Hamm ist Drehkreuz für Schienen-Güterverkehr Ruhrgebiet-Berlin."
              />
              <ProsCons.Item
                title="Lippehäfen am Datteln-Hamm-Kanal"
                description="Stadthafen Hamm schlägt Mio. t Massengut und Container um, mit Anbindung an Dortmund-Ems-Kanal und Rhein."
              />
              <ProsCons.Item
                title="Hoffmeier Industrieanlagen (1.400 MA Konzern, 1.000 in Hamm)"
                description="Stahlbau und Anlagenbau für Kraftwerke, Chemie, Logistik – projektbezogen mit komplexer Stücklisten- und Subunternehmer-Steuerung."
              />
              <ProsCons.Item
                title="Hesse Lignal & Sankt Marien-Hospital als regionale Anker"
                description="Hesse als weltweiter Holzbeschichtungs-Spezialist (500 MA), Sankt Marien-Hospital mit 1.350 Beschäftigten – plus Klinikum Hamm und SRH Hochschule für Logistik."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 — Lösungs-Use-Cases */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Hamm heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Logistik & Bahn</Typo.H3>
            <Typo.Paragraph>
              ATLAS/NCTS-Zoll, DB-Trassen, Wagenstammdaten, ECM-Wartung, intermodaler Umschlag und EDI für Distribution. TMS, WMS und Cargo-Plattformen in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Stahl- & Anlagenbau</Typo.H3>
            <Typo.Paragraph>
              Stücklisten-Sync CAD/PLM/ERP, digitale Bautagebücher, Subunternehmer-Abrechnung, Aufmaß-Workflows und Werkstoffzeugnisse für Industrieanlagen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Energie & Konversion</Typo.H3>
            <Typo.Paragraph>
              Genehmigungs-Workflows BImSchG, IPCEI/KWKG-Förderung, H2-Herkunftsnachweise und Konversions-Projektmanagement für Bergbau- und Kraftwerksflächen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel seit 2010 – Postindustrielles Umfeld
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn die letzte Zeche schließt und das Kohlekraftwerk umgebaut wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Hamm hat 2010 mit der Zeche Heinrich-Robert die letzte Förderstätte verloren. Das Kraftwerk Westfalen läuft auf Reservebetrieb und wird in Richtung Gas/H2-Speicher transformiert. Gleichzeitig wächst Hamm als Eisenbahnknoten und Hafenstandort, Hoffmeier baut Industrieanlagen, Hesse Lignal liefert weltweit Holzbeschichtungen. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. BoundlessImage — Eisenbahnknoten/Lippehäfen */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Eisenbahnknoten und Lippehäfen Hamm – Logistik-Transformation"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Lippehäfen & Bahnknoten – Postindustrielles Logistik-Drehkreuz</Typo.H2>
            <Typo.Paragraph>
              Wo früher Kohle gefördert wurde, schlägt heute der Stadthafen Hamm Container und Massengüter um, DB Cargo wartet Wagen und der Rangierbahnhof bündelt Züge Richtung Berlin und Benelux. Quartiers- und Logistik-Management bedeutet: Trassen-Anmeldungen, Zollabwicklung, Wartungs-Workflows und Konversion-Projekte. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
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
        <Typo.H2>Häufige Fragen aus Hamm</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={hammFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
