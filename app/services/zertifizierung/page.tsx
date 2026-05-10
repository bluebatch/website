import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Link from "next/link";
import { resolveHref } from "@/lib/get-canonical-path";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-zertifizierung",
  rewrites: [
    {
      source: "/ki-agentur-zertifizierung",
    },
  ],
};

export const metadata: Metadata = {
  title: "KI Agentur mit Zertifizierung | Bluebatch",
  description:
    "Zertifizierte KI Agentur für Enterprise-Automatisierung. n8n-Expertise, AWS-Infrastruktur, DSGVO-konform. Nachweisbare Qualität durch Zertifizierungen und dokumentierte Prozesse.",
  keywords: [
    "ki agentur mit zertifizierung",
    "zertifizierte ki agentur",
    "ki agentur zertifiziert",
    "ki implementierung zertifiziert",
    "ki beratung zertifiziert",
    "automatisierung agentur zertifizierung",
    "n8n agentur zertifiziert",
    "ki agentur deutschland",
  ],
  openGraph: {
    title: "KI Agentur mit Zertifizierung | Bluebatch",
    description:
      "Zertifizierte KI Agentur für Enterprise-Automatisierung. Nachweisbare Qualität durch Zertifizierungen und dokumentierte Prozesse.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch - Zertifizierte KI Agentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI Agentur mit Zertifizierung | Bluebatch",
    description:
      "Zertifizierte KI Agentur für Enterprise-Automatisierung. n8n-Expertise, DSGVO-konform.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/ki-agentur-zertifizierung",
  },
};

const certifications = [
  {
    title: "n8n Workflow-Expertise",
    description:
      "Über 200 produktive Workflows gebaut und gewartet. Tiefes Verständnis der n8n-Architektur, Custom Node Development und Enterprise-Skalierung mit Queue Mode.",
    icon: "/icons/badge-check.svg",
  },
  {
    title: "AWS Cloud-Infrastruktur",
    description:
      "Hosting auf AWS mit Infrastructure-as-Code. EC2, RDS, S3, CloudWatch Monitoring. Hochverfügbare Setups mit Auto-Scaling und Multi-AZ Deployments.",
    icon: "/icons/cloud.svg",
  },
  {
    title: "DSGVO-Compliance",
    description:
      "Alle Systeme DSGVO-konform aufgesetzt. Datenverarbeitung ausschließlich in der EU, dokumentierte Verarbeitungsverzeichnisse und Auftragsverarbeitungsverträge.",
    icon: "/icons/auth-fingerprint.svg",
  },
  {
    title: "Dokumentierte Prozesse",
    description:
      "Jedes Projekt folgt einem strukturierten Prozess: Discovery, Proof of Concept, Implementierung, Testing, Go-Live und Wartung. Vollständig dokumentiert und nachvollziehbar.",
    icon: "/icons/data-center-table-management.svg",
  },
];

const qualityMarkers = [
  {
    title: "Enterprise-Kunden",
    value: "50+",
    description: "Unternehmen vertrauen auf unsere Automatisierungslösungen",
  },
  {
    title: "Produktive Workflows",
    value: "200+",
    description: "Workflows in Produktion, von uns gebaut und gewartet",
  },
  {
    title: "Uptime-Garantie",
    value: "99,9%",
    description: "SLA für alle gehosteten und gewarteten Systeme",
  },
  {
    title: "Ø Projektdauer",
    value: "4-8 Wo.",
    description: "Vom Kickoff bis zum produktiven Workflow",
  },
];

export default async function KiAgenturZertifizierungPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Zertifizierte KI Agentur
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI Agentur mit Zertifizierung: Qualität, die nachweisbar ist
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Bei der Wahl einer KI Agentur zählt nicht nur technisches
              Know-how, sondern auch nachweisbare Qualität. Bluebatch
              kombiniert zertifizierte Expertise in n8n, Cloud-Infrastruktur
              und Datenschutz mit einem strukturierten Implementierungsprozess.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Kostenlose Erstberatung buchen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              DSGVO-konform · Dokumentierte Prozesse · Made in Germany
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/certificate-check.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>
            Unsere Zertifizierungen und Qualifikationen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Eine zertifizierte KI Agentur zeichnet sich durch nachweisbare
            Kompetenzen aus. Das sind die Bereiche, in denen wir zertifizierte
            Expertise mitbringen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          {certifications.map((cert) => (
            <SimpleCard key={cert.title}>
              <SimpleCard.Icon
                src={cert.icon}
                alt={cert.title}
                color="primary"
              />
              <Typo.H3 className="mb-3">{cert.title}</Typo.H3>
              <Typo.Paragraph>{cert.description}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Qualität in Zahlen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zertifizierungen allein reichen nicht. Entscheidend ist, was eine
            KI Agentur in der Praxis liefert.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-8">
          {qualityMarkers.map((marker) => (
            <SimpleCard key={marker.title}>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {marker.value}
              </div>
              <Typo.H3 className="mb-2">{marker.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {marker.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>
            Warum Zertifizierung bei einer KI Agentur wichtig ist
          </IntroBox.Headline>
        </IntroBox>

        <div className="space-y-8">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-4">
                Risiko minimieren bei der KI-Einführung
              </Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-4">
                KI-Projekte scheitern häufig an mangelnder Erfahrung des
                Dienstleisters. Eine zertifizierte KI Agentur bringt
                erprobte Prozesse mit, die typische Stolpersteine
                vermeiden: falsche Architekturentscheidungen,
                Datenschutz-Lücken oder fehlende Skalierbarkeit.
              </Typo.Paragraph>
              <Typo.Paragraph className="text-gray-600 mb-6">
                Bei Bluebatch durchläuft jedes Projekt einen
                strukturierten{" "}
                <Link
                  href={resolveHref("/unser-prozess")}
                  className="text-primary-600 hover:underline"
                >
                  Implementierungsprozess
                </Link>
                , der Qualität sicherstellt und Risiken minimiert.
              </Typo.Paragraph>
              <Link href={resolveHref("/unser-prozess")}>
                <InternalLinkLabel>Unser Prozess im Detail</InternalLinkLabel>
              </Link>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image
              fadeGradient
              src="/images/business-roadmap.jpg"
              alt="Strukturierter KI-Implementierungsprozess"
            />
          </BoundlessImageCard>

          <BoundlessImageCard imagePosition="left">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-4">
                DSGVO-Konformität von Anfang an
              </Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-4">
                KI-Systeme verarbeiten oft sensible Geschäftsdaten:
                Einkaufspreise, Kundenstammdaten, Rechnungsdetails. Eine
                zertifizierte KI Agentur stellt sicher, dass alle Systeme
                DSGVO-konform aufgesetzt sind und Daten ausschließlich in
                der EU verarbeitet werden.
              </Typo.Paragraph>
              <Typo.Paragraph className="text-gray-600 mb-6">
                Unsere{" "}
                <Link
                  href={resolveHref("/n8n-sicherheit")}
                  className="text-primary-600 hover:underline"
                >
                  Sicherheitsarchitektur
                </Link>{" "}
                für n8n Self-Hosting garantiert maximale Datenkontrolle.
                Wie der Zertifizierungsprozess für n8n konkret aussieht,
                zeigt unser{" "}
                <Link
                  href={resolveHref("/blog/n8n-zertifizierung-guide")}
                  className="text-primary-600 hover:underline"
                >
                  n8n Zertifizierungs-Guide
                </Link>
                .
              </Typo.Paragraph>
              <Link href={resolveHref("/n8n-sicherheit")}>
                <InternalLinkLabel>
                  Sicherheit & Datenschutz
                </InternalLinkLabel>
              </Link>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image
              fadeGradient
              src="/images/compliance-signs.jpg"
              alt="DSGVO-konforme KI-Implementierung"
            />
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark>
          <IntroBox.Headline>
            Zertifizierte KI-Automatisierung für Ihr Unternehmen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Lassen Sie uns in einem kostenlosen Erstgespräch besprechen,
            wie wir Ihre Prozesse mit zertifizierter Qualität
            automatisieren können. Keine Verpflichtung, kein Verkaufsdruck.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex gap-4 justify-center">
          <ContactButton size="lg">Erstberatung vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
