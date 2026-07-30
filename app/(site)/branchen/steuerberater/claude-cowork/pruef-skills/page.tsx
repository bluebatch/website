import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Prüf-Skills für Kanzleien - Verträge & Zeugnisse per KI | Bluebatch",
  description:
    "Prüf-Skills für Steuerkanzleien: Provisionsanspruch-Prüfung, Arbeitszeugnis-Prüfung und Bauträgervertrag/AGB-Prüfung als wiederverwendbare KI-Skills in Markdown.",
  openGraph: {
    title: "Prüf-Skills für Kanzleien - Bluebatch",
    description:
      "Prüf-Skills für Steuerkanzleien: Provisionsanspruch-Prüfung, Arbeitszeugnis-Prüfung und Bauträgervertrag/AGB-Prüfung als wiederverwendbare KI-Skills in Markdown.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork/pruef-skills",
  },
};

const faqs = [
  {
    question: "Was ist ein Prüf-Skill?",
    answer:
      "Ein Prüf-Skill ist eine wiederverwendbare KI-Arbeitsanweisung in Markdown, die eine wiederkehrende Prüfung nach den Kriterien der Kanzlei ausführt: zum Beispiel Provisionsansprüche, Arbeitszeugnisse oder Bauträgerverträge und AGB. Das Ergebnis ist ein strukturierter Prüfvermerk, den der Bearbeiter kontrolliert und verantwortet.",
  },
  {
    question: "Ersetzt ein Prüf-Skill die fachliche Verantwortung?",
    answer:
      "Nein. Der Skill übernimmt die systematische Durchsicht und dokumentiert Auffälligkeiten mit Fundstelle. Bewertung, Freigabe und Verantwortung bleiben beim Berufsträger beziehungsweise beim zuständigen Bearbeiter. Human-in-the-loop ist fester Bestandteil jedes Prüf-Skills.",
  },
  {
    question: "Dürfen Kanzleien Mandanten-Dokumente per KI prüfen lassen?",
    answer:
      "Mit der richtigen Umgebung ja. Wegen § 203 StGB scheiden öffentliche KI-Tools in der Regel aus. Prüf-Skills laufen deshalb in einer verwalteten Umgebung wie Claude Cowork mit EU-Hosting, AVV und dediziertem Tenant, ohne Training mit Kanzleidaten.",
  },
  {
    question: "Lassen sich Prüf-Skills auf eigene Prüfungen der Kanzlei übertragen?",
    answer:
      "Ja. Die drei beschriebenen Skills sind Beispiele aus der Praxis. Das Muster, Prüfkriterien in Markdown zu kodieren und mit echten Fällen zu testen, funktioniert für jede wiederkehrende Prüfung mit klaren Kriterien, von Vertragsklauseln bis zu internen Qualitätschecks.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Prüf-Skills für Kanzleien: wiederkehrende Prüfungen per KI
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Prüf-Skills sind wiederverwendbare KI-Skills, mit denen
            Steuerkanzleien wiederkehrende Prüfungen standardisieren. Drei
            erprobte Einsatzfelder: Provisionsansprüche von
            Versicherungsvermittlern, Arbeitszeugnisse sowie
            Bauträgerverträge und AGB. Jeder Skill kodiert die Prüfkriterien
            der Kanzlei in Markdown, sodass jeder Mitarbeiter die Prüfung auf
            gleichbleibendem Niveau ausführt und der Bearbeiter das Ergebnis
            kontrolliert.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Skill 1: Provisionsanspruch */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Provisionsanspruch-Prüfung für Versicherungsvermittler
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Kanzleien mit Mandanten aus der Versicherungsvermittlung kennen
              die Aufgabe: Provisionsabrechnungen und Vermittlerverträge
              müssen gegeneinander geprüft werden. Welche Ansprüche bestehen,
              welche Stornohaftungszeiten gelten, welche Abrechnungspositionen
              passen nicht zum Vertrag? Eine Fleißarbeit mit vielen
              Einzelkriterien, bei der leicht etwas durchrutscht.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Als wiederverwendbarer KI-Skill kodiert, arbeitet die Prüfung
              die Kriterien der Kanzlei bei jedem Fall vollständig ab:
              Vertragsgrundlage, Anspruchsvoraussetzungen, Auffälligkeiten in
              der Abrechnung, jeweils mit Fundstelle im Dokument. Der
              Bearbeiter erhält einen strukturierten Prüfvermerk statt eines
              Aktenstapels.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/claude-cowork">
              Die Umgebung dahinter: Claude Cowork für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/invoice-verification.jpg"
              alt="Provisionsanspruch-Prüfung als KI-Skill"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Skill 2: Arbeitszeugnis */}
      <ContentWrapper colorScheme="white">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full order-last md:order-first">
            <Image
              src="/images/certificate-check.jpg"
              alt="Arbeitszeugnis-Prüfung als KI-Skill"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">Arbeitszeugnis-Prüfung</Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Arbeitszeugnisse folgen einer eigenen Sprache: Formulierungen,
              die freundlich klingen, aber abwertend gemeint sind, fehlende
              Standardbausteine, Widersprüche zwischen Tätigkeitsbeschreibung
              und Bewertung. Wer Mandanten in Lohn- und Personalfragen
              begleitet, prüft solche Zeugnisse regelmäßig, und die Qualität
              der Prüfung hängt stark an der Erfahrung des Bearbeiters.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der Arbeitszeugnis-Skill kodiert dieses Erfahrungswissen: Er
              prüft Vollständigkeit, Notenstufen der gängigen
              Zeugnisformulierungen, Auslassungen und Widersprüche und
              markiert jede Auffälligkeit mit Begründung. So prüft auch ein
              weniger erfahrener Mitarbeiter ein Zeugnis auf dem Niveau der
              Kanzlei-Routine, die Endkontrolle bleibt beim Bearbeiter.
            </Typo.Paragraph>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Skill 3: Bauträgervertrag / AGB */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Bauträgervertrag- und AGB-Prüfung
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Bauträgerverträge und AGB sind lang, dicht und voller Klauseln,
              deren Wirksamkeit von Details abhängt. Die Durchsicht solcher
              Vertragswerke kostet Stunden konzentrierter Arbeit, und
              kritische Klauseln verstecken sich gern in Nebensätzen auf
              Seite 40.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der Prüf-Skill für Bauträgerverträge und AGB-Recht geht das
              Vertragswerk systematisch durch: Klausel für Klausel gegen die
              im Skill kodierten Prüfkriterien, mit Markierung kritischer
              Regelungen, Einordnung und Fundstelle. Der Bearbeiter steigt
              direkt bei den markierten Stellen ein, statt das gesamte
              Dokument von vorn zu lesen.
            </Typo.Paragraph>
            <InternalLink href="/contact">
              Eigenen Prüf-Skill für Ihre Kanzlei besprechen
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/document-automation.jpg"
              alt="Bauträgervertrag- und AGB-Prüfung als KI-Skill"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Gemeinsames Muster */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Muster dahinter</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was alle Prüf-Skills gemeinsam haben
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ob Provisionsanspruch, Arbeitszeugnis oder Vertragswerk: Hinter
            jedem Prüf-Skill steckt dasselbe Prinzip, das sich auf weitere
            Prüfungen Ihrer Kanzlei übertragen lässt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>Kriterien der Kanzlei, nicht der KI</Typo.H3>
            <Typo.Paragraph>
              Der Skill enthält die Prüfkriterien, Reihenfolgen und
              Formulierungen Ihrer Kanzlei in Markdown. Das KI-Modell führt
              aus, was Ihre Experten festgelegt haben, und zwar bei jedem
              Fall vollständig und in derselben Tiefe.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Ergebnis mit Fundstellen</Typo.H3>
            <Typo.Paragraph>
              Jeder Befund verweist auf die konkrete Stelle im Dokument. Der
              Bearbeiter kann jede Aussage in Sekunden nachvollziehen, das
              macht die Kontrolle schnell und das Ergebnis belastbar.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Mensch entscheidet</Typo.H3>
            <Typo.Paragraph>
              Der Skill bereitet die Prüfung vor, die Bewertung und Freigabe
              bleiben beim Bearbeiter. So bleibt die fachliche Verantwortung
              dort, wo sie hingehört, während die Fleißarbeit wegfällt.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="text-center mt-12">
          <Typo.Paragraph className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Welche Prüfung kostet Ihre Kanzlei am meisten Zeit? Im
            Erstgespräch prüfen wir, ob sie sich als Skill kodieren lässt.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
