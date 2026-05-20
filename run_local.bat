@echo off
echo ===================================================
echo 🚀 Starting Sali Siemen's Portfolio Locally...
echo ===================================================

echo [1/2] Starting FastAPI Backend on http://localhost:8000 ...
start "Portfolio Backend" cmd /k "cd /d %~dp0backend && venv\Scripts\activate && uvicorn main:app --reload --port 8000"

echo [2/2] Starting React + Vite Frontend on http://localhost:5173 ...
start "Portfolio Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ===================================================
echo Both servers have been launched in separate windows!
echo - Backend: http://localhost:8000
echo - Frontend: http://localhost:5173
echo ===================================================
echo.
pause
