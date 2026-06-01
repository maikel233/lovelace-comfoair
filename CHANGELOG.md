# Changelog

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
