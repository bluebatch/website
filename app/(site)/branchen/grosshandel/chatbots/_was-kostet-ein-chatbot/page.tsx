import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import KpiCard from "@/components/cards/kpi-card";
import OfferCard from "@/components/cards/offer-card";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import ProsCons from "@/components/sections/pros-cons";
import CrossSellGrid from "@/components/sections/cross-sell-grid";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";

const meta = {
  title: "Was kostet ein KI-Chatbot? Preise 2026 für den Großhandel | Bluebatch",
  description:
    "Chatbot-Kosten realistisch: 1.000 € Setup und 50 € pro Monat für einen Chatbot auf Ihren ERP-Daten. Marktpreise, die drei echten Kostentreiber und wann sich das rechnet.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Was kostet ein KI-Chatbot? Preise für den Großhandel",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Was kostet ein KI-Chatbot?", "Großhandel"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet ein KI-Chatbot? Preise für den Großhandel",
    description: meta.description,
    images: ogImages("Was kostet ein KI-Chatbot?", "Großhandel").map(
      (i) => i.url,
    ),
  },
  alternates: {
    canonical: "/branchen/grosshandel/chatbots/was-kostet-ein-chatbot",
  },
};

const faqs = [
  {
    question: "Was kostet ein KI-Chatbot im Monat?",
    answer:
      "Das hängt fast vollständig davon ab, ob der Chatbot an Ihre Systeme angebunden ist. Ein reiner Website-Chatbot, der nur auf Ihren öffentlichen Texten antwortet, liegt bei Standardanbietern zwischen etwa 200 und 2.500 € pro Monat. Ein Chatbot, der auf Ihren ERP-Daten arbeitet, kostet bei uns 50 € pro Monat Betrieb, weil er auf Ihrer eigenen Infrastruktur läuft und nur die tatsächlich verbrauchten Modell-Anfragen kostet.",
  },
  {
    question: "Was kostet die einmalige Einrichtung?",
    answer:
      "Bei uns 1.000 € pauschal für den Piloten, inklusive Anbindung an eine Datenquelle (e.bootis, Microsoft Navision oder SharePoint), Chat-Oberfläche und Einweisung. Am Markt liegen Setup-Pauschalen für vergleichbare Projekte üblicherweise zwischen 2.000 und 15.000 €, individuelle ERP-Integrationen werden häufig zusätzlich mit 3.000 bis 10.000 € angesetzt.",
  },
  {
    question: "Warum ist die Datenanbindung der teuerste Posten?",
    answer:
      "Weil der Chatbot selbst inzwischen Standardtechnik ist. Aufwand entsteht dort, wo entschieden wird, welche Felder aus dem ERP er lesen darf, wie Berechtigungen abgebildet werden und wie geprüft wird, dass die Antwort stimmt. Genau dafür haben wir fertige Connectoren zu e.bootis, Navision und SharePoint, was diesen Block von Projektaufwand auf Konfiguration reduziert.",
  },
  {
    question: "Ab wann rechnet sich ein KI-Chatbot?",
    answer:
      "Unser Rechenbeispiel: fünf Sachbearbeiter, die pro Monat je zwei Stunden Suchzeit sparen, bei 50 € Stundensatz. Das sind 500 € Bruttoersparnis, abzüglich 50 € Betrieb bleiben 450 € netto pro Monat. Die einmaligen 1.000 € Setup sind damit nach zwei bis drei Monaten wieder drin.",
  },
  {
    question: "Gibt es versteckte Kosten?",
    answer:
      "Die drei Posten, die in Angeboten gern fehlen: Lizenzen pro Mitarbeiter (marktüblich 40 bis 80 € je Seat und Monat), Gesprächsgebühren bei WhatsApp-Kanälen und der Aufwand für die laufende Pflege der Antworten. Unser Modell kennt keine Seat-Lizenzen, der Betrieb ist ein Fixpreis pro Monat.",
  },
  {
    question: "Was kostet es, wenn wir nach dem Piloten wieder aussteigen?",
    answer:
      "Nichts. Der Pilot hat keine Mindestlaufzeit. Der Chatbot läuft auf Ihrer Infrastruktur, die Workflows liegen in n8n und gehören Ihnen. Wenn Sie nach drei Monaten abbrechen, haben Sie 1.150 € ausgegeben und wissen belastbar, ob der Anwendungsfall trägt.",
  },
];

