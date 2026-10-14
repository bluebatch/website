import { ReactNode } from "react";
import { BrowserFrame, ClaudeDesktopMock, PortalMock } from "@/components/mockups";
import { BraveLogo, MicrosoftLogo } from "@/components/icons/brand-logos";

// Seitenspezifische Grafiken der Startseite (früher Managed-Claude-Hub): Hero-Komposition
// (Portal hinten, Claude Desktop vorne) und der Connectors-Screen für den
// Abschnitt zum Managed Claude Interface.

export function HubHeroVisual() {
  return (
    <div className="relative sm:pb-44 lg:pb-48">
      <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/usage" className="sm:w-[92%]">
        <PortalMock active="usage">
          <PortalMock.Chips items={["Letzte 7 Tage", "Dieser Monat", "Letzter Monat"]} active={1} />
          <PortalMock.Card>
            <div className="text-[20px] font-semibold tabular-nums">217,55 €</div>
            <div className="mb-3 text-[11px] text-gray-500">
              Gesamte Organisation · 01.10.2026 bis 13.10.2026
            </div>
            <PortalMock.Bars
              values={[14, 22, 19, 26, 4, 3, 21, 28, 24, 31, 25, 5, 9]}
              labels={["01.10.", "07.10.", "13.10."]}
            />
          </PortalMock.Card>
        </PortalMock>
      </BrowserFrame>
      <div className="relative z-10 -mt-10 ml-auto w-[90%] sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 sm:w-[60%] lg:w-[58%]">
        <ClaudeDesktopMock compact model="Sonnet 5.5" className="shadow-[0_30px_70px_-20px_rgba(0,33,74,0.55)]">
          <ClaudeDesktopMock.Banner>Kanzlei Müller · Private Gateway</ClaudeDesktopMock.Banner>
          <ClaudeDesktopMock.User>Fasse die Mail von Herrn Weber zusammen.</ClaudeDesktopMock.User>
          <ClaudeDesktopMock.Tool>Outlook · 1 Mail gelesen</ClaudeDesktopMock.Tool>
          <ClaudeDesktopMock.Assistant>
            <p>Herr Weber fragt nach dem Stand seiner Einkommensteuererklärung 2025.</p>
            <ul>
              <li>Unterlagen vollständig</li>
              <li>Rückfrage zu Handwerkerleistungen offen</li>
            </ul>
          </ClaudeDesktopMock.Assistant>
        </ClaudeDesktopMock>
      </div>
    </div>
  );
}

function ConnectorRow({
  logo,
  name,
  detail,
  scope,
  on = true,
}: {
  logo: ReactNode;
  name: string;
  detail: string;
  scope: string;
  on?: boolean;
}) {
  return (
    <PortalMock.Card className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-50 ring-1 ring-gray-200">
        {logo}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold">{name}</span>
        <span className="block truncate text-[11px] text-gray-500">{detail}</span>
      </span>
      <PortalMock.Badge tone={on ? "accent" : "muted"}>{scope}</PortalMock.Badge>
      <PortalMock.Switch on={on} />
    </PortalMock.Card>
  );
}

export function ConnectorsMock() {
  return (
    <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/connectors">
      <PortalMock active="connectors">
        <PortalMock.Intro>
          Systeme einmal zentral anbinden und festlegen, wer sie in Claude nutzen darf.
        </PortalMock.Intro>
        <div className="space-y-2">
          <ConnectorRow
            logo={<MicrosoftLogo className="h-4 w-4" />}
            name="Microsoft 365"
            detail="Outlook, Kalender, OneDrive"
            scope="Alle Personen"
          />
          <ConnectorRow
            logo={<BraveLogo className="h-4 w-4" />}
            name="Websuche"
            detail="Brave, mit Rückfrage vor jeder Suche"
            scope="Alle Personen"
          />
          <ConnectorRow
            logo={<span className="text-[10px] font-bold text-gray-500">MCP</span>}
            name="Aktenverwaltung"
            detail="Eigener Remote-MCP-Server"
            scope="3 Personen"
            on={false}
          />
        </div>
        <PortalMock.Section title="Vorlagen">
          <PortalMock.Chips items={["Pipedrive", "Notion", "Atlassian", "monday.com", "Linear"]} active={-1} />
        </PortalMock.Section>
      </PortalMock>
    </BrowserFrame>
  );
}
