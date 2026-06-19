# AshY Creations — Local Setup Guide

Works on **Windows**, **macOS**, and **Linux** — no platform-specific tools required.

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | v20+ | https://nodejs.org/ (choose LTS) |
| pnpm | v8+ | `npm install -g pnpm` |

> **Windows tip:** Use the [Node.js installer](https://nodejs.org/) — it sets PATH automatically including npm. After installing, open a **new** terminal window before running any commands.

---

## Step 1 — Install dependencies

From the project root folder:

```
pnpm install
```

Installs everything for the full monorepo in one shot.

---

## Step 2 — Start the project (development)

```
pnpm dev
```

This starts both servers together using `node dev.mjs` — fully cross-platform, no bash required.

| Server | URL |
|--------|-----|
| Frontend (React + Vite) | http://localhost:5000 |
| API Server (Express) | http://localhost:3000 |

Press **Ctrl+C** to stop both.

---

## Build for production

```
pnpm run build
```

Typechecks and compiles both the frontend and API into their `dist/` folders.

---

## Run the production build

Start each server in a separate terminal window from the project root.

**Terminal 1 — API Server**

PowerShell:
```
$env:PORT = "3000"; node --enable-source-maps artifacts/api-server/dist/index.mjs
```

Command Prompt:
```
set PORT=3000 && node --enable-source-maps artifacts/api-server/dist/index.mjs
```

**Terminal 2 — Frontend preview**

PowerShell:
```
$env:PORT = "5000"; $env:BASE_PATH = "/"; pnpm --filter @workspace/ashy-creations run serve
```

Command Prompt:
```
set PORT=5000 && set BASE_PATH=/ && pnpm --filter @workspace/ashy-creations run serve
```

---

## Manual dev start (two separate terminals)

If you prefer running each server individually in dev mode:

**Terminal 1 — API Server:**

PowerShell:
```
$env:PORT = "3000"; $env:NODE_ENV = "development"; pnpm --filter @workspace/api-server run dev
```

Command Prompt:
```
set PORT=3000 && set NODE_ENV=development && pnpm --filter @workspace/api-server run dev
```

**Terminal 2 — Frontend:**

PowerShell:
```
$env:PORT = "5000"; $env:BASE_PATH = "/"; pnpm --filter @workspace/ashy-creations run dev
```

Command Prompt:
```
set PORT=5000 && set BASE_PATH=/ && pnpm --filter @workspace/ashy-creations run dev
```

---

## Project Structure

```
/
├── artifacts/
│   ├── ashy-creations/     # React frontend (Vite + Tailwind CSS 4)
│   └── api-server/         # Express backend API
├── lib/
│   ├── api-spec/           # OpenAPI spec
│   ├── api-zod/            # Zod schemas (generated)
│   └── api-client-react/   # React API client (generated)
├── dev.mjs                 # Cross-platform dev launcher (used by `pnpm dev`)
├── start.sh                # Replit-only startup script — do NOT run on Windows
├── package.json            # Root — run all commands from here
└── setup.md                # This file
```

---

## Troubleshooting

### `pnpm: command not found` / `'pnpm' is not recognized`
Run `npm install -g pnpm`, then **restart your terminal** (PATH updates don't apply to open windows).

### `node: command not found` / `'node' is not recognized`
Node.js is not on PATH. Re-run the Node.js installer from https://nodejs.org and ensure "Add to PATH" is checked. Restart your terminal.

### `Cannot find package 'esbuild'` / `vite: not found` / `node_modules missing`
Dependencies are not installed. Run from the project root:
```
pnpm install
```
Always run `pnpm install` from the **root** folder, not inside a subfolder.

### `sh: 1: vite: not found` or bash errors on Windows
Do **not** run `bash start.sh` — that script is for Replit only. Use `pnpm dev` instead.

### Port already in use (`EADDRINUSE :5000` or `:3000`)
Find and kill the process using that port.

PowerShell:
```
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER_FROM_ABOVE> /F
```

### esbuild binary error (`Unsupported platform` or `spawn ENOENT`)
Rebuild esbuild's native binary for your platform:
```
pnpm rebuild esbuild
```

### TypeScript errors during `pnpm run build`
Check types in the API server:
```
pnpm --filter @workspace/api-server run typecheck
```
Fix any reported errors before running the full build.

### `ERR_MODULE_NOT_FOUND: Cannot find package 'X'` after adding a new dependency
Run `pnpm install` again from the project root to update the lockfile.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, Vite 7, Tailwind CSS 4, Framer Motion, Wouter |
| Backend | Node.js 20, Express 5, Pino |
| Language | TypeScript 5.9 |
| Bundler | esbuild (API), Vite (frontend) |
| Packages | pnpm workspaces (monorepo) |
