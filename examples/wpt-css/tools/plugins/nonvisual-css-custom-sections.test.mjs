import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, realpath, realpathSync } from "node:fs";
import { mkdtemp, readFile as readFileAsync, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  NonvisualCSSCustomSectionsPlugin,
  pluginNonvisualCSSCustomSections,
} from "./nonvisual-css-custom-sections.mjs";

const digest = (value) => createHash("sha256").update(value).digest("hex");

async function setup(manifests) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "nonvisual-css-section-"));
  for (const manifest of manifests) {
    for (const item of manifest.cases) {
      await writeFile(path.join(directory, item.cssFile), item.css, "utf8");
      item.cssSha256 = digest(item.css);
      delete item.css;
    }
    await writeFile(
      path.join(directory, `${manifest.entry}.json`),
      JSON.stringify({
        schemaVersion: 1,
        profile: "dynamic-stylesheet-computed-style-v1",
        source: {},
        target: {},
        ...manifest,
      }),
      "utf8",
    );
  }
  return directory;
}

function hookFor(directory, entries) {
  let compilation;
  const compiler = {
    context: directory,
    inputFileSystem: { readFile, realpath },
    webpack: { WebpackError: class WebpackError extends Error {} },
    hooks: {
      thisCompilation: {
        tap(_name, callback) {
          compilation = { fileDependencies: new Set() };
          callback(compilation);
        },
      },
    },
  };
  new NonvisualCSSCustomSectionsPlugin({ entries }).apply(compiler);
  return { compilation, hook: compilation[Symbol.for("@lynx-js/template-webpack-plugin/hooks")].beforeEncode };
}

function args(entry, customSections = {}) {
  return {
    chunkGroups: [{ name: entry }],
    encodeData: { compilerOptions: { enableCSSSelector: true }, customSections },
  };
}

