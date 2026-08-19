import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { type Compiler, type LoaderContext, NormalModule } from "@rspack/core";

import type { BundlerChain, BundlerChainContext } from "./build-types.js";
import {
  compileLynxFile,
  generateLayerSource,
  generateStyles,
  type LynxIntermediateRepresentation,
} from "./compiler.js";
import { FRAMEWORK_LAYERS, PLUGIN_NAME } from "./constants.js";

const COMPILER_LOADER_API = Symbol.for("framework:my-lynx:compiler-loader");
const COMPILER_PLUGIN_NAME = "MyLynxCompilerPlugin";
const COMPILER_RULE_NAME = `${PLUGIN_NAME}:compiler`;
const COMPILER_USE_NAME = `${COMPILER_RULE_NAME}:loader`;
const COMPILER_LOADER_PATH = fileURLToPath(
  new URL("./compiler-loader.cjs", import.meta.url),
);
const CSS_QUERY = /^\?css$/u;

interface CompilerLoaderRequest {
  layer: string | undefined;
  resourceQuery: string;
  source: string;
}

type CompilerLoader = (request: CompilerLoaderRequest) => string;
type CompilerLoaderContext = LoaderContext & Record<symbol, CompilerLoader>;

function createCompilerPlugin(
  projectRoot: string,
): { apply(compiler: Compiler): void } {
  return {
    apply(compiler) {
      compiler.hooks.thisCompilation.tap(
        COMPILER_PLUGIN_NAME,
        (compilation) => {
          const intermediateBySource = new Map<
            string,
            { intermediate: LynxIntermediateRepresentation; source: string }
          >();

          NormalModule.getCompilationHooks(compilation).loader.tap(
            COMPILER_PLUGIN_NAME,
            (loaderContext) => {
              const context = loaderContext as CompilerLoaderContext;
              context[COMPILER_LOADER_API] = ({
                layer,
                resourceQuery,
                source,
              }) => {
                const sourcePath = context.resourcePath;
                const cached = intermediateBySource.get(sourcePath);
                const intermediate = cached?.source === source
                  ? cached.intermediate
                  : compileLynxFile({ projectRoot, source, sourcePath });
                if (cached?.source !== source) {
                  intermediateBySource.set(sourcePath, { intermediate, source });
                }

                if (CSS_QUERY.test(resourceQuery)) {
                  return generateStyles(intermediate.component);
                }

                if (
                  layer === FRAMEWORK_LAYERS.background
                  && intermediate.component.tasks.length > 0
                ) {
                  if (!existsSync(intermediate.actionPath)) {
                    context.addMissingDependency(intermediate.actionPath);
                    throw new Error(
                      `Missing action module: ${intermediate.actionPath}`,
                    );
                  }
                  context.addDependency(intermediate.actionPath);
                }

                return generateLayerSource(intermediate, layer);
              };
            },
          );
        },
      );
    },
  };
}

export function configureCompiler(
  chain: BundlerChain,
  context: BundlerChainContext,
  projectRoot: string,
): void {
  const sourceRule = chain.module
    .rule(COMPILER_RULE_NAME)
    .test(/\.lynx$/u);

  const cssMainRule = chain.module
    .rule(context.CHAIN_ID.RULE.CSS)
    .oneOf(context.CHAIN_ID.ONE_OF.CSS_MAIN);
  const cssUses = cssMainRule.uses.entries() ?? {};
  const cssRule = sourceRule
    .oneOf(`${COMPILER_RULE_NAME}:css`)
    .resourceQuery(CSS_QUERY)
    .issuerLayer(FRAMEWORK_LAYERS.mainThread)
    .merge(cssMainRule.entries());
  cssRule.uses.merge(cssUses);
  cssRule.use(COMPILER_USE_NAME).loader(COMPILER_LOADER_PATH);

  sourceRule
    .oneOf(`${COMPILER_RULE_NAME}:background`)
    .issuerLayer(FRAMEWORK_LAYERS.background)
    .use(COMPILER_USE_NAME)
    .loader(COMPILER_LOADER_PATH);
  sourceRule
    .oneOf(`${COMPILER_RULE_NAME}:main-thread`)
    .issuerLayer(FRAMEWORK_LAYERS.mainThread)
    .use(COMPILER_USE_NAME)
    .loader(COMPILER_LOADER_PATH);

  chain.plugin(COMPILER_PLUGIN_NAME).use(createCompilerPlugin(projectRoot));
}
