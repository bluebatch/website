import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "Private AI für Steuerberater - KI in eigener Umgebung | Bluebatch",
  description:
    "Private AI für Steuerkanzleien: Sprachmodelle in geschützter Umgebung nutzen - EU-Hosting, AVV, dedizierter Tenant, konform mit DSGVO und § 203 StGB.",
  openGraph: {
    title: "Private AI für Steuerberater - Bluebatch",
    description:
      "Private AI für Steuerkanzleien: Sprachmodelle in geschützter Umgebung nutzen - EU-Hosting, AVV, dedizierter Tenant, konform mit DSGVO und § 203 StGB.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/steuerberater/private-ai",
  },
};

const faqs = [
  {
    question: "Was ist Private AI?",
    answer:
      "Private AI bedeutet, dass Sprachmodelle wie Llama oder Mistral in einer eigenen, geschützten Umgebung laufen - auf EU-Servern oder im eigenen Haus - statt in einem öffentlichen Cloud-Dienst. Mandantendaten verlassen die kontrollierte Umgebung nicht und werden nie zum Training fremder Modelle verwendet.",
  },
  {
    question: "Warum ist Private AI für Steuerberater relevant?",
    answer:
      "Steuerberater unterliegen § 203 StGB (Verletzung von Privatgeheimnissen). Wer Mandantendaten in öffentliche KI-Tools eingibt, riskiert eine Strafbarkeit. Private AI löst das strukturell: Die KI läuft in einer Umgebung, über die die Kanzlei die volle Kontrolle hat - inklusive AVV und EU-Hosting.",
  },
  {
    question: "Womit setzt Bluebatch Private AI um?",
    answer:
      "Typischer Stack: Open WebUI als Chat-Oberfläche für das Kanzlei-Team, vLLM als performanter Modell-Server, gehostet in der EU oder on-premise. Einrichtung inklusive Konfiguration und Schulung dauert in der Regel wenige Tage.",
  },
  {
    question: "Was ist der Unterschied zu Claude Cowork?",
    answer:
      "Claude Cowork nutzt das Claude-Modell von Anthropic in einer verwalteten, § 203-konformen Umgebung - die stärkste Modellqualität, aber verwaltet. Private AI betreibt offene Modelle komplett in eigener Infrastruktur - maximale Kontrolle, auch ohne externen Anbieter.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Private AI für Steuerberater</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Private AI heißt: Ihre Kanzlei nutzt moderne Sprachmodelle in einer
            eigenen, geschützten Umgebung statt in öffentlichen KI-Tools.
            Bluebatch richtet dafür Open WebUI und vLLM mit EU-Hosting, AVV und
            dediziertem Tenant ein - konform mit DSGVO und § 203 StGB, ohne
            Training mit Mandantendaten, einsatzbereit in wenigen Tagen.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Abgrenzung: Wo läuft die KI? */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Wo läuft die KI? Die Frage vor allen anderen
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Bevor eine Kanzlei über KI-Agenten oder automatisierte Workflows
              nachdenkt, steht eine Grundsatzfrage: In welcher Umgebung dürfen
              Mandantendaten verarbeitet werden? Öffentliche KI-Tools scheiden
              wegen § 203 StGB in der Regel aus.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Private AI beantwortet diese Frage strukturell: Offene
              Sprachmodelle laufen auf Infrastruktur, die Ihre Kanzlei
              kontrolliert. Darauf bauen dann{" "}
              <InternalLink
                href="/branchen/steuerberater/ki-agenten"
                variant="underline"
              >
                KI-Agenten
              </InternalLink>{" "}
              und{" "}
              <InternalLink
                href="/branchen/steuerberater/workflows"
                variant="underline"
              >
                Workflows
              </InternalLink>{" "}
              auf - mit derselben geschützten Basis.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/claude-cowork">
              Alternative: Claude Cowork, verwaltet und § 203-konform
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/machine-learning.jpg"
              alt="Private AI Infrastruktur"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ — extraktionsfreundlich für GEO */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
