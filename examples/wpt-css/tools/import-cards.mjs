import { execFileSync } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Reproducible source import, not another HTML-to-React adaptation.
const revision = "91460074c1cc2e1c465d89b03a4b299edff60ce3";
const destination = fileURLToPath(new URL("../", import.meta.url));
const source = process.argv[2];
if (!source) throw new Error("Usage: node tools/import-cards.mjs <lynx-wpt-checkout>");
const sourceRoot = path.resolve(source);
const actualRevision = execFileSync("git", ["rev-parse", "HEAD"], {
  cwd: sourceRoot,
  encoding: "utf8",
}).trim();
if (actualRevision !== revision) throw new Error(`Expected source revision ${revision}, got ${actualRevision}`);

const sourceFiles = execFileSync("git", ["ls-files", "-z", "--", "tests", "tools/nonvisual-runtime", "tools/plugins"], {
  cwd: sourceRoot,
  encoding: "utf8",
}).split("\0").filter(Boolean).filter((file) => !file.split("/").includes("evidence"));
const cardPaths = new Set(sourceFiles.filter((file) => file.endsWith("/index.tsx")));
const legacyManifests = sourceFiles.filter((file) =>
  file.endsWith("/index.json") && cardPaths.has(file.replace(/index\.json$/, "index.tsx"))
);
const files = sourceFiles.filter((file) => !legacyManifests.includes(file));
const cardCount = files.filter((file) => file.endsWith("/index.tsx")).length;
if (cardCount !== 1000) throw new Error(`Expected 1000 cards, got ${cardCount}`);

const config = await readFile(path.join(sourceRoot, "lynx.config.ts"), "utf8");
const visualSection = config.match(/const visualEntries[^=]*= \{([\s\S]*?)\n\};/)?.[1];
if (!visualSection) throw new Error("Unable to extract the source visual entry map");
execFileSync("git", [
  "diff",
  "--exit-code",
  "HEAD",
  "--",
  "tests",
  "tools/nonvisual-runtime",
  "tools/plugins",
  "lynx.config.ts",
], {
  cwd: sourceRoot,
});
// Preflight all bytes before creating any destination files.
const inputs = await Promise.all(files.map(async (file) => [file, await readFile(path.join(sourceRoot, file))]));
for (const [file, bytes] of inputs) {
  if (bytes.subarray(0, 100).toString().startsWith("version https://git-lfs.github.com/spec/v1")) {
    throw new Error(`Unmaterialized LFS support asset: ${file}. Run git lfs pull in the source checkout.`);
  }
}

// Synchronize generated outputs from earlier imports. ReactLynx entries do not
// consume the old card JSON; only generated/manifest.json is a runtime input.
for (const file of legacyManifests) {
  await rm(path.join(destination, file), { force: true });
}

for (const [file, bytes] of inputs) {
  if (file.split("/").includes("reference") || /-ref\.[^/]+$/.test(file)) {
    throw new Error(`Match-reference hygiene drift: ${file}`);
  }
  let output = bytes;
  if (/\.(ts|tsx|mjs)$/.test(file)) {
    let text = bytes.toString().replaceAll("@byted-lynx/react", "@lynx-js/react");
    // initGlobalEnv is a main-thread initialization dependency, not test logic.
    if (file.endsWith("/processor.ts")) {
      text = text.replaceAll("@byted-lynx/worklet-common", "../../../tools/nonvisual-runtime/main-thread-env.js");
    } else if (file === "tools/nonvisual-runtime/templates.ts") {
      text = text.replace(
        "import { initGlobalEnv } from '@byted-lynx/worklet-common';",
        "import { initGlobalEnv } from ${json(config.runtimeImportPath.replace(/index\\.js$/, 'main-thread-env.js'))};",
      );
    } else if (file === "tools/nonvisual-runtime/runtime.test.ts") {
      text = text.replace(
        "'@byted-lynx\\/worklet-common'",
        `["']\\.\\.\\/\\.\\.\\/\\.\\.\\/tools\\/nonvisual-runtime\\/main-thread-env\\.js["']`,
      );
    }
    output = Buffer.from(text);
  }
  const target = path.join(destination, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, output);
}

// Keep the historical visual names (including aliases) without retaining a
// second hand-maintained entry list in the new config.
const visualEntries = Object.fromEntries(
  [...visualSection.matchAll(/'([^']+)': '([^']+)'/g)].map((match) => [match[1], match[2]]),
);
const cards = files.filter((file) => file.endsWith("/index.tsx"));
await writeFile(
  path.join(destination, "migration.json"),
  JSON.stringify(
    {
      source: "lynx/lynx-wpt",
      branch: "migrate/react-lynx-tsx-css",
      revision,
      cardCount,
      cards,
      visualEntries,
      excluded: ["tests/**/evidence/**", "tests/**/index.json", "Android runner", "upstream HTML cache"],
    },
    null,
    2,
  ) + "\n",
);
console.log(`Imported ${cardCount} cards and ${files.length} source/support files from ${revision}`);
