import fs from "node:fs";
import path from "node:path";

import type { RsbuildPlugin, Rspack } from "@lynx-js/rspeedy";
import { RuntimeWrapperWebpackPlugin } from "@lynx-js/runtime-wrapper-webpack-plugin";
import { LynxEncodePlugin, LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";

const PLUGIN_NAME = "vanilla-template-webpack";
const LYNX_ENGINE_VERSION = "3.5";

type LynxCompilation = Parameters<typeof LynxTemplatePlugin.getLynxTemplatePluginHooks>[0];

export function pluginVanillaTemplateWebpack(): RsbuildPlugin {
  return {
    name: PLUGIN_NAME,
    setup(api) {
      // Keep the template plugin discoverable by Rspeedy's Lynx internals.
      api.expose(Symbol.for("LynxTemplatePlugin"), { LynxTemplatePlugin });
      api.modifyBundlerChain((chain) => {
        const rawEntries = Object.entries(chain.entryPoints.entries() ?? {});
        chain.entryPoints.clear();

        for (const [name, entry] of rawEntries) {
          const value = entry.values()?.[0];
          const imports = typeof value === "string" || Array.isArray(value) ? value : value?.import;
          const mtSource = Array.isArray(imports) ? imports[0] : imports;
          if (typeof mtSource !== "string") continue;

          const dir = path.dirname(mtSource);
          const bgSource = path.join(dir, "background.ts");
          const cssSource = path.join(dir, "style.css");

          const bgEntry = `${name}__background`;
          const mtEntry = `${name}__main-thread`;
          const bgAsset = `.rspeedy/${name}/background.js`;
          const mtAsset = `.rspeedy/${name}/main-thread.js`;
          const hasBackground = fs.existsSync(bgSource);

          // Each example entry always has main-thread code and may opt into a
          // background thread by adding a sibling background.ts file.
          if (hasBackground) {
            chain.entry(bgEntry).add({
              import: bgSource,
              filename: bgAsset,
            });
          }

          chain.entry(mtEntry).add({
            import: [mtSource, cssSource],
            filename: mtAsset,
          });

          chain.plugin(`template-${name}`).use(LynxTemplatePlugin, [
            {
              ...LynxTemplatePlugin.defaultOptions,
              filename: `${name}.bundle`,
              intermediate: `.rspeedy/${name}`,
              chunks: hasBackground ? [bgEntry, mtEntry] : [mtEntry],
              dsl: "react_nodiff",
              targetSdkVersion: LYNX_ENGINE_VERSION,
              cssPlugins: [],
            },
          ]);

          if (hasBackground) {
            // Background chunks run in the JavaScript thread and need the Lynx
            // runtime wrapper, while main-thread chunks are encoded as lepus.
            chain.plugin(`runtime-wrapper-${name}`).use(
              RuntimeWrapperWebpackPlugin,
              [
                {
                  targetSdkVersion: LYNX_ENGINE_VERSION,
                  test: new RegExp(`${name}/background\\.js$`),
                },
              ],
            );
          }
        }

        chain.plugin("encode").use(LynxEncodePlugin, []);

        chain.plugin("before-encode").use({
          apply(compiler: Rspack.Compiler) {
            compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
              // `@lynx-js/template-webpack-plugin` and rspeedy pin different
              // `@rspack/core` versions, so their `Compilation` types aren't
              // mutually assignable. The object is one and the same at runtime;
              // reach the hooks through the type the plugin itself expects.
              const hooks = LynxTemplatePlugin.getLynxTemplatePluginHooks(
                compilation as unknown as LynxCompilation,
              );
              hooks.beforeEncode.tap(PLUGIN_NAME, (args) => {
                // The default grouping only routes a chunk to lepus (main thread)
                // when its asset carries `lynx:main-thread`. These hand-built
                // entries don't, so main-thread JS lands in `manifest` and lepus
                // stays empty. Re-map it here: background JS to manifest, the
                // main-thread chunk to lepus. CSS is already grouped correctly.
                const pageName = args.intermediate ? path.basename(args.intermediate) : "";
                if (!pageName) return args;

                const bgAsset = `.rspeedy/${pageName}/background.js`;
                const mtAsset = `.rspeedy/${pageName}/main-thread.js`;

                const backgroundAsset = compilation.getAsset(bgAsset);
                const mainThreadAsset = compilation.getAsset(mtAsset);

                if (!mainThreadAsset) {
                  return args;
                }

                args.encodeData.compilerOptions.targetSdkVersion = LYNX_ENGINE_VERSION;
                args.encodeData.compilerOptions.enableEventRefactor = true;

                // Route tap/gesture events through the refactored main-thread
                // path so `__AddEventListener` handlers fire. This page-config
                // flag was dropped from `@lynx-js/config-rsbuild-plugin` 0.2.0's
                // schema, so set it on the page config directly.
                args.encodeData.sourceContent.config.enableEventHandleRefactor = true;

                args.encodeData.manifest = backgroundAsset
                  ? {
                    [backgroundAsset.name]: backgroundAsset.source
                      .source()
                      .toString(),
                  }
                  : {};
                args.encodeData.lepusCode = {
                  root: mainThreadAsset,
                  chunks: [],
                  filename: mainThreadAsset.name,
                };

                return args;
              });
            });
          },
        });
      });
    },
  };
}
