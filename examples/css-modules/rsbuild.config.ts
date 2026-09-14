import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [
    pluginLynx({ output: { filename: { bundle: "[name].[platform].bundle" } } }),
    pluginReactLynx(),
    pluginQRCode(),
    pluginTypedCSSModules(),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
