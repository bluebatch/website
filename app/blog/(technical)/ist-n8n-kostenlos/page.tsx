import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ist-n8n-kostenlos",
  author: "Max Hänsel",
  date: "2026-05-07",
  image: "/blog/ist-n8n-kostenlos/hero.png",
  tags: ["n8n", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Ist n8n kostenlos? Free Tier, Self-Hosting und Pricing 2026 | Bluebatch",
  description:
    "Ist n8n kostenlos? Self-Hosting der Community Edition ist gratis, die Cloud kostet ab 24 Euro im Monat. Alle Pläne, Limits und Lizenzbedingungen im Überblick.",
  openGraph: {
    title: "Ist n8n kostenlos? Self-Hosting, Free Trial und Cloud-Pläne",
    description:
      "Was ist bei n8n wirklich kostenlos: Community Edition, Cloud-Tarife und versteckte Kosten beim Self-Hosting im direkten Vergleich.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ist-n8n-kostenlos/hero.png",
        width: 1200,
        height: 630,
        alt: "Ist n8n kostenlos Pricing Übersicht",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ist-n8n-kostenlos",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Ist n8n kostenlos? Free Tier, Self-Hosting und Pricing im Überblick
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>9 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-07">
            7. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ist-n8n-kostenlos/hero.png"
          alt="Ist n8n kostenlos Pricing Übersicht"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="kurze-antwort">
              Die kurze Antwort
            </Typo.H2>
            <Typo.Paragraph>
              Ja und nein. n8n ist als Open-Source-Projekt unter der
              Sustainable Use License veröffentlicht. Wer n8n auf eigener
              Infrastruktur betreibt, zahlt für die Software selbst keinen
              Cent. Wer die offizielle Cloud-Variante nutzt, zahlt ab dem
              Starter-Plan eine monatliche Gebühr. Eine kostenlose
              Cloud-Dauerlizenz gibt es nicht, dafür eine 14-tägige
              Testphase.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer die strategische Einordnung sucht, was n8n überhaupt
              leistet und wo die Plattform technisch sitzt, findet das in
              unserer{" "}
              <Link href="/blog/was-ist-n8n" className="text-primary-600 hover:underline">
                Einführung in n8n
              </Link>
              . In diesem Beitrag geht es ausschließlich um die
              Kostenfrage: Was ist gratis, was kostet, und wo lauern
              versteckte Posten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="self-hosting-community-edition">
              n8n Self-Hosting: Die Community Edition ist komplett gratis
            </Typo.H2>

            <BlogImage
              src="/blog/ist-n8n-kostenlos/self-hosting-costs.png"
              alt="n8n Self-Hosting Community Edition kostenlos"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der quelloffene Kern von n8n heißt offiziell Community
              Edition. Er enthält den Workflow-Editor, die Ausführungs-Engine,
              alle Standard-Nodes für gängige Dienste und die
              Webhook-Schnittstelle. Lizenzgebühren fallen nicht an. Wer
              einen Server, Container oder eine VM mit Docker hat, kann n8n
              in unter zehn Minuten starten und dauerhaft kostenfrei
              betreiben. Wer Self-Hosting nicht selbst stemmen will,
              findet bei unserem{" "}
              <Link href="/n8n-hosting-deutschland" className="text-primary-600 hover:underline">
                n8n-Hosting in Deutschland
              </Link>{" "}
              eine Managed-Variante mit DSGVO-konformer Infrastruktur.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Community Edition kennt keine Workflow-Limits, keine
              Schritte-Limits und keine User-Limits im klassischen Sinn.
              Was an Workflows läuft, ist nur durch die Hardware begrenzt.
              Das macht Self-Hosting für KMU mit hohem Volumen oft zur
              wirtschaftlich sinnvollsten Option, vor allem wenn ein eigener
              Server ohnehin vorhanden ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was bei der Community Edition fehlt, sind Enterprise-Funktionen
              wie SSO/SAML, externe Secret-Manager, RBAC mit feingranularen
              Rollen, Log-Streaming an externe SIEMs und Workflow-Versionierung
              auf Enterprise-Level. Für die meisten Mittelständler reichen
              die Community-Funktionen vollständig aus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="cloud-free-trial">
              n8n Cloud: Gibt es ein dauerhaftes Free Tier?
            </Typo.H2>
            <Typo.Paragraph>
              Nein. n8n Cloud bietet eine 14-tägige kostenlose Testphase
              ohne Kreditkartenpflicht. Nach Ablauf wird die Instanz auf
              einen kostenpflichtigen Plan umgestellt oder pausiert. Ein
              dauerhaftes Free Tier wie bei Zapier oder Make existiert nicht.
              Wer kostenlos automatisieren will, muss zum Self-Hosting
              wechseln.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Testphase enthält den vollen Funktionsumfang des
              Starter-Plans: zwei aktive Workflows, 2.500 Workflow-Executions
              pro Monat und unbegrenzte Schritte pro Execution. Das reicht,
              um den Editor, die häufigsten Nodes und ein paar einfache
              Workflows zu evaluieren. Für einen produktiven Dauerbetrieb
              ist die Testphase aber zu kurz.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="cloud-pricing">
              n8n Cloud-Pläne: Was kosten Starter, Pro und Enterprise?
            </Typo.H2>

            <BlogImage
              src="/blog/ist-n8n-kostenlos/cloud-pricing-tiers.png"
              alt="n8n Cloud Pricing Pläne im Vergleich"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              n8n Cloud rechnet nach Workflow-Executions ab, nicht nach
              einzelnen Schritten. Eine Execution ist ein vollständiger
              Durchlauf eines Workflows von Trigger bis Endpunkt. Ob darin
              fünf oder fünfzig Nodes laufen, spielt keine Rolle. Das
              Modell ist günstiger als das schritt- oder task-basierte
              Pricing klassischer iPaaS-Anbieter, sobald ein Workflow
              etwas komplexer wird. Wer den direkten Vergleich zu Make
              sucht, findet ihn in unserem{" "}
              <Link href="/blog/make-vs-n8n-vergleich" className="text-primary-600 hover:underline">
                Make-vs-n8n-Vergleich
              </Link>
              , den Vergleich mit Zapier in unserem{" "}
              <Link href="/blog/n8n-vs-zapier-vergleich" className="text-primary-600 hover:underline">
                n8n-vs-Zapier-Vergleich
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Starter-Plan</Typo.H3>
            <Typo.Paragraph>
              Ab 24 Euro pro Monat im Jahresabo, rund 30 Euro bei
              Monatszahlung. Enthalten sind 2.500 Workflow-Executions, fünf
              aktive Workflows und Zugriff auf alle Standard-Nodes. Geeignet
              für Einzelnutzer oder kleine Teams mit überschaubarem Volumen.
            </Typo.Paragraph>

            <Typo.H3>Pro-Plan</Typo.H3>
            <Typo.Paragraph>
              Ab 60 Euro pro Monat im Jahresabo. Enthalten sind 10.000
              Executions, 15 aktive Workflows, sieben Tage Execution-History
              und Admin-Funktionen für mehrere Nutzer. Der typische
              Mittelstands-Tarif.
            </Typo.Paragraph>

            <Typo.H3>Enterprise-Plan</Typo.H3>
            <Typo.Paragraph>
              Pricing auf Anfrage, üblicherweise im niedrigen vierstelligen
              Bereich pro Monat. Enthält SSO/SAML, RBAC, externe Secret-Stores,
              Log-Streaming, dedizierte Cloud-Instanzen, längere
              Execution-History und einen SLA. Für Unternehmen, die n8n
              produktiv über mehrere Teams einsetzen und Compliance-Anforderungen
              haben.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein wichtiges Detail: Bei allen Cloud-Plänen zählen Executions
              kumuliert über alle Workflows. Wer das Limit reißt, muss in
              den nächsten Plan wechseln oder zusätzliche Executions
              kaufen. Pausierte Workflows zählen nicht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="versteckte-kosten">
              Wo n8n trotzdem Geld kostet: Versteckte Posten
            </Typo.H2>
            <Typo.Paragraph>
              Selbst wer Self-Hosting wählt, kommt selten bei null Euro
              raus. Drei Posten tauchen in fast jedem Setup auf.
            </Typo.Paragraph>

            <Typo.H3>Server- und Hosting-Kosten</Typo.H3>
            <Typo.Paragraph>
              Ein einfacher VPS bei Hetzner, IONOS oder einem anderen
              europäischen Anbieter startet bei rund fünf Euro im Monat.
              Für produktive Workflows mit Datenbank, Backups und
              Reverse-Proxy planen wir realistisch 15 bis 40 Euro pro Monat
              ein. Wer eine Managed-Variante mit Monitoring und Updates
              möchte, landet schnell bei 80 bis 150 Euro. Genau diese Lücke
              decken wir mit unserem{" "}
              <Link href="/n8n-hosting-deutschland" className="text-primary-600 hover:underline">
                n8n-Hosting in Deutschland
              </Link>{" "}
              ab.
            </Typo.Paragraph>

            <Typo.H3>API-Kosten der angebundenen Dienste</Typo.H3>
            <Typo.Paragraph>
              n8n selbst ist kostenlos, aber die Dienste, die ein Workflow
              anspricht, sind es oft nicht. OpenAI-Calls, SMS-Versand,
              Maps-APIs, Mail-Provider: alle bringen ihr eigenes Pricing
              mit. Bei einem KI-Workflow mit GPT-4o sind 50 bis 200 Euro
              pro Monat realistisch, je nach Volumen. Das hat nichts mit
              n8n zu tun, gehört aber in jede ehrliche Kostenrechnung.
            </Typo.Paragraph>

            <Typo.H3>Aufwand für Aufbau und Pflege</Typo.H3>
            <Typo.Paragraph>
              Ein Workflow ist nie fertig. APIs ändern sich, Felder kommen
              dazu, Edge-Cases tauchen auf. Wer Self-Hosting macht und
              keine internen Ressourcen für Wartung hat, sollte einen
              Dienstleister einplanen. Bei externer Betreuung sind 200 bis
              800 Euro pro Monat üblich, je nach Anzahl produktiver
              Workflows.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entscheidungsmatrix">
              Free, Self-Hosted oder Cloud: Was passt zu welchem Setup?
            </Typo.H2>

            <BlogImage
              src="/blog/ist-n8n-kostenlos/decision-tree.png"
              alt="n8n Variante auswählen Entscheidungsmatrix"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Die Frage „kostenlos oder bezahlt" ist eigentlich die falsche.
              Die richtige lautet: Welcher Aufwand passt zu welchem
              Bedarf? Drei typische Konstellationen.
            </Typo.Paragraph>

            <Typo.H3>Cloud-Testphase: Für die ersten Schritte</Typo.H3>
            <Typo.Paragraph>
              Wer n8n überhaupt erst kennenlernen will, startet mit der
              14-tägigen Cloud-Testphase. Kein Server, keine Konfiguration,
              direkter Zugriff über den Browser. In diesen zwei Wochen
              lassen sich zwei oder drei Workflows aufsetzen und entscheiden,
              ob die Plattform passt. Danach folgt die Wahl: Cloud-Abo oder
              Self-Hosting.
            </Typo.Paragraph>

            <Typo.H3>Self-Hosting Community Edition: Für KMU mit Volumen</Typo.H3>
            <Typo.Paragraph>
              Sobald mehr als zehn produktive Workflows oder mehr als
              5.000 Executions pro Monat anfallen, rechnet sich Self-Hosting
              gegenüber dem Pro-Plan. Voraussetzung: jemand im Haus oder
              ein Dienstleister, der den Server betreibt, Backups einspielt
              und Updates fährt. Die Sicherheits-Aspekte beim Self-Hosting
              vertiefen wir in unserem Beitrag zur{" "}
              <Link href="/n8n-sicherheit" className="text-primary-600 hover:underline">
                n8n-Sicherheit beim Self-Hosting
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Cloud Pro oder Enterprise: Für Teams ohne IT-Ressourcen</Typo.H3>
            <Typo.Paragraph>
              Wer keinen eigenen Server betreiben will und Compliance,
              Verfügbarkeit oder SSO braucht, fährt mit Cloud Pro oder
              Enterprise besser. Der Mehrpreis gegenüber Self-Hosting
              gleicht sich oft durch ersparten Betriebsaufwand aus,
              vor allem wenn die Workflows geschäftskritisch sind.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lizenz-fairuse">
              Lizenzfrage: Ist Self-Hosting wirklich frei nutzbar?
            </Typo.H2>
            <Typo.Paragraph>
              n8n steht unter der Sustainable Use License, einer
              Source-Available-Lizenz, die kein klassisches Open-Source nach
              OSI-Definition ist. Die Bedingungen sind für die meisten
              Anwendungsfälle unkritisch, lohnen aber einen Blick.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Interne Nutzung erlaubt.</strong> Unternehmen dürfen
                n8n unbegrenzt für eigene Geschäftsprozesse einsetzen. Das
                deckt 95 Prozent aller Anwendungsfälle ab, von Vertriebs- über
                Buchhaltungs- bis zu HR-Workflows.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Embedding und White-Label brauchen eine Lizenz.</strong>
                Wer n8n in ein eigenes Produkt einbettet und an Kunden
                weiterverkauft, braucht eine kommerzielle Embedding-Lizenz.
                Das gleiche gilt für gehostetes Re-Selling.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Forks und Modifikationen sind erlaubt.</strong> Der
                Quellcode darf eingesehen, geändert und im Rahmen der
                Lizenz weiterverwendet werden. Auch das Beitragen zum
                Hauptprojekt steht offen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Weitergabe an externe Nutzer mit Aufpreis.</strong>
                Wer n8n als Service externen Endnutzern zugänglich macht,
                also etwa eine eigene Workflow-Plattform für Kunden auf
                n8n-Basis baut, fällt unter die kommerzielle Lizenzpflicht.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Für den klassischen Mittelstands-Einsatz, in dem n8n interne
              Prozesse automatisiert, ist die Sustainable Use License
              kostenfrei und unkompliziert. Wer plant, n8n als Teil eines
              eigenen kommerziellen Produkts zu vertreiben, sollte vorher
              den Lizenztext lesen oder direkten Kontakt zu n8n aufnehmen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Wirklich kostenlos ist nur das Self-Hosting
            </Typo.H2>
            <Typo.Paragraph>
              n8n ist im Kern ein kostenloses Open-Source-Werkzeug, sobald
              ihr es selbst betreibt. Die Software kostet nichts, die
              Lizenz erlaubt den internen Einsatz ohne Limit, und die
              Community Edition deckt fast alle Mittelstands-Anforderungen
              ab — und die{" "}
              <Link
                href="/blog/n8n-community-guide"
                className="text-primary-600 hover:underline"
              >
                n8n Community
              </Link>{" "}
              hilft kostenlos bei Fragen weiter. Was Geld kostet, sind die
              Posten drumherum: Server, Wartung, API-Calls externer Dienste.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer keinen Aufwand für Server-Betrieb haben will, zahlt ab
              24 Euro pro Monat für die offizielle Cloud. Das ist günstiger
              als die meisten US-iPaaS-Alternativen, aber kein Geschenk.
              Eine ehrliche Kostenrechnung sollte beide Wege gegeneinander
              stellen, statt nur auf den Software-Preis zu schauen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr seid am Überlegen, ob Self-Hosting oder Cloud die
              günstigere Variante für eure Workflow-Last ist?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>
              , wir rechnen die beiden Szenarien gemeinsam mit euch durch.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurze-antwort">
            Die kurze Antwort
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="self-hosting-community-edition">
            Self-Hosting kostenlos
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="cloud-free-trial">
            Cloud Free Trial
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="cloud-pricing">
            Cloud-Pläne im Detail
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="versteckte-kosten">
            Versteckte Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidungsmatrix">
            Entscheidungsmatrix
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lizenz-fairuse">
            Lizenzfrage
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
