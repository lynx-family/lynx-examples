import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default defineExternalBundleRslibConfig({
  id: "lodash-es",
  source: {
    entry: {
      "lodash-es": require.resolve("lodash-es"),
    },
  },
  output: {
    cleanDistPath: false,
  },
});
