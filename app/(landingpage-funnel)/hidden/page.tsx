import type { Metadata } from "next";

// Interne Testseite: prüft, ob Änderungen der Crew end-to-end deployed werden.
// noindex → taucht weder in Sitemap noch bei Google auf. Nirgends verlinkt.
export const metadata: Metadata = {
  title: "Hidden – Bluebatch",
  description: "Interne Testseite.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-4 pt-36 pb-24">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Deploy-Test
        </p>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
          Die Crew verwaltet die Website end-to-end.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Diese Seite wurde von Markus gebaut, committet und auf main gepusht.
          Wenn du sie siehst, hat das Deployment funktioniert.
        </p>
        <p className="mt-10 text-sm text-gray-400">Stand: 29.10.2026</p>
      </section>
    </main>
  );
}
