import path from "node:path";

import type { BundleFilename, ExposedAPI, RsbuildPluginAPI } from "@lynx-js/rspeedy";
import { LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";
import type { Compiler } from "@rspack/core";

import type { BundlerChain, ThreadEntry } from "./build-types.js";
import { INTERMEDIATE_DIRECTORY, PLUGIN_NAME, TARGET_SDK_VERSION } from "./constants.js";

const TEMPLATE_CONFIG_PLUGIN_NAME = "MyLynxTemplateConfigPlugin";

function resolveBundleFilename(
  configured: BundleFilename | undefined,
  entryName: string,
  platform: string,
): string {
  const template = typeof configured === "function"
    ? configured({ entryName, lazyBundle: false, platform })
    : configured ?? "[name].[platform].bundle";
  return template
    .replaceAll("[name]", entryName)
    .replaceAll("[platform]", platform);
}

function getConfiguredBundleFilename(
  api: RsbuildPluginAPI,
): BundleFilename | undefined {
  const exposed = api.useExposed<ExposedAPI>(Symbol.for("rspeedy.api"));
  const filename = exposed?.config.output?.filename;
  return typeof filename === "object"
    ? filename.bundle ?? filename.template
    : filename;
}

function createTemplateConfigPlugin(): { apply(compiler: Compiler): void } {
  return {
    apply(compiler) {
      compiler.hooks.thisCompilation.tap(
        TEMPLATE_CONFIG_PLUGIN_NAME,
        (compilation) => {
          const hooks = LynxTemplatePlugin.getLynxTemplatePluginHooks(
            compilation,
          );
          hooks.beforeEncode.tap(TEMPLATE_CONFIG_PLUGIN_NAME, (arguments_) => {
            arguments_.encodeData.sourceContent.config[
              "enableEventHandleRefactor"
            ] = true;
            return arguments_;
          });
        },
      );
    },
  };
}

export function configureTemplates(
  api: RsbuildPluginAPI,
  chain: BundlerChain,
  environmentName: string,
  entries: ThreadEntry[],
): void {
  const configuredBundle = getConfiguredBundleFilename(api);

  for (const entry of entries) {
    chain.plugin(`${PLUGIN_NAME}:template:${entry.entryName}`).use(
      LynxTemplatePlugin,
      [{
        ...LynxTemplatePlugin.defaultOptions,
        chunks: [entry.backgroundEntry, entry.mainThreadEntry],
        dsl: "react_nodiff",
        filename: resolveBundleFilename(
          configuredBundle,
          entry.entryName,
          environmentName,
        ),
        intermediate: path.posix.join(
          INTERMEDIATE_DIRECTORY,
          entry.entryName,
        ),
        targetSdkVersion: TARGET_SDK_VERSION,
      }],
    );
  }

  chain.plugin(TEMPLATE_CONFIG_PLUGIN_NAME).use(createTemplateConfigPlugin());
}
