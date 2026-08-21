import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";
import { pluginMyLynx } from "./bundle/plugin-my-lynx.js";

export default defineConfig({
  source: {
    entry: {
      greeting: "./src/Greeting.lynx",
    },
  },
  output: {
    filename: "[name].[platform].bundle",
  },
  plugins: [
    pluginMyLynx(),
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`;
      },
    }),
  ],
  environments: {
    web: {},
    lynx: {},
  },
});
