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
import { Building2, ShieldCheck, GraduationCap } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-bochum",
  rewrites: [
    {
      source: "/ai-workflows-bochum",
      preHeadline: "AI Workflows Bochum",
      headline: "AI Workflows & Automatisierung in Bochum",
      metaTitle: "AI Workflows Bochum - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bochum. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: ["AI Workflows Bochum", "KI Automatisierung Bochum", "Workflow Automatisierung Bochum", "Bluebatch"],
    },
    {
      source: "/n8n-automation-bochum",
      preHeadline: "n8n Automation Bochum",
      headline: "n8n Automation in Bochum - Workflows automatisieren",
      metaTitle: "n8n Automation Bochum | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bochum. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: ["n8n Automation Bochum", "n8n Bochum", "Workflow Automation Bochum", "Bluebatch"],
    },
    {
      source: "/n8n-bochum",
      preHeadline: "n8n Bochum",
      headline: "n8n Agentur in Bochum",
      metaTitle: "n8n Bochum - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bochum. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bochum und Umgebung.",
      keywords: ["n8n Bochum", "n8n Agentur Bochum", "n8n Beratung Bochum", "Bluebatch"],
    },
    {
      source: "/automation-bochum",
      preHeadline: "Automation Bochum",
      headline: "Automation & Prozessoptimierung in Bochum",
      metaTitle: "Automation Bochum - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bochum. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: ["Automation Bochum", "Prozessautomatisierung Bochum", "Workflow Automation Bochum", "Bluebatch"],
    },
    {
      source: "/it-dienstleister-bochum",
      preHeadline: "IT Dienstleister Bochum",
      headline: "IT Dienstleister in Bochum - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bochum - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bochum. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bochum.",
      keywords: ["IT Dienstleister Bochum", "IT Service Bochum", "Digitalisierung Bochum", "Bluebatch"],
    },
    {
      source: "/ki-beratung-bochum",
      preHeadline: "KI Beratung Bochum",
      headline: "KI Beratung in Bochum - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bochum - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bochum. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: ["KI Beratung Bochum", "KI Lösungen Bochum", "Künstliche Intelligenz Bochum", "Bluebatch"],
    },
    { source: "/ki-agentur-bochum" },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bochum",
  slug: "bochum",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: ["Witten", "Hattingen", "Castrop-Rauxel", "Wetter (Ruhr)", "Herdecke", "Sprockhövel", "Gladbeck"],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Essen", slug: "essen" },
    { name: "Herne", slug: "herne" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Hagen", slug: "hagen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Bochum | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "KI & Workflow-Automatisierung in Bochum: für Vonovia, Knappschaft-Bahn-See, Ruhr-Universität, ThyssenKrupp Steel und das Strukturwandel-Areal MARK 51°7.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Bochum",
      "n8n Bochum",
      "Vonovia Automatisierung",
      "Cybersecurity Bochum",
      "ESG Reporting Immobilien",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/bochum.jpg", width: 1200, height: 630, alt: "Bochum Strukturwandel MARK 51°7" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/bochum.jpg"] },
    alternates: { canonical: "/ki-agentur-bochum" },
  };
}

