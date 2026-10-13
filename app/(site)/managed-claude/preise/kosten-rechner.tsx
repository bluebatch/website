"use client";

import { useMemo, useState } from "react";
import { Check, Euro, Mail } from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import { Slider, formatEur } from "@/app/(site)/branchen/grosshandel/roi-rechner/shared";

// Kostenrechner Private Claude AI Gateway (Stand 10/2026, alle Werte netto):
// Einrichtung 1.500 € fix, Outlook Connector 500 € zubuchbar, Verbrauch nach
// Nutzerklasse. Coaching-Paket M (5 PT) oder L (10 PT) rechnet Einrichtung und
// Outlook Connector zu 100 % an, höchstens bis zum Paketpreis.

const SETUP_EUR = 1500;
const OUTLOOK_EUR = 500;

const USER_CLASSES = [
  { key: "normal", label: "Normale Nutzer", hint: "gelegentlich Chat und Entwürfe", eurPerMonth: 40, initial: 10, max: 200 },
  { key: "heavy", label: "Heavy User", hint: "täglich, viele Dokumente", eurPerMonth: 100, initial: 3, max: 50 },
  { key: "expert", label: "Experten-Nutzer", hint: "Opus, lange Analysen, Agenten", eurPerMonth: 300, initial: 1, max: 50 },
] as const;

const PACKAGES = {
  none: { label: "Kein Paket", detail: "Nur Einrichtung", price: 0, days: 0 },
  m: { label: "Paket M", detail: "5 Personentage", price: 5000, days: 5 },
  l: { label: "Paket L", detail: "10 Personentage", price: 10000, days: 10 },
} as const;

type PackageKey = keyof typeof PACKAGES;

function StepLabel({ n, children }: { n: number; children: string }) {
  return (
    <h3 className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-gray-500">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
        {n}
      </span>
      {children}
    </h3>
  );
}

