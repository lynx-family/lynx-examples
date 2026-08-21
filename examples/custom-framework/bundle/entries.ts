import path from "node:path";

import type { BundlerChain, ThreadEntry } from "./build-types.js";
import {
  BACKGROUND_ENTRY_SUFFIX,
  FRAMEWORK_LAYERS,
  INTERMEDIATE_DIRECTORY,
  MAIN_THREAD_ENTRY_SUFFIX,
} from "./constants.js";

export interface ConfiguredEntries {
  threadEntries: ThreadEntry[];
}

function getEntryImports(values: unknown[]): string[] {
  const imports: string[] = [];
  for (const value of values) {
    if (typeof value === "string") {
      imports.push(value);
      continue;
    }
    if (Array.isArray(value)) {
      imports.push(
        ...value.filter((item): item is string => typeof item === "string"),
      );
      continue;
    }
    if (!value || typeof value !== "object" || !("import" in value)) continue;
    const entryImport = value.import;
    if (typeof entryImport === "string") imports.push(entryImport);
    if (Array.isArray(entryImport)) {
      imports.push(
        ...entryImport.filter((item): item is string => typeof item === "string"),
      );
    }
  }
  return imports;
}

export function configureThreadEntries(
  chain: BundlerChain,
  options: {
    projectRoot: string;
  },
): ConfiguredEntries {
  const rawEntries = chain.entryPoints.entries() ?? {};
  const sourceEntries: Array<{
    entryName: string;
    sourcePath: string;
  }> = [];

  for (const [entryName, entry] of Object.entries(rawEntries)) {
    if (!/^[A-Za-z0-9_-]+$/u.test(entryName)) {
      throw new Error(`[pluginMyLynx] Invalid entry name: ${entryName}`);
    }
    const imports = getEntryImports(entry.values());
    if (imports.length !== 1 || !imports[0]!.endsWith(".lynx")) {
      throw new Error(
        `[pluginMyLynx] Entry ${entryName} must contain exactly one .lynx file.`,
      );
    }

    const sourcePath = path.isAbsolute(imports[0]!)
      ? imports[0]!
      : path.resolve(options.projectRoot, imports[0]!);
    sourceEntries.push({ entryName, sourcePath });
  }

  const threadEntries: ThreadEntry[] = [];
  chain.entryPoints.clear();
  for (const { entryName, sourcePath } of sourceEntries) {
    const backgroundEntry = `${entryName}${BACKGROUND_ENTRY_SUFFIX}`;
    const mainThreadEntry = `${entryName}${MAIN_THREAD_ENTRY_SUFFIX}`;
    const mainThreadAsset = path.posix.join(
      INTERMEDIATE_DIRECTORY,
      entryName,
      "main-thread.js",
    );

    chain.entry(backgroundEntry).add({
      filename: path.posix.join(
        INTERMEDIATE_DIRECTORY,
        entryName,
        "background.js",
      ),
      import: sourcePath,
      layer: FRAMEWORK_LAYERS.background,
    });
    chain.entry(mainThreadEntry).add({
      filename: mainThreadAsset,
      import: sourcePath,
      layer: FRAMEWORK_LAYERS.mainThread,
    });
    threadEntries.push({
      backgroundEntry,
      entryName,
      mainThreadAsset,
      mainThreadEntry,
    });
  }

  return { threadEntries };
}
