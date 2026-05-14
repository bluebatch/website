import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Cpu, GraduationCap, Car, FlaskConical, HeartPulse, Cog } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-dresden",
      preHeadline: "AI Workflows Dresden",
      headline: "AI Workflows & Automatisierung in Dresden",
      metaTitle: "AI Workflows Dresden - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Dresden. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Dresden",
        "KI Automatisierung Dresden",
        "Workflow Automatisierung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-dresden",
      preHeadline: "n8n Automation Dresden",
      headline: "n8n Automation in Dresden - Workflows automatisieren",
      metaTitle: "n8n Automation Dresden | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Dresden. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Dresden",
        "n8n Dresden",
        "Workflow Automation Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-dresden",
      preHeadline: "n8n Dresden",
      headline: "n8n Agentur in Dresden",
      metaTitle: "n8n Dresden - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Dresden. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Dresden und Umgebung.",
      keywords: [
        "n8n Dresden",
        "n8n Agentur Dresden",
        "n8n Beratung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-dresden",
      preHeadline: "Automation Dresden",
      headline: "Automation & Prozessoptimierung in Dresden",
      metaTitle: "Automation Dresden - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Dresden. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Dresden",
        "Prozessautomatisierung Dresden",
        "Workflow Automation Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-dresden",
      preHeadline: "IT Dienstleister Dresden",
      headline: "IT Dienstleister in Dresden - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Dresden - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Dresden. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Dresden.",
      keywords: [
        "IT Dienstleister Dresden",
        "IT Service Dresden",
        "Digitalisierung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-dresden",
      preHeadline: "KI Beratung Dresden",
      headline: "KI Beratung in Dresden - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Dresden - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Dresden. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Dresden",
        "KI Lösungen Dresden",
        "Künstliche Intelligenz Dresden",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Dresden",
  slug: "dresden",
  bundesland: "Sachsen",
  publish: true,
  nearbySmall: [
    "Freital",
    "Radebeul",
    "Pirna",
    "Meißen",
    "Coswig",
    "Heidenau",
    "Radeberg",
    "Bautzen",
  ],
  crossReference: [
    { name: "Leipzig", slug: "leipzig" },
    { name: "Chemnitz", slug: "chemnitz" },
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

  const title = overrides?.metaTitle ?? "KI in Dresden | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Dresden - von Infineon und GlobalFoundries über TSMC/ESMC bis zur TU Dresden.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Dresden",
      "Workflow-Automatisierung Dresden",
      "n8n Dresden",
      "KI Automatisierung Dresden",
      "Prozessoptimierung Dresden",
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
          url: "/images/cities/dresden.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Dresden",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/dresden.jpg"],
    },
    alternates: {
      canonical: "/standorte/dresden",
    },
  };
}

