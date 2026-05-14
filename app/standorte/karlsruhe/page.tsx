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
import { Cpu, ShoppingBag, Zap, GraduationCap, Landmark, ShieldCheck } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-karlsruhe",
      preHeadline: "AI Workflows Karlsruhe",
      headline: "AI Workflows & Automatisierung in Karlsruhe",
      metaTitle: "AI Workflows Karlsruhe - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Karlsruhe. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Karlsruhe",
        "KI Automatisierung Karlsruhe",
        "Workflow Automatisierung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-karlsruhe",
      preHeadline: "n8n Automation Karlsruhe",
      headline: "n8n Automation in Karlsruhe - Workflows automatisieren",
      metaTitle: "n8n Automation Karlsruhe | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Karlsruhe. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Karlsruhe",
        "n8n Karlsruhe",
        "Workflow Automation Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-karlsruhe",
      preHeadline: "n8n Karlsruhe",
      headline: "n8n Agentur in Karlsruhe",
      metaTitle: "n8n Karlsruhe - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Karlsruhe. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Karlsruhe und Umgebung.",
      keywords: [
        "n8n Karlsruhe",
        "n8n Agentur Karlsruhe",
        "n8n Beratung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-karlsruhe",
      preHeadline: "Automation Karlsruhe",
      headline: "Automation & Prozessoptimierung in Karlsruhe",
      metaTitle: "Automation Karlsruhe - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Karlsruhe. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Karlsruhe",
        "Prozessautomatisierung Karlsruhe",
        "Workflow Automation Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-karlsruhe",
      preHeadline: "IT Dienstleister Karlsruhe",
      headline: "IT Dienstleister in Karlsruhe - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Karlsruhe - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Karlsruhe. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Karlsruhe.",
      keywords: [
        "IT Dienstleister Karlsruhe",
        "IT Service Karlsruhe",
        "Digitalisierung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-karlsruhe",
      preHeadline: "KI Beratung Karlsruhe",
      headline: "KI Beratung in Karlsruhe - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Karlsruhe - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Karlsruhe. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Karlsruhe",
        "KI Lösungen Karlsruhe",
        "Künstliche Intelligenz Karlsruhe",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Karlsruhe",
  slug: "karlsruhe",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Ettlingen",
    "Bruchsal",
    "Rastatt",
    "Baden-Baden",
    "Rheinstetten",
    "Stutensee",
    "Gaggenau",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Pforzheim", slug: "pforzheim" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Mannheim", slug: "mannheim" },
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

  const title = overrides?.metaTitle ?? "Künstliche Intelligenz in Karlsruhe | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Karlsruhe - von dm-drogerie markt und EnBW über 1&1/IONOS bis zum KIT und dem CyberForum.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Karlsruhe",
      "Workflow-Automatisierung Karlsruhe",
      "n8n Karlsruhe",
      "KI Automatisierung Karlsruhe",
      "Prozessoptimierung Karlsruhe",
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
          url: "/images/cities/karlsruhe.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Karlsruhe",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/karlsruhe.jpg"],
    },
    alternates: {
      canonical: "/standorte/karlsruhe",
    },
  };
}

