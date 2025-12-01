import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  source: {
    entry: {
      "measuring-layout": "./src/measuring-layout/index.tsx",
    },
  },
  plugins: [
    pluginQRCode(),
    pluginReactLynx({
      enableCSSInheritance: true,
    }),
    pluginTypeCheck(),
  ],
  output: {
    filename: "[name].[platform].bundle",
  },
});
