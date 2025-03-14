import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

export default defineConfig({
  plugins: [pluginReactLynx(), pluginQRCode(), pluginTypedCSSModules()],
  environments: {
    web: {},
    lynx: {},
  },
});
