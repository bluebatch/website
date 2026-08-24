import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import NumberedList from "@/components/ui/numbered-list";
import ProseColumns from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import SimpleCard from "@/components/cards/simple-card";
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import HeroStatBand from "@/components/heroes/hero-stat-band";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "Dokumentenmanagement-Software: die Auswahl für den Mittelstand",
  description:
    "Die Suchergebnisse zeigen Gratis-Tools für Privatnutzer oder Enterprise-Suiten für Konzerne. Wer 50 bis 1.000 Mitarbeitende und ein laufendes ERP hat, findet nichts. Was ein DMS löst, was Prozessarbeit bleibt und welches Lizenzmodell wann kippt.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Dokumentenmanagement-Software für den Mittelstand",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Dokumentenmanagement-Software", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokumentenmanagement-Software für den Mittelstand",
    description: meta.description,
    images: ogImages("Dokumentenmanagement-Software", "Services").map(
      (i) => i.url,
    ),
  },
  alternates: {
    canonical: "/services/dokumentenmanagement-software",
  },
};

const faqs = [
  {
    question: "Was ist Dokumentenmanagement-Software?",
    answer:
      "Dokumentenmanagement-Software, kurz DMS, ist ein System, das die Dokumente eines Unternehmens zentral ablegt, durchsuchbar macht, versioniert und mit Zugriffsrechten und Aufbewahrungsfristen versieht. Sie ersetzt gewachsene Netzlaufwerke, lokale Ordner und Papierarchive durch einen Ort, an dem jedes Dokument über seinen Inhalt und nicht über seinen Ablagepfad gefunden wird. Nicht enthalten ist der Prozess davor und danach: Wer ein Dokument erfasst, wer es einem Vorgang zuordnet und wer es freigibt, ist eine Frage der Arbeitsabläufe, nicht der Ablage.",
  },
  {
    question: "Was kostet Dokumentenmanagement-Software?",
    answer:
      "Es gibt zwei Preismodelle, und sie sind nicht vergleichbar. Einmallizenzen werden pro gleichzeitiger Verbindung verkauft, im Markt etwa ab 125 Euro netto je Verbindung, unbegrenzt viele Nutzer dahinter. Abo-Systeme rechnen pro Kopf und Monat ab, die genannten Einstiegspreise reichen von rund 6 bis 27 Euro je Nutzer und Monat. Bei 40 Büroarbeitsplätzen und 15 gleichzeitigen Verbindungen stehen damit rund 1.900 Euro einmalig gegen etwa 13.000 Euro im Jahr. Die Systeme leisten allerdings Unterschiedliches: Die Einmallizenz ist im Kern ein Archiv mit Volltextsuche, das Abo bringt Workflows, Freigaben und Konnektoren mit.",
  },
  {
    question: "Wie lange müssen Dokumente aufbewahrt werden?",
    answer:
      "Die Fristen sind nach Unterlagenart gestaffelt und stehen in § 147 Absatz 3 der Abgabenordnung. Zehn Jahre gelten für Bücher, Aufzeichnungen, Inventare, Jahresabschlüsse, Lageberichte und die Eröffnungsbilanz. Acht Jahre gelten für Buchungsbelege, passend dazu schreibt § 14b Absatz 1 UStG für Rechnungen ebenfalls acht Jahre vor. Sechs Jahre gelten für alle übrigen Unterlagen, insbesondere empfangene und abgesandte Handels- und Geschäftsbriefe. Die Frist beginnt jeweils mit dem Schluss des Kalenderjahres, in dem die letzte Eintragung gemacht oder das Dokument erstellt oder empfangen wurde.",
  },
  {
    question: "Ist ein DMS dasselbe wie ein ECM oder ein Archiv?",
    answer:
      "Nein, auch wenn die Begriffe im Markt durcheinandergehen. Ein Archiv legt Dokumente unveränderbar und langfristig ab, mehr nicht. Ein DMS setzt darauf auf und ergänzt Suche, Versionierung, Rechte und Metadaten für die laufende Arbeit. ECM ist die weiteste Klammer und meint alle Inhalte über ihren gesamten Lebenszyklus, also auch Web-Inhalte, Zusammenarbeit und Prozesse. Praktisch relevant ist der Unterschied bei der Frage, wofür Sie bezahlen: Viele Angebote im Einstiegssegment sind Archive, viele Angebote im oberen Segment sind ECM-Suiten, deren Funktionsumfang Sie nie ausschöpfen werden.",
  },
  {
    question: "Was löst ein DMS nicht?",
    answer:
      "Alles, was vor der Ablage passiert. Ein DMS legt ab, findet wieder, versioniert und schützt. Es erfasst keine Dokumente von selbst, es ordnet sie keinem Auftrag, Lieferanten oder Projekt zu, es entscheidet keine Freigabe und es übergibt keine Daten an das ERP. Genau dieser Teil bindet die meiste Arbeitszeit. Wer ein DMS einführt, ohne die Erfassung und Zuordnung zu automatisieren, verlagert die Handarbeit nur vom Ablegen ins Verschlagworten.",
  },
  {
    question: "Lohnt sich ein Open-Source-DMS?",
    answer:
      "Für einen abgegrenzten Zweck ja, kostenlos ist es trotzdem nicht. Systeme wie Paperless-ngx oder Papermerge haben keine Lizenzkosten, brauchen aber einen Server für rund 15 bis 40 Euro im Monat und regelmäßige Pflege: Updates, Backups, Wiederherstellungstests. Rechnen Sie mit ein bis zwei Personentagen im Jahr, dann liegen die realen Betriebskosten bei ungefähr 700 bis 1.500 Euro jährlich statt bei null. Dafür bekommen Sie volle Datenhoheit und keine Nutzerstaffel. Was Sie nicht bekommen, ist Support mit Reaktionszeit, und das ist bei revisionspflichtigen Unterlagen eine bewusste Entscheidung, keine Nebensache.",
  },
  {
    question:
      "Ab welcher Unternehmensgröße lohnt sich Dokumentenmanagement-Software?",
    answer:
      "Die Zahl der Mitarbeitenden ist der falsche Maßstab. Entscheidend ist, wie viele Menschen regelmäßig nach Dokumenten suchen, die jemand anderes abgelegt hat. Ab etwa 20 bis 30 Büroarbeitsplätzen mit geteilten Vorgängen wird die Suchzeit zu einem Posten, der ein System trägt. Darunter lohnt sich meist eine aufgeräumte Ablagestruktur mehr als ein neues Werkzeug. Nach oben endet es dort, wo die Prozessvielfalt eine Plattform verlangt, in der Regel jenseits von 1.000 Mitarbeitenden.",
  },
  {
    question: "Brauchen wir ein DMS oder eine Automatisierung?",
    answer:
      "Das hängt daran, wo die Zeit verloren geht. Wenn Ihre Leute Dokumente nicht wiederfinden, brauchen Sie ein Ablagesystem. Wenn Ihre Leute Dokumente abtippen, zuordnen, weiterleiten und in ein anderes System übertragen, brauchen Sie eine Automatisierung, und die läuft auf dem ERP, das Sie schon haben. In den meisten Häusern, die wir sehen, ist der zweite Posten der größere. Der ehrlichste erste Schritt ist deshalb, zwei Wochen lang mitzuschreiben, wofür die Zeit draufgeht, bevor irgendein System ausgesucht wird.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Dokumente & Ablage
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Dokumentenmanagement-Software: die Auswahl für den Mittelstand
            </Hero2ColumnHeadline>
            <GeoSummary>
              Dokumentenmanagement-Software legt die Dokumente eines
              Unternehmens zentral ab, macht sie durchsuchbar, versioniert sie
              und verwaltet Zugriffsrechte und Aufbewahrungsfristen. Wer danach
              sucht, findet auf den vorderen Plätzen Gratis-Werkzeuge für
              Privatnutzer und Suiten für Banken und Konzerne. Diese Seite
              schließt die Lücke dazwischen: für Unternehmen mit 50 bis 1.000
              Mitarbeitenden und einem laufenden ERP. Sie beziffert, was Suchen
              heute kostet, stellt die beiden unvereinbaren Lizenzmodelle
              gegenüber, trennt, was ein DMS löst und was Prozessarbeit bleibt,
              und nennt die Aufbewahrungsfristen mit Paragraf.
            </GeoSummary>
            <HeroStatBand
              stats={[
                { value: "6 / 8 / 10", label: "Jahre Aufbewahrung" },
                { value: "125 €", label: "einmalig je Verbindung" },
                { value: "6 bis 27 €", label: "je Nutzer und Monat" },
                { value: "0 von 6", label: "beziffern den Ist-Zustand" },
              ]}
            />
            <Hero2ColumnCallToAction>
              <ContactButton>Ablage-Situation besprechen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/dokumentenmanagement-software/hero.png"
              alt="Gang zwischen zwei Regalreihen mit Aktenordnern in einem Firmenarchiv"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem der Suche</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der Markt bedient zwei Enden und lässt die Mitte aus
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir haben die neunzehn Seiten durchgesehen, die auf
            „Dokumentenmanagement Software“ ranken, und sechs davon vollständig
            gelesen. Das Ergebnis ist gleichmäßig verteilt und trotzdem
            unbrauchbar.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumns.Item title="Die Gratis-Ecke">
            Auf Platz fünf steht ein Artikel über das beste System „für
            Privatnutzer“, zwei weitere Treffer ranken auf „kostenlos“, ein
            vierter richtet sich ausdrücklich an kleinere Kommunen und
            Fachbereiche mit knappem Budget. Für ein Unternehmen mit vierzig
            Büroarbeitsplätzen ist davon nichts brauchbar.
          </ProseColumns.Item>
          <ProseColumns.Item title="Die Konzern-Ecke">
            Am anderen Ende beschreiben die Hersteller ihre Referenzen: Banken,
            Versicherungen, Energiewirtschaft, öffentlicher Dienst, über 5.400
            Kunden. Ein Vergleich mit zehn Systemen adressiert „mittlere bis
            große Unternehmen“ und nennt dabei keinen einzigen Euro-Betrag.
          </ProseColumns.Item>
          <ProseColumns.Item title="Die Lücke dazwischen">
            Dazwischen steht niemand. Ein Bewertungsportal führt „Mittelstand“
            zwar als Filter mit 63 Produkten, aber genau das ist das Problem:
            Aus einer Liste mit 225 Einträgen wird eine Liste mit 63. Eine
            Entscheidung wird daraus nicht.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was das Suchen heute kostet</Typo.H2>
        <Typo.Paragraph>
          Keine der sechs gelesenen Seiten rechnet vor, was der Zustand ohne
          System kostet. Die Rede ist von „Papierstapel, Ordner-Chaos und
          Versions-Wirrwarr“ und von „Zeit- und Kostenersparnis“, ohne eine
          einzige Zahl. Damit fehlt die Vergleichsgröße, gegen die jeder
          genannte Preis antreten müsste. Also rechnen wir sie auf, mit offen
          genannten Annahmen.
        </Typo.Paragraph>

        <SimpleGrid cols={2} className="mt-10 items-center">
          <div>
            <NumberedList>
              <NumberedList.Item title="40 Büroarbeitsplätze.">
                Ein Großhändler mit rund 150 Mitarbeitenden, davon vierzig in
                Vertriebsinnendienst, Einkauf, Buchhaltung und Disposition.
              </NumberedList.Item>
              <NumberedList.Item title="12 Minuten Suchzeit am Tag.">
                Bewusst niedrig angesetzt. Gezählt wird nur echtes Suchen nach
                einem Dokument, das jemand anderes abgelegt hat, nicht das
                Lesen und nicht das Ablegen selbst.
              </NumberedList.Item>
              <NumberedList.Item title="8 Stunden am Tag, 1.760 im Jahr.">
                Vierzig mal zwölf Minuten sind acht Stunden täglich, also eine
                volle Stelle. Auf 220 Arbeitstage sind das 1.760 Stunden.
              </NumberedList.Item>
              <NumberedList.Item title="96.800 Euro im Jahr.">
                Bei 55 Euro Vollkosten je Stunde. Das ist der Posten, gegen den
                jedes Angebot antritt.
              </NumberedList.Item>
            </NumberedList>
          </div>
          <Image
            src="/images/dokumentenmanagement-software/suchzeit.png"
            alt="Balkenvergleich der täglichen Suchzeit je Büroarbeitsplatz mit und ohne Ablagesystem"
            width={1400}
            height={788}
            className="rounded-xl shadow-sm"
          />
        </SimpleGrid>

        <Typo.Paragraph className="mt-8">
          Ein DMS holt davon nicht alles. Realistisch verschwinden rund zwei
          Drittel der Suchzeit, also grob 58.000 Euro im Jahr, und dem stehen
          bei einem Abo-System für vierzig Nutzer etwa 13.000 Euro Lizenz plus
          Einführung gegenüber. Die Rechnung trägt also deutlich.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Ehrlich benannt, wo sie kippt: Wenn die Dokumente gar nicht
          strukturiert hereinkommen, also als Papier oder als PDF im
          Mail-Anhang ohne verwertbare Metadaten, dann verschiebt das System
          die Handarbeit nur vom Suchen ins Verschlagworten. Dann bleibt von
          den zwei Dritteln vielleicht ein Drittel übrig, und die Einführung
          rechnet sich erst im zweiten Jahr. Welcher der beiden Fälle bei Ihnen
          vorliegt, entscheidet sich vor der Systemauswahl, nicht danach.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Zwei Lizenzmodelle, die niemand nebeneinanderstellt</Typo.H2>
        <Typo.Paragraph>
          Die Preise im Markt sind nicht geheim, sie sind nur unvergleichbar.
          Das eine Modell verkauft eine Einmallizenz je gleichzeitiger
          Verbindung, das andere ein Abo je Kopf und Monat. Keine der gelesenen
          Quellen stellt beide gegenüber, und keine sagt, ab wann welches
          kippt. Dabei ist das die erste echte Entscheidung, lange vor der
          Funktionsliste.
        </Typo.Paragraph>

        <Image
          src="/images/dokumentenmanagement-software/lizenzmodelle.png"
          alt="Gegenüberstellung von Einmallizenz je gleichzeitiger Verbindung und Abo je Nutzer und Monat"
          width={1400}
          height={788}
          className="mt-8 rounded-xl shadow-sm"
        />

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Modell</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis im Markt</DataTable.HeaderCell>
              <DataTable.HeaderCell>
                40 Büroarbeitsplätze, 3 Jahre
              </DataTable.HeaderCell>
              <DataTable.HeaderCell>Passt, wenn</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Einmallizenz je Verbindung
              </DataTable.Cell>
              <DataTable.Cell>
                ab 125 € netto je gleichzeitiger Verbindung, Updates für 24
                bis 48 Monate inklusive
              </DataTable.Cell>
              <DataTable.Cell>
                rund 1.900 € einmalig bei 15 gleichzeitigen Verbindungen
              </DataTable.Cell>
              <DataTable.Cell>
                Sie brauchen Ablage, Volltextsuche und ein revisionssicheres
                Archiv, aber keine Workflows
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Abo je Nutzer und Monat</DataTable.Cell>
              <DataTable.Cell>
                ab 6 bis 27 € je Nutzer und Monat, je nach Funktionsumfang
              </DataTable.Cell>
              <DataTable.Cell>
                rund 13.000 € im Jahr, also etwa 39.000 € in drei Jahren
              </DataTable.Cell>
              <DataTable.Cell>
                Sie brauchen Freigaben, Aktenstrukturen und fertige Konnektoren
                ins ERP
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Open Source, selbst betrieben</DataTable.Cell>
              <DataTable.Cell>
                keine Lizenzkosten, Server ab 15 bis 40 € im Monat
              </DataTable.Cell>
              <DataTable.Cell>
                rund 2.100 bis 4.500 € inklusive ein bis zwei Personentagen
                Pflege im Jahr
              </DataTable.Cell>
              <DataTable.Cell>
                Sie haben eigene IT, wollen volle Datenhoheit und kommen ohne
                Support-Reaktionszeit aus
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-8">
          Der Faktor zwanzig zwischen der ersten und der zweiten Zeile ist
          echt, aber er vergleicht nicht dasselbe. Die Einmallizenz ist im Kern
          ein Archiv mit sehr guter Volltextsuche. Das Abo bringt Workflows,
          Freigabestufen und fertige Anbindungen mit. Wer nur ablegen und
          finden will, zahlt im Abo für Funktionen, die er nie einschaltet. Wer
          Freigaben braucht und die Einmallizenz nimmt, baut sie hinterher von
          Hand nach und zahlt in Arbeitszeit.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Bemerkenswert ist auch, was die dritte Zeile im Markt kostet: nichts.
          Eine der rankenden Seiten nennt Open-Source-Systeme „kostengünstig
          bzw. kostenlos“ und beziffert im selben Text 5 bis 30 Euro je Nutzer
          und Monat für die kommerzielle Alternative. Ein bezifferter Preis
          steht damit gegen eine unbezifferte Null. Der Server und die Pflege
          fallen trotzdem an.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was ein DMS löst und was Prozessarbeit bleibt</Typo.H2>
        <Typo.Paragraph>
          Das ist der Punkt, an dem eingeführte Systeme enttäuschen. Alle
          Quellen behandeln das DMS als Ablageort, und als Ablageort ist es
          auch gut. Keine sagt, welcher Teil der Dokumentenarbeit damit
          wirklich verschwindet und welcher als Prozessproblem bestehen bleibt.
        </Typo.Paragraph>

        <Image
          src="/images/dokumentenmanagement-software/trennung.png"
          alt="Zwei Spalten: Ablegen, Suchen und Versionieren löst das Ablagesystem, Erfassen, Zuordnen und Freigeben bleibt Prozessarbeit"
          width={1400}
          height={788}
          className="mt-8 rounded-xl shadow-sm"
        />

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Ablegen und Wiederfinden"
              description="Volltextsuche über Inhalte statt über Ordnerpfade, Metadaten, gespeicherte Suchen. Das ist die Kernleistung und sie funktioniert."
            />
            <ProsCons.Item
              title="Versionierung und Nachvollziehbarkeit"
              description="Wer hat wann was geändert, welche Fassung galt zum Zeitpunkt X. Ohne System ist das eine Dateiname-mit-final-2-Frage."
            />
            <ProsCons.Item
              title="Rechte und Aufbewahrung"
              description="Zugriff nach Rolle, Unveränderbarkeit, automatische Fristenüberwachung und dokumentierte Löschung nach Fristablauf."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Erfassen"
              description="Ein DMS holt nichts von selbst aus Postfach, Portal oder Briefpost und liest keine Positionsdaten aus. Das bleibt Handarbeit oder wird automatisiert."
            />
            <ProsCons.Item
              title="Zuordnen"
              description="Welcher Lieferschein gehört zu welcher Bestellung, welcher Vertrag zu welchem Kunden. Die Verknüpfung entsteht nicht durch Ablage, sondern durch Regeln auf den ERP-Daten."
            />
            <ProsCons.Item
              title="Freigeben und Weiterverarbeiten"
              description="Die Entscheidung selbst und die Übergabe der Daten ins ERP sind Prozessschritte. Genau hier geht in den meisten Häusern die meiste Zeit verloren."
            />
          </ProsCons.Cons>
        </ProsCons>

        <Typo.Paragraph className="mt-10">
          Daraus folgt eine unbequeme Reihenfolge: Wer erst das System kauft
          und dann feststellt, dass die Erfassung Handarbeit bleibt, hat die
          Sucharbeit gegen Verschlagwortungsarbeit getauscht. Wie der
          umgekehrte Weg für einen konkreten Dokumenttyp aussieht, steht in
          unserer Seite zur{" "}
          <InternalLink href="/services/digitale-rechnungsverarbeitung">
            digitalen Rechnungsverarbeitung
          </InternalLink>
          , und für den Sonderfall der gesetzlichen Formatpflicht in der{" "}
          <InternalLink href="/blog/e-rechnung-automatisieren">
            Anleitung zur E-Rechnung
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Aufbewahrung: welches Dokument wie lange</Typo.H2>
        <Typo.Paragraph>
          Nur zwei der sechs gelesenen Seiten behandeln die Aufbewahrungspflicht
          überhaupt, und die eine, die die Normen nennt, nennt keine einzige
          Frist. Dabei ist das die Anforderung, die den Funktionsumfang
          tatsächlich bestimmt: Ein System, das nach Ablauf nicht sauber löschen
          kann, erzeugt später Arbeit statt sie zu sparen.
        </Typo.Paragraph>

        <Image
          src="/images/dokumentenmanagement-software/fristen.png"
          alt="Zeitstrahl mit drei Stationen: Geschäftsbriefe, Rechnungen und Jahresabschlüsse"
          width={1400}
          height={788}
          className="mt-8 rounded-xl shadow-sm"
        />

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Unterlagenart</DataTable.HeaderCell>
              <DataTable.HeaderCell>Frist</DataTable.HeaderCell>
              <DataTable.HeaderCell>Rechtsgrundlage</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Bücher, Aufzeichnungen, Inventare, Jahresabschlüsse,
                Lageberichte, Eröffnungsbilanz
              </DataTable.Cell>
              <DataTable.Cell>10 Jahre</DataTable.Cell>
              <DataTable.Cell>§ 147 Abs. 3 AO</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Buchungsbelege</DataTable.Cell>
              <DataTable.Cell>8 Jahre</DataTable.Cell>
              <DataTable.Cell>§ 147 Abs. 3 AO</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Rechnungen</DataTable.Cell>
              <DataTable.Cell>8 Jahre</DataTable.Cell>
              <DataTable.Cell>§ 14b Abs. 1 UStG</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Empfangene und abgesandte Handels- und Geschäftsbriefe, sonstige
                Unterlagen
              </DataTable.Cell>
              <DataTable.Cell>6 Jahre</DataTable.Cell>
              <DataTable.Cell>§ 147 Abs. 3 AO</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-8">
          Die Frist beginnt jeweils mit dem Schluss des Kalenderjahres, in dem
          die letzte Eintragung gemacht oder das Dokument erstellt oder
          empfangen wurde. Eine 2026 ausgestellte Rechnung ist also bis Ende
          2034 aufzubewahren. Für die Systemauswahl heißt das dreierlei:
          Unveränderbarkeit ab Ablage, ein Protokoll darüber, wer wann
          zugegriffen hat, und ein Export, der die Dokumente samt Metadaten
          wieder herausgibt, wenn Sie den Anbieter wechseln. Der dritte Punkt
          steht in keinem Datenblatt und ist der, der später weh tut.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Vier Fragen, die die Auswahl entscheiden</Typo.H2>
        <Typo.Paragraph>
          Funktionslisten helfen nicht weiter, weil jedes System alles
          ankreuzt. Diese vier Fragen trennen dagegen tatsächlich.
        </Typo.Paragraph>

        <SimpleGrid cols={2} className="mt-10">
          <SimpleCard>
            <Typo.H3>Wie viele arbeiten gleichzeitig darin?</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Nicht wie viele Mitarbeitende Sie haben, sondern wie viele
              zeitgleich ein Dokument öffnen. Bei vierzig Köpfen und fünfzehn
              gleichzeitigen Zugriffen ist das Verbindungsmodell deutlich
              günstiger. Sind alle vierzig dauerhaft drin, dreht sich das.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Kommen die Dokumente strukturiert herein?</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Wenn ein spürbarer Teil als Papier oder als PDF ohne verwertbare
              Daten ankommt, ist die Erfassung Ihr eigentliches Projekt. Dann
              lohnt sich ein einfaches Archiv plus Automatisierung mehr als
              eine teure Plattform.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Muss das ERP mitreden?</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Sobald Dokumente an Aufträge, Bestellungen oder Lieferanten
              hängen sollen, brauchen Sie einen lesenden Zugriff auf Ihre
              Stammdaten. Fertige Konnektoren gibt es nur im Abo-Segment, alles
              andere wird gebaut.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Wie kommen Sie wieder heraus?</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Lassen Sie sich vor dem Vertrag zeigen, wie ein vollständiger
              Export samt Metadaten und Versionshistorie aussieht. Bei
              zehnjährigen Fristen überlebt der Datenbestand die
              Anbieterbeziehung mit hoher Wahrscheinlichkeit.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-dark">
        <Typo.H2 className="text-white">Wie wir da herangehen</Typo.H2>
        <Typo.Paragraph className="text-gray-200">
          Wir verkaufen kein DMS. Wir schauen uns an, wo die Dokumentenarbeit
          Zeit frisst, und automatisieren den Teil, den ein Ablagesystem
          ohnehin nicht löst: Erfassen, Zuordnen und die Übergabe ins System,
          das Sie schon haben. Wenn dabei herauskommt, dass Sie zuerst eine
          Ablage brauchen, sagen wir das.
        </Typo.Paragraph>
        <StatsList
          className="mt-12"
          cols={3}
          stats={[
            { value: 2, label: "Wochen Messung vor jeder Empfehlung" },
            { value: 5, label: "Arbeitstage bis zum ersten Piloten" },
            { value: 1000, label: "Euro einmalig für den ersten Anwendungsfall", prefix: "" },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <div id="faq">
          <FaqContainer faqs={faqs}>
            <FaqContainer.Headline>
              Häufige Fragen zu Dokumentenmanagement-Software
            </FaqContainer.Headline>
          </FaqContainer>
        </div>
      </ContentWrapper>

      <ConsultationCtaDefault />
    </>
  );
}
