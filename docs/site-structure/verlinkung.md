# Verlinkungslogik

Grundprinzip: **Content sammelt Traffic, reicht ihn an Hubs und Money Pages
weiter, Money Pages konvertieren.** Links fließen nach oben zur Conversion.
Money Pages verlinken selbst nur sparsam nach außen.

## Von wo nach wo

```
Blogartikel ─────────────┬──> passende Content Page (Agent, Workflow, Thema)
  (kontextuell, 2-4 Links)└──> passendes Tool-Porträt (weitere-tools/…)

Tool-Porträt ────────────┬──> Claude-Angebot (App, API) bzw. n8n-Hub
  (weitere-tools/, CONTENT)└──> Branchen-Content-Pages mit Tool-Bezug

Tool Page ([TOOL], z. B. ───> contact (CTA nach der Nutzung). Wird von
  roi-rechner)                Content- und Money-Pages der eigenen Branche
                              verlinkt, verlinkt selbst kaum nach außen

Content Page ────────────┬──> ihre Money-Schwester (gleiches Thema)
  (in Unter-Hubs)        ├──> eigener Unter-Hub (hoch)
                         ├──> 1-2 verwandte Content Pages (quer)
                         └──> contact (CTA); im Großhandel zusätzlich
                              branchen/grosshandel/roi-rechner

Money Page ──────────────┬──> contact (CTA, primär)
                         └──> höchstens 1 Link zurück zur Content-Schwester

Unter-Hub ───────────────┬──> eigene Money und Content Pages (runter)
                         └──> contact (CTA)

Branchen-Hub ────────────┬──> seine Unter-Hubs (runter)
                         └──> contact (CTA)

Standort-Seite ──────────┬──> Startseite (Managed-Claude-Hub)
                         └──> mit-euch-wachsen (Trust)

Funnel-Landingpage ──────> nur eigenes Formular bzw. Kontakt, keine Ausgänge
```

## Regeln

1. Jede Content Page verlinkt mindestens einmal auf eine Money Page oder
   ihren Hub, bevorzugt auf die Money-Schwester zum selben Thema.
2. Blogartikel verlinken auf „ihre“ Branche: Großhandel-Artikel in die
   Großhandel-Welt, Steuerberater-Artikel in die Steuerberater-Welt,
   Cowork- und Private-AI-Artikel in die passenden Unter-Hubs.
3. Content Pages verlinken quer nur innerhalb der eigenen Branche, nicht
   vom Großhandel zu den Steuerberatern und umgekehrt.
4. Hubs verlinken alle Kinder, Kinder verlinken zurück auf den Hub
   (Breadcrumb-Logik).
5. Funnel-Landingpages bleiben Sackgassen: kein Navigationseintrag, keine
   ausgehenden Links, noindex Pflicht. Technisch durchgesetzt über
   `app/(landingpage-funnel)/layout.tsx` und
   `tests/technical/funnel-isolation.spec.ts`.
6. Keine Seite liegt tiefer als vier Klicks unter der Startseite
   (`tests/seo/link-depth.spec.ts`). Wird eine Seite zu tief, fehlt ein
   Link von ihrem Hub oder einer Nachbarseite.
7. Interne Links laufen über `InternalLink`, damit sie auf die kanonische
   Folder-URL zeigen.
