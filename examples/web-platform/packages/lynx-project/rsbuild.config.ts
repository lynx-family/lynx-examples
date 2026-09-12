import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginReactLynx(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
