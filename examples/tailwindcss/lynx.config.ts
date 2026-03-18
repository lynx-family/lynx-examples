import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

export default defineConfig({
  plugins: [
    pluginReactLynx({
      enableCSSInheritance: true,
    }),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
  ],
  output: {
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
