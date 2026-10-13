import { ReactNode } from "react";
import { Lock } from "lucide-react";

// Browser-Fenster als Rahmen für Mock-Screenshots (Portal, Web-Apps).
// Inhalt wird als children übergeben, z.B. <PortalMock>.

interface BrowserFrameProps {
  children: ReactNode;
  /** Adresse in der URL-Leiste, ohne https:// */
  url?: string;
  className?: string;
  /** Leicht gekippt mit kräftigerem Schatten, für Heroes. */
  tilt?: boolean;
}

export default function BrowserFrame({
  children,
  url,
  className = "",
  tilt = false,
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white ring-1 ring-gray-900/10 ${
        tilt
          ? "shadow-[0_30px_80px_-20px_rgba(0,33,74,0.45)] lg:[transform:perspective(2000px)_rotateY(-6deg)_rotateX(2deg)]"
          : "shadow-2xl shadow-primary-900/15"
      } ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100/80 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="mx-auto flex min-w-0 max-w-sm flex-1 items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-gray-500 ring-1 ring-gray-200">
            <Lock className="h-3 w-3 shrink-0 text-gray-400" aria-hidden />
            <span className="truncate">{url}</span>
          </div>
        )}
        <div className="w-10" aria-hidden />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
