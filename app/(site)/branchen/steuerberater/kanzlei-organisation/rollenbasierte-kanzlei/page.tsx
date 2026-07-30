import type { Metadata } from "next";
import Image from "next/image";
import { Calculator, Wallet, FileSpreadsheet, Inbox } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "Rollenbasierte Kanzlei - Organisation vor Automatisierung | Bluebatch",
  description:
    "Rollenbasierte Kanzlei-Organisation: klare Rollen für FiBu, Lohn, Jahresabschluss und Backoffice plus rollenbasierte Dashboards als Voraussetzung für Automatisierung.",
  openGraph: {
    title: "Rollenbasierte Kanzlei - Bluebatch",
    description:
      "Rollenbasierte Kanzlei-Organisation: klare Rollen für FiBu, Lohn, Jahresabschluss und Backoffice plus rollenbasierte Dashboards als Voraussetzung für Automatisierung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/rollenbasierte-kanzlei",
  },
};

const rollen = [
  {
    icon: Calculator,
    title: "FiBu",
    body: "Verantwortet die laufende Finanzbuchhaltung: Belegwege, Kontierung, Abstimmung, Voranmeldungen. Die Rolle mit dem größten Volumen an wiederkehrenden Abläufen, und damit das erste Ziel für Workflows und KI-Unterstützung.",
  },
  {
    icon: Wallet,
    title: "Lohn",
    body: "Verantwortet die Lohn- und Gehaltsabrechnung: Stammdaten, Bewegungsdaten, Meldungen, Fristen. Ein hochstandardisierter Monatszyklus, der von klaren Übergabepunkten zu Mandanten und FiBu lebt.",
  },
  {
    icon: FileSpreadsheet,
    title: "Jahresabschluss",
    body: "Verantwortet Abschlüsse und Steuererklärungen: Saldenabstimmung, Abschlussbuchungen, Anhang, Bescheidprüfung. Saisonale Spitzenlast, die von sauberer FiBu-Vorarbeit direkt profitiert.",
  },
  {
    icon: Inbox,
    title: "Backoffice",
    body: "Verantwortet alles um die Fachlichkeit herum: Posteingang, Fristenkontrolle, Mandantenkommunikation, Honorare, Termine. Die Rolle, die den anderen dreien den Rücken freihält, und Drehscheibe für ein Ticketsystem.",
  },
];

