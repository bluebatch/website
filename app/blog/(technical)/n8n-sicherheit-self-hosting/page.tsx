import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-sicherheit-self-hosting",
  author: "Max Hänsel",
  date: "2026-03-30",
  image: "/blog/n8n-sicherheit-self-hosting/hero.png",
  tags: ["n8n", "security"] as BlogTagId[],
  publish: true,
};

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/n8n-sicherheit",
  rewrites: [
    {
      source: "/n8n-sicherheit",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "n8n Sicherheit: So schützt ihr eure Self-Hosted Instanz vor Angriffen | Bluebatch",
  description:
    "7 kritische CVEs in 5 Monaten, ein aktives Botnet und über 100.000 exponierte Instanzen. Best Practices für Reverse Proxy, TLS, Docker-Hardening und DSGVO.",
  openGraph: {
    title:
      "n8n Sicherheit: So schützt ihr eure Self-Hosted Instanz vor Angriffen",
    description:
      "Best Practices für Reverse Proxy, TLS, Docker-Hardening, Secrets Management und DSGVO-Compliance beim n8n Self-Hosting.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/n8n-sicherheit-self-hosting/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n Sicherheit: Best Practices für Self-Hosting",
      },
    ],
  },
  alternates: {
    canonical: "/n8n-sicherheit",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n Sicherheit: So schützt ihr eure Self-Hosted Instanz vor Angriffen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>20 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-03-30">
            30. März 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/n8n-sicherheit-self-hosting/hero.png"
          alt="n8n Sicherheit: Best Practices für Self-Hosting"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* 1. Warum n8n-Sicherheit jetzt Top-Priorität ist */}
          <div>
            <Typo.H2 id="warum-jetzt">
              Warum n8n-Sicherheit jetzt Top-Priorität ist
            </Typo.H2>
            <Typo.Paragraph>
              Dezember 2025. Ein Sicherheitsforscher bei Cyera findet einen Bug
              im Webhook-Handler von n8n. Kein kleiner Bug. Ein CVSS 10.0 — die
              Maximalbewertung. Der Name: <strong>Ni8mare</strong>.
              Unauthenticated Remote Code Execution. Das heißt: Kein Login
              nötig, kein Account, keine Berechtigung. Ein einzelner
              HTTP-Request reicht, um die komplette Instanz zu übernehmen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das war der Anfang. Nicht das Ende.
            </Typo.Paragraph>

            <Typo.H3>Die CVE-Welle 2025/2026</Typo.H3>
            <Typo.Paragraph>
              Zwischen November 2025 und März 2026 wurden{" "}
              <strong>7 kritische Schwachstellen</strong> in n8n veröffentlicht.
              Davon zwei mit CVSS 10.0 und zwei mit CVSS 9.9. Das ist
              beispiellos für eine Automatisierungsplattform. n8n ist quasi über
              Nacht vom Entwickler-Liebling zum Angriffsziel Nr. 1 unter
              Workflow-Tools geworden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und das Ganze ist nicht nur Theorie. CVE-2025-68613 (Expression
              Injection, CVSS 9.9) wird seit Januar 2026{" "}
              <strong>aktiv in der Wildnis ausgenutzt</strong>. Das
              Zerobot-Botnet, eine Mirai-Variante, scannt das Internet gezielt
              nach verwundbaren n8n-Instanzen. Findet es eine, wird sie Teil des
              Botnets. Die US-Behörde CISA hat die Schwachstelle am 11. März
              2026 in den Known Exploited Vulnerabilities Katalog aufgenommen.
              Deadline für den Patch: <strong>25. März 2026.</strong>
            </Typo.Paragraph>

            <Typo.H3>100.000+ Instanzen im Netz</Typo.H3>
            <Typo.Paragraph>
              Wie viele n8n-Instanzen hängen direkt am Internet? Cybersecurity
              News und Horizon3.ai haben im März 2026 Shodan-Scans ausgewertet.
              Das Ergebnis: <strong>71.537 Instanzen</strong> sind öffentlich
              erreichbar. Davon laufen die meisten auf dem Standard-Port 5678,
              viele ohne Authentifizierung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Noch schlimmer: Etwa <strong>105.753 Instanzen</strong> sind
              anfällig für CVE-2026-21858 (Ni8mare). Das bedeutet: Über
              hunderttausend Maschinen, bei denen ein einziger HTTP-Request zur
              vollständigen Übernahme reicht. Im Februar 2026 waren laut The
              Hacker News und CISA noch{" "}
              <strong>24.700+ ungepatchte Instanzen</strong> online.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Wahrscheinlichkeit, dass eure Instanz gescannt wird, ist nicht
              hypothetisch. Sie ist eine Frage von Stunden nach dem Deployment.
            </Typo.Paragraph>

            <Typo.H3>Was passiert, wenn jemand reinkommt</Typo.H3>
            <Typo.Paragraph>
              Hier wird es richtig unangenehm. n8n ist keine isolierte App. Es
              ist eine Integrationsplattform. Das heißt, in einer typischen
              Installation findet ein Angreifer:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Alle gespeicherten Credentials.</strong> Jeder API-Key,
              jedes OAuth-Token, jeder Datenbankzugang, den ihr in n8n
              hinterlegt habt. CRM-Zugang, E-Mail-Provider, ERP-Schnittstelle,
              Payment-Gateway. Alles liegt verschlüsselt in der Datenbank, aber
              der Verschlüsselungsschlüssel (
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_ENCRYPTION_KEY
              </code>
              ) ist auf derselben Maschine. Wer Root hat, hat den Key. Wer den
              Key hat, hat alles.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zugriff auf Kundendaten.</strong> Eure Workflows
              verarbeiten Bestellungen, Kontaktdaten, Rechnungen, E-Mails. All
              das fließt durch n8n. Execution-Daten werden standardmäßig
              gespeichert. Ein Angreifer kann vergangene Workflow-Ausführungen
              auslesen und bekommt damit einen Datenschatz, der weit über die
              n8n-Instanz hinausgeht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Laterale Bewegung ins interne Netz.</strong> n8n läuft
              typischerweise in einem Docker-Container, der Zugriff auf interne
              Netzwerke hat. PostgreSQL, Redis, andere interne Dienste. Von dort
              aus kann sich ein Angreifer weiter vorarbeiten. Aus einem
              kompromittierten Workflow-Tool wird ein Brückenkopf ins Firmennetz.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-sicherheit-self-hosting/angriff.png"
              alt="Angriffsszenarien auf eine ungesicherte n8n-Instanz"
              width={1200}
              height={800}
            />

            <Typo.H3>Der DSGVO-Aspekt</Typo.H3>
            <Typo.Paragraph>
              Und dann ist da noch die rechtliche Seite. Wenn ein Angreifer über
              eure n8n-Instanz auf personenbezogene Daten zugreift, habt ihr{" "}
              <strong>72 Stunden</strong> Zeit, das der Aufsichtsbehörde zu
              melden (Art. 33 DSGVO). Bei einem RCE-Exploit mit Zugriff auf
              Credentials und Kundendaten ist das keine theoretische Frage. Das
              ist ein meldepflichtiger Datenschutzvorfall.
            </Typo.Paragraph>

            <Typo.H3>Kein Grund zur Panik. Aber zum Handeln.</Typo.H3>
            <Typo.Paragraph>
              Die gute Nachricht: Die meisten dieser Sicherheitsprobleme sind
              vermeidbar. Reverse Proxy, TLS, starke Authentifizierung,
              regelmäßige Updates. Kein Hexenwerk. Aber es muss gemacht werden.
              Und zwar jetzt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer n8n self-hosted betreibt, übernimmt die volle Verantwortung.
              Kein Cloud-Anbieter patcht für euch. Keine automatischen
              Security-Updates. Ihr seid der Admin, der Sicherheitsbeauftragte
              und der Incident-Responder in einer Person.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die nächsten Kapitel zeigen euch Schritt für Schritt, wie ihr eure
              Instanz absichert. Fangen wir mit dem Überblick über die konkreten
              Schwachstellen an.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 2. Die 7 kritischen Schwachstellen im Detail */}
          <div>
            <Typo.H2 id="cve-ueberblick">
              Die 7 kritischen Schwachstellen im Detail
            </Typo.H2>
            <Typo.Paragraph>
              Zwischen November 2025 und März 2026 hat n8n eine
              Schwachstellen-Dichte erlebt, die es so bei keinem anderen
              Workflow-Tool gab. Sieben CVEs, davon sechs mit CVSS 9.4 oder
              höher. Hier ist der Überblick, bevor wir die gefährlichsten im
              Detail anschauen.
            </Typo.Paragraph>

            <Typo.H3>Alle 7 CVEs auf einen Blick</Typo.H3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      CVE
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      CVSS
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Typ
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Auth nötig?
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Fix-Version
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2026-21858
                    </td>
                    <td className="px-4 py-3">Ni8mare</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-red-600">10.0</span>
                    </td>
                    <td className="px-4 py-3">Unauthenticated RCE</td>
                    <td className="px-4 py-3">Nein</td>
                    <td className="px-4 py-3">1.121.0</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2026-21877
                    </td>
                    <td className="px-4 py-3">File Upload RCE</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-red-600">10.0</span>
                    </td>
                    <td className="px-4 py-3">Unrestricted File Upload</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">1.121.3</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2025-68613
                    </td>
                    <td className="px-4 py-3">Expression Injection</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-orange-600">9.9</span>
                    </td>
                    <td className="px-4 py-3">Authenticated RCE</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">1.120.4 / 1.121.1 / 1.122.0</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2025-68668
                    </td>
                    <td className="px-4 py-3">N8scape</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-orange-600">9.9</span>
                    </td>
                    <td className="px-4 py-3">Sandbox Escape</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">2.0.0</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2026-25049
                    </td>
                    <td className="px-4 py-3">Sanitization Bypass</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-orange-600">9.4</span>
                    </td>
                    <td className="px-4 py-3">
                      Bypass von CVE-2025-68613-Fix
                    </td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">Feb. 2026 Patch</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2026-25115
                    </td>
                    <td className="px-4 py-3">Python Sandbox Escape</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-orange-600">9.4</span>
                    </td>
                    <td className="px-4 py-3">Sandbox Escape</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">Feb. 2026 Patch</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">
                      CVE-2026-25631
                    </td>
                    <td className="px-4 py-3">Credential Domain</td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-yellow-600">5.3</span>
                    </td>
                    <td className="px-4 py-3">Improper Validation</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.Paragraph>
              Zwei Schwachstellen stechen heraus: Ni8mare und Expression
              Injection. Beide verdienen einen genaueren Blick.
            </Typo.Paragraph>

            <Typo.H3>Ni8mare (CVE-2026-21858) — der Albtraum</Typo.H3>
            <Typo.Paragraph>
              CVSS 10.0. Unauthenticated. Remote Code Execution. Das ist die
              schlimmstmögliche Kombination.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wie funktioniert der Angriff? n8n hat einen Webhook-Handler, der
              Formulardaten entgegennimmt. Normalerweise erwartet er
              Multipart-Form-Data (also Datei-Uploads). Der Bug: Der Handler
              prüft den Content-Type nicht richtig. Schickt ein Angreifer
              stattdessen JSON mit einem manipulierten{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                files
              </code>
              -Objekt, ruft n8n{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                parseBody()
              </code>{" "}
              statt{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                parseFormData()
              </code>{" "}
              auf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das klingt harmlos. Ist es nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Über das manipulierte{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                files
              </code>
              -Objekt kann der Angreifer beliebige lokale Dateien lesen. Damit
              kommt er an den{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_ENCRYPTION_KEY
              </code>{" "}
              und die Session-Cookies. Mit dem Encryption Key entschlüsselt er
              alle gespeicherten Credentials. Mit den Session-Cookies fälscht er
              eine Admin-Sitzung. Und von dort ist es ein kurzer Weg zur
              Code-Ausführung auf dem Server.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Voraussetzung:</strong> Es muss mindestens ein Workflow mit
              einer öffentlich zugänglichen Form-Component existieren. In der
              Praxis ist das bei vielen Instanzen der Fall, weil n8n-Forms ein
              populäres Feature sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Betroffene Versionen:</strong> Alles vor 1.121.0. Der Fix
              kam am 18. November 2025 von Cyera Research Labs.
            </Typo.Paragraph>

            <Typo.H3>
              Expression Injection (CVE-2025-68613) — aktiv ausgenutzt
            </Typo.H3>
            <Typo.Paragraph>
              CVSS 9.9. Und anders als Ni8mare nicht nur Theorie, sondern{" "}
              <strong>aktiv in der Wildnis unterwegs</strong>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n evaluiert Expressions in Workflows, z.B.{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                {"{{ $json.name }}"}
              </code>
              . Diese Expressions laufen in einer Sandbox. Sollten sie
              zumindest. CVE-2025-68613 zeigt: Die Sandbox-Isolation ist
              unzureichend. Ein Benutzer mit Workflow-Bearbeitungsrechten kann
              speziell konstruierte Expressions erstellen, die aus der Sandbox
              ausbrechen und Befehle auf Betriebssystem-Ebene ausführen. Mit den
              Rechten des n8n-Prozesses.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ja, man braucht einen Account. Aber: Wenn Open Registration aktiv
              ist (was bei vielen Instanzen der Default ist), kann sich jeder
              einen Account erstellen. Und das Zerobot-Botnet macht genau das.
              Seit Januar 2026 scannt es das Internet nach n8n-Instanzen,
              registriert sich, erstellt einen bösartigen Workflow und übernimmt
              den Server.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die CISA hat reagiert: Aufnahme in den KEV-Katalog am 11. März
              2026. Patch-Deadline: 25. März 2026. Betroffen sind Versionen
              0.211.0 bis 1.122.0.
            </Typo.Paragraph>

            <Typo.H3>
              Die Sandbox-Problematik: N8scape und Python Escape
            </Typo.H3>
            <Typo.Paragraph>
              Zwei weitere CVEs drehen sich um dasselbe Grundproblem: n8ns
              Sandbox ist löchrig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>CVE-2025-68668 (N8scape, CVSS 9.9):</strong>{" "}
              Authentifizierte Benutzer können aus der JavaScript-Sandbox
              ausbrechen und beliebige Kommandos auf dem Host ausführen. Der Fix
              dafür ist die neue Task-Runner-Architektur in n8n v2.0, die
              Code-Ausführung in separate Container isoliert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>CVE-2026-25115 (Python Sandbox Escape, CVSS 9.4):</strong>{" "}
              Selbst mit aktivierten Task Runnern konnten Angreifer aus der
              Python-Sandbox ausbrechen. Das zeigt, dass die
              Task-Runner-Isolation allein nicht reicht. Ihr müsst die erlaubten
              Module explizit einschränken.
            </Typo.Paragraph>

            <Typo.H3>Sanitization Bypass: Wenn der Patch nicht hält</Typo.H3>
            <Typo.Paragraph>
              CVE-2026-25049 (CVSS 9.4) ist besonders ärgerlich. Es ist ein
              Bypass der Schutzmaßnahmen, die für CVE-2025-68613 implementiert
              wurden. Die erste Sanitisierung war unzureichend. n8n hat
              nachgebessert, aber das zeigt: Einmal patchen und vergessen
              funktioniert nicht. Ihr müsst am Ball bleiben.
            </Typo.Paragraph>

            <Typo.H3>Supply-Chain-Angriff: 8 bösartige Community Nodes</Typo.H3>
            <Typo.Paragraph>
              Im Januar 2026 deckten Sicherheitsforscher von Endor Labs einen
              Supply-Chain-Angriff auf das n8n-Ökosystem auf.{" "}
              <strong>8 bösartige npm-Pakete</strong> tarnten sich als Community
              Nodes, z.B. als Google-Ads-Integration.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was die Pakete machten: OAuth-Tokens stehlen. Im Hintergrund. Ohne
              dass ihr es merkt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Problem dahinter: Community Nodes laufen mit{" "}
              <strong>denselben Rechten wie n8n selbst</strong>. Sie haben
              Zugriff auf das Dateisystem, auf Umgebungsvariablen und auf alle
              entschlüsselten API-Keys. Wenn ihr ein bösartiges Paket
              installiert, hat der Angreifer alles.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Lehre: Installiert Community Nodes nur, wenn ihr sie wirklich
              braucht. Prüft jedes Paket manuell. Und wenn ihr sie gar nicht
              nutzt:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_COMMUNITY_PACKAGES_ENABLED=false
              </code>
              . Dann ist der Angriffsvektor komplett geschlossen.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>
                  Wenn eure n8n-Instanz auf einer Version vor 1.122.0 läuft,
                  seid ihr für mindestens drei dieser CVEs verwundbar. Wenn ihr
                  noch auf einer Version vor 2.0 seid, fehlt euch die
                  Task-Runner-Isolation. Und wenn ihr Community Nodes ohne Audit
                  installiert habt, wisst ihr nicht, was auf eurem Server läuft.
                </strong>
              </p>
            </div>
          </div>

          <Separator />

          {/* 3. Reverse Proxy, TLS und Netzwerk-Isolation */}
          <div>
            <Typo.H2 id="netzwerk-absichern">
              Reverse Proxy, TLS und Netzwerk-Isolation
            </Typo.H2>
            <Typo.Paragraph>
              Die Shodan-Scans zeigen es deutlich: Tausende n8n-Instanzen hängen
              direkt auf Port 5678 im Internet. Ohne Reverse Proxy, ohne TLS,
              ohne irgendwas dazwischen. Das ist, als würde man die Haustür
              offenlassen und sich wundern, dass jemand reinkommt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die gute Nachricht: Netzwerk-Absicherung ist kein Raketenwissen.
              Wenn ihr Docker und ein paar Basics kennt, kriegt ihr das an einem
              Nachmittag hin.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-sicherheit-self-hosting/netzwerk-architektur.png"
              alt="Netzwerk-Diagramm: Internet, Firewall, Reverse Proxy und internes Docker-Netzwerk mit n8n, PostgreSQL und Redis"
              width={1200}
              height={800}
            />

            <Typo.H3>Warum n8n nie direkt im Internet hängen darf</Typo.H3>
            <Typo.Paragraph>
              n8n ist eine interne Anwendung. Sie wurde dafür gebaut, Workflows
              zu automatisieren, nicht um als öffentlicher Webservice zu
              fungieren. Der eingebaute HTTP-Server hat keine Web Application
              Firewall, kein Rate Limiting und keine Security-Header. Und wie
              die CVE-Liste zeigt: Der Webhook-Handler ist der{" "}
              <strong>primäre Angriffsvektor</strong>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              CVE-2026-21858 (Ni8mare) funktioniert über einen manipulierten
              Request an einen Webhook-Endpoint. Wer n8n direkt ins Internet
              stellt, gibt Angreifern einen ungefilterten Kanal zu genau dieser
              Angriffsfläche.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Lösung: Einen Reverse Proxy davorsetzen.
            </Typo.Paragraph>

            <Typo.H3>Nginx oder Traefik als Reverse Proxy</Typo.H3>
            <Typo.Paragraph>
              Zwei Optionen, die sich in der Praxis bewährt haben:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nginx</strong> ist der Klassiker. Stabil, gut
              dokumentiert, riesige Community. Wenn ihr bereits Erfahrung mit
              Nginx habt, nehmt Nginx. Die Konfiguration ist straightforward:
              Proxy-Pass auf den n8n-Container, TLS-Terminierung,
              Security-Header, fertig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Traefik</strong> ist die Docker-native Alternative. Es
              erkennt Container automatisch über Labels und holt sich
              TLS-Zertifikate selbständig von Let&apos;s Encrypt. Weniger
              Konfiguration, dafür etwas mehr Abstraktion. Ideal, wenn euer
              ganzer Stack auf Docker Compose läuft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Egal welchen ihr nehmt: n8n lauscht intern auf Port 5678. Der
              Reverse Proxy lauscht auf 80 und 443. Und{" "}
              <strong>nur</strong> der Reverse Proxy ist von außen erreichbar.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtig: Konfiguriert den Proxy so, dass er
              WebSocket-Verbindungen durchreicht. n8n braucht WebSockets für den
              Editor. Ohne bekommt ihr Verbindungsabbrüche im UI.
            </Typo.Paragraph>

            <Typo.H3>TLS mit Let&apos;s Encrypt</Typo.H3>
            <Typo.Paragraph>
              Kein TLS bedeutet: Login-Daten, API-Responses und
              Webhook-Payloads fließen im Klartext übers Netz. Das ist 2026
              nicht mehr akzeptabel.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Let&apos;s Encrypt liefert kostenlose Zertifikate mit
              automatischer Erneuerung. Bei Nginx nutzt ihr Certbot. Bei Traefik
              ist Let&apos;s Encrypt eingebaut, ihr müsst nur den ACME-Resolver
              konfigurieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In n8n selbst setzt ihr die Environment Variable{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_PROTOCOL=https
              </code>{" "}
              und{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                WEBHOOK_URL=https://eure-domain.de
              </code>
              . Damit weiß n8n, dass es hinter TLS läuft und generiert korrekte
              Webhook-URLs.
            </Typo.Paragraph>
            <Typo.Paragraph>
              HTTP-Requests auf Port 80 sollten automatisch auf HTTPS (443)
              redirecten. Kein Nutzer und kein Webhook-Aufruf sollte jemals
              unverschlüsselt kommunizieren.
            </Typo.Paragraph>

            <Typo.H3>Security Headers</Typo.H3>
            <Typo.Paragraph>
              Euer Reverse Proxy sollte folgende Header setzen:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Strict-Transport-Security (HSTS):</strong> Zwingt Browser,
              nur HTTPS zu verwenden. Setzt{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                max-age
              </code>{" "}
              auf mindestens ein Jahr (31536000 Sekunden). Damit verhindert ihr
              Downgrade-Angriffe.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>X-Frame-Options: DENY:</strong> Verhindert, dass eure
              n8n-Instanz in einem iFrame eingebettet wird. Schützt vor
              Clickjacking.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>X-Content-Type-Options: nosniff:</strong> Verhindert
              MIME-Type-Sniffing. Besonders relevant bei n8n, weil
              CVE-2026-21858 genau auf Content-Type-Confusion basiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Content-Security-Policy:</strong> Schränkt ein, welche
              Ressourcen der Browser laden darf. Setzt mindestens{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                default-src &apos;self&apos;
              </code>{" "}
              als Baseline.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Diese Header kosten euch fünf Zeilen in der Nginx-Config und
              schließen ganze Angriffsklassen aus.
            </Typo.Paragraph>

            <Typo.H3>Firewall: Nur 80 und 443 nach außen</Typo.H3>
            <Typo.Paragraph>
              Euer Server sollte genau zwei Ports nach außen offen haben: 80
              (HTTP, für den Redirect) und 443 (HTTPS). Dazu SSH für die
              Administration, idealerweise auf einem Non-Standard-Port.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Alles andere ist intern. Port 5678 (n8n) ist nur über den Reverse
              Proxy erreichbar. Port 5432 (PostgreSQL) und Port 6379 (Redis)
              sind nur über das interne Docker-Netzwerk erreichbar.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mit{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                ufw
              </code>{" "}
              (Uncomplicated Firewall) auf Ubuntu:
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`ufw default deny incoming
ufw allow 22/tcp    # SSH (oder euren Custom-Port)
ufw allow 80/tcp    # HTTP Redirect
ufw allow 443/tcp   # HTTPS
ufw enable`}
              </code>
            </pre>

            <Typo.Paragraph>
              Das wars. Vier Befehle. Damit ist euer Server schon deutlich
              besser abgesichert als 90 Prozent der n8n-Instanzen da draußen.
            </Typo.Paragraph>

            <Typo.H3>
              PostgreSQL und Redis: Nur über private Docker-Netzwerke
            </Typo.H3>
            <Typo.Paragraph>
              In einer typischen n8n-Installation braucht ihr drei Container:
              n8n, PostgreSQL und Redis. Diese kommunizieren untereinander. Aber
              sie müssen <strong>nicht</strong> von außen erreichbar sein.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erstellt in Docker Compose ein internes Netzwerk. Verbindet alle
              drei Container damit. PostgreSQL und Redis bekommen{" "}
              <strong>keine</strong> Port-Mappings nach außen. Nur n8n
              kommuniziert mit dem Reverse Proxy.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Prinzip: Jeder Container kann nur das erreichen, was er zum
              Funktionieren braucht. PostgreSQL redet nur mit n8n. Redis redet
              nur mit n8n. Und n8n redet nur mit dem Reverse Proxy. Wenn ein
              Angreifer es irgendwie schafft, auf den Reverse Proxy zu kommen,
              steht er vor der nächsten Wand.
            </Typo.Paragraph>

            <Typo.H3>Webhook-Endpoints gezielt absichern</Typo.H3>
            <Typo.Paragraph>
              Webhooks sind das Tor zur Welt. Sie müssen von außen erreichbar
              sein, sonst funktionieren Integrationen nicht. Aber sie sind auch
              der Angriffsvektor Nr. 1.
            </Typo.Paragraph>
            <Typo.Paragraph>Was ihr tun könnt:</Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Separate Webhook-URL konfigurieren.</strong> n8n
              unterstützt{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                WEBHOOK_URL
              </code>{" "}
              als eigene Domain oder Subdomain. Damit könnt ihr Webhook-Traffic
              auf Proxy-Ebene anders behandeln als Editor-Traffic.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Rate Limiting.</strong> Konfiguriert in Nginx ein
              Request-Limit für Webhook-Endpoints. 10-20 Requests pro Sekunde
              pro IP reicht für die meisten Integrationen. Alles darüber ist
              entweder eine Fehlkonfiguration oder ein Angriff.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>IP-Allowlisting für bekannte Quellen.</strong> Wenn eure
              Webhooks nur von bestimmten Diensten aufgerufen werden (z.B.
              Shopify, HubSpot, Stripe), erlaubt nur deren IP-Ranges. Jeder
              andere Request wird vom Proxy geblockt, bevor er n8n erreicht.
            </Typo.Paragraph>

            <Typo.H3>Admin-UI: Nicht ins Internet</Typo.H3>
            <Typo.Paragraph>
              Der n8n-Editor ist euer Admin-Panel. Er gehört nicht ins
              öffentliche Internet. Punkt.
            </Typo.Paragraph>
            <Typo.Paragraph>Zwei Optionen:</Typo.Paragraph>
            <Typo.Paragraph>
              <strong>VPN-Zugang.</strong> Die Admin-UI ist nur über VPN
              erreichbar. WireGuard ist schlank und schnell eingerichtet. Damit
              ist die gesamte Angriffsfläche auf Webhook-Endpoints reduziert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>IP-Allowlisting.</strong> Wenn VPN zu aufwändig ist:
              Erlaubt den Zugriff auf die Admin-UI nur von bestimmten
              IP-Adressen. Eurem Büro-Netzwerk, eurer festen IP. Alle anderen
              sehen eine 403-Seite.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beide Ansätze verhindern, dass Angreifer überhaupt den
              Login-Screen sehen. Kein Login-Screen bedeutet kein Brute-Force,
              kein Credential Stuffing und keine Ausnutzung von
              Authentifizierungs-Schwachstellen.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>
                  Reverse Proxy, TLS, Firewall, interne Netzwerke,
                  Webhook-Absicherung, Admin-UI verstecken. Das sind sechs
                  Maßnahmen. Keine davon ist komplex. Zusammen schließen sie die
                  häufigsten Angriffsvektoren.
                </strong>
              </p>
            </div>
          </div>

          <Separator />

          {/* 4. Authentifizierung, Secrets und Docker-Hardening */}
          <div>
            <Typo.H2 id="auth-secrets-docker">
              Authentifizierung, Secrets und Docker-Hardening
            </Typo.H2>
            <Typo.Paragraph>
              Netzwerk steht, Reverse Proxy läuft, TLS ist aktiv. Jetzt geht es
              an die nächste Schicht: Wer darf rein, wie werden eure Secrets
              geschützt und wie härtet ihr den Docker-Container ab.
            </Typo.Paragraph>

            <Typo.H3>
              Der Encryption Key — das wichtigste Secret eurer Instanz
            </Typo.H3>
            <Typo.Paragraph>
              n8n speichert alle Credentials — API-Keys, OAuth-Tokens,
              Datenbankpasswörter — in der PostgreSQL-Datenbank. Verschlüsselt.
              Aber nur, wenn ihr den{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_ENCRYPTION_KEY
              </code>{" "}
              gesetzt habt.
            </Typo.Paragraph>
            <Typo.Paragraph>Ohne diesen Key? Klartext. Alles.</Typo.Paragraph>
            <Typo.Paragraph>
              Jeder, der Zugriff auf eure Datenbank bekommt, liest eure
              API-Keys wie eine Einkaufsliste. Bei einem RCE-Exploit wie
              Ni8mare (CVSS 10.0) ist genau das das Szenario: Der Angreifer
              liest den Encryption Key aus dem Dateisystem, entschlüsselt alle
              Credentials und hat Zugriff auf jedes System, das ihr über n8n
              angebunden habt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              So setzt ihr den Key richtig:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Mindestens 32 Zeichen, zufällig generiert.
              </strong>{" "}
              Kein Passwort, das ihr euch merken könnt. Kein Firmenname mit ein
              paar Sonderzeichen. Ein richtiger Zufallsstring:
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>openssl rand -hex 32</code>
            </pre>

            <Typo.Paragraph>
              <strong>Außerhalb des Containers sichern.</strong> Wenn der
              Container stirbt und der Key weg ist, sind alle gespeicherten
              Credentials verloren. Unwiderruflich. Speichert den Key in eurem
              Passwort-Manager, in einem externen Secrets Manager (HashiCorp
              Vault, AWS Secrets Manager) oder mindestens in einer{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                .env
              </code>
              -Datei außerhalb der Versionskontrolle.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Und dann sperrt den Zugriff auf Umgebungsvariablen:
              </strong>
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>N8N_BLOCK_ENV_ACCESS_IN_NODE=true</code>
            </pre>

            <Typo.Paragraph>
              Ohne diese Einstellung können Workflows eure
              Server-Umgebungsvariablen lesen. Inklusive des Encryption Keys.
              Das heißt: Ein einziger kompromittierter Workflow reicht, um alle
              Secrets eurer Instanz abzugreifen.
            </Typo.Paragraph>

            <Typo.H3>MFA und SSO — kein optionaler Luxus</Typo.H3>
            <Typo.Paragraph>
              Multi-Faktor-Authentifizierung für alle Accounts. Keine Ausnahmen.
              Wenn ein Angreifer ein Passwort erbeutet (Phishing, Credential
              Stuffing, Leak), ist MFA die letzte Verteidigungslinie.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Teams ab 5 Personen lohnt sich SSO über OIDC oder SAML.
              Keycloak, Okta, Auth0 — egal welcher Provider, Hauptsache
              zentrale Benutzerverwaltung. Damit könnt ihr Mitarbeiter sofort
              sperren, wenn sie das Unternehmen verlassen. Ohne SSO müsst ihr
              jeden n8n-Account einzeln deaktivieren und hoffen, dass ihr keinen
              vergessen habt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Open Registration deaktivieren.</strong> Das ist eine der
              am häufigsten übersehenen Einstellungen. Wenn Open Registration
              aktiv ist, kann sich jeder einen Account auf eurer Instanz
              erstellen. Über 100.000 n8n-Instanzen sind öffentlich im Internet
              erreichbar — viele davon mit offener Registrierung. Ein Geschenk
              für Angreifer.
            </Typo.Paragraph>

            <Typo.H3>
              Docker-Hardening: Die Container-Ebene absichern
            </Typo.H3>
            <Typo.Paragraph>
              Docker gibt euch Isolation. Aber nur, wenn ihr sie auch nutzt. Die
              meisten Docker-Compose-Files, die man online findet, laufen mit
              Standardeinstellungen. Das reicht nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Kein{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  --privileged
                </code>
                .
              </strong>{" "}
              Nie. Ein privilegierter Container hat praktisch Root-Zugriff auf
              den Host. Wenn ein Angreifer über einen RCE-Exploit in den
              Container kommt, kommt er auch auf den Host.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Security Options setzen:</strong>
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`security_opt:
  - no-new-privileges:true
cap_drop:
  - ALL`}
              </code>
            </pre>

            <Typo.Paragraph>
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                no-new-privileges
              </code>{" "}
              verhindert, dass Prozesse im Container ihre Rechte eskalieren
              können.{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                cap_drop: ALL
              </code>{" "}
              entfernt alle Linux-Capabilities. n8n braucht keine davon.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Image-Version pinnen.</strong> Nicht{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                :latest
              </code>{" "}
              verwenden. Pinnt auf eine konkrete Version wie{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                n8nio/n8n:1.121.3
              </code>
              . Damit habt ihr zwei Vorteile: Ihr wisst genau, welche Version
              läuft, und ihr könnt bei Problemen sofort auf die vorherige
              Version zurückrollen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Container-Images scannen.</strong> Tools wie Trivy oder
              Snyk prüfen eure Images auf bekannte Schwachstellen in den
              enthaltenen Paketen. Ein Scan pro Deployment kostet 30 Sekunden
              und kann euch vor einer bekannten Lücke in einer Abhängigkeit
              warnen.
            </Typo.Paragraph>

            <Typo.H3>Task Runners: Code-Ausführung isolieren</Typo.H3>
            <Typo.Paragraph>
              Ab n8n v2.0 gibt es Task Runners. Die führen JavaScript- und
              Python-Code aus Workflows in einem separaten Prozess aus, statt
              direkt im n8n-Hauptprozess.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nutzt den externen Modus.</strong> Der interne Modus ist
              bequemer, aber ein Sicherheitsrisiko. Im externen Modus läuft der
              Task Runner als eigener Container mit eingeschränkten Rechten.
              Selbst wenn ein Angreifer aus der Sandbox ausbricht (wie bei
              CVE-2025-68668, CVSS 9.9), landet er im isolierten
              Runner-Container statt im Haupt-n8n-Prozess.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schränkt die erlaubten Module explizit ein über{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                NODE_FUNCTION_ALLOW_BUILTIN
              </code>{" "}
              und{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                NODE_FUNCTION_ALLOW_EXTERNAL
              </code>
              . Nur das freigeben, was eure Workflows tatsächlich brauchen.
            </Typo.Paragraph>

            <Typo.H3>Community Nodes: Supply-Chain-Risiko Nr. 1</Typo.H3>
            <Typo.Paragraph>
              Community Nodes sind mächtig. Sie erweitern n8n um hunderte
              Integrationen. Aber sie laufen mit denselben Rechten wie n8n
              selbst: Zugriff auf Dateisystem, Umgebungsvariablen,
              entschlüsselte API-Keys.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Januar 2026 wurden 8 bösartige npm-Pakete entdeckt, die sich
              als n8n-Integrationen tarnten, zum Beispiel für Google Ads. Sie
              stahlen OAuth-Tokens und leiteten sie an externe Server weiter.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn ihr Community Nodes nicht braucht:
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>N8N_COMMUNITY_PACKAGES_ENABLED=false</code>
            </pre>

            <Typo.Paragraph>
              Wenn ihr sie braucht: Jedes Paket vor der Installation manuell
              auditieren. Prüft den Paketnamen, den Autor, die Download-Zahlen
              und am besten den Quellcode. Installiert nichts, was weniger als
              ein paar hundert wöchentliche Downloads hat. Und installiert nie
              ein Paket, das erst vor wenigen Tagen veröffentlicht wurde — genau
              so funktionierten die bösartigen Pakete im Januar.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 5. DSGVO-Compliance beim Self-Hosting */}
          <div>
            <Typo.H2 id="dsgvo-compliance">
              DSGVO-Compliance beim Self-Hosting
            </Typo.H2>
            <Typo.Paragraph>
              Self-Hosting klingt erstmal nach maximaler Kontrolle. Eigener
              Server, eigene Daten, kein Cloud-Anbieter, der mitlesen kann.
              Stimmt alles. Aber es bedeutet auch: Ihr seid der
              Verantwortliche. Nicht n8n. Nicht euer Hosting-Provider. Ihr.
            </Typo.Paragraph>

            <Typo.H3>Ihr seid der Data Controller</Typo.H3>
            <Typo.Paragraph>
              Im DSGVO-Deutsch: Ihr seid der &bdquo;Verantwortliche&ldquo; nach
              Art. 4 Nr. 7 DSGVO. Das heißt, ihr entscheidet, welche
              personenbezogenen Daten verarbeitet werden und warum. Und ihr
              haftet, wenn etwas schiefgeht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei der n8n-Cloud wäre n8n als Auftragsverarbeiter mit in der
              Pflicht. Beim Self-Hosting tragt ihr alles allein.
              Datensicherheit, Löschpflichten, Auskunftsrechte, Meldepflichten.
              Alles eure Baustelle.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist kein Argument gegen Self-Hosting. Es ist ein Argument
              dafür, es richtig zu machen.
            </Typo.Paragraph>

            <Typo.H3>
              Art. 32: Technische und organisatorische Maßnahmen
            </Typo.H3>
            <Typo.Paragraph>
              Die DSGVO verlangt in Art. 32 &bdquo;geeignete technische und
              organisatorische Maßnahmen&ldquo;. Was heißt das konkret für eure
              n8n-Instanz?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Verschlüsselung.</strong> TLS für alle Daten in Transit.
              Den{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                N8N_ENCRYPTION_KEY
              </code>{" "}
              für Credentials at Rest. Ohne beides habt ihr eine offene Flanke,
              die jeder Auditor sofort bemängelt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zugangskontrolle.</strong> MFA für alle Benutzer. SSO über
              OIDC oder SAML für zentrale Verwaltung. Rollenbasierte Zugriffe,
              damit nicht jeder Mitarbeiter jeden Workflow bearbeiten kann. Der
              Praktikant braucht keinen Zugriff auf den Workflow, der eure
              Kundendatenbank mit dem CRM synchronisiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Pseudonymisierung.</strong> Execution-Daten enthalten oft
              personenbezogene Daten im Klartext: E-Mail-Adressen, Namen,
              Bestellnummern. Alles, was durch eure Workflows fließt, landet in
              den Execution Logs. Pruned die regelmäßig (dazu gleich mehr).
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Vertraulichkeit.</strong> Netzwerk-Isolation, Firewall, VPN
              für den Admin-Zugang. Alles, was in den vorherigen Kapiteln steht,
              ist gleichzeitig eure DSGVO-Pflicht.
            </Typo.Paragraph>

            <Typo.H3>AVV mit jedem Drittdienst</Typo.H3>
            <Typo.Paragraph>
              Jede API, die ihr über n8n anbindet, verarbeitet möglicherweise
              personenbezogene Daten. CRM, E-Mail-Provider,
              Buchhaltungssoftware, Ticketsystem. Für jeden dieser Dienste
              braucht ihr einen Auftragsverarbeitungsvertrag (AVV/DPA).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das vergessen viele. n8n ist nur die Drehscheibe. Aber über diese
              Drehscheibe laufen Kundennamen, E-Mail-Adressen, Bestelldaten,
              Mitarbeiterdaten. Jeder Workflow, der diese Daten an einen externen
              Service schickt, ist eine Datenverarbeitung im Sinne der DSGVO.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erstellt eine Liste aller Services, die eure n8n-Workflows nutzen.
              Prüft für jeden, ob ein AVV existiert. Wenn nicht, schließt einen
              ab.
            </Typo.Paragraph>

            <Typo.H3>Verarbeitungsverzeichnis und DSFA</Typo.H3>
            <Typo.Paragraph>
              Art. 30 DSGVO verlangt ein Verarbeitungsverzeichnis. Für n8n heißt
              das: Dokumentiert, welche Workflows personenbezogene Daten
              verarbeiten, welche Datenkategorien betroffen sind und auf welcher
              Rechtsgrundlage die Verarbeitung stattfindet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Klingt nach Bürokratie. Ist es auch. Aber im Ernstfall ist es der
              Unterschied zwischen &bdquo;wir hatten alles dokumentiert&ldquo;
              und &bdquo;wir haben keine Ahnung, was unsere Workflows mit den
              Daten machen&ldquo;.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei automatisierter Verarbeitung in großem Umfang ist außerdem
              eine Datenschutz-Folgenabschätzung (DSFA) erforderlich. Wenn eure
              n8n-Instanz täglich tausende Kundendatensätze durch Workflows
              schleust, fallt ihr da rein.
            </Typo.Paragraph>

            <Typo.H3>72 Stunden: Die Meldepflicht bei einem Breach</Typo.H3>
            <Typo.Paragraph>
              Art. 33 DSGVO: Bei einer Datenschutzverletzung müsst ihr innerhalb
              von 72 Stunden die zuständige Aufsichtsbehörde informieren. 72
              Stunden ab dem Zeitpunkt, an dem ihr die Verletzung bemerkt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei den n8n-Exploits, die wir in den vorherigen Kapiteln
              besprochen haben, ist das keine theoretische Übung. Ni8mare (CVSS
              10.0) erlaubt unauthentifizierte Remote Code Execution. Ein
              Angreifer kann alle gespeicherten Credentials auslesen. Wenn
              darunter API-Keys zu Systemen mit personenbezogenen Daten sind,
              habt ihr einen meldepflichtigen Breach.
            </Typo.Paragraph>
            <Typo.Paragraph>
              72 Stunden sind nicht viel. Ihr braucht einen
              Incident-Response-Plan, bevor es soweit ist. Wer wird informiert
              (Eskalationskette)? Wer entscheidet, ob gemeldet wird? Wer
              schreibt die Meldung? Das sind Fragen, die ihr nicht um 3 Uhr
              morgens zum ersten Mal beantworten wollt.
            </Typo.Paragraph>

            <Typo.H3>Execution-Daten: Prunen ist Pflicht</Typo.H3>
            <Typo.Paragraph>
              n8n speichert standardmäßig alle Execution-Daten. Jeder
              Workflow-Durchlauf mit allen Input- und Output-Daten. Das können
              Kundennamen, Adressen, Bestellungen sein. Alles im Klartext in
              der Datenbank.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Aktiviert das automatische Pruning:
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`EXECUTIONS_DATA_PRUNE=true
EXECUTIONS_DATA_MAX_AGE=168  # 7 Tage in Stunden`}
              </code>
            </pre>

            <Typo.Paragraph>
              Setzt{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                EXECUTIONS_DATA_MAX_AGE
              </code>{" "}
              so niedrig wie möglich. 7 Tage reichen für Debugging. Alles
              darüber hinaus ist ein DSGVO-Risiko, das ihr nicht braucht.
            </Typo.Paragraph>

            <Typo.H3>EU-Hosting: Kein Datentransfer in Drittländer</Typo.H3>
            <Typo.Paragraph>
              Selbst gehostet auf einem Server in der EU bedeutet: Keine
              Datenübertragung in Drittländer. Zumindest nicht durch eure
              Infrastruktur. Hetzner, IONOS, OVH — egal welcher Anbieter,
              Hauptsache Rechenzentrum in der EU.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Aber Vorsicht: Eure Workflows können trotzdem Daten in
              Drittländer schicken. Jede Cloud-API, die ihr über n8n nutzt, ob
              OpenAI, Google Sheets, Slack oder HubSpot, kann Daten auf Servern
              außerhalb der EU verarbeiten. Das ist dann ein Drittlandtransfer,
              der eine Rechtsgrundlage braucht (meistens
              Standardvertragsklauseln).
            </Typo.Paragraph>

            <Typo.H3>NIS2: Wer darunter fällt, muss handeln</Typo.H3>
            <Typo.Paragraph>
              Kurz noch ein Blick auf NIS2. Seit Oktober 2024 gelten EU-weit
              verschärfte Anforderungen an die IT-Sicherheit für Unternehmen in
              kritischen Sektoren. Wenn ihr unter NIS2 fallt — Energie,
              Transport, Gesundheit, digitale Infrastruktur, Lebensmittel,
              Chemie und einige mehr — dann ist eure n8n-Instanz Teil der
              kritischen IT-Infrastruktur.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das heißt: Patch-Management, Incident Response und
              Supply-Chain-Sicherheit (ja, die Community Nodes mit den 8
              bösartigen Paketen) sind nicht nur Best Practice, sondern
              gesetzliche Pflicht. Mit Bußgeldern, die deutlich über die DSGVO
              hinausgehen können.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 6. Update-Strategie, Backup und Monitoring */}
          <div>
            <Typo.H2 id="updates-backup-monitoring">
              Update-Strategie, Backup und Monitoring
            </Typo.H2>
            <Typo.Paragraph>
              7 kritische CVEs in 5 Monaten. Alle mit CVSS-Scores zwischen 9.4
              und 10.0. Ein aktives Botnet, das eine davon ausnutzt. CISA hat
              eine Deadline gesetzt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Updates sind nicht optional. Sie sind Überlebensstrategie.
            </Typo.Paragraph>

            <Typo.H3>Warum Updates jetzt oberste Priorität haben</Typo.H3>
            <Typo.Paragraph>
              Zwischen November 2025 und März 2026 ist n8n zum
              meistangegriffenen Workflow-Automation-Tool geworden. Ni8mare
              (CVSS 10.0), Expression Injection (CVSS 9.9), N8scape Sandbox
              Bypass (CVSS 9.9), File Upload RCE (CVSS 10.0) — die Liste hört
              nicht auf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Zerobot-Botnet nutzt CVE-2025-68613 seit Januar 2026 aktiv
              aus. Vollautomatisch. CISA hat die Schwachstelle am 11. März 2026
              in den Known Exploited Vulnerabilities Katalog aufgenommen, mit
              Deadline 25. März. Im Februar 2026 waren noch über 24.700
              ungepatchte Instanzen online.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer n8n betreibt und nicht regelmäßig aktualisiert, betreibt eine
              Zeitbombe.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-sicherheit-self-hosting/monitoring.png"
              alt="Update- und Monitoring-Strategie für n8n Self-Hosting"
              width={1200}
              height={800}
            />

            <Typo.H3>
              Der Update-Prozess: Backup, Staging, Produktion
            </Typo.H3>
            <Typo.Paragraph>
              Updates einfach blind einspielen ist auch keine Lösung.
              n8n-Updates können Breaking Changes enthalten, Workflows können
              sich anders verhalten, Nodes können sich ändern. Deshalb: Ein
              strukturierter Prozess.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 1: Backup erstellen.</strong> Bevor ihr irgendetwas
              anfasst. Datenbank-Dump, n8n-Datenvolume, Encryption Key. Alles.
              Details dazu im nächsten Abschnitt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 2: In Staging testen.</strong> Spielt das Update
              auf einer Kopie eurer Instanz ein. Prüft, ob eure wichtigsten
              Workflows noch funktionieren. Laufen die Trigger? Kommen die
              richtigen Daten raus? Gibt es Fehlermeldungen in den Logs?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 3: Produktion deployen.</strong> Wenn Staging
              sauber läuft, geht ihr auf Produktion. Idealerweise in einem
              Wartungsfenster, damit niemand gerade einen kritischen Workflow
              ausführt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Docker-Image-Version pinnen.</strong> Nutzt immer eine
              konkrete Version wie{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                n8nio/n8n:1.121.3
              </code>{" "}
              statt{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                :latest
              </code>
              . Damit könnt ihr bei Problemen sofort zurückrollen, indem ihr
              einfach die alte Version wieder startet.
            </Typo.Paragraph>

            <Typo.H3>CISA KEV und Security Advisories abonnieren</Typo.H3>
            <Typo.Paragraph>
              Ihr müsst nicht jeden Tag die CVE-Datenbank durchsuchen. Aber ihr
              solltet informiert werden, wenn es brennt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                CISA Known Exploited Vulnerabilities (KEV):
              </strong>{" "}
              Der Katalog listet Schwachstellen, die aktiv ausgenutzt werden.
              Wenn eine n8n-CVE dort auftaucht, ist Handeln sofort nötig, nicht
              nächste Woche.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>n8n Security Advisories:</strong> Die n8n-Docs haben eine
              eigene Security-Seite. Abonniert die Release Notes und prüft bei
              jedem Update die Changelog-Einträge unter
              &bdquo;Security&ldquo;.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>GitHub Watch:</strong> Setzt das n8n-Repository auf
              &bdquo;Watch&ldquo; und filtert auf Releases. Damit bekommt ihr
              eine E-Mail bei jeder neuen Version.
            </Typo.Paragraph>

            <Typo.H3>Backup-Strategie: Was, wie oft, wohin</Typo.H3>
            <Typo.Paragraph>
              Ein Backup, das ihr nie getestet habt, ist kein Backup. Es ist
              ein Hoffnungsschimmer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Was sichern:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>PostgreSQL-Datenbank:</strong> Enthält alle Workflows,
                Credentials (verschlüsselt), Execution-Daten und
                Benutzer-Accounts. Ein{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  pg_dump
                </code>{" "}
                pro Tag ist das Minimum.
              </li>
              <li>
                <strong>n8n-Datenvolume:</strong> Das{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  /home/node/.n8n
                </code>
                -Verzeichnis enthält Konfigurationsdateien und ggf. lokale
                Daten.
              </li>
              <li>
                <strong>Encryption Key:</strong> Separat und sicher. Nicht im
                selben Backup wie die Datenbank. Wenn beides zusammen
                kompromittiert wird, kann ein Angreifer alle Credentials
                entschlüsseln.
              </li>
            </ul>
            <Typo.Paragraph>
              <strong>Wie oft:</strong> Tägliches Datenbank-Backup als Minimum.
              Bei hohem Durchsatz öfter. Der Encryption Key ändert sich nicht,
              der muss nur einmal sicher abgelegt werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Wohin:</strong> Nicht auf demselben Server. Wenn der Server
              kompromittiert wird, sind die Backups gleich mit weg. Externer
              Storage, verschlüsselt, idealerweise in einer anderen Availability
              Zone oder einem anderen Rechenzentrum.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Restore testen.</strong> Mindestens einmal pro Quartal.
              Nehmt euer Backup, spielt es auf einer frischen Instanz ein und
              prüft, ob alles funktioniert. Workflows, Credentials, Benutzer.
              Wenn ihr den Restore erst im Ernstfall zum ersten Mal macht,
              werdet ihr Überraschungen erleben.
            </Typo.Paragraph>

            <Typo.H3>Security Audit CLI nutzen</Typo.H3>
            <Typo.Paragraph>
              n8n bringt ein eingebautes Security-Audit-Tool mit. Es prüft eure
              Instanz auf häufige Konfigurationsfehler: unsichere Credentials,
              problematische Nodes, Datenbank-Einstellungen,
              Dateisystem-Berechtigungen und Instanz-Konfiguration.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Führt den Audit regelmäßig aus. Idealerweise automatisiert als
              Teil eurer CI/CD-Pipeline oder als Cron-Job. Die Ergebnisse geben
              euch einen schnellen Überblick, ob sich seit dem letzten Check
              etwas verschlechtert hat.
            </Typo.Paragraph>

            <Typo.H3>Logging und Audit-Trail</Typo.H3>
            <Typo.Paragraph>
              Standardmäßig loggt n8n auf die Konsole. Das reicht nicht, wenn
              ihr nachvollziehen müsst, was vor drei Wochen passiert ist.
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`N8N_LOG_OUTPUT=console,file
N8N_LOG_LEVEL=info`}
              </code>
            </pre>

            <Typo.Paragraph>
              Damit schreibt n8n Logs sowohl auf die Konsole als auch in eine
              Datei. Für Sicherheits-Audits und DSGVO-Compliance braucht ihr
              einen persistenten Audit-Trail.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Aufbewahrung: Mindestens 12 Monate.</strong> Die letzten 3
              Monate sollten sofort verfügbar sein (für schnelle
              Incident-Analyse), ältere Logs können in kaltem Storage liegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Execution-Daten prunen.</strong> Wie im DSGVO-Kapitel
              beschrieben:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                EXECUTIONS_DATA_PRUNE=true
              </code>{" "}
              aktivieren und{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                EXECUTIONS_DATA_MAX_AGE
              </code>{" "}
              so niedrig wie möglich setzen. Execution-Daten sind etwas anderes
              als Audit-Logs. Die Logs sagen euch, wer wann was getan hat. Die
              Execution-Daten enthalten die tatsächlichen Workflow-Daten mit
              potenziell personenbezogenen Informationen.
            </Typo.Paragraph>

            <Typo.H3>Incident-Response-Plan</Typo.H3>
            <Typo.Paragraph>
              Wenn es knallt, zählt jede Minute. Spätestens seit der
              72-Stunden-Meldepflicht der DSGVO ist ein Incident-Response-Plan
              kein Nice-to-have mehr.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was gehört rein: Wer wird informiert (Eskalationskette)? Wie wird
              die Instanz isoliert? Wie werden Credentials rotiert? Wer
              entscheidet, ob die Aufsichtsbehörde informiert wird? Wo liegt das
              Backup für den Restore?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das alles muss dokumentiert und bekannt sein. Nicht in einem Wiki,
              das niemand liest. In einem Dokument, das die zuständigen Personen
              kennen und das regelmäßig geprüft wird.
            </Typo.Paragraph>

            <Typo.H3>Hardening-Checkliste: 10 Punkte</Typo.H3>
            <Typo.Paragraph>
              Zum Abschluss die kompakte Übersicht. Wenn ihr diese 10 Punkte
              umsetzt, seid ihr besser aufgestellt als die Mehrheit der über
              100.000 exponierten n8n-Instanzen:
            </Typo.Paragraph>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>
                <strong>Reverse Proxy mit TLS</strong> — n8n nie direkt auf Port
                5678 exponieren
              </li>
              <li>
                <strong>Firewall</strong> — nur 80/443 nach außen, PostgreSQL
                und Redis nur intern
              </li>
              <li>
                <strong>
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                    N8N_ENCRYPTION_KEY
                  </code>
                </strong>{" "}
                — mindestens 32 Zeichen, zufällig, extern gesichert
              </li>
              <li>
                <strong>
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                    N8N_BLOCK_ENV_ACCESS_IN_NODE=true
                  </code>
                </strong>{" "}
                — Workflows dürfen keine Umgebungsvariablen lesen
              </li>
              <li>
                <strong>MFA + SSO</strong> — für alle Benutzer, Open
                Registration deaktivieren
              </li>
              <li>
                <strong>Docker-Hardening</strong> — no-new-privileges, cap_drop
                ALL, Image-Version pinnen
              </li>
              <li>
                <strong>Task Runners im externen Modus</strong> —
                Code-Ausführung isolieren
              </li>
              <li>
                <strong>
                  Community Nodes deaktivieren oder auditieren
                </strong>{" "}
                — Supply-Chain-Risiko minimieren
              </li>
              <li>
                <strong>Automatisches Pruning</strong> —{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  EXECUTIONS_DATA_PRUNE=true
                </code>
                ,{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                  MAX_AGE
                </code>{" "}
                niedrig setzen
              </li>
              <li>
                <strong>Update-Prozess etablieren</strong> — CISA KEV
                abonnieren, Backup, Staging, Produktion
              </li>
            </ol>
          </div>

          <Separator />

          {/* CTA Section */}
          <div>
            <Typo.H2 id="unterstuetzung">
              Braucht ihr Unterstützung?
            </Typo.H2>
            <Typo.Paragraph>
              Wir prüfen eure n8n-Instanz auf die häufigsten Schwachstellen und
              zeigen euch, wo ihr nachbessern müsst. Konfiguration, Netzwerk,
              DSGVO — alles in einem Check.
            </Typo.Paragraph>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>
                  <a
                    href="https://bluebatch.de/kontakt"
                    className="text-primary-700 underline hover:text-primary-900"
                  >
                    Kostenloses Sicherheits-Audit anfragen
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="warum-jetzt">
            Warum n8n-Sicherheit jetzt Top-Priorität ist
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="cve-ueberblick">
            Die 7 kritischen Schwachstellen im Detail
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="netzwerk-absichern">
            Reverse Proxy, TLS und Netzwerk-Isolation
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="auth-secrets-docker">
            Authentifizierung, Secrets und Docker-Hardening
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo-compliance">
            DSGVO-Compliance beim Self-Hosting
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="updates-backup-monitoring">
            Update-Strategie, Backup und Monitoring
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="unterstuetzung">
            Braucht ihr Unterstützung?
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
