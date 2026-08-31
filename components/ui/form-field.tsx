"use client";

import { ReactNode } from "react";

// Gemeinsame Formular-Felder. Kontaktformular und Bewerbungsformular teilen sich
// dieselbe Optik, deshalb liegt das Markup hier statt zweimal lokal in den Formularen.

const controlClasses =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100";

interface LabelProps {
  label: string;
  required?: boolean;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}

function FieldShell({
  label,
  required = false,
  hint,
  className = "",
  children,
}: LabelProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-cta-600"> *</span>}
      </span>
      {children}
      {hint && <span className="mt-1 block text-xs text-gray-500">{hint}</span>}
    </label>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  hint?: ReactNode;
  className?: string;
}

export function FormField({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
  required = false,
  hint,
  className = "",
}: FormFieldProps) {
  return (
    <FieldShell
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className={controlClasses}
      />
    </FieldShell>
  );
}

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  hint?: ReactNode;
  className?: string;
}

export function FormTextarea({
  label,
  value,
  onChange,
  rows = 4,
  placeholder,
  required = false,
  hint,
  className = "",
}: FormTextareaProps) {
  return (
    <FieldShell
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`resize-y ${controlClasses}`}
      />
    </FieldShell>
  );
}

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  hint?: ReactNode;
  className?: string;
}

export function FormSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  hint,
  className = "",
}: FormSelectProps) {
  return (
    <FieldShell
      label={label}
      required={required}
      hint={hint}
      className={className}
    >
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`appearance-none bg-white ${controlClasses}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
