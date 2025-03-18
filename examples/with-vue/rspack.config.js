import { LynxEncodePlugin, LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";
import { defineConfig } from "@rspack/cli";
import { VueLoaderPlugin } from "vue-loader";

export default defineConfig({
  entry: {
    main: "./src/index.js",
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        /**
         * @type {import("vue-loader").VueLoaderOptions}
         */
        options: {
          experimentalInlineMatchResource: true,
          compilerOptions: {
            runtimeModuleName: "@lynx-js/vue",
            // directiveTransforms: {
            //   on: transformOn,
            // },
          },
        },
      },
    ],
  },
  plugins: [
    new LynxEncodePlugin(),
    new LynxTemplatePlugin({
      filename: "main.lynx.bundle",
      intermediate: "main",

      debugInfoOutside: false,
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

    new VueLoaderPlugin(),
  ],
  experiments: {
    css: true,
  },
});
