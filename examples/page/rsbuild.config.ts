import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      no_page_tag: "./src/no_page_tag/index.tsx",
      with_page_tag: "./src/with_page_tag/index.tsx",
    },
  },
  plugins: [
    pluginLynx({
      output: {
        filename: {
          bundle: "[name].[platform].bundle",
        },
      },
    }),
    pluginSass(),
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
  output: {},
  environments: {
    web: {},
    lynx: {},
  },
});
