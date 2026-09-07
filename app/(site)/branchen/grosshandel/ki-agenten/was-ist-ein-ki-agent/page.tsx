import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
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
import SimpleCard from "@/components/cards/simple-card";
import ProsCons from "@/components/sections/pros-cons";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";

export const metadata: Metadata = {
  title: "Was ist ein KI-Agent? Definition und Abgrenzung | Bluebatch",
  description:
    "Was ist ein KI-Agent? Die Definition am Handelsprozess erklärt: der Unterschied zu Regel-Automation und Sprachmodell, was ein Agent im Großhandel übernimmt, was die ERP-Anbindung schwierig macht und wann er sich nicht lohnt.",
  openGraph: {
    title: "Was ist ein KI-Agent? Definition und Abgrenzung",
    description:
      "KI-Agent verständlich erklärt, am Handelsprozess statt am Lehrbuch: Abgrenzung zu Regel-Automation und Sprachmodell, konkrete Aufgaben im Großhandel, ERP-Anbindung, Berechtigungen und Grenzen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Was ist ein KI-Agent?", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/ki-agenten/was-ist-ein-ki-agent",
  },
};

export default function Page() {
  return (
    <>
      <Hero2Column>
        <Hero2ColumnTextColumn>
          <Hero2ColumnPreHeadline>Grundlagen</Hero2ColumnPreHeadline>
          <Hero2ColumnHeadline>Was ist ein KI-Agent?</Hero2ColumnHeadline>
          <GeoSummary>
            Ein KI-Agent ist ein Programm, das ein Ziel bekommt statt einer
            Anweisung: Es liest eine Aufgabe, legt selbst die nötigen Schritte
            fest, holt sich dafür Daten aus angebundenen Systemen und prüft das
            Ergebnis, bevor es abgibt. Im Großhandel übernimmt das reale
            Vorgänge, den Angebots-Bot bringt Angebote 70 bis 90 Prozent
            schneller heraus, der Invoice-Bot senkt den manuellen Aufwand bei
            Eingangsrechnungen um rund 80 Prozent. Diese Seite erklärt den
            Begriff, grenzt ihn gegen Regel-Automation und reine Sprachmodelle
            ab und sagt, wann sich ein Agent nicht lohnt.
          </GeoSummary>
          <Hero2ColumnCallToAction>
            <ContactButton icon="chat">Anwendungsfall besprechen</ContactButton>
          </Hero2ColumnCallToAction>
          <Hero2ColumnSubtext>
            Definition, Abgrenzung, konkrete Aufgaben im Handel, ERP-Anbindung,
            Berechtigungen und Grenzen.
          </Hero2ColumnSubtext>
        </Hero2ColumnTextColumn>
        <Hero2ColumnMediaColumn>
          <Hero2ColumnImage
            src="/images/was-ist-ein-ki-agent/hero.png"
            type="image"
          />
        </Hero2ColumnMediaColumn>
      </Hero2Column>

      {/* 1. Definition am Prozess entlang */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Definition</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ein Ziel bekommen statt einer Anweisung
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-8">
          <Typo.Paragraph>
            Die Lehrbuchdefinition lautet ungefähr so: Ein KI-Agent nimmt seine
            Umgebung wahr, trifft Entscheidungen und handelt eigenständig auf
            ein Ziel hin. Das ist nicht falsch, hilft im Tagesgeschäft aber
            niemandem. Nützlicher ist die Definition am Vorgang, den Sie ohnehin
            kennen.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Eine Kundenanfrage kommt per Mail: &bdquo;Bitte um Angebot über 200
            Meter NYM-J 3x1,5 und 20 Verteilerdosen, Lieferung KW 34.&ldquo; Ein
            klassisches Skript kann daraus nichts machen, weil niemand diese
            Formulierung vorhergesehen hat. Ein reines Sprachmodell versteht den
            Satz zwar, weiß aber weder, was bei Ihnen am Lager liegt, noch
            welchen Preis dieser Kunde bekommt. Ein Agent macht vier Dinge
            hintereinander: Er liest die Anfrage und erkennt die Positionen. Er
            legt fest, was zu tun ist, also Artikel identifizieren, Bestand
            prüfen, Kundenkonditionen ziehen, Liefertermin bestätigen. Er holt
            diese Daten aus den Systemen, in denen sie stehen. Und er prüft am
            Ende, ob das Ergebnis vollständig ist, bevor es an einen Menschen
            zur Freigabe geht.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Der entscheidende Teil ist der zweite Schritt.{" "}
            <strong>
              Beim Agenten legt nicht der Entwickler die Reihenfolge fest,
              sondern das System selbst, Anfrage für Anfrage.
            </strong>{" "}
            Genau daran hängt der ganze Unterschied. Fehlt einer Position der
            Kundenpreis, holt der Agent ihn nach. Ist ein Artikel nicht am
            Lager, prüft er den Lieferanten. Ein Skript hätte an dieser Stelle
            abgebrochen, weil dieser Fall nicht vorgesehen war.
          </Typo.Paragraph>
        </div>

        <Image
          src="/images/was-ist-ein-ki-agent/agenten-schleife.png"
          alt="Die vier Schritte eines KI-Agenten: Anfrage lesen, Plan bilden, Daten holen, Ergebnis kontrollieren"
          width={1400}
          height={788}
          className="mt-10 w-full h-auto rounded-xl"
        />
      </ContentWrapper>

      {/* 2. Die Entscheidungsfrage */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die eigentliche Frage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Regel, Sprachmodell oder Agent: Was braucht Ihr Prozess?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Fast alle Erklärtexte zum Thema stellen Eigenschaften gegenüber,
            reaktiv gegen proaktiv, lernfähig, autonom. Das beantwortet die
            Frage nicht, die vor einem Projekt steht: Welchen der drei Ansätze
            nehme ich für diesen einen Prozess? Die Antwort hängt an zwei
            Kriterien.
          </IntroBox.Subline>
        </IntroBox>

        <Image
          src="/images/was-ist-ein-ki-agent/entscheidung.png"
          alt="Drei gleichrangige Ansätze im Vergleich: Regel, Sprachmodell und Agent"
          width={1400}
          height={788}
          className="mt-10 w-full h-auto rounded-xl"
        />

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>Regel-Automation</Typo.H3>
            <Typo.Paragraph>
              Nehmen Sie eine Regel, wenn der Ablauf immer gleich ist und die
              Eingabe ein festes Format hat. Ein EDI-Auftrag, der ins ERP
              gebucht wird. Eine Bestellung, die ab einem Meldebestand
              ausgelöst wird. Eine Rechnung, die bei Übereinstimmung mit der
              Bestellung durchgeht. Regeln sind schneller, billiger und
              nachvollziehbar. Wer hier einen Agenten einsetzt, kauft sich
              Unsicherheit ohne Gegenwert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Reiner Sprachmodell-Aufruf</Typo.H3>
            <Typo.Paragraph>
              Nehmen Sie einen einzelnen Modellaufruf, wenn die Eingabe frei
              formuliert ist, aber genau ein Schritt reicht. Eine Mail
              zusammenfassen, ein Anschreiben entwerfen, eine Anfrage der
              richtigen Abteilung zuordnen, aus einem Lieferschein die
              Positionen ziehen. Das ist kein Agent, sondern eine Funktion, die
              Sprache versteht.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>KI-Agent</Typo.H3>
            <Typo.Paragraph>
              Nehmen Sie einen Agenten erst, wenn beides zusammenkommt: Die
              Eingabe ist frei formuliert <em>und</em> die nötigen Schritte
              stehen vorher nicht fest, weil sie vom Inhalt abhängen. Genau
              dann muss etwas den Weg pro Vorgang selbst festlegen und dabei
              mehrere Systeme anfassen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="mt-10 max-w-3xl">
          <Typo.H3>Die Faustregel</Typo.H3>
          <Typo.Paragraph>
            Zählen Sie die Wenn-dann-Fälle, die Sie aufschreiben müssten, um den
            Vorgang vollständig zu beschreiben. Kommen Sie mit einer Handvoll
            aus, bauen Sie eine Regel. Merken Sie, dass die Liste nicht
            fertig wird, weil jeder zweite Vorgang eine Ausnahme mitbringt, ist
            das der Punkt, an dem sich ein Agent rechnet. Und wenn die Antwort
            in einem Satz steht und nichts nachgeschlagen werden muss, brauchen
            Sie nur den Modellaufruf.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 3. Was ein Agent im Großhandel übernimmt */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>In der Praxis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was ein KI-Agent im Großhandel konkret übernimmt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Drei Vorgänge, an denen sich der Unterschied im Alltag zeigt. Die
            Zahlen stammen aus unseren eigenen Implementierungen, nicht aus
            Herstellerbroschüren.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={3} className="mt-10">
          <ProseColumnsItem title="Angebot aus einer freien Anfrage">
            Der Agent liest die Anfrage, erkennt die Positionen auch bei
            Kurzbezeichnungen und Tippfehlern, zieht Bestand und
            Kundenkonditionen aus dem ERP und erzeugt das fertige
            Angebots-PDF. Der Vertrieb gibt frei statt zu tippen. Ergebnis in
            der Praxis: Angebote gehen 70 bis 90 Prozent schneller raus. Das
            zahlt direkt auf die Abschlussquote ein, weil Leads, die innerhalb
            von 5 Minuten Kontakt bekommen, eine 21-mal höhere
            Qualifizierungsrate erreichen. Details dazu stehen beim{" "}
            <Link href="/branchen/grosshandel/ki-agenten/angebots-bot">
              Angebots-Bot
            </Link>
            .
          </ProseColumnsItem>
          <ProseColumnsItem title="Eingangsrechnung bis zur Freigabe">
            Rechnungen kommen als Mail, als PDF, als Scan, jeder Lieferant
            anders. Der Agent erfasst Beträge, Steuer und Metadaten, prüft
            gegen Bestellung und Wareneingang und leitet an die zuständige
            Freigabe weiter. Der manuelle Aufwand sinkt um rund 80 Prozent.
            Warum das kein Regelfall ist: Die Abweichung zwischen Bestellung
            und Rechnung ist der Normalfall, nicht die Ausnahme, und genau die
            Klärung ist der Teil, der Zeit kostet. Details beim{" "}
            <Link href="/branchen/grosshandel/ki-agenten/invoice-bot">
              Invoice-Bot
            </Link>
            .
          </ProseColumnsItem>
          <ProseColumnsItem title="Auskunft zu Bestand, Preis und Auftragsstatus">
            Die häufigste Frage im Innendienst ist keine komplexe: Wo steht der
            Auftrag, was kostet das für diesen Kunden, wann kommt die
            Nachlieferung. Hier reicht oft schon die einfachere Stufe, ein
            Chatbot mit ERP-Anbindung, der aus den Systemen antwortet. Statt 5
            bis 10 Minuten Suche pro Auskunft dauert das unter 30 Sekunden.
            Wie das aussieht, steht unter{" "}
            <Link href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel">
              KI-Chatbot mit ERP-Anbindung
            </Link>
            .
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* 4. ERP-Anbindung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die Datenfrage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum die ERP-Anbindung der schwierige Teil ist
          </IntroBox.Headline>
          <IntroBox.Subline>
            In fast jedem Erklärtext steht, ein Agent lasse sich &bdquo;an ERP-,
            CRM- oder Buchhaltungssysteme anbinden&ldquo;. Was daran Arbeit
            macht, sagt niemand. Es sind vier Dinge, und sie entscheiden über
            Aufwand und Laufzeit eines Projekts.
          </IntroBox.Subline>
        </IntroBox>

        <Image
          src="/images/was-ist-ein-ki-agent/erp-anbindung.png"
          alt="Ein KI-Agent als zentraler Knoten mit Anbindung an SAP, Dynamics, Microtech und Sage"
          width={1400}
          height={788}
          className="mt-10 w-full h-auto rounded-xl"
        />

        <ProseColumns cols={2} wide className="mt-12">
          <ProseColumnsItem title="Nicht jedes System hat eine brauchbare Schnittstelle">
            SAP und Microsoft Dynamics bringen dokumentierte APIs mit. Bei
            microtech büro+ oder älteren Sage-Ständen arbeitet man je nach
            Version über Datenbankzugriff, Exportdateien oder eine
            Zwischenschicht. Das ist machbar, aber es ist der Unterschied
            zwischen zwei Tagen und zwei Wochen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Die Artikelbezeichnung des Kunden ist nicht Ihre">
            Kunden schreiben &bdquo;3x1,5er&ldquo;, im Stamm steht
            &bdquo;NYM-J 3x1,5 mm²&ldquo;. Diese Zuordnung ist der eigentliche
            Kern der Auftragserfassung und der Grund, warum reine
            Schnittstellenprojekte hier scheitern. Ein Sprachmodell ist genau
            an dieser Stelle stark, es braucht aber Ihren Artikelstamm als
            Referenz.
          </ProseColumnsItem>
          <ProseColumnsItem title="Preise stehen selten an einer Stelle">
            Listenpreis, Kundenpreisliste, Rahmenvertrag, Aktion, Staffel: Ein
            Agent, der den falschen Preis zieht, ist schlimmer als keiner. Die
            Regel, welcher Preis gewinnt, muss explizit hinterlegt sein und
            darf nicht dem Modell überlassen bleiben.
          </ProseColumnsItem>
          <ProseColumnsItem title="Lesen und Schreiben sind zwei Projekte">
            Ein Agent, der Bestände liest, ist harmlos. Ein Agent, der Aufträge
            anlegt, greift in Ihre Buchungslogik ein. Fangen Sie lesend an und
            führen Sie schreibende Vorgänge erst ein, wenn die Trefferquote
            über mehrere Wochen belegt ist.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* 5. Berechtigungen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der blinde Fleck</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Berechtigungen und kundenindividuelle Konditionen
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-8 max-w-3xl">
          <Typo.Paragraph>
            Wenn in Erklärtexten über Datenschutz gesprochen wird, geht es um
            DSGVO und EU AI Act, also um die regulatorische Ebene. Das ist
            wichtig, aber es ist nicht das Problem, das ein Großhändler zuerst
            hat. Das Problem heißt: <strong>Wer darf welchen Preis sehen?</strong>
          </Typo.Paragraph>
          <Typo.Paragraph>
            Im Handel hat fast jeder Kunde eigene Konditionen. Ein Agent, der
            Kunden direkt antwortet, muss deshalb bei jeder einzelnen Anfrage
            wissen, wer fragt, und darf ausschließlich die Konditionen dieses
            einen Kunden verwenden. Fragt Kunde A nach einem Preis, ist die
            Staffel von Kunde B keine zulässige Antwort, auch nicht als
            Näherung. Dasselbe gilt intern: Der Innendienst darf Deckungsbeiträge
            sehen, ein Kunde nicht.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Technisch heißt das, die Berechtigung greift vor der Antwort, nicht
            danach. Der Agent bekommt die Identität des Fragenden mit und stellt
            seine Datenabfrage von vornherein nur auf den erlaubten Ausschnitt.
            Ein Agent, der erst alles liest und die Antwort danach filtert, ist
            ein Datenleck mit Verzögerung. Bei allem, was nach außen geht oder
            eine Buchung auslöst, bleibt zusätzlich ein Mensch in der Freigabe.
          </Typo.Paragraph>
        </div>

        <Image
          src="/images/was-ist-ein-ki-agent/berechtigungen.png"
          alt="Die Berechtigungsprüfung liegt zwischen Anfrage und Antwort: Anfrage, Rolle erkennen, Freigabe, Antwort"
          width={1400}
          height={788}
          className="mt-10 w-full h-auto rounded-xl"
        />
      </ContentWrapper>

      {/* 6. Grenzen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Ehrlich bleiben</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wann sich ein KI-Agent lohnt und wann nicht
          </IntroBox.Headline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Viele Vorgänge, viele Ausnahmen"
              description="Der Vorgang wiederholt sich täglich, aber fast jeder Fall weicht ein wenig ab. Genau hier ist die Regelliste nie fertig und der Agent spielt seinen Vorteil aus."
            />
            <ProsCons.Item
              title="Eingaben kommen unstrukturiert an"
              description="Anfragen per Mail, Rechnungen als PDF, Bestellungen als Freitext. Wo kein festes Format existiert, scheitert die klassische Schnittstelle."
            />
            <ProsCons.Item
              title="Es gibt eine klare Freigabe-Instanz"
              description="Ein Mensch prüft das Ergebnis, bevor es rausgeht. Das macht den Einstieg risikoarm, weil ein Fehler auffällt, bevor er beim Kunden landet."
            />
            <ProsCons.Item
              title="Die Daten liegen in erreichbaren Systemen"
              description="Ohne Zugriff auf Artikelstamm, Bestand und Konditionen bleibt jeder Agent bei allgemeinen Auskünften und damit nutzlos."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Der Ablauf ist immer gleich"
              description="Feste Eingabe, fester Weg, festes Ergebnis. Dann ist eine Regel schneller, billiger und prüfbar. Ein Agent bringt hier nur Unsicherheit."
            />
            <ProsCons.Item
              title="Der Vorgang kommt selten vor"
              description="Ein paar Fälle im Monat rechtfertigen weder Anbindung noch Pflege. Der Aufwand steckt in der Integration, nicht im Modell, und der fällt unabhängig von der Menge an."
            />
            <ProsCons.Item
              title="Ein Fehler wäre nicht korrigierbar"
              description="Direkte Buchungen ohne Freigabe, verbindliche Preiszusagen nach außen, alles mit unmittelbarer Rechtsfolge. Solche Schritte gehören hinter eine menschliche Freigabe."
            />
            <ProsCons.Item
              title="Die Stammdaten sind ungepflegt"
              description="Doppelte Artikel, veraltete Preise, unvollständige Kundenzuordnung. Ein Agent macht diese Lücken sichtbar, er repariert sie nicht. Dann ist die Datenpflege das erste Projekt."
            />
          </ProsCons.Cons>
        </ProsCons>

        <div className="mt-10 max-w-3xl">
          <Typo.Paragraph>
            Zum Zeitrahmen: Eine Basis-Automatisierung wie die
            Angebotserstellung ist in 2 bis 4 Wochen betriebsbereit.
            Implementierungen mit mehrstufigen Freigaben und eigenen Dashboards
            liegen bei 6 bis 12 Wochen, lassen sich aber schrittweise
            ausrollen. Wer wissen will, wie so ein Agent gebaut wird, findet
            das in{" "}
            <Link href="/blog/ki-agenten-erstellen">KI-Agenten erstellen</Link>{" "}
            und in{" "}
            <Link href="/blog/ki-agenten-beispiele">KI-Agenten Beispiele</Link>.
            Den fertigen Katalog gibt es unter{" "}
            <Link href="/branchen/grosshandel/ki-agenten">
              KI-Agenten für den Großhandel
            </Link>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div id="faq">
          <FaqContainer
            faqs={[
              {
                question: "Was ist ein KI-Agent einfach erklärt?",
                answer:
                  "Ein KI-Agent ist ein Programm, das ein Ziel bekommt statt einer Schritt-für-Schritt-Anweisung. Es liest die Aufgabe, legt selbst fest, welche Schritte nötig sind, holt sich dafür Daten aus angebundenen Systemen wie dem ERP und prüft das Ergebnis, bevor es abgibt. Der Unterschied zu klassischer Automatisierung: Die Reihenfolge steht nicht im Voraus fest, sondern wird pro Vorgang neu bestimmt.",
              },
              {
                question:
                  "Was ist der Unterschied zwischen einem KI-Agenten und einem Chatbot?",
                answer:
                  "Ein Chatbot antwortet, ein Agent handelt. Der Chatbot beantwortet eine Frage aus angebundenen Daten, etwa nach Bestand oder Auftragsstatus, und ist damit fertig. Ein Agent verfolgt ein Ziel über mehrere Schritte hinweg und fasst dabei mehrere Systeme an, zum Beispiel Artikel erkennen, Bestand prüfen, Kundenpreis ziehen und daraus ein Angebot erzeugen. In der Praxis ist der Chatbot oft die günstigere und ausreichende Stufe.",
              },
              {
                question: "Was macht ein KI-Agent im Großhandel konkret?",
                answer:
                  "Typisch sind drei Vorgänge: Angebote aus frei formulierten Kundenanfragen erstellen, Eingangsrechnungen erfassen und bis zur passenden Freigabe führen, sowie Auskünfte zu Bestand, Preis und Auftragsstatus geben. Bei uns bringt der Angebots-Bot Angebote 70 bis 90 Prozent schneller heraus, der Invoice-Bot senkt den manuellen Aufwand um rund 80 Prozent, und Auskünfte dauern unter 30 Sekunden statt 5 bis 10 Minuten.",
              },
              {
                question: "Wann lohnt sich ein KI-Agent nicht?",
                answer:
                  "Wenn der Ablauf immer gleich ist, reicht eine Regel und ist billiger sowie besser prüfbar. Wenn der Vorgang nur ein paar Mal im Monat vorkommt, rechtfertigt er die Anbindung nicht, weil der Aufwand in der Integration steckt und unabhängig von der Menge anfällt. Und wenn die Stammdaten ungepflegt sind, ist die Datenpflege das erste Projekt, denn ein Agent macht solche Lücken sichtbar, aber er repariert sie nicht.",
              },
              {
                question: "Braucht ein KI-Agent Zugriff auf unser ERP?",
                answer:
                  "Für alles, was mit Beständen, Preisen oder Aufträgen zu tun hat, ja. Ohne diesen Zugriff bleibt der Agent bei allgemeinen Auskünften. Der Zugriff ist dabei gestuft: Lesend anzufangen ist harmlos und schnell umgesetzt, schreibende Vorgänge wie das Anlegen von Aufträgen greifen in die Buchungslogik ein und werden erst freigeschaltet, wenn die Trefferquote über mehrere Wochen belegt ist.",
              },
              {
                question:
                  "Wie wird verhindert, dass ein Kunde fremde Preise sieht?",
                answer:
                  "Die Berechtigung greift vor der Antwort, nicht danach. Der Agent bekommt die Identität des Fragenden mit und stellt seine Datenabfrage von vornherein nur auf den erlaubten Ausschnitt, also die Konditionen genau dieses Kunden. Ein Agent, der erst alles liest und die Antwort anschließend filtert, ist ein Datenleck mit Verzögerung. Bei allem, was nach außen geht, bleibt zusätzlich ein Mensch in der Freigabe.",
              },
              {
                question: "Wie lange dauert die Einführung?",
                answer:
                  "Eine Basis-Automatisierung wie die Angebotserstellung ist in 2 bis 4 Wochen betriebsbereit. Implementierungen mit mehrstufigen Freigaben und eigenen Dashboards liegen bei 6 bis 12 Wochen. Ein schrittweiser Rollout ist möglich und meist sinnvoll, weil die ersten Wochen vor allem zeigen, wie gut die Stammdaten wirklich sind.",
              },
            ]}
          >
            <FaqContainer.Headline>
              Häufige Fragen zu KI-Agenten
            </FaqContainer.Headline>
          </FaqContainer>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