const faqs = [
  {
    question: "Was ist eine rollenbasierte Kanzlei?",
    answer:
      "Eine Kanzlei, in der die Arbeit nach Rollen statt nach Gewohnheit verteilt ist: FiBu, Lohn, Jahresabschluss und Backoffice haben jeweils definierte Aufgaben, Verantwortliche und dokumentierte Prozesse. Ein Mitarbeiter kann mehrere Rollen tragen, aber jede Aufgabe gehört eindeutig zu einer Rolle.",
  },
  {
    question: "Warum ist das die Voraussetzung für Automatisierung?",
    answer:
      "Automatisierung übernimmt immer einen abgegrenzten Aufgabenblock. Wenn Zuständigkeiten verschwimmen, gibt es diesen Block nicht: Kein Workflow kann \"das, was Frau Meier halt so macht\" übernehmen. Erst der Rollenschnitt macht sichtbar, welche Aufgaben standardisierbar sind und an KI-Agenten oder Workflows gehen können.",
  },
  {
    question: "Was ist ein rollenbasiertes Dashboard?",
    answer:
      "Eine Übersicht, die jeder Rolle nur ihre relevanten Daten zeigt: Die FiBu sieht offene Belege und Buchungsstände, der Lohn seine Meldefristen, der Jahresabschluss den Status seiner Abschlüsse, das Backoffice offene Anfragen und Fristen. Niemand sucht in Listen, die ihn nichts angehen.",
  },
  {
    question: "Funktioniert das auch in einer kleinen Kanzlei?",
    answer:
      "Ja, dort tragen einzelne Personen eben mehrere Rollen. Der Wert liegt im Schnitt, nicht in der Kopfzahl: Auch wenn eine Mitarbeiterin FiBu und Lohn macht, sind die Aufgaben, Prozesse und Dashboards der beiden Rollen getrennt. Das erleichtert Vertretung, Einarbeitung und späteres Wachstum enorm.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Die rollenbasierte Kanzlei: Organisation vor Automatisierung
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Eine rollenbasierte Kanzlei organisiert die Arbeit nach vier
            klaren Rollen: FiBu, Lohn, Jahresabschluss und Backoffice. Jede
            Rolle hat definierte Aufgaben, dokumentierte Prozesse und ein
            eigenes Dashboard, das nur die relevanten Daten zeigt. Diese
            Struktur ist die Voraussetzung für Automatisierung: Nur klar
            geschnittene Rollen lassen sich durch KI und Workflows entlasten.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              &quot;Jeder macht alles&quot; skaliert nicht
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Historisch gewachsene Kanzleien verteilen Arbeit nach Mandanten:
              Jeder Mitarbeiter betreut seine Mandate komplett, von der FiBu
              bis zum Abschluss. Das fühlt sich persönlich an, hat aber einen
              hohen Preis: Jeder muss alles können, niemand ist in irgendetwas
              wirklich schnell, und jede Vertretung wird zum Blindflug.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Die rollenbasierte Organisation dreht das Prinzip: Nicht der
              Mandant bestimmt, wer alles macht, sondern die Aufgabe bestimmt,
              welche Rolle sie übernimmt. Homogene Aufgabenpakete machen
              Mitarbeiter schneller und sind die Grundlage dafür, dass{" "}
              <InternalLink
                href="/branchen/steuerberater/workflows"
                variant="underline"
              >
                automatisierte Workflows
              </InternalLink>{" "}
              einzelne Schritte komplett übernehmen können.
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Kanzlei-Team mit klar verteilten Rollen"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Die vier Rollen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Rollen-Modell</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Rollen, die jede Kanzlei hat, ob benannt oder nicht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Arbeit existiert in jeder Kanzlei. Der Unterschied ist, ob sie
            als klar geschnittene Rollen organisiert ist oder als Sammelbecken
            an Zuständigkeiten.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {rollen.map((item) => {
            const Icon = item.icon;
            return (
              <SimpleCard key={item.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{item.title}</Typo.H3>
                <Typo.Paragraph>{item.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Dashboards */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full order-last md:order-first">
            <Image
              src="/images/business-analytics.jpg"
              alt="Rollenbasiertes Dashboard mit Kennzahlen einer Rolle"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">
              Rollenbasierte Dashboards: jede Rolle sieht nur ihre Daten
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Sobald die Rollen stehen, bekommt jede ein eigenes Dashboard:
              Die FiBu sieht offene Belege und Buchungsstände, der Lohn seine
              Fristen und Meldungen, der Jahresabschluss den Status seiner
              Mandate, das Backoffice die offenen Anfragen. Nicht mehr, nicht
              weniger.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Das ist mehr als Komfort: Wer nur die eigenen Daten sieht,
              erkennt sofort, was heute wichtig ist, statt in Gesamtlisten zu
              suchen. Und die Kanzleileitung sieht auf einen Blick, welche
              Rolle Kapazität hat und wo es klemmt. Wie das Rollen-Modell für
              Ihre Kanzlei aussieht, erarbeiten wir im{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop"
                variant="underline"
              >
                Kanzlei-Digitalisierungs-Workshop
              </InternalLink>
              .
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/kanzlei-organisation">
              Zurück zur Übersicht Kanzlei-Organisation
            </InternalLink>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Verbindung zu Doku */}
      <ContentWrapper colorScheme="white">
        <div className="text-center max-w-2xl mx-auto">
          <Typo.H2 className="mb-4">
            Rollen brauchen dokumentierte Prozesse
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-6">
            Ein Rollenschnitt auf dem Papier reicht nicht: Jede Rolle braucht
            dokumentierte Abläufe, damit Übergaben, Vertretungen und spätere
            Automatisierung funktionieren. Wie diese Dokumentation ohne
            Extra-Zeit entsteht, zeigt die{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki"
              variant="underline"
            >
              Prozessdoku mit KI
            </InternalLink>
            .
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zur rollenbasierten Kanzlei
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
