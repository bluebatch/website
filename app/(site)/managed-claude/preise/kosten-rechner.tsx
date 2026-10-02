"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import {
  CalculatorShell,
  ResultMetric,
  Slider,
  TierSelector,
  formatEur,
  type TierOption,
} from "@/app/(site)/branchen/grosshandel/roi-rechner/shared";

// Kostenrechner Private Claude AI Gateway (Preise laut Claude-AI-Gateway-Deck):
// Einrichtung 1.500 € fix, Token-Verbrauch nach Nutzerklasse, Coaching-Pakete
// mit Anrechnung der Einrichtung (S 50 %, L 100 %). Alle Werte zzgl. USt.

const SETUP_EUR = 1500;
const OUTLOOK_EUR = 500;

const USER_CLASSES = [
  { key: "normal", label: "Normale Nutzer", hint: "gelegentlich Chat und Entwürfe", eurPerMonth: 40, initial: 10 },
  { key: "heavy", label: "Heavy User", hint: "täglich, viele Dokumente", eurPerMonth: 100, initial: 3 },
  { key: "expert", label: "Experten-Nutzer", hint: "Opus, lange Analysen, Agenten", eurPerMonth: 300, initial: 1 },
] as const;

const PACKAGES = {
  none: { price: 0, credit: 0, label: "Ohne Coaching" },
  s: { price: 3000, credit: 0.5, label: "Paket S" },
  l: { price: 8000, credit: 1, label: "Paket L" },
} as const;

type PackageKey = keyof typeof PACKAGES;

const PACKAGE_OPTIONS: TierOption[] = [
  { key: "none", label: "Ohne", description: "Nur Einrichtung" },
  { key: "s", label: "Paket S", description: "3 PT, 3.000 €, 50 % Anrechnung" },
  { key: "l", label: "Paket L", description: "8 PT, 8.000 €, 100 % Anrechnung" },
];

export default function KostenRechner() {
  const [users, setUsers] = useState<Record<string, number>>(
    Object.fromEntries(USER_CLASSES.map((c) => [c.key, c.initial])),
  );
  const [pkgKey, setPkgKey] = useState<PackageKey>("s");
  const [outlook, setOutlook] = useState(false);

  const r = useMemo(() => {
    const pkg = PACKAGES[pkgKey];
    const monthly = USER_CLASSES.reduce((sum, c) => sum + users[c.key] * c.eurPerMonth, 0);
    const credit = SETUP_EUR * pkg.credit;
    // Outlook Connector ist in Paket S und L inklusive, sonst 500 € einmalig
    const outlookCost = pkgKey === "none" && outlook ? OUTLOOK_EUR : 0;
    const oneTime = SETUP_EUR + pkg.price - credit + outlookCost;
    const totalUsers = USER_CLASSES.reduce((sum, c) => sum + users[c.key], 0);
    return { pkg, monthly, credit, outlookCost, oneTime, totalUsers, year1: oneTime + monthly * 12 };
  }, [users, pkgKey, outlook]);

  return (
    <CalculatorShell
      icon={<Calculator className="w-6 h-6 text-white" />}
      label="Kostenrechner"
      description="Einrichtung, Verbrauch und Coaching auf einen Blick"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Ihr Team
          </h3>
          {USER_CLASSES.map((c) => (
            <div key={c.key}>
              <Slider
                label={`${c.label} (~${c.eurPerMonth} € / Monat)`}
                value={users[c.key]}
                onChange={(v) => setUsers((u) => ({ ...u, [c.key]: v }))}
                min={0}
                max={c.key === "normal" ? 200 : 50}
                step={1}
                unit="Personen"
              />
              <p className="text-xs text-gray-400 mt-1">{c.hint}</p>
            </div>
          ))}
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-2">
            Coaching-Paket
          </h3>
          <TierSelector
            options={PACKAGE_OPTIONS}
            activeKey={pkgKey}
            onSelect={(k) => setPkgKey(k as PackageKey)}
          />
          <label
            className={`flex items-center justify-between gap-4 rounded-lg border px-4 py-3 ${
              pkgKey === "none"
                ? "border-gray-200 bg-white cursor-pointer"
                : "border-gray-100 bg-gray-100 text-gray-400"
            }`}
          >
            <span>
              <span className="block text-sm font-semibold">Outlook Connector</span>
              <span className="block text-xs text-gray-500">
                {pkgKey === "none"
                  ? "500 € einmalig, Grundlage für den Mail-Agenten"
                  : "In Paket S und L inklusive"}
              </span>
            </span>
            <input
              type="checkbox"
              className="h-5 w-5 accent-primary-600"
              checked={pkgKey !== "none" || outlook}
              disabled={pkgKey !== "none"}
              onChange={(e) => setOutlook(e.target.checked)}
            />
          </label>
        </div>

        <div className="rounded-2xl border border-primary-200 bg-white p-6 space-y-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Ihre Kosten
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <ResultMetric
              label="Monatlich (Tokens)"
              value={formatEur(r.monthly)}
              sub={`${r.totalUsers} Nutzer, keine Lizenz pro Kopf`}
              variant="highlight"
            />
            <ResultMetric
              label="Einmalig"
              value={formatEur(r.oneTime)}
              sub="Einrichtung, Coaching und Add-ons, nach Anrechnung"
            />
            <ResultMetric
              label="Erstes Jahr gesamt"
              value={formatEur(r.year1)}
              sub="Einmalig plus 12 Monate Verbrauch"
            />
            <ResultMetric
              label="Anrechnung Einrichtung"
              value={r.credit > 0 ? `- ${formatEur(r.credit)}` : formatEur(0)}
              sub={r.pkg.label}
              variant={r.credit > 0 ? "success" : "default"}
            />
          </div>
          <dl className="text-sm divide-y divide-gray-100 border-t border-gray-100">
            <div className="flex justify-between py-2">
              <dt className="text-gray-500">Einrichtung (Festpreis)</dt>
              <dd className="font-medium tabular-nums">{formatEur(SETUP_EUR)}</dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-gray-500">{r.pkg.label}</dt>
              <dd className="font-medium tabular-nums">{formatEur(r.pkg.price)}</dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-gray-500">Anrechnung</dt>
              <dd className="font-medium tabular-nums text-green-700">
                {r.credit > 0 ? `- ${formatEur(r.credit)}` : formatEur(0)}
              </dd>
            </div>
            {(pkgKey !== "none" || outlook) && (
              <div className="flex justify-between py-2">
                <dt className="text-gray-500">Outlook Connector</dt>
                <dd className="font-medium tabular-nums">
                  {pkgKey !== "none" ? "inklusive" : formatEur(r.outlookCost)}
                </dd>
              </div>
            )}
          </dl>
          <p className="text-xs text-gray-400">
            Schätzung, alle Preise zzgl. USt. Die Token-Werte je Nutzerklasse
            sind Erfahrungswerte. Abgerechnet wird nach Verbrauch laut{" "}
            <a href="#modellkosten" className="underline hover:text-primary-600">
              Preisliste je 1 Mio. Tokens
            </a>
            , gedeckelt über Limits pro Mitarbeiter.
          </p>
          <ContactButton className="w-full justify-center">
            Angebot mit echten Fallzahlen anfragen
          </ContactButton>
        </div>
      </div>
    </CalculatorShell>
  );
}
