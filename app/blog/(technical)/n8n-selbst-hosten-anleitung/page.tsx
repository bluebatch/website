import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-selbst-hosten-anleitung",
  author: "Max Hänsel",
  date: "2026-05-02",
  image: "/blog/n8n-selbst-hosten-anleitung/hero.png",
  tags: ["n8n", "security", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "n8n selbst hosten: Anleitung für Docker, Datenbank, TLS und Backups | Bluebatch",
  description:
    "n8n selbst hosten ohne Fallstricke: Docker Compose, Postgres, Reverse Proxy mit TLS, Backups und Updates. Praxisanleitung für eine produktionsreife Instanz.",
  openGraph: {
    title: "n8n selbst hosten: Die vollständige Anleitung für den Produktivbetrieb",
    description:
      "Von Docker Compose über Postgres bis Reverse Proxy: So wird die n8n-Instanz produktionsreif. Mit Checklisten für Backups, Updates und Monitoring.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/n8n-selbst-hosten-anleitung/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n selbst hosten: Architektur und Setup",
      },
    ],
  },
  alternates: {
    canonical: "/blog/n8n-selbst-hosten-anleitung",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n selbst hosten: Anleitung für eine produktionsreife Instanz
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-02">
            2. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/n8n-selbst-hosten-anleitung/hero.png"
          alt="n8n selbst hosten: Architektur und Setup"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="was-heisst-selbst-hosten">
              Was bedeutet n8n selbst hosten?
            </Typo.H2>
            <Typo.Paragraph>
              n8n ist eine Workflow-Automatisierung mit einer Fair-Code-Lizenz.
              Das bedeutet: Der Quellcode ist offen und die Plattform darf auf
              eigener Infrastruktur betrieben werden, solange sie nicht als
              Service an Dritte weiterverkauft wird. Genau darauf zielt Self-Hosting
              ab. Wer n8n selbst hostet, betreibt die komplette Instanz auf einer
              eigenen Maschine, kontrolliert die Datenhaltung und ist nicht an
              die Preisstaffel der Cloud-Variante gebunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Praxis heißt das: Ein Linux-Server mit Docker, eine Domain
              mit TLS-Zertifikat, eine Datenbank und ein sauberes Backup-Konzept.
              Viel mehr ist es technisch nicht. Der Teufel steckt in den Details,
              und genau dort entscheidet sich, ob die Instanz nach drei Monaten
              noch stabil läuft oder als Wartungsfall auf dem Schreibtisch landet.
              Einen allgemeinen Überblick, was n8n überhaupt ist, liefert unser{" "}
              <Link href="/blog/was-ist-n8n" className="text-primary-600 hover:underline">
                Einsteigerartikel zu n8n
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="cloud-vs-self-hosting">
              Cloud vs. Self-Hosting: Wann lohnt sich was?
            </Typo.H2>
            <Typo.Paragraph>
              Vor dem ersten Docker-Befehl steht die Strategiefrage. n8n Cloud
              ist schnell eingerichtet, kommt mit Managed Updates und skaliert
              per Klick. Self-Hosting erfordert Ops-Know-how, gibt aber volle
              Kontrolle über Daten, Kosten und Customizing.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-selbst-hosten-anleitung/cloud-vs-self-hosting.png"
              alt="Entscheidungsmatrix Cloud vs. Self-Hosting für n8n"
              width={1200}
              height={675}
            />

            <Typo.H3>Wann Cloud die bessere Wahl ist</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Kleine Teams ohne dedizierte Ops-Ressourcen.
              </Typo.ListItem>
              <Typo.ListItem>
                Workflows verarbeiten keine sensiblen personenbezogenen Daten.
              </Typo.ListItem>
              <Typo.ListItem>
                Wenige tausend Workflow-Ausführungen pro Monat, bei denen die
                Cloud-Preise wirtschaftlich bleiben.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Wann Self-Hosting die bessere Wahl ist</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Integrationen mit internen Systemen, die nicht ins Internet
                exponiert werden dürfen (ERP, CRM, Fileserver).
              </Typo.ListItem>
              <Typo.ListItem>
                Daten unterliegen DSGVO, Branchen-Compliance oder internen
                Policies, die ein Auftragsverarbeitungs-Verhältnis erschweren.
              </Typo.ListItem>
              <Typo.ListItem>
                Hohe Workflow-Volumen ab etwa 100.000 Ausführungen pro Monat,
                bei denen Self-Hosting günstiger wird als die Cloud-Tarife.
              </Typo.ListItem>
              <Typo.ListItem>
                Bedarf an Custom Nodes, eigenen Branches oder eigenen Patches,
                die in der Cloud nicht möglich sind.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die Break-even-Rechnung hängt sehr stark vom eigenen Workflow-Mix
              ab. Eine grobe Faustregel: Ab etwa 30 gleichzeitig aktiven
              Workflows und ein paar hunderttausend Executions pro Monat wird
              Self-Hosting wirtschaftlich.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="voraussetzungen">
              Voraussetzungen: Server, Domain, Docker
            </Typo.H2>
            <Typo.Paragraph>
              Für den Produktivbetrieb reicht eine kleine VM bei Hetzner, OVH
              oder einem anderen EU-Anbieter. Für die meisten mittelständischen
              Setups passt eine Maschine mit 2 bis 4 vCPU, 4 bis 8 GB RAM und
              40 GB SSD. Das Betriebssystem sollte eine aktuelle LTS-Version sein,
              typischerweise Ubuntu Server 24.04 oder Debian 12.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Neben dem Server gehören drei Dinge zur Grundausstattung: Eine
              Domain (inklusive A-Record auf die Server-IP), ein aktueller
              Docker- und Docker-Compose-Stack sowie ein Backup-Ziel außerhalb
              der Produktions-VM. Ob der Backup-Speicher bei S3, Backblaze oder
              einem zweiten Rechenzentrum liegt, ist Geschmackssache. Wichtig ist
              nur, dass er nicht an der gleichen Maschine hängt wie die
              n8n-Instanz selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Vor dem Deploy sollte die Maschine gehärtet werden: SSH-Keys statt
              Passwort, Firewall mit nur Port 22/80/443 offen, automatische
              Security-Updates aktiviert, Fail2ban oder CrowdSec gegen
              Login-Scanner. Wer das übergeht, sitzt innerhalb weniger Tage mit
              einer kompromittierten Instanz dort, wo der Aufwand gerade erst
              begonnen hat.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="docker-compose">
              Installation via Docker Compose
            </Typo.H2>
            <Typo.Paragraph>
              Der empfohlene Weg ist Docker Compose mit drei Services:
              n8n-Container, Postgres-Container und ein Reverse Proxy. Ein
              typisches Setup trennt die Services sauber, mountet die Daten in
              benannte Volumes und legt alle Secrets in eine{" "}
              <code>.env</code>-Datei.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-selbst-hosten-anleitung/docker-compose-architektur.png"
              alt="Docker Compose Architektur für n8n Self-Hosting"
              width={1200}
              height={675}
            />

            <Typo.H3>Wichtige Environment-Variablen</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <code>N8N_HOST</code> und <code>WEBHOOK_URL</code> auf die
                öffentliche Domain setzen. Ohne korrekten WEBHOOK_URL laufen
                externe Webhooks ins Leere.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>N8N_ENCRYPTION_KEY</code> als 32-stelligen Zufallswert
                generieren und sichern. Ohne diesen Key lassen sich
                Credentials nach einem Restore nicht entschlüsseln.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>DB_TYPE=postgresdb</code> sowie die Postgres-Zugangsdaten.
                SQLite ist für die ersten Tests okay, aber nicht für
                Produktivlasten.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>N8N_BASIC_AUTH_ACTIVE=false</code> nur setzen, wenn
                stattdessen der integrierte User-Management-Flow mit Owner-Konto
                genutzt wird. Sonst steht die Instanz offen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Volumes, die gesichert werden müssen</Typo.H3>
            <Typo.Paragraph>
              Entscheidend für ein späteres Restore sind zwei Volumes: Das
              n8n-Volume mit den Workflow-Definitionen und das Postgres-Volume
              mit den Execution-Daten. Beide müssen ins Backup. Ein Snapshot der
              gesamten VM ist bequem, ersetzt aber kein datenbankkonsistentes
              Backup, weil während des Snapshots laufende Transaktionen
              abgeschnitten werden können.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenbank">
              Datenbank: SQLite oder Postgres?
            </Typo.H2>
            <Typo.Paragraph>
              Für Testinstallationen reicht SQLite, und ohne zusätzliche
              Konfiguration startet n8n genau damit. Für den Produktivbetrieb
              ist Postgres die klar bessere Wahl. Postgres skaliert besser mit
              vielen Executions, erlaubt parallele Writes und lässt sich mit
              pg_dump sauber sichern. SQLite dagegen serialisiert Writes und wird
              bei wachsender Last schnell zum Flaschenhals.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer auf Postgres umsteigt, sollte von Anfang an saubere
              Connection-Limits setzen und die Postgres-Version mit den
              offiziellen Docker-Images pinnen (derzeit stabil: Postgres 16).
              Auto-Updates auf Major-Versionen sind gefährlich, weil n8n gezielt
              mit bestimmten Postgres-Features getestet wird. Minor-Updates per
              Watchtower sind dagegen unkritisch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine häufige Falle: Die Retention-Policy für Execution-Daten wird
              nicht gesetzt und die Datenbank wächst monatelang ungebremst. Über
              die Environment-Variablen{" "}
              <code>EXECUTIONS_DATA_PRUNE=true</code> und{" "}
              <code>EXECUTIONS_DATA_MAX_AGE</code> lassen sich alte Executions
              automatisch löschen. Ohne diese Werte sitzt man nach sechs Monaten
              auf einer 50-GB-Datenbank voller irrelevanter Logs.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="reverse-proxy">
              Reverse Proxy und TLS
            </Typo.H2>
            <Typo.Paragraph>
              n8n direkt am Port 5678 ins Internet zu stellen, ist keine gute
              Idee. Der korrekte Weg führt über einen Reverse Proxy, der
              TLS-Zertifikate verwaltet, Requests weiterreicht und als zusätzliche
              Sicherheitsschicht dient. Drei Kandidaten haben sich bewährt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Caddy</strong>: Die einfachste Variante. Eine Zeile
                Konfiguration aktiviert automatisch Let&apos;s-Encrypt-Zertifikate
                inklusive Renewal. Ideal für kleine Setups.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Traefik</strong>: Mächtiger, aber komplexer. Docker-nativ
                und damit perfekt für Setups, die mehrere Services hinter einer
                Domain bündeln.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Nginx</strong>: Der Klassiker. Erfordert manuelle
                Certbot-Konfiguration, ist aber vielen Admins vertraut und
                bietet maximale Kontrolle.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Unabhängig vom Proxy sollten zusätzlich Security-Header gesetzt
              werden, speziell HSTS, X-Frame-Options und eine sinnvolle
              Content-Security-Policy. Die konkreten Angriffsszenarien und
              Härtungsmaßnahmen, inklusive der kritischen CVE-Welle aus dem
              Winter 2025/2026, haben wir im Beitrag zur{" "}
              <Link href="/n8n-sicherheit" className="text-primary-600 hover:underline">
                n8n-Sicherheit beim Self-Hosting
              </Link>{" "}
              im Detail behandelt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="backups-updates">
              Backups und Updates
            </Typo.H2>
            <Typo.Paragraph>
              Ein Backup, das nicht getestet wurde, ist kein Backup. Das gilt
              für n8n doppelt, weil die Workflow-Definitionen, die Credentials
              und die Execution-History in unterschiedlichen Stellen liegen.
              Empfehlenswert ist eine tägliche Routine aus pg_dump für die
              Postgres-Datenbank plus rsync des n8n-Volumes. Beide Artefakte
              gehen verschlüsselt auf den externen Backup-Speicher. Ein
              Restore-Test einmal im Quartal deckt Überraschungen auf, bevor sie
              im Ernstfall weh tun.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-selbst-hosten-anleitung/backup-strategie.png"
              alt="Backup- und Restore-Strategie für n8n"
              width={1200}
              height={675}
            />

            <Typo.H3>Update-Strategie</Typo.H3>
            <Typo.Paragraph>
              n8n veröffentlicht fast wöchentlich Releases, und viele davon
              enthalten Security-Fixes. Eine gute Strategie: Minor-Versionen
              werden automatisch per Watchtower aktualisiert, Major-Versionen
              werden im Staging-Compose-Stack manuell durchgespielt. So läuft
              Produktion nie auf Versionen, die noch niemand im eigenen Kontext
              gesehen hat. Wer die Security-Updates ignoriert, läuft Gefahr,
              Teil der Zerobot-Botnet-Statistik zu werden, die im März 2026 über
              hunderttausend verwundbare Instanzen aufgedeckt hat.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="monitoring">
              Monitoring und Betrieb
            </Typo.H2>
            <Typo.Paragraph>
              Im Produktivbetrieb reicht ein reines Uptime-Monitoring nicht.
              Interessant sind vier Metriken: Erreichbarkeit der öffentlichen
              URL, Latenz des Webhook-Endpoints, Füllstand der Postgres-Partition
              und Erfolgsquote der letzten 1.000 Executions. Diese Werte lassen
              sich mit Uptime-Kuma, Grafana oder einfach einem kleinen
              Statuspage-Service einsammeln.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommt ein Blick auf die n8n-eigenen Logs. Ein immer wieder
              fehlgeschlagener Workflow ist entweder ein Bug im Workflow oder
              ein Symptom für Probleme im angebundenen System. Beides sollte
              innerhalb weniger Stunden sichtbar werden und nicht erst, wenn
              ein Kunde eine fehlende Antwort meldet. Für größere Setups lohnt
              sich ein zentrales Log-Aggregat mit Loki oder einem Managed
              Service.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer den gesamten Betrieb nicht selbst stemmen will, findet mit
              unserem{" "}
              <Link href="/n8n-hosting-deutschland" className="text-primary-600 hover:underline">
                Managed-n8n-Hosting
              </Link>{" "}
              eine Alternative, bei der Server-Härtung, Monitoring und Updates
              extern laufen, die Daten aber in einem deutschen Rechenzentrum
              bleiben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: n8n selbst hosten lohnt, wenn die Hausaufgaben stimmen
            </Typo.H2>
            <Typo.Paragraph>
              Self-Hosting von n8n ist technisch kein Hexenwerk. Docker Compose,
              Postgres, ein Reverse Proxy, ein Backup-Plan, das war es im Kern.
              Der eigentliche Aufwand liegt im Betrieb: Updates fahren,
              Security-Fixes einspielen, Backups testen, Monitoring auswerten.
              Wer diese Routine in den Alltag integriert, bekommt eine
              Plattform, die vom Lieferantenworkflow bis zum ERP-Integrationslayer
              alles abdeckt, ohne monatliche Lizenzgebühren und ohne Kompromisse
              bei der Datenhoheit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Fehler sind die teuersten: Kein Backup-Plan und kein
              Update-Rhythmus. Beide lassen sich mit klaren Routinen vermeiden.
              Der Rest ist Handwerk.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr überlegt, n8n im eigenen Rechenzentrum oder bei einem
              deutschen Cloud-Anbieter laufen zu lassen?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>
              , und wir gehen mit euch die Architektur durch.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-heisst-selbst-hosten">
            Was heißt Self-Hosting?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="cloud-vs-self-hosting">
            Cloud vs. Self-Hosting
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="voraussetzungen">
            Voraussetzungen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="docker-compose">
            Docker Compose Setup
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenbank">
            Datenbank
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="reverse-proxy">
            Reverse Proxy und TLS
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="backups-updates">
            Backups und Updates
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="monitoring">
            Monitoring
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
