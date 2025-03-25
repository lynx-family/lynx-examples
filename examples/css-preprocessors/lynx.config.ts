import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginLess } from "@rsbuild/plugin-less";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginStylus } from "@rsbuild/plugin-stylus";

export default defineConfig({
  plugins: [pluginReactLynx(), pluginQRCode(), pluginSass({}), pluginLess({}), pluginStylus({})],
  environments: {
    web: {},
    lynx: {},
  },
});
