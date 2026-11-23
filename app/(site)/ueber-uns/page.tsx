import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Customer from "@/components/sections/customer/customer";
import InternalLink from "@/components/buttons/internal-link";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns from "@/components/ui/prose-columns";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import Team, {
  TeamMember,
  TeamImage,
  TeamName,
  TeamRole,
  TeamDescription,
  TeamTags,
  TeamTag,
  TeamLinkedIn,
} from "@/components/team/team";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";

// Ersetzt /team und /mit-euch-wachsen (beide 2026-11 eingestellt) sowie die
// Alt-URLs, die vorher auf /mit-euch-wachsen zeigten.
export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: [
    "/team",
    "/mit-euch-wachsen",
    "/unser-prozess",
    "/warum-bluebatch",
  ],
  rewrites: [],
};

export const metadata: Metadata = {
  title: "Über uns: Warum Bluebatch auf Claude setzt | Bluebatch",
  description:
    "Die Founder Story von Bluebatch: Max Hänsel und Phillip Pham über den Schritt zum Claude Managed Service Provider und warum Claude auch im Mittelstand und in Kanzleien sicher laufen muss.",
  keywords: [
    "Bluebatch",
    "Über uns",
    "Claude Managed Service Provider",
    "Max Hänsel",
    "Phillip Pham",
  ],
  openGraph: {
    title: "Über uns: Warum Bluebatch auf Claude setzt",
    description:
      "Die Founder Story von Bluebatch und warum Claude auch für kleine und mittlere Unternehmen funktionieren muss.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=%C3%9Cber%20uns&eyebrow=Bluebatch",
        width: 1200,
        height: 630,
        alt: "Über Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns: Warum Bluebatch auf Claude setzt",
    description:
      "Die Founder Story von Bluebatch und warum Claude auch für kleine und mittlere Unternehmen funktionieren muss.",
    images: ["/og?title=%C3%9Cber%20uns&eyebrow=Bluebatch"],
  },
  alternates: {
    canonical: "/ueber-uns",
  },
};

const story = [
  {
    title: "Angefangen mit Automatisierung",
    text: "Bluebatch startete als Agentur für Workflow-Automatisierung. Wir haben für Großhändler und Kanzleien Rechnungsprüfung, Auftragserfassung und Belegverarbeitung mit n8n und ersten KI-Agenten automatisiert. Jeder Prozess wurde einzeln gebaut, getestet und gewartet.",
  },
  {
    title: "Dann kam Claude",
    text: "Mit Claude hat sich unsere Arbeit grundlegend verändert. Claude schreibt, prüft, recherchiert und arbeitet mit Dateien und Werkzeugen. Vieles, wofür wir früher einen eigenen Workflow gebaut haben, erledigt ein Team mit Claude heute direkt im Arbeitsalltag.",
  },
  {
    title: "Die Lücke im Mittelstand",
    text: "Konzerne haben KI-Teams, Rechtsabteilungen und Enterprise-Verträge. Kleine und mittlere Unternehmen und Kanzleien haben das nicht. Sie stehen vor Fragen zu DSGVO und Berufsgeheimnis, und niemand richtet Claude ein, schult das Team oder kümmert sich um den Betrieb. Das Ergebnis ist KI im privaten Browser-Account oder gar keine KI.",
  },
  {
    title: "Bluebatch wird Claude Managed Service Provider",
    text: "Seit Oktober 2026 konzentrieren wir uns ganz auf Claude. Wir betreiben ein eigenes Gateway in Frankfurt, nutzen Claude über AWS Bedrock in der EU, binden DATEV und Microsoft 365 an, schulen die Teams und bleiben im Betrieb Ansprechpartner. Unser Automatisierungs-Know-how fließt in die Use Cases, die wir auf Claude bauen.",
  },
];

