# Meta / Facebook Tracking — Architektur, Flows & FAQ

Meta-Tracking der Website: **Browser-Pixel + serverseitige Conversions API (CAPI)**,
beide über eine gemeinsame `eventId` dedupliziert.

---

## 1. Architektur (Code-Überblick)

```
                                  BROWSER (Next.js Client)
 ┌───────────────────────────────────────────────────────────────────────────┐
 │                                                                             │
 │  app/layout.tsx                                                             │
 │    ├── <MetaPixel />            components/marketing/meta-pixel.tsx          │
 │    │     • lädt fbevents.js  (nur bei Marketing-Consent)                    │
 │    │     • fbq("init", PIXEL_ID) + fbq("track","PageView")                  │
 │    │     • setzt _fbp / _fbc Cookies                                        │
 │    │                                                                        │
 │    └── <MetaAdsTracker />       components/marketing/meta-ads-tracker.tsx    │
 │          • liest fbclid + utm_* aus URL                                     │
 │          • baut _fbc = fb.1.{ts}.{fbclid}                                   │
 │          • speichert Attribution → localStorage (bb_meta_attribution, 7d)   │
 │          • sendBeacon → /api/fb-events  (serverseitiger PageView)           │
 │                                                                             │
 │  components/contact/contact-modal.tsx → trackConversion()                   │
 │          • fbq("track","Lead", …, {eventID})        ───┐  geteilte          │
 │          • fetch /api/fb-events  { eventId, … }     ───┤  eventId            │
 │                                                        │                    │
 └────────────────────────────────────────────────────────┼───────────────────┘
              │ (1) Pixel direkt                            │ (2) zum eigenen Server
              ▼                                             ▼
   ┌────────────────────┐                  ┌──────────────────────────────────────┐
   │  connect.facebook  │                  │  SERVER  app/api/fb-events/route.ts   │
   │      .net          │                  │  • SHA-256 Hash von em/fn/ln          │
   │  (Browser→Meta)    │                  │  • + client_ip, user_agent, fbc, fbp  │
   └─────────┬──────────┘                  │  • POST graph.facebook.com/v19.0      │
             │                             └───────────────────┬──────────────────┘
             │                                                 │
             ▼                                                 ▼
   ╔═══════════════════════════════════════════════════════════════════════════╗
   ║                       META  GRAPH API  /  EVENTS MANAGER                    ║
   ║         Dedup über eventId  (Pixel eventID  ==  CAPI event_id)             ║
   ╚═══════════════════════════════════════════════════════════════════════════╝
```

**Warum zwei Wege:** Der Browser-Pixel wird von Adblockern, iOS-ITP und Cookie-Verlust
geschluckt. CAPI läuft serverseitig und ist robuster. Gemeinsame `eventId` → Meta führt
beide zu **einem** Event zusammen, keine Doppelzählung.

---

## 2. User-Flow A — PageView (Besucher aus Meta-Anzeige)

```
 User klickt Facebook/Instagram-Ad
        │   URL: …/landingpage?fbclid=ABC123&utm_source=facebook
        ▼
 ┌──────────────────────────────────────────────┐
 │ Seite lädt → <MetaAdsTracker> useEffect       │
 │   1. isMetaTraffic(params)?  → ja (fbclid)    │
 │   2. fbc = fb.1.{ts}.ABC123                    │
 │   3. Attribution → localStorage (TTL 7 Tage)  │
 │   4. requestIdleCallback → sendPageView()     │
 └───────────────────┬──────────────────────────┘
                     │ navigator.sendBeacon (kein Block, kein CORS-Prompt)
                     ▼
        POST /api/fb-events
        { eventId, eventName:"PageView", eventSourceUrl, fbc }
                     │
                     ▼
        route.ts → graph.facebook.com/v19.0/{PIXEL_ID}/events
        user_data: { client_ip, client_user_agent, fbc }
                     │
                     ▼
                 Meta  →  PageView (action_source: website)

 Parallel & unabhängig (nur bei Marketing-Consent):
 ┌──────────────────────────────────────────────┐
 │ <MetaPixel> → fbq("track","PageView")         │  ──▶ Pixel-PageView (ohne eventID)
 └──────────────────────────────────────────────┘

 ⚠ Pixel-PageView und CAPI-PageView sind NICHT gegeneinander dedupliziert
   (unterschiedliche/fehlende eventId). Siehe FAQ.
```

---

## 3. User-Flow B — Conversion „Lead" (Formular abgeschickt)

```
 User füllt Kontaktformular aus  →  Submit
        │   (email, firstName, lastName)
        ▼
 ┌──────────────────────────────────────────────────────────────┐
 │ contact-modal.tsx  →  trackConversion({ metaEventName:"Lead" })│
 │   eventId = crypto.randomUUID()   ← EINE id für beide Wege      │
 └───────────────┬───────────────────────────────┬──────────────┘
                 │                                │
   (1) Browser-Pixel                  (2) Server-CAPI (fetch)
                 │                                │
                 ▼                                ▼
   fbq("track","Lead",                POST /api/fb-events
       {content_name},                { eventId, eventName:"Lead",
       {eventID: eventId})              email, firstName, lastName,
                 │                       fbc:_fbc, fbp:_fbp, eventSourceUrl }
                 │                                │
                 │                                ▼
                 │                   route.ts hasht PII (SHA-256):
                 │                     em=[sha256(email)]
                 │                     fn=[sha256(firstName)]
                 │                     ln=[sha256(lastName)]
                 │                   + client_ip, user_agent, fbc, fbp
                 │                                │
                 ▼                                ▼
        connect.facebook.net            graph.facebook.com/v19.0
                 │                                │
                 └──────────────┬─────────────────┘
                                ▼
            ╔════════════════════════════════════════╗
            ║  Meta dedupliziert über eventId         ║
            ║  Pixel.eventID == CAPI.event_id         ║
            ║        →  EIN „Lead"-Event              ║
            ╚════════════════════════════════════════╝

 Gating: Beide Wege feuern nur wenn  typeof window.fbq === "function"
         (= Marketing-Consent wurde gegeben).
```

