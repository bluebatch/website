import { CalendarCheck, Check } from "lucide-react";
import { ClaudeLogo } from "@/components/icons/brand-logos";

// Wochenplan-Mock für den Onboarding-Hero: eine Beispielwoche vom Vertrag bis
// zum ersten Prompt. Der letzte Tag ist aufgeklappt und zeigt den ersten
// Prompt im Gateway.

const days = [
  { weekday: "Mo", title: "Vertrag und Geheimhaltung", detail: "AVV, Geheimhaltung und Auftrag unterschrieben" },
  { weekday: "Di", title: "Tenant-Einrichtung", detail: "Gateway über AWS Bedrock in Frankfurt" },
  { weekday: "Mi", title: "Anmeldung und Limits", detail: "SSO, Team und Rollen, Budget je Person" },
  { weekday: "Do", title: "Claude Desktop verbinden", detail: "Eine Datei aus dem Portal, Anmeldung per SSO" },
];

export default function GoLivePlan() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-primary-200/60 via-white to-secondary-200/50 blur-2xl sm:-inset-6"
      />
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(0,33,74,0.4)] ring-1 ring-gray-900/5">
        <div className="border-b border-gray-100 px-5 pb-4 pt-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
              <CalendarCheck className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">Go-live-Plan</p>
              <p className="text-xs text-gray-500">Kanzlei Müller · Beispielwoche</p>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-200">
              4 von 5
            </span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100" aria-hidden>
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-secondary-500 to-primary-600" />
          </div>
        </div>

        <ol className="px-5 pt-4 sm:px-6">
          {days.map((d, i) => (
            <li key={d.weekday} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-label="erledigt" />
                </span>
                <span className="w-px flex-1 bg-gray-200" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 pb-4">
                <p className="text-sm font-semibold leading-6 text-gray-900">{d.title}</p>
                <p className="text-xs text-gray-500">{d.detail}</p>
              </div>
              <span className="pt-0.5 text-xs font-medium text-gray-400">
                Tag {i + 1} · {d.weekday}
              </span>
            </li>
          ))}
          <li className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary-400/40" aria-hidden />
                <span className="relative h-3.5 w-3.5 rounded-full bg-primary-600 ring-4 ring-primary-100" />
              </span>
            </div>
            <div className="min-w-0 flex-1 pb-5">
              <p className="text-sm font-semibold leading-6 text-primary-700">Erster Prompt</p>
              <p className="text-xs text-gray-500">Das ganze Team arbeitet mit Claude</p>
            </div>
            <span className="pt-0.5 text-xs font-semibold text-primary-700">Tag 5 · Fr</span>
          </li>
        </ol>

        <div className="mx-5 mb-5 overflow-hidden rounded-2xl bg-[#faf9f5] ring-1 ring-gray-200 sm:mx-6 sm:mb-6">
          <div className="bg-primary-800 px-3 py-1 text-center text-[10px] font-medium text-white">
            Kanzlei Müller · Private Gateway
          </div>
          <div className="space-y-2.5 p-3">
            <div className="flex justify-end">
              <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[#f0eee6] px-3 py-2 text-xs leading-relaxed text-[#29261b]">
                Formuliere eine freundliche Erinnerung an die fehlenden Belege für die Umsatzsteuer-Voranmeldung.
              </p>
            </div>
            <div className="flex gap-2">
              <ClaudeLogo className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <p className="text-xs leading-relaxed text-[#29261b]">
                Gern, hier ein Entwurf: „Sehr geehrte Frau Becker, für die Voranmeldung Oktober fehlen uns noch zwei Belege …“
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
