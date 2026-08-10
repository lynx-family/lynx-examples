import { defineExternalBundleRslibConfig } from "@lynx-js/lynx-bundle-rslib-config";

const LAYERS = {
  BACKGROUND: "rslib:background",
  MAIN_THREAD: "rslib:main-thread",
};

const pluginRslibLayers = () => ({
  name: "example:rslib-layers",
  setup(api) {
    api.expose(Symbol.for("LAYERS"), LAYERS);
  },
});

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
  plugins: [
    pluginRslibLayers(),
  ],
  output: {
    cleanDistPath: false,
    distPath: {
      root: "dist-external-bundle",
    },
  },
});
