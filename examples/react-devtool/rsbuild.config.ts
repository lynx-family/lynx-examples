import { defineConfig } from "@rsbuild/core";

import { pluginLynxConfig } from "@lynx-js/config-rsbuild-plugin";
import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
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
