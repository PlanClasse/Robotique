@echo off
chcp 65001 >nul
rem Publie l'application Robotique sur GitHub Pages.
rem Seuls index.html, sw.js, manifest.json, README.md et .gitignore partent.
rem Les sauvegardes (*-sauvegarde-*.json) et le dossier dev\ ne sont jamais envoyes.
cd /d "%~dp0"

where git >nul 2>&1 || (echo Git n'est pas installe : https://git-scm.com/download/win & pause & exit /b 1)
if not exist ".git" (echo Ce dossier n'est pas encore un depot GitHub : %CD% & echo Creez-le d'abord avec GitHub Desktop ^(voir README^). & pause & exit /b 1)
if not exist "index.html" (echo index.html introuvable dans %CD% & pause & exit /b 1)
if not exist "sw.js" (echo sw.js introuvable dans %CD% & pause & exit /b 1)

git pull --rebase --autostash
git add index.html sw.js manifest.json README.md .gitignore
git diff --cached --quiet && (echo Rien de nouveau a publier. & pause & exit /b 0)
git commit -m "Publication %date% %time:~0,5%"
git push || (echo ECHEC de l'envoi : verifiez la connexion a GitHub. & pause & exit /b 1)

echo.
echo Publie. Le site se met a jour d'ici 1 a 2 minutes : rechargez l'application DEUX fois.
pause
