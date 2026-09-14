import { defineConfig } from "@lynx-js/rspeedy";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReactLynx(),
  ],
  output: {
    dataUriLimit: Infinity,
    filename: "[name].[platform].bundle",
  },
});
