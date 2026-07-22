"use client";

import { useState } from "react";

// Transparente Annahmen. Bewusst konservativ gehalten.
const WORKDAYS_PER_MONTH = 21;
const SAVINGS_SHARE = 0.6; // Anteil der Bearbeitungszeit, den der Agent pro Mail übernimmt

function eur(n: number): string {
  return Math.round(n).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-primary-800">
          {value.toLocaleString("de-DE")}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-primary-700"
        aria-label={label}
      />
    </div>
  );
}

export default function CostCalculator() {
  const [rate, setRate] = useState(60);
  const [mailboxes, setMailboxes] = useState(5);
  const [mailsPerDay, setMailsPerDay] = useState(40);
  const [minutesPerMail, setMinutesPerMail] = useState(4);

  const mailsPerMonth = mailboxes * mailsPerDay * WORKDAYS_PER_MONTH;
  const savedHours = (mailsPerMonth * minutesPerMail * SAVINGS_SHARE) / 60;
  const savedMonth = savedHours * rate;
  const savedYear = savedMonth * 12;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <SliderRow
          label="Interner Stundensatz"
          value={rate}
          min={30}
          max={150}
          step={5}
          unit="€"
          onChange={setRate}
        />
        <SliderRow
          label="Anzahl Postfächer"
          value={mailboxes}
          min={1}
          max={30}
          step={1}
          onChange={setMailboxes}
        />
        <SliderRow
          label="Mails pro Postfach und Tag"
          value={mailsPerDay}
          min={5}
          max={120}
          step={5}
          onChange={setMailsPerDay}
        />
        <SliderRow
          label="Minuten pro Mail heute"
          value={minutesPerMail}
          min={1}
          max={10}
          step={1}
          unit="Min"
          onChange={setMinutesPerMail}
        />
        <p className="text-xs text-gray-400">
          Annahme: {WORKDAYS_PER_MONTH} Arbeitstage pro Monat, der Agent übernimmt
          rund {Math.round(SAVINGS_SHARE * 100)} % der Bearbeitungszeit pro Mail
          (Vorsortieren, Kontext, Entwurf). Die Freigabe bleibt bei Ihrem Team.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-6 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 text-white">
        <div>
          <p className="text-sm text-primary-200">Ihr E-Mail-Volumen</p>
          <p className="text-2xl font-bold">
            {mailsPerMonth.toLocaleString("de-DE")} Mails / Monat
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-primary-200">Gesparte Zeit</p>
            <p className="text-2xl font-bold text-secondary-400">
              {Math.round(savedHours).toLocaleString("de-DE")} Std / Monat
            </p>
          </div>
          <div>
            <p className="text-sm text-primary-200">Ersparnis</p>
            <p className="text-2xl font-bold text-secondary-400">
              {eur(savedMonth)} / Monat
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white/10 p-4">
          <p className="text-sm text-primary-200">Hochgerechnet aufs Jahr</p>
          <p className="text-3xl font-extrabold">{eur(savedYear)}</p>
        </div>
      </div>
    </div>
  );
}
