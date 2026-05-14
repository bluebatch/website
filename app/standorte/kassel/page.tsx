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
import NumberedList from "@/components/ui/numbered-list";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Car, ShieldCheck, FlaskConical, Truck, GraduationCap, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-kassel",
      preHeadline: "AI Workflows Kassel",
      headline: "AI Workflows & Automatisierung in Kassel",
      metaTitle: "AI Workflows Kassel - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Kassel. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Kassel",
        "KI Automatisierung Kassel",
        "Workflow Automatisierung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-kassel",
      preHeadline: "n8n Automation Kassel",
      headline: "n8n Automation in Kassel - Workflows automatisieren",
      metaTitle: "n8n Automation Kassel | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Kassel. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Kassel",
        "n8n Kassel",
        "Workflow Automation Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-kassel",
      preHeadline: "n8n Kassel",
      headline: "n8n Agentur in Kassel",
      metaTitle: "n8n Kassel - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Kassel. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Kassel und Umgebung.",
      keywords: [
        "n8n Kassel",
        "n8n Agentur Kassel",
        "n8n Beratung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-kassel",
      preHeadline: "Automation Kassel",
      headline: "Automation & Prozessoptimierung in Kassel",
      metaTitle: "Automation Kassel - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Kassel. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Kassel",
        "Prozessautomatisierung Kassel",
        "Workflow Automation Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-kassel",
      preHeadline: "IT Dienstleister Kassel",
      headline: "IT Dienstleister in Kassel - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Kassel - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Kassel. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Kassel.",
      keywords: [
        "IT Dienstleister Kassel",
        "IT Service Kassel",
        "Digitalisierung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-kassel",
      preHeadline: "KI Beratung Kassel",
      headline: "KI Beratung in Kassel - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Kassel - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Kassel. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Kassel",
        "KI Lösungen Kassel",
        "Künstliche Intelligenz Kassel",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Kassel",
  slug: "kassel",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Baunatal",
    "Vellmar",
    "Hofgeismar",
    "Melsungen",
  ],
  crossReference: [
    { name: "Göttingen", slug: "goettingen" },
    { name: "Hannover", slug: "hannover" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Kassel | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Kassel - vom VW-Werk Baunatal über K+S und KNDS bis zur Wintershall Dea und Gesundheit Nordhessen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Kassel",
      "Workflow-Automatisierung Kassel",
      "n8n Kassel",
      "KI Automatisierung Kassel",
      "Prozessoptimierung Kassel",
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
          url: "/images/cities/kassel.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Kassel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/kassel.jpg"],
    },
    alternates: {
      canonical: "/standorte/kassel",
    },
  };
}

