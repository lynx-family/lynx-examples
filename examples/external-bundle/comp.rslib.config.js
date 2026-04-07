import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineExternalBundleRslibConfig({
  id: "comp",
  source: {
    entry: {
      "component": "./src/components/index.js",
    },
  },
  plugins: [
    pluginReactLynx(),
  ],
  output: {
    distPath: {
      root: "dist-external-bundle",
    },
    externalsPresets: {
      reactlynx: true,
    },
  },
});
