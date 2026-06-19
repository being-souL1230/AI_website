import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, "src");
const assetsDir = path.resolve(__dirname, "..", "..", "attached_assets");

const EXTS = [".tsx", ".ts", ".jsx", ".js", "/index.tsx", "/index.ts", "/index.js"];

const aliasResolverPlugin = {
  name: "alias-resolver",
  enforce: "pre" as const,
  resolveId(id: string) {
    if (id.startsWith("@assets/")) {
      const rel = id.slice("@assets/".length);
      const full = path.resolve(assetsDir, rel);
      if (fs.existsSync(full)) return full;
    }
    if (id.startsWith("@/")) {
      const rel = id.slice(2);
      for (const ext of EXTS) {
        const full = path.resolve(srcDir, rel + ext);
        if (fs.existsSync(full)) return full;
      }
      // Maybe exact path (CSS files etc.)
      const exact = path.resolve(srcDir, rel);
      if (fs.existsSync(exact)) return exact;
    }
    return null;
  },
};

export default defineConfig({
  plugins: [aliasResolverPlugin, react(), tailwindcss()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: Number(process.env.PORT) || 5000,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port: Number(process.env.PORT) || 5000,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