const bochumFaqs = [
  {
    question: "Vonovia verwaltet 540.000 Wohnungen – können wir das auch automatisieren?",
    answer:
      "Vonovia hat eigene Plattformen. Für Wohnungsverwalter, Hausmeister-Pools und Mittelstand-Bestandshalter bauen wir dieselben Bausteine kleiner: Mieterportal, Reparatur-Ticketing über WhatsApp/E-Mail in CAFM-Systeme, Nebenkostenabrechnung, Heizkostenverordnung – mit Anbindung an immowelt, immoscout, Domus, GES und Wodis.",
  },
  {
    question: "CSRD und EU-Taxonomie kommen – was bringt n8n im ESG-Reporting?",
    answer:
      "CSRD-Datenpunkte werden aus heterogenen Quellen aggregiert: Energiemonitoring, Mieterdaten, Sanierungsstand, Heizkesselaltersangaben. n8n orchestriert Datensammlung, Plausibilitätsprüfung und Reportausgabe nach ESRS – inklusive externer Auditor-Schnittstelle.",
  },
  {
    question: "Wir forschen am Horst-Görtz-Institut oder Max-Planck Cybersecurity – wie sicher ist n8n?",
    answer:
      "Self-hosted, BSI-Grundschutz-konform deploybar, Code ist Open-Source und auditierbar. Geheimnisverwaltung über HashiCorp Vault, Logs in unveränderliche WORM-Storage, Härtung nach CIS-Benchmarks. Für Forschungsdaten greifen wir auf separierte n8n-Instanzen pro Projekt zurück.",
  },
  {
    question: "MARK 51°7 (das ehemalige Opel-Areal) – was passt da hin?",
    answer:
      "Genehmigungs-Workflows mit der Bezirksregierung Arnsberg, Investorenmanagement, Fördermittelanträge bei NRW.Invest und EFRE-Programmen. Plus interne Quartiers-Workflows: Logistik-Disposition für DHL, Forschungs-Onboarding für Fraunhofer, Kooperationsmanagement für RUB-Spinoffs.",
  },
  {
    question: "ThyssenKrupp Steel reduziert – welche Workflows helfen in der Stahl-Restrukturierung?",
    answer:
      "Sonderstahl-Aufträge mit komplexen Spezifikationen, Charge-Tracking, Lieferanten-Audits nach IATF-16949 und Werkstoffprüfberichte. n8n verbindet PLM, MES und SAP zu durchgängigen Belegketten – wichtig, wenn Personalreduktion bei gleichbleibender Qualitätsanforderung umzusetzen ist.",
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
          imageSrc="/images/cities/bochum.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Bochum"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Bochum –{" "}
                vom Strukturwandel zum{" "}
                <BackgroundHero.Highlight>Cybersecurity-Cluster</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Zeche und Opel wurde Vonovia-Headquarter, Knappschaft,
            Cybersecurity-Forschung und MARK 51°7. Wir automatisieren genau die
            Workflows, die ein Standort im Wandel braucht – ESG-Reporting,
            Wohnungs-Disposition und Genehmigungs-Pipelines.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Automatisierung für Bochum besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={540000}
              label="Wohnungen von Vonovia verwaltet"
              index={0}
            />
            <BackgroundHero.Stat
              value={40000}
              label="Studierende an der Ruhr-Universität"
              index={1}
            />
            <BackgroundHero.Stat
              value={4500}
              label="Beschäftigte Knappschaft-Bahn-See"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel ist keine Phase, sondern Dauerzustand
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn die Industrie geht?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bochum hat in 25 Jahren Zeche Hannover, Nokia und Opel verloren –
            und mit Vonovia, Knappschaft, Gesundheitscampus NRW und dem
            Max-Planck-Institut für Sicherheit neue Säulen aufgebaut. Jede
            dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 — Lösungs-Use-Cases */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Bochum heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit
          einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen
          Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Wohnungswirtschaft</Typo.H3>
            <Typo.Paragraph>
              CSRD/ESG-Reporting, Mieter-Self-Service, Reparatur-Ticketing,
              Heizkostenabrechnung und CO2-Bilanzierung. Anbindung an Wodis,
              Domus, GES, immowelt, immoscout.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Cybersecurity und Verwaltung</Typo.H3>
            <Typo.Paragraph>
              Knappschaft, DRV Bahn-See, Universitätsklinikum – sensible
              Sozial- und Patientendaten. n8n self-hosted, audit-fest und
              BSI-Grundschutz-tauglich.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Forschung und Spin-offs</Typo.H3>
            <Typo.Paragraph>
              Drittmittelmanagement, BMBF-Reports, MDR-Dokumentation für
              MedTech-Startups vom Gesundheitscampus, RUB-Transferprozesse.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons – Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Bochum hinter sich gelassen hat – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Opel-Werk Bochum geschlossen (2014)"
                description="4.000 Arbeitsplätze direkt, 20.000 indirekt – komplette Wertschöpfungskette der Automobilfertigung weg."
              />
              <ProsCons.Item
                title="Zeche Hannover endgültig stillgelegt"
                description="Steinkohleabbau und alle nachgelagerten Lieferanten verloren."
              />
              <ProsCons.Item
                title="Nokia, Outokumpu, weitere Industrie-Schließungen"
                description="Klassische industrielle Großbetriebe ziehen ab oder bauen drastisch zurück."
              />
              <ProsCons.Item
                title="ThyssenKrupp Steel reduziert konzernweit"
                description="Von 27.000 auf 16.000 Stellen bis 2030 – Bochum als Sondergüten-Standort steht unter Effizienzdruck."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Vonovia-Konzernzentrale (12.056 Beschäftigte)"
                description="Europas größter Wohnimmobilien-Verwalter mit massivem Digitalisierungsbudget."
              />
              <ProsCons.Item
                title="Cybersecurity-Cluster Weltklasse"
                description="Horst-Görtz-Institut der RUB, Max-Planck-Institut für Sicherheit und Privatsphäre, G DATA, escrypt."
              />
              <ProsCons.Item
                title="Gesundheitscampus NRW und Universitätsklinikum"
                description="Pharma, MedTech, Krankenkassen, MDR-Compliance – workflow-intensives Wachstum."
              />
              <ProsCons.Item
                title="MARK 51°7 – das transformierte Opel-Areal"
                description="DHL-Hub, Fraunhofer-Institute, RUB-Spinoffs, BoLeBo – ein neues Industrie- und Wissensquartier."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 5. BoundlessImage — MARK 51°7 */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/bochum.jpg"
            alt="MARK 51°7 Strukturwandel-Areal in Bochum"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>MARK 51°7 – wo Opel war, ist heute Workflow-Innovation</Typo.H2>
            <Typo.Paragraph>
              Das ehemalige Opel-Areal beherbergt heute DHL, Fraunhofer,
              RUB-Forschungseinrichtungen und Industrie 4.0-Startups.
              Quartiersmanagement bedeutet: Fördermittelanträge, Investoren-Onboarding,
              Genehmigungs-Workflows mit der Bezirksregierung Arnsberg und der
              Stadt Bochum. n8n verbindet diese Schnittstellen – ein Use-Case,
              den wir mehrfach gebaut haben.
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
        <Typo.H2>Häufige Fragen aus Bochum</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bochumFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