const kasselFaqs = [
  {
    question: "VW-Werk Baunatal ist Leitwerk für E-Antriebe - wie passt n8n zur Zulieferer-Achse?",
    answer:
      "Über 16.500 Beschäftigte, Schlüsselstandort für Getriebe und Elektroantriebe. JIT/JIS-Bestellabrufe, EDI mit Tier-1/-2, Catena-X-Datenraum-Anbindung und LkSG-Konformität werden mit n8n abgebildet - inklusive PowerCo-Salzgitter-Konnektivität.",
  },
  {
    question: "KNDS Deutschland - wie hilft n8n bei Verteidigungs-Compliance?",
    answer:
      "Bundeswehr-Sondervermögen und EU-Aufrüstung treiben Aufträge bis 2032+. Skalierung der Produktion, Sicherheitsüberprüfungen, Exportkontrollen (AWG, ITAR), Geheimschutz und Zulieferer-Audits werden auditfest und mandantengetrennt in n8n abgebildet.",
  },
  {
    question: "K+S AG - wie unterstützen wir Bergbau- und Düngemittel-Compliance?",
    answer:
      "Werra-Salzlösung, CBAM, CSRD, CO2-Bilanzen, Förderprotokolle, Abwasser-Reporting und globale Distribution erzeugen massive Anforderungen. n8n bildet Umwelt- und Sicherheitsvorschriften auditfest ab - inklusive BAFA-Förderdokumentation.",
  },
  {
    question: "Wintershall Dea - passt n8n in die Energie-Transformation?",
    answer:
      "Joint Ventures, Beteiligungs-Reporting, Sanktions-Compliance (Russland-Aussteig) und CSRD sind komplex. n8n bildet die Datenströme zwischen klassischer Öl-/Gas-Förderung und Energiewende-Beteiligungen auditfest ab.",
  },
  {
    question: "Bombardier/Alstom und Bahnindustrie - welche Use-Cases?",
    answer:
      "Investitionsoffensive Bahn, Ersatzteil-Workflows, Wartungsverträge, Tender-Antworten, ETCS-Konformität und Service-Logistik werden mit n8n und SAP Service Cloud verzahnt. Hochfrequente Field-Service-Daten werden konsolidiert.",
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
          imageSrc="/images/cities/kassel.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Kassel"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Kassel -{" "}
                VW Baunatal, KNDS, K+S und{" "}
                <BackgroundHero.Highlight>documenta-Stadt</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            VW Werk Baunatal, KNDS (Leopard 2, Boxer), K+S, Wintershall Dea,
            Bombardier/Alstom, Gesundheit Nordhessen, Universität Kassel -
            Kassel ist Nordhessens industrielles Zentrum und documenta-Stadt.
            Wir bauen n8n-Workflows für VW-E-Antriebe, Verteidigungs-
            Compliance, Düngemittel-CBAM und Bahntechnik.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Kasseler Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={197230}
              label="Einwohner Stadt Kassel"
              index={0}
            />
            <BackgroundHero.Stat
              value={16500}
              label="VW-Werk-Baunatal-Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={3.8}
              suffix=" Mrd. €"
              label="KNDS-Umsatz 2024"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Kasseler Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          VW Baunatal steuert anders als KNDS, K+S anders als die documenta.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine - vom
          Catena-X-Konnektor bis zur Geheimschutz-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VW Werk Baunatal - Leitwerk für E-Antriebe</Typo.H3>
            <Typo.Paragraph>
              Über 16.500 Beschäftigte, zweitgrößtes VW-Werk weltweit,
              Schlüsselrolle in der E-Mobilitäts-Strategie. JIT/JIS,
              EDI/VDA, Catena-X-Anbindung, PowerCo-Salzgitter-Konnektivität
              und LkSG-Reporting werden mit n8n auditfest abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KNDS Deutschland - Leopard 2 und Boxer</Typo.H3>
            <Typo.Paragraph>
              1.500 Beschäftigte in Kassel, 11.000 im Konzern, 3,8 Mrd. EUR
              Umsatz. Sicherheitsüberprüfungen, AWG-/ITAR-Exportkontrollen,
              Geheimschutz, Zulieferer-Audits und Auftragsbücher bis 2032+
              werden mandantengetrennt in n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>K+S AG - Düngemittel- und Salz-Weltmarktführer</Typo.H3>
            <Typo.Paragraph>
              11.500 Beschäftigte weltweit, viele im Werra-Revier. Werra-
              Salzlösung, CBAM, CSRD, CO2-Bilanzen, Förderprotokolle und
              Abwasser-Reporting werden mit n8n auditfest gebündelt -
              inklusive globaler Distribution.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bombardier/Alstom - Bahntechnik in Kassel</Typo.H3>
            <Typo.Paragraph>
              Standort für Lokomotiv- und Wagenbau. Investitionsoffensive
              Bahn, Ersatzteil-Workflows, Wartungsverträge, Tender-Antworten
              und ETCS-Konformität werden mit n8n und SAP Service Cloud
              verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Kassel &amp; nordhessischer Mittelstand</Typo.H3>
            <Typo.Paragraph>
              24.000 Studierende mit Schwerpunkten in Erneuerbaren Energien
              und Maschinenbau. Drittmittel-Workflows, Industriekooperationen
              mit B. Braun Melsungen, Hessisch Lichtenau und Wolfhagen
              werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Gesundheit Nordhessen Holding</Typo.H3>
            <Typo.Paragraph>
              4.500 Beschäftigte in der Klinik-Holding rund um das
              Klinikum Kassel. DRG-Abrechnung, Personalplanung und
              Materialwirtschaft werden mit n8n und KI entlastet - unter
              Pflegepersonal-Druck und neuer KHPflEG-Vorgabe.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Kassel eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Kassel ist Nordhessens industrielles Zentrum mit dem zweitgrößten
            VW-Werk Deutschlands (16.500 Beschäftigte), KNDS Deutschland als
            Hersteller von Leopard 2 und Boxer (3,8 Mrd. EUR Umsatz 2024),
            K+S als weltweit führendem Düngemittelhersteller und Wintershall
            Dea im Energie-Umbruch. Bundeswehr-Sondervermögen,
            E-Mobilitäts-Hochlauf, CBAM und Russland-Sanktionen treffen
            zeitgleich. Hinzu kommt die documenta als logistische
            Großoperation alle fünf Jahre.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Kassel in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={16500}
            subtitle="VW-Baunatal-Beschäftigte"
          />
          <KpiCard
            value={11500}
            subtitle="K+S weltweit"
          />
          <KpiCard
            value={11000}
            subtitle="KNDS-Konzern"
          />
          <KpiCard
            value={24000}
            subtitle="Universität-Kassel-Studierende"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/kassel.jpg"
            alt="Kassel VW Baunatal, KNDS und documenta - n8n-Workflows für Nordhessens Industrie"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>VW-E-Antriebe, Bundeswehr-Sondervermögen und documenta</Typo.H2>
            <Typo.Paragraph>
              Die documenta zieht alle fünf Jahre mehrere hunderttausend
              Besucher nach Kassel und ist eine logistische Großoperation:
              tausende Kunstwerke, weltweite Leihverkehre, Versicherungen,
              Akkreditierung. Parallel skaliert KNDS die Produktion, VW
              transformiert auf E-Antriebe, K+S balanciert CBAM und Russland-
              Sanktionen. Wir bauen n8n-Workflows, die diese
              Gleichzeitigkeit beherrschbar machen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 7.5. Bonus — Kasseler Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Fünf Kasseler Eigenheiten</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="VW-Werk Baunatal.">
              Größtes VW-Komponentenwerk weltweit mit über 16.000
              Beschäftigten. Getriebe-, E-Antrieb- und Gussfertigung. EDI/VDA-
              Anbindung an alle VW-Marken, IATF-16949-Audit-Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="KNDS-Verteidigung (Krauss-Maffei Wegmann).">
              Leopard 2, Puma, Boxer. Exportkontroll-Workflows nach AWG/KrWaffG,
              BAFA-Anträge, ITAR-Compliance und NATO-Standards.
            </NumberedList.Item>
            <NumberedList.Item title="K+S Kali und Salz.">
              MDAX-Konzern mit Hauptsitz Kassel, weltweiter Bergbau. SAP IS-
              Mining, Frachten-Disposition, REACH-Dokumentation und
              CO2-Reporting.
            </NumberedList.Item>
            <NumberedList.Item title="Wintershall Dea.">
              Größter unabhängiger Öl- und Gasproduzent Europas. Lieferketten-
              Pflichten, Joint-Venture-Buchhaltung und Sanktions-Screening.
            </NumberedList.Item>
            <NumberedList.Item title="documenta-Kulturstadt.">
              Alle fünf Jahre 800.000 Besucher, Hunderte internationale
              Künstler, Logistik für Großkunstwerke. Workflows für Versand,
              Versicherung und Akkreditierung.
            </NumberedList.Item>
          </NumberedList>
        </div>
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
        <Typo.H2>Häufige Fragen aus Kassel</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={kasselFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
