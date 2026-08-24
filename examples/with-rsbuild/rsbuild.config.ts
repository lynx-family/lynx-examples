import { defineConfig } from "@rsbuild/core";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  plugins: [
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
