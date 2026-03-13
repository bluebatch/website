import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import { redirect } from "next/navigation";
import Typo from "@/components/ui/typo";
import { Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "bias-Bauchgefuehl-burnout",
  author: "Markus Mosch",
  date: "2026-07-07",
  image: "/images/automation-efficiency.jpg",
  tags: ["ki", "automatisierung", "personaldienstleister", "recruiting", "n8n"] as BlogTagId[],
  publish: false,
};

export const metadata: Metadata = {
  title:
    "Bias, Bauchgefühl, Burnout — Wie strukturierte Prozesse im Recruiting zu besseren Entscheidungen führen | Bluebatch",
  description:
    "Kognitive Verzerrungen kosten Unternehmen jährlich Talent. Erfahren Sie, wie strukturierte Workflows fairere und bessere Recruiting-Entscheidungen ermöglichen.",
  openGraph: {
    title: "Bias, Bauchgefühl, Burnout — Strukturierte Recruiting-Prozesse",
    description:
      "Wie strukturierte Prozesse und Automatisierung zu faireren Recruiting-Entscheidungen führen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/blog/bias-Bauchgefuehl-burnout",
  },
};

export default function Page() {
  if (!metaCustom.publish) redirect("/blog");
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Bias, Bauchgefühl, Burnout — Wie strukturierte Prozesse im Recruiting
          zu besseren Entscheidungen führen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mm-small.png"
            linkedIn="https://www.linkedin.com/in/markus-mosch-32a4111a2/"
          >
            Markus Mosch
          </BlogHero.Author>
          <BlogHero.ReadTime>9 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-07">
            7. Juli 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/images/automation-efficiency.jpg"
          alt="Bias, Bauchgefühl, Burnout — Strukturierte Recruiting-Prozesse"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div className="prose prose-lg">
            <Typo.H2 id="recruiting-als-einstiegsjob">
              1. Recruiting als Einstiegsjob: Das unterschätzte Kompetenzproblem
            </Typo.H2>
            <Typo.Paragraph>
              Recruiting gilt in vielen Unternehmen als Einstiegsposition. Das
              hat historische Gründe — und strukturelle Konsequenzen. Denn wer am
              Beginn seiner Karriere steht, urteilt regelmäßig über die
              Qualifikationen von Menschen, die deutlich mehr Berufserfahrung
              mitbringen als er selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist keine Kritik an einzelnen Recruiterinnen oder Recruitern.
              Es ist eine systemische Herausforderung: Wie trifft man fundierte
              Auswahlentscheidungen, wenn die eigene Erfahrungsbasis noch
              begrenzt ist?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Antwort der meisten Teams: Man verlässt sich auf Muster.
              Bekannte Universitäten. Vertraute Berufsbezeichnungen. Lückenlose
              Lebensläufe. Was sich vertraut anfühlt, wird bevorzugt — was
              unbekannt ist, wird aussortiert.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mustererkennung-statt-eignungsdiagnostik">
              2. Mustererkennung statt Eignungsdiagnostik: Wie Bias Talente
              kostet
            </Typo.H2>
            <Typo.Paragraph>
              Diese Art der Entscheidungsfindung hat einen Namen:{" "}
              <strong>kognitive Verzerrung</strong>, oder englisch Bias. Und sie
              kostet Unternehmen jährlich enorme Mengen an Talent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Kandidaten mit international klingenden Namen erhalten weniger
              Rückrufe. Quereinsteiger mit nicht-linearen Lebensläufen werden
              automatisch aussortiert. Kandidaten von weniger prestigeträchtigen
              Universitäten schaffen es seltener in die Endrunde — nicht weil sie
              weniger qualifiziert sind, sondern weil sie nicht ins erwartete
              Muster passen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Personaldienstleister ist das ein doppeltes Problem: Erstens
              vermittelst du nicht die besten Kandidaten, sondern die, die am
              vertrautesten wirken. Zweitens setzt du deine Kunden potenziell
              einem rechtlichen Risiko aus — Stichwort AGG.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="warum-zeitdruck-vorurteile-verstaerkt">
              3. Warum Zeitdruck Vorurteile verstärkt
            </Typo.H2>
            <Typo.Paragraph>
              Das Tragische: Bias ist unter Zeitdruck besonders stark. Wenn ein
              Recruiter 200 Lebensläufe in drei Stunden sichten muss, greift das
              Gehirn auf Shortcuts zurück. Entscheidungen werden schneller
              getroffen — und weniger bewusst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Strukturierte Prozesse helfen, diesen Effekt zu reduzieren. Wer
              vorher definiert, welche Kriterien wirklich relevant sind, trifft
              bessere Entscheidungen — auch unter Zeitdruck. Und wer diese
              Kriterien automatisiert in den Prozess integriert, macht gute
              Entscheidungen zur Norm, nicht zur Ausnahme.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-n8n-workflows">
              4. Drei n8n-Workflows für strukturiertere, fairere
              Auswahlprozesse
            </Typo.H2>

            <Typo.H3>
              Workflow 1: Standardisierter Anforderungsbogen vor jeder
              Stellenausschreibung
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Neue Stellenanfrage vom Kunden geht
                ein
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatischer Versand eines
                strukturierten Anforderungsbogens an den Hiring Manager;
                Pflichtfelder: Muss-Kriterien, Kann-Kriterien, K.O.-Kriterien
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Klare, vorab vereinbarte
                Auswahlkriterien; weniger subjektive Nachverhandlungen
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>
              Workflow 2: Kompetenzbasierter Bewertungsbogen nach jedem Gespräch
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Gespräch mit Kandidat abgeschlossen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatischer Versand eines
                strukturierten Bewertungsbogens; Bewertung auf Skala statt
                Freitext; automatische Aggregation bei mehreren Interviewenden
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Vergleichbare, dokumentierte
                Bewertungen; weniger Entscheidungen aus dem Bauch heraus
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>
              Workflow 3: Anonymisiertes Erst-Screening für Bewerbungseingänge
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auslöser:</strong> Neue Bewerbung geht ein
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktion:</strong> Automatisches Extrahieren der relevanten
                Qualifikationsinfos; Anzeige ohne Name, Foto, Herkunft im ersten
                Schritt; vollständiges Profil erst nach der Erstbewertung
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ergebnis:</strong> Erste Entscheidung basiert auf
                Qualifikation, nicht auf Mustererkennung
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
              Strukturierte Prozesse klingen nach zusätzlichem Aufwand. Mit n8n
              ist das Gegenteil der Fall: Einmal aufgebaut, laufen alle Schritte
              automatisch ab. Formulare werden automatisch verschickt,
              ausgefüllte Antworten werden automatisch aggregiert, und
              Bewertungen werden automatisch im ATS gespeichert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Team arbeitet strukturierter — ohne mehr Zeit zu investieren.
              Im Gegenteil: Durch klarere Kriterien werden Entscheidungen
              schneller getroffen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              6. Fazit: Struktur ist kein Bürokratieproblem — sie ist ein
              Qualitätshebel
            </Typo.H2>
            <Typo.Paragraph>
              Wer auf Struktur im Recruiting verzichtet, riskiert nicht nur Bias
              — er riskiert schlechtere Einstellungen, langsamere Prozesse und
              unzufriedene Kunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Strukturierte Prozesse führen zu besseren Kandidaten, faireren
              Entscheidungen und weniger rechtlichem Risiko. Und mit
              Automatisierung kostet mehr Struktur nicht mehr Zeit — sie spart
              sie.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Willst du erfahren, wie strukturierte Workflows in deinem
                Recruiting-Alltag aussehen können?
              </strong>{" "}
              Lass uns gemeinsam schauen, was bei dir machbar ist.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="recruiting-als-einstiegsjob">
            Recruiting als Einstiegsjob
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="mustererkennung-statt-eignungsdiagnostik">
            Mustererkennung vs. Eignungsdiagnostik
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="warum-zeitdruck-vorurteile-verstaerkt">
            Zeitdruck und Vorurteile
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
