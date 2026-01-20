# Noten- & Abschlussrechner für die Sekundarstufe I (Stadtteilschulen in Hamburg)

Webbasiertes Tool zur Berechnung des Notendurchschnitts und einer Abschlussprognose
(ESA, MSA, Sek II) für die Sekundarstufe I (Stadtteilschulen) in Hamburg.

## Anwendungskontext

Dieses Repository enthält eine statische Webanwendung (`HTML/JS/CSS`), mit der
Schülerinnen und Schüler ihre E-/G-Noten erfassen können. Das Tool läuft vollständig
lokal im Browser (Client-Side) und überträgt keine Daten an externe Server.

<div align="center">

## 🚀 DIREKT NUTZEN 🚀

### **[➡️ Programm direkt auf GitHub Pages nutzen ⬅️](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/)**

[![GitHub](https://img.shields.io/badge/GitHub-alexander--henkes-blue?logo=github)](https://github.com/alexander-henkes)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Falexander-henkes.github.io%2Fnoten-und-abschlussrechner-sek-i-hamburg%2F)](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/)
[![Release](https://img.shields.io/github/v/release/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg?color=success)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/releases/)
[![Release Date](https://img.shields.io/github/release-date/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/releases)
[![Code Size](https://img.shields.io/github/languages/code-size/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)
[![Issues](https://img.shields.io/github/issues-raw/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/issues/)
[![Fehler melden](https://img.shields.io/badge/Fehler%20melden%20-Mail%20senden-red?logo=maildotru)](mailto:github@alexander-henkes.8shield.net)

</div>

---

### Funktionen

- **Abschlusswahl**: ESA, MSA oder Versetzung in die Sekundarstufe II.
- **Noteneingabe**: Fächerliste mit Pflichtfächern (D/M/E) und frei ergänzbaren Fächern.
- **Notenskala**: E1–E4 (erhöhtes Niveau) und G2–G6 (grundlgendes Nivveau).
- **Notendurchschnitt**: Berechnung und Ausgabe als E-/G-Note.
- **Prognose**: Ausgleichs- und Ausschlussregeln werden automatisch berücksichtigt.
- **Import/Export**: Noteneingaben als JSON speichern/herunterladen und hochladen.
- **Druckansicht**: Druckfähige Zusammenfassung der Noten und Prognose.
- **Sprachumschaltung**: Deutsch und Englisch.

## Installation & Nutzung

### Option 1: Online-Nutzung (empfohlen)
1. Rufen Sie den [Link zur Webanwendung](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/) auf.
2. Das Tool wird vollständig in Ihren Browser geladen und funktioniert ab dann auch ohne Internetverbindung.

### Option 2: Lokale Nutzung
1. Laden Sie dieses Repository als ZIP-Datei herunter oder klonen Sie es:
   ```bash
   git clone https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg.git
   ```
2. Öffnen Sie die Datei `index.html` in einem beliebigen Browser.

## Verwendung

1. **Abschluss:** Wählen Sie zuerst den angestrebten Abschluss.
2. **Noteneingabe:** Tragen Sie die Noten in den Fächern ein (Pflichtfächer zuerst).
3. **Abschlussprognose:** Prognose und Durchschnitt werden automatisch aktualisiert.

## Verzeichnisstruktur

```text
noten-und-abschlussrechner-sek-i-hamburg
├── assets
│   ├── fonts
│   │   ├── OFL.txt
│   │   ├── source-sans-3-variable.ttf
│   │   └── source-sans-3-variable.woff2
│   └── images
│       ├── background.svg
│       ├── CC-BY-NC-SA.png
│       ├── flag_de.svg
│       ├── flag_en.svg
│       └── plane.svg
├── index.html
├── script.js
├── styles.css
├── README.md
└── LICENSE
```

## Technische Details

- **Statisch**: Reines `HTML/JS/CSS`, ohne Backend-Komponenten.
- **Lokal & sicher**: Alle Berechnungen laufen im Browser.
- **Abhängigkeiten**: Keine externen JavaScript-Bibliotheken notwendig.
- **Schriftart**: Source Sans 3 als Variable Font lokal eingebunden (`assets/fonts`, SIL OFL 1.1).

## Berechnungsgrundlage & Hinweise

- **Rechtsgrundlage**: APO-GrundStGy Hamburg (Stand: April 2024).
- **Haftung**: Das Tool befindet sich in einer Testphase; Angaben ohne Gewähr. Verbindliche Auskünfte erteilen die Schulen.

## Datenschutz

Dieses Tool verarbeitet alle Noten bzw. personenbezogenen Daten lokal im Browser.
- **Kein Upload**: Es findet keine Datenübertragung zu einem Server statt.
- **Lokale Ausführung**: Der JavaScript-Code läuft ausschließlich auf Ihrem Endgerät.

## Lizenz

Dieses Projekt ist unter der **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)** lizenziert.
Weitere Details finden Sie in der Datei [LICENSE](LICENSE).

![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg)

### Was bedeutet das konkret?

✅ Sie dürfen dieses Tool nutzen, kopieren und anpassen, sofern **eine Namensnennung** erfolgt (Attribution) und **Weitergaben unter gleichen Bedingungen** erfolgen (ShareAlike).

❌ Die **kommerzielle Nutzung** ist ohne ausdrückliche Erlaubnis nicht gestattet!
