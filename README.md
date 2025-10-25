# Notizblock

Eine kleine, statische Notiz‑App (HTML/CSS/JS). Du kannst direkt in die Seite schreiben, Notizen speichern und löschen — die Daten werden lokal im Browser (localStorage) abgelegt.

## Was ist drin
- `index.html` — Benutzeroberfläche mit Überschrift, Eingabefeld und Liste gespeicherter Notizen.
- `style.css` — einfache Styles für Layout und Buttons.
- `script.js` — Logik: Speichern/Laden in `localStorage`, Rendern der Notizen, Löschen, Strg+Enter shortcut.

## Lokale Nutzung
Einfach die Datei `index.html` im Browser öffnen (Doppelklick). Alternativ kannst du einen einfachen lokalen Server starten, z. B. mit Python:

```powershell
# im Projektverzeichnis
python -m http.server 8000
# dann im Browser öffnen: http://localhost:8000
```

## Funktionen
- Notizen schreiben und auf `Speichern` klicken (oder Strg+Enter) → werden in der Liste angezeigt.
- Notizen bleiben nach einem Seiten‑Reload erhalten (gespeichert in `localStorage`).
- Einzelne Notizen löschen oder alle Notizen entfernen.

## Entwicklung
- Änderungen an `script.js` oder `style.css` sind sofort wirksam nach Reload.
- Vorschlag: `.gitignore` hinzufügen, falls du temporäre Dateien ausschließen willst.

## GitHub
Dieses Repository wurde mit GitHub CLI erstellt und ist erreichbar unter:

https://github.com/CodeTarik/notizblock

## Mitwirken
Wenn du etwas beitragen willst: Fork, Branch erstellen, Änderungen commiten und einen Pull Request stellen.

## Lizenz
Wähle eine Lizenz, falls du das Projekt teilen möchtest (z. B. MIT). Aktuell ist keine Lizenz-Datei enthalten.

---
Viel Spaß beim Notizen sammeln!
