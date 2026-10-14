import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import Image from "next/image";
import Link from "next/link";
import {
  Cloud,
  Database,
  FileSearch,
  Handshake,
  Inbox,
  LifeBuoy,
  ListChecks,
  MessagesSquare,
  Monitor,
  ReceiptText,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  ProseColumns,
  TimelineAsSteps,
  TimelineAsStepsStep,
  FaqContainer,
} from "@/components/ui";
import {
  OfferCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
  GlassCard,
} from "@/components/cards";
import {
  GlassCardTitle,
  GlassCardDescription,
  GlassCardArrow,
} from "@/components/cards/glass-card";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  HeroStatBand,
} from "@/components/heroes";
import { HubDiagram } from "@/components/diagrams";
import LatestBlogPosts from "@/components/sections/latest-blog-posts";
import CustomerTiles from "@/components/sections/customer/customer-tiles";
import { ClaudeLogo, DatevLogo, MicrosoftLogo } from "@/components/icons/brand-logos";
import { resolveHref } from "@/lib/get-canonical-path";
import IconTitle from "./managed-claude/icon-title";
import { ConnectorsMock, HubHeroVisual } from "./startseite-grafiken";

// Startseite = Hauptseite von Managed Claude. Der frühere Hub /managed-claude
// leitet per 308 hierher, im Mega-Menü ist „Managed Claude" nur noch Trigger.
export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/managed-claude", "/ki-implementierung"],
  rewrites: [],
};

const title = "Claude AI Deutschland: Claude für Unternehmen im eigenen Konto";
const description =
  "Claude AI in Deutschland für Unternehmen und Kanzleien: Bluebatch betreibt Claude von Anthropic in Ihrem Konto über AWS Bedrock Frankfurt. Einrichtung 1.500 €.";
const ogImage =
  "/og?title=Claude%20AI%20in%20Deutschland%2C%20sicher%20im%20eigenen%20Konto&eyebrow=Bluebatch";

