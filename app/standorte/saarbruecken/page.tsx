import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import DataTable from "@/components/ui/data-table";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-saarbruecken",
  rewrites: [
    {
      source: "/ai-workflows-saarbruecken",
      preHeadline: "AI Workflows Saarbrücken",
      headline: "AI Workflows & Automatisierung in Saarbrücken",
      metaTitle: "AI Workflows Saarbrücken - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Saarbrücken. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Saarbrücken",
        "KI Automatisierung Saarbrücken",
        "Workflow Automatisierung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-saarbruecken",
      preHeadline: "n8n Automation Saarbrücken",
      headline: "n8n Automation in Saarbrücken - Workflows automatisieren",
      metaTitle: "n8n Automation Saarbrücken | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Saarbrücken. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Saarbrücken",
        "n8n Saarbrücken",
        "Workflow Automation Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-saarbruecken",
      preHeadline: "n8n Saarbrücken",
      headline: "n8n Agentur in Saarbrücken",
      metaTitle: "n8n Saarbrücken - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Saarbrücken. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Saarbrücken und Umgebung.",
      keywords: [
        "n8n Saarbrücken",
        "n8n Agentur Saarbrücken",
        "n8n Beratung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-saarbruecken",
      preHeadline: "Automation Saarbrücken",
      headline: "Automation & Prozessoptimierung in Saarbrücken",
      metaTitle: "Automation Saarbrücken - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Saarbrücken. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Saarbrücken",
        "Prozessautomatisierung Saarbrücken",
        "Workflow Automation Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-saarbruecken",
      preHeadline: "IT Dienstleister Saarbrücken",
      headline: "IT Dienstleister in Saarbrücken - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Saarbrücken - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Saarbrücken. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Saarbrücken.",
      keywords: [
        "IT Dienstleister Saarbrücken",
        "IT Service Saarbrücken",
        "Digitalisierung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-saarbruecken",
      preHeadline: "KI Beratung Saarbrücken",
      headline: "KI Beratung in Saarbrücken - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Saarbrücken - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Saarbrücken. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Saarbrücken",
        "KI Lösungen Saarbrücken",
        "Künstliche Intelligenz Saarbrücken",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-saarbruecken",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Saarbrücken",
  slug: "saarbruecken",
  bundesland: "Saarland",
  publish: false,
  nearbySmall: [
    "Völklingen",
    "Saarlouis",
    "St. Ingbert",
    "Neunkirchen",
    "Homburg",
    "Dillingen",
    "Merzig",
  ],
  crossReference: [
    { name: "Trier", slug: "trier" },
    { name: "Kaiserslautern", slug: "kaiserslautern" },
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
    "KI-Agentur in Saarbrücken | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "KI-, Automotive- und Stahl-Automatisierung in Saarbrücken: n8n-Workflows für ZF, Ford-Werk Saarlouis, Dillinger Hütte, Saarstahl und Forschungspartner DFKI/CISPA - IATF-, CBAM- und CSRD-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Saarbrücken",
      "n8n Saarbrücken",
      "ZF Zulieferer Workflow",
      "DFKI Saarbrücken",
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
          url: "/images/cities/saarbruecken.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Saarbrücken",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/saarbruecken.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-saarbruecken",
    },
  };
}

const saarbrueckenFaqs = [
  {
    question: "Wir sind ZF-Zulieferer in Saarbrücken - wie integriert ihr n8n in unsere Welt?",
    answer:
      "Self-hosted on-premise, mit Anbindung an SAP S/4HANA, das ZF-Lieferantenportal und Catena-X-Datenräume. Wir decken JIT-Workflows für Automatikgetriebe-Komponenten, IATF-16949-konforme APQP-/PPAP-Doku und die Transformation in Richtung E-Antriebe ab - inklusive PCF-Berechnung für die Catena-X-Use-Cases.",
  },
  {
    question: "Hilft n8n im Ford-Werk Saarlouis bei der Transformation?",
    answer:
      "Ja. Mit dem Focus-Auslauf 2025 und der offenen Zukunft des Standorts ist Workflow-Automatisierung Pflicht für die Restrukturierung: HR-Workflows für Sozialpläne, Lieferanten-Onboarding für neue Modelle oder Investoren-Szenarien wie BYD. Wir bauen das mit voller Versionierung und Vier-Augen-Freigaben.",
  },
  {
    question: "Lässt sich CBAM und EU-ETS für Dillinger Hütte und Saarstahl automatisieren?",
    answer:
      "Ja. Stahlproduktion ist im Zentrum von CBAM (Carbon Border Adjustment Mechanism) und EU-ETS. Wir aggregieren Emissionsdaten aus SCADA-Systemen, Hochofen-Steuerungen und ERP zu CBAM-konformen Reports an die Zollbehörden, parallel zu CSRD ESRS E1. Direktreduktion (DRI) mit Wasserstoff bringen wir als neuen Datenfluss sauber in eure Reporting-Pipelines.",
  },
  {
    question: "Was bringt das im DFKI- und CISPA-Umfeld?",
    answer:
      "Das DFKI ist die weltweit größte Forschungseinrichtung für angewandte KI, CISPA das führende IT-Sicherheits-Helmholtz-Zentrum Europas. Wir übersetzen DFKI-KI-Modelle in produktive n8n-Workflows in Unternehmen, mit CISPA-getesteten Sicherheitsmustern. Anbindung an On-Premise-LLMs, Anomaliedetektion und automatisierte Sicherheitsanalysen.",
  },
  {
    question: "Wir machen Grenz-Pendler-Geschäft Frankreich/Luxemburg - hilft das?",
    answer:
      "Genau dort. Cross-Border-Abrechnung, mehrsprachige Kommunikation und drei Steuer- bzw. Sozialversicherungssysteme erzeugen Chaos. Wir automatisieren Lohnabrechnung, A1-Bescheinigungen, Cross-Border-Rechnungsstellung und Vertragsmanagement zwischen DE, FR und LU - mit Anbindung an DATEV und ADP-Schnittstellen.",
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
          imageSrc="/images/cities/saarbruecken.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Saarbrücken"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Saarbrücken -{" "}
                KI-Spitzenforschung trifft Stahl und{" "}
                <BackgroundHero.Highlight>Automotive</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            DFKI, ZF, Ford Saarlouis, Dillinger Hütte und Saarstahl prägen
            das Saarland. Wir automatisieren IATF-, CBAM- und
            Cross-Border-Workflows mit self-hosted n8n - DSGVO-konform
            und auditfest.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Stahl-/Automotive-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={9000}
              label="ZF-Beschäftigte Saarbrücken"
              index={0}
            />
            <BackgroundHero.Stat
              value={5100}
              label="Beschäftigte Dillinger Hütte"
              index={1}
            />
            <BackgroundHero.Stat
              value={1000}
              suffix="+"
              label="DFKI-Mitarbeiter konzernweit"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. DataTable - Stahl-/Automotive-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Stahl-, Automotive- und Cross-Border-Prozesse automatisieren
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der konkrete Zeitgewinn pro Workflow
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-8">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Prozess</DataTable.HeaderCell>
                <DataTable.HeaderCell>Manuell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Automatisiert</DataTable.HeaderCell>
                <DataTable.HeaderCell>Zeitersparnis</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>ZF-VDA-EDI-Abruf</DataTable.Cell>
                <DataTable.Cell>20 Min/Order</DataTable.Cell>
                <DataTable.Cell>30 Sek</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>CBAM-Report Dillinger Hütte</DataTable.Cell>
                <DataTable.Cell>8 Std./Monat</DataTable.Cell>
                <DataTable.Cell>25 Min</DataTable.Cell>
                <DataTable.Cell bold>~95 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>EU-ETS-Bilanzierung Hochofen</DataTable.Cell>
                <DataTable.Cell>6 Std./Quartal</DataTable.Cell>
                <DataTable.Cell>20 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Cross-Border-A1-Bescheinigung</DataTable.Cell>
                <DataTable.Cell>45 Min/Mitarbeiter</DataTable.Cell>
                <DataTable.Cell>3 Min</DataTable.Cell>
                <DataTable.Cell bold>~93 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Ford-Sozialplan-HR-Workflow</DataTable.Cell>
                <DataTable.Cell>3 Std./Fall</DataTable.Cell>
                <DataTable.Cell>20 Min</DataTable.Cell>
                <DataTable.Cell bold>~89 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            ZF, Ford, Dillinger Hütte - Strukturwandel zwischen Kohle, Stahl und KI
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Spitzen-KI auf Stahltransformation und Automotive-Wandel trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Saarbrücken vereint zwei extreme Welten: weltweit führende
            KI-Forschung im DFKI und CISPA - und klassische Schwerindustrie
            mit ZF, Ford, Dillinger Hütte und Saarstahl. Die Region steht
            mitten im Strukturwandel zwischen Kohle-/Stahl-Erbe und Tech-Zukunft.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            ZF Friedrichshafen produziert in Saarbrücken Automatikgetriebe und
            beschäftigt mit dem Standort Neunkirchen rund 11.000 Mitarbeiter,
            davon etwa 9.000 in Saarbrücken. Der Wandel von Verbrennergetrieben
            zu E-Antrieben ist hier so direkt spürbar wie nirgendwo sonst.
            Bosch in Homburg fertigt mit rund 4.600 Beschäftigten Diesel-
            Komponenten und baut auf Elektronik um. Ford-Werk Saarlouis verliert
            2025 die Focus-Produktion und sucht nach Investoren - BYD Sealion
            war zwischenzeitlich im Gespräch. Dillinger Hütte mit rund 5.100
            Beschäftigten produziert Grobbleche für Schiffbau, Pipelines und
            Windenergie, Saarstahl mit 3.900 Beschäftigten in Völklingen
            Walzdraht für Automotive. Hochöfen sollen auf wasserstoffbasierte
            Direktreduktion umgestellt werden - das größte industrielle
            Transformationsprojekt der Region.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Parallel sitzt mit dem DFKI das weltweit größte Forschungszentrum
            für KI in Saarbrücken (über 1.000 Mitarbeiter konzernweit) und
            mit dem CISPA Helmholtz-Zentrum eines der führenden
            IT-Sicherheits-Forschungszentren Europas. Die Universität des
            Saarlandes mit 2.600 Beschäftigten gehört zu den Top-Adressen für
            Informatik. ZF betreibt sein Technologiezentrum direkt auf dem
            Saarbrücker Universitätscampus, eng verzahnt mit DFKI für
            KI-Anwendungen in Fahrzeugtechnik. Diese Nähe ist einzigartig -
            und bietet Mittelständlern direkten Zugang zu KI-Spitzenforschung.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Dazu kommt die Grenzregion: Saarbrücken liegt im Schnittpunkt zu
            Frankreich, Luxemburg und Belgien. Cross-Border-Abrechnung,
            A1-Bescheinigungen, drei Steuer- und Sozialversicherungssysteme,
            mehrsprachige Kommunikation - alles im Tagesgeschäft. Strukturhilfen
            für ostdeutsche Standorte gibt es nicht, das Saarland muss durch
            Effizienz wachsen. Wie wir die Implementierung in sechs Phasen
            ausrollen, beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/saarbruecken.jpg"
              alt="CBAM- und IATF-Automatisierung für Saarbrücker Stahl- und Automotive-Industrie"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                ZF kooperiert mit DFKI - was machen Saarländer Mittelständler?
              </Typo.H2>
              <Typo.Paragraph>
                ZF und DFKI bauen gemeinsam KI-Anwendungen für Fahrzeugtechnik.
                Mittelständische Maschinenbauer, Engineering-Dienstleister und
                Spezialfertiger im Saarland brauchen einen pragmatischen Hebel:
                schlanke n8n-Workflows, die SAP, ZF- oder Bosch-Lieferantenportale
                und CBAM-Reporting verbinden. Self-hosted, in eurem deutschen
                Rechenzentrum, modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 180000, label: "Einwohner Saarbrücken" },
            { value: 110000, label: "Beschäftigte (sv-pflichtig)" },
            { value: 6000, label: "Ford-Werk Saarlouis" },
            { value: 4600, label: "Bosch Homburg" },
          ]}
        />
      </ContentWrapper>

      {/* 7. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Saarbrücken</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={saarbrueckenFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
