import { ReactNode } from "react";
import { ArrowDown, ArrowRight, Building2, Cloud, KeyRound, Laptop, ShieldCheck, User } from "lucide-react";
import { BraveLogo, MicrosoftLogo } from "@/components/icons/brand-logos";
import { BrowserFrame, PortalMock } from "@/components/mockups";

// Seitenspezifische Grafiken für /managed-claude/datenschutz: Kurzantwort im
// Hero, der Weg einer Anfrage und die Rückfrage des Portals vor der Websuche
// ohne Bestätigung (Text wie im echten Portal, connectors.tsx).

// ── Kurzantwort (Hero) ──────────────────────────────────────────────────────

const WEGE: {
  icon: ReactNode;
  titel: string;
  urteil: string;
  ton: "neutral" | "pruefen" | "gut";
  text: string;
}[] = [
  {
    icon: <User className="h-5 w-5" />,
    titel: "Claude.ai Free, Pro, Max",
    urteil: "Privat, nicht für Mandantendaten",
    ton: "neutral",
    text: "Verbraucher-Bedingungen, kein AV-Vertrag. Ob Chats ins Training gehen, regelt eine Einstellung im Konto.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    titel: "Claude Team, Enterprise",
    urteil: "Möglich, mit eigener Prüfung",
    ton: "pruefen",
    text: "AV-Vertrag von Anthropic, kein Training als Standard. Gespeichert wird laut Anthropic in den USA.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    titel: "Private Claude AI Gateway",
    urteil: "Gebaut für Berufsgeheimnisse",
    ton: "gut",
    text: "AWS Bedrock innerhalb der EU, AV-Vertrag und Verpflichtung nach § 203 StGB mit Bluebatch, kein Training.",
  },
];

const urteilKlasse = {
  neutral: "bg-gray-100 text-gray-700 ring-gray-200",
  pruefen: "bg-amber-50 text-amber-800 ring-amber-200",
  gut: "bg-green-50 text-green-800 ring-green-200",
};