const karlsruheFaqs = [
  {
    question: "dm-drogerie markt und dmTECH – passt n8n in einen 4.000-Filialen-Konzern?",
    answer:
      "Ja. dm betreibt über 4.000 Märkte in Europa, dmTECH ist eine der größten Inhouse-ITs Deutschlands. Wir bauen n8n-Workflows auf der Lieferantenseite (Markenartikler, Eigenmarken): EDI, Spezifikationen, Listungs-Workflows und Promotion-Daten ergänzen die dmTECH-Plattform.",
  },
  {
    question: "CyberForum, KASTEL – wie hilft n8n bei NIS2 und DORA?",
    answer:
      "NIS2-Workflows (Meldepflichten, Incident-Response), DORA für Finanz-IT, ISO 27001, BSI-Grundschutz, Sicherheitsaudits und Risikoanalysen sind klassische n8n-Felder. Wir docken an SIEM-Systeme (Splunk, Elastic, Wazuh) und Ticket-Plattformen an.",
  },
  {
    question: "EnBW – wie automatisieren wir Energiewende-Workflows?",
    answer:
      "Smart-Meter-Rollout, Netzanschlüsse für Solar/Wind/Wallboxen, Marktkommunikation (MaKo, MaBiS), BNetzA-Vorgaben und CSRD-Reporting werden in n8n-Pipelines abgebildet – inklusive Kundenservice-Anbindung.",
  },
  {
    question: "1&1, IONOS, United Internet – wie skaliert n8n Hosting-Operations?",
    answer:
      "Multi-Tenant-Onboarding, Abrechnung, Provisioning, eIDAS- und DSGVO-Workflows sind massiv volumig. n8n orchestriert Customer-Lifecycle, Mandanten-Migrationen und Compliance-Reporting parallel zu bestehenden Hosting-Plattformen.",
  },
  {
    question: "KIT – wie schaffen wir Drittmittel-Reporting für 400 Mio. EUR?",
    answer:
      "Antragstellung, Mittelverwendung, Reporting an BMBF, DFG, EU (Horizon) und industrielle Förderprogramme sind extrem dokumentationsintensiv. Wir bauen Workflow-Plattformen, die KIT-Großforschung und Hochschullehre parallel bedienen.",
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
          imageSrc="/images/cities/karlsruhe.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Karlsruhe"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Karlsruhe –{" "}
                KIT, CyberForum und{" "}
                <BackgroundHero.Highlight>Software-Cluster Südwest</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KIT, FZI, Fraunhofer IOSB, CyberForum, dm-drogerie markt mit
            dmTECH, EnBW, 1&amp;1, IONOS, United Internet, Bundesverfassungsgericht,
            BGH – Karlsruhe ist Hauptstadt der IT-Sicherheit und Sitz der
            Residenz des Rechts. Wir bauen n8n-Workflows für Omnichannel-
            Handel, Cybersecurity-Compliance, Energiewende und
            Drittmittel-Forschung.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Karlsruher Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={312000}
              label="Einwohner Stadt Karlsruhe"
              index={0}
            />
            <BackgroundHero.Stat
              value={22000}
              label="IT-/Cybersecurity-Spezialisten"
              index={1}
            />
            <BackgroundHero.Stat
              value={134000}
              label="Software-Cluster Südwest Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Karlsruher Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          dm steuert anders als das KIT, EnBW anders als IONOS. Wir bauen
          für jeden Cluster die passenden n8n-Bausteine – vom Promotion-
          Listing bis zum NIS2-Incident-Workflow.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingBag className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>dm-drogerie markt &amp; dmTECH</Typo.H3>
            <Typo.Paragraph>
              4.000+ Märkte in Europa, dmTECH mit 1.200+ Beschäftigten.
              Lieferantenseite (Markenartikler, Eigenmarken), EDI,
              Spezifikationen, Listungs- und Promotion-Workflows werden
              mit n8n abgebildet – ergänzend zur dmTECH-Plattform.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CyberForum, KASTEL, Fraunhofer SIT – Cybersecurity-Cluster</Typo.H3>
            <Typo.Paragraph>
              Deutschlands Hauptstadt für IT-Sicherheit. NIS2-Meldepflichten,
              DORA für Finanz-IT, ISO 27001, BSI-Grundschutz, Sicherheits-
              Audits und Incident-Response-Workflows werden mit n8n,
              SIEM-Plattformen und Ticket-Systemen verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>EnBW – Energieversorger mit Sitz in Karlsruhe</Typo.H3>
            <Typo.Paragraph>
              Smart-Meter-Rollout, Netzanschlüsse für Solar/Wind/Wallboxen,
              BNetzA-Reporting, MaKo-/MaBiS-Pipelines und CSRD-Reporting
              werden in n8n End-to-End abgebildet – mit Anbindung an
              Kundenservice-Plattformen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>1&amp;1, IONOS, United Internet – Hosting-Champions</Typo.H3>
            <Typo.Paragraph>
              Millionen Kunden-Mandanten, Onboarding, Provisioning,
              Abrechnung, eIDAS- und DSGVO-Compliance laufen massiv-volumig.
              n8n orchestriert Customer-Lifecycle, Mandanten-Migrationen
              und Compliance-Reporting parallel zu bestehenden Plattformen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KIT, FZI, Fraunhofer IOSB – Forschungs-Cluster</Typo.H3>
            <Typo.Paragraph>
              KIT mit 9.800 Beschäftigten und 400 Mio. EUR Drittmittel
              jährlich. Antragstellung, Mittelverwendung, Reporting an
              BMBF/DFG/EU und industrielle Förderprogramme werden in
              n8n-Workflows orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BVerfG, BGH – Residenz des Rechts</Typo.H3>
            <Typo.Paragraph>
              Bundesverfassungsgericht, Bundesgerichtshof, Bundesanwaltschaft.
              Rund um sie siedeln sich Kanzleien, Verlage und juristische
              Software-Anbieter an. E-Akte, Fristenkontrolle und
              Dokumentenmanagement sind klassische n8n-Themen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/karlsruhe.jpg"
            alt="Karlsruhe Software-Cluster Südwest – n8n-Workflows für IT, Cybersecurity und Forschung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Silicon Valley für Enterprise-Software – Karlsruhe baut Workflows ein</Typo.H2>
            <Typo.Paragraph>
              Das Software-Cluster Südwest umfasst 134.000 Beschäftigte in
              11.000 Firmen. Im "Silicon Valley für Enterprise-Software"
              entstehen kontinuierlich Startups. Diese benötigen schnell
              Finanzbuchhaltung, Compliance, HR-Workflows – ohne eigene
              IT-Teams. Wir helfen Spin-offs und etablierten IT-Häusern
              gleichermaßen, mit n8n als gemeinsamem Rückgrat zu skalieren.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Karlsruhe eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Karlsruhe ist Deutschlands dichtester IT- und Cybersecurity-
            Standort: 22.000 IT-Spezialisten (14 % der lokalen Beschäftigung),
            das CyberForum mit über 1.300 Mitgliedern, KASTEL und Fraunhofer
            SIT. Gleichzeitig sitzen dm-drogerie markt mit dmTECH (1.200+
            interne IT-Experten), EnBW als großer Versorger und 1&amp;1/IONOS
            als europäische Hosting-Champions hier. NIS2, DORA, ISO 27001
            und CSRD treffen auf eine Region, die ihre Workflows schneller
            als andere automatisieren muss.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Karlsruhe in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={9800}
            subtitle="KIT-Beschäftigte"
          />
          <KpiCard
            value={400}
            suffix=" Mio. €"
            subtitle="KIT-Drittmittel pro Jahr"
          />
          <KpiCard
            value={1200}
            subtitle="dmTECH-Beschäftigte"
          />
          <KpiCard
            value={1300}
            subtitle="CyberForum-Mitglieder"
          />
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
        <Typo.H2>Häufige Fragen aus Karlsruhe</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={karlsruheFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
