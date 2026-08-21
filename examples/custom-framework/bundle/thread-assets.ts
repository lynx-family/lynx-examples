import type { Compiler } from "@rspack/core";

import type { BundlerChain } from "./build-types.js";

const THREAD_ASSETS_PLUGIN_NAME = "MyLynxThreadAssetsPlugin";

function createMainThreadAssetsPlugin(
  mainThreadAssets: string[],
): { apply(compiler: Compiler): void } {
  return {
    apply(compiler) {
      compiler.hooks.thisCompilation.tap(
        THREAD_ASSETS_PLUGIN_NAME,
        (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: THREAD_ASSETS_PLUGIN_NAME,
              stage: compiler.webpack.Compilation
                .PROCESS_ASSETS_STAGE_ADDITIONAL,
            },
            () => {
              for (const filename of mainThreadAssets) {
                const asset = compilation.getAsset(filename);
                if (!asset) {
                  throw new Error(
                    `Main-thread asset was not emitted: ${filename}`,
                  );
                }
                compilation.updateAsset(filename, asset.source, {
                  ...asset.info,
                  "lynx:main-thread": true,
                });
              }
            },
          );
        },
      );
    },
  };
}

export function configureMainThreadAssets(
  chain: BundlerChain,
  mainThreadAssets: string[],
): void {
  chain.plugin(THREAD_ASSETS_PLUGIN_NAME).use(
    createMainThreadAssetsPlugin(mainThreadAssets),
  );
}