const faqs = [
  {
    question: "Wer steckt hinter Bluebatch?",
    answer:
      "Bluebatch wurde von Max Hänsel gegründet, der das Unternehmen als Gründer und CEO führt. Phillip Pham begleitet Bluebatch als Investor und Advisor bei Strategie und Wachstum. Unser Standort ist Nürnberg.",
  },
  {
    question: "Was macht ein Claude Managed Service Provider?",
    answer:
      "Ein Claude Managed Service Provider richtet Claude von Anthropic für ein Unternehmen ein und betreibt es: Datenschutz-Unterlagen, Anmeldung per Single Sign-on, Budgets und Rechte, Anbindung an Systeme wie DATEV und Microsoft 365, Schulung des Teams und Support im laufenden Betrieb.",
  },
  {
    question: "Warum setzt Bluebatch ausschließlich auf Claude?",
    answer:
      "Weil Claude im Arbeitsalltag von Kanzleien und Unternehmen den größten Unterschied macht: beim Schreiben, Prüfen, Recherchieren und im Umgang mit Dokumenten. Statt mehrere Modelle halbherzig zu betreuen, konzentrieren wir uns auf eines und bringen es sicher und vollständig in den Betrieb.",
  },
  {
    question: "Für welche Unternehmen arbeitet Bluebatch?",
    answer:
      "Für kleine und mittlere Unternehmen und für Kanzleien, vor allem Steuerberater und Anwälte. Also Teams, die mit vertraulichen Daten arbeiten und KI deshalb nicht einfach im Browser nutzen dürfen.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Über uns</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Claude verändert die Arbeit. Auch im Mittelstand.
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch ist ein Claude Managed Service Provider aus Nürnberg,
              gegründet von Max Hänsel und begleitet von Investor Phillip Pham.
              Bluebatch bringt Claude von Anthropic in kleine und mittlere
              Unternehmen und Kanzleien: DSGVO-konform über AWS Bedrock in der
              EU und ein eigenes Gateway in Frankfurt, mit Einrichtung, Schulung
              und Betrieb aus einer Hand.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/team/bluebatch-team-office.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Gründer */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Die Köpfe</IntroBox.PreHeadline>
          <IntroBox.Headline>Wer hinter Bluebatch steht</IntroBox.Headline>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-3xl">
          <Team className="lg:grid-cols-2!">
            <TeamMember>
              <TeamImage src="/mh-small.webp" alt="Max Hänsel, Gründer von Bluebatch" />
              <TeamName>Max Hänsel</TeamName>
              <TeamRole>Gründer & CEO</TeamRole>
              <TeamDescription>
                Max hat Bluebatch als Agentur für Automatisierung gegründet und
                den Schritt zum Claude Managed Service Provider gemacht. Er
                verantwortet das Angebot, vom Gateway bis zur Einführung beim
                Kunden.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Claude</TeamTag>
                <TeamTag variant="secondary">Architektur</TeamTag>
                <TeamTag variant="accent">Einführung</TeamTag>
              </TeamTags>
              <TeamLinkedIn href="https://www.linkedin.com/in/maximilianhaensel/" />
            </TeamMember>

            <TeamMember>
              <TeamImage
                src="/team/phillip-pham.webp"
                alt="Phillip Pham, Investor und Advisor von Bluebatch"
              />
              <TeamName>Phillip Pham</TeamName>
              <TeamRole>Investor & Advisor</TeamRole>
              <TeamDescription>
                Phillip begleitet Bluebatch als Investor und Berater. Er bringt
                unternehmerische Erfahrung ein und unterstützt bei Strategie,
                Wachstum und Skalierung.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Investor</TeamTag>
                <TeamTag variant="secondary">Strategie</TeamTag>
                <TeamTag variant="accent">Wachstum</TeamTag>
              </TeamTags>
              <TeamLinkedIn href="https://www.linkedin.com/in/ddppham/" />
            </TeamMember>
          </Team>
        </div>
      </ContentWrapper>

      {/* Founder Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Founder Story</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum wir Bluebatch auf Claude ausgerichtet haben
          </IntroBox.Headline>
          <IntroBox.Subline>
            KI, die wirklich Arbeit abnimmt, darf kein Privileg von Konzernen
            sein. Diesen Satz nehmen wir ernst, und deshalb haben wir unser
            Unternehmen umgebaut.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <TimelineAsSteps>
            {story.map((step, index) => (
              <TimelineAsStepsStep key={step.title} value={index + 1}>
                <Typo.H3 className="mt-0! mb-2 text-xl">{step.title}</Typo.H3>
                <Typo.Paragraph className="text-gray-600">
                  {step.text}
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Woran wir glauben */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Woran wir glauben</IntroBox.PreHeadline>
          <IntroBox.Headline>Claude muss auch für KMU laufen</IntroBox.Headline>
          <IntroBox.Subline>
            Eine Kanzlei mit zwölf Leuten hat dieselben Pflichten wie ein
            Konzern, aber keine eigene KI-Abteilung. Dafür gibt es uns.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <ProseColumns cols={3}>
            <ProseColumns.Item title="Datenschutz zuerst">
              <Typo.Paragraph className="text-gray-600">
                Ohne saubere Verträge und klare Datenwege nutzt eine Kanzlei
                keine KI. Wie wir DSGVO und Berufsgeheimnis lösen, steht auf
                der Seite{" "}
                <InternalLink
                  href="/managed-claude/datenschutz"
                  variant="underline"
                >
                  Claude Datenschutz
                </InternalLink>
                .
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Das ganze Team mitnehmen">
              <Typo.Paragraph className="text-gray-600">
                Claude wirkt erst, wenn alle es nutzen, nicht nur die
                Technik-Begeisterten. Deshalb gehören{" "}
                <InternalLink href="/managed-claude/onboarding" variant="underline">
                  Onboarding
                </InternalLink>{" "}
                und{" "}
                <InternalLink href="/managed-claude/coaching" variant="underline">
                  Coaching
                </InternalLink>{" "}
                bei uns fest dazu.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Planbare Kosten">
              <Typo.Paragraph className="text-gray-600">
                Kleine Unternehmen brauchen feste Zahlen statt offener
                Stundenkonten. Lizenzen, Token und Einrichtung stehen offen
                auf unserer{" "}
                <InternalLink href="/managed-claude/preise" variant="underline">
                  Preisseite
                </InternalLink>
                .
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>
        </div>
      </ContentWrapper>

      {/* Karriere & Partner */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Mitmachen</IntroBox.PreHeadline>
          <IntroBox.Headline>Wir wachsen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir suchen Menschen, die Claude mit uns in Kanzleien und
            Unternehmen bringen, am liebsten in Nürnberg, remote ist möglich.
            Alle offenen Stellen stehen auf der{" "}
            <InternalLink href="/karriere" variant="underline">
              Karriereseite
            </InternalLink>
            . Für größere Cloud- und Plattform-Themen arbeiten wir mit unserem
            Partner{" "}
            <a
              href="https://pexon-consulting.de"
              target="_blank"
              rel="noopener"
              className="text-primary-600 underline hover:text-primary-700"
            >
              Pexon Consulting
            </a>{" "}
            zusammen.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Häufige Fragen zu Bluebatch"
          intro="Kurz beantwortet: wer wir sind und was wir machen."
        />
      </ContentWrapper>

      {/* Kundenlogos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
