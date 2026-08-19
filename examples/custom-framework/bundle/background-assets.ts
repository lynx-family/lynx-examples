import { RuntimeWrapperWebpackPlugin } from "@lynx-js/runtime-wrapper-webpack-plugin";

import type { BundlerChain } from "./build-types.js";
import { PLUGIN_NAME, TARGET_SDK_VERSION } from "./constants.js";

export function configureBackgroundAssets(chain: BundlerChain): void {
  chain.plugin(`${PLUGIN_NAME}:runtime-wrapper`).use(
    RuntimeWrapperWebpackPlugin,
    [{
      targetSdkVersion: TARGET_SDK_VERSION,
      test: /^\.rspeedy\/.+\/background\.js$/u,
    }],
  );
}
