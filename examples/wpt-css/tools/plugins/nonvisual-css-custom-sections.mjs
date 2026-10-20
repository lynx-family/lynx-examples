import { createHash } from "node:crypto";
import { realpath as nodeRealpath } from "node:fs";
import path from "node:path";

import { cssChunksToMap } from "@lynx-js/css-serializer";
import { LynxTemplatePlugin } from "@lynx-js/template-webpack-plugin";

const PLUGIN_NAME = "NonvisualCSSCustomSectionsPlugin";
const PROFILE = "dynamic-stylesheet-computed-style-v1";
const SHA256 = /^[a-f0-9]{64}$/;
const ENTRY_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const SECTION_KEY = /^[A-Za-z][A-Za-z0-9_-]*$/;
const DANGEROUS_KEYS = new Set(["__proto__", "constructor", "prototype"]);

/**
 * Inject CSS custom sections described by generated nonvisual manifests.
 *
 * `entries` maps an Rspeedy entry name to its manifest. A manifest has schema
 * version 1, the dynamic-stylesheet-computed-style-v1 profile, an exact entry
 * name, and ordered cases with `sectionKey`, `cssFile`, and `cssSha256`.
 */
export class NonvisualCSSCustomSectionsPlugin {
  #options;
  #compilations = new WeakMap();

  constructor({ entries, cssPlugins = [] }) {
    if (
      !entries || typeof entries !== "object" || Array.isArray(entries)
      || Object.entries(entries).some(([entry, manifestPath]) =>
        !isSafeEntryName(entry)
        || typeof manifestPath !== "string" || !manifestPath
      )
    ) {
      throw new TypeError(`${PLUGIN_NAME} requires entries with safe entry names: { [entryName]: manifestPath }.`);
    }
    this.#options = { entries, cssPlugins };
  }

  apply(compiler) {
    const manifests = new Map(
      Object.entries(this.#options.entries)
        .map(([entry, manifestPath]) => [entry, path.resolve(compiler.context, manifestPath)]),
    );
    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      const state = { manifests: new Map(), css: new Map() };
      this.#compilations.set(compilation, state);
      for (const manifestPath of manifests.values()) compilation.fileDependencies.add(manifestPath);

      const hooks = LynxTemplatePlugin.getLynxTemplatePluginHooks(compilation);
      hooks.beforeEncode.tapPromise(PLUGIN_NAME, async (args) => {
        const entry = configuredEntry(args, manifests);
        // The plugin may be installed globally. Visual entries not in this
        // explicit map intentionally retain the ordinary TTML pipeline.
        if (!entry) return args;
        const manifestPath = manifests.get(entry);

        const loadedManifest = await loadManifest(state, compiler, manifestPath);
        compilation.fileDependencies.add(loadedManifest.path);
        const { manifest } = loadedManifest;
        if (manifest.entry !== entry) {
          throw buildError(compiler, `manifest entry "${manifest.entry}" does not match configured entry "${entry}".`);
        }
        const cases = await validateCases(compiler, manifest.cases, loadedManifest.path);
        const existing = args.encodeData.customSections ?? {};
        const additions = Object.create(null);
        const mappedCssFiles = new Set();

        for (const item of cases) {
          if (Object.hasOwn(existing, item.sectionKey)) {
            throw buildError(
              compiler,
              `custom section key collision: "${item.sectionKey}" is already present for entry "${entry}".`,
            );
          }
          if (Object.hasOwn(additions, item.sectionKey)) {
            throw buildError(compiler, `duplicate custom section key "${item.sectionKey}" for entry "${entry}".`);
          }
          if (mappedCssFiles.has(item.absolutePath)) {
            throw buildError(compiler, `duplicate CSS mapping for "${item.cssFile}" in entry "${entry}".`);
          }
          mappedCssFiles.add(item.absolutePath);

          const css = await loadCss(state, compiler, compilation, item);
          const { cssMap } = cssChunksToMap(
            [css],
            this.#options.cssPlugins,
            args.encodeData.compilerOptions.enableCSSSelector,
          );
          const cssIds = Object.keys(cssMap);
          if (cssIds.length !== 1 || cssIds[0] !== "0") {
            throw buildError(
              compiler,
              `CSS file "${item.cssFile}" must produce exactly the common CSS mapping (0), received [${
                cssIds.join(", ")
              }].`,
            );
          }
          additions[item.sectionKey] = { encoding: "CSS", content: { ruleList: cssMap[0] } };
        }
        args.encodeData.customSections = { ...existing, ...additions };
        return args;
      });
    });
  }
}

function configuredEntry(args, manifests) {
  const matches = [
    ...new Set(
      args.chunkGroups.map((group) => group?.name)
        .filter((name) => typeof name === "string" && manifests.has(name)),
    ),
  ];
  if (matches.length > 1) {
    throw new Error(`${PLUGIN_NAME} found multiple configured entries in chunk groups: ${matches.join(", ")}.`);
  }
  return matches[0];
}

function isSafeEntryName(value) {
  return typeof value === "string" && ENTRY_NAME.test(value) && !DANGEROUS_KEYS.has(value);
}

function isSafeSectionKey(value) {
  return typeof value === "string" && SECTION_KEY.test(value) && !DANGEROUS_KEYS.has(value);
}

