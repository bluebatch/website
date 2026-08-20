import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import SimpleCard from "@/components/cards/simple-card";
import RoiCalculation from "@/components/sections/roi-calculation";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "Lieferantenmanagement: welcher Schritt Software wird | Bluebatch",
  description:
    "Vier Standardwerke, vier verschiedene Phasenmodelle und in keinem eine Zahl. Was Lieferantenmanagement bei 80 bis 300 Lieferanten wirklich kostet, welcher Schritt sich automatisieren lässt und welcher eine Entscheidung bleibt.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Lieferantenmanagement: was sich automatisieren lässt und was nicht",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Lieferantenmanagement", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Lieferantenmanagement: was sich automatisieren lässt und was nicht",
    description: meta.description,
    images: ogImages("Lieferantenmanagement", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/lieferantenmanagement",
  },
};

const faqs = [
  {
    question: "Was ist Lieferantenmanagement?",
    answer:
      "Lieferantenmanagement ist die planvolle Steuerung aller Lieferantenbeziehungen über den gesamten Lebenszyklus, von der Auswahl über die laufende Bewertung bis zur Trennung. Der Unterschied zum reinen Einkauf liegt im Zeithorizont: Der Einkauf entscheidet über eine Bestellung, das Lieferantenmanagement über die Beziehung dahinter. In der Praxis besteht es aus fünf wiederkehrenden Aufgaben, nämlich Auswahl, Onboarding, Bewertung, Entwicklung und Controlling. Wie viele Phasen eine Quelle daraus macht, ist Geschmackssache, die Aufgaben selbst sind es nicht.",
  },
  {
    question: "Warum beschreiben verschiedene Quellen unterschiedlich viele Phasen?",
    answer:
      "Weil es keine Norm dafür gibt. Die gängigen Darstellungen zählen vier, fünf oder sechs Phasen und ordnen sie teils gegenläufig an: Eine Quelle beginnt mit der Bewertung, eine andere endet damit. Beides ist vertretbar, weil Bewertung sowohl vor der Auswahl eines neuen Lieferanten stattfindet als auch danach fortlaufend. Praktisch relevant ist die Phasenzahl nicht. Relevant ist, welche der Aufgaben in Ihrem Haus tatsächlich jemand macht und mit welchem Werkzeug.",
  },
  {
    question: "Lohnt sich eine eigene Lieferantenmanagement-Software?",
    answer:
      "Bei 80 bis 300 aktiven Lieferanten meistens nicht als eigenes System. Die klassischen SRM-Plattformen sind für Landschaften mit tausenden Lieferanten gebaut und bringen einen Verwaltungsaufwand mit, der sich bei dieser Größe nicht rechnet. Der wirksamere Weg ist, die wiederkehrenden Aufgaben an das anzudocken, was ohnehin läuft, also an das ERP und das Postfach. Fristenüberwachung, Nachweisanforderung und Kennzahlenaufbereitung laufen dann automatisch, ohne dass jemand ein zweites System pflegen muss.",
  },
  {
    question: "Was lässt sich am Lieferantenmanagement automatisieren?",
    answer:
      "Alles, was Regeln folgt und keine Abwägung braucht. Das sind vor allem drei Blöcke: das Nachhalten von Fristen und Nachweisen, also Zertifikate, Versicherungsnachweise, Unbedenklichkeitsbescheinigungen; die Pflege und Prüfung von Stammdaten inklusive Dublettenerkennung; und das Zusammentragen von Kennzahlen aus dem ERP, also Termintreue, Mengenabweichungen und Reklamationsquote. Nicht automatisierbar sind die Entscheidungen selbst: welchen Lieferanten Sie aufnehmen, wie Sie ein Entwicklungsgespräch führen, wann Sie eskalieren.",
  },
  {
    question: "Was kostet die Automatisierung im Lieferantenmanagement?",
    answer:
      "Ein erster Anwendungsfall, also zum Beispiel die vollständige Fristen- und Nachweisüberwachung für alle Lieferanten, liegt bei uns ab 1.000 Euro einmalig und ab 50 Euro im Monat im Betrieb. Bis zum Piloten sind es in der Regel fünf Arbeitstage. Beim Betrieb in der eigenen Umgebung kommt ein kleiner Server ab etwa 15 Euro im Monat dazu. Jeder weitere Anwendungsfall auf derselben Grundlage ist deutlich günstiger, weil Anbindung, Protokollierung und Betrieb bereits stehen.",
  },
  {
    question: "Wie viele Lieferanten sollte man aktiv bewerten?",
    answer:
      "Nicht alle. Bei einem typischen Großhändler machen zwanzig bis dreißig Lieferanten den Großteil des Einkaufsvolumens aus, und nur diese rechtfertigen eine jährliche Bewertung mit Gespräch. Für den langen Rest reicht eine automatische Überwachung, die anschlägt, wenn Termintreue oder Reklamationsquote aus dem Rahmen fallen. Genau diese Zweiteilung ist der Grund, warum die Automatisierung hier trägt: Sie macht den langen Rest überhaupt erst beobachtbar, ohne dafür Arbeitszeit zu binden.",
  },
  {
    question: "Brauchen wir dafür ein neues ERP?",
    answer:
      "Nein. Die Daten, die es braucht, liegen bereits im vorhandenen System: Lieferantenstamm, Bestellungen, Wareneingänge, Reklamationen. Nötig ist ein lesender Zugang darauf, über eine Schnittstelle, einen Datenbankzugriff oder im einfachsten Fall einen regelmäßigen Export. Wir haben das an Systemen wie microtech büro+, Navision und e.bootis angebunden. Ein Systemwechsel ist an keiner Stelle Voraussetzung und wäre für diesen Zweck auch der teuerste denkbare Weg.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Einkauf & Beschaffung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Lieferantenmanagement: welcher Schritt Software wird und welcher
              Mensch bleibt
            </Hero2ColumnHeadline>
            <GeoSummary>
              Lieferantenmanagement ist die planvolle Steuerung aller
              Lieferantenbeziehungen von der Auswahl bis zur Trennung. Wer den
              Begriff nachschlägt, findet vier verschiedene Phasenmodelle mit
              vier, fünf oder sechs Stufen, die sich in der Reihenfolge
              widersprechen, und in sieben gelesenen Fachbeiträgen genau eine
              belastbare Zahl. Diese Seite macht es umgekehrt: Sie rechnet vor,
              was die Handarbeit bei 150 Lieferanten im Jahr kostet, nämlich
              rund 133 Arbeitsstunden oder 3.710 Euro, und trennt Schritt für
              Schritt, was Software übernehmen kann und was eine Entscheidung
              bleibt. Für Großhändler und produzierende Betriebe mit 50 bis
              1.000 Mitarbeitenden. Ein erster Anwendungsfall liegt bei uns ab
              1.000 Euro einmalig und 50 Euro im Monat, der Pilot steht in fünf
              Arbeitstagen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Lieferantenprozess durchsprechen, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Fristen und Nachweise • Stammdaten • Kennzahlen aus dem ERP
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/lieferantenmanagement/hero.png"
              type="image"
              alt="Leerer Schreibtisch mit einem hohen Stapel Ringordner und losen Papieren im Morgenlicht"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Der Befund, der die ganze Seite begründet */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 4, label: "gängige Phasenmodelle, alle unterschiedlich" },
            { value: 7, label: "gelesene Fachbeiträge zum Thema" },
            { value: 1, label: "belastbare Zahl in diesen sieben Beiträgen" },
          ]}
        />
      </ContentWrapper>

      {/* Kernsektion: der Widerspruch, den niemand benennt */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ausgangspunkt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Standardwerke, vier verschiedene Modelle
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer sich in das Thema einliest, stößt überall auf ein Phasenmodell.
            Das wirkt nach Konsens, ist aber keiner. Legt man die gängigen
            Darstellungen nebeneinander, unterscheiden sie sich nicht nur in der
            Anzahl der Stufen, sondern auch in deren Reihenfolge. Keine der
            Quellen erwähnt, dass es die anderen gibt.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Quelle</DataTable.HeaderCell>
              <DataTable.HeaderCell>Stufen</DataTable.HeaderCell>
              <DataTable.HeaderCell>Reihenfolge</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>ECM-Anbieter</DataTable.Cell>
              <DataTable.Cell>fünf</DataTable.Cell>
              <DataTable.Cell>
                Onboarding, Integration, Bewertung, Entwicklung, Controlling
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Beschaffungsplattform</DataTable.Cell>
              <DataTable.Cell>vier</DataTable.Cell>
              <DataTable.Cell>
                Auswahl, Qualifizierung, Klassifizierung, Bewertung und
                Entwicklung
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Kaufmännisches Lexikon</DataTable.Cell>
              <DataTable.Cell>vier</DataTable.Cell>
              <DataTable.Cell>
                Bewertung, Entwicklung, Integration, Controlling
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Weiterbildungsanbieter</DataTable.Cell>
              <DataTable.Cell>sechs</DataTable.Cell>
              <DataTable.Cell>
                Identifikation, Bewertung, Klassifizierung, Entwicklung,
                Auswahl, Integration
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Der auffälligste Unterschied steht in der ersten und der dritten
          Zeile. Eine Quelle beginnt mit dem Onboarding und bewertet danach, die
          andere beginnt mit der Bewertung und integriert danach. Beides ist
          begründbar, weil bewertet wird, bevor man einen neuen Lieferanten
          aufnimmt, und danach fortlaufend weiter. Genau deshalb führt die Frage
          nach der richtigen Phasenzahl in die Irre. Wer drei dieser Artikel
          liest, hat am Ende nicht ein Modell, sondern drei, und keine
          Entscheidung ist dadurch leichter geworden.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Der gemeinsame Kern */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Der gemeinsame Kern der vier Modelle</Typo.H2>
        <Typo.Paragraph>
          Zieht man die Unterschiede ab, bleiben fünf Aufgaben übrig, die in
          jeder der Darstellungen vorkommen, nur an unterschiedlicher Stelle.
          Diese fünf sind das, worum es tatsächlich geht.
        </Typo.Paragraph>

        <Image
          src="/images/lieferantenmanagement/kreislauf.png"
          alt="Prozesskette mit fünf Stationen: Auswahl, Onboarding, Bewertung, Entwicklung, Controlling"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Auswahl und Onboarding">
            Am Anfang steht die Frage, mit wem überhaupt gearbeitet wird, und
            danach die Aufnahme in die eigenen Abläufe. Das ist der Teil mit dem
            meisten Papier: Stammdaten anlegen, Konditionen hinterlegen,
            Nachweise anfordern, Zahlungsdaten prüfen. Fast alles daran ist
            Formularverkehr, und fast alles wiederholt sich bei jedem neuen
            Lieferanten identisch.
          </ProseColumnsItem>
          <ProseColumnsItem title="Bewertung, Entwicklung, Controlling">
            Danach beginnt die laufende Arbeit: messen, wie zuverlässig geliefert
            wird, mit den wichtigen Lieferanten darüber sprechen und im Blick
            behalten, ob sich etwas verschlechtert. Hier liegt der fachliche
            Wert des Lieferantenmanagements, und hier fällt es in der Praxis am
            häufigsten aus. Warum das so ist, zeigt die Rechnung weiter unten.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Die Trennung, die keine Quelle macht */}
      <ContentWrapper>
        <Typo.H2>Welcher Schritt wird Software, welcher bleibt Mensch</Typo.H2>
        <Typo.Paragraph>
          Alle gelesenen Quellen empfehlen an dieser Stelle ein System, ein
          SRM-Werkzeug oder eine ECM-Plattform, und hören dort auf. Keine geht
          die Aufgaben einzeln durch. Das ist die eigentlich nützliche
          Unterscheidung, denn sie entscheidet darüber, was ein Projekt kostet
          und was es überhaupt bringen kann. Die Trennlinie verläuft nicht
          zwischen wichtig und unwichtig, sondern zwischen Regel und Abwägung.
        </Typo.Paragraph>

        <Image
          src="/images/lieferantenmanagement/automatisierbar.png"
          alt="Zweispaltiger Vergleich: Software übernimmt Stammdaten, Fristen und Kennzahlen, beim Menschen bleiben Auswahl, Gespräch und Eskalation"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Aufgabe</DataTable.HeaderCell>
              <DataTable.HeaderCell>Erledigt das</DataTable.HeaderCell>
              <DataTable.HeaderCell>Warum</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Nachweise und Fristen nachhalten
              </DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Ein Zertifikat läuft an einem festen Datum ab. Anfordern,
                erinnern, ablegen und den Stammsatz aktualisieren folgt einer
                Regel ohne jeden Ermessensspielraum.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Stammdaten pflegen und prüfen</DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Dubletten, unvollständige Bankverbindungen und veraltete
                Ansprechpartner lassen sich maschinell zuverlässiger finden als
                im Durchsehen einer Liste.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Kennzahlen zusammentragen</DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Termintreue, Mengenabweichung und Reklamationsquote stehen
                bereits im ERP. Sie zu berechnen ist Rechenarbeit, keine
                Beurteilung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Auffälligkeiten melden</DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Ein Schwellenwert schlägt an oder nicht. Was danach passiert,
                ist wieder Sache eines Menschen.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Lieferanten auswählen</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Die Entscheidung wiegt Preis, Verlässlichkeit, Erreichbarkeit
                und das Bauchgefühl aus einem Werksbesuch gegeneinander ab. Das
                ist keine Rechnung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Entwicklungsgespräch führen</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Ein Lieferant verbessert sich, weil eine Beziehung besteht.
                Vorbereiten kann die Software das Gespräch, führen nicht.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Eskalieren und trennen</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Wann eine Lieferbeziehung endet, hängt an Ersatzbeschaffung,
                laufenden Projekten und Marktlage. Diese Abwägung gehört nicht
                in eine Regel.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die Aufteilung hat eine unangenehme Konsequenz, die man ehrlich
          benennen sollte: Der automatisierbare Teil ist der weniger
          anspruchsvolle. Software nimmt Ihnen nicht die Beurteilung eines
          Lieferanten ab, sie nimmt Ihnen das Zusammensuchen der Grundlage ab.
          Das klingt nach wenig und ist trotzdem der entscheidende Punkt, weil
          genau dieses Zusammensuchen der Grund ist, warum die Beurteilung
          unterbleibt.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Der stärkste Hebel: die Ist-Zustands-Rechnung */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was die Handarbeit heute kostet</Typo.H2>
        <Typo.Paragraph>
          In den sieben gelesenen Fachbeiträgen steht genau eine belastbare
          Zahl, und selbst die Produktseite eines der größten Anbieter nennt
          weder einen Preis noch eine Einsparung. Deshalb hier die Rechnung, die
          fehlt. Sie ist bewusst konservativ angesetzt, damit Sie sie mit Ihren
          eigenen Zahlen nachrechnen können.
        </Typo.Paragraph>

        <RoiCalculation className="my-8">
          <RoiCalculation.Assumption>
            Großhändler mit 150 aktiven Lieferanten, davon 40 mit
            nachweispflichtigen Zertifikaten. Innendienst, Vollkosten 28 Euro je
            Stunde.
          </RoiCalculation.Assumption>
          <RoiCalculation.Row label="Stammdaten pflegen: 150 Lieferanten × 20 Minuten im Jahr">
            50 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Nachweise anfordern und ablegen: 40 × 2 × 15 Minuten">
            20 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Jahresbewertung vorbereiten: 150 × 25 Minuten">
            62,5 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Summe Arbeitszeit im Jahr" highlight>
            132,5 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Total label="Kosten der Handarbeit im Jahr">
            3.710 €
          </RoiCalculation.Total>
          <RoiCalculation.Source>
            Vollkostensatz 28 €/Stunde Innendienst, derselbe Standard wie in
            unserem ROI-Rechner. Zeiten je Vorgang konservativ geschätzt.
          </RoiCalculation.Source>
        </RoiCalculation>

        <Image
          src="/images/lieferantenmanagement/kostenblock.png"
          alt="Zwei Balken im Vergleich: die Handarbeit heute deutlich höher als der automatisierte Aufwand"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.H3>Was diese Rechnung wirklich sagt</Typo.H3>
        <Typo.Paragraph>
          3.710 Euro im Jahr sind kein dramatischer Betrag, und es wäre unehrlich,
          daraus eine große Einsparung zu machen. Der Aufbau eines ersten
          Anwendungsfalls kostet bei uns ab 1.000 Euro einmalig plus 50 Euro im
          Monat, im ersten Jahr also rund 1.600 Euro. Die Rechnung geht auf, aber
          sie geht knapp auf, und wer die Seite nur wegen der Einsparung liest,
          sollte an dieser Stelle aufhören.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Die eigentliche Aussage steckt in der dritten Zeile. 62,5 Stunden
          allein für das Vorbereiten der Jahresbewertung sind mehr als anderthalb
          Arbeitswochen, verteilt auf ein Jahr, in dem es immer etwas
          Dringenderes gibt. Deshalb findet diese Bewertung bei den meisten
          Großhändlern dieser Größe schlicht nicht statt. Nicht weil sie für
          unwichtig gehalten wird, sondern weil anderthalb Wochen Zusammensuchen
          nie oben auf dem Stapel liegen. Fällt dieser Teil weg, entsteht kein
          gesparter Betrag in der Bilanz, sondern eine Auswertung, die es vorher
          nicht gab.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Der zweite Effekt ist schwerer zu beziffern und in der Regel größer als
          die 3.710 Euro: ein abgelaufener Nachweis, der beim Audit auffällt, ein
          Lieferant, dessen Termintreue über Monate abrutscht, ohne dass es
          jemandem auffällt, eine Doppelanlage, über die zweimal derselbe
          Rahmenvertrag läuft. Diese Fälle kosten unregelmäßig und dann deutlich
          mehr als der laufende Aufwand. Wir setzen sie hier trotzdem nicht in
          die Rechnung, weil jede Zahl dafür geraten wäre.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Preis und Dauer */}
      <ContentWrapper>
        <Typo.H2>Was der Aufbau kostet und wie lange er dauert</Typo.H2>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Der Teil, den wir bauen">
            Ein erster Anwendungsfall beginnt bei 1.000 Euro einmalig, der
            Betrieb bei 50 Euro im Monat. Bis der Pilot läuft, vergehen in der
            Regel fünf Arbeitstage. Wir fangen fast immer mit der Fristen- und
            Nachweisüberwachung an, weil sie den klarsten Regelsatz hat und das
            Ergebnis nach wenigen Tagen sichtbar ist. Jeder weitere
            Anwendungsfall auf derselben Grundlage ist deutlich günstiger, weil
            Anbindung, Protokollierung und Betrieb schon stehen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Der Teil, der bei Ihnen liegt">
            Gebraucht wird ein lesender Zugang auf den Lieferantenstamm und die
            Bestell- und Wareneingangsdaten, dazu eine Person aus dem Einkauf,
            die die Schwellenwerte festlegt. Das ist der Punkt, an dem solche
            Vorhaben ins Stocken geraten, nicht die Technik. Wer vorher
            entscheidet, ab wann Termintreue als schlecht gilt, spart sich zwei
            Abstimmungsrunden im Nachhinein.
          </ProseColumnsItem>
        </ProseColumns>

        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>Womit wir anfangen würden</Typo.H3>
            <Typo.Paragraph>
              Mit den Nachweisen. Der Regelsatz ist eindeutig, der Nutzen fällt
              sofort auf, und die Datenlage ist meist besser als erwartet, weil
              Ablaufdaten irgendwo schon gepflegt werden. Wie das konkret
              aussieht, zeigt unser Workflow zur{" "}
              <InternalLink
                href="/branchen/grosshandel/workflows/zertifikatspruefung-lieferanten"
                variant="underline"
              >
                Zertifikatsprüfung bei Lieferanten
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Womit wir nicht anfangen würden</Typo.H3>
            <Typo.Paragraph>
              Mit einer vollständigen Lieferantenbewertung über alle Kriterien
              hinweg. Das ist der Anwendungsfall, den sich alle zuerst wünschen,
              und der mit Abstand langsamste, weil zuerst geklärt werden muss,
              was gemessen wird und wie es gewichtet ist. Diese Klärung ist
              richtig, sie gehört nur nicht in den ersten Schritt.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Größenklasse */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Warum das Konzernmodell bei 150 Lieferanten nicht passt</Typo.H2>
        <Typo.Paragraph>
          Alle gängigen Darstellungen sind für große Landschaften geschrieben.
          Eine Quelle rechnet ausdrücklich mit hunderten bis tausenden aktiven
          Lieferanten, eine andere führt einen Maschinenbauer mit 370 Lieferanten
          und fast 5.000 Artikeln als Beispiel. In dieser Größenordnung
          rechtfertigt sich eine eigene SRM-Plattform mit eigenem Team. Bei 80
          bis 300 Lieferanten und einem Einkauf, der aus zwei bis vier Personen
          besteht, kippt die Rechnung.
        </Typo.Paragraph>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Was bei dieser Größe zählt">
            Die Zweiteilung. Zwanzig bis dreißig Lieferanten machen den Großteil
            des Volumens aus und verdienen eine echte jährliche Bewertung mit
            Gespräch. Der lange Rest braucht keine Bewertung, sondern eine
            Überwachung, die anschlägt, wenn etwas aus dem Rahmen fällt. Genau
            diese Zweiteilung machen die Konzernmodelle nicht, weil dort beide
            Gruppen groß genug für eigene Prozesse sind.
          </ProseColumnsItem>
          <ProseColumnsItem title="Was sich nicht lohnt">
            Ein zweites System neben dem ERP. Jede Plattform, die einen eigenen
            Lieferantenstamm führt, erzeugt ab dem ersten Tag Abgleicharbeit, und
            diese Arbeit ist bei kleinen Einkaufsteams größer als der Nutzen.
            Der tragfähigere Weg ist, an das anzudocken, was ohnehin läuft, also
            an ERP und Postfach, und dort die wiederkehrenden Schritte
            abzunehmen.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.Paragraph>
          Wenn Sie an dieser Stelle weiterlesen wollen: Wie die Bestellseite
          desselben Prozesses aussieht, steht in unserem Workflow zur{" "}
          <InternalLink
            href="/branchen/grosshandel/workflows/bestellabwicklung"
            variant="underline"
          >
            Bestellabwicklung im Großhandel
          </InternalLink>
          . Was auf der Rechnungsseite danach passiert, zeigt die{" "}
          <InternalLink
            href="/branchen/grosshandel/workflows/3-wege-rechnungspruefung"
            variant="underline"
          >
            dreistufige Rechnungsprüfung
          </InternalLink>
          . Und wenn Sie den Einkauf insgesamt im Blick haben statt nur die
          Lieferantenpflege, ist unser Beitrag zum{" "}
          <InternalLink
            href="/blog/einkauf-automatisieren-grosshandel"
            variant="underline"
          >
            Automatisieren des Einkaufs im Großhandel
          </InternalLink>{" "}
          der breitere Einstieg.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
