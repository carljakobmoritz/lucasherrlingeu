# Die Website bearbeiten

Öffne die gewünschte Datei auf GitHub und klicke auf den Stift. Über **Preview** kannst du die Markdown-Formatierung prüfen. Mit **Commit changes** speicherst du eine Version. Die öffentliche Website zeigt sie, sobald der Server den Stand von `main` übernommen hat.

| Datei | Inhalt |
| --- | --- |
| `start.md` | Vorstellung auf der Startseite |
| `ueber.md` | Seite „Über“ |
| `kontakt.md` | Seite „Kontakt“ |
| `texte/` | Eine Markdown-Datei pro Essay |
| `empfehlung.txt` | Dateiname des empfohlenen Essays ohne `.md`, z. B. `ratte-werden` |

## Einen Essay hinzufügen

1. Öffne den Ordner [texte](texte/) und wähle **Add file → Create new file**.
2. Gib der Datei einen kurzen Namen in Kleinbuchstaben, z. B. `ueber-das-lesen.md`. Daraus wird die Adresse `/texte/ueber-das-lesen`. Behalte den Dateinamen bei, wenn du später nur den Titel ändern möchtest.
3. Beginne mit einer Titelzeile. Der erste normale Absatz erscheint als Vorschau auf der Übersichtsseite und, falls der Text empfohlen ist, auf der Startseite.
4. Wähle **Preview**, dann **Commit changes**. Sobald die Datei auf dem Server liegt, erscheint sie unter **Texte**, alphabetisch nach Titel.

```markdown
# Über das Lesen

Hier steht der kurze Einstiegsabsatz.

Hier beginnt der nächste Absatz. *So schreibe ich kursiv.*

## Eine Zwischenüberschrift

Hier geht der Text weiter.
```

Für einen Untertitel kannst du direkt unter dem Titel eine Zeile mit `## ` einfügen. Für einen Link schreibe `[So soll der Link heißen](https://example.org)`.

Wenn du den Text auf der Startseite wechseln möchtest, öffne [empfehlung.txt](empfehlung.txt) und trage den Dateinamen ohne `.md` ein. Falls dort kein vorhandener Essay steht, zeigt die Startseite den alphabetisch ersten Dateinamen. Die Kontaktseite kannst du direkt unter [kontakt.md](kontakt.md) bearbeiten.
