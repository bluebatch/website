import { ReactNode } from "react";
import { ArrowDown, Cloud, Scale, ShieldCheck, Users } from "lucide-react";
import { ClaudeLogo } from "@/components/icons/brand-logos";
import { BrowserFrame, PortalMock } from "@/components/mockups";

// Seitenspezifische Grafiken für /managed-claude/wie-es-funktioniert:
// Architektur-Stapel im Hero und der Konfigurations-Screen aus dem Portal.

function Layer({
  icon,
  title,
  badge,
  dark = false,
  children,
}: {
  icon: ReactNode;
  title: string;
  badge?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl p-4 ${
        dark
          ? "bg-gradient-to-br from-primary-800 to-primary-950 text-white shadow-xl shadow-primary-900/30"
          : "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
          dark ? "bg-white/10 text-secondary-400 ring-1 ring-white/15" : "bg-primary-50 text-primary-700"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="font-bold leading-tight">{title}</p>
          {badge && (
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                dark ? "bg-secondary-400 text-primary-950" : "bg-primary-50 text-primary-700 ring-1 ring-primary-100"
              }`}
            >
              {badge}
            </span>
          )}
        </div>
        <p className={`mt-1 text-sm leading-snug ${dark ? "text-primary-100" : "text-gray-500"}`}>{children}</p>
      </div>
    </div>
  );
}

function Connector({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 py-1 pl-[33px]" aria-hidden>
      <span className="flex h-7 w-3.5 flex-col items-center">
        <span className="w-px flex-1 bg-primary-300" />
        <ArrowDown className="-mt-1 h-3.5 w-3.5 text-primary-500" />
      </span>
      <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{children}</span>
    </div>
  );
}

const LAW = ["§ 203 StGB", "§ 43e BRAO", "§ 62a StBerG", "Art. 28 DSGVO"];

export function ArchitekturGrafik() {
  return (
    <figure className="rounded-3xl bg-gradient-to-br from-gray-50 to-primary-50/70 p-4 ring-1 ring-gray-200 sm:p-6">
      <Layer icon={<Users className="h-6 w-6" />} title="Mitarbeiter" badge="SSO">
        Claude Desktop mit Chat, Cowork und Code, Anmeldung mit dem Firmenkonto
      </Layer>
      <Connector>jede Anfrage</Connector>
      <Layer icon={<ShieldCheck className="h-6 w-6" />} title="Private Claude AI Gateway" badge="Ihr Konto" dark>
        Rollen, Protokoll, Limits in Euro, Connectors und Anweisungen
      </Layer>
      <Connector>eigene Anbindung</Connector>
      <Layer icon={<Cloud className="h-6 w-6" />} title="AWS Bedrock" badge="Frankfurt">
        Verarbeitung in der EU, kein Training, kein Verlauf beim Anbieter
      </Layer>
      <Connector>Modellaufruf</Connector>
      <Layer icon={<ClaudeLogo className="h-6 w-6" />} title="Claude-Modelle von Anthropic">
        Opus, Sonnet und Haiku, je Aufgabe wählbar
      </Layer>
      <figcaption className="mt-5 flex flex-wrap items-center gap-2">
        <Scale className="h-4 w-4 text-primary-700" aria-hidden />
        {LAW.map((l) => (
          <span
            key={l}
            className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary-800 ring-1 ring-primary-200"
          >
            {l}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}

const CONFIG_ROWS: [string, ReactNode][] = [
  ["Bereiche", "Chat, Cowork, Code"],
  ["Banner", "Kanzlei Müller · Private Gateway"],
  ["Microsoft 365", <PortalMock.Badge key="m365" tone="ok">an</PortalMock.Badge>],
  ["Websuche", "Brave, mit Rückfrage"],
  ["Gesperrte Werkzeuge", "2"],
  ["Netzwerk", "Nur freigegebene Adressen"],
  ["Ordner", "C:\\Akten (nur lesen)"],
];

export function KonfigMock() {
  return (
    <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/config">
      <PortalMock active="config">
        <PortalMock.Intro>
          Die Konfiguration, die Claude Desktop für eine Person tatsächlich bekommt. Für Audit und Fehlersuche.
        </PortalMock.Intro>
        <div className="flex items-center gap-2">
          <PortalMock.Avatar color="#145cad">SM</PortalMock.Avatar>
          <PortalMock.Field className="flex-1">S. Müller · Mitglied</PortalMock.Field>
        </div>
        <PortalMock.Section title="Auf einen Blick">
          <PortalMock.Table
            columns={["Bereich", "Wert"]}
            rows={CONFIG_ROWS.map(([k, v]) => [k, v])}
          />
        </PortalMock.Section>
      </PortalMock>
    </BrowserFrame>
  );
}
