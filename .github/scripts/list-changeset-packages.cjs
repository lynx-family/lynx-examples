#!/usr/bin/env node

// Print the directories of publishable workspace packages that appear in the
// `releases` array of a `changeset status --output` JSON file. One path per
// line, relative to the repository root. Used by the pkg.pr.new workflow to
// publish only packages touched by a PR's changesets.
const { execSync } = require("node:child_process");
const { readFileSync } = require("node:fs");

function main() {
  const statusFile = process.argv[2] || ".changeset-status.json";
  const raw = readFileSync(statusFile, "utf8");
  const data = JSON.parse(raw);
  const releases = Array.isArray(data.releases) ? data.releases : [];
  // `releases` includes packages reached via the dependency graph with
  // `type: "none"` — those don't actually get a version bump, so skip them.
  const affected = new Set(
    releases
      .filter((r) => r?.type && r.type !== "none")
      .map((r) => r.name)
      .filter(Boolean),
  );

  if (affected.size === 0) {
    return;
  }

  const workspace = JSON.parse(
    execSync("pnpm m ls --json --depth=-1", { encoding: "utf8" }),
  );

  for (const pkg of workspace) {
    if (!pkg.name || pkg.private) continue;
    if (!affected.has(pkg.name)) continue;
    process.stdout.write(`${pkg.path}\n`);
  }
}

main();
