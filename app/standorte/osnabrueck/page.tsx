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
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import NumberedList from "@/components/ui/numbered-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Truck, Car, Cog, GraduationCap, HeartPulse, Wheat } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-osnabrueck",
  rewrites: [
    {
      source: "/ai-workflows-osnabrueck",
      preHeadline: "AI Workflows Osnabrück",
      headline: "AI Workflows & Automatisierung in Osnabrück",
      metaTitle: "AI Workflows Osnabrück - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Osnabrück. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: ["AI Workflows Osnabrück", "KI Automatisierung Osnabrück", "Workflow Automatisierung Osnabrück", "Bluebatch"],
    },
    {
      source: "/n8n-automation-osnabrueck",
      preHeadline: "n8n Automation Osnabrück",
      headline: "n8n Automation in Osnabrück - Workflows automatisieren",
      metaTitle: "n8n Automation Osnabrück | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Osnabrück. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: ["n8n Automation Osnabrück", "n8n Osnabrück", "Workflow Automation Osnabrück", "Bluebatch"],
    },
    {
      source: "/n8n-osnabrueck",
      preHeadline: "n8n Osnabrück",
      headline: "n8n Agentur in Osnabrück",
      metaTitle: "n8n Osnabrück - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Osnabrück. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Osnabrück und Umgebung.",
      keywords: ["n8n Osnabrück", "n8n Agentur Osnabrück", "n8n Beratung Osnabrück", "Bluebatch"],
    },
    {
      source: "/automation-osnabrueck",
      preHeadline: "Automation Osnabrück",
      headline: "Automation & Prozessoptimierung in Osnabrück",
      metaTitle: "Automation Osnabrück - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Osnabrück. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: ["Automation Osnabrück", "Prozessautomatisierung Osnabrück", "Workflow Automation Osnabrück", "Bluebatch"],
    },
    {
      source: "/it-dienstleister-osnabrueck",
      preHeadline: "IT Dienstleister Osnabrück",
      headline: "IT Dienstleister in Osnabrück - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Osnabrück - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Osnabrück. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Osnabrück.",
      keywords: ["IT Dienstleister Osnabrück", "IT Service Osnabrück", "Digitalisierung Osnabrück", "Bluebatch"],
    },
    {
      source: "/ki-beratung-osnabrueck",
      preHeadline: "KI Beratung Osnabrück",
      headline: "KI Beratung in Osnabrück - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Osnabrück - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Osnabrück. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: ["KI Beratung Osnabrück", "KI Lösungen Osnabrück", "Künstliche Intelligenz Osnabrück", "Bluebatch"],
    },
    { source: "/ki-agentur-osnabrueck" },
  ],
};

export const metaCustom: CityMeta = {
  name: "Osnabrück",
  slug: "osnabrueck",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: ["Melle", "Ibbenbüren", "Georgsmarienhütte", "Rheine", "Lengerich", "Bad Oeynhausen"],
  crossReference: [
    { name: "Münster", slug: "muenster" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Oldenburg", slug: "oldenburg" },
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

  const title = overrides?.metaTitle ?? "Künstliche Intelligenz in Osnabrück | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflow-Automatisierung & KI in Osnabrück: für Hellmann Worldwide Logistics, VW Cabrio-Werk, KME Kupfer, Klinikum Osnabrück und Universität/Hochschule.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Osnabrück",
      "n8n Osnabrück",
      "Logistik Automatisierung Osnabrück",
      "VW Cabrio-Werk Workflow",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/osnabrueck.jpg", width: 1200, height: 630, alt: "Osnabrück Logistik und VW-Cabrio-Werk" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/osnabrueck.jpg"] },
    alternates: { canonical: "/ki-agentur-osnabrueck" },
  };
}

