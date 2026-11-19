# Robotique
Application web de gestion de classe de robotique : équipes en kanban, tâches (défis, exercices), matériel, tapis, connaissances, progression et historique de qui a travaillé avec qui.

Les données restent dans le navigateur de chaque appareil (aucune donnée d'élève sur GitHub). Sauvegarde et restauration en JSON depuis l'onglet Données ; import des classes depuis une sauvegarde PlanClasse.

## Mise en ligne (première fois)

1. GitHub Desktop → File → Add local repository → choisir ce dossier → « create a repository » → Publish repository (compte ou organisation PlanClasse, nom `Robotique`, décocher « Keep this code private »).
2. Sur github.com, dans le dépôt : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)` → Save.
3. Ensuite, chaque mise à jour : double-cliquer `publier.bat`.
