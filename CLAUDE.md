# Robotique — consignes de démarrage

Application web de gestion de classe de robotique (équipes en kanban, tâches,
défis, exercices, matériel, tapis, connaissances, progression, historique des
binômes). Un seul fichier HTML, publié sur GitHub Pages. Utilisateur : Nicolas,
francophone. Application sœur de PlanClasse (`..\PdC`).

| Fichier | Rôle |
|---|---|
| `index.html` | L'application (HTML + CSS + JS dans un seul fichier). |
| `sw.js` | Service worker. **Toujours modifié et publié avec le HTML.** |
| `manifest.json` | Installation comme application. |
| `publier.bat` | Publication. **C'est l'utilisateur qui le lance, jamais Claude.** |
| `dev/` | Kit de travail privé. Jamais publié. |

## Données

- Stockées dans le `localStorage` du navigateur (clé `robotique-data-v1`) : rien
  sur GitHub. Sauvegarde/restauration JSON dans l'onglet Données.
- Import des classes et élèves depuis une sauvegarde PlanClasse (`cl[code].students`
  + `studentData[uid].prenoms/noms`).
- Dans les sorties et le dépôt : aucun nom d'élève réel. Les sauvegardes
  `*-sauvegarde-*.json` sont exclues par `.gitignore`.

## Règles

- Réponses synthétiques, en français.
- Code d'interface en `createElement` (helper `h()`), pas d'`innerHTML`.
- Bouton de suppression : fond rouge (`button.danger` ou `.x.del`).
- Nouvelle version = incrémenter **les trois** : `APP_VERSION` (index.html),
  l'en-tête de `sw.js` et `CACHE_NAME`.

## Fin de tâche

Dire ce qui a changé et rappeler de lancer `publier.bat` puis de recharger
l'application **deux fois**.
