import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@lynx-js/rspeedy";

export default defineConfig({
  plugins: [
    pluginReactLynx(),
  ],
  output: {
    filename: "[name].[platform].bundle",
  },
  environments: {
    web: {},
    lynx: {},
  },
});
