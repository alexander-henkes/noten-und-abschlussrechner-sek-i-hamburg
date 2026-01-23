# Noten- & Abschlussrechner für die Sekundarstufe I (Stadtteilschulen in Hamburg)

**Webbasiertes Tool** zur Berechnung des **Notendurchschnitts** und einer **Abschlussprognose**
(ESA, eESA, MSA, SEK II) für die **Sekundarstufe I** (an Stadtteilschulen) in Hamburg.

Dieses Repository enthält eine statische Webanwendung (`HTML/JS/CSS`), mit der
Schülerinnen und Schüler ihre **E-/G-Noten** erfassen können. Das Tool läuft vollständig
lokal im Browser und überträgt keine Daten an externe Server.

<br>
<div align="center">

## 🚀 DIREKT NUTZEN 🚀

### **[➡️ Programm direkt auf <u>GitHub Pages</u> nutzen ⬅️](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/)**

[![GitHub](https://img.shields.io/badge/GitHub-alexander--henkes-blue?logo=github)](https://github.com/alexander-henkes)
[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Falexander-henkes.github.io%2Fnoten-und-abschlussrechner-sek-i-hamburg%2F)](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/)
[![Release](https://img.shields.io/github/v/release/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg?color=success)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/releases/)
[![Release Date](https://img.shields.io/github/release-date/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/releases)
[![Code Size](https://img.shields.io/github/languages/code-size/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)
[![Issues](https://img.shields.io/github/issues-raw/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg)](https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg/issues/)
[![Fehler melden](https://img.shields.io/badge/Fehler%20melden%20-Mail%20senden-red?logo=maildotru)](mailto:github@alexander-henkes.8shield.net)

</div>

<br>

## Grundlage: APO-GrundStGy (04/2024)

Als Ausgangsgrundlage zwecks Noten- und Abschlussberechnung dienen die §§ 29-31 der hamburgischen [APO-GrundStGy](https://web.archive.org/web/20260120104037/https://www.hamburg.de/resource/blob/136184/0f0b5da5811d0277de8491e6de3acb42/apo-grundstgy-data.pdf) (Stand: April 2024). Die einzelnen, abschlussbezogenen Paragraphen sind hier einzusehen:

* [ESA](https://www.landesrecht-hamburg.de/bsha/document/jlr-Grd_StTSchulGymAPOHAV16P29) (Erster allgemeinbildender Schulabschluss – § 29)
* [eESA](https://www.landesrecht-hamburg.de/bsha/document/jlr-Grd_StTSchulGymAPOHAV6P29a) (erweiterter Erster allgemeinbildender Schulabschluss – § 29a)
* [MSA](https://www.landesrecht-hamburg.de/bsha/document/jlr-Grd_StTSchulGymAPOHAV16P30) (Mittlerer Schulabschluss – § 30)
* [SEK II](https://www.landesrecht-hamburg.de/bsha/document/jlr-Grd_StTSchulGymAPOHApP31) (Vorstufe der Gymnasialen Oberstufe – § 31)
 
Das Tool befindet sich in der <u>Testphase</u>.
<br>
<u>Angaben ohne Gewähr</u> – Verbindliche Auskünfte erteilen die Schulen!

## Funktionen

- **Abschlusswahl**: ESA, MSA oder Versetzung in die Sekundarstufe II.
- **Noteneingabe**: Fächerliste mit Pflichtfächern (D/M/E) und frei ergänzbaren Fächern.
- **Notenskala**: E1–E4 (erhöhtes Niveau) und G2–G6 (grundlgendes Nivveau).
- **Notendurchschnitt**: Berechnung und Ausgabe als E-/G-Note.
- **Prognose**: Ausgleichs- und Ausschlussregeln werden automatisch berücksichtigt.
- **Import/Export**: Noteneingaben als JSON speichern/herunterladen und hochladen.
- **Druckansicht**: Druckfähige Zusammenfassung der Noten und Prognose.
- **Sprachumschaltung**: Deutsch und Englisch.

## Verzeichnisstruktur

```text
noten-und-abschlussrechner-sek-i-hamburg
├── .github
│   └── workflows
│       ├── broken-link-checker.yml
│       └── docker-publish.yml
├── .gitignore
├── assets
│   ├── fonts
│   │   ├── OFL.txt
│   │   ├── source-sans-3-variable.ttf
│   │   └── source-sans-3-variable.woff2
│   └── images
│       ├── cc-by-nc-sa.svg
│       ├── flag_de.svg
│       ├── flag_en.svg
│       ├── harbour.svg
│       ├── plane.svg
│       ├── selfhost.svg
│       └── ship.svg
├── docker
│   ├── Dockerfile
│   └── docker-compose.yml
├── documents
│   ├── apo-grundstgy-hamburg-§2.pdf
│   ├── apo-grundstgy-hamburg-§29.pdf
│   ├── apo-grundstgy-hamburg-§29a.pdf
│   ├── apo-grundstgy-hamburg-§30.pdf
│   ├── apo-grundstgy-hamburg-§31.pdf
│   └── apo-grundstgy-hamburg-anlage-1.pdf
├── index.html
├── README.md
├── script.js
├── styles.css
└── LICENSE
```

## Installation

### Option 1: Online-Nutzung (empfohlen)

1. Rufen Sie den [Link zur Webanwendung](https://alexander-henkes.github.io/noten-und-abschlussrechner-sek-i-hamburg/) auf.
2. Das Tool wird vollständig in Ihren Browser geladen und funktioniert ab dann auch ohne Internetverbindung.

### Option 2: Lokale Nutzung

1. Laden Sie dieses Repository als ZIP-Datei herunter oder klonen Sie es:
   ```bash
   git clone https://github.com/alexander-henkes/noten-und-abschlussrechner-sek-i-hamburg.git
   ```
2. Öffnen Sie die Datei `index.html` in einem beliebigen Browser.

### Option 3: Docker-Container

1. Starten Sie den Container ([docker/docker-compose.yml](docker/docker-compose.yml)):
   ```bash
   docker compose -f docker/docker-compose.yml up -d
   ```
2. Öffnen Sie die Anwendung im Browser unter `http://localhost:8080`.

## Nutzung/Verwendung

1. **Abschluss:** Wählen Sie zuerst den angestrebten Abschluss.
2. **Noteneingabe:** Tragen Sie die Noten in den Fächern ein (Pflichtfächer zuerst).
3. **Abschlussprognose:** Prognose und Durchschnitt werden automatisch aktualisiert.

## Technische Details

- **Statisch**: Reines `HTML/JS/CSS`, ohne Backend-Komponenten.
- **Lokal & sicher**: Alle Berechnungen laufen im Browser.
- **Abhängigkeiten**: Keine externen JavaScript-Bibliotheken notwendig.
- **Schriftart**: Source Sans 3 als Variable Font lokal eingebunden (`assets/fonts`, SIL OFL 1.1).

## Datenschutz

- **Kein Upload**: Es findet keine Datenübertragung zu einem Server statt.
- **Lokale Ausführung**: Der JavaScript-Code läuft ausschließlich auf Ihrem Endgerät.

## Lizenz

Dieses Projekt ist unter der **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)** lizenziert.
Weitere Details finden Sie in der Datei [LICENSE](LICENSE).

![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg)

### Was bedeutet das konkret?

✅ Sie dürfen dieses Tool nutzen, kopieren und anpassen, sofern **eine Namensnennung** erfolgt (Attribution) und **Weitergaben unter gleichen Bedingungen** erfolgen (ShareAlike).

❌ Die **kommerzielle Nutzung** ist ohne ausdrückliche Erlaubnis nicht gestattet!