const dresdenFaqs = [
  {
    question: "Infineon, GlobalFoundries, TSMC/ESMC – passt n8n in die Halbleiterfertigung?",
    answer:
      "Ja. SEMI-Standards, ISO/IEC 14001, Automotive-Qualifikationen (IATF 16949 für Wafer in Automotive), MES-Datenflüsse und Yield-Reporting werden mit n8n und KI-gestützter Klassifikation orchestriert. Wir kennen die typischen Stacks der Dresdner Fabs.",
  },
  {
    question: "EU Chips Act und US-Exportkontrolle – wie unterstützt n8n Dual-Use?",
    answer:
      "BAFA-Anbindung, Endverbleibserklärungen, Sanktionslistenabgleich, ITAR-Prüfungen, EU-Dual-Use- und China-Restrictions sind n8n-Standardworkflows. Auditfest, mandantengetrennt und mit voller Nachvollziehbarkeit.",
  },
  {
    question: "Reinraum-Service-Mittelstand – wir warten Halbleiter-Anlagen, wie hilft n8n?",
    answer:
      "Servicetechniker-Einsatzplanung, Anlagen-Wartungsverträge, Ersatzteil-Workflows, Reinraum-Klima-Daten und Chemikalien-Bestellungen für Fabs werden mit n8n und SAP Service Cloud verbunden – inklusive Field-Service-App-Anbindung.",
  },
  {
    question: "TU Dresden Exzellenzcluster – wie helfen wir bei Drittmittel-Reporting?",
    answer:
      "Hunderte Millionen EUR Drittmittel pro Jahr, Förderpflichten an BMBF, EU (Horizon), DFG und GRC sind extrem dokumentationsintensiv. Wir bauen Workflow-Plattformen für Antragstellung, Mittelverwendung, Audits und Berichtspflichten.",
  },
  {
    question: "VW Gläserne Manufaktur, Bauboom – wie bleibt Dresden skalierbar?",
    answer:
      "Mit dem Hochlauf von ID.3-Kleinserien, dem TSMC-Greenfield und Hunderten Industrieansiedlungen wachsen Bauleitplanung, Genehmigungen und Personalbeschaffung enorm. n8n-Workflows skalieren Onboarding, Behördenkommunikation und Lieferanten-Qualifizierung.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Analyse bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/dresden.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Dresden"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Dresden –{" "}
                Silicon Saxony und{" "}
                <BackgroundHero.Highlight>Europas Halbleiter-Hauptstadt</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Infineon, GlobalFoundries, Bosch Sensortec, TSMC/ESMC ab 2027,
            TU Dresden, 10 Fraunhofer-Institute, VW Gläserne Manufaktur –
            jeder dritte in Europa produzierte Chip stammt aus Sachsen.
            Wir bauen n8n-Workflows für Halbleiter-Compliance,
            Reinraum-Service, Exzellenz-Forschung und Industrie-Greenfield.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Dresdner Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={565000}
              label="Einwohner Landeshauptstadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={80000}
              label="Silicon-Saxony-Beschäftigte (Sachsen)"
              index={1}
            />
            <BackgroundHero.Stat
              value={33}
              suffix=" %"
              label="Anteil europäischer Chips aus Sachsen"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Dresdner Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Infineon steuert anders als die TU Dresden, der Reinraum-Service
          anders als VW. Wir bauen für jeden Cluster die passenden
          n8n-Bausteine – von SEMI-Standards bis zur Drittmittel-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Infineon, GlobalFoundries, Bosch, TSMC/ESMC – Halbleiter-Fabs</Typo.H3>
            <Typo.Paragraph>
              Die fünf größten Halbleiterfabriken Europas auf engstem Raum.
              Wir bauen Workflows für SEMI-Standards, ISO/IEC 14001,
              IATF 16949 für Automotive-Wafer, MES-Datenflüsse,
              Yield-Reporting und Lieferanten-Qualifizierung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Reinraum-Service-Mittelstand</Typo.H3>
            <Typo.Paragraph>
              Hunderte Dresdner Mittelständler liefern und warten Fabs:
              Reinraumbau, Klima, Gase, Chemikalien, Wafer-Handling.
              Servicetechniker-Einsatzplanung, Anlagen-Wartungsverträge,
              Ersatzteil-Workflows und Field-Service-Apps werden mit
              n8n und SAP Service Cloud verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TU Dresden – Exzellenzuniversität mit 31.000 Studierenden</Typo.H3>
            <Typo.Paragraph>
              Drittmittel-Verwaltung, Förderanträge an BMBF/EU/DFG/GRC,
              Patentmanagement, Spin-off-Begleitung und Industrie-
              Kooperationen mit Fraunhofer, Max-Planck und Helmholtz
              werden mit n8n-Workflows orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VW Gläserne Manufaktur – E-Mobility-Greenfield</Typo.H3>
            <Typo.Paragraph>
              ID.3-Kleinserien und Sondermodelle in hochintegrierter
              digitaler Fertigung. Ideales Vorbild für Digital-Twin-
              Anwendungen mit n8n-Datenpipelines zwischen MES, Qualität
              und ERP.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Photonik, MEMS, Sensorik – Fraunhofer-Cluster</Typo.H3>
            <Typo.Paragraph>
              Fraunhofer IPMS, Bosch Sensortec und ca. 80 Photonik-Firmen.
              F&amp;E-zu-Industrie-Transfer, Patent-Workflows, EU-Förderprojekte
              und Industrie-Spin-offs werden mit Workflows beschleunigt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Carl Gustav Carus</Typo.H3>
            <Typo.Paragraph>
              6.500 Beschäftigte, eines der größten Krankenhäuser
              Ostdeutschlands. Studienverwaltung, eCRF, DRG-Kodierung
              und MDK-Prüfungen werden unter Personalmangel mit
              KI-gestützten Workflows entlastet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/dresden.jpg"
            alt="Silicon Saxony Dresden – n8n-Workflows für Halbleiter, Reinraum-Service und Exzellenzforschung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>25 Mrd. EUR Investitionen – Dresden braucht skalierbare Workflows</Typo.H2>
            <Typo.Paragraph>
              Allein die drei großen Fab-Erweiterungen bewegen über 25 Mrd. EUR
              und 2.000+ neue Stellen. Personalbeschaffung, Onboarding,
              Lieferanten-Qualifizierung, Reinraum-Logistik und
              Genehmigungs-Workflows der Stadt Dresden laufen parallel und
              auf unterschiedlichen Geschwindigkeiten. Wir helfen den
              Mittelstands-Zulieferern und Service-Dienstleistern, mit
              n8n-Workflows synchron zu bleiben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Dresden in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={5}
            suffix=" Mrd. €"
            subtitle="Infineon Smart Power Fab"
          />
          <KpiCard
            value={10}
            suffix=" Mrd. €"
            subtitle="GlobalFoundries seit 2009"
          />
          <KpiCard
            value={10}
            suffix=" Mrd. €"
            subtitle="ESMC/TSMC-JV"
          />
          <KpiCard
            value={10}
            subtitle="Fraunhofer-Institute"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Dresden eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Mit Investitionen von 5 Mrd. EUR (Infineon Smart Power Fab),
            über 10 Mrd. EUR (GlobalFoundries) und nochmals 10 Mrd. EUR
            (TSMC/ESMC) ist Dresden Europas wichtigster Halbleiter-Standort.
            2.000+ direkte neue Stellen und Tausende bei Zulieferern,
            verschärfter EU Chips Act, US-Exportkontrollen und SEMI-Standards
            erzeugen einen Compliance- und Skalierungsdruck, der nur mit
            durchgängigen Workflows beherrschbar ist. Dazu kommt die TU
            Dresden mit Hunderten Millionen EUR Drittmittel jährlich.
          </Typo.Paragraph>
        </IntroBox>
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
        <Typo.H2>Häufige Fragen aus Dresden</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={dresdenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
