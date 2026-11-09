# Markdown für lucasherrling.eu

Eine `.md`-Datei ist eine Textdatei. Du schreibst den Text und markierst zum Beispiel eine Überschrift mit `#` oder eine kursiv gesetzte Stelle mit Sternchen. Beim Aufruf der Seite setzt die Website daraus den formatierten Text zusammen.

## Eine Seite bearbeiten

Öffne auf GitHub die entsprechende Datei, klicke auf den Stift, bearbeite den Text und prüfe die Formatierung unter **Preview**. Mit **Commit changes** speicherst du die Änderung auf `main`. Der Webhook übernimmt sie auf die Website. [Zum Inhaltsordner](https://github.com/carljakobmoritz/lucasherrlingeu/tree/main/content)

| Was du ändern möchtest | Datei im Repository |
| --- | --- |
| Vorstellung auf der Startseite | `content/start.md` |
| „Über“ | `content/ueber.md` |
| „Kontakt“ | `content/kontakt.md` |
| Einen Essay | Eine Datei in `content/texte/` |
| Empfohlener Essay auf der Startseite | `content/empfehlung.txt` – hier steht nur der Dateiname ohne `.md`, etwa `ratte-werden` |

## Einen Essay veröffentlichen

Öffne [den Ordner für Essays](https://github.com/carljakobmoritz/lucasherrlingeu/tree/main/content/texte) und wähle **Add file → Create new file**. Nenne die Datei zum Beispiel `lesen-im-seminar.md`. Nach dem Commit erscheint sie automatisch unter „Texte“, alphabetisch nach Titel. Ihre Adresse lautet `/texte/lesen-im-seminar`. Wenn du später den Titel änderst, kannst du den Dateinamen beibehalten und bestehende Links funktionieren weiter.

Diese Vorlage verwendet das Rattenbild und den Essay-Link, die schon auf der Website vorhanden sind.

```markdown
# Lesen im Seminar

Welche Fragen nehmen wir aus einem Seminar mit? Dieser erste Absatz
erscheint auch als Vorschau unter „Texte“.

## Eine offene Frage

Manchmal beginnt ein Text mit einem *Einwand*.

> Was geschieht, wenn wir gemeinsam lesen?

![Das Rattensymbol der Website](/rat.svg)

Zum Weiterlesen: [Ratte-werden](/texte/ratte-werden).
```

Für einen Untertitel setze direkt unter den Titel eine Zeile mit `## Dein Untertitel`. Schreibe den Einstiegsabsatz **vor** das erste Bild, wenn du eine Textvorschau möchtest. Ein allein stehendes Bild zählt als Absatz und kann sonst selbst zur Vorschau werden.

## Ein eigenes Foto einfügen

1. Öffne [den Ordner public](https://github.com/carljakobmoritz/lucasherrlingeu/tree/main/public). Wähle **Add file → Upload files**, lade etwa `lesung.jpg` hoch und speichere auf `main`.
2. Öffne die gewünschte Seite oder den Essay. Füge an der Stelle, an der das Foto erscheinen soll, folgende Zeile ein und passe die Bildbeschreibung an.

```markdown
![Bücher und Notizen auf dem Seminartisch](/lesung.jpg)
```

Der Text in den eckigen Klammern beschreibt das Bild für Menschen, die es nicht sehen. Für eine sichtbare Bildunterschrift schreibe unter dem Bild einen eigenen Absatz, zum Beispiel `*Lesung in Wien.*`.

`public/lesung.jpg` im Repository hat auf der Website die Adresse `/lesung.jpg`. Für `public/bilder/lesung.jpg` wäre es `/bilder/lesung.jpg`. Achte auf die Groß- und Kleinschreibung der Datei. Der führende Schrägstrich macht denselben Bildpfad auf der Startseite und in allen Essays verwendbar. Bilder passen sich der Breite der Textspalte an. Prüfe sie nach dem Speichern auf der veröffentlichten Seite, da GitHub für seine Vorschau andere Dateipfade verwendet.

## Schreibweise zum Nachschlagen

| Gewünschtes Ergebnis | So schreibst du es |
| --- | --- |
| Neuer Absatz | Eine Leerzeile zwischen zwei Absätzen |
| Zwischenüberschrift | `## Ein Gedanke` |
| Untergeordnete Überschrift | `### Eine Rückfrage` |
| Kursiv, fett, durchgestrichen | `*Begriff*`, `**These**`, `~~alte Fassung~~` |
| Aufzählung | Jede Zeile mit `- ` beginnen |
| Nummerierte Liste | Zeilen mit `1. `, `2. `, `3. ` beginnen |
| Zitat | `> Ein zitierter Satz.` |
| Link auf eine andere Seite | `[Kontakt](/kontakt)` |
| Link auf eine externe Quelle | `[Quelle](https://example.org)` |
| Link auf eine eigene PDF | `[Text als PDF](/seminartext.pdf)` für die Datei `public/seminartext.pdf` |
| Kurzes Codebeispiel im Satz | Einzelne Backticks um den Ausdruck setzen, etwa `` `x + 1` `` |
| Trennlinie | `---` auf einer eigenen Zeile mit Leerzeilen davor und danach |

**Zeilenumbrüche.** Ein einfacher Umbruch im Quelltext setzt einen Absatz fort. Für die festen Zeilen eines Gedichts setze einen umgekehrten Schrägstrich an das Zeilenende.

```markdown
Eine erste Zeile\
und eine zweite Zeile.
```

**Tabellen.** Die zweite Zeile gehört zur Tabelle. Jede weitere Zeile enthält die Werte.

```markdown
| Text | Form |
| --- | --- |
| Ratte-werden | Essay |
| Lesen im Seminar | Notiz |
```

**Längere Codebeispiele.** Drei Backticks öffnen und schließen einen Block. Darin bleiben Zeilenumbrüche und Einrückungen sichtbar.

````markdown
```python
for wort in ["Lesen", "Schreiben"]:
    print(wort)
```
````

## Was die Website zusätzlich können müsste

Navigation, Schrift, Spalten und die genaue Bildgröße werden in den Vorlagen und im Stylesheet festgelegt. Eine neue Datei unter `content/texte/` bekommt automatisch eine öffentliche Essayseite. Eine weitere Hauptseite wie `/projekte` braucht eine Route in der Webanwendung und gegebenenfalls einen Menüeintrag.

Der Markdown-Renderer zeigt eingegebenes HTML als Text. Du kannst Videos und andere Medien verlinken. Für eingebettete Player wäre eine Erweiterung der Website nötig. Automatisch nummerierte Fußnoten und mathematischer Formelsatz benötigen ebenfalls eine Erweiterung. Für wissenschaftliche Texte kannst du heute schon einen Abschnitt `## Anmerkungen` mit einer nummerierten Liste schreiben oder direkt auf Quellen verlinken.

## Weiterführende Anleitungen

- Englischer Einstieg mit Übungen. [Interaktives CommonMark-Tutorial](https://commonmark.org/help/tutorial/)
- Kurze Übersicht mit Quelltext und Ergebnis nebeneinander. [CommonMark-Kurzreferenz](https://commonmark.org/help/)
- Vollständige Spezifikation der Grundsyntax. Tabellen und Durchstreichungen sind zusätzliche Funktionen des hier verwendeten Renderers. [CommonMark-Spezifikation](https://spec.commonmark.org/0.31.2/)
- Deutschsprachige Anleitung zu GitHubs Markdown. Einige Beispiele wie automatische Fußnoten gelten für die GitHub-Vorschau. [Grundlegende Schreib- und Formatierungssyntax](https://docs.github.com/de/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
