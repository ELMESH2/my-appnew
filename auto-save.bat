@echo off
:loop
git add .
git commit -m "Salvamento automático %date% %time%"
git push origin main
timeout /t 300 >nul
goto loop
