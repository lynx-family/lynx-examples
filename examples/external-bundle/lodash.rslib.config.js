import { createRequire } from "node:module";

import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";

const require = createRequire(import.meta.url);

export default defineExternalBundleRslibConfig({
  id: "lodash-es",
  source: {
    entry: {
      "lodash-es": require.resolve("lodash-es"),
    },
  },
  plugins: [pluginLynx()],
  output: {
    cleanDistPath: false,
    distPath: {
      root: "dist-external-bundle",
    },
  },
});
