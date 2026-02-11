import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineExternalBundleRslibConfig({
  id: "react",
  source: {
    entry: {
      "ReactLynx": "./src/react.js",
    },
  },
  plugins: [
    pluginReactLynx(),
  ],
  output: {
    cleanDistPath: false,
  },
});