test("maps only current entry CSS and does not leak across two entries", async (t) => {
  const directory = await setup([
    {
      entry: "alpha",
      cases: [{ ordinal: 1, sectionKey: "alpha-css", cssFile: "alpha.css", css: ".alpha { color: red; }" }],
    },
    {
      entry: "beta",
      cases: [{ ordinal: 1, sectionKey: "beta-css", cssFile: "beta.css", css: ".beta { color: blue; }" }],
    },
  ]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const { compilation, hook } = hookFor(directory, { alpha: "alpha.json", beta: "beta.json" });
  const alpha = await hook.promise(args("alpha"));
  const beta = await hook.promise(args("beta"));
  assert.deepEqual(Object.keys(alpha.encodeData.customSections), ["alpha-css"]);
  assert.deepEqual(Object.keys(beta.encodeData.customSections), ["beta-css"]);
  assert(compilation.fileDependencies.has(realpathSync(path.join(directory, "alpha.css"))));
  assert(compilation.fileDependencies.has(realpathSync(path.join(directory, "beta.css"))));
});

test("preserves existing custom sections", async (t) => {
  const directory = await setup([{
    entry: "alpha",
    cases: [
      { ordinal: 2, sectionKey: "second-css", cssFile: "second.css", css: ".second { color: red; }" },
      { ordinal: 1, sectionKey: "first-css", cssFile: "first.css", css: ".first { color: blue; }" },
    ],
  }]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const { hook } = hookFor(directory, { alpha: "alpha.json" });
  const result = await hook.promise(args("alpha", { existing: { content: "kept" } }));
  assert.equal(result.encodeData.customSections.existing.content, "kept");
  assert.deepEqual(Object.keys(result.encodeData.customSections), ["existing", "first-css", "second-css"]);
  assert.equal(result.encodeData.customSections["first-css"].encoding, "CSS");
});

test("fails closed for duplicate mappings, collisions, stale hashes, and bad entry", async (t) => {
  const directory = await setup([{
    entry: "alpha",
    cases: [
      { ordinal: 1, sectionKey: "alpha-css", cssFile: "alpha.css", css: ".alpha { color: red; }" },
      { ordinal: 2, sectionKey: "duplicate", cssFile: "alpha.css", css: ".alpha { color: red; }" },
    ],
  }]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const { hook } = hookFor(directory, { alpha: "alpha.json" });
  const visual = args("visual");
  assert.equal(await hook.promise(visual), visual);
  const unrelated = { ...args("visual"), chunkGroups: [{ name: "visual" }, { name: "other" }] };
  assert.equal(await hook.promise(unrelated), unrelated);
  await assert.rejects(
    hookFor(directory, { alpha: "alpha.json", beta: "alpha.json" }).hook.promise({
      ...args("alpha"),
      chunkGroups: [{ name: "alpha" }, { name: "beta" }],
    }),
    /multiple configured entries/,
  );
  await assert.rejects(hook.promise(args("alpha")), /duplicate CSS mapping/);

  const manifestPath = path.join(directory, "alpha.json");
  const manifest = JSON.parse(await readFileAsync(manifestPath, "utf8"));
  manifest.cases.splice(1, 1);
  await writeFile(manifestPath, JSON.stringify(manifest), "utf8");
  await assert.rejects(
    hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha", { "alpha-css": {} })),
    /key collision/,
  );
  manifest.entry = "wrong";
  await writeFile(manifestPath, JSON.stringify(manifest), "utf8");
  await assert.rejects(
    hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha")),
    /does not match configured entry/,
  );
  manifest.entry = "alpha";
  manifest.cases[0].cssSha256 = "0".repeat(64);
  await writeFile(manifestPath, JSON.stringify(manifest), "utf8");
  await assert.rejects(hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha")), /SHA-256 mismatch/);
});

test("validates each entry hash for cached shared CSS in either encode order", async (t) => {
  const directory = await setup([
    {
      entry: "alpha",
      cases: [{ ordinal: 1, sectionKey: "alpha-css", cssFile: "shared.css", css: ".shared { color: red; }" }],
    },
    {
      entry: "beta",
      cases: [{ ordinal: 1, sectionKey: "beta-css", cssFile: "shared.css", css: ".shared { color: red; }" }],
    },
  ]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const betaManifestPath = path.join(directory, "beta.json");
  const betaManifest = JSON.parse(await readFileAsync(betaManifestPath, "utf8"));
  betaManifest.cases[0].cssSha256 = "0".repeat(64);
  await writeFile(betaManifestPath, JSON.stringify(betaManifest), "utf8");

  const entries = { alpha: "alpha.json", beta: "beta.json" };
  const alphaThenBeta = hookFor(directory, entries).hook;
  await alphaThenBeta.promise(args("alpha"));
  await assert.rejects(alphaThenBeta.promise(args("beta")), /SHA-256 mismatch/);

  const betaThenAlpha = hookFor(directory, entries).hook;
  await assert.rejects(betaThenAlpha.promise(args("beta")), /SHA-256 mismatch/);
  await betaThenAlpha.promise(args("alpha"));
});

test("rejects unsafe stylesheet section keys and entry names", async (t) => {
  const directory = await setup([{
    entry: "alpha",
    cases: [
      { ordinal: 1, sectionKey: "safe-key", cssFile: "a.css", css: ".a { color: red; }" },
    ],
  }]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const manifestPath = path.join(directory, "alpha.json");
  const manifest = JSON.parse(await readFileAsync(manifestPath, "utf8"));
  for (const sectionKey of ["__proto__", "constructor"]) {
    manifest.cases[0].sectionKey = sectionKey;
    await writeFile(manifestPath, JSON.stringify(manifest), "utf8");
    await assert.rejects(
      hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha")),
      /safe single-segment stylesheet identifier/,
    );
  }
  assert.equal({}.polluted, undefined);
  assert.throws(
    () => new NonvisualCSSCustomSectionsPlugin({ entries: { constructor: "alpha.json" } }),
    /safe entry names/,
  );
  assert.throws(
    () => new NonvisualCSSCustomSectionsPlugin({ entries: { "../alpha": "alpha.json" } }),
    /safe entry names/,
  );
  const protoEntry = Object.create(null);
  protoEntry.__proto__ = "alpha.json";
  assert.throws(
    () => new NonvisualCSSCustomSectionsPlugin({ entries: protoEntry }),
    /safe entry names/,
  );
});

test("rejects empty, non-contiguous, absolute, escaping, and normalized duplicate CSS paths", async (t) => {
  const directory = await setup([{
    entry: "alpha",
    cases: [
      { ordinal: 1, sectionKey: "one", cssFile: "a.css", css: ".a { color: red; }" },
    ],
  }]);
  t.after(() => rm(directory, { recursive: true, force: true }));
  const manifestPath = path.join(directory, "alpha.json");
  const manifest = JSON.parse(await readFileAsync(manifestPath, "utf8"));
  const rejectManifest = async (update, pattern) => {
    update(manifest);
    await writeFile(manifestPath, JSON.stringify(manifest), "utf8");
    await assert.rejects(hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha")), pattern);
  };
  await rejectManifest((value) => {
    value.cases = [];
  }, /must not be empty/);
  manifest.cases = [{ ordinal: 2, sectionKey: "one", cssFile: "a.css", cssSha256: digest(".a { color: red; }") }];
  await rejectManifest(() => {}, /contiguous starting at 1/);
  manifest.cases[0].ordinal = 1;
  manifest.cases[0].cssFile = path.join(directory, "a.css");
  await rejectManifest(() => {}, /must be relative/);
  manifest.cases[0].cssFile = "../outside.css";
  await rejectManifest(() => {}, /escapes its manifest directory/);
  manifest.cases = [
    { ordinal: 1, sectionKey: "one", cssFile: "a.css", cssSha256: digest(".a { color: red; }") },
    { ordinal: 2, sectionKey: "two", cssFile: "./a.css", cssSha256: digest(".a { color: red; }") },
  ];
  await rejectManifest(() => {}, /duplicate CSS mapping/);
});

test("rejects manifest and CSS symlinks that escape their allowed boundaries", async (t) => {
  const directory = await setup([{
    entry: "alpha",
    cases: [
      { ordinal: 1, sectionKey: "one", cssFile: "a.css", css: ".a { color: red; }" },
    ],
  }]);
  const outside = await mkdtemp(path.join(os.tmpdir(), "nonvisual-css-section-outside-"));
  t.after(() =>
    Promise.all([rm(directory, { recursive: true, force: true }), rm(outside, { recursive: true, force: true })])
  );
  const externalCss = path.join(outside, "external.css");
  const externalManifest = path.join(outside, "alpha.json");
  await writeFile(externalCss, ".external { color: blue; }", "utf8");
  const manifest = JSON.parse(await readFileAsync(path.join(directory, "alpha.json"), "utf8"));
  manifest.cases[0].cssFile = "external.css";
  manifest.cases[0].cssSha256 = digest(".external { color: blue; }");
  await symlink(externalCss, path.join(directory, "external.css"));
  await writeFile(path.join(directory, "alpha.json"), JSON.stringify(manifest), "utf8");
  await assert.rejects(hookFor(directory, { alpha: "alpha.json" }).hook.promise(args("alpha")), /CSS path escapes/);

  await writeFile(externalManifest, JSON.stringify(manifest), "utf8");
  await symlink(externalManifest, path.join(directory, "linked.json"));
  await assert.rejects(
    hookFor(directory, { alpha: "linked.json" }).hook.promise(args("alpha")),
    /manifest path escapes compiler context/,
  );
});

test("exports an Rsbuild wrapper that registers the underlying Rspack plugin", () => {
  let handler;
  const plugin = pluginNonvisualCSSCustomSections({ entries: { alpha: "alpha.json" } });
  plugin.setup({
    modifyBundlerChain(value) {
      handler = value;
    },
  });
  const registration = {};
  handler({
    plugin(name) {
      registration.name = name;
      return {
        use(Type, args) {
          registration.Type = Type;
          registration.args = args;
        },
      };
    },
  });
  assert.equal(plugin.name, "nonvisual-css-custom-sections");
  assert.equal(registration.name, "NonvisualCSSCustomSectionsPlugin");
  assert.equal(registration.Type, NonvisualCSSCustomSectionsPlugin);
  assert.deepEqual(registration.args, [{ entries: { alpha: "alpha.json" } }]);
});
