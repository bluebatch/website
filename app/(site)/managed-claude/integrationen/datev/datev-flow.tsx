import { ReactNode } from "react";
import { ArrowLeftRight, ArrowUpDown, Server, ShieldCheck } from "lucide-react";
import { ClaudeLogo, DatevLogo } from "@/components/icons/brand-logos";

// Hero-Grafik der DATEV-Seite: was im Kanzleinetz bleibt (DATEV, DATEV MCP,
// Claude Desktop) und was nach außen geht (nur die Anfrage ans Gateway).
// Einmalige Grafik für genau diese Seite, deshalb seiten-lokal.

function Node({
  icon,
  label,
  sublabel,
  highlight = false,
}: {
  icon: ReactNode;
  label: string;
  sublabel: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 items-center gap-3 rounded-2xl border p-3 shadow-sm sm:flex-col sm:gap-2 sm:p-4 sm:text-center ${
        highlight ? "border-primary-600 bg-primary-800 text-white" : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
          highlight ? "bg-white/15 text-white" : "bg-primary-50 text-primary-700"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-bold leading-tight">{label}</span>
        <span className={`block text-xs leading-snug ${highlight ? "text-primary-100" : "text-gray-500"}`}>
          {sublabel}
        </span>
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <span className="flex shrink-0 items-center justify-center text-primary-400" aria-hidden>
      <ArrowUpDown className="h-5 w-5 sm:hidden" />
      <ArrowLeftRight className="hidden h-5 w-5 sm:block" />
    </span>
  );
}

export default function DatevFlow() {
  return (
    <figure className="rounded-3xl bg-white/80 p-5 shadow-xl shadow-primary-900/10 ring-1 ring-gray-900/5 sm:p-6">
      <div className="rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/40 p-3 sm:p-4">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary-700">In Ihrem Kanzleinetz</div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <Node icon={<DatevLogo className="h-6 w-6" />} label="DATEV" sublabel="mit DATEVconnect" />
          <Arrow />
          <Node icon={<Server className="h-5 w-5" />} label="DATEV MCP" sublabel="Dienst auf Ihrem Server" highlight />
          <Arrow />
          <Node icon={<ClaudeLogo className="h-6 w-6" />} label="Claude Desktop" sublabel="am Arbeitsplatz" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-gray-500">
        <ArrowUpDown className="h-5 w-5 text-primary-400" aria-hidden />
        nur die Anfrage an Claude
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </span>
        <span>
          <span className="block text-sm font-bold text-gray-900">Private Claude AI Gateway</span>
          <span className="block text-xs text-gray-500">Claude über AWS Bedrock in Frankfurt, in der EU</span>
        </span>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-500">
        Kein Tunnel, kein fremder Cloud-Dienst, keine Datenkopie.
      </figcaption>
    </figure>
  );
}