const osnabrueckFaqs = [
  {
    question: "Hellmann ist global – wie passt n8n in eine 4PL-Architektur?",
    answer:
      "Hellmann nutzt etablierte TMS- und WMS-Plattformen. Für Sub-Carrier, Verlader und Zoll-Workflows orchestriert n8n die Schnittstellen: ATLAS-Zoll, EORI-Verifikation, eAWB, Trace-Daten von Carriern in CargoWise oder Mercurius, Frachtbrief-PDF-Extraktion mit AI Agents.",
  },
  {
    question: "VW Osnabrück baut Cabrio und Nischenmodelle – wie hilft n8n dort?",
    answer:
      "Sondermodelle und Niedrig-Stückzahlen brauchen flexible APQP-Workflows mit Einzelstück-Dokumentation, IATF-16949-konforme Lieferantenfreigaben und kunden-konfigurierbare Stücklisten. n8n verbindet die nicht-MBOS-Welt der Sondermodelle mit dem Konzern-SAP.",
  },
  {
    question: "KME ist Kupfer – welche Compliance-Themen sind dort dringend?",
    answer:
      "Kupfer-Halbzeuge unterliegen LME-Preisbindung, Konfliktmineralien-Reporting (Dodd-Frank §1502, EU 2017/821) und CBAM-Importzoll. Wir bauen Workflows, die Lieferanten-Audits, Sorgfaltspflichten-Doku und CBAM-Meldungen automatisieren.",
  },
  {
    question: "Universität und Hochschule mit 5.000 Beschäftigten – wo lohnt sich Automatisierung?",
    answer:
      "Drittmittel-Workflow (DFG, BMBF, EU), Hochschulreporting, Verlängerungs-Anträge für Wissenschaftler und VHB-konformes Beschaffungsmanagement. Schnittstellen zu HISinOne, SAP CO und DFG-elan.",
  },
  {
    question: "Was unterscheidet uns als Osnabrücker Mittelstand?",
    answer:
      "Lage A1/A30, Hafen am Mittellandkanal, Agribusiness-Region – Workflows berücksichtigen diese Spezifika. Wie wir Implementierung Schritt für Schritt aufsetzen, beschreiben wir auf der Seite Unser Prozess.",
  },
  {
    question: "Wir sind eine Region-Klinik wie Klinikum Osnabrück – DRG und KHZG?",
    answer:
      "DRG-Abrechnung, KHZG-Förder-Reporting, Patienten-Aufnahme und Personalplanung im Schichtbetrieb. Anbindung an SAP IS-H, Cerner i.s.h.med und apenio-Pflege-Dokumentation.",
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


      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/osnabrueck.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Osnabrück"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                Künstliche Intelligenz in Osnabrück –{" "}
                Logistik, Automotive und{" "}
                <BackgroundHero.Highlight>Agribusiness</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Hellmann mit 14.000 Mitarbeitern weltweit, VW Cabrio-Werk, KME als
            weltweit größter Hersteller von Kupfer-Halbzeugen, plus Universität
            und Klinikum – wir bauen Workflows für jede dieser Welten.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Workflow für Osnabrück besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={166000}
              label="Einwohner Osnabrück"
              index={0}
            />
            <BackgroundHero.Stat
              value={101709}
              label="Sozialversicherungspflichtig Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={16.5}
              suffix=" Mrd. €"
              label="Kumulierter Umsatz Top-Unternehmen"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Sechs Cluster, sechs Workflow-Welten</Typo.H2>
        <Typo.Paragraph>
          Jede Säule der Osnabrücker Wirtschaft hat eigene Compliance- und
          Prozessanforderungen – wir kennen alle.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hellmann Worldwide Logistics – globale 4PL</Typo.H3>
            <Typo.Paragraph>
              Sub-Carrier-Disposition, ATLAS-Zoll, EORI-Verifikation, eAWB, Trace-Daten
              und KI-gestützte Frachtbrief-Extraktion. Anbindung an CargoWise und
              proprietäre Hellmann-Plattformen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VW Osnabrück – Cabrio und Nischenfertigung</Typo.H3>
            <Typo.Paragraph>
              Sondermodelle mit niedrigen Stückzahlen, flexibler APQP, kunden-konfigurierbare
              Stücklisten, IATF-16949-Audits. n8n verbindet Sondermodell-Welt mit
              Konzern-SAP und MBOS.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KME – weltgrößter Kupfer-Halbzeuge-Hersteller</Typo.H3>
            <Typo.Paragraph>
              LME-Preisbindung, Konfliktmineralien-Reporting nach EU 2017/821 und
              Dodd-Frank §1502, CBAM-Meldungen, Lieferanten-Audits in der Kupfer-Lieferkette.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Klinikum Osnabrück und Marienhospital</Typo.H3>
            <Typo.Paragraph>
              DRG-Abrechnung, KHZG-Förderreporting, Schichtplanung in der Pflege,
              Patientenaufnahme-Workflows mit SAP IS-H und Cerner i.s.h.med.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität und Hochschule – 5.000 Beschäftigte</Typo.H3>
            <Typo.Paragraph>
              Drittmittel-Workflow (DFG, BMBF, EU), Hochschul-Reporting, Verlängerungs-Anträge
              für Wissenschaftler, VHB-konformes Beschaffungsmanagement.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wheat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Agribusiness und Lebensmittel</Typo.H3>
            <Typo.Paragraph>
              Osnabrücker Land als Agrar-Schwerpunkt mit Mestemacher, Schoeller und
              regionalen Mühlen. IFS Food, GS1-Stammdaten und Etikettierungs-Workflows
              für LEH-Kunden in DACH.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Osnabrück Logistik-Knoten an A1/A30 und Mittellandkanal"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Hellmann seit 1871 – wie skaliert Logistik im KI-Zeitalter?</Typo.H2>
            <Typo.Paragraph>
              Hellmann ist von Osnabrück aus in 150+ Länder gewachsen und hat 14.000
              Mitarbeiter weltweit. KI-gestützte Tarifprüfung, automatisierte
              Carrier-Disposition und Frachtbrief-Extraktion mit Vision-AI sind die
              Hebel, die die nächste Wachstumsphase tragen. Wir bauen die n8n-Bausteine
              zwischen Hauptsystemen und Spezial-Tools.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Osnabrück eine eigene KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Drittgrößte Stadt Niedersachsens, gut diversifiziert: ein globaler
            Logistiker (Hellmann), ein VW-Werk mit Nischenfertigung, ein Welt-Player
            in Kupfer (KME), zwei Hochschulen und ein Klinikum mit 5.000 Beschäftigten.
            Diese Vielfalt bringt vier sehr verschiedene Workflow-Welten an einen Ort –
            für die wir spezialisierte n8n-Bausteine bauen.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Osnabrück in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard value={14000} subtitle="Hellmann-Beschäftigte weltweit" />
          <KpiCard value={2300} subtitle="VW-Werk Osnabrück Beschäftigte" />
          <KpiCard value={4000} subtitle="KME-Beschäftigte global" />
          <KpiCard value={5000} subtitle="Klinikum-/Marienhospital-Beschäftigte" />
        </SimpleGrid>
      </ContentWrapper>
      {/* 7.5. Bonus — Osnabrücker Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Fünf Osnabrücker Eigenheiten</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Hellmann Worldwide Logistics seit 1871.">
              Familiengeführter Spediteur mit über 14.000 Mitarbeitern in
              57 Ländern. EDI-Anbindungen an Reedereien, Zollabwicklung ATLAS
              und CBAM, dazu komplexe Disposition über Hellmann-IT.
            </NumberedList.Item>
            <NumberedList.Item title="VW-Werk Osnabrück mit Cabrio-Fertigung.">
              2.300 Beschäftigte, Spezialisierung auf T-Roc Cabrio und Porsche
              Boxster-Karossen. EDI/VDA-Workflows, JIT/JIS-Anlieferung und
              IATF-16949-Audits.
            </NumberedList.Item>
            <NumberedList.Item title="KME Germany Kupferverarbeitung.">
              Globaler Konzern mit 4.000 Mitarbeitern, Wurzeln in Osnabrück.
              REACH/CBAM-Reporting für NE-Metalle, Lieferanten-Audits weltweit.
            </NumberedList.Item>
            <NumberedList.Item title="Universität &amp; Hochschule Osnabrück.">
              26.000 Studierende gemeinsam, Drittmittel-Workflows, BMBF/EU-
              Förderanträge, Forschungs-Transfer in den Mittelstand.
            </NumberedList.Item>
            <NumberedList.Item title="Agribusiness Osnabrücker Land.">
              Größtes Veredelungs-Cluster Deutschlands mit Big Dutchman, Amazone
              und PHW (Wiesenhof). QS-Audit-Workflows, GVO-Trennung und
              Tierwohl-Reporting.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Osnabrück</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={osnabrueckFaqs} />
        </div>
      </ContentWrapper>
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
