import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, Check, CircleAlert, Clock, FileText, Mail, Paperclip } from "lucide-react";
import { SimpleGrid } from "@/components/layout";
import { resolveHref } from "@/lib/get-canonical-path";

// Seitenspezifische Grafiken für /managed-claude/use-cases: Agenten-Kacheln
// mit Mini-Ansicht des Ergebnisses und die Posteingangs-Vorschau des
// Mail-Agenten.

function Tag({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "amber" | "red" }) {
  const tones = {
    blue: "bg-primary-50 text-primary-700 ring-primary-200",
    green: "bg-green-50 text-green-700 ring-green-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-200",
    red: "bg-red-50 text-red-700 ring-red-200",
  };
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-px text-[10px] font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="w-full rounded-xl bg-white p-3 text-[11px] text-gray-700 shadow-md shadow-primary-900/10 ring-1 ring-gray-200">
      {children}
    </div>
  );
}

function Row({ label, value, strong = false }: { label: string; value: ReactNode; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2 py-1">
      <span className="text-gray-500">{label}</span>
      <span className={`tabular-nums ${strong ? "font-semibold text-gray-900" : ""}`}>{value}</span>
    </div>
  );
}

const AGENTS: { title: string; text: string; href: string; link: string; visual: ReactNode }[] = [
  {
    title: "Belegvorerfassung",
    text: "Belege vorprüfen und zuordnen, gebucht wird von Ihren Leuten.",
    href: "/branchen/steuerberater/workflows/belegpruefung",
    link: "Zur Belegprüfung",
    visual: (
      <Panel>
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 font-semibold text-gray-900">
            <FileText className="h-3.5 w-3.5 text-primary-600" aria-hidden />
            Tankbeleg.pdf
          </span>
          <Tag tone="amber">zur Prüfung</Tag>
        </div>
        <div className="divide-y divide-gray-100">
          <Row label="Datum" value="08.10.2026" />
          <Row label="Betrag" value="64,90 €" strong />
          <Row label="Vorschlag Konto" value="4530 Kfz" />
        </div>
      </Panel>
    ),
  },
  {
    title: "Mandanten-Onboarding",
    text: "Neue Mandate strukturiert aufnehmen, fehlende Unterlagen anfordern.",
    href: "/branchen/steuerberater/workflows/mandanten-onboarding",
    link: "Zum Onboarding",
    visual: (
      <Panel>
        <div className="mb-1.5 font-semibold text-gray-900">Neues Mandat: Schulz GmbH</div>
        <ul className="space-y-1.5">
          {["Stammdaten erfasst", "Vollmacht unterschrieben"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" aria-hidden />
              {t}
            </li>
          ))}
          <li className="flex items-center gap-1.5">
            <CircleAlert className="h-3.5 w-3.5 text-amber-600" aria-hidden />
            Ausweis fehlt
            <Tag tone="blue">Erinnerung bereit</Tag>
          </li>
        </ul>
      </Panel>
    ),
  },
  {
    title: "Wiederkehrende Auswertungen",
    text: "Zum Beispiel die Montagsübersicht, die heute jemand von Hand baut.",
    href: "/branchen/steuerberater/ki-agenten/bwa-analyse-agent",
    link: "Zur BWA-Analyse",
    visual: (
      <Panel>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-semibold text-gray-900">Montagsübersicht KW 42</span>
          <Tag tone="green">fertig 7:00</Tag>
        </div>
        <div className="flex h-10 items-end gap-1" aria-hidden>
          {[40, 65, 50, 80, 72, 95, 60].map((h, i) => (
            <span key={i} className="flex-1 rounded-t-sm bg-primary-500/80" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-gray-500">
          <span>3 Fristen</span>
          <span>2 Rückfragen offen</span>
        </div>
      </Panel>
    ),
  },
  {
    title: "Bescheidprüfung",
    text: "Bescheid gegen Erklärung prüfen, Abweichungen und Fristen melden, Einspruchsentwurf vorbereiten.",
    href: "/branchen/steuerberater/ki-agenten/einspruch-agent",
    link: "Zum Einspruch-Agenten",
    visual: (
      <Panel>
        <div className="divide-y divide-gray-100">
          <Row label="Erklärung" value="12.480 €" />
          <Row label="Bescheid" value="13.020 €" />
          <Row label="Abweichung" value={<Tag tone="red">+ 540 €</Tag>} />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-gray-500">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          Einspruchsfrist bis 14.11.
        </div>
      </Panel>
    ),
  },
];

export function AgentenKacheln() {
  return (
    <SimpleGrid cols={2} className="gap-6! xl:grid-cols-4">
      {AGENTS.map((a) => (
        <Link
          key={a.title}
          href={resolveHref(a.href)}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-44 items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-5">
            {a.visual}
          </div>
          <div className="flex flex-1 flex-col border-t border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.text}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary-600">
              {a.link}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </div>
        </Link>
      ))}
    </SimpleGrid>
  );
}

const INBOX = [
  { from: "Herr Weber", initials: "HW", subject: "Belege ESt 2025", tag: "Mandant zugeordnet", tone: "blue" as const, attach: true },
  { from: "Finanzamt Köln-Mitte", initials: "FA", subject: "Bescheid ESt 2025", tag: "Frist 14.11.", tone: "red" as const, attach: true },
  { from: "Schulz GmbH", initials: "SG", subject: "Rückfrage Lohnabrechnung", tag: "Entwurf bereit", tone: "green" as const, attach: false },
  { from: "Frau Kaya", initials: "FK", subject: "Termin nächste Woche?", tag: "Entwurf bereit", tone: "green" as const, attach: false },
];

export function PosteingangVorschau() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-primary-900/10 ring-1 ring-gray-200">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2.5">
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Mail className="h-4 w-4 text-primary-600" aria-hidden />
          Posteingang, vorsortiert
        </span>
        <span className="text-[11px] text-gray-500">heute, 7:30</span>
      </div>
      <ul className="divide-y divide-gray-100">
        {INBOX.map((m) => (
          <li key={m.subject} className="flex items-center gap-3 px-4 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-[11px] font-bold text-primary-700">
              {m.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-gray-900">{m.from}</span>
              <span className="flex items-center gap-1 truncate text-xs text-gray-500">
                {m.attach && <Paperclip className="h-3 w-3 shrink-0" aria-hidden />}
                {m.subject}
              </span>
            </span>
            <Tag tone={m.tone}>{m.tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
