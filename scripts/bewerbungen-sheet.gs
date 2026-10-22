// Apps-Script-Web-App im Google Sheet "Bewerbungen": nimmt die Bewerbungen von
// bluebatch.io/karriere entgegen (app/api/karriere/route.ts) und hängt jede als
// Zeile an.
//
// Einrichtung: Im Sheet Erweiterungen > Apps Script, diesen Code einfügen und
// SECRET auf den Wert von BEWERBUNGEN_SHEET_SECRET aus Vercel setzen (nie hier
// im Repo, das ist öffentlich). Dann Bereitstellen > Neue Bereitstellung >
// Web-App, Ausführen als: Ich, Zugriff: Jeder, die Autorisierung bis zum Ende
// durchklicken. Antwortet die URL ohne Anmeldung mit 403 und das Dashboard
// zeigt keine Ausführung: eine neue Bereitstellung anlegen statt die alte zu
// bearbeiten, das hat beim ersten Mal geholfen. Die URL auf /exec kommt als
// BEWERBUNGEN_SHEET_URL nach Vercel. Nach Änderungen am Code: Bereitstellungen
// verwalten > Bearbeiten > Version "Neue Version", dann bleibt die URL gleich.

const SECRET = "<BEWERBUNGEN_SHEET_SECRET>";
const HEADERS = ["Eingang", "Vorname", "Nachname", "E-Mail", "Stelle", "Profil-Link", "Warum du zu uns passt", "Seite"];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "invalid_json" });
  }
  if (data.secret !== SECRET) return reply({ ok: false, error: "forbidden" });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    sheet.appendRow([
      new Date(),
      clean(data.firstname),
      clean(data.lastname),
      clean(data.email),
      clean(data.position),
      clean(data.profileUrl),
      clean(data.message),
      clean(data.pageUri),
    ]);
  } finally {
    lock.releaseLock();
  }
  return reply({ ok: true });
}

// Eingaben, die mit = + - @ beginnen, würde Sheets als Formel ausführen
function clean(v) {
  const s = String(v == null ? "" : v).trim().slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Erreichbarkeitstest im Browser, schreibt nichts ins Sheet
function doGet() {
  return reply({ ok: true, hinweis: "Web-App erreichbar" });
}
