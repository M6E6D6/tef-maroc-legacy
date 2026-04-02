import path from "node:path";
import { fileURLToPath } from "node:url";

/** Toujours ce dépôt — évite process.cwd() = dossier parent (lockfile dans C:\Users\...) */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: projectRoot,
    },
  },
};

export default config;
