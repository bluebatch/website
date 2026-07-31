import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import {
  Scale,
  Globe,
  Coins,
  HeartHandshake,
  ShieldCheck,
  Server,
  GraduationCap,
  Gauge,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
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
    images: ogImages("Private AI für Steuerberater", "Steuerberater"),
  },
  alternates: {
    canonical: "/branchen/steuerberater/private-ai",
  },
};

const investReasons = [
  {
    icon: Scale,
    title: "§ 203 StGB und DSGVO als Treiber",
    body: "Berufsgeheimnisträger dürfen Mandantendaten nicht an Unbefugte weitergeben, auch nicht an KI-Anbieter ohne Verschwiegenheitsverpflichtung. Private AI löst das strukturell: Die Modelle laufen in einer Umgebung, über die die Kanzlei die Kontrolle behält, statt in einem öffentlichen Dienst mit unklarem Datenfluss.",
  },
  {
    icon: Globe,
    title: "Unabhängigkeit von US-Anbietern",
    body: "Wer auf offene Modelle in eigener Infrastruktur setzt, hängt nicht an Preis-, Vertrags- oder Rechtsänderungen einzelner US-Konzerne. Modell und Daten liegen dort, wo die Kanzlei sie haben will, und lassen sich jederzeit auf andere Infrastruktur umziehen.",
  },
  {
    icon: Coins,
    title: "Kostenkontrolle bei hohem Volumen",
    body: "Öffentliche KI-Dienste rechnen pro Anfrage ab. Wer täglich viele Dokumente zusammenfasst, Schriftsätze entwirft oder Belege prüft, zahlt laufend mit. Eigene Infrastruktur kostet planbar: Die Hardware oder der gemietete Server kostet dasselbe, egal ob 100 oder 10.000 Anfragen laufen.",
  },
  {
    icon: HeartHandshake,
    title: "Mandantenvertrauen als Verkaufsargument",
    body: "Mandanten fragen zunehmend, wie die Kanzlei mit KI und ihren Daten umgeht. Wer sagen kann, dass kein Mandantendatum die eigene Umgebung verlässt und nichts zum Training fremder Modelle verwendet wird, macht aus Datenschutz ein aktives Argument im Mandantengespräch.",
  },
];

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
    question: "Welche Sprachmodelle kommen für eine Kanzlei infrage?",
    answer:
      "Offene Modelle wie Llama (Meta), Mistral (europäischer Anbieter) und Qwen liefern für Kanzleiaufgaben wie Textentwürfe, Zusammenfassungen und Dokumentenanalyse sehr gute Ergebnisse und laufen vollständig in eigener Umgebung. Mit Projekten wie Teuken-7B gibt es zudem Modelle, die komplett in Europa entwickelt wurden. Welches Modell passt, hängt von den Aufgaben und der verfügbaren Hardware ab.",
  },
  {
    question: "Was kostet Private AI für eine Kanzlei?",
    answer:
      "Das hängt von drei Faktoren ab: Modellgröße, Hosting-Variante (eigene Hardware, gemieteter GPU-Server oder europäische KI-API) und Nutzerzahl. Ein gemieteter EU-Server ist deutlich günstiger als eigene GPU-Hardware im Haus, dafür verlassen die Daten bei On-Premise nie die Kanzlei. Der wichtigste Unterschied zu öffentlichen KI-Diensten: Die Kosten sind planbar und steigen nicht mit jeder Anfrage. Eine konkrete Einschätzung geben wir nach einem kurzen Gespräch über Ihre Anforderungen.",
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
            <div className="flex flex-col items-start gap-3">
              <InternalLink href="/branchen/steuerberater/private-ai/kanzlei-wissensdatenbank">
                Anwendungsfall: die durchsuchbare Kanzlei-Wissensdatenbank
              </InternalLink>
              <InternalLink href="/branchen/steuerberater/claude-cowork">
                Alternative: Claude Cowork, verwaltet und § 203-konform
              </InternalLink>
            </div>
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

      {/* Warum jetzt investieren */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vier Gründe</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum jetzt in Private AI investieren
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            KI im Kanzleialltag ist keine Zukunftsfrage mehr. Die eigentliche
            Frage ist, auf welchem Fundament sie läuft. Vier Gründe sprechen
            dafür, dieses Fundament jetzt selbst zu kontrollieren.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {investReasons.map((r) => {
            const Icon = r.icon;
            return (
              <SimpleCard key={r.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{r.title}</Typo.H3>
                <Typo.Paragraph>{r.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Marktüberblick */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Marktüberblick</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was es am Markt gibt: drei Wege zu Private AI
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Software-Stack ist bei allen Varianten ähnlich: Open WebUI als
            Chat-Oberfläche für das Team, dahinter ein Modell-Server wie vLLM
            (performant, mehrbenutzerfähig) oder Ollama (einfacher Einstieg),
            darauf offene Sprachmodelle wie Llama, Mistral oder Qwen. Der
            Unterschied liegt darin, wo das Ganze läuft.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Betriebsmodell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Wie es funktioniert</DataTable.HeaderCell>
                <DataTable.HeaderCell>Wo liegen die Daten</DataTable.HeaderCell>
                <DataTable.HeaderCell>Für wen geeignet</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>On-Premise im eigenen Haus</DataTable.Cell>
                <DataTable.Cell>
                  Eigener GPU-Server in der Kanzlei mit Open WebUI und vLLM
                  oder Ollama. Die Kanzlei betreibt alles selbst oder mit
                  IT-Partner.
                </DataTable.Cell>
                <DataTable.Cell>
                  Verlassen das Haus nie, maximale Kontrolle ohne externen
                  Anbieter.
                </DataTable.Cell>
                <DataTable.Cell>
                  Kanzleien mit höchsten Anforderungen an Vertraulichkeit und
                  eigener oder betreuter IT.
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Dedizierte EU-Cloud</DataTable.Cell>
                <DataTable.Cell>
                  Derselbe Stack auf einem gemieteten, dedizierten Server in
                  einem europäischen Rechenzentrum. Keine eigene Hardware
                  nötig.
                </DataTable.Cell>
                <DataTable.Cell>
                  Auf einem Server, den nur die Kanzlei nutzt, mit AVV und
                  EU-Hosting.
                </DataTable.Cell>
                <DataTable.Cell>
                  Der häufigste Weg: volle Kontrolle über Software und Daten
                  ohne Hardware-Investition.
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Europäische KI-APIs</DataTable.Cell>
                <DataTable.Cell>
                  Anbieter wie der IONOS AI Model Hub oder STACKIT AI Model
                  Serving (Schwarz-Gruppe) stellen offene Modelle wie Llama,
                  Mistral und Qwen als Dienst aus deutschen Rechenzentren
                  bereit, ohne Training mit Kundendaten.
                </DataTable.Cell>
                <DataTable.Cell>
                  Verarbeitung in deutschen Rechenzentren des Anbieters, AVV
                  erforderlich.
                </DataTable.Cell>
                <DataTable.Cell>
                  Schneller Start ohne eigene GPU-Infrastruktur, wenn ein
                  europäischer Auftragsverarbeiter akzeptabel ist.
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>

        <Typo.Paragraph className="text-gray-600 mt-8 max-w-3xl mx-auto text-center">
          Bei den Modellen hat sich viel getan: Offene Modelle wie Llama,
          Mistral und Qwen erreichen heute eine Qualität, die für typische
          Kanzleiaufgaben wie Zusammenfassungen, Textentwürfe und
          Dokumentenanalyse gut ausreicht. Mit Teuken-7B existiert zudem ein
          vollständig in Europa entwickeltes Modell. Welche Variante und
          welches Modell passen, ist keine Glaubensfrage, sondern eine Frage
          von Datenlage, Volumen und IT-Situation der Kanzlei.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Wie Bluebatch begleitet */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Weg dorthin</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der ersten Prüfung bis zum laufenden Betrieb
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Bluebatch begleitet Kanzleien auf dem ganzen Weg zu Private AI,
            von der rechtlichen Bestandsaufnahme über die Einrichtung bis zum
            Betrieb. Sie entscheiden, wie viel Sie selbst übernehmen wollen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <Typo.H3>DSGVO- und § 203-Audit</Typo.H3>
            <Typo.Paragraph>
              Am Anfang steht die Bestandsaufnahme: Welche KI-Tools sind schon
              im Einsatz, wo fließen heute Mandantendaten hin, was verlangen
              DSGVO und § 203 StGB konkret? Daraus entsteht ein klarer Plan,
              welche Betriebsvariante zur Kanzlei passt, bevor Geld in
              Infrastruktur fließt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <Server className="h-6 w-6" />
            </span>
            <Typo.H3>Implementierung: Open WebUI und vLLM</Typo.H3>
            <Typo.Paragraph>
              Wir richten Open WebUI als Oberfläche für Ihr Team ein und
              konfigurieren vLLM als Modell-Server, wahlweise auf einem
              dedizierten EU-Server oder auf Hardware im Haus. Inklusive
              Nutzerverwaltung, Zugriffsrechten und passender Modellauswahl
              für Ihre Aufgaben.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <GraduationCap className="h-6 w-6" />
            </span>
            <Typo.H3>Schulung für das Kanzlei-Team</Typo.H3>
            <Typo.Paragraph>
              Die beste Umgebung nützt nichts, wenn das Team weiter das
              private ChatGPT-Konto nutzt. Wir schulen Ihre Mitarbeiter an
              konkreten Kanzleiaufgaben: Schriftsätze entwerfen, Bescheide
              zusammenfassen, Mandantenanfragen vorbereiten, sicher und in
              der geschützten Umgebung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <Gauge className="h-6 w-6" />
            </span>
            <Typo.H3>Managed Private AI</Typo.H3>
            <Typo.Paragraph>
              Wer keine eigene IT binden will, gibt den Betrieb an uns ab:
              Wir halten Modelle und Software aktuell, überwachen die
              Umgebung und kümmern uns um Updates und Sicherheit. Die
              Infrastruktur bleibt dabei Ihre, Sie können den Betrieb
              jederzeit selbst übernehmen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="text-center mt-12">
          <Typo.Paragraph className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ob Audit, Einrichtung oder kompletter Betrieb: Im Erstgespräch
            klären wir, welcher Einstieg für Ihre Kanzlei sinnvoll ist.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ, extraktionsfreundlich für GEO */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
