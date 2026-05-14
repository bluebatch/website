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
import { ShieldCheck, Truck, Landmark, GraduationCap, Zap, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-kiel",
      preHeadline: "AI Workflows Kiel",
      headline: "AI Workflows & Automatisierung in Kiel",
      metaTitle: "AI Workflows Kiel - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Kiel. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Kiel",
        "KI Automatisierung Kiel",
        "Workflow Automatisierung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-kiel",
      preHeadline: "n8n Automation Kiel",
      headline: "n8n Automation in Kiel - Workflows automatisieren",
      metaTitle: "n8n Automation Kiel | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Kiel. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Kiel",
        "n8n Kiel",
        "Workflow Automation Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-kiel",
      preHeadline: "n8n Kiel",
      headline: "n8n Agentur in Kiel",
      metaTitle: "n8n Kiel - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Kiel. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Kiel und Umgebung.",
      keywords: [
        "n8n Kiel",
        "n8n Agentur Kiel",
        "n8n Beratung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-kiel",
      preHeadline: "Automation Kiel",
      headline: "Automation & Prozessoptimierung in Kiel",
      metaTitle: "Automation Kiel - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Kiel. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Kiel",
        "Prozessautomatisierung Kiel",
        "Workflow Automation Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-kiel",
      preHeadline: "IT Dienstleister Kiel",
      headline: "IT Dienstleister in Kiel - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Kiel - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Kiel. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Kiel.",
      keywords: [
        "IT Dienstleister Kiel",
        "IT Service Kiel",
        "Digitalisierung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-kiel",
      preHeadline: "KI Beratung Kiel",
      headline: "KI Beratung in Kiel - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Kiel - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Kiel. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Kiel",
        "KI Lösungen Kiel",
        "Künstliche Intelligenz Kiel",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Kiel",
  slug: "kiel",
  bundesland: "Schleswig-Holstein",
  publish: false,
  nearbySmall: [
    "Neumünster",
    "Rendsburg",
    "Eckernförde",
    "Preetz",
    "Plön",
  ],
  crossReference: [
    { name: "Hamburg", slug: "hamburg" },
    { name: "Lübeck", slug: "luebeck" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Kiel | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Kiel - von TKMS und German Naval Yards über Provinzial Nord bis zum UKSH und GEOMAR.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Kiel",
      "Workflow-Automatisierung Kiel",
      "n8n Kiel",
      "KI Automatisierung Kiel",
      "Prozessoptimierung Kiel",
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
          url: "/images/cities/kiel.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Kiel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/kiel.jpg"],
    },
    alternates: {
      canonical: "/standorte/kiel",
    },
  };
}

const kielFaqs = [
  {
    question: "TKMS baut U-Boote für 8–15 Jahre – passt n8n zu Marine-Großprojekten?",
    answer:
      "Ja. Projektmanagement über Jahrzehnte, Engineering-Workflows, Materialdokumentation, Geheimschutz, Sicherheitsüberprüfungen, AWG- und ITAR-Exportkontrollen werden mit n8n auditfest und mandantengetrennt abgebildet – pro NATO-Land getrennt steuerbar.",
  },
  {
    question: "Werften-Zulieferer Mittelstand – wie helfen wir bei Qualitätsdoku für militärische Anwendungen?",
    answer:
      "Stahlbau, Elektronik, Hydraulik, Antriebstechnik: hunderte Mittelständler liefern an TKMS und German Naval Yards. Qualitätsdokumentation, Audit-Trails, Werkstoffzertifikate und Geheimschutz-Anforderungen werden mit n8n abgebildet – ohne große IT-Mannschaft.",
  },
  {
    question: "Kieler Hafen mit Fähren nach Oslo, Göteborg, Klaipeda – welche Workflows?",
    answer:
      "Buchungs-, Zoll- (ATLAS), Gefahrgut- und Reservierungs-Workflows sind hochfrequent und mehrsprachig. Wir bauen n8n-Pipelines für Color Line, Stena Line und DFDS-Schnittstellen plus Kreuzfahrt-Saisonalität.",
  },
  {
    question: "Provinzial Nord und Förde Sparkasse – wie hilft n8n in der Versicherung?",
    answer:
      "Schadenprozesse, Maklerprovisionen, Vertrags- und Antragsdokumente werden mit KI-gestützter Klassifikation und n8n abgewickelt – auditfest und BaFin-/MaRisk-/VAIT-tauglich. Wir kennen die typischen Bestandsführungssysteme.",
  },
  {
    question: "GEOMAR und Wind-/H2-Cluster – wie automatisieren wir Forschungs- und Energie-Workflows?",
    answer:
      "GEOMAR-Drittmittel, internationale Schiffslogistik, Forschungsdaten-Management, Offshore-Wind-Genehmigungen und Wasserstoff-Pilotprojekt-Workflows werden mit n8n abgebildet. Schleswig-Holstein als Windenergie-Land Nr. 1 hat hier enormen Bedarf.",
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
          imageSrc="/images/cities/kiel.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Kiel"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Kiel –{" "}
                TKMS, Marine, Ostsee-Hafen und{" "}
                <BackgroundHero.Highlight>CAU</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            TKMS, German Naval Yards, Raytheon Anschütz, Caterpillar
            (vormals MaK), Provinzial Nord, Förde Sparkasse, CAU, UKSH
            Campus Kiel, GEOMAR – Kiel ist Deutschlands U-Boot-Hauptstadt
            und größte Ostseestadt. Wir bauen n8n-Workflows für
            Marine-Großprojekte, Hafen- und Fährlogistik, Versicherungs-
            und Forschungs-Workflows.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Kieler Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={250000}
              label="Einwohner Landeshauptstadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={28000}
              label="CAU-Studierende"
              index={1}
            />
            <BackgroundHero.Stat
              value={3}
              suffix=" Mio."
              label="Kieler-Woche-Besucher / Jahr"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Kiel in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={5600}
            subtitle="UKSH-Beschäftigte Campus Kiel"
          />
          <KpiCard
            value={3870}
            subtitle="CAU-Beschäftigte"
          />
          <KpiCard
            value={28000}
            subtitle="CAU-Studierende"
          />
          <KpiCard
            value={3}
            suffix=" Mio."
            subtitle="Kieler-Woche-Besucher"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Kieler Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          TKMS steuert anders als Provinzial, die CAU anders als der Hafen.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine – vom
          Geheimschutz-Workflow bis zur mehrsprachigen Fähr-Buchung.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TKMS &amp; German Naval Yards – U-Boote und Marineschiffe</Typo.H3>
            <Typo.Paragraph>
              Weltmarktführer für konventionelle U-Boote (Klasse 212, 218,
              214). Projektmanagement über 8-15 Jahre, Engineering,
              Materialdokumentation, AWG-/ITAR-Exportkontrolle, Geheimschutz
              und Sicherheitsüberprüfungen werden mandantengetrennt in
              n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Kieler Hafen – größter Fährhafen Deutschlands an der Ostsee</Typo.H3>
            <Typo.Paragraph>
              Verbindungen nach Oslo (Color Line), Göteborg (Stena Line),
              Klaipeda (DFDS) plus Kreuzfahrten. Mehrsprachige Buchungs-,
              Zoll-, Gefahrgut- und Reservierungs-Workflows werden in n8n
              End-to-End orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Provinzial Nord, Förde Sparkasse, HCOB</Typo.H3>
            <Typo.Paragraph>
              Provinzial Nord mit Hauptsitz in Kiel, plus Förde Sparkasse
              und Hamburg Commercial Bank. KYC-Onboarding, Schadenprozesse,
              Maklerprovisionen und BaFin-/MaRisk-Compliance werden mit
              n8n und KI-gestützter Dokumentenverarbeitung abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CAU &amp; GEOMAR – Ozean- und Meereswissenschaft</Typo.H3>
            <Typo.Paragraph>
              CAU mit 3.870 Beschäftigten und 28.000 Studierenden, GEOMAR
              als eines der wichtigsten europäischen Ozeanforschungszentren.
              Drittmittel, internationale Expeditionen, Schiffslogistik
              und Forschungsdaten werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Windenergie-Cluster Schleswig-Holstein</Typo.H3>
            <Typo.Paragraph>
              Schleswig-Holstein ist Windenergie-Land Nr. 1. Onshore- und
              Offshore-Wind-Projekte erzeugen Genehmigungs-, Service- und
              Wartungs-Workflows. Wasserstoff-Pilotprojekte (z.B. Westküste)
              werden mit n8n und Stadtwerke-Kiel-Anbindungen abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>UKSH Campus Kiel</Typo.H3>
            <Typo.Paragraph>
              5.600 Beschäftigte, Schwerpunktversorger Schleswig-Holsteins.
              DRG-Kodierung, Ethikkommissionen, Drittmittel-Reporting und
              Patientenkommunikation werden mit n8n und KI-gestützter
              Klassifikation entlastet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Kiel eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Kiel ist Deutschlands U-Boot-Hauptstadt: TKMS baut moderne
            konventionelle U-Boote mit Brennstoffzellen-Antrieb für die
            Bundeswehr, NATO-Partner und Exportländer. Mit dem
            Bundeswehr-Sondervermögen sind Auftragsbücher bis weit in die
            2030er gefüllt. Gleichzeitig betreibt der Kieler Hafen den
            größten Fährhafen Deutschlands an der Ostsee mit Verbindungen
            nach Oslo, Göteborg und Klaipeda. Die CAU und GEOMAR sind
            europäische Spitzenforschungszentren. Aufrüstung,
            Energiewende und Tourismus überlagern sich hier.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/kiel.jpg"
            alt="Kiel TKMS, Hafen und CAU – n8n-Workflows für Marine, Logistik und Forschung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Aufrüstung, Ostsee-Logistik und Kieler Woche – alles parallel</Typo.H2>
            <Typo.Paragraph>
              TKMS-Auftragsbücher reichen bis weit in die 2030er Jahre,
              die Kieler Woche zieht über 3 Mio. Menschen an, GEOMAR
              koordiniert internationale Forschungsexpeditionen und der
              Hafen wickelt Millionen Passagiere und Tonnen Güter ab. Wir
              helfen schleswig-holsteinischen Mittelständlern (Drägerwerk-,
              Beiersdorf-, Vaillant-Region), mit schlanken n8n-Workflows in
              dieser Vielfalt mitzuhalten.
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
        <Typo.H2>Häufige Fragen aus Kiel</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={kielFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
