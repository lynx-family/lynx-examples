import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";

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
