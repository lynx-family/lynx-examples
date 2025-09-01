import { defineConfig } from "@lynx-js/rspeedy";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: "./src/index.tsx",
  },
  output: {
    filename: "lazy-bundle-producer-new.lynx.bundle",
  },
  plugins: [
    pluginReactLynx({
      experimental_isLazyBundle: true,
    }),
    pluginTypeCheck(),
  ],
});
