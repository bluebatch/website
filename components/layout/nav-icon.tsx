import {
  Bot,
  Briefcase,
  Calculator,
  Euro,
  Factory,
  FolderKanban,
  GraduationCap,
  KeyRound,
  LayoutDashboard,
  LayoutGrid,
  MessageCircle,
  MessagesSquare,
  Phone,
  Rocket,
  Route,
  Scale,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  BraveLogo,
  ClaudeLogo,
  DatevLogo,
  MakeLogo,
  MicrosoftLogo,
  N8nLogo,
} from "@/components/icons/brand-logos";

// Farbige Icon-Kacheln für das Mega-Menü. Generische Icons (lucide) auf
// getönter Kachel, Marken (Claude, DATEV, Microsoft …) im Original-Logo auf
// weißer Kachel. Klassen stehen ausgeschrieben, damit Tailwind sie findet.

type GlyphSpec = { glyph: LucideIcon; tile: string };
type LogoSpec = { logo: (p: { className?: string }) => React.ReactElement };

const icons = {
  // Managed Claude: So arbeiten wir
  route: { glyph: Route, tile: "bg-sky-50 text-sky-600 ring-sky-100" },
  rocket: { glyph: Rocket, tile: "bg-violet-50 text-violet-600 ring-violet-100" },
  coaching: { glyph: GraduationCap, tile: "bg-amber-50 text-amber-600 ring-amber-100" },
  euro: { glyph: Euro, tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  // Managed Claude: Angebot
  claude: { logo: ClaudeLogo },
  dashboard: { glyph: LayoutDashboard, tile: "bg-indigo-50 text-indigo-600 ring-indigo-100" },
  key: { glyph: KeyRound, tile: "bg-cyan-50 text-cyan-700 ring-cyan-100" },
  bot: { glyph: Bot, tile: "bg-rose-50 text-rose-600 ring-rose-100" },
  // Marken
  datev: { logo: DatevLogo },
  microsoft: { logo: MicrosoftLogo },
  brave: { logo: BraveLogo },
  n8n: { logo: N8nLogo },
  make: { logo: MakeLogo },
  grid: { glyph: LayoutGrid, tile: "bg-gray-100 text-gray-600 ring-gray-200" },
  // Branchen
  factory: { glyph: Factory, tile: "bg-blue-50 text-blue-600 ring-blue-100" },
  calculator: { glyph: Calculator, tile: "bg-teal-50 text-teal-600 ring-teal-100" },
  scale: { glyph: Scale, tile: "bg-indigo-50 text-indigo-600 ring-indigo-100" },
  shield: { glyph: ShieldCheck, tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  assistant: { glyph: MessagesSquare, tile: "bg-sky-50 text-sky-600 ring-sky-100" },
  chat: { glyph: MessageCircle, tile: "bg-violet-50 text-violet-600 ring-violet-100" },
  workflow: { glyph: Workflow, tile: "bg-amber-50 text-amber-600 ring-amber-100" },
  roi: { glyph: TrendingUp, tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  organisation: { glyph: FolderKanban, tile: "bg-slate-100 text-slate-600 ring-slate-200" },
  // Über uns
  grow: { glyph: Sprout, tile: "bg-emerald-50 text-emerald-600 ring-emerald-100" },
  team: { glyph: Users, tile: "bg-sky-50 text-sky-600 ring-sky-100" },
  career: { glyph: Briefcase, tile: "bg-violet-50 text-violet-600 ring-violet-100" },
  phone: { glyph: Phone, tile: "bg-amber-50 text-amber-600 ring-amber-100" },
} satisfies Record<string, GlyphSpec | LogoSpec>;

export type NavIconName = keyof typeof icons;

const sizes = {
  sm: { tile: "w-7 h-7 rounded-md", glyph: "w-4 h-4", logo: "w-4 h-4" },
  md: { tile: "w-9 h-9 rounded-lg", glyph: "w-[18px] h-[18px]", logo: "w-5 h-5" },
};

export default function NavIcon({
  name,
  size = "md",
}: {
  name: NavIconName;
  size?: keyof typeof sizes;
}) {
  const spec: GlyphSpec | LogoSpec = icons[name];
  const s = sizes[size];
  const base = `inline-flex shrink-0 items-center justify-center ring-1 ring-inset transition-transform duration-200 group-hover:scale-105 ${s.tile}`;

  if ("logo" in spec) {
    const Logo = spec.logo;
    return (
      <span className={`${base} bg-white ring-gray-200 shadow-sm`} aria-hidden>
        <Logo className={s.logo} />
      </span>
    );
  }
  const Glyph = spec.glyph;
  return (
    <span className={`${base} ${spec.tile}`} aria-hidden>
      <Glyph className={s.glyph} strokeWidth={2} />
    </span>
  );
}
