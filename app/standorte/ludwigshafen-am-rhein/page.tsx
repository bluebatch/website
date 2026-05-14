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
  mainRewrite: "/ki-agentur-ludwigshafen-am-rhein",
  rewrites: [
    {
      source: "/ai-workflows-ludwigshafen-am-rhein",
      preHeadline: "AI Workflows Ludwigshafen am Rhein",
      headline: "AI Workflows & Automatisierung in Ludwigshafen am Rhein",
      metaTitle: "AI Workflows Ludwigshafen am Rhein - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ludwigshafen am Rhein. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ludwigshafen am Rhein",
        "KI Automatisierung Ludwigshafen am Rhein",
        "Workflow Automatisierung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ludwigshafen-am-rhein",
      preHeadline: "n8n Automation Ludwigshafen am Rhein",
      headline: "n8n Automation in Ludwigshafen am Rhein - Workflows automatisieren",
      metaTitle: "n8n Automation Ludwigshafen am Rhein | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ludwigshafen am Rhein. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ludwigshafen am Rhein",
        "n8n Ludwigshafen am Rhein",
        "Workflow Automation Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ludwigshafen-am-rhein",
      preHeadline: "n8n Ludwigshafen am Rhein",
      headline: "n8n Agentur in Ludwigshafen am Rhein",
      metaTitle: "n8n Ludwigshafen am Rhein - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ludwigshafen am Rhein. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ludwigshafen am Rhein und Umgebung.",
      keywords: [
        "n8n Ludwigshafen am Rhein",
        "n8n Agentur Ludwigshafen am Rhein",
        "n8n Beratung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ludwigshafen-am-rhein",
      preHeadline: "Automation Ludwigshafen am Rhein",
      headline: "Automation & Prozessoptimierung in Ludwigshafen am Rhein",
      metaTitle: "Automation Ludwigshafen am Rhein - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ludwigshafen am Rhein. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ludwigshafen am Rhein",
        "Prozessautomatisierung Ludwigshafen am Rhein",
        "Workflow Automation Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ludwigshafen-am-rhein",
      preHeadline: "IT Dienstleister Ludwigshafen am Rhein",
      headline: "IT Dienstleister in Ludwigshafen am Rhein - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ludwigshafen am Rhein - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ludwigshafen am Rhein. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ludwigshafen am Rhein.",
      keywords: [
        "IT Dienstleister Ludwigshafen am Rhein",
        "IT Service Ludwigshafen am Rhein",
        "Digitalisierung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ludwigshafen-am-rhein",
      preHeadline: "KI Beratung Ludwigshafen am Rhein",
      headline: "KI Beratung in Ludwigshafen am Rhein - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ludwigshafen am Rhein - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ludwigshafen am Rhein. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ludwigshafen am Rhein",
        "KI Lösungen Ludwigshafen am Rhein",
        "Künstliche Intelligenz Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-ludwigshafen-am-rhein",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ludwigshafen am Rhein",
  slug: "ludwigshafen-am-rhein",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Frankenthal",
    "Speyer",
    "Worms",
    "Neustadt an der Weinstraße",
    "Schwetzingen",
    "Schifferstadt",
    "Mutterstadt",
    "Lampertheim",
  ],
  crossReference: [
    { name: "Mannheim", slug: "mannheim" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Karlsruhe", slug: "karlsruhe" },
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
    "KI-Agentur in Ludwigshafen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Chemie- und Pharma-Automatisierung in Ludwigshafen: n8n-Workflows für BASF-Zulieferer, AbbVie und Mittelstand im Verbund – REACH-, GxP- und Gefahrgut-konform, self-hosted.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Ludwigshafen am Rhein",
      "n8n Ludwigshafen am Rhein",
      "Chemie Automatisierung Ludwigshafen",
      "BASF Zulieferer Workflow",
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
          url: "/images/cities/ludwigshafen-am-rhein.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Ludwigshafen am Rhein",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/ludwigshafen-am-rhein.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-ludwigshafen-am-rhein",
    },
  };
}

const ludwigshafenamrheinFaqs = [
  {
    question: "Wir sind BASF-Verbundpartner – wie integriert ihr n8n in unsere SAP-Welt?",
    answer:
      "Self-hosted on-premise mit Anbindung an SAP S/4HANA über IDocs und OData. Wir decken Rahmenvertrags-Abrufe, Verbund-Bestellungen, Anlagen-Lifecycle und HSE-Dokumentation ab, mit vollem Audit-Trail. Catena-X- und Verbund-EDI-Pflichten lassen sich genauso abbilden wie REACH-Anhang-XVII-Reports.",
  },
  {
    question: "Wie automatisiert ihr GxP-Prozesse für AbbVie-Zulieferer?",
    answer:
      "AbbVie operiert in Ludwigshafen unter FDA- und EMA-Aufsicht. Wir bauen Workflows für CoA-Review, Lieferanten-Qualifizierung nach 21 CFR Part 11, Annex 11 und für die Pharmakovigilanz an die EudraVigilance-Datenbank. Alles validiert nach GAMP 5 Cat. 4 und 5.",
  },
  {
    question: "Lässt sich Gefahrgut-Dokumentation im Rheinhafen Ludwigshafen automatisieren?",
    answer:
      "Ja. Wir verbinden ADN-, RID- und ADR-Pflichtdaten aus SAP TM oder ATLAS-Zoll mit n8n-Workflows. Multimodal-Trackings, CMR-Frachtbriefe und CBAM-Reports laufen automatisch – inklusive der Sicherheitsdatenblätter nach GHS für die BASF-eigene Hafenflotte.",
  },
  {
    question: "Was bringt n8n bei der CO2-Bilanzierung und ESG-Reporting?",
    answer:
      "BASF, Pfalzwerke und TWL investieren in Wasserstoff und CCS. Wir aggregieren Energiedaten aus SCADA, ERP und Marktkommunikations-EDIFACT zu CSRD-konformen Reports. ESRS E1 (Klima), EU-ETS-Meldungen und CBAM-Berichte werden zentral und auditfest erzeugt.",
  },
  {
    question: "Wir sind Mittelständler mit 200 MA im BASF-Verbund – lohnt sich das überhaupt?",
    answer:
      "Gerade dann. Wer aus den BASF-Rahmenverträgen fliegt, weil EDI-Anbindung fehlt, verliert sofort Millionenumsatz. Wir bauen die EDIFACT-, IDoc- und Catena-X-Schnittstellen zum Festpreis, on-premise in eurem deutschen Rechenzentrum, in 4 bis 8 Wochen produktiv.",
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
          imageSrc="/images/cities/ludwigshafen-am-rhein.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Ludwigshafen am Rhein"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Ludwigshafen –{" "}
                Chemie- und Pharma-Automatisierung im{" "}
                <BackgroundHero.Highlight>BASF-Verbund</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            BASF, AbbVie, TWL und Pfalzwerke prägen den Ludwigshafener
            Arbeitsmarkt. Wir automatisieren Verbund-, GxP- und Energie-Workflows
            mit self-hosted n8n – REACH-, GAMP-5- und ADR-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Chemie-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={33000}
              label="BASF-Mitarbeiter am Stammwerk"
              index={0}
            />
            <BackgroundHero.Stat
              value={1900}
              label="AbbVie-Beschäftigte vor Ort"
              index={1}
            />
            <BackgroundHero.Stat
              value={10}
              suffix=" km²"
              label="BASF-Werksfläche (weltgrößtes Chemiewerk)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            BASF, AbbVie, TWL – Verbund-Prozesse im weltgrößten Chemiewerk
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo der Verbund-Gedanke auf Pharma-GxP und Energiewende trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ludwigshafen ist die BASF-Stadt – und gleichzeitig zweitgrößter
            globaler F&E-Standort von AbbVie. Verbundproduktion, GxP-Pharma
            und Energiewende-Anforderungen liegen hier in einem einzigen
            Industrieareal. Wer als Zulieferer im Spiel bleiben will, muss
            REACH, GAMP 5 und CBAM gleichzeitig beherrschen.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Das BASF-Stammwerk auf rund 10 km² ist das weltgrößte zusammenhängende
            Chemiewerk, mit etwa 200 Produktionsanlagen, über 2.000 Kilometern
            Rohrleitungen und rund 33.000 Beschäftigten am Standort. Das
            Verbund-Konzept – integrierte Stoffströme zwischen den Anlagen –
            ist Weltbenchmark der Prozessindustrie und erzwingt einen
            engmaschigen EDI-Datenaustausch mit hunderten Zulieferern: vom
            Engineering-Dienstleister über Wartungsbetriebe bis zu
            Spezialchemikalien-Lieferanten. Wer aus den Rahmenverträgen fällt,
            weil Catena-X-Anbindung oder REACH-Dokumentation fehlt, verliert
            Millionenumsätze.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Parallel betreibt AbbVie in Ludwigshafen seinen zweitgrößten globalen
            F&E-Standort mit rund 1.900 Beschäftigten, mit Forschungstradition
            seit Knoll/Abbott. GxP-Compliance, FDA-Audits, EudraVigilance-Meldungen
            und klinisches Datenmanagement nach 21 CFR Part 11 und Annex 11
            sind Pflicht – und ziehen das gleiche Anforderungsniveau bei
            Verpackern, Labordienstleistern und Engineering-Betrieben nach sich.
            Mittelständler ohne validierte Workflows haben hier keine Chance.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Hinzu kommt die Energiewende: BASF investiert in Elektrifizierung
            der Steamcracker, Wasserstoff und CCS. TWL und Pfalzwerke betreiben
            den Smart-Meter-Rollout. Energie-Datenmanagement, EU-ETS-Meldungen,
            CBAM-Berichte und CSRD-Reporting nach ESRS E1 sind hochkomplex
            und nur automatisiert beherrschbar. Wie wir die Implementierung
            in sechs Phasen strukturieren, beschreiben wir auf der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/ludwigshafen-am-rhein.jpg"
              alt="Verbund-Automatisierung für BASF-Zulieferer und AbbVie-Partner in Ludwigshafen"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                BASF baut KI-Teams für Predictive Maintenance – was machen Zulieferer?
              </Typo.H2>
              <Typo.Paragraph>
                BASF betreibt eigene Data-Science- und KI-Teams für
                Anlagenüberwachung und Auto-Procurement. Zulieferer aus
                Engineering, Wartung, Logistik und Mess-/Steuerungstechnik
                brauchen einen anderen Hebel: schlanke Workflows, die SAP S/4HANA,
                das BASF-Lieferantenportal und ihre eigene Disposition ohne
                manuelle Doppelerfassung verbinden – self-hosted, on-premise,
                modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 4. DataTable – Verbund-Prozesse */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Verbund- und Pharma-Prozesse automatisieren
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
                <DataTable.Cell bold>BASF-Verbund-Abruf (IDoc)</DataTable.Cell>
                <DataTable.Cell>25 Min/Order</DataTable.Cell>
                <DataTable.Cell>1 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>REACH-Datenblatt-Pflege</DataTable.Cell>
                <DataTable.Cell>2 Std./Stoff</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>GxP-CoA-Review für AbbVie</DataTable.Cell>
                <DataTable.Cell>3 Std./Charge</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ADR-Gefahrgut-Doku Rheinhafen</DataTable.Cell>
                <DataTable.Cell>40 Min/Transport</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~95 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>CBAM/EU-ETS-Reporting</DataTable.Cell>
                <DataTable.Cell>6 Std./Monat</DataTable.Cell>
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
            { value: 177222, label: "Einwohner Ludwigshafen" },
            { value: 111991, label: "BASF-Gruppe weltweit" },
            { value: 200, label: "Produktionsanlagen im Verbund" },
            { value: 2000, suffix: " km", label: "Rohrleitungen Stammwerk" },
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
        <Typo.H2>Häufige Fragen aus Ludwigshafen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={ludwigshafenamrheinFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
