# Changelog

## [0.16.3] - 2026-06-01
### Geändert
- CI/Release-Workflows auf aktuelle Action-Majors gehoben (Node-20-Deprecation behoben):
  `actions/checkout@v6`, `actions/setup-node@v6`, `softprops/action-gh-release@v3`; Build-Node
  von 20 (EOL) auf 22 (LTS). Keine funktionale Änderung an der Karte.

## [0.16.2] - 2026-06-01
### Behoben
- **„Open in HACS"-Button korrigiert:** My-Link-Kategorie von `frontend` auf `plugin` geändert.
  Die HACS-Frontend-Route `/hacs/repository?…&category=…` akzeptiert nur `plugin`; mit `frontend`
  führte der Button bei nicht installierten Custom-Repos zu „Repository nicht gefunden".
- README-Bilder werden jetzt **in HACS angezeigt**: Galerie und Screenshots nutzen absolute
  `raw.githubusercontent.com`-URLs statt relativer Pfade. HACS rewritet relative Pfade nur in
  Markdown-Bildern (`![](…)`), nicht in HTML-`<img>` — daher blieben die Bilder vorher leer.

### Geändert
- Mindest-Home-Assistant-Version in `hacs.json` von `2026.1.0` auf `2025.10.0` gesenkt
  (breitere Kompatibilität, analog zu großen HACS-Frontend-Karten wie Mushroom/button-card).

## [0.16.1] - 2026-06-01
### Geändert
- Gebautes `comfoair-card.js` wird jetzt ins Repo committet (nötig, damit HACS das Repo über den
  „Open in HACS"-Button auflösen kann — wie bei vergleichbaren Karten) und weiterhin ans Release
  gehängt. Die Release-Action hält Bundle und Versions-Banner automatisch aktuell. Kein
  funktionaler Unterschied an der Karte selbst.

## [0.16.0] - 2026-06-01
Kompletter Neuaufbau als wartbares TypeScript/Rollup-Projekt (vorher nur ein kompiliertes Bundle).

### Hinzugefügt
- Ein-Klick-Konfiguration: nur climate-Entity wählen, übrige Entities werden automatisch erkannt
  (geräte-basiert mit Namens-Fallback).
- Neues „Bahnen"-Design: Kopf mit Wärmerückgewinnungs-%, beschriftete Temperatur-Chips,
  gekreuzte Luftströme, zentrale Steuer-Pille, farbcodierte Status-Chips.
- **Temperaturbasierte Farbskala** (OKLCH) mit Auto-Modus (spreizt über die aktuellen Werte) und
  festem Modus (12–28 °C).
- **Static ↔ Animated** umschaltbar (Luftströme + rotierende Lüfter). Default: **static**.
- Temperatursteuerung über die Karte (− / +) und Hervorhebung der aktiven Lüfterstufe.
- Klick auf einen Temperatur-/Drehzahl-/Mengen-Wert öffnet den HA-More-Info-Dialog (Verlauf/Historie).
- Eigenes Vorheiz-Entity (`preheat`).
- GitHub-Actions: CI (Typecheck/Tests/Build), HACS-Validierung, Release-on-Tag.

### Geändert
- GUI-Editor auf `ha-form`/`ha-selector` umgestellt (Polymer `paper-*` entfernt).
- `ha-icon-button` auf aktuelle HA-API migriert.

### Behoben
- Defekte Entity-Auswahl im Editor (Auswahl klemmte; nur hardcodierte Defaults sichtbar).
- Crash bei fehlender climate-Entity.
- PreHeat-Icon spiegelte fälschlich das Bypass-Ventil.
- `console.log`-Spam entfernt.
- Reale comfoair2mqtt-Entitynamen als Default; Pfad-Mismatch des Hintergrundbildes beseitigt
  (Hintergrund wird jetzt als SVG gezeichnet, kein externes Bild mehr nötig).

### Kompatibilität
- Abwärtskompatibel: bestehende Karten-Konfigurationen laufen unverändert weiter (gleiche
  Schlüssel); neue Optionen sind optional.
