import { Children, isValidElement, ReactNode } from "react";
import {
  ArrowUp,
  CodeXml,
  FolderOpen,
  MessageSquare,
  Paperclip,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import { ClaudeLogo } from "@/components/icons/brand-logos";

// Nachbau von Claude Desktop (Chat/Cowork/Code) als Mock-Screenshot.
// Banner oben = vom Admin im Gateway-Portal gesetzte Leiste.
//
// <ClaudeDesktopMock mode="Chat" model="Sonnet 5.5">
//   <ClaudeDesktopMock.Banner>Kanzlei Müller · Private Gateway</ClaudeDesktopMock.Banner>
//   <ClaudeDesktopMock.User>Fasse die Mail von Herrn Weber zusammen</ClaudeDesktopMock.User>
//   <ClaudeDesktopMock.Tool>Outlook · 1 Mail gelesen</ClaudeDesktopMock.Tool>
//   <ClaudeDesktopMock.Assistant>Herr Weber bittet um …</ClaudeDesktopMock.Assistant>
// </ClaudeDesktopMock>

interface ClaudeDesktopMockProps {
  children: ReactNode;
  mode?: "Chat" | "Cowork" | "Code";
  /** Modellname im Eingabefeld */
  model?: string;
  /** Linke Leiste ausblenden (für schmale Spalten) */
  compact?: boolean;
  /** Farbe des Banners (Hintergrund) */
  bannerColor?: string;
  className?: string;
}

function Banner({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function User({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#f0eee6] px-3.5 py-2 text-[13px] leading-relaxed text-[#29261b]">
        {children}
      </div>
    </div>
  );
}

function Assistant({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-2.5">
      <ClaudeLogo className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="min-w-0 space-y-1.5 text-[13px] leading-relaxed text-[#29261b] [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}

function Tool({ children }: { children: ReactNode }) {
  return (
    <div className="ml-6 inline-flex items-center gap-1.5 self-start rounded-lg border border-[#e5e2d8] bg-white px-2.5 py-1 text-[11px] text-[#6b6657]">
      <Sparkles className="h-3 w-3 text-[#d97757]" aria-hidden />
      {children}
    </div>
  );
}

function ClaudeDesktopMock({
  children,
  mode = "Chat",
  model = "Sonnet 5.5",
  compact = false,
  bannerColor = "#145CAD",
  className = "",
}: ClaudeDesktopMockProps) {
  let banner: ReactNode = null;
  const turns: ReactNode[] = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === Banner) banner = child;
    else turns.push(child);
  });

  const modes = [
    { label: "Chat", icon: MessageSquare },
    { label: "Cowork", icon: FolderOpen },
    { label: "Code", icon: CodeXml },
  ] as const;

  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#faf9f5] shadow-2xl shadow-primary-900/20 ring-1 ring-gray-900/10 ${className}`}
    >
      {/* Titelleiste */}
      <div className="flex items-center gap-1.5 bg-[#f0eee6] px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto pr-10 text-[11px] font-medium text-[#6b6657]">Claude</span>
      </div>
      {banner && (
        <div
          className="px-3 py-1.5 text-center text-[11px] font-semibold tracking-wide text-white"
          style={{ backgroundColor: bannerColor }}
        >
          {banner}
        </div>
      )}
      <div className="flex min-h-[300px]">
        {!compact && (
          <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-[#e5e2d8] bg-[#f5f4ee] p-2.5 sm:flex">
            <div className="mb-1 flex items-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-[12px] font-medium text-[#29261b] ring-1 ring-[#e5e2d8]">
              <Plus className="h-3.5 w-3.5 text-[#d97757]" aria-hidden />
              Neuer Chat
            </div>
            {modes.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[12px] ${
                  label === mode
                    ? "bg-[#e9e6dc] font-medium text-[#29261b]"
                    : "text-[#6b6657]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden />
                {label}
              </div>
            ))}
            <div className="mt-3 px-2 text-[10px] font-medium uppercase tracking-wide text-[#a39e8f]">
              Zuletzt
            </div>
            {["Mandantenanfrage Weber", "Fristenliste KW 42", "Entwurf Einspruch"].map((t) => (
              <div key={t} className="truncate px-2 py-1 text-[11px] text-[#6b6657]">
                {t}
              </div>
            ))}
          </aside>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col gap-3.5 px-4 py-4 sm:px-6">{turns}</div>
          {/* Eingabe */}
          <div className="px-4 pb-4 sm:px-6">
            <div className="rounded-2xl border border-[#e5e2d8] bg-white px-3 py-2.5 shadow-sm">
              <div className="text-[12px] text-[#a39e8f]">Antworten …</div>
              <div className="mt-2 flex items-center gap-2 text-[#6b6657]">
                <Paperclip className="h-3.5 w-3.5" aria-hidden />
                <Search className="h-3.5 w-3.5" aria-hidden />
                <span className="ml-auto text-[11px]">{model}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#d97757] text-white">
                  <ArrowUp className="h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ClaudeDesktopMock.Banner = Banner;
ClaudeDesktopMock.User = User;
ClaudeDesktopMock.Assistant = Assistant;
ClaudeDesktopMock.Tool = Tool;

export default ClaudeDesktopMock;
