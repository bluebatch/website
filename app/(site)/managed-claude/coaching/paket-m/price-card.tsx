import { BadgePercent, Check } from "lucide-react";

// Preis-Karte für den Hero von Paket M: Paketpreis, Inhalt und die Anrechnung
// von Einrichtung und Outlook Connector als kleine Rechnung.

const items = [
  "Schulung zu Modellen, App, Chat, Co-Work und Projekten",
  "KI-Kompetenzschulung nach Art. 4 EU AI Act, Zertifikat je Mitarbeiter",
  "Erste Arbeitsanleitungen (Skills) und Routinen an echten Fällen",
  "Grundgerüst für das Kanzlei-Handbuch",
];

export default function PriceCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[2.5rem] sm:-inset-6 bg-gradient-to-br from-primary-200/60 via-white to-secondary-200/60 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(0,33,74,0.4)] ring-1 ring-gray-900/5">
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-6 text-white sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Paket M
            </span>
            <span className="text-sm text-white/70">KI-Workshop</span>
          </div>
          <p className="mt-5 text-sm font-medium text-white/80">5 Personentage</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-5xl font-bold tracking-tight">5.000 €</span>
            <span className="text-sm text-white/70">zzgl. USt.</span>
          </p>
        </div>

        <ul className="space-y-3 px-6 py-6 text-sm text-gray-700 sm:px-7">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-6 mb-6 rounded-2xl bg-green-50 p-4 ring-1 ring-green-200 sm:mx-7 sm:mb-7">
          <p className="flex items-start gap-2 text-sm font-semibold text-green-800">
            <BadgePercent className="mt-px h-5 w-5 shrink-0" aria-hidden />
            Einrichtung und Outlook Connector zu 100 % angerechnet
          </p>
          <dl className="mt-3 space-y-1.5 text-sm text-gray-700">
            <div className="flex justify-between gap-4">
              <dt>Einrichtung</dt>
              <dd className="tabular-nums text-green-700">− 1.500 €</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Outlook Connector</dt>
              <dd className="tabular-nums text-green-700">− 500 €</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-green-200 pt-2 font-semibold text-gray-900">
              <dt>Effektiv zusätzlich</dt>
              <dd className="tabular-nums">3.000 €</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
