import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body, div#root": {
    backgroundColor: "gray.200",
    height: "100%",
  },
});

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: { extend: {} },
  outdir: "src/styled-system",
  jsxFramework: "solid",
  globalCss,
});
