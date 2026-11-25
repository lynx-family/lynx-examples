// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { parse } from "yaml";

const repoRoot = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const dependencyFields = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
];
// Local workspace links are supported. Only peer dependencies may use
// unrestricted version declarations.
const allowedSpecifiers = new Set(["catalog:", "workspace:*"]);

export function checkCatalogDependencies(manifest, catalog) {
  const violations = [];

  for (const field of dependencyFields) {
    for (const [name, specifier] of Object.entries(manifest[field] ?? {})) {
      const isWildcardPeer = field === "peerDependencies" && specifier === "*";
      if (
        Object.hasOwn(catalog, name)
        && !allowedSpecifiers.has(specifier)
        && !isWildcardPeer
      ) {
        violations.push({ field, name, specifier });
      }
    }
  }

  return violations;
}

function main() {
  const workspace = parse(
    fs.readFileSync(path.join(repoRoot, "pnpm-workspace.yaml"), "utf8"),
  );
  const catalog = workspace?.catalog;
  if (!catalog || typeof catalog !== "object" || Array.isArray(catalog)) {
    throw new TypeError("Expected a default catalog in pnpm-workspace.yaml");
  }

  const packages = JSON.parse(
    execFileSync("pnpm", ["--recursive", "list", "--json", "--depth=-1"], {
      cwd: repoRoot,
      encoding: "utf8",
    }),
  );
  if (
    !Array.isArray(packages)
    || packages.some(pkg => typeof pkg?.path !== "string")
  ) {
    throw new TypeError("Expected package paths from pnpm recursive list");
  }

  const packagePaths = new Set([repoRoot, ...packages.map(pkg => pkg.path)]);
  let violationCount = 0;

  for (const packagePath of packagePaths) {
    const manifestPath = path.join(packagePath, "package.json");
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    for (
      const { field, name, specifier } of checkCatalogDependencies(
        manifest,
        catalog,
      )
    ) {
      console.error(
        `${
          path.relative(repoRoot, manifestPath)
        }: ${field}.${name} uses "${specifier}"; use "catalog:" and update its version in pnpm-workspace.yaml.`,
      );
      violationCount += 1;
    }
  }

  if (violationCount > 0) {
    console.error(
      "Catalog dependency versions must stay centralized so downstream package replacement can synchronize them.",
    );
    process.exitCode = 1;
  } else {
    console.log("All workspace catalog dependencies use supported specifiers.");
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
