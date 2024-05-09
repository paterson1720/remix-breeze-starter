import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: ["node_modules/lodash-es/**", "node_modules/@types/lodash-es/**"],
    },
  },
});
