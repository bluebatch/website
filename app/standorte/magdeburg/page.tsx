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
  mainRewrite: "/ki-agentur-magdeburg",
  rewrites: [
    {
      source: "/ai-workflows-magdeburg",
      preHeadline: "AI Workflows Magdeburg",
      headline: "AI Workflows & Automatisierung in Magdeburg",
      metaTitle: "AI Workflows Magdeburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Magdeburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Magdeburg",
        "KI Automatisierung Magdeburg",
        "Workflow Automatisierung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-magdeburg",
      preHeadline: "n8n Automation Magdeburg",
      headline: "n8n Automation in Magdeburg - Workflows automatisieren",
      metaTitle: "n8n Automation Magdeburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Magdeburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Magdeburg",
        "n8n Magdeburg",
        "Workflow Automation Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-magdeburg",
      preHeadline: "n8n Magdeburg",
      headline: "n8n Agentur in Magdeburg",
      metaTitle: "n8n Magdeburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Magdeburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Magdeburg und Umgebung.",
      keywords: [
        "n8n Magdeburg",
        "n8n Agentur Magdeburg",
        "n8n Beratung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-magdeburg",
      preHeadline: "Automation Magdeburg",
      headline: "Automation & Prozessoptimierung in Magdeburg",
      metaTitle: "Automation Magdeburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Magdeburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Magdeburg",
        "Prozessautomatisierung Magdeburg",
        "Workflow Automation Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-magdeburg",
      preHeadline: "IT Dienstleister Magdeburg",
      headline: "IT Dienstleister in Magdeburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Magdeburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Magdeburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Magdeburg.",
      keywords: [
        "IT Dienstleister Magdeburg",
        "IT Service Magdeburg",
        "Digitalisierung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-magdeburg",
      preHeadline: "KI Beratung Magdeburg",
      headline: "KI Beratung in Magdeburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Magdeburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Magdeburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Magdeburg",
        "KI Lösungen Magdeburg",
        "Künstliche Intelligenz Magdeburg",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-magdeburg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Magdeburg",
  slug: "magdeburg",
  bundesland: "Sachsen-Anhalt",
  publish: false,
  nearbySmall: [
    "Schönebeck (Elbe)",
    "Halberstadt",
    "Bernburg (Saale)",
    "Stendal",
    "Staßfurt",
    "Aschersleben",
    "Wernigerode",
  ],
  crossReference: [
    { name: "Halle (Saale)", slug: "halle-saale" },
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Wolfsburg", slug: "wolfsburg" },
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
    "KI-Agentur in Magdeburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Maschinenbau- und Energie-Automatisierung in Magdeburg: n8n-Workflows für FAM, SKET, ABB/Hitachi Energy, ENERCON, Deutsche Bahn und das Wasserstraßenkreuz - CPQ-, ATLAS-Zoll- und CSRD-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Magdeburg",
      "n8n Magdeburg",
      "Maschinenbau Workflow Magdeburg",
      "OZG Sachsen-Anhalt",
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
          url: "/images/cities/magdeburg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Magdeburg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/magdeburg.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-magdeburg",
    },
  };
}

const magdeburgFaqs = [
  {
    question: "Wir sind 200-MA-Maschinenbauer wie FAM oder SKET - wie hilft uns n8n im China-Wettbewerb?",
    answer:
      "Der schnellste Hebel sind CPQ-Workflows (Configure-Price-Quote): Angebotskalkulation, variantenreiche Stücklisten und Engineering-Konfiguration zwischen CAD/PLM und SAP S/4HANA. Wir docken an Siemens NX, Autodesk Vault und proAlpha an, mit automatischer Stückliste, Material-Disposition und Kalkulation - Angebote in Stunden statt Tagen.",
  },
  {
    question: "Was bringt n8n bei ABB/Hitachi Energy und ENERCON für die Wasserstoff-Wende?",
    answer:
      "Großanlagen-Engineering verlangt komplexe Workflows zwischen CAD/PLM, Genehmigungsbehörden und ERP. Wir automatisieren BImSchG-Genehmigungsmanagement, REACH-/SCIP-Meldungen, Lieferketten-Doku für Trafostationen und Windkraft-Service-Tickets, mit Anbindung an SAP PM und IBM Maximo.",
  },
  {
    question: "Lässt sich das Wasserstraßenkreuz mit n8n digitalisieren?",
    answer:
      "Das größte Wasserstraßenkreuz Europas mit Trogbrücke und Mittellandkanal-Anschluss erzeugt riesige Datenmengen aus Binnenschifffahrt, Trimodal-Hafen Rothensee und DB-Werkstätten. Wir verbinden ATLAS-Zoll, CMR-Frachtbriefe, ADN-Gefahrgut für Binnenschifffahrt und EDIFACT-Logistik zu Workflows mit Predictive Maintenance für Schleusen und Krananlagen.",
  },
  {
    question: "Helft ihr beim Strukturwandel nach der Intel-Absage?",
    answer:
      "Ja. Auf den frei werdenden 230 Hektar Industriefläche suchen jetzt Halbleiter-, Batterie-, Wasserstoff- und Verteidigungsinvestoren. Bestandsmittelständler müssen schnell digitalisieren, um als Zulieferer attraktiv zu bleiben. Wir bauen die EDI-, Catena-X- und Audit-Doku-Workflows, die in modernen Lieferketten Pflicht sind.",
  },
  {
    question: "Wie hilft das Landesregierung und Stadtverwaltung beim OZG 2.0?",
    answer:
      "Wir bauen barrierearme Antragsstrecken im Behördenstandard nach OZG 2.0, mit Anbindung an die FIT-Connect-Föderal-Schnittstelle, Nutzerkonto Bund, BUND-ID und an Fachverfahren wie Avviso oder OK.KOMM. Alle Verfahren laufen on-premise in BSI-Grundschutz-Umgebungen.",
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
          imageSrc="/images/cities/magdeburg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Magdeburg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Magdeburg -{" "}
                Maschinenbau und Logistik{" "}
                <BackgroundHero.Highlight>am Wasserstraßenkreuz</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Deutsche Bahn, ABB/Hitachi Energy, ENERCON und der Maschinenbau
            (FAM, SKET) prägen Magdeburg. Wir automatisieren CPQ-,
            ATLAS-Zoll- und OZG-Workflows mit self-hosted n8n - DSGVO-konform
            und BSI-Grundschutz-tauglich.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Maschinenbau-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={5000}
              label="DB-Beschäftigte am Standort"
              index={0}
            />
            <BackgroundHero.Stat
              value={4700}
              label="Universitätsklinikum + Klinikum"
              index={1}
            />
            <BackgroundHero.Stat
              value={230}
              suffix=" ha"
              label="Industriefläche frei (Intel-Areal)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. DataTable - Maschinenbau-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Maschinenbau-, Logistik- und Verwaltungs-Prozesse automatisieren
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
                <DataTable.Cell bold>CPQ-Maschinenbau-Angebot</DataTable.Cell>
                <DataTable.Cell>3 Tage</DataTable.Cell>
                <DataTable.Cell>2 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>BImSchG-Genehmigungs-Workflow</DataTable.Cell>
                <DataTable.Cell>5 Tage</DataTable.Cell>
                <DataTable.Cell>4 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ATLAS-Zoll-Anmeldung Binnenhafen</DataTable.Cell>
                <DataTable.Cell>45 Min/Sendung</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>EDEKA-Disposition Tourenplanung</DataTable.Cell>
                <DataTable.Cell>3 Std./Tag</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>OZG-Antragsbearbeitung Land Sachsen-Anhalt</DataTable.Cell>
                <DataTable.Cell>2 Std./Antrag</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 244329, label: "Einwohner Magdeburg" },
            { value: 31, label: "Rang in Deutschland" },
            { value: 2, label: "Hochschulen (OvGU, h_da MD)" },
            { value: 3750, label: "EDEKA-Logistik Magdeburg" },
          ]}
        />
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            DB, ABB, ENERCON, FAM/SKET - Maschinenbau-Erbe trifft Energiewende
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Schwermaschinenbau auf Wasserstraßenkreuz und Strukturwandel trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Magdeburg ist Landeshauptstadt Sachsen-Anhalts, traditioneller
            Schwerpunkt für Maschinen- und Anlagenbau und einer der
            wichtigsten Logistikknoten Europas am Wasserstraßenkreuz
            Mittellandkanal/Elbe. Nach der Intel-Absage 2025 stehen 230
            Hektar Industriefläche für neue Investments bereit, und der
            Strukturwandel wird zur Daueraufgabe.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Magdeburg ist historisch das Zentrum für Schwermaschinenbau in
            Ostdeutschland: FAM Förderanlagen, SKET, ABP Maschinenbau, MAM
            Magdeburg und SIGMA Maschinenbau gehören zu den typischen
            Hidden Champions in der Region. Diese 100- bis 500-MA-Betriebe
            konkurrieren global mit chinesischen Anbietern bei deutlich
            höheren Personalkosten. CPQ-Workflows (Configure-Price-Quote),
            Engineering-Konfiguration zwischen CAD, PLM und ERP, variantenreiche
            Stücklisten und After-Sales-Service entscheiden über
            Margen-Überleben. ABB/Hitachi Energy betreibt ein Transformatorenwerk,
            ENERCON ein Windkraft-Service-Hub. Neue Wasserstoff- und
            CCS-Projekte erzeugen komplexe Genehmigungs-Workflows zwischen
            BImSchG, REACH und SAP PM.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Das Wasserstraßenkreuz Magdeburg ist das größte Europas, mit
            Trogbrücke, Schiffshebewerk und der trimodalen Hafenanlage
            Rothensee. EDEKA betreibt hier mit rund 3.750 Beschäftigten ein
            zentrales Distributionslager für den ostdeutschen Markt. Die
            Deutsche Bahn unterhält Werkstätten mit etwa 5.000 Beschäftigten
            in der Stadt. ATLAS-Zoll, ADN-Binnenschifffahrt-Gefahrgut,
            CMR-Frachtbriefe, EDIFACT-Logistik und Multimodal-Tracking sind
            klassische Automatisierungsfelder. Universitätsklinikum und
            Klinikum Magdeburg mit zusammen rund 4.700 Beschäftigten kämpfen
            mit Personalmangel und brauchen DRG-, ePA- und
            Personaleinsatz-Workflows.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Hinzu kommt die Landesregierung Sachsen-Anhalts mit Landtag,
            Ministerien und Stadtverwaltung - OZG 2.0, eAkte und
            FIT-Connect-Anbindung sind Pflichtthemen, gerade in einem
            Bundesland mit demografischem Schrumpfen. Die Otto-von-Guericke-
            Universität mit etwa 3.000 Beschäftigten und der Hochschule
            Magdeburg-Stendal liefern Maschinenbau-, Verfahrenstechnik-
            und Informatik-Absolventen in die regionale Industrie. Wie wir
            die Implementierung in sechs Phasen ausrollen, beschreiben wir
            auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/magdeburg.jpg"
              alt="CPQ- und Engineering-Automatisierung für Magdeburger Maschinenbau"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                China baut Schwermaschinen günstiger - was machen Magdeburger Mittelständler?
              </Typo.H2>
              <Typo.Paragraph>
                Großkonzerne investieren in eigene KI-Teams. Magdeburger
                Maschinenbauer wie FAM, SKET und SIGMA brauchen einen
                pragmatischen Hebel: schlanke CPQ-Workflows zwischen Siemens NX,
                proAlpha und SAP, die Angebote in Stunden statt Tagen liefern.
                Self-hosted, in eurem deutschen Rechenzentrum, modular
                erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
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
        <Typo.H2>Häufige Fragen aus Magdeburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={magdeburgFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