export function KurzantwortKarte() {
  return (
    <figure className="overflow-hidden rounded-3xl bg-white text-left shadow-2xl shadow-primary-900/15 ring-1 ring-gray-900/10">
      <div className="border-b border-gray-100 bg-gradient-to-br from-primary-50 via-white to-white px-5 py-5 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Kurzantwort</p>
        <p className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">Ist Claude DSGVO-konform?</p>
        <p className="mt-1 text-sm text-gray-600">Kommt auf den Weg an. Drei Wege, drei Antworten.</p>
      </div>
      <ul className="divide-y divide-gray-100">
        {WEGE.map((w) => (
          <li
            key={w.titel}
            className={`flex gap-4 px-5 py-4 sm:px-7 ${w.ton === "gut" ? "bg-primary-50/60" : ""}`}
          >
            <span
              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                w.ton === "gut" ? "bg-primary-800 text-white" : "bg-gray-100 text-gray-500"
              }`}
              aria-hidden
            >
              {w.icon}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="font-semibold text-gray-900">{w.titel}</p>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ${urteilKlasse[w.ton]}`}>
                  {w.urteil}
                </span>
              </div>
              <p className="mt-1 text-sm leading-snug text-gray-600">{w.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-[11px] text-gray-500 sm:px-7">
        Stand Oktober 2026, Quellen: privacy.claude.com, Dokumentation von Amazon Bedrock. Keine Rechtsberatung.
      </figcaption>
    </figure>
  );
}

// ── Der Weg einer Anfrage ───────────────────────────────────────────────────

function Station({
  icon,
  titel,
  ort,
  bleibt,
  dunkel = false,
  children,
}: {
  icon: ReactNode;
  titel: string;
  ort: string;
  bleibt: string;
  dunkel?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl p-5 ${
        dunkel
          ? "bg-gradient-to-br from-primary-800 to-primary-950 text-white shadow-xl shadow-primary-900/30"
          : "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            dunkel ? "bg-white/10 text-secondary-400 ring-1 ring-white/15" : "bg-primary-50 text-primary-700"
          }`}
          aria-hidden
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p className="font-bold leading-tight">{titel}</p>
          <p className={`text-xs ${dunkel ? "text-primary-200" : "text-gray-500"}`}>{ort}</p>
        </div>
      </div>
      <p className={`mt-4 flex-1 text-sm leading-relaxed ${dunkel ? "text-primary-100" : "text-gray-600"}`}>
        {children}
      </p>
      <p
        className={`mt-4 rounded-lg px-3 py-2 text-xs font-semibold ${
          dunkel ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-primary-50 text-primary-800 ring-1 ring-primary-100"
        }`}
      >
        {bleibt}
      </p>
    </div>
  );
}

function Pfeil({ children }: { children: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2 lg:flex-col lg:px-1 lg:py-0" aria-hidden>
      <ArrowDown className="h-4 w-4 text-primary-500 lg:hidden" />
      <ArrowRight className="hidden h-4 w-4 text-primary-500 lg:block" />
      <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400 lg:max-w-20 lg:text-center">
        {children}
      </span>
    </div>
  );
}

function Nebenweg({ logo, titel, children }: { logo: ReactNode; titel: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-white/70 p-4 ring-1 ring-gray-200">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-200" aria-hidden>
        {logo}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900">{titel}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export function DatenwegGrafik() {
  return (
    <figure className="rounded-3xl bg-gradient-to-br from-gray-50 to-primary-50/70 p-4 ring-1 ring-gray-200 sm:p-6 lg:p-8">
      <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        <Station
          icon={<Laptop className="h-5 w-5" />}
          titel="Rechner der Person"
          ort="Claude Desktop, in Ihrem Büro"
          bleibt="Chatverlauf: nur auf dem Gerät"
        >
          Hier wird gefragt, hier liegen die Unterhaltungen. Claude sieht nur die Ordner, die Sie freigeben.
        </Station>
        <Pfeil>TLS 1.3</Pfeil>
        <Station
          icon={<ShieldCheck className="h-5 w-5" />}
          titel="Private Claude AI Gateway"
          ort="Von Bluebatch bei AWS in Frankfurt betrieben, eigene Organisation je Kunde"
          bleibt="Inhalte: werden nicht gespeichert"
          dunkel
        >
          Prüft Anmeldung, Rolle und Limit. Notiert je Anfrage Person, Modell, Tokens und Kosten, für Verbrauch und
          Abrechnung.
        </Station>
        <Pfeil>nur EU</Pfeil>
        <Station
          icon={<Cloud className="h-5 w-5" />}
          titel="Claude auf Amazon Bedrock"
          ort="Nur EU-Inference-Profile, Rechenzentren innerhalb der EU"
          bleibt="Kein Training, keine Speicherung"
        >
          Claude berechnet die Antwort. Modelle ohne EU-Profil bieten wir nicht an. Anthropic als Modellanbieter hat
          bei Bedrock keinen Zugriff auf Prompts und Antworten.
        </Station>
      </div>
      <figcaption className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Daneben
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <Nebenweg logo={<KeyRound className="h-4 w-4 text-primary-700" />} titel="Anmeldung über Clerk">
            SSO-Dienst nur für das Login: Name, E-Mail-Adresse und Organisation. Keine Anfragen, keine Chats.
          </Nebenweg>
          <Nebenweg logo={<BraveLogo className="h-4 w-4" />} titel="Websuche über Brave, optional">
            Nur die Suchbegriffe, gesendet vom Gateway und standardmäßig erst nach Ihrer Freigabe.
          </Nebenweg>
          <Nebenweg logo={<MicrosoftLogo className="h-4 w-4" />} titel="Microsoft 365, optional">
            Direkt vom Rechner zu Ihrem Tenant. Was Claude dort liest, geht als Teil der Anfrage den Weg oben.
          </Nebenweg>
        </div>
      </figcaption>
    </figure>
  );
}

// ── Rückfrage vor der Websuche ohne Bestätigung (Portal) ────────────────────

export function WebsucheWarnung() {
  return (
    <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/connectors">
      <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
        <PortalMock active="connectors" compact>
          <PortalMock.Intro>Verbindungen zu Ihren Systemen, die Claude im Auftrag einer Person nutzen darf.</PortalMock.Intro>
          <PortalMock.Card>
            <div className="flex items-center gap-2">
              <BraveLogo className="h-4 w-4" />
              <span className="font-semibold">Websuche</span>
              <span className="ml-auto">
                <PortalMock.Switch />
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-gray-700">
              <span className="h-3 w-3 rounded-sm ring-1 ring-gray-400" aria-hidden />
              Ohne Rückfrage suchen
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-gray-500">
              Ohne Haken fragt Claude vor jeder Suche nach, die Person sieht also die Suchbegriffe, bevor sie
              rausgehen.
            </p>
          </PortalMock.Card>
          <PortalMock.Card>
            <div className="flex items-center gap-2">
              <MicrosoftLogo className="h-4 w-4" />
              <span className="font-semibold">Microsoft 365</span>
              <span className="ml-auto">
                <PortalMock.Badge tone="ok">Eingerichtet</PortalMock.Badge>
              </span>
            </div>
          </PortalMock.Card>
          <div className="h-24" aria-hidden />
        </PortalMock>
        <div className="flex items-center justify-center bg-gray-900/40 p-3 sm:p-6">
          <div className="w-full max-w-md rounded-xl bg-white p-4 text-left text-[12px] leading-relaxed text-gray-700 shadow-2xl sm:p-5">
            <p className="mb-2 text-[14px] font-semibold text-gray-900">Websuche ohne Rückfrage?</p>
            <p>
              Ohne Rückfrage sucht Claude selbstständig im Netz, ohne dass die Person jede Suche bestätigt. Die
              Suchbegriffe bildet Claude aus dem Gespräch und schickt sie an einen externen Suchanbieter (Brave
              Search). Dabei können vertrauliche Informationen das Gateway verlassen, etwa Namen von Mandanten oder
              Details aus Akten.
            </p>
            <p className="mt-2 font-semibold text-gray-900">
              Für Berufsgeheimnisträger ist diese Einstellung unter Umständen nicht mit § 203 StGB vereinbar.
            </p>
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <PortalMock.Button>Abbrechen</PortalMock.Button>
              <span className="inline-flex items-center rounded-md bg-red-600 px-2.5 py-1 text-[11px] font-medium text-white">
                Verstanden, ohne Rückfrage aktivieren
              </span>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

