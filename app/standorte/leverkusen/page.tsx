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
  mainRewrite: "/ki-agentur-leverkusen",
  rewrites: [
    {
      source: "/ai-workflows-leverkusen",
      preHeadline: "AI Workflows Leverkusen",
      headline: "AI Workflows & Automatisierung in Leverkusen",
      metaTitle: "AI Workflows Leverkusen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Leverkusen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Leverkusen",
        "KI Automatisierung Leverkusen",
        "Workflow Automatisierung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-leverkusen",
      preHeadline: "n8n Automation Leverkusen",
      headline: "n8n Automation in Leverkusen - Workflows automatisieren",
      metaTitle: "n8n Automation Leverkusen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Leverkusen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Leverkusen",
        "n8n Leverkusen",
        "Workflow Automation Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-leverkusen",
      preHeadline: "n8n Leverkusen",
      headline: "n8n Agentur in Leverkusen",
      metaTitle: "n8n Leverkusen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Leverkusen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Leverkusen und Umgebung.",
      keywords: [
        "n8n Leverkusen",
        "n8n Agentur Leverkusen",
        "n8n Beratung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-leverkusen",
      preHeadline: "Automation Leverkusen",
      headline: "Automation & Prozessoptimierung in Leverkusen",
      metaTitle: "Automation Leverkusen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Leverkusen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Leverkusen",
        "Prozessautomatisierung Leverkusen",
        "Workflow Automation Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-leverkusen",
      preHeadline: "IT Dienstleister Leverkusen",
      headline: "IT Dienstleister in Leverkusen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Leverkusen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Leverkusen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Leverkusen.",
      keywords: [
        "IT Dienstleister Leverkusen",
        "IT Service Leverkusen",
        "Digitalisierung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-leverkusen",
      preHeadline: "KI Beratung Leverkusen",
      headline: "KI Beratung in Leverkusen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Leverkusen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Leverkusen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Leverkusen",
        "KI Lösungen Leverkusen",
        "Künstliche Intelligenz Leverkusen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-leverkusen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Leverkusen",
  slug: "leverkusen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Langenfeld",
    "Monheim am Rhein",
    "Burscheid",
    "Leichlingen",
    "Wermelskirchen",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Bergisch Gladbach", slug: "bergisch-gladbach" },
    { name: "Solingen", slug: "solingen" },
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
    "KI-Agentur in Leverkusen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Pharma- und Chempark-Automatisierung in Leverkusen: n8n-Workflows für Bayer, Lanxess, Covestro und Currenta – GxP-, REACH- und LkSG-konform, self-hosted.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Leverkusen",
      "n8n Leverkusen",
      "Pharma Automatisierung Leverkusen",
      "Chempark Workflow",
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
          url: "/images/cities/leverkusen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Leverkusen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/leverkusen.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-leverkusen",
    },
  };
}

const leverkusenFaqs = [
  {
    question: "Wir sind Bayer-Zulieferer im Chempark – wie integriert ihr n8n in unsere Welt?",
    answer:
      "Self-hosted, on-premise in eurer Chempark-Infrastruktur. Wir docken an SAP S/4HANA und das Currenta-Werksgenehmigungsportal an, an Bayer-eigene Lieferantenportale und an die GxP-Systeme der Crop-Science- und Pharma-Sparte. Vollständiger Audit-Trail nach 21 CFR Part 11, Annex 11 und GAMP 5 – ohne Datenfluss in US-Clouds.",
  },
  {
    question: "Lassen sich REACH- und LkSG-Pflichten gegenüber Bayer, Lanxess und Covestro automatisieren?",
    answer:
      "Ja. Wir verbinden eure SCIP-Datenbank-Meldungen an die ECHA mit Sicherheitsdatenblättern aus SAP EHS und mit den Lieferketten-Self-Assessments für die LkSG-Erklärung. Reportings an Bayer Procurement und das Covestro-Sustainability-Portal laufen automatisch, mit Versionierung und Nachweisführung.",
  },
  {
    question: "Was bringt n8n bei Currenta für Chempark-Genehmigungen und Gefahrgut?",
    answer:
      "Wir automatisieren Werks-Zugangsanträge, Feuerlaubnis-Workflows, Gefahrgut-Doku nach ADR/RID und Wartungsfreigaben mit Anbindung an SAP PM. Currenta-Auflagen, Bayer-Audits und Sicherheitsunterweisungen werden lückenlos dokumentiert.",
  },
  {
    question: "Hilft das auch bei Lanxess und Covestro im Margenrennen?",
    answer:
      "Genau dort. Spezialchemie-Anbieter wie Lanxess und Polymer-Hersteller wie Covestro stehen unter massivem Energie- und Rohstoffpreis-Druck. Wir automatisieren Angebotskalkulation, Materialdisposition, Forecast-Abstimmung mit Großkunden und ESG-Reporting nach CSRD – ohne dass eure Daten US-SaaS-Plattformen sehen.",
  },
  {
    question: "Wir sind ein 150-MA-Engineering-Dienstleister im Bayer-Schatten – lohnt sich das?",
    answer:
      "Gerade dann. Wer aus den Bayer-Rahmenverträgen fliegt, weil die Lieferanten-Audit-Doku nicht passt, verliert Jahresumsatz im einstelligen Millionenbereich. Wir bauen die EDI-Anbindung an SAP Ariba und die LkSG-Konformität in 4 bis 8 Wochen produktiv, on-premise und zum Festpreis.",
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
          imageSrc="/images/cities/leverkusen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Leverkusen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Leverkusen –{" "}
                Pharma- und{" "}
                <BackgroundHero.Highlight>Chempark-Automatisierung</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Bayer, Lanxess, Covestro und Currenta prägen den Leverkusener
            Arbeitsmarkt. Wir automatisieren GxP-, Chempark- und
            ESG-Workflows mit self-hosted n8n – REACH-, LkSG- und
            GAMP-5-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Chempark-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={17000}
              label="Bayer-Mitarbeiter am Standort"
              index={0}
            />
            <BackgroundHero.Stat
              value={34000}
              label="Beschäftigte im Chempark Leverkusen"
              index={1}
            />
            <BackgroundHero.Stat
              value={51375}
              prefix="€ "
              label="BIP pro Kopf (über Bundesschnitt)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Bayer, Lanxess, Covestro – Pharma trifft Polymer trifft Spezialchemie
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo der Chempark Leverkusen auf globale Pharma-Compliance trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Leverkusen ist die Bayer-Stadt schlechthin, mit Konzernzentrale,
            Forschung und Produktion. Im Chempark verzahnt sich das mit
            Lanxess, Covestro und Currenta zu einem der dichtesten Chemie-
            und Pharma-Cluster der Welt. Wer hier zuliefert oder mitarbeitet,
            muss GxP, REACH und LkSG zugleich beherrschen.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Bayer beschäftigt rund 17.000 Mitarbeiter direkt am Standort
            Leverkusen und 92.815 weltweit. Unter der „Dynamic Shared
            Ownership"-Strategie läuft ein groß angelegtes Effizienz- und
            Stellenabbau-Programm, gleichzeitig müssen Pharma und Crop Science
            globale Compliance-Pflichten meistern: FDA, EMA, GxP, REACH,
            ECHA-SCIP. Hunderte mittelständische Zulieferer im Maschinenbau,
            Engineering und in Laborservices liefern in dieses Umfeld – ohne
            valide, automatisierte Lieferanten-Audit-Doku fliegen sie aus den
            Rahmenverträgen. SAP Ariba, das Bayer-Lieferantenportal und die
            firmeneigenen LkSG-Self-Assessments sind die digitalen Eintrittskarten.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Direkt nebenan operieren Lanxess (Spezialchemie, rund 4.000
            Beschäftigte in Leverkusen) und Covestro (Polymere, globale
            Konzernzentrale, rund 2.500 Beschäftigte vor Ort, gerade von ADNOC
            übernommen). Beide stehen unter massivem Energie- und
            Rohstoffpreis-Druck. Currenta als Chempark-Betreiber mit rund
            3.400 Mitarbeitern verantwortet Sicherheits-, Energie- und
            Logistikdienste für rund 34.000 Beschäftigte auf dem Werksgelände.
            Werks-Zugangsanträge, Gefahrgut nach ADR und RID, Feuerlaubnisse
            und Wartungsfreigaben sind hochfrequente, hochregulierte Workflows.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Dazu kommt die Bayer 04 / BayArena-Welt mit Eventlogistik und
            Hospitality, das Klinikum Leverkusen mit rund 2.300 Beschäftigten
            und ein städtisches Verwaltungs-Ökosystem unter OZG-Druck.
            Drei Welten, dieselbe technische Antwort: auditfeste, on-premise
            Workflow-Automatisierung mit n8n. Wie wir das in sechs Phasen
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
              src="/images/cities/leverkusen.jpg"
              alt="Pharma- und Chempark-Automatisierung für Bayer-Zulieferer in Leverkusen"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Bayer setzt auf KI in der Forschung – was machen Zulieferer im Chempark?
              </Typo.H2>
              <Typo.Paragraph>
                Bayer investiert in eigene KI-Teams für Wirkstoff-Forschung
                und Crop-Science-Daten. Engineering-Dienstleister, Labor-Anbieter
                und Spezialfertiger im Chempark-Umfeld brauchen einen anderen
                Hebel: schlanke, auditfeste Workflows zwischen SAP, Bayer-
                Lieferantenportal und ihrer eigenen Disposition – ohne IT-Großprojekt
                und ohne Vendor Lock-in.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 4. DataTable – Chempark-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Chempark- und Pharma-Prozesse automatisieren
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
                <DataTable.Cell bold>Bayer-Lieferanten-Audit (GxP)</DataTable.Cell>
                <DataTable.Cell>4 Tage</DataTable.Cell>
                <DataTable.Cell>3 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Currenta-Werks-Zugangsantrag</DataTable.Cell>
                <DataTable.Cell>2 Std./Antrag</DataTable.Cell>
                <DataTable.Cell>5 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>REACH-SCIP-Meldung an ECHA</DataTable.Cell>
                <DataTable.Cell>90 Min/Artikel</DataTable.Cell>
                <DataTable.Cell>8 Min</DataTable.Cell>
                <DataTable.Cell bold>~91 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>LkSG-Selbst-Assessment</DataTable.Cell>
                <DataTable.Cell>1 Tag/Lieferant</DataTable.Cell>
                <DataTable.Cell>30 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>BayArena-Eventlogistik</DataTable.Cell>
                <DataTable.Cell>6 Std./Spieltag</DataTable.Cell>
                <DataTable.Cell>20 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
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
            { value: 170329, label: "Einwohner Leverkusen" },
            { value: 66290, label: "Beschäftigte (sv-pflichtig)" },
            { value: 92815, label: "Bayer AG weltweit" },
            { value: 8.42, suffix: " Mrd. €", label: "BIP Leverkusen 2021" },
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
        <Typo.H2>Häufige Fragen aus Leverkusen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={leverkusenFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
