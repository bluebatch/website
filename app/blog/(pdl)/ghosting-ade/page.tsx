import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import { redirect } from "next/navigation";
import Typo from "@/components/ui/typo";
import { Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ghosting-ade",
  author: "Markus Mosch",
  date: "2026-06-02",
  image: "/images/automation-efficiency.jpg",
  tags: ["ki", "automatisierung", "personaldienstleister", "recruiting", "n8n"] as BlogTagId[],
  publish: false,
};

export const metadata: Metadata = {
  title:
    "Ghosting adé — Wie automatisierte Kommunikation die Candidate Experience rettet | Bluebatch",
  description:
    "7 Tage ohne Rückmeldung steigern die Abbruchquote drastisch. Erfahren Sie, wie automatisierte Kommunikation die Candidate Experience verbessert.",
  openGraph: {
    title: "Ghosting adé — Automatisierte Kandidatenkommunikation",
    description:
      "Wie automatisierte Kommunikation die Candidate Experience rettet und Ghosting verhindert.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/blog/ghosting-ade",
  },
};

export default function Page() {
  if (!metaCustom.publish) redirect("/blog-workflow");
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Ghosting adé — Wie automatisierte Kommunikation die Candidate
          Experience rettet
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mm-small.png"
            linkedIn="https://www.linkedin.com/in/markus-mosch-32a4111a2/"
          >
            Markus Mosch
          </BlogHero.Author>
          <BlogHero.ReadTime>8 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-02">
            2. Juni 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/images/automation-efficiency.jpg"
          alt="Ghosting adé — Automatisierte Kandidatenkommunikation"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div className="prose prose-lg">
            <Typo.H2 id="das-stille-recruiting-problem">
              1. Das stille Recruiting-Problem: Ghosting von Kandidaten
            </Typo.H2>
            <Typo.Paragraph>
              Es gibt ein Phänomen im Recruiting, über das selten offen
              gesprochen wird: Bewerber, die sich ernsthaft um eine Stelle
              bemühen, erhalten wochen- oder monatelang keine Rückmeldung. Keine
              Absage. Keine Statusmeldung. Nichts.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das nennt man Kandidaten-Ghosting — und es ist weiter verbreitet,
              als die meisten Personaldienstleister zugeben würden. Nicht aus
              Böswilligkeit, sondern aus schlichtem Kapazitätsmangel.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Problem ist: Kandidaten merken es. Und sie reden darüber.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="7-tage-ohne-rueckmeldung">
              2. 7 Tage ohne Rückmeldung: Was das mit deinem Employer Branding
              macht
            </Typo.H2>
            <Typo.Paragraph>
              Untersuchungen zeigen: Wenn Kandidaten länger als{" "}
              <strong>sieben Tage ohne Rückmeldung</strong> bleiben, steigt die
              Abbruchquote drastisch. Sie ziehen andere Angebote vor, verlieren
              das Vertrauen in den Prozess — und bewerten das Unternehmen im
              Zweifelsfall negativ auf Plattformen wie Kununu oder Google.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Personaldienstleister ist das doppelt problematisch: Du
              schadest nicht nur deinem eigenen Ruf, sondern auch dem deines
              Kunden. Und in einem Markt, in dem Kandidaten oft mehrere Optionen
              gleichzeitig haben, ist eine schlechte Candidate Experience ein
              direkter Wettbewerbsnachteil.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="warum-kommunikationsstaus-entstehen">
              3. Warum Kommunikationsstaus strukturell entstehen
            </Typo.H2>
            <Typo.Paragraph>
              Das Problem sitzt nicht beim einzelnen Recruiter. Es sitzt im
              System:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Kein automatisches Benachrichtigungssystem:</strong> Wenn
              Kandidatenstatus-Updates manuell versendet werden müssen, werden
              sie vergessen — besonders in stressigen Hochphasen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Keine definierten Kommunikationsstandards:</strong> Wann
              bekommt ein Kandidat welche Nachricht? Das ist in den wenigsten
              Teams schriftlich definiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zu hohe Individualisierung:</strong> Der Wunsch, jede
              Nachricht persönlich zu schreiben, führt dazu, dass gar keine
              Nachricht verschickt wird. Dabei würde schon eine kurze,
              automatische Statusmeldung das Vertrauen des Kandidaten erhalten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-n8n-workflows">
              4. Drei n8n-Workflows für durchgängige Kandidatenkommunikation
            </Typo.H2>

            <Typo.H3>
              Workflow 1: Automatische Statusbenachrichtigungen bei
              Prozessfortschritt
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Statusänderung eines Kandidaten im
                ATS
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatischer Versand einer
                personalisierten Statusnachricht per E-Mail oder WhatsApp; Ton
                und Inhalt je Phase angepasst
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Kein Kandidat bleibt unbeantwortet;
                professionelle Kommunikation ohne manuellen Aufwand
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>
              Workflow 2: Proaktive &quot;Wir haben dich nicht
              vergessen&quot;-Nachricht
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Kandidat hat seit mehr als 5 Tagen
                keine Statusaktualisierung erhalten
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatische, freundliche
                Zwischennachricht; gleichzeitig interne Erinnerung an den
                verantwortlichen Recruiter
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Abbruchquote sinkt; Kandidat bleibt
                im Prozess und im guten Glauben
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>
              Workflow 3: Strukturiertes Feedback nach Absagen
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Kandidat erhält eine Absage
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatischer Versand einer
                wertschätzenden Absage mit optionalem Feedback-Formular; Angebot
                zur Aufnahme in den Talent-Pool
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Positiver letzter Eindruck; Aufbau
                eines wertvollen Kandidaten-Netzwerks
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="warum-n8n-funktioniert">
              5. Warum n8n für mittelständische Personaldienstleister
              funktioniert
            </Typo.H2>
            <Typo.Paragraph>
              Kommunikations-Workflows lassen sich in n8n besonders einfach
              abbilden, weil das Tool nahtlos mit E-Mail-Providern,
              CRM-Systemen und Messaging-Diensten wie WhatsApp Business
              verbunden werden kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Einmal konfiguriert, läuft die Kommunikation vollautomatisch —
              konsistent, DSGVO-konform und ohne zusätzlichen Personalaufwand.
              Die Nachrichten wirken persönlich, weil sie personalisierte
              Variablen nutzen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">6. Fazit: Wer kommuniziert, gewinnt</Typo.H2>
            <Typo.Paragraph>
              In einem Markt, in dem Kandidaten die Wahl haben, wird Candidate
              Experience zum entscheidenden Differenzierungsmerkmal. Wer seine
              Bewerber mit regelmäßiger, professioneller Kommunikation begleitet,
              gewinnt Vertrauen — und langfristig bessere Kandidaten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Beste daran: Diese Kommunikation muss nicht manuell passieren.
              Sie kann vollständig automatisiert werden, ohne unpersönlich zu
              wirken.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Möchtest du sehen, wie automatisierte Kandidatenkommunikation in
                der Praxis aussieht?
              </strong>{" "}
              Wir zeigen es dir in einem kostenfreien Erstgespräch.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="das-stille-recruiting-problem">
            Ghosting von Kandidaten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="7-tage-ohne-rueckmeldung">
            7 Tage ohne Rückmeldung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="warum-kommunikationsstaus-entstehen">
            Kommunikationsstaus
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="drei-n8n-workflows">
            Drei n8n-Workflows
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="warum-n8n-funktioniert">
            Warum n8n funktioniert
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
