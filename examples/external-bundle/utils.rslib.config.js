import { defineExternalBundleRslibConfig, LAYERS } from "@lynx-js/lynx-bundle-rslib-config";
import { pluginLynx } from "@lynx-js/rsbuild-plugin";

export default defineExternalBundleRslibConfig({
  id: "utils",
  source: {
    entry: {
      utils: {
        import: "./src/utils/index.ts",
        layer: LAYERS.BACKGROUND,
      },
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
