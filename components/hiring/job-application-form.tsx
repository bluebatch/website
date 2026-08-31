"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { FormField, FormSelect, FormTextarea } from "@/components/ui/form-field";
import { applicationOptions } from "@/lib/career-jobs";
import { tracking, Ga4Event } from "@/lib/tracking";

type FormStatus = "idle" | "sending" | "done" | "error";

interface JobApplicationFormProps {
  /** vorausgewählte Stelle (wird vom Klick auf eine Stellenanzeige gesetzt) */
  position: string;
  onPositionChange: (position: string) => void;
  className?: string;
}

// Bewerbungsformular. Bewusst der einzige Bewerbungsweg: keine Telefonnummer,
// keine Terminbuchung. Läuft über /api/karriere auf ein eigenes HubSpot-Formular,
// damit Bewerbungen im CRM sauber von Sales-Leads getrennt bleiben.
export default function JobApplicationForm({
  position,
  onPositionChange,
  className = "",
}: JobApplicationFormProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/karriere", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstname.trim(),
          lastname: lastname.trim(),
          email: email.trim().toLowerCase(),
          position,
          profileUrl: profileUrl.trim(),
          message: message.trim(),
          pageUri: window.location.href,
          pageName: document.title,
        }),
      });
      if (!res.ok) throw new Error("submit failed");

      tracking.ga4(Ga4Event.JobApplicationSubmitted, {
        event_category: "engagement",
        event_label: position,
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className={`rounded-xl bg-green-50 p-6 text-center ${className}`}>
        <CheckCircle2 className="mx-auto h-8 w-8 text-green-600" />
        <p className="mt-2 font-semibold text-gray-900">
          Danke für deine Bewerbung.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Wir schauen sie uns an und melden uns innerhalb einer Woche per Mail
          bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`text-left ${className}`}>
      <div className="grid gap-3 sm:grid-cols-2">
        <FormField
          label="Vorname"
          value={firstname}
          onChange={setFirstname}
          autoComplete="given-name"
          required
        />
        <FormField
          label="Nachname"
          value={lastname}
          onChange={setLastname}
          autoComplete="family-name"
          required
        />
      </div>
      <FormField
        label="E-Mail"
        type="email"
        value={email}
        onChange={setEmail}
        autoComplete="email"
        required
        className="mt-3"
      />
      <FormSelect
        label="Stelle"
        value={position}
        onChange={onPositionChange}
        options={applicationOptions}
        required
        className="mt-3"
      />
      <FormField
        label="Profil-Link"
        type="url"
        value={profileUrl}
        onChange={setProfileUrl}
        placeholder="https://www.linkedin.com/in/..."
        hint="LinkedIn, GitHub oder Portfolio. Einen Lebenslauf brauchen wir im ersten Schritt nicht."
        className="mt-3"
      />
      <FormTextarea
        label="Warum du zu uns passt"
        value={message}
        onChange={setMessage}
        rows={5}
        placeholder="Woran hast du zuletzt gearbeitet, und was reizt dich an der Stelle?"
        className="mt-3"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-full bg-primary-800 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700 disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Bewerbung abschicken"}
      </button>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Da ist etwas schiefgelaufen. Bitte versuche es erneut.
        </p>
      )}
    </form>
  );
}
