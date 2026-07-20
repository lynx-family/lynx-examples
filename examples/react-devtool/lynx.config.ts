import { defineConfig } from "@lynx-js/rspeedy";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginQRCode(),
    pluginReactLynx({
      enableNewGesture: true,
    }),
    pluginLynxConfig({
      enableCSSInlineVariables: true,
    }),
  ],
  output: {
    filename: "[name].[platform].bundle",
    minify: {
      jsOptions: {
        minimizerOptions: {
          mangle: false,
        },
      },
    },
  },
  environments: {
    web: {},
    lynx: {},
  },
});