export default function Page() {
  return (
    <>
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>Preise</StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          Was kostet ein KI-Chatbot?
        </StatsLeadHero.Headline>
        <GeoSummary>
          Ein KI-Chatbot für den Großhandel kostet bei Bluebatch 1.000 € Setup
          einmalig und 50 € pro Monat Betrieb, Go-live in fünf Tagen. Am Markt
          liegen vergleichbare Angebote bei 2.000 bis 15.000 € Setup und 200 bis
          2.500 € pro Monat. Der Unterschied liegt nicht am Chatbot, sondern an
          der Anbindung an ERP und Dateiablage.
        </GeoSummary>
        <StatsLeadHero.Description>
          Wer nach Chatbot-Preisen sucht, bekommt meist Spannen ohne Zahlen
          dahinter. Diese Seite rechnet den Fall durch, den Großhändler
          tatsächlich haben: einen Chatbot, der Bestände, Preise und
          Auftragsstatus aus dem eigenen ERP beantwortet.
        </StatsLeadHero.Description>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Pilot anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard valueText="1.000 €" subtitle="Setup, einmalig pauschal" />
          <KpiCard valueText="50 €" subtitle="Betrieb pro Monat" />
          <KpiCard valueText="5 Tage" subtitle="Bis Go-live" />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/was-kostet-ein-chatbot/hero-kosten.png"
          alt="Schreibtisch mit Notizbuch und Taschenrechner, Kostenaufstellung für einen KI-Chatbot"
        />
      </StatsLeadHero>

      {/* 1. Antwort zuerst: die Rechnung auf einen Blick */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Kurz gerechnet</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Sie bei uns konkret zahlen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Keine Staffel, keine Seat-Lizenzen, keine Mindestlaufzeit. Der Pilot
            ist bewusst so klein kalkuliert, dass die Entscheidung dafür keine
            Budgetrunde braucht.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Posten</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
              <DataTable.HeaderCell>Was enthalten ist</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Setup, einmalig</DataTable.Cell>
              <DataTable.Cell bold>1.000 €</DataTable.Cell>
              <DataTable.Cell>
                Anbindung an eine Datenquelle (e.bootis, Microsoft Navision oder
                SharePoint), Chat-Oberfläche, Rechte und Einweisung des Teams.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Betrieb, pro Monat</DataTable.Cell>
              <DataTable.Cell bold>50 €</DataTable.Cell>
              <DataTable.Cell>
                Laufender Betrieb, Monitoring und Modell-Anfragen. Unabhängig
                davon, wie viele Mitarbeiter den Chatbot nutzen.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Lizenz pro Nutzer</DataTable.Cell>
              <DataTable.Cell bold>0 €</DataTable.Cell>
              <DataTable.Cell>
                Es gibt keine Seat-Lizenz. Das ist der Posten, der bei
                Standardanbietern am schnellsten wächst.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Zweite Datenquelle</DataTable.Cell>
              <DataTable.Cell bold>nach Aufwand</DataTable.Cell>
              <DataTable.Cell>
                Erst sinnvoll, wenn der Pilot trägt. Für e.bootis, Navision und
                SharePoint liegen die Connectoren fertig vor.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      {/* 2. Wofür man eigentlich bezahlt */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der eigentliche Unterschied</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Zwei Dinge heißen Chatbot und kosten völlig verschieden
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Preisspannen im Netz mischen zwei Produkte, die wenig
            miteinander zu tun haben. Das erklärt, warum die Angebote zwischen
            49 € und fünfstellig auseinanderlaufen.
          </IntroBox.Paragraph>
        </IntroBox>

        <ComparisonCard className="mt-12">
          <BeforeCard>
            <ComparisonHeadline>Chatbot von der Stange</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Antwortet auf Basis Ihrer öffentlichen Website-Texte und einer
                gepflegten FAQ-Liste
              </ComparisonListItem>
              <ComparisonListItem>
                Kennt weder Bestand noch Kundenpreis noch Auftragsstatus
              </ComparisonListItem>
              <ComparisonListItem>
                Abrechnung pro Sitzplatz oder pro Konversation, die Rechnung
                wächst mit der Nutzung
              </ComparisonListItem>
              <ComparisonListItem>
                Ihre Daten liegen beim Anbieter, Wechsel bedeutet Neuaufbau
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Sinnvoll für Erstkontakt und Standardfragen im Shop, nicht für das
              Tagesgeschäft im Innendienst.
            </ComparisonFooter>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>Chatbot auf Ihren ERP-Daten</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Antwortet mit Live-Daten aus e.bootis, Navision oder SharePoint,
                mit Quelle und Zeitstempel
              </ComparisonListItem>
              <ComparisonListItem>
                Beantwortet genau die Fragen, für die heute jemand durch fünf
                ERP-Masken klickt
              </ComparisonListItem>
              <ComparisonListItem>
                Fixpreis pro Monat, unabhängig von der Zahl der Nutzer
              </ComparisonListItem>
              <ComparisonListItem>
                Läuft auf Ihrer Infrastruktur, die Workflows liegen in n8n und
                gehören Ihnen
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Das ist der Fall, den diese Seite kalkuliert, und der Grund für den
              niedrigen Betriebspreis.
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 3. Die drei Kostentreiber */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Kostentreiber</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Blöcke, und nur einer davon ist teuer
          </IntroBox.Headline>
        </IntroBox>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/was-kostet-ein-chatbot/kostenbloecke.png"
              alt="Die drei Kostenblöcke eines Chatbot-Projekts, die Datenanbindung ist der größte"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumnsItem title="Der Chatbot selbst">
            Der günstigste Block, und der, über den am meisten geredet wird.
            Chat-Oberfläche, Modellauswahl und Prompting sind Standardtechnik.
            Wir setzen auf Open WebUI, damit hier kein Lizenzblock entsteht.
          </ProseColumnsItem>
          <ProseColumnsItem title="Die Datenanbindung">
            Der teuerste Block in jedem Angebot, das Sie einholen werden. Hier
            wird festgelegt, welche ERP-Felder gelesen werden, wie Rechte
            abgebildet sind und wie die Antwort geprüft wird. Fertige
            Connectoren machen daraus Konfiguration statt Projekt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Der laufende Betrieb">
            Monitoring, Modell-Anfragen und die Pflege der Antworten. Wächst bei
            Seat-Modellen mit jedem neuen Kollegen, bei uns nicht. Deshalb
            bleiben die 50 € pro Monat auch dann stehen, wenn der ganze
            Innendienst mitmacht.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* 4. Marktpreise zur Einordnung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Zur Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was der Markt aufruft</IntroBox.Headline>
          <IntroBox.Paragraph>
            Übliche Preisspannen deutscher Anbieter, damit Sie ein Angebot
            einordnen können, das Ihnen vorliegt. Die Spannen stammen aus den
            öffentlichen Preisseiten und Kostenübersichten der Anbieter, Stand
            August 2026.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Variante</DataTable.HeaderCell>
              <DataTable.HeaderCell>Setup</DataTable.HeaderCell>
              <DataTable.HeaderCell>Pro Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Wofür es taugt</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Baukasten, selbst gebaut</DataTable.Cell>
              <DataTable.Cell>0 €</DataTable.Cell>
              <DataTable.Cell>0 bis 200 €</DataTable.Cell>
              <DataTable.Cell>
                FAQ auf der Website. Keine Anbindung, keine Rechte.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Standard-SaaS</DataTable.Cell>
              <DataTable.Cell>2.000 bis 15.000 €</DataTable.Cell>
              <DataTable.Cell>500 bis 2.500 €</DataTable.Cell>
              <DataTable.Cell>
                Kundenservice im Shop. Anbindungen kosten extra, oft 3.000 bis
                10.000 € je System.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Seat-Lizenzen obendrauf</DataTable.Cell>
              <DataTable.Cell>–</DataTable.Cell>
              <DataTable.Cell>40 bis 80 € je Nutzer</DataTable.Cell>
              <DataTable.Cell>
                Der Posten, der ein günstiges Angebot im zweiten Jahr teuer
                macht.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="bg-primary-50">
              <DataTable.Cell bold>Bluebatch-Pilot</DataTable.Cell>
              <DataTable.Cell bold>1.000 €</DataTable.Cell>
              <DataTable.Cell bold>50 €</DataTable.Cell>
              <DataTable.Cell>
                Innendienst-Auskünfte aus ERP und Dateiablage. Anbindung
                inklusive, keine Seat-Lizenz.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      {/* 5. Woran der Preis hängt */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Im Projekt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo im Ablauf die Kosten tatsächlich entstehen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Vier Schritte bis zum laufenden Chatbot. Nur der zweite ist der
            Grund, warum Angebote so weit auseinanderliegen.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/was-kostet-ein-chatbot/was-treibt-den-preis.png"
              alt="Vier Projektschritte mit ihrem Kostenanteil, die Datenanbindung ist der teuerste"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 6. Ehrliche Abgrenzung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Ehrlich gesagt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wann sich der Pilot lohnt, und wann nicht
          </IntroBox.Headline>
        </IntroBox>

        <ProsCons className="mt-12">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Ihr Innendienst beantwortet täglich dieselben Fragen"
              description="Bestand, Kundenpreis, Auftragsstatus, Lieferdatum. Wenn dafür jemand durch ERP-Masken klickt oder beim Kollegen nachfragt, ist die Zeitersparnis direkt messbar."
            />
            <ProsCons.Item
              title="Ihre Daten liegen in e.bootis, Navision oder SharePoint"
              description="Für diese drei Systeme sind die Connectoren fertig. Das ist der Grund, warum der Setup-Preis eine Pauschale sein kann und keine Schätzung."
            />
            <ProsCons.Item
              title="Sie wollen erst messen, dann entscheiden"
              description="1.000 € einmalig und 50 € pro Monat sind so kalkuliert, dass der Pilot ohne Investitionsantrag startet und nach drei Monaten belastbare Zahlen liefert."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Sie suchen einen Verkaufs-Chatbot für die Website"
              description="Dafür ist ein Standardanbieter die bessere Wahl. Unsere Stärke ist die Anbindung an interne Systeme, nicht die Conversion-Optimierung im Shop."
            />
            <ProsCons.Item
              title="Ihre Stammdaten sind nicht gepflegt"
              description="Ein Chatbot macht schlechte Daten schneller sichtbar, nicht besser. Wenn Bestände im ERP nicht stimmen, lösen Sie zuerst das, nicht den Chat."
            />
            <ProsCons.Item
              title="Es geht um wenige Anfragen im Monat"
              description="Unter etwa zwei gesparten Stunden pro Mitarbeiter und Monat trägt die Rechnung nicht. Dann ist eine bessere Suche im ERP der günstigere Weg."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 7. Amortisation */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Amortisation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ab wann die 1.000 € wieder drin sind
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Rechenbeispiel mit fünf Sachbearbeitern, die je zwei Stunden Suchzeit
            pro Monat sparen, bei 50 € Stundensatz.
          </IntroBox.Paragraph>
        </IntroBox>

        <StatsList
          className="mt-10"
          cols={4}
          stats={[
            { value: 500, suffix: " €", label: "Ersparnis brutto pro Monat" },
            { value: 50, suffix: " €", label: "Betrieb pro Monat" },
            { value: 450, suffix: " €", label: "Netto pro Monat" },
            { value: 3, prefix: "2-", label: "Monate bis Break-even" },
          ]}
        />

        <div className="mt-10 text-center">
          <Typo.Paragraph className="mx-auto max-w-2xl text-gray-600">
            Ihre Zahlen sind andere? Im{" "}
            <Link
              href="/branchen/grosshandel/roi-rechner/service-requests?requests=300&before=10&after=1&hourly=50&tier=small&setup=1000&maint=50"
              className="text-primary-600 hover:underline"
            >
              ROI-Rechner
            </Link>{" "}
            können Sie Anfragezahl, Bearbeitungsdauer und Stundensatz selbst
            setzen und sehen, wo Ihr Break-even liegt.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 8. Konkrete Angebote */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Konkret</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Diese beiden Varianten gibt es zum Festpreis
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-10 gap-8">
          <OfferCard
            highlight
            href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel"
            price="1.000 €"
            title="KI-Chatbot mit ERP-Anbindung"
            description="Der Pilot für den Innendienst: Open WebUI als Oberfläche, Connectoren zu e.bootis, Microsoft Navision und SharePoint, in fünf Tagen live. 50 € pro Monat Betrieb."
            linkLabel="Zum Chatbot-Piloten"
          />
          <OfferCard
            href="/services/tools/ebootis/chatbot-integration"
            price="1.000 €"
            title="Chatbot direkt auf e.bootis"
            description="Die e.bootis-Variante im Detail: Bestände, Preise und Aufträge über die OpenEngine, für Team und Kunden. Gleicher Festpreis, gleiche fünf Tage."
            linkLabel="Zur e.bootis-Anbindung"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 9. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Häufige Fragen</IntroBox.PreHeadline>
          <IntroBox.Headline>Chatbot-Kosten im Detail</IntroBox.Headline>
        </IntroBox>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      {/* 10. Weiterführend */}
      <ContentWrapper>
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Weiterführend</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Passend zum Thema
          </CrossSellGrid.Headline>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots">
            <CrossSellGrid.Title>
              KI-Chatbots für den Großhandel
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Der Überblick über alle Chatbot-Varianten mit ERP-Anbindung.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/services/tools/navision">
            <CrossSellGrid.Title>Navision automatisieren</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Rechnungsverarbeitung, EDI und Buchhaltung in Navision, die
              Datenbasis, auf der der Chatbot antwortet.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel">
            <CrossSellGrid.Title>KI im Großhandel</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Alle Workflows, Agenten und Assistenten, die wir für Großhändler
              umsetzen.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
        </CrossSellGrid>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
