import type { Config } from "tailwindcss";

/** Limit scanning to ./src so editor caches & stray files never generate broken utilities. */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;