`Contact` läuft identisch wie `Lead`, nur mit `metaEventName:"Contact"` (Trigger:
Kontakt-Kanal / Meeting statt Formular).

---

## 4. Bausteine

| Datei | Rolle |
|-------|-------|
| `components/marketing/meta-pixel.tsx` | Lädt `fbevents.js`, `fbq("init")` + `PageView`. **Nur bei Marketing-Consent.** |
| `components/marketing/meta-ads-tracker.tsx` | Liest `fbclid`/UTM, baut `_fbc`, Attribution (localStorage, 7d TTL), serverseitiger PageView. |
| `components/contact/contact-modal.tsx` → `trackConversion()` | `Contact`/`Lead` an Pixel **und** CAPI mit geteilter `eventId`. |
| `app/api/fb-events/route.ts` | CAPI-Endpoint: PII-Hashing (SHA-256) + IP/UA/`fbc`/`fbp` → Graph API. |
| `app/layout.tsx` | Mountet `<MetaPixel />` + `<MetaAdsTracker />` global. |

---

## 5. Konfiguration (ENV)

In der Hosting-Umgebung setzen (server-only, **nicht** im Client-Bundle):

| Variable | Pflicht | Zweck |
|----------|---------|-------|
| `META_PIXEL_ID` | ja | Pixel-/Dataset-ID für die CAPI-Calls |
| `META_CAPI_ACCESS_TOKEN` | ja | System-User-Token aus dem Events Manager |
| `META_CAPI_TEST_EVENT_CODE` | nein | Nur Test — Events landen im „Test Events"-Tab |

> Die **Client-Pixel-ID** ist zusätzlich in `meta-pixel.tsx` **hardcodiert**
> (`1624299748827172`). Bei Pixel-Wechsel **beide** Stellen ändern: Konstante in
> `meta-pixel.tsx` **und** `META_PIXEL_ID` in der Server-ENV. Graph-Version: `v19.0` (fest).

---

## 6. Events-Übersicht

| Event | Pixel | CAPI | Dedup | Trigger |
|-------|:-----:|:----:|:-----:|---------|
| `PageView` | ✅ (bei Consent) | ✅ (nur Meta-Traffic) | ❌ getrennte IDs | Seitenaufruf |
| `Contact` | ✅ | ✅ | ✅ via `eventId` | Kontakt-Modal (Channel/Meeting) |
| `Lead` | ✅ | ✅ | ✅ via `eventId` | Formular abgeschickt |

---

## 7. Privacy / Consent

- **Pixel** lädt erst bei `cookie_consent.marketing === true` (localStorage), reagiert
  live auf `bluebatch:consent-update`.
- **Conversion-Events** sind über `typeof window.fbq === "function"` gegated (= Consent).
- **PII** geht an Meta nur **SHA-256-gehasht** (`em`, `fn`, `ln`); Klartext nur an den
  eigenen Server.

---

## 8. Testen

1. `META_CAPI_TEST_EVENT_CODE` setzen (Events Manager → Test Events).
2. Website öffnen, Consent geben, Lead-Formular auslösen.
3. Events Manager → **Test Events**: Pixel- + Server-Event mit gleicher `eventId`
   erscheinen unter „Deduplizierte Events".
4. Endpoint-Smoke-Test:
   ```bash
   curl -s localhost:3000/api/fb-events -H 'Content-Type: application/json' \
     -d '{"eventId":"test-123","eventName":"Lead","email":"a@b.de","eventSourceUrl":"https://x"}'
   # {"ok":true,…} = ok | 500 = ENV fehlt | 502 = Graph-Fehler (Token/Pixel prüfen)
   ```
5. Nach dem Test `META_CAPI_TEST_EVENT_CODE` wieder **entfernen**.

---

## 9. FAQ

**Was ist die `eventId`?** Pro Event generierte UUID, identisch an Pixel (`eventID`) und
CAPI (`event_id`). Daran erkennt Meta, dass es **ein** Event ist → keine Doppelzählung.

**Doppelte PageViews?** Möglich: Pixel-`PageView` (ohne eventID) und CAPI-`PageView` aus
`meta-ads-tracker.tsx` (eigene eventId, nur Meta-Traffic) sind **nicht** dedupliziert.
Conversions (`Contact`/`Lead`) dagegen sauber.

**CAPI-PageView ohne Consent?** Ja — `meta-ads-tracker.tsx` feuert den serverseitigen
PageView für Meta-Traffic unabhängig vom Marketing-Consent (prüft nur Attribution). Wenn
unerwünscht: dort zusätzlich auf `hasMarketingConsent()` gaten.

**Pixel wechseln?** Konstante in `meta-pixel.tsx` **und** `META_PIXEL_ID`-ENV ändern.

**500 / 502 vom Endpoint?** 500 = `META_PIXEL_ID`/`META_CAPI_ACCESS_TOKEN` fehlt.
502 = Graph API hat abgelehnt (Token abgelaufen, Pixel-ID falsch).
