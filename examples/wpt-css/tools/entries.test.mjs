import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { discoverEntries } from "./entries.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const migration = JSON.parse(readFileSync(path.join(root, "migration.json"), "utf8"));

test("all source cards have a build entry and nonvisual manifests", () => {
  const { entries, manifests } = discoverEntries(root);
  assert.equal(Object.keys(entries).length, migration.cardCount);
  assert.equal(Object.keys(manifests).length, 145);
  assert.deepEqual(
    Object.values(entries).map((file) => path.relative(root, file).split(path.sep).join("/")).sort(),
    [...migration.cards].sort(),
  );
});

test("ReactLynx cards do not carry unused legacy index.json manifests", () => {
  for (const card of migration.cards) {
    assert.equal(existsSync(path.join(root, path.dirname(card), "index.json")), false, card);
  }
});

test("every registered source visual name retains its original path", () => {
  const { entries } = discoverEntries(root);
  for (const [name, file] of Object.entries(migration.visualEntries)) {
    assert.equal(entries[name], path.resolve(root, file), name);
  }
  const selected = discoverEntries(root, "t31-color-currentcolor-b");
  assert.equal(
    selected.entries["t31-color-currentcolor-b"],
    path.join(root, "tests/css-color/t31-color-currentColor-b/index.tsx"),
  );
});

test("single visual and nonvisual selection selects their own custom sections", () => {
  const { entries, manifests } = discoverEntries(root, "flex-direction,css-cascade-layer-basic");
  assert.deepEqual(Object.keys(entries), ["flex-direction", "css-cascade-layer-basic"]);
  assert.deepEqual(Object.keys(manifests), ["css-cascade-layer-basic"]);
});

test("unsafe, duplicate, empty and unknown selections fail closed", () => {
  for (const selected of ["", "../flex-direction", "missing", "flex-direction,flex-direction"]) {
    assert.throws(() => discoverEntries(root, selected), /unknown, empty, or duplicate/);
  }
});
