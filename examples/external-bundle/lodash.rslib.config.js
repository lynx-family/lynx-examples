import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default defineExternalBundleRslibConfig({
  id: "lodash-es",
  source: {
    entry: {
      "lodash-es": require.resolve("lodash-es"),
    },
  },
  plugins: [
    pluginReactLynx(),
  ],
  output: {
    cleanDistPath: false,
  },
});