async function loadManifest(state, compiler, manifestPath) {
  if (!state.manifests.has(manifestPath)) {
    state.manifests.set(
      manifestPath,
      (async () => {
        const [contextPath, resolvedManifestPath] = await Promise.all([
          realpath(compiler, compiler.context),
          realpath(compiler, manifestPath),
        ]);
        if (!isWithin(contextPath, resolvedManifestPath)) {
          throw buildError(compiler, `manifest path escapes compiler context: "${manifestPath}".`);
        }
        const source = await readFile(compiler, resolvedManifestPath);
        return { manifest: parseManifest(compiler, resolvedManifestPath, source), path: resolvedManifestPath };
      })(),
    );
  }
  return state.manifests.get(manifestPath);
}

async function loadCss(state, compiler, compilation, item) {
  compilation.fileDependencies.add(item.absolutePath);
  if (!state.css.has(item.absolutePath)) {
    state.css.set(item.absolutePath, readFile(compiler, item.absolutePath));
  }
  const source = await state.css.get(item.absolutePath);
  // Cache the bytes for this compilation, not a previous entry's integrity
  // decision. Every manifest case remains independently bound to those bytes.
  if (createHash("sha256").update(source).digest("hex") !== item.cssSha256) {
    throw buildError(compiler, `SHA-256 mismatch for "${item.cssFile}"; generated manifest is stale.`);
  }
  return source.toString();
}

function parseManifest(compiler, manifestPath, source) {
  let manifest;
  try {
    manifest = JSON.parse(source.toString());
  } catch (error) {
    throw buildError(compiler, `invalid JSON manifest "${manifestPath}": ${error.message}`);
  }
  if (
    !manifest || manifest.schemaVersion !== 1 || manifest.profile !== PROFILE
    || typeof manifest.entry !== "string" || !Array.isArray(manifest.cases)
  ) {
    throw buildError(compiler, `manifest "${manifestPath}" is not a ${PROFILE} manifest.`);
  }
  return manifest;
}

async function validateCases(compiler, cases, manifestPath) {
  if (cases.length === 0) throw buildError(compiler, "manifest cases must not be empty.");
  const ordinals = new Set();
  const manifestDirectory = path.dirname(manifestPath);
  const normalized = await Promise.all(cases.map(async (item, index) => {
    if (
      !item || !Number.isInteger(item.ordinal) || item.ordinal < 1
      || typeof item.cssFile !== "string" || !item.cssFile
      || typeof item.cssSha256 !== "string" || !SHA256.test(item.cssSha256)
    ) {
      throw buildError(
        compiler,
        `manifest case ${index} must have ordinal, sectionKey, cssFile, and lowercase cssSha256.`,
      );
    }
    if (!isSafeSectionKey(item.sectionKey)) {
      throw buildError(
        compiler,
        `manifest case ${index} section key must be a safe single-segment stylesheet identifier.`,
      );
    }
    if (ordinals.has(item.ordinal)) throw buildError(compiler, `duplicate case ordinal ${item.ordinal}.`);
    ordinals.add(item.ordinal);
    if (path.isAbsolute(item.cssFile)) {
      throw buildError(compiler, `manifest case ${index} CSS path must be relative: "${item.cssFile}".`);
    }
    const unresolvedPath = path.resolve(manifestDirectory, item.cssFile);
    if (!isWithin(manifestDirectory, unresolvedPath)) {
      throw buildError(compiler, `manifest case ${index} CSS path escapes its manifest directory: "${item.cssFile}".`);
    }
    const absolutePath = await realpath(compiler, unresolvedPath);
    if (!isWithin(manifestDirectory, absolutePath)) {
      throw buildError(compiler, `manifest case ${index} CSS path escapes its manifest directory: "${item.cssFile}".`);
    }
    return { ...item, absolutePath };
  }));
  normalized.sort((left, right) => left.ordinal - right.ordinal);
  normalized.forEach((item, index) => {
    if (item.ordinal !== index + 1) {
      throw buildError(compiler, "manifest case ordinals must be contiguous starting at 1.");
    }
  });
  return normalized;
}

function isWithin(parentPath, candidatePath) {
  const relativePath = path.relative(parentPath, candidatePath);
  return relativePath !== ".." && !relativePath.startsWith(`..${path.sep}`) && !path.isAbsolute(relativePath);
}

function realpath(compiler, filePath) {
  const implementation = compiler.inputFileSystem?.realpath ?? nodeRealpath;
  return new Promise((resolve, reject) =>
    implementation.call(compiler.inputFileSystem, filePath, (error, resolvedPath) => {
      if (error) reject(buildError(compiler, `failed to resolve "${filePath}": ${error.message}`));
      else resolve(resolvedPath);
    })
  );
}

function readFile(compiler, filePath) {
  if (!compiler.inputFileSystem?.readFile) {
    throw buildError(compiler, "the Rspack input file system is not available.");
  }
  return new Promise((resolve, reject) =>
    compiler.inputFileSystem.readFile(filePath, (error, content) => {
      if (error) reject(buildError(compiler, `failed to read "${filePath}": ${error.message}`));
      else resolve(content ?? Buffer.alloc(0));
    })
  );
}

function buildError(compiler, message) {
  const ErrorType = compiler.webpack?.WebpackError ?? Error;
  return new ErrorType(`${PLUGIN_NAME}: ${message}`);
}

/** Rsbuild/Rspeedy wrapper for use in `lynx.config.ts` plugins. */
export function pluginNonvisualCSSCustomSections(options) {
  return {
    name: "nonvisual-css-custom-sections",
    setup(api) {
      api.modifyBundlerChain((chain) => {
        chain.plugin(PLUGIN_NAME).use(NonvisualCSSCustomSectionsPlugin, [options]);
      });
    },
  };
}
