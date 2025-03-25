import { LynxEncodePlugin, LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";
import { defineConfig } from "@rspack/cli";

export default defineConfig({
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "babel-preset-solid",
                {
                  moduleName: "@lynx-js/solid",
                  generate: "universal",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new LynxEncodePlugin(),
    new LynxTemplatePlugin({
      filename: "main.lynx.bundle",
      intermediate: "main",
    }),
    /**
     * @param {import("@rspack/core").Compiler} compiler
     */
    (compiler) => {
      compiler.hooks.thisCompilation.tap(
        "MarkMainThreadWebpackPlugin",
        /**
         * @param {import("@rspack/core").Compilation} compilation
         */
        (compilation) => {
          compilation.hooks.processAssets.tap(
            "MarkMainThreadWebpackPlugin",
            () => {
              const asset = compilation.getAsset(`main.js`);
              compilation.updateAsset(asset.name, asset.source, {
                ...asset.info,
                "lynx:main-thread": true,
              });
            },
          );
        },
      );
    },
  ],
  experiments: {
    css: true,
  },
});
