// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { execFile, execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import { parse } from "yaml";

const execFileAsync = promisify(execFile);
const repoRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const npmRegistry = "https://registry.npmjs.org/";
const npmScope = "@lynx-example/";
const npmPackageNamePattern = /^@lynx-example\/[-a-z0-9~][a-z0-9._~-]*$/u;
const npmViewTimeoutMs = 15_000;
const bootstrapGuideUrl =
  "https://github.com/lynx-family/lynx-examples/blob/main/CONTRIBUTING.md#publishing-a-new-package";

function runGit(args) {
  return execFileSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
  });
}

function readJson(text, source) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse JSON from ${source}: ${message}`);
  }
}

function globToRegExp(glob) {
  let pattern = "^";

  for (let index = 0; index < glob.length; index += 1) {
    const character = glob[index];

    if (character === "*" && glob[index + 1] === "*") {
      if (glob[index + 2] === "/") {
        pattern += "(?:.*/)?";
        index += 2;
      } else {
        pattern += ".*";
        index += 1;
      }
    } else if (character === "*") {
      pattern += "[^/]*";
    } else if (character === "?") {
      pattern += "[^/]";
    } else {
      pattern += character.replace(/[\\^$.*+?()[\]{}|]/gu, "\\$&");
    }
  }

  return new RegExp(`${pattern}$`, "u");
}

function isWorkspacePackage(manifestPath, workspacePatterns) {
  if (manifestPath === "package.json") {
    return true;
  }

  const packageDirectory = path.posix.dirname(manifestPath);
  const includes = workspacePatterns.filter(pattern => !pattern.startsWith("!"));
  const excludes = workspacePatterns
    .filter(pattern => pattern.startsWith("!"))
    .map(pattern => pattern.slice(1));

  return includes.some(pattern => globToRegExp(pattern).test(packageDirectory))
    && !excludes.some(pattern => globToRegExp(pattern).test(packageDirectory));
}

function getPublishablePackageNamesAtRef(ref) {
  const workspace = parse(runGit(["show", `${ref}:pnpm-workspace.yaml`]));
  const workspacePatterns = workspace?.packages;

  if (!Array.isArray(workspacePatterns)) {
    throw new TypeError(
      `Expected "packages" to be an array in pnpm-workspace.yaml at ${ref}`,
    );
  }

  const manifestPaths = runGit(["ls-tree", "-r", "--name-only", ref])
    .split("\n")
    .filter(filePath => filePath === "package.json" || filePath.endsWith("/package.json"))
    .filter(filePath => isWorkspacePackage(filePath, workspacePatterns));
  const packageNames = new Set();

  for (const manifestPath of manifestPaths) {
    const manifest = readJson(
      runGit(["show", `${ref}:${manifestPath}`]),
      `${ref}:${manifestPath}`,
    );

    if (manifest.private === true) {
      continue;
    }

    if (typeof manifest.name !== "string" || !manifest.name) {
      throw new TypeError(`Missing package name in ${ref}:${manifestPath}`);
    }

    packageNames.add(manifest.name);
  }

  return packageNames;
}

function getCurrentPublishablePackages() {
  const output = execFileSync(
    "pnpm",
    ["--recursive", "list", "--json", "--depth=-1"],
    {
      cwd: repoRoot,
      encoding: "utf8",
    },
  );
  const workspace = readJson(output, "pnpm recursive list");

  if (!Array.isArray(workspace)) {
    throw new TypeError("Expected pnpm recursive list to return an array");
  }

  return workspace
    .filter(pkg => pkg.private !== true)
    .map(pkg => {
      if (typeof pkg.name !== "string" || !pkg.name) {
        throw new TypeError(`Missing package name for workspace at ${pkg.path}`);
      }

      return {
        name: pkg.name,
        path: path.relative(repoRoot, pkg.path),
      };
    });
}

export function getNewPublishablePackages(currentPackages, basePackageNames) {
  const newPackages = currentPackages.filter(
    pkg => !basePackageNames.has(pkg.name),
  );

  for (const pkg of newPackages) {
    if (!npmPackageNamePattern.test(pkg.name)) {
      throw new Error(
        `New publishable package ${pkg.name} at ${pkg.path} must use the ${npmScope} scope and a valid npm name`,
      );
    }
  }

  return newPackages;
}

export function parsePublishedVersions(output, packageName) {
  const versions = readJson(output, `npm view ${packageName} versions`);

  if (Array.isArray(versions)) {
    return versions.filter(version => typeof version === "string" && version.length > 0);
  }

  return typeof versions === "string" && versions.length > 0 ? [versions] : [];
}

export function isNpmNotFoundError(error) {
  if (!error || typeof error !== "object" || !("stderr" in error)) {
    return false;
  }

  return /\bE404\b/u.test(String(error.stderr));
}

async function getPublishedVersions(packageName) {
  const { stdout } = await execFileAsync(
    "npm",
    [
      "view",
      packageName,
      "versions",
      "--json",
      `--registry=${npmRegistry}`,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      killSignal: "SIGTERM",
      timeout: npmViewTimeoutMs,
    },
  );

  return parsePublishedVersions(stdout, packageName);
}

async function checkPublishedPackages(packages) {
  return Promise.all(
    packages.map(async pkg => {
      try {
        return {
          ...pkg,
          versions: await getPublishedVersions(pkg.name),
        };
      } catch (error) {
        if (isNpmNotFoundError(error)) {
          return { ...pkg, versions: [] };
        }

        const message = error instanceof Error ? error.message : String(error);
        return { ...pkg, error: message, versions: [] };
      }
    }),
  );
}

function parseArguments(args) {
  const baseIndex = args.indexOf("--base");
  const base = baseIndex === -1 ? null : args[baseIndex + 1];

  if (!base) {
    throw new Error(
      "Usage: node .github/scripts/check-new-packages.mjs --base <git-ref>",
    );
  }

  return { base };
}

async function main() {
  const { base } = parseArguments(process.argv.slice(2));
  const basePackageNames = getPublishablePackageNamesAtRef(base);
  const currentPackages = getCurrentPublishablePackages();
  const newPackages = getNewPublishablePackages(
    currentPackages,
    basePackageNames,
  );

  if (newPackages.length === 0) {
    console.log("No new publishable packages detected.");
    return;
  }

  console.log("New publishable packages:");
  for (const pkg of newPackages) {
    console.log(`- ${pkg.name} (${pkg.path})`);
  }

  const results = await checkPublishedPackages(newPackages);
  const unverifiablePackages = results.filter(result => result.error);
  const unpublishedPackages = results.filter(
    result => !result.error && result.versions.length === 0,
  );

  if (
    unverifiablePackages.length === 0
    && unpublishedPackages.length === 0
  ) {
    console.log("All new publishable packages already have npm versions.");
    return;
  }

  if (unverifiablePackages.length > 0) {
    console.error();
    console.error(
      "The following packages could not be verified on the public npm registry:",
    );

    for (const pkg of unverifiablePackages) {
      console.error(`- ${pkg.name} (${pkg.path})`);
      console.error(`  npm view failed: ${pkg.error}`);
    }
  }

  if (unpublishedPackages.length > 0) {
    console.error();
    console.error(
      "The following packages have no published npm version:",
    );

    for (const pkg of unpublishedPackages) {
      console.error(`- ${pkg.name} (${pkg.path})`);
    }

    console.error();
    console.error(
      "Ask a maintainer with @lynx-example publish access to follow:",
    );
    console.error(`  ${bootstrapGuideUrl}`);
  }

  process.exitCode = 1;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
