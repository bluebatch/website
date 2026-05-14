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
import { Truck, Cog, Plane, ShieldCheck, Building2, HeartPulse, Factory, BookOpen, FlaskConical, Globe } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-hannover",
      preHeadline: "AI Workflows Hannover",
      headline: "AI Workflows & Automatisierung in Hannover",
      metaTitle: "AI Workflows Hannover - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hannover. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hannover",
        "KI Automatisierung Hannover",
        "Workflow Automatisierung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hannover",
      preHeadline: "n8n Automation Hannover",
      headline: "n8n Automation in Hannover - Workflows automatisieren",
      metaTitle: "n8n Automation Hannover | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hannover. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hannover",
        "n8n Hannover",
        "Workflow Automation Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hannover",
      preHeadline: "n8n Hannover",
      headline: "n8n Agentur in Hannover",
      metaTitle: "n8n Hannover - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hannover. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hannover und Umgebung.",
      keywords: [
        "n8n Hannover",
        "n8n Agentur Hannover",
        "n8n Beratung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hannover",
      preHeadline: "Automation Hannover",
      headline: "Automation & Prozessoptimierung in Hannover",
      metaTitle: "Automation Hannover - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hannover. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hannover",
        "Prozessautomatisierung Hannover",
        "Workflow Automation Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hannover",
      preHeadline: "IT Dienstleister Hannover",
      headline: "IT Dienstleister in Hannover - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hannover - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hannover. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hannover.",
      keywords: [
        "IT Dienstleister Hannover",
        "IT Service Hannover",
        "Digitalisierung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hannover",
      preHeadline: "KI Beratung Hannover",
      headline: "KI Beratung in Hannover - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hannover - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hannover. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hannover",
        "KI Lösungen Hannover",
        "Künstliche Intelligenz Hannover",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hannover",
  slug: "hannover",
  bundesland: "Niedersachsen",
  publish: true,
  nearbySmall: [
    "Garbsen",
    "Langenhagen",
    "Laatzen",
    "Lehrte",
    "Burgdorf",
    "Neustadt am Rübenberge",
    "Wunstorf",
    "Seelze",
    "Celle",
    "Hameln",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hildesheim", slug: "hildesheim" },
    { name: "Göttingen", slug: "goettingen" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Bremen", slug: "bremen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Hannover | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Hannover - von VW Nutzfahrzeuge und Continental über TUI und Talanx bis zur Hannover Messe.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Hannover",
      "Workflow-Automatisierung Hannover",
      "n8n Hannover",
      "KI Automatisierung Hannover",
      "Prozessoptimierung Hannover",
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
          url: "/images/cities/hannover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Hannover",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/hannover.jpg"],
    },
    alternates: {
      canonical: "/standorte/hannover",
    },
  };
}

const hannoverFaqs = [
  {
    question: "Wir sind VW-Nutzfahrzeuge-Zulieferer - wie hilft n8n bei ID. Buzz und Transporter-Anlauf?",
    answer:
      "JIT-/JIS-Bestellabrufe, EDI/VDA-4905/4906-Belege, Catena-X-Datenraum-Anbindung und Lieferketten-Compliance (LkSG) sind klassische n8n-Workflows. Wir docken an SAP-Mandanten, Jaggaer und VW-Lieferantenportale an.",
  },
  {
    question: "Continental im Konzernumbau - passt n8n zu CSRD und Trennungs-IT?",
    answer:
      "Sehr gut. Stammdatenbereinigung, getrennte ERP-Mandanten, ESG-Reporting nach ESRS und Tochter-Konsolidierung sind workflow-intensiv. n8n verbindet SAP, Oracle, Workday und CSRD-Tools wie SAP SCT oder Workiva auditfest.",
  },
  {
    question: "Talanx/HDI, VHV, Swiss Life - welche Versicherungs-Use-Cases?",
    answer:
      "Schadenakten-Klassifikation, Maklerprovisionen, Vertragsmanagement, KYC-Onboarding, IDD-Vermittler-Tracking, BaFin- und VAIT-Meldungen werden auditfest abgebildet. Wir kennen die typischen Bestandsführungssysteme und Schaden-IT der Hannoverschen Versicherer.",
  },
  {
    question: "TUI - wie hilft n8n bei Buchungen, Stornos und Provisionen?",
    answer:
      "Multi-Currency, Multi-Sprache, Hotel-/Flug-/Kreuzfahrt-Datenflüsse, Stornoabwicklung und Reisebüro-Provisionen werden in einer Plattform orchestriert. Wir integrieren mit GDS-Systemen, Amadeus, Travelport und SAP-Backoffice.",
  },
  {
    question: "Hannover Messe und Agritechnica - können wir Eventlogistik automatisieren?",
    answer:
      "Ja. Standbuchung, Akkreditierung, internationale Zollabwicklung, Hotelkooperationen, Aussteller-Onboarding und Sponsoren-Reporting laufen als End-to-End-Workflows - auch bei den klassischen Anmelde-Spitzen vor der Messe.",
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
          imageSrc="/images/cities/hannover.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Hannover"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Hannover -{" "}
                Messe-Hauptstadt, Automotive und{" "}
                <BackgroundHero.Highlight>Versicherungs-Hub</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Volkswagen Nutzfahrzeuge, Continental, TUI, Talanx/HDI, VHV,
            Hannover Rück, Sennheiser, MHH - Hannover bündelt Industrie,
            Tourismus und Versicherungswirtschaft. Wir bauen n8n-Workflows
            für Tier-1-Lieferanten, CSRD-Reporting, Schadenprozesse und
            Eventlogistik der Weltleitmesse.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Hannoverschen Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={548200}
              label="Einwohner Landeshauptstadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={1.178}
              suffix=" Mio."
              label="Einwohner Region Hannover"
              index={1}
            />
            <BackgroundHero.Stat
              value={15000}
              label="VW-Nutzfahrzeuge-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Hannoversche Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          VW Nutzfahrzeuge steuert anders als Talanx, TUI anders als die MHH.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine - vom
          EDI/VDA-Beleg bis zum Maklerprovisions-Workflow.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VW Nutzfahrzeuge - Stöcken, Transporter und ID. Buzz</Typo.H3>
            <Typo.Paragraph>
              15.000 Beschäftigte fertigen T7, Crafter und ID. Buzz. Für
              Zulieferer bauen wir JIT-/JIS-Workflows, EDI/VDA-4905/4906/4913,
              Catena-X-Konnektoren und LkSG-Reporting - auf SAP S/4HANA,
              Jaggaer und VW-Lieferantenportale abgestimmt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Continental - Trennung, CSRD und Transformation</Typo.H3>
            <Typo.Paragraph>
              41,4 Mrd. EUR Umsatz, tiefgreifender Konzernumbau, Trennung von
              Geschäftsbereichen. Wir bauen Workflows für getrennte
              ERP-Mandanten, Stammdatenbereinigung, CSRD/ESRS-Datenpipelines
              und Lieferanten-Re-Onboarding nach IATF 16949.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Talanx/HDI, VHV, Hannover Rück - Versicherungsmetropole</Typo.H3>
            <Typo.Paragraph>
              Nach Köln und München drittgrößter Versicherungsstandort
              Deutschlands. Schadenakten-Klassifikation, KYC-Onboarding,
              IDD-Vermittler-Tracking, BaFin/MaRisk-Reports und VAIT-Audit-Trails
              werden auditfest in n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Plane className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TUI - globale touristische Lieferkette</Typo.H3>
            <Typo.Paragraph>
              20,7 Mrd. EUR Umsatz, Flüge, Hotels, Kreuzfahrten und Reisebüros
              in dutzenden Ländern. Buchungs-, Stornierungs-, Reklamations- und
              Provisions-Workflows mit GDS-Anbindung (Amadeus, Travelport) und
              SAP-Backoffice werden in einer Plattform orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hannover Messe, Agritechnica, EMO - Eventwirtschaft</Typo.H3>
            <Typo.Paragraph>
              Weltleitmessen mit zehntausenden Ausstellern und Akkreditierungs-
              Spitzen. Standbuchung, internationale Zollabwicklung, Aussteller-
              Onboarding und Hotelkooperationen laufen End-to-End. Auch die
              CeBIT-Nachfolge &quot;Hannover Messe Digital&quot; wird abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Medizinische Hochschule Hannover (MHH)</Typo.H3>
            <Typo.Paragraph>
              10.000 Beschäftigte, europäisches Spitzenzentrum für
              Transplantationsmedizin. Drittmittel-Reporting an BMBF, EU und
              DFG, Ethikkommissionen, eCRF-Daten klinischer Studien und
              DRG-Kodierung werden mit n8n und KI orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Hannover in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={41.4}
            suffix=" Mrd. €"
            subtitle="Continental-Umsatz 2023"
          />
          <KpiCard
            value={20.7}
            suffix=" Mrd. €"
            subtitle="TUI-Umsatz"
          />
          <KpiCard
            value={15000}
            subtitle="VW-Nutzfahrzeuge-Beschäftigte"
          />
          <KpiCard
            value={10000}
            subtitle="MHH-Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Hannover eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Drei Strukturkrisen treffen Hannover gleichzeitig: Volkswagen
            Nutzfahrzeuge muss Verbrenner-Transporter und ID. Buzz parallel
            hochlaufen lassen, Continental zerlegt sich in Tochtergesellschaften
            und steht unter CSRD-Druck, die Versicherer Talanx/HDI, VHV und
            Hannover Rück müssen Schaden- und Provisionsprozesse
            durchdigitalisieren. Dazu kommt die Hannover Messe als
            Weltleitmesse mit massiven Anmelde- und Logistik-Spitzen.
            Automatisierung ist hier operative Pflicht, nicht Wunschdenken.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/hannover.jpg"
            alt="Hannover Messe und VW Nutzfahrzeuge - n8n-Workflows für Tier-1-Lieferanten und Eventlogistik"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>ID. Buzz, CSRD und Hannover Messe - jeder Schritt erzeugt Daten</Typo.H2>
            <Typo.Paragraph>
              Volkswagen Nutzfahrzeuge fährt parallel Verbrenner- und
              E-Plattformen hoch, Continental zerlegt sich in
              Geschäftsbereiche, TUI managt globale Reisedaten in 18 Ländern,
              die Hannover Messe meldet zehntausende Aussteller pro Jahr an.
              Wir helfen Tier-1- und Tier-2-Mittelständlern entlang dieser
              Konzerne, mit schlanken n8n-Workflows den geforderten
              Tempo-Sprung zu schaffen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 7.5. Bonus — Niche-Cluster Hannover */}
      <ContentWrapper>
        <Typo.H2>Vier Hannoveraner Cluster, die keine andere Stadt so hat</Typo.H2>
        <Typo.Paragraph>
          Hinter VW Nutzfahrzeuge und TUI gibt es eine zweite Reihe an
          Weltmarktführern, deren Workflows wir kennen.
        </Typo.Paragraph>
        <SimpleGrid cols={4}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hannover Messe</Typo.H3>
            <Typo.Paragraph>
              Größte Industriemesse der Welt mit 130.000 Fachbesuchern. Als
              Drehscheibe zwischen Maschinenbau, Automation und Energie
              erzeugt sie Workflows für Standdisposition, Leadqualifizierung
              und Hostessen-Logistik.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Talanx-Gruppe</Typo.H3>
            <Typo.Paragraph>
              Drittgrößte Versicherungsgruppe Deutschlands mit HDI, Hannover
              Rück und Industrieversicherung. Schaden-Workflows, MaRisk- und
              IDD-Prozesse für 25.000 Mitarbeiter weltweit.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Continental Forschung</Typo.H3>
            <Typo.Paragraph>
              Continental-Forschungszentrum mit Tausenden Ingenieuren rund um
              Reifen, ContiTech und Automotive. Patentverwaltung, ALM-Daten,
              Prüfstands-Anbindung und Lieferanten-PPAP.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Globe className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TUI Touristik</Typo.H3>
            <Typo.Paragraph>
              Europas größter Reisekonzern mit Sitz Hannover. Workflows für
              Pauschalreise-Stornos, Pricing-Adjustments, Hotelvertrags-
              Management und IATA-Schnittstellen.
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
        <Typo.H2>Häufige Fragen aus Hannover</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={hannoverFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
