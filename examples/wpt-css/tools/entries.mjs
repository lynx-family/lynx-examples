import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

/** Preserve registered visual names and nonvisual manifest names. */
export function discoverEntries(root, selectedTests) {
  const entries = {};
  const manifests = {};
  const migration = JSON.parse(readFileSync(path.join(root, "migration.json"), "utf8"));
  const visualNames = new Map(
    Object.entries(migration.visualEntries).map(([name, file]) => [path.resolve(root, file), name]),
  );
  function discover(directory) {
    for (const item of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(directory, item.name);
      if (item.isDirectory() && item.name !== "evidence") discover(file);
      else if (item.name === "index.tsx") {
        const manifest = path.join(directory, "generated/manifest.json");
        const name = existsSync(manifest)
          ? JSON.parse(readFileSync(manifest, "utf8")).entry
          : visualNames.get(file) ?? path.basename(directory).replaceAll(".", "-");
        if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(name) || Object.hasOwn(entries, name)) {
          throw new Error(`Invalid or duplicate build entry: ${name}`);
        }
        entries[name] = file;
        if (existsSync(manifest)) manifests[name] = manifest;
      }
    }
  }
  discover(path.join(root, "tests"));
  if (selectedTests !== undefined) {
    const names = selectedTests.split(",");
    if (new Set(names).size !== names.length || names.some((name) => !Object.hasOwn(entries, name))) {
      throw new Error(`LYNX_WPT_TESTS selects an unknown, empty, or duplicate test: ${selectedTests}`);
    }
    return {
      entries: Object.fromEntries(names.map((name) => [name, entries[name]])),
      manifests: Object.fromEntries(
        names.filter((name) => Object.hasOwn(manifests, name)).map((name) => [name, manifests[name]]),
      ),
    };
  }
  return { entries, manifests };
}
