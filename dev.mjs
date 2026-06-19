/**
 * Cross-platform dev launcher — works on Windows, macOS, Linux.
 * Starts the API server (port 3000) and frontend (port 5000) in parallel.
 * No extra packages required — pure Node.js child_process.
 *
 * Usage: node dev.mjs
 */

import { spawn } from "node:child_process";
import process from "node:process";

const isWindows = process.platform === "win32";

/** Spawn a pnpm filter command with the given env vars */
function run(label, color, filter, script, env = {}) {
  const cmd = "pnpm";
  const child = spawn(cmd, ["--filter", filter, "run", script], {
    env: { ...process.env, ...env },
    stdio: "pipe",
    shell: isWindows,
  });

  const prefix = `\x1b[${color}m[${label}]\x1b[0m `;

  child.stdout.on("data", (d) =>
    process.stdout.write(prefix + d.toString().replace(/\n(?!$)/g, "\n" + prefix))
  );
  child.stderr.on("data", (d) =>
    process.stderr.write(prefix + d.toString().replace(/\n(?!$)/g, "\n" + prefix))
  );

  child.on("exit", (code) => {
    if (code !== 0 && code !== null) {
      console.error(`${prefix}exited with code ${code}`);
      process.exit(code);
    }
  });

  return child;
}

console.log("\x1b[1mStarting AshY Creations dev servers...\x1b[0m");
console.log("  API  → http://localhost:3000");
console.log("  Web  → http://localhost:5000\n");

const api = run("api", 36 /* cyan  */, "@workspace/api-server",    "dev", { PORT: "3000", NODE_ENV: "development" });
const web = run("web", 35 /* magenta */, "@workspace/ashy-creations", "dev", { PORT: "5000", BASE_PATH: "/" });

// Graceful shutdown on Ctrl+C
function shutdown() {
  api.kill("SIGTERM");
  web.kill("SIGTERM");
  process.exit(0);
}
process.on("SIGINT",  shutdown);
process.on("SIGTERM", shutdown);
