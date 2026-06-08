import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "grosshandel-software",
  author: "Max Hänsel",
  date: "2026-06-29",
  image: "/blog/grosshandel-software/hero.png",
  tags: ["grosshandel", "erp", "ki"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Großhandel-Software 2026: Der komplette Überblick über alle Kategorien | Bluebatch",
  description:
    "ERP ist nur ein Teil: Welche Software ein B2B-Großhändler mit 50 bis 1.000 Mitarbeitenden wirklich braucht (CRM, Shop, EDI, PIM, DMS, BI, WMS) und warum der KI-Layer auf der bestehenden Software heute den größten Hebel bringt.",
  openGraph: {
    title:
      "Großhandel-Software 2026: alle Kategorien im Überblick und der KI-Layer",
    description:
      "Ein neutraler Überblick über die gesamte Software-Landschaft im B2B-Großhandel: ERP, CRM, Shop, EDI, PIM, DMS, BI, WMS und der KI-Layer, der ohne Rip-and-Replace ansetzt.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/grosshandel-software/hero.png",
        width: 1200,
        height: 630,
        alt: "Geschäftsführerin und IT-Leiter eines deutschen Großhändlers prüfen die Software-Landschaft am Laptop im Lager",
      },
    ],
  },
  alternates: {
    canonical: "/blog/grosshandel-software",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Großhandel-Software 2026: der komplette Überblick über alle
          Kategorien (und wo der KI-Layer ansetzt)
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-29">29. Juni 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/grosshandel-software/hero.png"
          alt="Geschäftsführerin und IT-Leiter eines deutschen Großhandelsbetriebs am Standing-Desk im Lager, am Laptop ist eine Landkarte verschiedener Software-Kategorien zu sehen"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wer 2026 nach Software für den Großhandel sucht, landet fast
              überall bei derselben Gleichung: Großhandel-Software gleich ERP.
              Die meisten Ergebnisseiten sind Hersteller-Landingpages für ein
              Warenwirtschaftssystem oder Verzeichnisse, die 60 ERP-Anbieter in
              zwei Sätzen abhandeln. Das greift zu kurz. Kein Großhändler
              zwischen 50 und 1.000 Mitarbeitenden kommt mit einem einzigen
              System aus. In der Praxis arbeitet ein Haus mit einem Bündel:
              ERP für das Rückgrat, CRM für den Vertrieb, einem B2B-Shop für
              die Bestellannahme, EDI für die Anbindung großer Partner, einem
              PIM für die Produktdaten, einem DMS für Belege und E-Rechnungen,
              BI für die Auswertungen und oft einem eigenen Lagerverwaltungs-
              system. Zusammengehalten wird das alles über Schnittstellen, und
              genau dort entscheidet sich, ob die Software-Landschaft trägt
              oder zum Flickenteppich wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag gibt einen neutralen Überblick über die gesamte
              Software-Landschaft im B2B-Großhandel: welche Kategorien es gibt,
              wofür sie da sind, welche Anbieter im deutschen Mittelstand
              regelmäßig auf Shortlists landen, worauf es bei Auswahl und
              Kosten ankommt. Und er ordnet die Frage ein, die in den meisten
              Vergleichslisten fehlt: Wo bringt heute ein KI- und
              Automatisierungs-Layer auf der bestehenden Software mehr als ein
              komplett neues System? Die Antwort verschiebt die Reihenfolge,
              in der viele Großhändler ihre IT-Modernisierung angehen sollten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="landkarte">
              Großhandel-Software ist kein einzelnes Produkt, sondern eine
              Landkarte
            </Typo.H2>
            <Typo.Paragraph>
              Der häufigste Denkfehler bei der Software-Auswahl im Großhandel
              ist, das ERP als das eine Werkzeug zu sehen, das alles können
              muss. Tatsächlich ist das Warenwirtschaftssystem nur das Zentrum
              einer Landkarte aus spezialisierten Kategorien. Jede Kategorie
              löst ein eigenes Problem, und jede gute Lösung lebt davon, sauber
              mit den Nachbarn zu sprechen. Wer diese Landkarte einmal
              ausgebreitet hat, trifft bessere Entscheidungen: Man erkennt,
              welche Lücke man wirklich schließen will, und kauft nicht aus
              Versehen ein zweites System für etwas, das ein vorhandenes
              bereits abdeckt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/grosshandel-software/software-landkarte.png"
              alt="Landkarte der neun Software-Kategorien im Großhandel: ERP, CRM, B2B-Shop, EDI, PIM, DMS, BI, WMS und KI-Automatisierung als Kacheln, die KI-Kachel ist hervorgehoben"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              Die folgenden neun Kategorien decken ab, was ein moderner
              Großhändler an Software bewegt. Nicht jedes Haus braucht jede
              Kategorie als eigenes Produkt, vieles steckt in größeren Suiten.
              Aber jede Funktion muss irgendwo abgebildet sein, und es lohnt
              sich, bewusst zu entscheiden, ob sie aus dem ERP kommt oder aus
              einem Spezialisten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kategorien">Die neun Kategorien im Überblick</Typo.H2>

            <Typo.H3>1. ERP und Warenwirtschaft: das Rückgrat</Typo.H3>
            <Typo.Paragraph>
              Das Warenwirtschaftssystem ist die zentrale Datendrehscheibe:
              Auftragsabwicklung, Einkauf, Preisfindung und Konditionen,
              Lagerbestand, Stammdaten und meist die Finanzbuchhaltung. Im
              Großhandel zählen vor allem flexible Preisfindung,
              Konditionsmanagement, Margensteuerung und die EDI-Fähigkeit.
              Typische Anbieter im DACH-Mittelstand reichen von SAP S/4HANA und
              Microsoft Dynamics 365 Business Central über deutsche Häuser wie
              proALPHA, abas, Sage, e.bootis und Comarch bis zu Branchen- und
              Cloud-Lösungen wie VARIO, gevis ERP oder Haufe X360. Weil das ERP
              der teuerste und langlebigste Baustein ist, behandeln wir die
              Auswahl in einem eigenen, tiefen Vergleich. Welches System zu
              welcher Größenklasse passt und was es kostet, steht im Detail im
              Beitrag zum{" "}
              <Link href="/blog/warenwirtschaftssystem-grosshandel">
                Warenwirtschaftssystem für den Großhandel
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>2. CRM: Vertrieb und Kundenhistorie</Typo.H3>
            <Typo.Paragraph>
              Das CRM bündelt Kontakthistorie, Vertriebspipeline,
              Angebotssteuerung und Außendienst. Der Knackpunkt im Großhandel
              ist die enge ERP-Integration: Ohne Echtzeit-Abgleich von Kunden,
              Preisen und offenen Posten entstehen Datensilos, und der
              Außendienst arbeitet mit veralteten Zahlen. Im deutschen
              Mittelstand gilt CAS genesisWorld als verbreiteter Vertreter mit
              On-Premise-Option und DSGVO-Fokus, SugarCRM positioniert sich
              stark Richtung Fertigung und Distribution mit guter
              ERP-Anbindung, HubSpot punktet beim Pipeline- und
              Marketing-Alignment, Salesforce und Microsoft Dynamics 365 Sales
              spielen ihre Stärken eher ab mittlerer Größe aus.
            </Typo.Paragraph>

            <Typo.H3>3. B2B-Shop: das Bestellportal</Typo.H3>
            <Typo.Paragraph>
              Ein B2B-Shop verlagert die Bestellung zum Kunden: Staffelpreise,
              kundenindividuelle Sortimente und Preise, schnelle Nachbestellung
              und eine Außendienst-App entlasten die manuelle Auftragserfassung
              spürbar. Verbreitet im deutschen Mittelstand sind Shopware mit
              seinen B2B-Komponenten und OXID eShop mit dedizierter B2B-Edition
              und tiefer ERP-Integration. Sana Commerce verfolgt einen
              ERP-led-Ansatz, der die ERP-Logik in Echtzeit im Shop abbildet,
              Intershop bedient komplexe Enterprise-Szenarien. Wie viel ein
              Shop trotzdem nicht abfängt, zeigt der heterogene Bestelleingang
              per Mail und PDF, mehr dazu weiter unten beim KI-Layer.
            </Typo.Paragraph>

            <Typo.H3>4. EDI: die strukturierte Partneranbindung</Typo.H3>
            <Typo.Paragraph>
              EDI automatisiert den strukturierten Datenaustausch mit
              Handelsketten und Lieferanten: Bestellungen, Lieferavise und
              Rechnungen laufen in Formaten wie EDIFACT, VDA oder SAP IDoc, ohne
              dass jemand etwas abtippt. Sobald große Partner angebunden werden,
              ist EDI Pflicht, kleinere Partner ohne eigene Infrastruktur bindet
              man über WebEDI an. Im DACH-Raum sind SEEBURGER mit großem
              Mapping- und Partnernetz, Lobster mit breiter Formatunterstützung,
              Comarch EDI inklusive WebEDI sowie Managed-Service-Anbieter wie
              ecosio typische Adressen.
            </Typo.Paragraph>

            <Typo.H3>5. PIM: saubere Produktdaten</Typo.H3>
            <Typo.Paragraph>
              Ein PIM pflegt und reichert Produktdaten zentral an:
              Beschreibungen, Attribute, Bilder, Übersetzungen und
              kanalspezifische Ausgaben für Shop, Marktplätze und Kataloge. Das
              ERP liefert die Rohdaten wie Artikelnummer, Preis und Bestand, das
              PIM macht daraus verkaufsfähige Inhalte. Bei vielen tausend SKUs
              und heterogenen Lieferantendaten, wie sie im Großhandel die Regel
              sind, wird das schnell geschäftskritisch. Akeneo und das
              Open-Source-basierte Pimcore sind im Mittelstand am häufigsten zu
              sehen, Contentserv positioniert sich im gehobenen Segment.
            </Typo.Paragraph>

            <Typo.H3>6. DMS und E-Rechnung: revisionssichere Belege</Typo.H3>
            <Typo.Paragraph>
              Ein Dokumentenmanagementsystem sorgt für revisionssichere Ablage
              nach GoBD, einen geordneten Rechnungseingangsworkflow, OCR-
              gestützte Belegerkennung und die Verarbeitung von E-Rechnungen in
              den Formaten XRechnung und ZUGFeRD samt DATEV-Anbindung. DocuWare
              ist GoBD-zertifiziert und stark im Rechnungseingang, ELO gilt seit
              dem Rückzug des DATEV-eigenen DMS als bevorzugter DATEV-Partner und
              verarbeitet XRechnung und ZUGFeRD direkt, d.velop ist vor allem in
              Microsoft-365-Umgebungen verbreitet. Die Dringlichkeit dieser
              Kategorie steigt mit der E-Rechnungs-Pflicht, deren Stichtage jeder
              Großhändler kennen sollte.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/grosshandel-software/e-rechnung-timeline.png"
              alt="Zeitstrahl der deutschen B2B-E-Rechnungs-Pflicht: Empfangspflicht seit Januar 2025, Übergang bis 2026, Versandpflicht ab 2027 über 800.000 Euro Umsatz, ab 2028 für alle"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Die Eckdaten laut dem FAQ des Bundesfinanzministeriums: Seit dem
              1. Januar 2025 muss jedes inländische Unternehmen E-Rechnungen
              empfangen und verarbeiten können. Bis Ende 2026 läuft eine
              Übergangsphase, in der Papier und PDF noch zulässig sind. Ab dem
              1. Januar 2027 wird der Versand für Unternehmen mit mehr als
              800.000 Euro Vorjahresumsatz Pflicht, ab dem 1. Januar 2028 für
              alle inländischen B2B-Unternehmen. Maßgeblich ist die Norm EN
              16931, akzeptiert werden unter anderem XRechnung und ZUGFeRD ab
              Version 2.0.1. Kleinbetragsrechnungen bis 250 Euro sind
              ausgenommen. Wie sich der Rechnungseingang dazu automatisieren
              lässt, zeigt der Beitrag zur{" "}
              <Link href="/blog/e-rechnung-automatisieren">
                E-Rechnung-Automatisierung
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>7. BI: Auswertungen statt Excel-Wildwuchs</Typo.H3>
            <Typo.Paragraph>
              Business Intelligence wertet über ERP, CRM und Shop hinweg aus:
              Umsatz, Marge, Lagerumschlag, Lieferfähigkeit und
              Kundenrentabilität in Self-Service-Dashboards statt in
              gewachsenen Excel-Landschaften. Microsoft Power BI ist wegen
              günstiger Lizenzierung und enger Microsoft-Integration weit
              verbreitet und bietet einen DATEV-Connector, Qlik Sense ist stark
              bei heterogenen Datenquellen und komplexen Analysen, Tableau
              überzeugt bei der Visualisierung, kostet pro Anwender aber meist
              ein Mehrfaches von Power BI.
            </Typo.Paragraph>

            <Typo.H3>8. WMS: das Lager im Detail</Typo.H3>
            <Typo.Paragraph>
              Ein Lagerverwaltungssystem geht über die Bestandsführung des ERP
              hinaus: Einlagerung, Kommissionierung, Wegeoptimierung,
              Multi-Lager-Betrieb und die Anbindung an Fördertechnik. Für
              Großhändler mit eigenem Distributionszentrum ist ein eigenes WMS
              neben dem ERP oft sinnvoll. Im DACH-Raum stehen PSIwms, viadat
              von viastore, WAMAS von SSI Schäfer inklusive Einsteiger-Editionen
              für kleinere Häuser sowie LFS aus der Ehrhardt Partner Group auf
              den Shortlists.
            </Typo.Paragraph>

            <Typo.H3>9. KI- und Automatisierungs-Layer: die neue Kategorie</Typo.H3>
            <Typo.Paragraph>
              Die jüngste und am häufigsten übersehene Kategorie liegt nicht
              neben den anderen Systemen, sondern auf und vor ihnen. Ein KI-
              und Automatisierungs-Layer übernimmt die manuellen, unstrukturierten
              Tätigkeiten, die trotz teurer Software überall im Großhandel
              hängen bleiben: Bestellungen aus Mail, PDF und Fax in den ERP-
              Auftrag übersetzen, Belege auslesen und vorkontieren, Angebote
              vorbefüllen, Stammdaten pflegen. Die Bausteine reichen von
              Low-Code-Orchestrierung mit n8n oder Make über Microsoft 365
              Copilot in der Microsoft-Welt bis zu maßgeschneiderten
              KI-Agenten. Weil das die strategisch spannendste Kategorie ist,
              widmen wir ihr unten einen eigenen Abschnitt.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kategorie</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wofür</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Typische Anbieter (DACH-Mittelstand)
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>ERP / Warenwirtschaft</DataTable.Cell>
                  <DataTable.Cell>
                    Rückgrat: Auftrag, Einkauf, Bestand, Konditionen, Fibu
                  </DataTable.Cell>
                  <DataTable.Cell>
                    SAP S/4HANA, Dynamics 365 BC, proALPHA, VARIO, Haufe X360
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>CRM</DataTable.Cell>
                  <DataTable.Cell>
                    Vertrieb, Pipeline, Kundenhistorie, Außendienst
                  </DataTable.Cell>
                  <DataTable.Cell>
                    CAS genesisWorld, SugarCRM, HubSpot, Salesforce
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>B2B-Shop</DataTable.Cell>
                  <DataTable.Cell>
                    Self-Service-Bestellung, kundenindividuelle Preise
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Shopware, OXID eShop, Sana Commerce, Intershop
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>EDI</DataTable.Cell>
                  <DataTable.Cell>
                    Strukturierter Austausch mit Ketten und Lieferanten
                  </DataTable.Cell>
                  <DataTable.Cell>
                    SEEBURGER, Lobster, Comarch EDI, ecosio
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>PIM</DataTable.Cell>
                  <DataTable.Cell>
                    Produktdaten zentral pflegen und anreichern
                  </DataTable.Cell>
                  <DataTable.Cell>Akeneo, Pimcore, Contentserv</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>DMS / E-Rechnung</DataTable.Cell>
                  <DataTable.Cell>
                    Revisionssichere Belege, Rechnungseingang, GoBD
                  </DataTable.Cell>
                  <DataTable.Cell>DocuWare, ELO, d.velop</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>BI / Reporting</DataTable.Cell>
                  <DataTable.Cell>
                    Auswertungen über alle Systeme, Dashboards
                  </DataTable.Cell>
                  <DataTable.Cell>Power BI, Qlik Sense, Tableau</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>WMS / Lager</DataTable.Cell>
                  <DataTable.Cell>
                    Kommissionierung, Wegeoptimierung, Fördertechnik
                  </DataTable.Cell>
                  <DataTable.Cell>PSIwms, viadat, WAMAS, LFS</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>KI-Automatisierung</DataTable.Cell>
                  <DataTable.Cell>
                    Manuelle Prozesse auf bestehender Software automatisieren
                  </DataTable.Cell>
                  <DataTable.Cell>
                    n8n, Make, M365 Copilot, eigene KI-Agenten
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="cloud">
              Cloud, On-Premise oder Branchenlösung
            </Typo.H2>
            <Typo.Paragraph>
              Drei Grundsatzfragen ziehen sich durch jede Kategorie. Erstens
              Cloud oder On-Premise: Global laufen schätzungsweise rund 70
              Prozent der ERP-Welt in der Cloud, der deutsche Mittelstand hängt
              hinterher, einzelne Erhebungen sehen den Cloud-Anteil bei DACH-
              Mittelständlern nur bei etwa einem Drittel. Der Trend zeigt
              dennoch klar Richtung Cloud und Hybrid, getrieben von
              Flexibilität, Skalierbarkeit und schnelleren Innovationszyklen.
              On-Premise bleibt relevant, wo Daten besonders sensibel sind oder
              eine gewachsene IT-Landschaft den Ausschlag gibt. Für viele
              Häuser ist der Hybrid-Weg der pragmatische Mittelweg.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens Standard oder Branchenlösung: Vorkonfigurierte
              Branchenpakete für technischen Großhandel, Baustoff, Lebensmittel
              oder Pharma bringen Großhandels-Spezifika wie Konditionen, Chargen
              und EDI ab Werk mit und verkürzen die Einführung deutlich. Der
              Preis dafür ist weniger Flexibilität. Drittens, und das ist die
              wichtigste Einsicht: Kaum ein Großhändler hat das eine System.
              Üblich ist ein Best-of-Breed-Verbund aus ERP, CRM, Shop, EDI, DMS
              und BI, zusammengehalten über Schnittstellen. Wie gut diese
              Schnittstellen sind, entscheidet über den Erfolg, nicht der
              Funktionsumfang des einzelnen Tools.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="auswahl">
              Worauf es bei der Auswahl wirklich ankommt
            </Typo.H2>
            <Typo.Paragraph>
              Sieben Kriterien entscheiden in der Praxis, ob eine
              Software-Landschaft im Großhandel trägt. Das mit Abstand
              wichtigste ist die Integration. Ein Best-of-Breed-Verbund ist nur
              so gut wie seine Schnittstellen: APIs, Konnektoren und ein
              Echtzeit-Abgleich zwischen ERP, CRM, Shop und Lager. Datensilos
              sind das Hauptrisiko, und sie entstehen leise, wenn zwei gute
              Systeme nicht sauber miteinander reden. An zweiter Stelle steht
              die EDI-Fähigkeit, Pflicht, sobald große Handelskunden oder
              Lieferanten angebunden werden. Drittens die DATEV-Anbindung, in
              Deutschland faktisch Standardanforderung für Buchhaltung und
              Steuerberatung, an die DMS und BI andocken müssen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Viertens die E-Rechnungs-Fähigkeit, die wegen der gesetzlichen
              Stichtage von der Kür zur Pflicht geworden ist. Fünftens die
              Datenmigration: Artikel, Kunden, Konditionen und offene Posten aus
              den Altsystemen zu übernehmen ist ein eigener, oft unterschätzter
              Projektblock. Sechstens die Customizing-Falle: Zu viele
              Individualanpassungen treiben die Kosten und erschweren Updates und
              eine spätere Cloud-Migration, nah am Standard zu bleiben zahlt sich
              über Jahre aus. Und siebtens die Cloud-Souveränität: EU- und
              Deutschland-Hosting, sauber geregelte Auftragsverarbeitung und der
              Umgang mit US-Cloud-Bedenken sprechen für deutsche Anbieter wie CAS
              oder ELO und für self-hostbare Werkzeuge wie n8n, OXID oder
              Pimcore. Wie sich Datenschutz und KI im Mittelstand vereinbaren
              lassen, vertieft der Beitrag zu{" "}
              <Link href="/blog/dsgvo-konforme-ki-tools">
                DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Was Großhandel-Software kostet</Typo.H2>
            <Typo.Paragraph>
              Verlässliche Preise gibt es nur als Bandbreiten, weil Größe,
              Branche und Customizing-Anteil alles verschieben. Der teuerste
              Block ist das ERP. Cloud-Lizenzen liegen grob bei 50 bis 150 Euro
              pro Anwender und Monat, On-Premise-Lizenzen bei rund 1.000 bis
              5.000 Euro einmalig pro Arbeitsplatz. Für das gesamte
              Einführungsprojekt gilt im Mittelstand die Faustregel von ein bis
              drei Prozent des Jahresumsatzes, typische Gesamtbudgets bewegen
              sich zwischen etwa 130.000 und 900.000 Euro. Die Projektdauer
              liegt meist bei neun bis fünfzehn Monaten, mit Branchenpaket eher
              am unteren Rand.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/grosshandel-software/tco-struktur.png"
              alt="Kostenstruktur eines ERP-Projekts als gestapelter Balken: Lizenz nur 15 bis 25 Prozent, Einführung, Migration, Schulung und Betrieb 50 bis 70 Prozent"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Die wichtigste Zahl bei den Kosten ist eine Quote: Die Lizenz macht
              nur etwa 15 bis 25 Prozent der Gesamtkosten aus. Der große Rest,
              50 bis 70 Prozent, steckt in Implementierung, Migration, Schulung
              und Betrieb. Wer nur auf den Lizenzpreis schaut, verschätzt sich um
              den Faktor vier. Als Orientierung für die Einzelposten:
              Datenmigration 5.000 bis 50.000 Euro, individuelle Anpassungen
              10.000 bis 50.000 Euro, Schulung 5.000 bis 20.000 Euro, jährliche
              Wartung rund 15 bis 20 Prozent der Lizenzkosten. Ein B2B-Shop wie
              Shopware startet bei den kostenpflichtigen Editionen ab rund 600
              Euro pro Monat, die Implementierung mit ERP-Integration liegt oft
              zwischen 50.000 und 120.000 Euro. Deutlich günstiger und schneller
              ist der KI-Layer: Microsoft 365 Copilot kostet als Add-on rund 18
              Euro pro Anwender und Monat, n8n und Make arbeiten mit einzelnen
              Use-Cases statt mit Großprojekten und liefern den ROI schneller
              als ein ERP-Wechsel.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="ki-layer">
              Der KI-Layer statt Rip-and-Replace
            </Typo.H2>
            <Typo.Paragraph>
              Hier liegt die strategisch wichtigste Botschaft dieses Überblicks.
              Im Großhandel sind viele Abläufe trotz teurem ERP noch Handarbeit:
              Aufträge kommen per Mail, PDF und Fax herein und werden abgetippt,
              Rechnungen werden manuell erfasst, Angebote in Kleinarbeit gebaut,
              Stammdaten gepflegt. Die naheliegende, aber falsche Reaktion ist,
              dafür ein neues System zu kaufen. Die kluge Reaktion ist ein KI-
              und Automatisierungs-Layer, der auf und vor den bestehenden
              Systemen ansetzt, statt sie zu ersetzen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/grosshandel-software/ki-layer-architektur.png"
              alt="Architektur-Diagramm: Eingangskanäle wie Mail, PDF, Fax und Portal laufen in einen KI-Automatisierungs-Layer, der die Ergebnisse an bestehende Systeme wie ERP, CRM, Shop und DATEV weitergibt"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              Konkret heißt das: Beim Auftragseingang liest die KI
              unstrukturierte Bestellungen aus, validiert sie und schreibt einen
              strukturierten Auftrag ins ERP. Wie das im Detail funktioniert,
              zeigt der Beitrag zur{" "}
              <Link href="/blog/auftragsabwicklung-grosshandel">
                Auftragsabwicklung im Großhandel
              </Link>{" "}
              und zum{" "}
              <Link href="/blog/bestellungen-erfassen-automatisieren">
                automatisierten Erfassen von Bestellungen
              </Link>
              . Bei der Belegerfassung extrahiert die KI Rechnungsdaten,
              kontiert vor und übergibt an DMS und DATEV, was direkt auf die
              E-Rechnungs-Pflicht einzahlt. Bei Angeboten zieht sie Daten aus ERP
              und CRM und befüllt das Angebot vor.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Warum diese Reihenfolge wirtschaftlich überlegen ist, zeigt der
              Vergleich der Größenordnungen: Ein ERP-Wechsel dauert neun bis
              fünfzehn Monate, kostet schnell sechsstellig und trägt hohes
              Risiko. Ein Automatisierungs-Layer setzt an einzelnen Use-Cases an,
              ist in Wochen statt Monaten produktiv, kostet einen Bruchteil und
              kommt ohne Rip-and-Replace aus. Man modernisiert die Prozesse, ohne
              das Rückgrat anzufassen, und misst den ROI an einer konkreten
              manuellen Tätigkeit. Als Bausteine dienen n8n oder Make für die
              Orchestrierung, Microsoft 365 Copilot in der Microsoft-Welt und
              maßgeschneiderte KI-Agenten für die großhandelsspezifischen
              Spezialfälle. Self-hostbares n8n mit EU-Hosting adressiert dabei
              die Datenschutz- und Souveränitätsfrage. Den größeren Rahmen, wie
              KI den Großhandel verändert, zeichnet der Beitrag dazu, wie sich{" "}
              <Link href="/blog/wie-wirkt-sich-ki-auf-den-grosshandel-aus">
                KI auf den Großhandel auswirkt
              </Link>
              , nach. Der pragmatische Leitsatz bleibt: Nicht alles neu kaufen,
              erst die manuellen Engpässe automatisieren, auf der Software, die
              schon da ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen zu Großhandel-Software</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Welche Software braucht ein Großhändler überhaupt?",
                  answer:
                    "Kern ist das ERP beziehungsweise Warenwirtschaftssystem. Drumherum typisch: CRM für den Vertrieb, ein B2B-Shop als Bestellportal, EDI für die Lieferanten- und Kundenanbindung, PIM für Produktdaten, DMS für Belege und E-Rechnung, BI für Auswertungen und bei eigenem Lager ein WMS. Dazu kommt ein KI- und Automatisierungs-Layer für die manuellen Prozesse, die trotz dieser Systeme bleiben.",
                },
                {
                  question:
                    "Brauche ich ein neues ERP, um zu digitalisieren?",
                  answer:
                    "Meistens nein. Ein ERP-Wechsel dauert neun bis fünfzehn Monate und kostet schnell sechsstellig. Viele manuelle Engpässe wie Auftragseingang und Belegerfassung lassen sich mit einem Automatisierungs-Layer auf dem bestehenden System lösen, schneller und deutlich günstiger als ein Systemwechsel.",
                },
                {
                  question: "Ab wann gilt die E-Rechnungs-Pflicht im B2B?",
                  answer:
                    "Der Empfang ist seit dem 1. Januar 2025 Pflicht. Der Versand wird ab dem 1. Januar 2027 für Unternehmen über 800.000 Euro Vorjahresumsatz Pflicht, ab dem 1. Januar 2028 für alle inländischen B2B-Unternehmen. Akzeptierte Formate sind XRechnung und ZUGFeRD ab Version 2.0.1 nach EN 16931, Kleinbeträge bis 250 Euro sind ausgenommen.",
                },
                {
                  question: "Cloud oder On-Premise, was ist 2026 sinnvoll?",
                  answer:
                    "Der Trend geht klar zu Cloud und Hybrid, wegen Flexibilität, Skalierung und weniger eigener IT. On-Premise bleibt bei sehr sensiblen Daten und gewachsener Infrastruktur eine Option. Im Mittelstand ist Hybrid oft der pragmatische Mittelweg.",
                },
                {
                  question: "Was kostet die Einführung im Mittelstand?",
                  answer:
                    "Als Faustregel für das ERP ein bis drei Prozent vom Jahresumsatz, typisch 130.000 bis 900.000 Euro insgesamt, Cloud-Lizenzen rund 50 bis 150 Euro pro Anwender und Monat. Wichtig: Die Lizenz ist nur 15 bis 25 Prozent der Gesamtkosten, der Rest steckt in Einführung, Migration und Schulung.",
                },
                {
                  question: "Worauf kommt es bei der Auswahl am meisten an?",
                  answer:
                    "Auf die Integration. Ein Best-of-Breed-Verbund ist nur so gut wie seine Schnittstellen zwischen ERP, CRM, Shop und Lager sowie zu EDI und DATEV. Der zweite große Hebel ist, nicht zu viel zu customizen, sonst werden Updates und eine spätere Cloud-Migration teuer.",
                },
                {
                  question: "Was ist ein KI- und Automatisierungs-Layer?",
                  answer:
                    "Eine Schicht über den bestehenden Systemen, die manuelle Routine automatisiert: Aufträge aus Mails und PDFs ins ERP übernehmen, Belege auslesen und vorkontieren, Angebote vorbefüllen. Als Werkzeuge dienen n8n, Make, Microsoft 365 Copilot oder maßgeschneiderte KI-Agenten. Ein Systemwechsel ist dafür nicht nötig.",
                },
                {
                  question:
                    "Reicht eine Branchenlösung oder lieber ein Standard-ERP?",
                  answer:
                    "Branchenpakete für technischen Großhandel, Baustoff, Lebensmittel oder Textil bringen Großhandels-Spezifika ab Werk mit und verkürzen die Einführung. Standardsysteme sind flexibler, brauchen aber mehr Konfiguration. Für klar abgegrenzte Branchen lohnt sich das Branchenpaket in der Regel.",
                },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Großhandel-Software ist 2026 keine Produktentscheidung, sondern
              eine Landkarte aus neun Kategorien, die sauber zusammenspielen
              müssen. Das ERP ist das Rückgrat, aber CRM, Shop, EDI, PIM, DMS,
              BI und WMS lösen jeweils ein eigenes Problem, und die Qualität der
              Schnittstellen zwischen ihnen entscheidet mehr über den Erfolg als
              der Funktionsumfang des einzelnen Werkzeugs. Wer auswählt, sollte
              auf Integration, EDI, DATEV und E-Rechnung achten, die
              Customizing-Falle meiden und sich nicht vom Lizenzpreis täuschen
              lassen, der nur ein Fünftel der wahren Kosten ausmacht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die wichtigste strategische Weiche ist die Reihenfolge. Bevor ein
              Haus ein neues Großsystem kauft, lohnt der Blick auf die manuellen
              Engpässe, die sich mit einem KI- und Automatisierungs-Layer auf der
              vorhandenen Software in Wochen statt Monaten schließen lassen. Das
              senkt das Risiko, liefert schnellen ROI und macht das spätere
              Systemprojekt, falls es überhaupt nötig wird, leichter. Nicht
              alles neu kaufen, sondern erst die Prozesse modernisieren, auf der
              Software, die schon da ist.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
