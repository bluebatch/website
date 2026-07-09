"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { tracking, Ga4Event } from "@/lib/tracking";

type FormStatus = "idle" | "sending" | "done" | "error";

interface ContactFormProps {
  /** Meta-CAPI content_name + GA4 event_label, damit wir die Quelle des Leads sehen. */
  contentName?: string;
  className?: string;
  onSuccess?: () => void;
}

// Zentrales Kontaktformular der Seite. Ersetzt das eingebettete HubSpot-Formular
// überall (Modal, Funnels), damit wir die Meta-/UTM-Attribution serverseitig auf
// unsere HubSpot-Properties mappen können. Präsentations-agnostisch: rendert nur
// das Formular selbst und wird sowohl im Modal als auch inline eingesetzt.
export default function ContactForm({
  contentName = "Kontaktanfrage",
  className = "",
  onSuccess,
}: ContactFormProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const mail = email.trim().toLowerCase();

    // Meta-/UTM-Attribution liegt im localStorage (vom MetaAdsTracker), nicht im
    // Cookie — deshalb hier auslesen und mitschicken. Backend mappt sie auf lead_*.
    let attribution: unknown;
    try {
      const raw = window.localStorage.getItem("bb_meta_attribution");
      if (raw) attribution = JSON.parse(raw);
    } catch {
      // kein/ungültiges Storage — Lead läuft trotzdem
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstname.trim(),
          lastname: lastname.trim(),
          phone: phone.trim(),
          email: mail,
          message: message.trim(),
          contentName,
          attribution,
          pageUri: window.location.href,
          pageName: document.title,
        }),
      });
      if (!res.ok) throw new Error("submit failed");

      // Meta-CAPI feuert jetzt serverseitig in /api/contact mit (ein einziger Call).
      // GA4 bleibt clientseitig (braucht window.gtag).
      tracking.ga4(Ga4Event.ContactFormSubmitted, {
        event_category: "engagement",
        event_label: contentName,
      });
      setStatus("done");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className={`rounded-xl bg-green-50 p-6 text-center ${className}`}>
        <CheckCircle2 className="mx-auto h-8 w-8 text-green-600" />
        <p className="mt-2 font-semibold text-gray-900">Danke, wir melden uns.</p>
        <p className="mt-1 text-sm text-gray-500">
          Wir schauen uns Ihr Anliegen an und kommen zeitnah per Mail oder Telefon
          auf Sie zu.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`text-left ${className}`}>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          label="Vorname"
          value={firstname}
          onChange={setFirstname}
          autoComplete="given-name"
          required
        />
        <Field
          label="Nachname"
          value={lastname}
          onChange={setLastname}
          autoComplete="family-name"
          required
        />
      </div>
      <Field
        label="E-Mail"
        type="email"
        value={email}
        onChange={setEmail}
        autoComplete="email"
        required
        className="mt-3"
      />
      <Field
        label="Telefon"
        type="tel"
        value={phone}
        onChange={setPhone}
        autoComplete="tel"
        className="mt-3"
      />
      <label className="mt-3 block">
        <span className="mb-1 block text-sm font-medium text-gray-700">
          Ihre Anfrage
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-primary-800 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Kontakt aufnehmen"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-cta-600"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </label>
  );
}
