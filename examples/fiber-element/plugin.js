import path from "node:path";

import { RuntimeWrapperWebpackPlugin } from "@lynx-js/runtime-wrapper-webpack-plugin";
import { LynxEncodePlugin, LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";

const PLUGIN_NAME = "template-webpack";

export function pluginTemplateWebpack() {
  return {
    name: PLUGIN_NAME,
    setup(api) {
      api.modifyBundlerChain((chain) => {
        const rawEntries = Object.entries(chain.entryPoints.entries() ?? {});
        chain.entryPoints.clear();

        for (const [name, entry] of rawEntries) {
          const first = entry.values()?.[0];
          const mtSource = typeof first === "string" ? first : first?.import;
          if (!mtSource) continue;

          const dir = path.dirname(mtSource);
          const bgSource = path.join(dir, "background.ts");
          const cssSource = path.join(dir, "style.css");

          const bgEntry = `${name}__background`;
          const mtEntry = `${name}__main-thread`;
          const bgAsset = `.rspeedy/${name}/background.js`;
          const mtAsset = `.rspeedy/${name}/main-thread.js`;

          chain.entry(bgEntry).add({
            import: bgSource,
            filename: bgAsset,
          });

          chain.entry(mtEntry).add({
            import: [mtSource, cssSource],
            filename: mtAsset,
          });

          chain.plugin(`template-${name}`).use(LynxTemplatePlugin, [
            {
              ...LynxTemplatePlugin.defaultOptions,
              filename: `${name}.bundle`,
              intermediate: `.rspeedy/${name}`,
              chunks: [bgEntry, mtEntry],
              dsl: "react_nodiff",
              cssPlugins: [],
            },
          ]);

          chain.plugin(`runtime-wrapper-${name}`).use(
            RuntimeWrapperWebpackPlugin,
            [
              {
                targetSdkVersion: "3.2",
                test: new RegExp(`${name}/background\\.js$`),
              },
            ],
          );
        }

        chain.plugin("encode").use(LynxEncodePlugin, []);

        chain.plugin("before-encode").use({
          apply(compiler) {
            compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
              const hooks = LynxTemplatePlugin.getLynxTemplatePluginHooks(compilation);
              hooks.beforeEncode.tap(PLUGIN_NAME, (args) => {
                const firstEntry = args.entryNames?.[0] ?? "";
                const pageName = firstEntry.replace(/__.*$/, "");
                if (!pageName) return args;

                const bgAsset = `.rspeedy/${pageName}/background.js`;
                const mtAsset = `.rspeedy/${pageName}/main-thread.js`;
                const mtEntry = `${pageName}__main-thread`;

                const backgroundAsset = compilation.getAsset(bgAsset);
                const mainThreadAsset = compilation.getAsset(mtAsset);
                const cssChunk = compilation.namedChunks.get(mtEntry);
                const cssAssets = [...(cssChunk?.files ?? [])]
                  .filter((file) => file.endsWith(".css"))
                  .map((file) => compilation.getAsset(file))
                  .filter((asset) => asset !== undefined);

                if (!backgroundAsset || !mainThreadAsset) {
                  return args;
                }

                args.encodeData.manifest = {
                  [backgroundAsset.name]: backgroundAsset.source
                    .source()
                    .toString(),
                };
                args.encodeData.lepusCode = {
                  root: mainThreadAsset,
                  chunks: [],
                  filename: mainThreadAsset.name,
                };
                args.encodeData.css = {
                  ...LynxTemplatePlugin.convertCSSChunksToMap(
                    cssAssets.map((asset) => asset.source.source().toString()),
                    [],
                    Boolean(
                      args.encodeData.compilerOptions.enableCSSSelector,
                    ),
                  ),
                  chunks: [],
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