export default function KostenRechner() {
  const [users, setUsers] = useState<Record<string, number>>(
    Object.fromEntries(USER_CLASSES.map((c) => [c.key, c.initial])),
  );
  const [pkgKey, setPkgKey] = useState<PackageKey>("m");
  const [outlook, setOutlook] = useState(false);

  const r = useMemo(() => {
    const pkg = PACKAGES[pkgKey];
    const outlookCost = outlook ? OUTLOOK_EUR : 0;
    // Angerechnet werden Einrichtung und (falls gebucht) Outlook, nie mehr als der Paketpreis
    const credit = pkg.price > 0 ? Math.min(SETUP_EUR + outlookCost, pkg.price) : 0;
    const oneTime = SETUP_EUR + outlookCost + pkg.price - credit;
    const monthly = USER_CLASSES.reduce((sum, c) => sum + users[c.key] * c.eurPerMonth, 0);
    const totalUsers = USER_CLASSES.reduce((sum, c) => sum + users[c.key], 0);
    return { pkg, outlookCost, credit, oneTime, monthly, totalUsers, year1: oneTime + monthly * 12 };
  }, [users, pkgKey, outlook]);

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-primary-900/5">
      <div className="flex items-center gap-4 border-b border-gray-100 px-5 py-5 md:px-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-800 text-white shadow-md shadow-primary-800/30">
          <Euro className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Kostenrechner</h2>
          <p className="text-sm text-gray-500 md:text-base">
            Einrichtung, Coaching und monatlicher Verbrauch für Ihr Team
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px]">
        {/* Eingaben */}
        <div className="space-y-10 px-5 py-8 md:px-8">
          <section>
            <StepLabel n={1}>Ihr Team</StepLabel>
            <div className="space-y-6">
              {USER_CLASSES.map((c) => (
                <div key={c.key}>
                  <Slider
                    label={`${c.label} (ca. ${c.eurPerMonth} € / Monat)`}
                    value={users[c.key]}
                    onChange={(v) => setUsers((u) => ({ ...u, [c.key]: v }))}
                    min={0}
                    max={c.max}
                    step={1}
                    unit="Pers."
                  />
                  <p className="mt-1 text-xs text-gray-400">{c.hint}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <StepLabel n={2}>Coaching-Paket</StepLabel>
            <div role="radiogroup" aria-label="Coaching-Paket" className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(Object.keys(PACKAGES) as PackageKey[]).map((key) => {
                const p = PACKAGES[key];
                const active = key === pkgKey;
                return (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setPkgKey(key)}
                    className={`relative flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 text-left transition-colors sm:flex-col sm:items-start sm:justify-start ${
                      active
                        ? "border-primary-600 bg-primary-50"
                        : "border-gray-200 bg-white hover:border-primary-300"
                    }`}
                  >
                    <span>
                      <span className="block text-base font-bold text-gray-900">{p.label}</span>
                      <span className="block text-xs text-gray-500">{p.detail}</span>
                    </span>
                    <span className="text-right sm:text-left">
                      <span className="block text-sm font-semibold tabular-nums text-primary-700">
                        {p.price > 0 ? formatEur(p.price) : "0 €"}
                      </span>
                      {p.price > 0 && (
                        <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-800">
                          100 % Anrechnung
                        </span>
                      )}
                    </span>
                    {active && (
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-white">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <StepLabel n={3}>Add-on</StepLabel>
            <button
              type="button"
              role="switch"
              aria-checked={outlook}
              onClick={() => setOutlook((o) => !o)}
              className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-3 text-left transition-colors ${
                outlook ? "border-primary-600 bg-primary-50" : "border-gray-200 bg-white hover:border-primary-300"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-700 ring-1 ring-gray-200">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-gray-900">Outlook Connector, 500 € einmalig</span>
                <span className="block text-xs text-gray-500">
                  Posteingang, Kalender und Entwürfe direkt in Claude. Mit Paket M oder L voll angerechnet.
                </span>
              </span>
              <span
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
                  outlook ? "bg-primary-600" : "bg-gray-300"
                }`}
                aria-hidden
              >
                <span
                  className={`h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    outlook ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </span>
            </button>
          </section>
        </div>

        {/* Summenkarte */}
        <aside
          aria-live="polite"
          className="flex flex-col gap-6 bg-gradient-to-br from-primary-800 to-primary-950 px-5 py-8 text-white md:px-8"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
            Ihre Kosten, netto
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <p className="text-xs text-primary-100">Monatlich</p>
              <p className="mt-1 text-3xl font-bold tabular-nums md:text-4xl">{formatEur(r.monthly)}</p>
              <p className="mt-1 text-xs text-primary-200">
                Verbrauch für {r.totalUsers} {r.totalUsers === 1 ? "Person" : "Personen"}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-gray-900">
              <p className="text-xs text-gray-500">Einmalig</p>
              <p className="mt-1 text-3xl font-bold tabular-nums text-primary-800 md:text-4xl">
                {formatEur(r.oneTime)}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {r.credit > 0 ? "nach Anrechnung" : "ohne Coaching"}
              </p>
            </div>
          </div>

          <dl className="divide-y divide-white/10 text-sm">
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-primary-100">Einrichtung (Festpreis)</dt>
              <dd className="font-medium tabular-nums">{formatEur(SETUP_EUR)}</dd>
            </div>
            {outlook && (
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-primary-100">Outlook Connector</dt>
                <dd className="font-medium tabular-nums">{formatEur(OUTLOOK_EUR)}</dd>
              </div>
            )}
            {r.pkg.price > 0 && (
              <>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-primary-100">
                    Coaching {r.pkg.label} ({r.pkg.days} Personentage)
                  </dt>
                  <dd className="font-medium tabular-nums">{formatEur(r.pkg.price)}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-green-300">
                    Anrechnung {outlook ? "Einrichtung und Outlook" : "Einrichtung"}
                  </dt>
                  <dd className="font-semibold tabular-nums text-green-300">− {formatEur(r.credit)}</dd>
                </div>
              </>
            )}
            <div className="flex justify-between gap-4 py-2.5 text-base">
              <dt className="font-semibold">Einmalig gesamt</dt>
              <dd className="font-bold tabular-nums">{formatEur(r.oneTime)}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-primary-100">Erstes Jahr inkl. 12 Monate Verbrauch</dt>
              <dd className="font-medium tabular-nums">{formatEur(r.year1)}</dd>
            </div>
          </dl>

          {r.credit > 0 && (
            <p className="flex gap-2.5 rounded-xl bg-green-400/15 px-4 py-3 text-sm text-green-100 ring-1 ring-green-300/30">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-300" aria-hidden />
              <span>
                {formatEur(r.credit)} angerechnet: Mit {r.pkg.label} zahlen Sie für Einrichtung
                {outlook ? ", Outlook Connector" : ""} und {r.pkg.days} Personentage Coaching zusammen{" "}
                {formatEur(r.oneTime)}.
              </span>
            </p>
          )}

          <ContactButton className="w-full justify-center">Angebot anfragen</ContactButton>

          <p className="text-xs leading-relaxed text-primary-200">
            Schätzung, alle Preise zzgl. USt. Die Monatswerte je Nutzerklasse sind Erfahrungswerte.
            Abgerechnet wird nach Verbrauch laut{" "}
            <a href="#modellkosten" className="underline underline-offset-2 hover:text-white">
              Preisliste je 1 Mio. Tokens
            </a>
            , gedeckelt über Limits pro Mitarbeiter.
          </p>
        </aside>
      </div>
    </div>
  );
}
