import { preset } from "@ddddurk/ui";
import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  globalCss: {
    "*": {
      transition: "all",
      transitionDuration: "150ms",
      transitionTimingFunction: "ease-in"
    }
  },
  hash: true,
  include: ["./src/**/*.{ts,tsx}"],
  jsxFactory: "panda",
  jsxFramework: "react",
  outdir: "panda",
  preflight: true,
  presets: [preset]
});

export default config;
