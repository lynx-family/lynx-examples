import { defineConfig } from "@lynx-js/rspeedy";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";

export default defineConfig({
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginTypeCheck(),
    pluginLynxConfig({
      enableCSSInlineVariables: true,
    }),
  ],
  environments: {
    web: {},
    lynx: {},
  },
  output: {
    assetPrefix: "https://lynxjs.org/lynx-examples/a2ui/dist",
    filename: "[name].[platform].bundle",
  },
});
