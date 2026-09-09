import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginStylus } from "@rsbuild/plugin-stylus";

export default defineConfig({
  source: {
    entry: {
      main: "./src/index.tsx",
    },
  },
  plugins: [pluginReactLynx(), pluginQRCode(), pluginSass(), pluginLess(), pluginStylus()],
  output: {},
  environments: {
    web: {},
    lynx: {},
  },
});
