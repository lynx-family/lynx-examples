import { defineConfig } from "@rsbuild/core";

import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
    pluginReactLynx(),
  ],
  environments: {
    lynx: {},
  },
  output: {
    dataUriLimit: Infinity,
  },
});
