import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-pricing-guide",
  author: "Max Hänsel",
  date: "2026-05-14",
  image: "/images/cost-savings.jpg",
  tags: ["n8n", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "n8n Pricing 2026: Cloud-Tarife, TCO und Skalierungs-Schwellen | Bluebatch",
  description:
    "n8n Pricing 2026 im Detail: Cloud-Tarife ab 24 Euro, Self-Hosting TCO, Skalierungs-Schwellen und Entscheidungsmatrix für Mittelständler. Wo sich welcher Plan rechnet.",
  openGraph: {
    title: "n8n Pricing 2026: Cloud-Tarife, TCO und Skalierungs-Schwellen",
    description:
      "Konkrete Pricing-Mathematik für n8n Cloud und Self-Hosting: Wann lohnt sich welcher Plan, wo sind versteckte Kosten und welche Schwellen kippen die Rechnung.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/cost-savings.jpg",
        width: 1200,
        height: 630,
        alt: "n8n Pricing Übersicht 2026",
      },
    ],
  },
  alternates: {
    canonical: "/blog/n8n-pricing-guide",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n Pricing 2026: Cloud-Tarife, TCO und Skalierungs-Schwellen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-14">
            14. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/images/cost-savings.jpg"
          alt="n8n Pricing Übersicht 2026"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="pricing-stand-2026">
              Der aktuelle n8n-Pricing-Stand 2026
            </Typo.H2>
            <Typo.Paragraph>
              n8n hat sein Cloud-Pricing in den vergangenen achtzehn Monaten
              mehrfach angepasst. Die Tarif-Namen sind geblieben, die Limits
              und Preise sind feiner geworden. Wer im Frühling 2026 ein
              Pricing-Sheet aus 2024 öffnet, schaut auf veraltete Zahlen.
              Dieser Beitrag rechnet mit den heute gültigen Tarifen und
              zeigt, wo die Schwellen liegen, an denen sich ein Wechsel
              lohnt oder gerade nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer zuerst die strategische Einordnung sucht, was n8n überhaupt
              ist und wie die Plattform technisch aufgebaut ist, findet das
              in unserer{" "}
              <Link href="/blog/was-ist-n8n" className="text-primary-600 hover:underline">
                Einführung in n8n
              </Link>
              . Hier geht es ausschließlich um die Pricing-Mathematik:
              welcher Plan für welches Volumen, wann sich Self-Hosting
              gegen Cloud rechnet und welche Posten in keinem Tarif-Blatt
              auftauchen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="cloud-tarife-ueberblick">
              Die drei Cloud-Tarife im Schnellüberblick
            </Typo.H2>

            <BlogImage
              src="/images/pricing-calculator.jpg"
              alt="n8n Cloud-Tarife Starter Pro Enterprise im Vergleich"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              n8n Cloud kennt drei Stufen. Alle drei rechnen nach
              Workflow-Executions, nicht nach Tasks oder Operations. Eine
              Execution ist ein vollständiger Durchlauf eines Workflows
              vom Trigger bis zum letzten Node. Ob darin fünf oder
              fünfzig Schritte stecken, spielt für das Pricing keine
              Rolle.
            </Typo.Paragraph>

            <Typo.H3>Starter — ab 24 Euro pro Monat im Jahresabo</Typo.H3>
            <Typo.Paragraph>
              Enthält 2.500 Executions und fünf aktive Workflows. Geeignet
              für Einzelnutzer, Solopreneure und kleine Teams mit
              überschaubarem Volumen. Bei monatlicher Zahlung steigen die
              Kosten auf rund 30 Euro. Inkludiert sind alle Standard-Nodes,
              Webhook-Trigger und sieben Tage Execution-History.
            </Typo.Paragraph>

            <Typo.H3>Pro — ab 60 Euro pro Monat im Jahresabo</Typo.H3>
            <Typo.Paragraph>
              Vierfaches Volumen für gerade einmal das 2,5-fache des
              Starter-Preises. 10.000 Executions, 15 aktive Workflows,
              Admin-Funktionen für mehrere Nutzer und vierzehn Tage
              Execution-History. Der typische Mittelstands-Tarif für
              Teams, die produktive Automationen ohne IT-Aufwand fahren
              wollen.
            </Typo.Paragraph>

            <Typo.H3>Enterprise — Pricing auf Anfrage</Typo.H3>
            <Typo.Paragraph>
              Üblicherweise im niedrigen vierstelligen Bereich pro Monat.
              Beinhaltet SSO/SAML, granulares RBAC, externe Secret-Stores,
              Log-Streaming an SIEMs, Audit-Logs, längere Execution-History,
              dedizierte Cloud-Instanzen und einen vertraglichen SLA.
              Für Konzerne, regulierte Branchen oder größere
              Mittelständler mit Compliance-Pflichten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="execution-modell">
              Pricing-Modell: Was zählt als Execution
            </Typo.H2>
            <Typo.Paragraph>
              Das Execution-Modell ist der wichtigste Unterschied zu
              klassischen iPaaS-Tools. Wer aus Zapier oder Make kommt,
              denkt in Tasks oder Operations. Bei n8n ist das egal. Die
              Logik in zwei Sätzen: Eine Execution wird gezählt, wenn ein
              Trigger feuert und der Workflow startet. Was danach an Nodes
              ausgeführt wird, kostet nichts extra.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praxisbeispiel: Ein Workflow zieht aus dem Mail-Postfach
              eingehende Bestellungen, ruft die OpenAI-API zur
              Strukturierung, schreibt die Daten ins ERP, sendet eine
              Bestätigung und protokolliert das Ergebnis in einer
              Datenbank. Sechs Nodes, eine Execution. Bei einem
              vergleichbaren Zapier-Setup wären sechs Tasks fällig — bei
              tausend Bestellungen pro Monat ein Faktor sechs in der
              Abrechnung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der direkte Tarif-Vergleich zu Make findet sich in unserem{" "}
              <Link href="/blog/make-vs-n8n-vergleich" className="text-primary-600 hover:underline">
                Make-vs-n8n-Vergleich
              </Link>
              . Vereinfacht: Sobald ein Workflow mehr als drei Nodes
              hat, gewinnt n8n im Pricing-Vergleich deutlich.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Drei Sub-Punkte, die in der Tarif-Übersicht selten stehen:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Pausierte Workflows zählen nicht.</strong> Wer
                Workflows entwickelt, kann beliebig viele inaktive
                Versionen halten. Erst der aktive Trigger-Status zählt
                gegen das Limit.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Sub-Workflows zählen separat.</strong> Wer einen
                Workflow aus einem anderen heraus aufruft (Execute
                Workflow Node), löst eine zweite Execution aus. Wer
                modular bauen will, sollte das einkalkulieren.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Fehlgeschlagene Executions zählen mit.</strong>
                Auch ein Workflow, der nach drei Nodes mit einem Fehler
                stoppt, geht ins Limit. Robuste Trigger-Filter sparen
                also bares Geld.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="skalierungs-schwellen">
              Wann sich der Plan-Wechsel rechnet
            </Typo.H2>
            <Typo.Paragraph>
              Drei klare Schwellen, an denen die Rechnung kippt. Sie
              stammen aus realen Setups, die wir bei Mittelständlern
              gerechnet haben.
            </Typo.Paragraph>

            <Typo.H3>Schwelle 1: Starter zu Pro bei 1.500 Executions</Typo.H3>
            <Typo.Paragraph>
              Auf dem Starter-Plan sind 2.500 Executions inkludiert. Wer
              regelmäßig zwischen 1.500 und 2.000 Executions liegt, hat
              den Wechsel-Druck früh: Eine ungeplante Spitze (zum
              Beispiel ein Massenversand oder ein Datenmigrations-Job)
              reißt das Limit. Der Pro-Plan kostet zwar das 2,5-fache,
              gibt aber das Vierfache an Headroom — und kostet ab Schwelle
              1.500 oft weniger als Add-On-Pakete für überzogene
              Executions.
            </Typo.Paragraph>

            <Typo.H3>Schwelle 2: Pro zu Self-Hosting bei 8.000 Executions</Typo.H3>
            <Typo.Paragraph>
              Wer den Pro-Plan voll auslastet und absehbar in den
              fünfstelligen Bereich pro Monat geht, sollte Self-Hosting
              durchrechnen. Ein produktionsreifer Self-Hosting-Stack auf
              einem mittelgroßen VPS kommt im Vollbetrieb auf 30 bis 60
              Euro Hardware-Kosten plus Wartungspauschale. Das ist
              günstiger als der Pro-Plan, wenn die Wartung intern
              gestemmt werden kann.
            </Typo.Paragraph>

            <Typo.H3>Schwelle 3: Cloud zu Enterprise bei Compliance-Pflicht</Typo.H3>
            <Typo.Paragraph>
              Diese Schwelle ist nicht volumen-, sondern
              anforderungs-getrieben. Sobald SSO, Audit-Logs, dedizierte
              Instanzen oder ein vertraglicher SLA Pflicht werden,
              führt nichts an Enterprise vorbei. Wer das nicht braucht,
              bleibt auf Pro oder migriert nach Self-Hosting — das deckt
              die meisten Volumen-Sprünge günstiger ab.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="self-hosting-tco">
              Self-Hosting: Total Cost of Ownership
            </Typo.H2>

            <BlogImage
              src="/images/business-roadmap.jpg"
              alt="n8n Self-Hosting TCO drei Setup-Pfade"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Self-Hosting ist nicht gratis — auch wenn die Software
              selbst keinen Cent kostet. Drei realistische Setup-Pfade
              für KMU.
            </Typo.Paragraph>

            <Typo.H3>Pfad A: Bare-Bones-VPS, intern betreut</Typo.H3>
            <Typo.Paragraph>
              Ein 4-vCPU-VPS bei Hetzner oder IONOS kostet 15 bis 25
              Euro pro Monat. Plus DNS, Backups (S3-kompatibler Storage
              für 5 Euro), TLS-Zertifikat über Let's Encrypt gratis. Wer
              jemanden im Haus hat, der Docker-Compose lesen kann und
              monatlich eine Stunde Wartung übernimmt, kommt auf
              Hardware-Kosten von rund 30 Euro plus interne Personalzeit.
              Der praktische Aufbau steht in unserer{" "}
              <Link href="/blog/n8n-selbst-hosten-anleitung" className="text-primary-600 hover:underline">
                n8n-Self-Hosting-Anleitung
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Pfad B: Managed Hosting mit DSGVO-Fokus</Typo.H3>
            <Typo.Paragraph>
              Wer keine eigenen IT-Ressourcen hat, aber DSGVO-konforme
              Infrastruktur braucht, lagert den Betrieb aus. Managed
              n8n-Angebote in deutschen Rechenzentren mit Updates,
              Backups und Monitoring liegen typischerweise bei 80 bis
              150 Euro pro Monat. Genau diese Lücke decken wir mit
              unserem{" "}
              <Link href="/n8n-hosting-deutschland" className="text-primary-600 hover:underline">
                n8n-Hosting in Deutschland
              </Link>{" "}
              ab. Vergleich zur Cloud: Bei 8.000 Executions und 80 Euro
              im Monat liegt Managed-Self-Hosting unterhalb des
              Cloud-Pro-Plans.
            </Typo.Paragraph>

            <Typo.H3>Pfad C: On-Prem mit Kubernetes</Typo.H3>
            <Typo.Paragraph>
              Für regulierte Branchen oder Unternehmen mit strikten
              Datenschutz-Vorgaben ist On-Prem auf eigenem Kubernetes-Cluster
              eine Option. Hier rechnen wir realistisch mit 200 bis 500
              Euro Hardware-Anteil pro Monat (anteilig am bestehenden
              Cluster) plus 1.000 bis 2.500 Euro intern für Aufbau und
              Pflege im laufenden Betrieb. Lohnt sich erst ab fünfstelligen
              Volumen oder wenn Compliance-Auflagen jeden Cloud-Betrieb
              ausschließen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wettbewerbsvergleich">
              n8n Pricing im Wettbewerbsvergleich
            </Typo.H2>
            <Typo.Paragraph>
              Drei Punkte, an denen sich n8n im Pricing-Wettbewerb absetzt.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Execution-statt-Task-Modell.</strong> Bei Zapier
                kostet jede einzelne Aktion. Bei Make jede Operation. Bei
                n8n nur der Workflow-Start. Sobald Workflows komplexer
                als drei Nodes werden, schlägt n8n die Konkurrenz im
                Stückpreis um den Faktor zwei bis fünf.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Self-Hosting als gleichberechtigte Option.</strong>
                Zapier hat kein Self-Hosting. Make hat kein Self-Hosting.
                Wer aus Datenschutz-, Latenz- oder Kostengründen
                On-Prem bauen will, hat bei den großen iPaaS-Anbietern
                keine Wahl. n8n ja.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Eingebaute KI-Nodes ohne Aufpreis.</strong> LangChain-,
                Vector-Store- und Agent-Nodes sind in allen Tarifen
                enthalten — nur die externen API-Kosten (OpenAI,
                Anthropic, Google) fallen separat an. Bei manchen
                US-Konkurrenten kosten KI-Nodes einen Tarif-Aufschlag.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="versteckte-posten">
              Versteckte Kosten, die das Pricing nicht zeigt
            </Typo.H2>
            <Typo.Paragraph>
              Drei Posten, die in keinem Tarif-Blatt stehen, aber jede
              Pricing-Rechnung verschieben.
            </Typo.Paragraph>

            <Typo.H3>API-Kosten der angebundenen Dienste</Typo.H3>
            <Typo.Paragraph>
              n8n-Nodes sprechen externe APIs an, und diese APIs haben
              eigenes Pricing. Ein KI-Workflow mit GPT-4o kostet bei
              moderatem Volumen 50 bis 200 Euro pro Monat an OpenAI-Calls.
              SMS-Versand über Twilio, Geocoding über Google Maps,
              Mail-Versand über SendGrid — alles eigene Tarife. Bei
              manchen Setups übersteigen die API-Kosten den n8n-Tarif
              um ein Vielfaches.
            </Typo.Paragraph>

            <Typo.H3>Aufbau und laufende Pflege</Typo.H3>
            <Typo.Paragraph>
              Ein Workflow ist nie fertig. APIs ändern sich, Felder
              kommen dazu, Edge-Cases tauchen auf. Wer Self-Hosting
              fährt und keine internen Ressourcen für Wartung hat,
              sollte einen Dienstleister einplanen. Bei externer
              Betreuung sind 200 bis 800 Euro pro Monat üblich, je nach
              Anzahl produktiver Workflows. Bei Cloud-Setups
              entsprechend weniger, weil die Infrastruktur ausfällt —
              die Workflow-Pflege bleibt aber.
            </Typo.Paragraph>

            <Typo.H3>Datenbank- und Storage-Wachstum</Typo.H3>
            <Typo.Paragraph>
              Self-Hosting nutzt eine Postgres-Datenbank für
              Execution-Historie und Credentials. Wer hochfrequent
              Workflows fährt, sieht die Datenbank um zwei bis fünf
              Gigabyte pro Monat wachsen. Storage ist günstig, aber
              Backup-Strategie und Pruning der alten Executions sind
              Pflicht — sonst läuft die Disk voll. Cloud-Tarife haben
              diese Limits eingebaut, dafür weniger Kontrolle über die
              History-Tiefe.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entscheidungsmatrix">
              Welcher Tarif für welches Setup
            </Typo.H2>

            <BlogImage
              src="/images/strategic-thinking.jpg"
              alt="n8n Tarif-Entscheidung nach Setup und Volumen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Drei typische Personas, die wir in Mittelstands-Projekten
              wiederfinden. Wer sich in einer wiedererkennt, hat den
              Pricing-Pfad abgesteckt.
            </Typo.Paragraph>

            <Typo.H3>Persona 1: Solo-Operator mit unter 2.000 Executions</Typo.H3>
            <Typo.Paragraph>
              Ein einzelner Vertriebler, ein Mini-Team in der Buchhaltung,
              ein Solopreneur. Volumen unter 2.000 Executions pro Monat,
              keine SSO-Pflicht, kein eigenes IT-Team. Cloud Starter ist
              die richtige Wahl — 24 Euro im Monat, kein Server-Aufwand,
              direkter Zugriff im Browser. Wer Self-Hosting probieren
              will, kann das auf einem 5-Euro-VPS machen, gewinnt aber
              kaum Geld.
            </Typo.Paragraph>

            <Typo.H3>Persona 2: KMU-Team mit 5.000 bis 10.000 Executions</Typo.H3>
            <Typo.Paragraph>
              Das klassische Großhandels- oder Steuerberater-Team mit
              fünf bis zwanzig Workflows in Produktion. Hier wird die
              Rechnung interessant. Wenn IT-Ressourcen vorhanden sind:
              Self-Hosting auf VPS mit 30 bis 60 Euro Hardware-Kosten.
              Wenn nicht: Cloud Pro für 60 Euro oder unser Managed
              Hosting für rund 100 Euro mit DSGVO-Garantie. Welche
              Konstellation passt, hängt am Wartungsaufwand, nicht am
              Listenpreis. Eine grundsätzliche Einordnung zur
              Großhandels-Digitalisierung steht in unserem Beitrag zur{" "}
              <Link href="/digitalisierung-grosshandel" className="text-primary-600 hover:underline">
                Digitalisierung im Großhandel
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Persona 3: Konzern mit Compliance-Pflicht</Typo.H3>
            <Typo.Paragraph>
              Mehr als hundert Mitarbeiter, regulierte Branche, Audits,
              SSO, Audit-Logs. Cloud Enterprise ist der einfachere Weg,
              weil n8n den Compliance-Footprint mitbringt. On-Prem auf
              Kubernetes ist möglich, lohnt sich aber nur, wenn das
              IT-Team eine Plattform-Strategie hat und n8n als ein
              Baustein unter vielen betreibt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Pricing ist mehr als der Listenpreis
            </Typo.H2>
            <Typo.Paragraph>
              n8n ist im Vergleich zu klassischen iPaaS-Tools günstig —
              vor allem, weil das Execution-Modell den Stückpreis
              dramatisch drückt, sobald Workflows komplexer werden. Der
              Cloud-Starter-Plan mit 24 Euro deckt einen Solo-Operator
              ab, der Pro-Plan mit 60 Euro die meisten KMU-Teams. Erst
              bei fünfstelligem Volumen oder Compliance-Pflicht
              verschiebt sich die Rechnung Richtung Self-Hosting oder
              Enterprise.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was den Listenpreis fast immer schlägt, sind die
              Folgekosten: API-Aufrufe externer Dienste, Aufbau und
              Pflege der Workflows, Datenbank-Wachstum bei Self-Hosting.
              Wer ein realistisches Pricing-Modell aufstellt, sollte
              diese drei Posten direkt mitkalkulieren. Sonst sieht das
              Tarif-Blatt günstig aus, der Monatsabschluss aber nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wollt für euer konkretes Volumen rechnen, ob Cloud Pro,
              Managed Self-Hosting oder Enterprise die wirtschaftlichste
              Variante ist?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>
              , wir gehen die drei Pfade gemeinsam durch und legen die
              Schwellen für euren Use Case offen.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="pricing-stand-2026">
            Pricing-Stand 2026
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="cloud-tarife-ueberblick">
            Cloud-Tarife
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="execution-modell">
            Execution-Modell
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="skalierungs-schwellen">
            Skalierungs-Schwellen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="self-hosting-tco">
            Self-Hosting TCO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wettbewerbsvergleich">
            Wettbewerbsvergleich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="versteckte-posten">
            Versteckte Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidungsmatrix">
            Entscheidungsmatrix
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
