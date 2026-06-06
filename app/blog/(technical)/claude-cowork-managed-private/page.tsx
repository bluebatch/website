import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "claude-cowork-managed-private",
  author: "Max Hänsel",
  date: "2026-04-24",
  image: "/blog/claude-cowork-managed-private/hero.png",
  tags: ["ki", "security", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Amazon Bedrock für deutsche Unternehmen: DSGVO, Modelle und Claude Cowork managed private | Bluebatch",
  description:
    "Amazon Bedrock erklärt: Modelle, Architektur, DSGVO in Frankfurt, Bedrock vs. Claude API. Plus: Claude Cowork als managed private Deployment im eigenen AWS-Konto.",
  openGraph: {
    title:
      "Amazon Bedrock für den Mittelstand: Architektur, DSGVO und Claude Cowork managed private",
    description:
      "Was Amazon Bedrock ist, welche Modelle in Frankfurt laufen, wie der Bedrock-AVV im Vergleich zur direkten Claude API funktioniert und wann Claude Cowork managed private die richtige Wahl ist.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-cowork-managed-private/hero.png",
        width: 1200,
        height: 630,
        alt: "Amazon Bedrock und Claude Cowork managed private auf AWS",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-cowork-managed-private",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Amazon Bedrock für deutsche Unternehmen: DSGVO, Modelle und Claude
          Cowork managed private
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-04-24">
            24. April 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-cowork-managed-private/hero.png"
          alt="Amazon Bedrock und Claude Cowork managed private auf AWS"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="was-ist-amazon-bedrock">
              Was ist Amazon Bedrock?
            </Typo.H2>
            <Typo.Paragraph>
              Amazon Bedrock ist der vollständig verwaltete AWS-Service für
              generative KI. Über eine einheitliche API werden mehrere
              Foundation Models von Anthropic, Meta, Mistral, Cohere, Stability
              AI und Amazon (Nova, Titan) bereitgestellt. Es gibt keine
              Server, keine GPU-Verwaltung und keine eigene Infrastruktur. Die
              Abrechnung läuft pro verarbeitetem Token, der Datenfluss bleibt
              im AWS-Konto des Kunden und Anthropic, Meta oder die anderen
              Modellanbieter sehen weder Prompts noch Antworten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bedrock ist seit September 2023 allgemein verfügbar und hat sich
              seither zur Standardplattform für KI für Unternehmen im
              AWS-Universum entwickelt. Die wichtigsten Bausteine sind
              Knowledge Bases für Retrieval Augmented Generation, Guardrails
              für inhaltliche Filter, Agents für mehrstufige Aufgaben sowie
              Customization-Optionen über Fine-Tuning oder Continued Pretraining.
              Für deutsche Unternehmen ist die Region eu-central-1 in Frankfurt
              relevant, weil sie die DSGVO-konforme Verarbeitung erlaubt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In diesem Beitrag schauen wir uns an, welche Modelle auf Bedrock
              verfügbar sind, wie sich Bedrock von der direkten Claude API
              unterscheidet, was die Plattform für KI-Datenschutz im deutschen
              Mittelstand wirklich liefert und wie ein konkretes Deployment
              aussieht: Claude Cowork als managed private Variante im eigenen
              AWS-Konto.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modelle-auf-bedrock">
              Welche Modelle gibt es auf Amazon Bedrock?
            </Typo.H2>
            <Typo.Paragraph>
              Bedrock ist absichtlich Multi-Modell. Statt sich an einen Anbieter
              zu binden, können Unternehmen pro Anwendungsfall das passende
              Foundation Model wählen. Die folgende Übersicht zeigt die
              wichtigsten Familien und ihre typischen Stärken im Stand 2026.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Modellfamilie</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Anbieter</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Typische Stärken</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>
                    Claude Sonnet, Opus, Haiku
                  </DataTable.Cell>
                  <DataTable.Cell>Anthropic</DataTable.Cell>
                  <DataTable.Cell>
                    Lange Kontextfenster, präzise Dokumentanalyse, Tool-Use,
                    starkes Coding
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Llama 4</DataTable.Cell>
                  <DataTable.Cell>Meta</DataTable.Cell>
                  <DataTable.Cell>
                    Open-Weights-Variante, gut für Fine-Tuning, kostengünstig
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Mistral Large 2</DataTable.Cell>
                  <DataTable.Cell>Mistral</DataTable.Cell>
                  <DataTable.Cell>
                    Europäischer Anbieter, mehrsprachig stark, gute Reasoning-Leistung
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Command R+</DataTable.Cell>
                  <DataTable.Cell>Cohere</DataTable.Cell>
                  <DataTable.Cell>
                    Fokus auf RAG-Workflows und Enterprise-Suche
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Nova, Titan</DataTable.Cell>
                  <DataTable.Cell>Amazon</DataTable.Cell>
                  <DataTable.Cell>
                    Eigene AWS-Modelle, sehr günstig, Embeddings und einfache Tasks
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Stable Diffusion 3</DataTable.Cell>
                  <DataTable.Cell>Stability AI</DataTable.Cell>
                  <DataTable.Cell>
                    Bildgenerierung, kommerziell nutzbar
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Wichtig für deutsche Unternehmen: Nicht jedes Modell ist sofort
              in eu-central-1 (Frankfurt) verfügbar. Anthropic Claude wurde
              dort 2024 freigeschaltet, neuere Modellversionen kommen meistens
              zuerst in us-east-1. Wer EU-Datenresidenz braucht, prüft vor dem
              Projektstart, welche Modell-IDs in Frankfurt schon laufen, und
              nutzt für Hochverfügbarkeit ein Cross-Region Inference Profile
              innerhalb der EU.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bedrock-vs-claude-api">
              Amazon Bedrock vs. Claude API direkt
            </Typo.H2>
            <Typo.Paragraph>
              Wer Anthropic-Modelle nutzen will, hat zwei Wege: die Claude API
              direkt bei Anthropic oder denselben Modell-Endpunkt über Amazon
              Bedrock. Funktional ist das Modell identisch, aber Preise,
              Vertragsverhältnis und EU-Verfügbarkeit unterscheiden sich.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude API direkt</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Amazon Bedrock</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Vertragspartner</DataTable.Cell>
                  <DataTable.Cell>Anthropic (USA)</DataTable.Cell>
                  <DataTable.Cell>AWS (Auftragsverarbeitung)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Datenresidenz</DataTable.Cell>
                  <DataTable.Cell>USA</DataTable.Cell>
                  <DataTable.Cell>Frankfurt eu-central-1 wählbar</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Neue Modelle</DataTable.Cell>
                  <DataTable.Cell>Tag 0</DataTable.Cell>
                  <DataTable.Cell>Wenige Tage bis Wochen Verzögerung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Abrechnung</DataTable.Cell>
                  <DataTable.Cell>Eigene Anthropic-Rechnung</DataTable.Cell>
                  <DataTable.Cell>Über bestehende AWS-Rechnung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>IAM und SSO</DataTable.Cell>
                  <DataTable.Cell>Eigene API-Keys</DataTable.Cell>
                  <DataTable.Cell>AWS IAM, Entra ID via SSO</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Preis pro 1M Token</DataTable.Cell>
                  <DataTable.Cell>Anthropic-Listenpreis</DataTable.Cell>
                  <DataTable.Cell>
                    Identisch oder leicht höher, dafür Marketplace-Rabatt möglich
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Faustregel: Wer ein einzelnes Produktteam hat, das die neuesten
              Modelle sofort braucht und keine besondere DSGVO-Anforderung
              kennt, fährt mit der Claude API direkt am schnellsten. Wer
              dagegen ein Mittelstandsunternehmen mit AWS-Bestand, Compliance-
              Pflicht und einer zentralen IT betreibt, nimmt Bedrock und gewinnt
              dabei EU-Hosting, einheitliches Vertragswerk und SSO ohne
              Mehraufwand.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-claude-cowork">
              Was ist Claude Cowork?
            </Typo.H2>
            <Typo.Paragraph>
              Claude Cowork ist die Desktop-Variante von Anthropic für
              Wissensarbeit. Anders als Claude Code, das sich an Entwickler
              richtet, zielt Cowork auf Fachabteilungen: Controlling, Legal,
              Einkauf, HR, Marketing. Die App läuft lokal auf dem Rechner,
              liest Dateien, führt mehrstufige Recherchen aus und liefert
              fertige Ergebnisse zurück. Verbunden wird sie über MCP-Server
              mit Dokumenten, internen Systemen und Webquellen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Standardvariante nutzt die SaaS-Infrastruktur von Anthropic.
              Für Unternehmen, bei denen Daten auf keinen Fall an Anthropic
              gehen dürfen, gibt es seit kurzem eine zweite Option: Cowork
              wird über Amazon Bedrock betrieben. Das Deployment heißt in der
              AWS-Welt managed private, weil die Inferenz zwar in einem von
              AWS verwalteten Service läuft, die Daten aber im eigenen
              AWS-Konto bleiben. Für uns ist das spannend, weil damit eine
              dritte Option neben reiner SaaS und vollständigem On-Premises
              entsteht, die für die meisten deutschen Mittelständler
              realistisch ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-wege-anthropic">
              Drei Wege, Anthropic-KI im Unternehmen zu nutzen
            </Typo.H2>
            <Typo.Paragraph>
              Bevor wir tiefer in das Bedrock-Setup einsteigen, lohnt ein Blick
              auf die drei realistischen Deployment-Optionen für Anthropic
              Claude im Mittelstand.
            </Typo.Paragraph>

            <Typo.H3>1. SaaS direkt bei Anthropic</Typo.H3>
            <Typo.Paragraph>
              Claude.ai oder Claude Cowork in der Standardvariante. Daten
              gehen an Anthropic in den USA, Enterprise-Zusagen schließen die
              Trainingsnutzung aus. Vorteil: schnellster Start, neueste
              Modelle sofort verfügbar. Nachteil: US-Verarbeitung, eigener
              Vertrag mit Anthropic, kein Self-Service-IAM.
            </Typo.Paragraph>

            <Typo.H3>2. Amazon Bedrock managed private</Typo.H3>
            <Typo.Paragraph>
              Anthropic-Modelle laufen in der eigenen AWS-Umgebung. AWS ist
              Auftragsverarbeiter, Frankfurt ist als Region wählbar, IAM und
              SSO greifen wie bei jedem AWS-Service. Sweet Spot für
              KI-Datenschutz und Governance im Mittelstand.
            </Typo.Paragraph>

            <Typo.H3>3. Self-Hosted Open-Weights-Modell</Typo.H3>
            <Typo.Paragraph>
              Nicht Claude, aber häufig diskutiert: Llama, Mistral oder Mixtral
              auf eigener GPU-Infrastruktur. Maximale Kontrolle, aber hohe
              Investition in GPUs, MLOps-Team und Modellqualität, die im
              Schnitt unter Claude Sonnet liegt. Nur sinnvoll bei sehr hohen
              Datenschutz-Anforderungen oder spezialisierten Anwendungen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Für 90 Prozent der mittelständischen Anfragen, die wir sehen,
              ist Option 2 die beste. Option 1 lohnt sich für kleine Pilotteams
              und Power-User, Option 3 für regulierte Spezialfälle. Wer den
              breiteren Kontext sucht, findet im Beitrag zu{" "}
              <Link
                href="/blog/wie-wirkt-sich-ki-auf-den-grosshandel-aus"
                className="text-primary-600 hover:underline"
              >
                KI im deutschen Mittelstand
              </Link>{" "}
              die Use-Case-Perspektive.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="warum-managed-private">
              Warum managed private statt SaaS?
            </Typo.H2>
            <Typo.Paragraph>
              Die SaaS-Variante von Claude Cowork ist schnell eingerichtet,
              läuft stabil und deckt die meisten Anwendungsfälle ab. Der Haken
              liegt in der Datenflussbetrachtung: Jedes Dokument, das ein
              Mitarbeiter mit Cowork verarbeitet, verlässt die eigene
              Infrastruktur. Anthropic hat zwar Enterprise-Zusagen, dass
              Inhalte nicht für das Modelltraining genutzt werden, aber die
              Daten laufen trotzdem durch eine Umgebung, auf die das
              Unternehmen selbst keinen Zugriff hat. Für viele Fachabteilungen
              ist das egal. Für Legal, Finanzen und alles rund um Kundendaten
              ist es ein Showstopper.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Managed private löst genau diesen Knoten. Der
              Claude-Desktop-Client spricht nicht mehr mit Anthropic direkt,
              sondern mit einem Bedrock-Endpoint im eigenen AWS-Konto. Amazon
              garantiert, dass Prompts, Dateien, Tool-Aufrufe und Antworten
              weder gespeichert noch für das Training von Foundation-Modellen
              verwendet werden. Aus Compliance-Sicht wird aus dem
              Drittanbieter-Verhältnis mit Anthropic ein
              Auftragsverarbeitungs-Verhältnis mit AWS, das die meisten
              deutschen Unternehmen ohnehin schon abgeschlossen haben.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-cowork-managed-private/managed-private-vs-saas.png"
              alt="Datenfluss managed private vs. SaaS bei Claude Cowork auf Amazon Bedrock"
              width={1200}
              height={675}
            />

            <Typo.H3>Wann sich managed private wirklich lohnt</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Das Unternehmen ist ohnehin schon AWS-Kunde und hat Landing
                Zones, IAM-Strukturen und ein SOC bereits aufgesetzt.
              </Typo.ListItem>
              <Typo.ListItem>
                Dokumente mit personenbezogenen Daten, Vertragsdaten oder
                Geschäftsgeheimnissen sollen über Cowork verarbeitet werden.
              </Typo.ListItem>
              <Typo.ListItem>
                Eine DSFA oder ein Betriebsrat fordert Datenresidenz in der EU,
                idealerweise in Frankfurt.
              </Typo.ListItem>
              <Typo.ListItem>
                Die Kosten sollen über bestehende AWS-Verträge laufen und nicht
                über zusätzliche Seat-Lizenzen bei Anthropic.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Wenn keiner dieser Punkte zutrifft, ist die SaaS-Variante
              unkomplizierter und meistens auch günstiger. Managed private
              verursacht Setup-Aufwand in der eigenen Cloud und sollte nicht
              aus Prinzipientreue gewählt werden, sondern aus einem konkreten
              Compliance- oder Kostenmotiv heraus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="architektur">
              Architektur: Cowork auf Amazon Bedrock
            </Typo.H2>
            <Typo.Paragraph>
              Technisch ist das Setup überschaubar. Die Nutzer installieren die
              normale Claude-Desktop-App. Ein Device-Management-System, zum
              Beispiel Jamf, Intune oder eine Group Policy, legt eine
              Konfigurationsdatei ab. Diese Datei schaltet den Client in den
              Bedrock-Modus und sagt ihm, auf welchen Endpoint er zugreifen
              soll. Ab dann laufen alle Anfragen über das eigene AWS-Konto.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-cowork-managed-private/bedrock-architecture.png"
              alt="Architekturübersicht Claude Cowork mit Amazon Bedrock"
              width={1200}
              height={675}
            />

            <Typo.H3>Die wichtigsten Bausteine</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Bedrock Inference Profile</strong>: Definiert, welches
                Claude-Modell verfügbar ist und in welcher Region die Inferenz
                läuft. Für EU-Kunden ist das in-region Profil Frankfurt
                (eu-central-1) relevant, für maximale Verfügbarkeit das geo
                cross-region Profil innerhalb der EU.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Authentifizierung</strong>: Wahlweise über AWS IAM
                (Single Sign-on über den Identity Provider) oder über
                Bedrock-API-Keys. IAM ist im Unternehmen fast immer die
                bessere Wahl, weil die Berechtigung dann am Azure AD oder
                Entra ID hängt und bei Austritt automatisch entzogen wird.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>VPC-Endpoint</strong>: Sorgt dafür, dass der Traffic
                zwischen Client und Bedrock-Endpoint das öffentliche Internet
                nicht verlässt. Für Mitarbeiter im Homeoffice via VPN, für
                Büroarbeitsplätze direkt über die Unternehmensleitung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>CloudTrail und CloudWatch</strong>: Protokollieren
                jeden API-Aufruf und ermöglichen ein zentrales Audit. Über
                OpenTelemetry lassen sich zusätzlich Telemetrie-Daten in ein
                eigenes Beobachtungs-Backend exportieren.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="dsgvo-eu-residenz">
              KI-Datenschutz: Bedrock, DSGVO und EU-Residenz
            </Typo.H2>
            <Typo.Paragraph>
              Der Hauptgrund für managed private ist für die meisten deutschen
              Unternehmen der KI-Datenschutz. Hier lohnt es sich, genau
              hinzuschauen, wer mit wem welchen Vertrag hat. Bei der
              SaaS-Variante ist Anthropic Auftragsverarbeiter. Anthropic sitzt
              in den USA, der Datenfluss durchquert den Atlantik und die
              Prüfung läuft über die EU-US-Datenschutzrahmen-Mechanik, die
              nach Schrems II rechtlich möglich, aber auslegungsbedürftig ist.
              Aufsichtsbehörden schauen genau hin, gerade in regulierten
              Branchen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei Bedrock verschiebt sich die Verantwortlichkeit: AWS wird zum
              Auftragsverarbeiter und die Daten bleiben in der gewählten
              EU-Region. Anthropic bekommt nur anonyme Telemetrie (Tokenzahl,
              Modell-ID, Fehlercodes, eine anonyme Geräte-ID), die sich in der
              Konfiguration abschalten lässt. Für die DSFA heißt das:
              Drittland-Transfer fällt weg, der Standard-Kompass der
              AWS-Nutzung greift.
            </Typo.Paragraph>

            <Typo.H3>Der konkrete AVV-Stack im Bedrock-Setup</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>AWS-AVV</strong>: Bestandteil der AWS-Kundenvereinbarung
                und meistens schon unterzeichnet. Deckt die Verarbeitung in
                eu-central-1 ab.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Bedrock-Service-Terms</strong>: Spezifische
                Service-Bedingungen, in denen AWS das Verbot der
                Trainingsnutzung und die Datenhaltung im Kundenkonto regelt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Modell-spezifische Bedingungen</strong>: Für jedes
                Modell, das in Bedrock genutzt wird, gibt es zusätzliche
                Provider-Terms (Anthropic, Meta etc.). Die meisten sind
                Standard, sollten aber im Compliance-Check auftauchen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>EU-Datenresidenz</strong>: Über Inference Profiles
                lässt sich pro Modell festlegen, dass die Verarbeitung
                ausschließlich in EU-Regionen stattfindet. Wichtig zu prüfen,
                weil neue Modelle anfangs nur in us-east-1 starten.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Trotzdem bleibt eine Aufgabe: PII-Filter. Nur weil die Daten im
              eigenen Konto verarbeitet werden, heißt das nicht, dass jeder
              Mitarbeiter alles an Cowork weiterreichen darf. Empfehlenswert
              sind klare Regeln über die Bedrock Guardrails, die bestimmte
              Eingaben vorab blockieren, plus ein Schulungsmodul, das zeigt,
              welche Dokumente überhaupt in einen KI-Workflow gehören.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="deployment-rollout">
              Deployment und Rollout im Unternehmen
            </Typo.H2>
            <Typo.Paragraph>
              Ein sauberer Rollout läuft in drei Wellen. In Welle eins wird
              die Bedrock-Integration in einem dedizierten Subaccount
              aufgesetzt, inklusive IAM-Rollen, VPC-Endpoint, CloudTrail-Trail
              und einem Budget-Alarm. In dieser Phase sollte klar geregelt
              sein, wer auf Logs zugreifen darf und wer die Konten-Obergrenzen
              setzt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In Welle zwei bekommen fünf bis zehn Pilotnutzer aus einer
              Fachabteilung den Client. Meistens lohnt es sich, hier nicht die
              IT zu nehmen, sondern Controlling oder Legal, weil die schneller
              echte Use Cases produzieren und der Business-Value sichtbar wird.
              Vier Wochen Pilot reichen, um den größten Teil der Governance-
              und Schulungsfragen zu klären.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In Welle drei folgt der unternehmensweite Rollout mit klarer
              Rollentrennung: Power-User bekommen MCP-Konnektoren auf interne
              Systeme, normale Nutzer arbeiten zunächst nur mit lokalen Dateien
              und Web. So verteilt sich das Betriebsrisiko und die ersten
              schlecht definierten Konnektoren sind nicht sofort auf
              tausend Rechnern ausgerollt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="governance">
              Governance: IAM, Budgets, Audit
            </Typo.H2>
            <Typo.Paragraph>
              Der grösste Vorteil von managed private liegt nicht im
              Datenschutz allein, sondern in der Integration in bereits
              bestehende Governance-Strukturen. Drei Bausteine sind dabei
              zentral.
            </Typo.Paragraph>

            <Typo.H3>IAM und rollenbasierte Zugriffskontrolle</Typo.H3>
            <Typo.Paragraph>
              Statt separate Cowork-Lizenzen zu verwalten, werden die
              Berechtigungen über AWS IAM und das zentrale Identity-Management
              geregelt. Wer das Unternehmen verlässt, verliert automatisch den
              Zugriff. Rollen lassen sich nach Fachabteilung schneiden, zum
              Beispiel cowork-legal mit Zugriff auf einen bestimmten
              Dokumentenspeicher und cowork-controlling mit Zugriff auf
              Finanzdaten. Das SSO läuft typischerweise über Entra ID oder
              Azure AD via SAML auf einen IAM-Identity-Center-Tenant.
            </Typo.Paragraph>

            <Typo.H3>Budgetkontrolle und Kostentransparenz</Typo.H3>
            <Typo.Paragraph>
              Bedrock rechnet nach Token-Verbrauch ab, was zunächst
              unvorhersehbar wirkt. AWS Budgets und Cost-Allocation-Tags
              machen die Kosten aber nach Team und Use Case aufschlüsselbar.
              Als Planzahl für einen Mittelständler mit 50 Power-Nutzern
              sollten 60.000 bis 120.000 Euro pro Jahr an reinem API-Verbrauch
              einkalkuliert werden, abhängig vom Nutzungsintensität. Das liegt
              in der gleichen Größenordnung wie die klassischen SaaS-Seats,
              verteilt sich aber nach tatsächlicher Nutzung und nicht pauschal
              pro Mitarbeiter.
            </Typo.Paragraph>

            <Typo.H3>Audit-Logs</Typo.H3>
            <Typo.Paragraph>
              CloudTrail zeichnet jeden API-Call auf: Wer hat wann welches
              Modell mit welchem Request aufgerufen. Die Prompts selbst werden
              nicht in CloudTrail protokolliert, lassen sich aber bei Bedarf
              über eigene Logging-Wrapper erfassen. Für eine saubere
              Nachvollziehbarkeit reicht die Standard-Konfiguration meistens
              aus, sie bildet den Grundstein für jedes Audit-Review.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mcp-konnektoren">
              MCP-Konnektoren und externe Datenquellen
            </Typo.H2>
            <Typo.Paragraph>
              Der eigentliche Wert von Cowork entsteht, wenn der Client nicht
              nur auf lokalen Dateien arbeitet, sondern auf den produktiven
              Datenquellen des Unternehmens. Das geht über MCP-Server, kleine
              Adapter, die ein internes System (SharePoint, Confluence, ein
              CRM, ein Data Warehouse) für Claude zugänglich machen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-cowork-managed-private/mcp-connectors.png"
              alt="MCP-Konnektoren zwischen Claude Cowork und Unternehmenssystemen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Im managed-private-Setup läuft der MCP-Server idealerweise
              innerhalb der gleichen AWS-Umgebung wie der Bedrock-Endpoint.
              Damit bleibt der komplette Datenfluss im eigenen Konto. Eine
              typische Architektur: Der MCP-Server läuft als Container auf
              Fargate, spricht über einen Private Link mit dem
              SharePoint-Tenant und wird vom Cowork-Client über eine
              STS-Assume-Role-Kette angesprochen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtig dabei: MCP-Konnektoren sind keine ewige Wahrheit. Jeder
              Konnektor ist ein kleiner Service, der gepflegt, gepatcht und
              überwacht werden muss. Genau wie bei n8n-Workflows, die externe
              Systeme anbinden, gilt auch hier die alte Regel: Weniger ist
              meistens mehr. Lieber zwei gut gepflegte Konnektoren pro Team
              als zehn halbfertige, die die ersten Abfragen scheitern lassen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="grenzen">
              Grenzen des managed-private-Modells
            </Typo.H2>
            <Typo.Paragraph>
              Managed private auf Amazon Bedrock ist nicht dasselbe wie ein
              vollständig selbstgehostetes LLM. Drei Aspekte sollten vor der
              Entscheidung klar sein:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>AWS-Abhängigkeit</strong>: Wer aus strategischen
                Gründen bewusst aus AWS ausweichen möchte, sollte Cowork auf
                Bedrock nicht wählen. Eine Migration auf Google Vertex oder
                Azure Foundry ist möglich, verursacht aber denselben Aufwand
                wie jedes andere Cloud-Projekt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Modell-Auswahl</strong>: Auf Bedrock sind bestimmte
                Claude-Modelle verfügbar, aber nicht zwingend zur gleichen
                Stunde wie bei Anthropic direkt. Wer sofortige Modell-Upgrades
                braucht, kommt mit der SaaS-Variante früher an das neue Modell.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Operations-Verantwortung</strong>: IAM-Policies,
                VPC-Endpoints, Logging-Setup, MCP-Server-Pflege, das alles
                liegt im eigenen Haus. Für Unternehmen ohne ein aktives
                AWS-Cloud-Team entsteht damit Mehraufwand, der in der
                Wirtschaftlichkeitsrechnung berücksichtigt sein sollte.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Wer ein Team unter zehn Personen hat und KI für Unternehmen erst
              einmal ausprobieren will, sollte keine managed-private-Architektur
              bauen. In dem Fall ist die SaaS-Variante schneller und billiger.
              Bedrock zahlt sich erst aus, wenn Compliance, Governance und ein
              echter Rollout zur Aufgabe werden.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Amazon Bedrock als pragmatische dritte Option
            </Typo.H2>
            <Typo.Paragraph>
              Amazon Bedrock liefert für deutsche Unternehmen genau das, was
              die direkte Claude API nicht kann: EU-Datenresidenz, einen
              bekannten AVV, IAM-Integration und eine Abrechnung, die im
              bestehenden AWS-Vertrag landet. Wer KI für Unternehmen baut,
              ohne den DSGVO-Hebel zu vernachlässigen, findet hier den
              pragmatischen Mittelweg zwischen reiner SaaS und vollständigem
              On-Premises.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Claude Cowork managed private ist die konkrete Umsetzung dieses
              Mittelwegs für Wissensarbeit. Die Vorteile: Daten bleiben im
              eigenen Konto, die Abrechnung läuft über bestehende
              AWS-Verträge, IAM integriert Cowork in die vorhandene
              Governance. Die Nachteile: Setup-Aufwand, AWS-Abhängigkeit und
              eine gewisse Verzögerung bei neuen Claude-Modellen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Unsere Faustregel: Wer ohnehin AWS nutzt und Legal, Einkauf oder
              Controlling produktiv mit KI ausstatten möchte, sollte managed
              private vor SaaS evaluieren. Wer nur ein paar Enthusiasten im
              Team hat, die mit KI experimentieren wollen, ist mit der
              SaaS-Variante schneller produktiv. Wer einen vollständig lokalen
              Betrieb braucht, landet am Ende bei selbstgehosteten Modellen,
              was ein anderes Projekt ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr überlegt, Cowork in eure AWS-Landing-Zone zu integrieren
              oder wollt die Architektur mit jemandem durchgehen, der die
              Bedrock-Profile und MCP-Adapter schon aufgesetzt hat? Schaut euch
              unser{" "}
              <Link
                href="/ai-onboarding"
                className="text-primary-600 hover:underline"
              >
                Claude AI Setup für Unternehmen
              </Link>{" "}
              an, dort installieren wir Claude und Claude Cowork privat auf
              EU-Hosting und übergeben an euer Team. Oder{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                sprecht uns an
              </Link>
              , wir machen mit euch einen Architektur-Workshop und eine erste
              Kostenabschätzung.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-amazon-bedrock">
            Was ist Amazon Bedrock?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modelle-auf-bedrock">
            Modelle auf Bedrock
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bedrock-vs-claude-api">
            Bedrock vs. Claude API
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-ist-claude-cowork">
            Was ist Claude Cowork?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="drei-wege-anthropic">
            Drei Wege zu Anthropic-KI
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="warum-managed-private">
            Warum managed private?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="architektur">
            Architektur auf Bedrock
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo-eu-residenz">
            KI-Datenschutz und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="deployment-rollout">
            Deployment und Rollout
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="governance">
            Governance
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="mcp-konnektoren">
            MCP-Konnektoren
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="grenzen">
            Grenzen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
