import { defineConfig } from "@rsbuild/core";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin-canary";
import { pluginLynx } from "@lynx-js/rsbuild-plugin-canary";

export default defineConfig({
  plugins: [
    pluginLynx(),
    pluginReactLynx(),
  ],
  environments: {
    lynx: {},
  },
  output: {
    dataUriLimit: Infinity,
    filename: "[name].[platform].bundle",
  },
});
