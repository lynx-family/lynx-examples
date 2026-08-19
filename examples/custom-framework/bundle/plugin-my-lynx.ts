import type { RsbuildPlugin } from "@lynx-js/rspeedy";
import { LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";

import { configureBackgroundAssets } from "./background-assets.js";
import { configureCompiler } from "./compiler-rule.js";
import { FRAMEWORK_LAYERS, PLUGIN_NAME } from "./constants.js";
import { configureEncoder, getPlatform } from "./encode.js";
import { configureThreadEntries } from "./entries.js";
import { configureTemplates } from "./template.js";
import { configureMainThreadAssets } from "./thread-assets.js";

export function pluginMyLynx(): RsbuildPlugin {
  return {
    name: PLUGIN_NAME,
    pre: ["lynx:rsbuild:plugin-api"],
    setup(api) {
      api.expose(Symbol.for("LAYERS"), FRAMEWORK_LAYERS);
      api.expose(Symbol.for("LynxTemplatePlugin"), {
        LynxTemplatePlugin: {
          getLynxTemplatePluginHooks: LynxTemplatePlugin
            .getLynxTemplatePluginHooks.bind(LynxTemplatePlugin),
        },
      });

      api.modifyRsbuildConfig((config, { mergeRsbuildConfig }) =>
        mergeRsbuildConfig(config, {
          dev: { hmr: false, liveReload: false },
        })
      );

      api.modifyBundlerChain((chain, context) => {
        const { environment } = context;
        const platform = getPlatform(environment.name);
        if (!platform) return;

        configureCompiler(chain, context, api.context.rootPath);
        const { threadEntries } = configureThreadEntries(chain, {
          projectRoot: api.context.rootPath,
        });

        configureMainThreadAssets(
          chain,
          threadEntries.map((entry) => entry.mainThreadAsset),
        );
        if (platform === "lynx") configureBackgroundAssets(chain);
        configureTemplates(api, chain, environment.name, threadEntries);
        configureEncoder(chain, platform);
      });
    },
  };
}
