import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/tab-group";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";

export const pageConfig: PageConfig = {
  title: "Invoice-Bot",
  description:
    "Eingangsrechnungen automatisch erfassen, prüfen und zur Freigabe weiterleiten.",
};

export const metadata: Metadata = {
  title: "Invoice-Bot – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Rechnungen automatisch zu verarbeiten.",
  openGraph: {
    title: "Invoice-Bot – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Rechnungen automatisch zu verarbeiten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice-Bot – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Rechnungen automatisch zu verarbeiten.",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Rechnungsverarbeitung
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              n8n Workflow für die Rechnungs&shy;verarbeitung
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Ihre Eingangsrechnungen treffen ein (per E-Mail oder Scan). n8n
              extrahiert automatisch alle relevanten Daten, gleicht sie ab und
              stößt den Freigabeprozess an. Kein manuelles Abtippen, keine
              verlorenen Belege, volle Skontokontrolle.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat"></ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Automatische Datenerfassung und Freigabe
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/invoice.png" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>
      <ContentWrapper border="T">
        <IntroBox>
          <IntroBox.PreHeadline>Die Vorteile</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vorteile der automatisierten Aufgabenerstellung aus
            Außendienst-Berichten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Unser n8n-Workflow verbindet mobile Besuchserfassung mit
            automatischer Aufgabenerstellung und CRM-Integration.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <Typo.H3>80% weniger manueller Aufwand</Typo.H3>
            <Typo.Paragraph>
              Statt Rechnungsdaten mühsam abzutippen: Dokument hochladen,
              fertig. Die KI extrahiert Beträge, Steuer und Metadaten
              vollautomatisch.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Maximale Skonto-Sicherheit</Typo.H3>
            <Typo.Paragraph>
              Keine Fristen mehr versäumen. Der Workflow erkennt Zahlungsziele
              sofort und setzt Prioritäten für die Freigabe – nichts bleibt
              liegen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Volle Transparenz für die Buchhaltung</Typo.H3>
            <Typo.Paragraph>
              Echtzeit-Status aller Eingänge. Verantwortliche sehen sofort,
              welche Belege in der Prüfung sind und wo noch Informationen
              fehlen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>
      <ContentWrapper background="bg-gray-100" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Der Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>So funktioniert der Invoice-Bot</IntroBox.Headline>
          <IntroBox.Subline>
            In nur 4 Schritten von der Eingangsrechnung zur automatischen
            Freigabe.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Rechnungseingang erfassen</Typo.H3>
            <Typo.Paragraph>
              Rechnungen treffen per E-Mail, Scan oder Upload ein. Der Workflow
              erkennt automatisch neue Dokumente und startet die Verarbeitung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">KI-gestützte Datenextraktion</Typo.H3>
            <Typo.Paragraph>
              Die KI liest Rechnungsnummer, Beträge, Steuersätze, Fälligkeiten
              und Lieferantendaten aus – unabhängig vom Format oder Layout.
            </Typo.Paragraph>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Automatischer Abgleich</Typo.H3>
            <Typo.Paragraph>
              Die extrahierten Daten werden mit Bestellungen, Lieferscheinen und
              Stammdaten abgeglichen. Abweichungen werden markiert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">Freigabe und Buchung</Typo.H3>
            <Typo.Paragraph>
              Geprüfte Rechnungen gehen zur Freigabe an die zuständigen
              Personen. Nach Genehmigung erfolgt die automatische Buchung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die Vorteile</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vorteile der automatisierten Aufgabenerstellung aus
            Außendienst-Berichten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Unser n8n-Workflow verbindet mobile Besuchserfassung mit
            automatischer Aufgabenerstellung und CRM-Integration.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <Typo.H3>80% weniger manueller Aufwand</Typo.H3>
            <Typo.Paragraph>
              Statt Rechnungsdaten mühsam abzutippen: Dokument hochladen,
              fertig. Die KI extrahiert Beträge, Steuer und Metadaten
              vollautomatisch.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Maximale Skonto-Sicherheit</Typo.H3>
            <Typo.Paragraph>
              Keine Fristen mehr versäumen. Der Workflow erkennt Zahlungsziele
              sofort und setzt Prioritäten für die Freigabe – nichts bleibt
              liegen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Volle Transparenz für die Buchhaltung</Typo.H3>
            <Typo.Paragraph>
              Echtzeit-Status aller Eingänge. Verantwortliche sehen sofort,
              welche Belege in der Prüfung sind und wo noch Informationen
              fehlen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>
      <ContentWrapper border="B">
        <IntroBox>
          <IntroBox.PreHeadline>Im Detail</IntroBox.PreHeadline>
          <IntroBox.Headline>Workflow im Detail</IntroBox.Headline>
          <IntroBox.Subline>
            Erfahren Sie, wie jeder Schritt des Invoice-Bots funktioniert.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="prozess">
          <TabNavigation>
            <TabItem value="prozess">Gesamter Prozess</TabItem>
            <TabItem value="extraktion">Daten Extraktion</TabItem>
            <TabItem value="weiterleitung">Weiterleitung</TabItem>
            <TabItem value="matching">Matching</TabItem>
            <TabItem value="errors">Error Handling</TabItem>
          </TabNavigation>

          <TabContent value="prozess">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>End-to-End Automatisierung</Typo.H3>
                <Typo.Paragraph>
                  Der gesamte Rechnungsprozess läuft automatisch ab – von der
                  Erfassung bis zur Buchung.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Automatischer Import aus E-Mail und Scanner
                  </Typo.ListItem>
                  <Typo.ListItem>
                    KI-gestützte Dokumentenerkennung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Regelbasierte Weiterleitung an Freigeber
                  </Typo.ListItem>
                  <Typo.ListItem>Nahtlose ERP-Integration</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice/invoice-e2e.jpg"
                  alt="Gesamter Prozess"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="extraktion">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Intelligente Datenextraktion</Typo.H3>
                <Typo.Paragraph>
                  Unsere KI erkennt und extrahiert alle relevanten
                  Rechnungsdaten automatisch.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Rechnungsnummer, Datum und Fälligkeit
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Netto-, Brutto- und Steuerbeträge
                  </Typo.ListItem>
                  <Typo.ListItem>Lieferanten- und Kontaktdaten</Typo.ListItem>
                  <Typo.ListItem>Positionsdaten und Mengen</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice/data-extraction.webp"
                  alt="Daten Extraktion"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="weiterleitung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatische Weiterleitung</Typo.H3>
                <Typo.Paragraph>
                  Rechnungen werden regelbasiert an die richtigen Freigeber
                  weitergeleitet.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Kostenstellenbasierte Zuordnung</Typo.ListItem>
                  <Typo.ListItem>Betragsabhängige Freigabestufen</Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Eskalation bei Verzug
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Vertretungsregelungen integriert
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice/humand-loop.jpg"
                  alt="Weiterleitung"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="matching">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>3-Wege-Matching</Typo.H3>
                <Typo.Paragraph>
                  Automatischer Abgleich von Rechnung, Bestellung und
                  Wareneingang.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Vergleich mit Bestelldaten aus dem ERP
                  </Typo.ListItem>
                  <Typo.ListItem>Prüfung gegen Lieferscheine</Typo.ListItem>
                  <Typo.ListItem>Preisabweichungserkennung</Typo.ListItem>
                  <Typo.ListItem>Mengentoleranzprüfung</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice/3-way-matching.png"
                  alt="Matching"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="errors">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Intelligentes Error Handling</Typo.H3>
                <Typo.Paragraph>
                  Fehler werden erkannt, kategorisiert und zur manuellen
                  Bearbeitung weitergeleitet.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Automatische Fehlererkennung und Klassifizierung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Benachrichtigung der zuständigen Mitarbeiter
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Dokumentation aller Korrekturmaßnahmen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Lernende Systeme zur Fehlerreduzierung
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice/error-handling.png"
                  alt="Error Handling"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die Vorteile</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vorteile der automatisierten Aufgabenerstellung aus
            Außendienst-Berichten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Unser n8n-Workflow verbindet mobile Besuchserfassung mit
            automatischer Aufgabenerstellung und CRM-Integration.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <Typo.H3>80% weniger manueller Aufwand</Typo.H3>
            <Typo.Paragraph>
              Statt Rechnungsdaten mühsam abzutippen: Dokument hochladen,
              fertig. Die KI extrahiert Beträge, Steuer und Metadaten
              vollautomatisch.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Maximale Skonto-Sicherheit</Typo.H3>
            <Typo.Paragraph>
              Keine Fristen mehr versäumen. Der Workflow erkennt Zahlungsziele
              sofort und setzt Prioritäten für die Freigabe – nichts bleibt
              liegen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Volle Transparenz für die Buchhaltung</Typo.H3>
            <Typo.Paragraph>
              Echtzeit-Status aller Eingänge. Verantwortliche sehen sofort,
              welche Belege in der Prüfung sind und wo noch Informationen
              fehlen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "asdasda",
              answer: "asdasdad",
            },
          ]}
        ></FaqContainer>
      </ContentWrapper>
    </>
  );
}
