import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Link from "next/link";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "sonderteile-im-grosshandel-mit-ki",
  author: "Max Hänsel",
  date: "2026-04-30",
  image: "/images/order-capture.jpg",
  tags: ["ki", "grosshandel", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/angebotserstellung-sonderteile",
  rewrites: [
    {
      source: "/angebotserstellung-sonderteile",
      metaTitle:
        "Angebotserstellung Sonderteile: KI im Großhandel | Bluebatch",
      metaDescription:
        "Angebotserstellung für Sonderteile im Großhandel mit KI: Kundenanfragen automatisch erfassen, Sonderteil-Kalkulation per Software, vom Kunden-PDF zum Angebot in Sekunden.",
      keywords: [
        "Angebotserstellung Sonderteile",
        "Angebotserstellung Software",
        "Sonderteile Großhandel",
        "Sonderteil Kalkulation Software",
        "Kundenanfrage automatisch erfassen",
        "Bluebatch",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Angebotserstellung Sonderteile: KI-Software im Großhandel automatisieren | Bluebatch",
  description:
    "Angebotserstellung für Sonderteile im Großhandel ist heute der größte Bremsblock im Innendienst. So erfasst KI-Software Kundenanfragen automatisch, kalkuliert Sonderteile und liefert das Angebot in Sekunden statt Tagen.",
  openGraph: {
    title:
      "Angebotserstellung Sonderteile: KI-Software im Großhandel automatisieren",
    description:
      "Sonderteile-Angebotserstellung mit KI: Kundenanfragen automatisch erfassen, Sonderteil-Kalkulation per Software, Angebot in Sekunden.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/order-capture.jpg",
        width: 1200,
        height: 630,
        alt: "Angebotserstellung Sonderteile mit KI im Großhandel",
      },
    ],
  },
  alternates: {
    canonical: "/angebotserstellung-sonderteile",
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
          Angebotserstellung Sonderteile: Wie Veredler-Großhändler den
          Bestelleingang mit KI automatisieren
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-04-30">30. April 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/images/order-capture.jpg"
          alt="Angebotserstellung Sonderteile mit KI im Großhandel"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* Intro */}
          <div className="prose prose-lg">
            <Typo.Paragraph>
              <strong>Angebotserstellung für Sonderteile</strong> ist im
              Großhandel das Margenherz und gleichzeitig der größte Bremsblock
              im Innendienst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer Riemen ablängt und beschichtet, Wälzlager nach Kundenzeichnung
              auswählt, Förderbänder vulkanisiert oder Stahl auf Maß zuschneidet,
              kennt das Muster: Die eigentliche Veredelung dauert Stunden, das
              Angebot davor oft Tage. Die meiste Zeit verschwindet im
              Bestelleingang, beim Lesen der Anfrage, Matchen der Artikel,
              Kalkulieren von Material plus Konfektionsschritten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau dort setzt eine{" "}
              <strong>Angebotserstellungs-Software mit KI</strong> an. Dieser
              Artikel zeigt, wie Veredler-Großhändler{" "}
              <strong>Kundenanfragen automatisch erfassen</strong>, die{" "}
              <strong>Sonderteil-Kalkulation per Software</strong> abbilden und
              vom Kunden-PDF zum freigegebenen Angebot in Sekunden statt Tagen
              kommen, ohne ihr Engineering-Wissen zu verlieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Inhalt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Was einen Veredler-Großhändler ausmacht
              </Typo.ListItem>
              <Typo.ListItem>
                Warum der Bestelleingang das Bottleneck ist
              </Typo.ListItem>
              <Typo.ListItem>
                Demografie als Brandbeschleuniger
              </Typo.ListItem>
              <Typo.ListItem>
                Drei konkrete KI-Hebel im Bestelleingang
              </Typo.ListItem>
              <Typo.ListItem>
                Praxisbeispiele aus sechs Veredelungs-Sparten
              </Typo.ListItem>
              <Typo.ListItem>
                Was Engineering-Tiefe schützt
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          {/* 1. Was ist ein Veredler-Großhändler */}
          <div>
            <Typo.H2 id="was-ist-ein-veredler-grosshandler">
              Was einen Veredler-Großhändler ausmacht
            </Typo.H2>
            <Typo.Paragraph>
              Im klassischen Großhandel kauft man Standardteile ein und gibt sie
              eins-zu-eins an den Kunden weiter. Marge entsteht über Volumen und
              Logistik. Veredler-Großhändler arbeiten anders. Sie kaufen
              Standardteile zu und veredeln sie vor der Auslieferung. Aus einem
              Endlos-Zahnriemen wird ein konfektionierter Riemen mit definierter
              Länge, Beschichtung und Verbindung. Aus einem Standardlager wird
              ein nach Kunden-Zeichnung modifiziertes Lager mit Sonder-Toleranz.
              Aus einem Stahlrohr wird ein gesägtes, gebrenntes Bauteil mit
              fertigem Bohrbild.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Diese Wertschöpfungstiefe ist der Grund, warum Kunden bei ihnen
              kaufen statt direkt beim Hersteller. Engineering-Beratung, Mass-
              Genauigkeit, Konfektion auf Bestellung, das ist das Geschäft.
              Typische Sparten:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Antriebstechnik</strong> mit Riemen-Konfektion,
                Wälzlager-Engineering, Lineartechnik nach Maß
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schlauch und Hydraulik</strong> mit Pressverbindungen,
                Kompensatoren, Druckstufen-spezifischen Konfektionen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Förderband-Technik</strong> mit Heiß- und Kalt-
                Vulkanisation, Bestückung, Kantenausführung
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Stahl und Metall</strong> mit Sägen, Brennen, Profilen,
                Schnittplänen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kunststoff-Halbzeuge</strong> mit CNC-Fräs- und
                Drehteilen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Dichtungstechnik</strong> mit Stanzen, Sonder-
                Mischungen, O-Ring-Konfektion
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die meisten dieser Firmen sind Familienunternehmen in dritter oder
              vierter Generation, zwischen 50 und 500 Mitarbeitenden, oft mit
              mehreren Standorten. Sie bedienen produzierende Industrie, OEMs
              und Maschinenbauer. Anders gesagt: Sie sind das, was die
              Industrie täglich braucht und sehr selten in Pressemitteilungen
              auftaucht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/sonderteile-im-grosshandel-mit-ki/veredelung-werkstatt.png"
              alt="Veredelung im Großhandel: Riemen-Konfektion und Wälzlager-Engineering in einer mittelständischen Werkstatt"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          {/* 2. Warum der Bestelleingang das Bottleneck ist */}
          <div>
            <Typo.H2 id="bestelleingang-bottleneck">
              Warum der Bestelleingang das Bottleneck ist
            </Typo.H2>
            <Typo.Paragraph>
              Die Veredelung selbst ist das, was der Innendienst gut kann. Da
              läuft das Geschäft. Das Problem entsteht <em>davor</em>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine typische Sonderteil-Anfrage kommt heute auf einem dieser
              Wege rein:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                E-Mail vom Konstrukteur des Kunden, mit PDF-Anhang
              </Typo.ListItem>
              <Typo.ListItem>
                PDF mit handschriftlichen Korrekturen, gescannt
              </Typo.ListItem>
              <Typo.ListItem>
                Excel-Liste mit 40 Positionen, davon 35 Standard und 5 Sonderteile
              </Typo.ListItem>
              <Typo.ListItem>
                Zeichnung mit Maßketten und einem freien Textfeld
                &bdquo;bitte kalkulieren&ldquo;
              </Typo.ListItem>
              <Typo.ListItem>
                Fax (kein Witz, gibt es noch in nicht wenigen Werkstätten)
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Eine Bestellung ist hier selten nur &bdquo;Artikel und
              Menge&ldquo;. Dazu kommen{" "}
              <strong>komplexe Konfigurationen</strong> wie Material,
              Beschichtung, Länge, Toleranz, Härte, Norm-Zertifizierung. Und
              mitgeschickte Dokumente wie Zeichnungen, Stücklisten, Datenblätter
              oder Lastenhefte, in denen die eigentlich kaufentscheidenden Infos
              stecken.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was der Innendienst dann manuell tut:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Anfrage lesen, Kunden-Stammdaten matchen
              </Typo.ListItem>
              <Typo.ListItem>
                Artikelnummern übersetzen, oft drei-fach (Kunden-Nummer ↔ eigene
                Artikelnummer ↔ Lieferanten-Nummer)
              </Typo.ListItem>
              <Typo.ListItem>
                Sonderteil-Konfiguration aus Mail-Text und Anhang extrahieren
              </Typo.ListItem>
              <Typo.ListItem>
                Materialpreis, Konfektionsschritte, Maschinenzeit, Zuschlag per
                Hand kalkulieren
              </Typo.ListItem>
              <Typo.ListItem>
                Zeichnung an die Technik-Abteilung weiterleiten, dort prüfen
                lassen, zurück an den Vertrieb. Liegezeit: ein bis drei Tage,
                allein im Angebotsprozess
              </Typo.ListItem>
              <Typo.ListItem>
                Wiederholanfragen werden{" "}
                <strong>jedes Mal neu</strong> kalkuliert, weil das alte Angebot
                in einer E-Mail aus dem letzten Jahr verschollen ist
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Das ist nicht ineffizient, weil die Leute langsam wären. Es ist
              ineffizient, weil die Tätigkeit nicht skaliert. Mehr Anfragen
              brauchen mehr Innendienst. Mehr Innendienst gibt es aber nicht
              einfach so.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/sonderteile-im-grosshandel-mit-ki/bestelleingang-prozesskette.png"
              alt="Flowchart: 6-Schritte-Prozesskette der manuellen Sonderteil-Angebotserstellung von PDF-Anfrage bis Auftragsbestätigung mit Liegezeiten"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          {/* 3. Demografie */}
          <div>
            <Typo.H2 id="demografie">
              Demografie als Brandbeschleuniger
            </Typo.H2>
            <Typo.Paragraph>
              Die Personal-Lage im Mittelstand verschärft das Bottleneck. In den
              Branchen, in denen Veredler-Großhändler arbeiten, sind viele
              erfahrene Innendienst-Profis jenseits der 60. In den nächsten fünf
              Jahren gehen sie in Rente, und mit ihnen ein riesiger Schatz an
              Wissen über Sonderteile, Spezial-Beschichtungen, Toleranz-
              Empfehlungen und Lieferanten-Eigenheiten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nachbesetzen ist hart. Wer heute bei einem Veredler-Großhändler
              für den Innendienst eingestellt wird, braucht Jahre, um die
              Sonderteil-Logik überhaupt zu verstehen. Viele Stellen bleiben
              monatelang offen. In unserer eigenen Recherche zu deutschen
              Antriebstechnik-Veredlern haben wir bei{" "}
              <strong>15 von 39 Firmen</strong> aktuell ausgeschriebene Stellen
              im Innendienst, Vertriebsinnendienst oder Fachberater-Bereich
              gefunden. Das sind 38 Prozent der Branche, gleichzeitig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Frage ist daher nicht mehr nur &bdquo;wie machen wir das
              schneller?&ldquo;, sondern{" "}
              <strong>
                &bdquo;wie halten wir den Laden überhaupt am Laufen, wenn die
                erfahrenen Leute weg sind?&ldquo;
              </strong>{" "}
              Genau hier wird Automatisierung von einem Effizienz-Hebel zur
              Überlebensfrage.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/sonderteile-im-grosshandel-mit-ki/innendienst-erfahrung.png"
              alt="Erfahrener Innendienst-Mitarbeiter im Veredler-Großhandel mit Sonderteil-Zeichnungen und Stücklisten am Schreibtisch"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          {/* 4. Drei KI-Hebel */}
          <div>
            <Typo.H2 id="drei-ki-hebel">
              Drei konkrete KI-Hebel im Bestelleingang
            </Typo.H2>
            <Typo.Paragraph>
              Der Schritt vom Kunden-Eingang zum kalkulierten Angebot lässt sich
              in drei abgegrenzte Hebel zerlegen, die heute schon mit
              etablierter KI- und Workflow-Technologie funktionieren.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/sonderteile-im-grosshandel-mit-ki/drei-ki-hebel-workflow.png"
              alt="Diagramm: Drei KI-Hebel im Bestelleingang — Kundenanfrage automatisch erfassen, Zeichnungen interpretieren, Sonderteil-Kalkulation wiederverwenden"
              width={1200}
              height={800}
            />

            <Typo.H3>
              Hebel 1: Kundenanfrage automatisch erfassen
            </Typo.H3>
            <Typo.Paragraph>
              Eine KI-basierte{" "}
              <strong>Angebotserstellung-Software</strong> nimmt eingehende
              E-Mails plus Anhänge und extrahiert strukturierte Daten: Kunden-
              Identität, gewünschte Artikel oder Sonderteil-Beschreibungen,
              Mengen, <strong>Konfigurations-Parameter</strong> wie Material,
              Länge, Beschichtung, Toleranz und Norm. Was vorher 10 bis 30
              Minuten händisches Abtippen war, ist jetzt eine Vorschau-Maske,
              die der Innendienst nur noch bestätigt oder korrigiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtig dabei: Die KI rät nicht. Wenn ein Wert nicht eindeutig aus
              der Anfrage hervorgeht, markiert sie das Feld als unsicher und
              fragt zurück, statt eine Halluzination ins ERP zu schreiben.
            </Typo.Paragraph>

            <Typo.H3>Hebel 2: Zeichnungen interpretieren</Typo.H3>
            <Typo.Paragraph>
              Das ist der Punkt, der bislang fast immer ein menschliches
              Augenpaar gebraucht hat. Eine technische Zeichnung enthält
              Maße, Toleranzen, Bearbeitungssymbole, Material-Angaben und
              implizite Veredelungsschritte. Moderne Vision-Modelle können
              gängige Zeichnungs-Konventionen heute verlässlich lesen, vor
              allem dann, wenn sie auf den eigenen Artikel-Katalog des
              Großhändlers trainiert sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Ergebnis ist eine Vorschlags-Stückliste mit Material,
              Konfektionsschritten und einem ersten Kalkulations-Vorschlag. Die
              Technik-Abteilung gibt frei oder korrigiert. Liegezeit zwischen
              Vertrieb und Technik fällt weg.
            </Typo.Paragraph>

            <Typo.H3>
              Hebel 3: Sonderteil-Kalkulation per Software wiederverwenden
            </Typo.H3>
            <Typo.Paragraph>
              Sonderteile im Großhandel sind nicht so selten Sonder, wie der
              Name vermuten lässt. Viele Kunden bestellen über die Jahre
              dieselbe Konfiguration wieder. Heute wird trotzdem jedes Mal neu
              kalkuliert, weil das alte Angebot in einer Mail-Inbox vergraben
              ist und die <strong>Sonderteil-Kalkulation als Software</strong>{" "}
              nirgendwo systematisch abgelegt wurde.
            </Typo.Paragraph>
            <Typo.Paragraph>
              KI erkennt anhand der extrahierten Konfigurations-Parameter, ob
              eine Anfrage einer früheren ähnelt, und schlägt dem Innendienst
              das Vorgänger-Angebot oder den Vorgänger-Auftrag vor. Aus &bdquo;
              kalkuliere neu&ldquo; wird &bdquo;übernehmen, anpassen,
              freigeben&ldquo;.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 5. Praxisbeispiele */}
          <div>
            <Typo.H2 id="praxisbeispiele">
              Praxisbeispiele aus sechs Veredelungs-Sparten
            </Typo.H2>
            <Typo.Paragraph>
              Was ein KI-Workflow in der Praxis konkret macht, hängt stark vom
              Sortiment ab. Hier sechs typische Szenarien, die wir in der
              Recherche bei deutschen Veredler-Großhändlern wiederfinden.
            </Typo.Paragraph>

            <Typo.H3>Riemen-Konfektion</Typo.H3>
            <Typo.Paragraph>
              Eingang: &bdquo;Zahnriemen 1500 mm, antistatisch beschichtet,
              endlos verschweißt&ldquo;. Die KI matcht das Zahnriemen-Profil
              gegen den Lager-Katalog, ergänzt Materialnummer und Spannungs-
              empfehlung, addiert Konfektionsschritte (Ablängen, Beschichten,
              Verschweißen) und Maschinenzeit. Aus dem Mail-Text wird eine
              fertige Stückliste mit kalkuliertem Preis. Innendienst gibt frei.
            </Typo.Paragraph>

            <Typo.H3>Förderband-Vulkanisation</Typo.H3>
            <Typo.Paragraph>
              Jede Anfrage ist ein Custom-Projekt mit Maßen, Bestückung,
              Kantenausführung und Vulkanisations-Schritten. Aus dem Kunden-
              PDF werden alle Parameter automatisch gezogen. Was früher zwei
              Stunden Tipparbeit pro Angebot waren, ist jetzt eine Freigabe.
            </Typo.Paragraph>

            <Typo.H3>Wälzlager- und Lineartechnik</Typo.H3>
            <Typo.Paragraph>
              Kunden schicken Zeichnungen mit Sondermaßen oder Toleranz-
              Anforderungen. KI liest die Zeichnung, erkennt Lager-Bezeichnung,
              Toleranzklassen und gewünschte Sonderbearbeitung und liefert dem
              Innendienst eine fertige Kalkulation samt Lieferantenpreis.
            </Typo.Paragraph>

            <Typo.H3>Schlauch- und Hydraulik-Konfektion</Typo.H3>
            <Typo.Paragraph>
              Aus einer Mail mit den Stichworten &bdquo;NW 25, 6 m,
              Pressverbindung beidseitig 1&quot; AG, Druckstufe 250 bar&ldquo;
              wird die passende Konfektion erzeugt. KI parst Mails und
              Pressverbinder-Listen, generiert die passende Konfektion und legt
              das Angebot direkt zur Freigabe vor.
            </Typo.Paragraph>

            <Typo.H3>Stahl-Anarbeitung</Typo.H3>
            <Typo.Paragraph>
              Stückliste aus Kunden-Zeichnung lesen, Schnittpläne kalkulieren,
              Materialpreis tagesaktuell mit Lieferanten-Preisliste abgleichen.
              Aus DXF und PDF entsteht direkt die Angebots-Kalkulation samt
              Verschnitt-Anteil. Angebot in Minuten statt Stunden.
            </Typo.Paragraph>

            <Typo.H3>Kunststoff-Frästeile</Typo.H3>
            <Typo.Paragraph>
              KI liest die Kundenzeichnung, erkennt Material, Maße und
              Bearbeitungsschritte und schlägt Werkzeit plus Materialkosten vor.
              Bei kundenspezifischen Frästeilen frisst die Angebots-
              Kalkulation oft mehr Zeit als die Fertigung selbst, genau dort
              spart der Workflow.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/sonderteile-im-grosshandel-mit-ki/sortimente-collage.png"
              alt="Sortiments-Collage: Riemen-Konfektion, Wälzlager-Engineering, Förderband-Vulkanisation, Stahl-Anarbeitung und Hydraulik-Konfektion im Veredler-Großhandel"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          {/* 6. Was Engineering-Tiefe schützt */}
          <div>
            <Typo.H2 id="engineering-schutz">
              Was Engineering-Tiefe schützt
            </Typo.H2>
            <Typo.Paragraph>
              Es gibt eine berechtigte Sorge im Mittelstand: &bdquo;Wenn KI das
              alles macht, sind wir austauschbar.&ldquo; Das Gegenteil ist der
              Fall, wenn man die Automatisierung richtig zuschneidet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Veredler-Großhändler verkaufen kein Standardteil. Sie verkaufen{" "}
              <strong>Engineering-Beratung plus Konfektion plus Logistik</strong>.
              Genau diese Beratung ist ihr Burggraben gegenüber Online-
              Distributoren. Und genau diese Beratung darf KI nicht ersetzen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der richtige Schnitt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Mensch macht Beratung.</strong> Anwendungstechnik,
                Empfehlungen für Material und Toleranz, Kundenpflege.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>KI macht Vorarbeit.</strong> Anfrage lesen, Stammdaten
                matchen, Stückliste vorbereiten, Erst-Kalkulation erzeugen,
                Wiederholanfragen vorschlagen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Mensch gibt frei.</strong> Der Innendienst-Profi prüft
                den Vorschlag, korrigiert wo nötig, gibt das Angebot raus.
                Verantwortung bleibt beim Mensch.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Effekt: Eure Innendienst-Leute arbeiten nicht weniger, sie
              arbeiten an den Aufgaben, die nicht skalieren und für die ihr sie
              eingestellt habt. Das wiederkehrende Abtippen, Übersetzen und
              Neu-Rechnen verschwindet im Hintergrund.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist der Unterschied zwischen &bdquo;Automatisierung&ldquo; im
              Sinne von Personal abbauen und Automatisierung im Sinne von
              Engineering-Tiefe absichern.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 7. Wie anfangen */}
          <div>
            <Typo.H2 id="wie-anfangen">
              Wie anfangen, ohne ein Großprojekt zu starten
            </Typo.H2>
            <Typo.Paragraph>
              Wer KI im Bestelleingang einführen will, muss kein ERP wechseln,
              kein KI-Team aufbauen und keine zwei-jährige Roadmap planen. Ein
              erster Workflow läuft typisch in zwei bis vier Wochen, mit drei
              Schritten:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Eine Sortimentsgruppe wählen,</strong> bei der der Pain
                am größten ist. Riemen oder Förderbänder, Schläuche oder
                Wälzlager. Eins, das viele Wiederholanfragen sieht und in dem
                Sonderteile häufig sind.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Den Eingangs-Kanal anbinden.</strong> Mail-Postfach plus
                Anhang-Parsing reicht für den Anfang. Fax und Telefon kommen
                später.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Auf das eigene ERP koppeln.</strong> Output ist eine
                strukturierte Anfrage mit Vorschlags-Kalkulation, die der
                Innendienst freigibt. Egal ob das ERP eine moderne API hat oder
                nur einen CSV-Import.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Wichtig: Der erste Workflow muss nicht alles können. Er muss nur
              messbar Zeit sparen, damit der Innendienst-Profi merkt, dass es
              ihm hilft, statt seinen Job zu bedrohen. Der Rest baut sich
              danach von selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Verwandte Themen:{" "}
              <Link
                href="/blog/automatische-angebotserstellung-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Automatische Angebotserstellung im Großhandel
              </Link>
              ,{" "}
              <Link
                href="/blog/bestellungen-erfassen-automatisieren"
                className="text-primary-600 hover:underline"
              >
                Bestellungen erfassen und automatisieren
              </Link>
              ,{" "}
              <Link
                href="/blog/erp-workflows-automatisieren"
                className="text-primary-600 hover:underline"
              >
                ERP-Workflows automatisieren
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* CTA */}
          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Wenn ihr bei euch im Innendienst aktuell mehrere Stellen offen
              habt, viel Zeit in Sonderteil-Kalkulationen steckt oder einfach
              wissen wollt, wie ein KI-Workflow im Bestelleingang konkret bei
              euren Anfragen aussehen würde: Ein 30-minütiges Gespräch reicht,
              um eine erste Einschätzung zu bekommen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <Link
                href="/contact"
                className="text-primary-600 hover:underline font-semibold"
              >
                Termin vereinbaren →
              </Link>
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