export const metadata: Metadata = {
  title: `${title} | Bluebatch`,
  description,
  keywords: [
    "Claude AI Deutschland",
    "Claude AI deutsch",
    "Claude von Anthropic",
    "Anthropic Partner",
    "Claude für Unternehmen",
    "Claude AI Unternehmen",
    "Claude Enterprise",
    "KI-Lösungen für Unternehmen",
    "Managed Claude",
    "Claude Managed Service Provider",
  ],
  authors: [{ name: "Bluebatch" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Claude AI in Deutschland, sicher im eigenen Konto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const standorte = [
  {
    name: "Berlin",
    slug: "berlin",
    fact: "Managed Claude für Kanzleien, Start-ups und Mittelstand in der Hauptstadt.",
    image: "/images/cities/berlin.jpg",
    delay: "0s",
  },
  {
    name: "München",
    slug: "muenchen",
    fact: "Claude im eigenen Konto für Industrie, Kanzleien und Tech im Süden.",
    image: "/images/cities/muenchen.jpg",
    delay: "0.8s",
  },
  {
    name: "Hamburg",
    slug: "hamburg",
    fact: "Claude für Handel, Logistik und Kanzleien im Norden.",
    image: "/images/cities/hamburg.jpg",
    delay: "1.6s",
  },
];

export default function Home() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Managed Service Provider für Claude</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude AI in Deutschland, sicher im eigenen Konto</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch bringt Claude von Anthropic in Deutschland in Ihr eigenes Konto: Das Private Claude AI Gateway läuft über AWS Bedrock in Frankfurt, DSGVO-konform und tragfähig nach § 203 StGB und § 62a StBerG, für Kanzleien und Mittelstand. Die Einrichtung kostet einmalig 1.500 €, danach zahlen Sie nur den Verbrauch, ohne Lizenz pro Kopf.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <InternalLink href="/managed-claude/preise" className="self-center sm:ml-4">
                Preise ansehen
              </InternalLink>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <HubHeroVisual />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
        <HeroStatBand
          className="mt-14"
          stats={[
            { value: "1.500 €", label: "Einrichtung, Festpreis" },
            { value: "0 €", label: "Lizenz pro Kopf" },
            { value: "Frankfurt", label: "AWS Bedrock, EU" },
            { value: "1 Woche", label: "bis startklar" },
          ]}
        />
        <CustomerTiles className="mt-20" />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Das Problem ist nicht die Technik</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Scale}>Jedes Tool bringt dieselbe Frage mit</IconTitle>}>
            Wo laufen die Daten hin? In Kanzleien heißt sie § 203 StGB und § 62a StBerG, nicht nur DSGVO. Wer sie für jedes Tool einzeln beantwortet, prüft sechsmal, verhandelt sechsmal und zahlt sechs Abos.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ShieldAlert}>Ohne Freigabe läuft es trotzdem</IconTitle>}>
            Solange niemand etwas freigibt, wird KI trotzdem genutzt: mit privaten Konten und echten Mandantendaten. Das ist ein persönliches Risiko der Berufsträger.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Handshake}>Ein Partner, eine Struktur</IconTitle>}>
            Sie brauchen nicht ein KI-Tool, sondern mehrere. Und darunter einen Partner, der die Modelle mitbringt und die Struktur, in der sie bei Ihnen laufen dürfen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ihr Partner für Claude von Anthropic</IntroBox.PreHeadline>
          <IntroBox.Headline>Claude für Unternehmen: Modelle und Struktur aus einer Hand</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein KI-Partner bringt zwei Dinge mit: die Modelle und die Struktur, in der sie bei Ihnen laufen dürfen. Das eine ohne das andere nützt Ihnen nichts.
          </IntroBox.Paragraph>
        </IntroBox>
        <HubDiagram
          className="mx-auto max-w-4xl"
          center={{
            icon: <ShieldCheck className="h-5 w-5" />,
            label: "Private Claude AI Gateway",
            sublabel: "In Ihrem Konto: Rechte, Protokoll, Limits",
          }}
          spokes={[
            { icon: <Monitor className="h-5 w-5" />, label: "Claude Desktop", sublabel: "Chat, Cowork, Code" },
            { icon: <ClaudeLogo className="h-5 w-5" />, label: "Claude-Modelle", sublabel: "Opus, Sonnet, Haiku auf AWS Bedrock" },
            { icon: <MicrosoftLogo className="h-5 w-5" />, label: "Microsoft 365", sublabel: "Outlook, Kalender, OneDrive" },
            { icon: <DatevLogo className="h-5 w-5" />, label: "DATEV", sublabel: "DATEV MCP (Beta)" },
          ]}
        />
        <ProseColumns cols={3} className="mt-14">
          <ProseColumns.Item title="Die Modelle">
            Claude von Anthropic: Haiku für Einfaches, Sonnet im Alltag, Opus für die harten Fälle. Umschaltbar je Aufgabe, auf Deutsch wie auf Englisch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Die Struktur">
            Das Private Claude AI Gateway: eine abgesicherte Tür, durch die jede KI-Nutzung läuft, mit Rechten, Protokoll und Abrechnung.{" "}
            <InternalLink href="/managed-claude/datenschutz" variant="underline">
              Claude und Datenschutz
            </InternalLink>
          </ProseColumns.Item>
          <ProseColumns.Item title="Der Aufbau">
            Einrichtung, Schulung, Kanzlei-Handbuch, Agenten, Anbindung. Wir bauen, bis Sie es selbst können.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>KI-Lösungen für Unternehmen: ein Fundament, drei Schritte</IntroBox.Headline>
          <IntroBox.Paragraph>
            Das Gateway ist kein Schritt, sondern die Voraussetzung: einmal geklärt, strafrechtlich wie berufsrechtlich, und alles läuft darauf. Erst arbeiten, dann gut werden, dann automatisieren. Wer mit Agenten anfängt, automatisiert Abläufe, die noch niemand im Haus wirklich verstanden hat.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            price="1.500 €"
            title="Schritt 1: Chat"
            description="Claude Desktop für jeden Mitarbeiter ab Tag 1: Chat, Cowork und Projekte, in einer Umgebung, in der das erlaubt ist."
            linkLabel="Zum Chat"
          />
          <OfferCard
            href="/managed-claude/coaching"
            price="ab 5.000 €"
            title="Schritt 2: Coaching"
            description="KI-Schulung im Haus: Paket M mit 5 Personentagen für 5.000 €, Paket L mit 10 Personentagen für 10.000 €. Einrichtung und Outlook Connector werden voll angerechnet."
            linkLabel="Zum Coaching"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            price="nach Aufwand"
            title="Schritt 3: Agenten"
            description="Mail-Agent, Anbindung eigener Systeme und DATEV, auf derselben Infrastruktur und mit eigenem Budget je Agent."
            linkLabel="Zu den Agenten"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Managed Claude Interface</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Claude zentral steuern, ohne jedes Gerät anzufassen</IntroBox.Headline>
              <IntroBox.Subline>
                Im Kundenportal des Gateways legen Sie fest, was Claude in Ihrer Organisation darf. Claude Desktop holt sich die Einstellungen selbst.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List className="mb-8">
              <Typo.ListItem>Team einladen, Rollen vergeben, Zugänge sperren</Typo.ListItem>
              <Typo.ListItem>Connectors wie Microsoft 365 für alle oder ausgewählte Personen</Typo.ListItem>
              <Typo.ListItem>Firmenweite Anweisungen, Skills und Banner</Typo.ListItem>
              <Typo.ListItem>Verbrauch und Limits in Euro, je Person</Typo.ListItem>
            </Typo.List>
            <InternalLink href="/managed-claude/zentrale-steuerung">Zum Managed Claude Interface</InternalLink>
          </div>
          <ConnectorsMock />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Claude AI im Unternehmen: was im Alltag möglich wird</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was mit dem Gateway in Kanzlei und Büro ab der ersten Woche geht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={FileSearch}>Chat mit Dokumenten</IconTitle>}>
            Bescheid, Vertrag oder Jahresabschluss befragen statt blättern.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={MessagesSquare}>Mandantenkommunikation</IconTitle>}>
            Entwürfe für Mails und Anschreiben, im Ton der Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Inbox}>Mail-Agent</IconTitle>}>
            Posteingang vorsortiert, Entwürfe liegen vorbereitet da.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ListChecks}>Fachliche Routinen</IconTitle>}>
            Wiederkehrende Prüfschritte, immer nach Ihrer Methodik.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ReceiptText}>Belege und Listen</IconTitle>}>
            Strukturiert auswerten, Auffälligkeiten vorab markiert.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Database}>Zugriff auf DATEV</IconTitle>}>
            Claude fragt Ihren Datenbestand, statt zu raten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was Ihren Chat vom öffentlichen Chatbot unterscheidet</IntroBox.Headline>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <BeforeCard className="rounded-2xl">
            <ComparisonHeadline>Öffentlicher Chatbot</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Daten laufen beim Anbieter</ComparisonListItem>
              <ComparisonListItem>Keine Mandantendaten erlaubt</ComparisonListItem>
              <ComparisonListItem>Jeder darf alles, kein Protokoll</ComparisonListItem>
              <ComparisonListItem>Kanzleiwissen jedes Mal neu erklären</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Kosten: pro Kopf, pro Monat</ComparisonFooter>
          </BeforeCard>
          <AfterCard className="rounded-2xl">
            <ComparisonHeadline>Ihr Chat über das Gateway</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>In Ihrem Konto, AWS Frankfurt</ComparisonListItem>
              <ComparisonListItem>Mandantendaten im Rahmen von § 203 StGB und § 62a StBerG</ComparisonListItem>
              <ComparisonListItem>Rollen, Rechte und vollständiges Protokoll</ComparisonListItem>
              <ComparisonListItem>Kanzleiwissen als Anweisung und Skill hinterlegt</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Kosten: nach Verbrauch, Limit pro Mitarbeiter</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Sie entscheiden zuerst nur über Schritt 1</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der ist klein, hat einen Festpreis und ist umkehrbar. Schulung, Agenten, Systemanbindung und DATEV entscheiden Sie, wenn Sie aus dem Alltag wissen, was sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Scoping-Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Stand der IT, Anmeldung, wer Zugriff bekommt, welche Systeme später relevant sind. Mit Ihnen, Ihrer IT und uns.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Angebot, 3 Tage danach</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Einrichtung zum Festpreis, mit Verbrauchsschätzung und Limit-Vorschlag.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Einrichtung, maximal 1 Woche nach Auftrag</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Gateway und Claude Desktop startklar, alle Mitarbeiter haben Zugang. Wir, gemeinsam mit Ihrer IT.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4} isLast>
              <Typo.H3 className="mt-2!">Rückblick nach 4 bis 6 Wochen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Was wird genutzt, wo lohnt sich Schritt 2, welcher Vorgang ist der Kandidat für Schritt 3. Gemeinsam.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Alles zum Private Claude AI Gateway</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Architektur mit AWS Bedrock, Rechtsrahmen nach § 203 StGB und § 62a StBerG, kein Lock-in."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/datenschutz"
            title="Datenschutz und DSGVO"
            description="Wo Ihre Daten laufen, was protokolliert wird und welche Unterlagen Sie für DSGVO und Berufsgeheimnis bekommen."
            linkLabel="Zum Datenschutz"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Einrichtung, Tokenpreise je Modell, Coaching-Pakete M und L, Kostenrechner."
            linkLabel="Zu den Preisen"
          />
          <OfferCard
            href="/managed-claude/zentrale-steuerung"
            title="Managed Claude Interface"
            description="Team, Limits, Connectors, Anweisungen und Skills zentral im Kundenportal."
            linkLabel="Zum Interface"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="DATEV MCP, Outlook Connector, Websuche und eigene Systeme per MCP."
            linkLabel="Zu den Integrationen"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            title="Claude API"
            description="Eigene Apps bauen: API-Key über uns, Kosten je Agent und Use Case getrackt."
            linkLabel="Zur Claude API"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Vom Scoping-Gespräch bis zum Go-live: wer was macht und wann Ihr Team startklar ist."
            linkLabel="Zum Onboarding"
          />
          <OfferCard
            href="/managed-claude/weitere-tools/n8n"
            title="n8n"
            description="Auf n8n laufen unsere Agenten. Hosting, Wartung und Schulungen gibt es weiterhin."
            linkLabel="Zum n8n-Hub"
          />
          <OfferCard
            href="/managed-claude/weitere-tools"
            title="Weitere Tools"
            description="Make, Zapier, Navision, easybill, e.bootis und mehr."
            linkLabel="Zu allen Tools"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Wer dahintersteht</IntroBox.PreHeadline>
          <IntroBox.Headline>Cloud-Erfahrung aus dem Enterprise-Umfeld</IntroBox.Headline>
          <IntroBox.Paragraph>
            Bluebatch ist eine Tochter der Pexon Consulting, einer IT- und Cloud-Beratung für Konzerne und Mittelstand. Das Gateway läuft deshalb so, wie wir auch große AWS-Umgebungen betreiben: dokumentiert, überwacht und in Ihrem Konto.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Cloud}>AWS im eigenen Konto</IconTitle>}>
            Konto, Zugänge und Daten gehören Ihnen. Wir richten ein und betreuen, Sie behalten die Kontrolle und könnten jederzeit ohne uns weitermachen.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ShieldCheck}>Compliance mitgedacht</IconTitle>}>
            AV-Vertrag, Verpflichtung nach § 203 StGB, dokumentierte Maßnahmen und eine Liste aller Unterauftragnehmer gehören zur Einrichtung dazu.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={LifeBuoy}>Betrieb mit Ansprechpartner</IconTitle>}>
            Neue Modelle, neue Mitarbeiter, neue Connectors: Sie haben einen festen Ansprechpartner, der das Gateway kennt.{" "}
            <InternalLink href="/team" variant="underline">
              Das Team
            </InternalLink>
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <LatestBlogPosts />

      <ContentWrapper colorScheme="gradient-night">
        <IntroBox dark>
          <IntroBox.Headline>Unsere Standorte</IntroBox.Headline>
          <IntroBox.Subline>
            Persönliche Betreuung in den wichtigsten Wirtschaftsregionen
            Deutschlands.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {standorte.map((city) => (
            <Link
              key={city.slug}
              href={resolveHref(`/standorte/${city.slug}`)}
              className="group"
            >
              <GlassCard
                float
                floatDelay={city.delay}
                className="h-full overflow-hidden p-0!"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <GlassCardTitle>{city.name}</GlassCardTitle>
                  <GlassCardDescription>{city.fact}</GlassCardDescription>
                  <GlassCardArrow>Mehr erfahren</GlassCardArrow>
                </div>
              </GlassCard>
            </Link>
          ))}
        </SimpleGrid>

        <div className="mt-16 text-center">
          <Link
            href="/standorte"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-lg hover:shadow-blue-500/10"
          >
            Alle Standorte entdecken
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Häufige Fragen zu Claude AI in Deutschland"
          intro="Was Kanzleien und Unternehmen vor dem Start wissen wollen."
          faqs={[
            {
              question: "Kann man Claude AI in Deutschland datenschutzkonform nutzen?",
              answer:
                "Ja, wenn die Verarbeitung in der EU läuft und die Verträge stimmen. Beim Private Claude AI Gateway läuft Claude von Anthropic über AWS Bedrock in Frankfurt, in Ihrem eigenen Konto, mit AV-Vertrag nach Art. 28 DSGVO. Kein Training mit Ihren Daten, kein Verlauf beim Anbieter. Für Kanzleien liefern wir zusätzlich die Unterlagen für § 203 StGB und § 62a StBerG.",
            },
            {
              question: "Versteht und schreibt Claude AI Deutsch?",
              answer:
                "Ja. Claude von Anthropic versteht und schreibt Deutsch auf hohem Niveau, auch die Fachsprache aus Steuerrecht, Recht und Technik. Mails, Schriftsätze und Zusammenfassungen entstehen direkt auf Deutsch, im Ton, den Sie über firmenweite Anweisungen vorgeben.",
            },
            {
              question: "Brauchen wir dafür den Claude Enterprise Plan?",
              answer:
                "Nein. Claude Enterprise ist das Abo direkt bei Anthropic und wird pro Kopf und Monat abgerechnet. Über das Gateway nutzen Sie die Claude-Modelle über AWS Bedrock in Frankfurt, zahlen nach Verbrauch und bekommen die Unterlagen für § 203 StGB und § 62a StBerG. Ein Abo bei Anthropic brauchen Sie dafür nicht.",
            },
            {
              question: "Brauche ich einen Anthropic Partner, um Claude im Unternehmen zu nutzen?",
              answer:
                "Nicht zwingend, aber es spart viel Arbeit. Claude gibt es als Abo direkt bei Anthropic oder über AWS Bedrock im eigenen Konto. Für den zweiten Weg braucht es jemanden, der Gateway, Anmeldung, Rechte, Limits und Abrechnung aufsetzt und das Team schult. Das übernimmt Bluebatch als Managed Service Provider für Claude.",
            },
            {
              question: "Was kostet Claude für Unternehmen bei Bluebatch?",
              answer:
                "Die Einrichtung des Private Claude AI Gateway kostet einmalig 1.500 € zzgl. USt. Danach zahlen Sie die Modellkosten nach Verbrauch laut Preisliste, zum Beispiel 2,60 € je 1 Million Input-Tokens bei Claude Sonnet 5.5, ohne Lizenz pro Kopf. Mit Coaching-Paket M (5.000 €) oder L (10.000 €) werden Einrichtung und Outlook Connector voll angerechnet.",
            },
            {
              question: "Werden unsere Daten für Training genutzt?",
              answer:
                "Nein. Kein Training mit Ihren Daten ist vertraglich zugesichert, beim Anbieter wird kein Verlauf gespeichert, und die Datenresidenz in der EU ist dokumentiert.",
            },
            {
              question: "Wie schnell können wir mit Claude starten?",
              answer:
                "Nach einem Scoping-Gespräch von 30 Minuten bekommen Sie drei Tage später ein Angebot. Maximal eine Woche nach Auftrag sind Gateway und Claude Desktop eingerichtet und alle Mitarbeiter haben Zugang.",
            },
            {
              question: "Sind wir danach an Bluebatch gebunden?",
              answer:
                "Nein. Konto, Zugänge, Kanzlei-Handbuch und Abläufe gehören Ihnen. Wenn Sie uns morgen nicht mehr brauchen, läuft alles weiter. Die laufende Betreuung ist optional und jederzeit kündbar.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Sprechen wir über Schritt 1</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
