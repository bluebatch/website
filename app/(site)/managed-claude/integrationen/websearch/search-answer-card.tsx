import { ReactNode } from "react";
import { CircleCheck } from "lucide-react";
import { BraveLogo, ClaudeLogo } from "@/components/icons/brand-logos";

// Hero-Grafik der Websuche-Seite: Frage, freigegebene Suche, Antwort mit
// nummerierten Quellen. Einmalige Grafik für genau diese Seite, deshalb
// seiten-lokal.

function Cite({ children }: { children: ReactNode }) {
  return (
    <span className="ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded bg-[#f0eee6] px-1 align-[1px] text-[10px] font-semibold text-[#6b6657]">
      {children}
    </span>
  );
}

const sources = [
  { domain: "bundesfinanzministerium.de", title: "Fragen und Antworten zur Einführung der E-Rechnung" },
  { domain: "ihk.de", title: "E-Rechnung: Pflichten und Übergangsfristen" },
  { domain: "haufe.de", title: "E-Rechnungspflicht: der Zeitplan bis 2028" },
];

export default function SearchAnswerCard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#faf9f5] text-left shadow-2xl shadow-primary-900/20 ring-1 ring-gray-900/10">
      <div className="flex items-center gap-1.5 bg-[#f0eee6] px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto pr-10 text-[11px] font-medium text-[#6b6657]">Claude</span>
      </div>

      <div className="space-y-4 px-4 py-5 sm:px-8 sm:py-6">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#f0eee6] px-3.5 py-2 text-[13px] leading-relaxed text-[#29261b] sm:text-[14px]">
            Welche Fristen gelten ab 2027 für die E-Rechnung zwischen Unternehmen?
          </div>
        </div>

        <div className="rounded-xl border border-[#e5e2d8] bg-white p-3 sm:ml-7">
          <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#6b6657]">
            <BraveLogo className="h-4 w-4" />
            <span>Claude möchte im Netz suchen nach</span>
          </div>
          <div className="mt-2 inline-block rounded-md bg-gray-100 px-2 py-1 font-mono text-[12px] text-gray-800">
            E-Rechnung Pflicht 2027 Umsatzgrenze Übergangsfrist
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-green-700">
            <CircleCheck className="h-3.5 w-3.5" aria-hidden />
            Von Ihnen freigegeben · 3 Quellen gelesen
          </div>
        </div>

        <div className="flex gap-2.5">
          <ClaudeLogo className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-[13px] leading-relaxed text-[#29261b] sm:text-[14px]">
            Empfangen können müssen alle Unternehmen E-Rechnungen schon seit dem 1. Januar 2025.<Cite>1</Cite> Ab dem 1. Januar 2027 müssen Unternehmen mit mehr als 800.000 € Vorjahresumsatz sie auch ausstellen.<Cite>1</Cite><Cite>2</Cite> Für alle anderen endet die Übergangsfrist am 31. Dezember 2027, ab 2028 gilt die Pflicht für alle.<Cite>2</Cite><Cite>3</Cite>
          </p>
        </div>

        <ol className="space-y-1.5 border-t border-[#e5e2d8] pt-3 sm:ml-7">
          {sources.map((s, i) => (
            <li key={s.domain} className="flex items-baseline gap-2 text-[12px]">
              <span className="font-semibold text-[#6b6657]">{i + 1}</span>
              <span className="min-w-0">
                <span className="text-[#29261b]">{s.title}</span>{" "}
                <span className="text-[#a39e8f]">{s.domain}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
