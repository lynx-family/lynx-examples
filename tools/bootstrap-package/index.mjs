// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Generate a minimal placeholder package for initial npm publication.
 *
 * The generated package intentionally excludes source dependencies so catalog
 * references never leak into the bootstrap release.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const repoRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const defaultOut = path.join(repoRoot, "tools/bootstrap-package/output");
const licensePath = path.join(repoRoot, "LICENSE");
const bootstrapVersion = "0.0.0-oidc-bootstrap.0";
const npmRegistry = "https://registry.npmjs.org/";
const npmWebsite = "https://www.npmjs.com/";
const npmScope = "@lynx-example/";
const trustedPublisher = {
  environment: "npm",
  repository: "lynx-family/lynx-examples",
  workflow: "release.yml",
};
const ansi = {
  bold: "\u001b[1m",
  cyan: "\u001b[36m",
  green: "\u001b[32m",
  reset: "\u001b[0m",
  yellow: "\u001b[33m",
};

export function supportsColor(stream, env = process.env) {
  return Boolean(stream.isTTY) && !("NO_COLOR" in env);
}

function styleStream(value, stream, ...styles) {
  if (!supportsColor(stream)) {
    return value;
  }

  return `${styles.join("")}${value}${ansi.reset}`;
}

function styleOutput(value, ...styles) {
  return styleStream(value, process.stdout, ...styles);
}

function styleWarning(value, ...styles) {
  return styleStream(value, process.stderr, ...styles);
}

function printHeading(value) {
  console.log(styleOutput(value, ansi.bold));
}

function printCommand(value) {
  console.log(`  ${styleOutput(value, ansi.green)}`);
}

function formatPathForHelp(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  return relativePath && !relativePath.startsWith("..")
    ? relativePath
    : filePath;
}

export function quoteShellArgument(value) {
  return `'${value.replaceAll("'", "'\\''")}'`;
}

export function getBootstrapPublishCommands(outDir) {
  const outputPath = quoteShellArgument(formatPathForHelp(outDir));

  return [
    "npm login --registry=https://registry.npmjs.org/",
    `cd ${outputPath} && \\`,
    "  npm publish --access public --tag oidc-bootstrap --registry=https://registry.npmjs.org/",
  ];
}

const helpText = `
bootstrap-package - create a minimal placeholder package for initial npm publish.

This script creates a minimal placeholder package (${bootstrapVersion}) to enable
npm Trusted Publisher setup for subsequent automated releases.

Usage:
  pnpm bootstrap:package <package-dir> [options]

Options:
  --out <dir>    Output root directory (default: ${formatPathForHelp(defaultOut)})
  --dry-run      Preview actions without writing anything
  --force        Overwrite an existing output directory
  --private      Allow bootstrapping a package with "private": true
  --no-private   Disallow bootstrapping a package with "private": true (default)
  --show-publish-commands
                 Show publish commands for an existing package
  -h, --help     Show this help

Examples:
  pnpm bootstrap:package examples/hello-world
  pnpm bootstrap:package examples/hello-world --dry-run
  pnpm bootstrap:package examples/hello-world --force
  pnpm bootstrap:package examples/hello-world --force --show-publish-commands
`.trimStart();

export function parseArguments(args = process.argv.slice(2)) {
  const { positionals, values } = parseArgs({
    args,
    options: {
      "dry-run": { type: "boolean" },
      force: { type: "boolean" },
      help: { type: "boolean", short: "h" },
      out: { type: "string", default: defaultOut },
      private: { type: "boolean", default: false },
      "show-publish-commands": { type: "boolean", default: false },
    },
    allowNegative: true,
    allowPositionals: true,
  });

  return {
    allowPrivate: values.private,
    dryRun: values["dry-run"],
    force: values.force,
    help: values.help,
    input: positionals[0] ?? null,
    out: path.resolve(values.out),
    showPublishCommands: values["show-publish-commands"],
  };
}

function readJson(filePath) {
  const text = fs.readFileSync(filePath, "utf8");

  try {
    return JSON.parse(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to parse JSON at ${filePath}: ${message}`);
  }
}

function ensureTrailingNewline(value) {
  return value.endsWith("\n") ? value : `${value}\n`;
}

function safeFolderName(packageName) {
  return packageName.replace(/^@/u, "").replaceAll("/", "__");
}

export function validatePackageName(packageName) {
  const npmPackageNamePattern = /^(?:@[-a-z0-9~][a-z0-9._~-]*\/)?[-a-z0-9~][a-z0-9._~-]*$/u;

  if (!npmPackageNamePattern.test(packageName)) {
    throw new Error(`Invalid package name: ${packageName}`);
  }

  if (!packageName.startsWith(npmScope)) {
    throw new Error(
      `Package name must use the ${npmScope} scope, found: ${packageName}`,
    );
  }
}

function validateInput(inputDir, packageJsonPath) {
  if (!fs.existsSync(inputDir) || !fs.statSync(inputDir).isDirectory()) {
    throw new Error(`Input directory not found: ${inputDir}`);
  }

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found: ${packageJsonPath}`);
  }

  if (!fs.existsSync(licensePath)) {
    throw new Error(`LICENSE not found at: ${licensePath}`);
  }
}

export async function getPackagePublication(
  packageName,
  fetchImpl = fetch,
) {
  const packageUrl = new URL(encodeURIComponent(packageName), npmRegistry);
  let response;

  try {
    response = await fetchImpl(packageUrl, {
      headers: {
        accept: "application/json",
      },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Failed to check ${packageName} on the public npm registry: ${message}`,
    );
  }

  if (response.status === 404) {
    return { published: false, versions: [] };
  }

  if (!response.ok) {
    throw new Error(
      `Failed to check ${packageName} on the public npm registry: HTTP ${response.status}`,
    );
  }

  const metadata = await response.json();
  const versions = metadata?.versions && typeof metadata.versions === "object"
    ? Object.keys(metadata.versions)
    : [];

  return { published: true, versions };
}

function buildFiles({ description, name }) {
  const finalDescription = description
    ? `${description} (OIDC bootstrap placeholder)`
    : "Placeholder package published only to enable npm Trusted Publishing (OIDC) setup.";
  const packageJson = {
    name,
    version: bootstrapVersion,
    description: finalDescription,
    license: "Apache-2.0",
    author: "Lynx Authors",
    files: [
      "README.md",
      "LICENSE",
    ],
    publishConfig: {
      access: "public",
    },
  };
  const readme = `# ${name}

> ${finalDescription}

This package is a placeholder published only to enable npm Trusted Publishing
(OIDC) setup. It contains no functional code and should not be installed.

A proper release will replace this package after OIDC is configured.
`;

  return [
    {
      content: `${JSON.stringify(packageJson, null, 2)}\n`,
      relativePath: "package.json",
    },
    { content: readme, relativePath: "README.md" },
    {
      content: ensureTrailingNewline(fs.readFileSync(licensePath, "utf8")),
      relativePath: "LICENSE",
    },
  ];
}

function writeFiles(outDir, files, { force }) {
  if (fs.existsSync(outDir)) {
    if (!force) {
      throw new Error(
        `Output already exists: ${outDir}\nUse --force to overwrite it.`,
      );
    }

    fs.rmSync(outDir, { force: true, recursive: true });
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const { content, relativePath } of files) {
    fs.writeFileSync(path.join(outDir, relativePath), content);
  }
}

function printSummary({ dryRun, files, inputDir, name, outDir, publication }) {
  console.log("bootstrap-package");
  console.log(`  input:  ${path.relative(repoRoot, inputDir)}`);
  console.log(`  name:   ${name}`);
  console.log(`  output: ${path.relative(repoRoot, outDir)}`);
  console.log(`  mode:   ${dryRun ? "dry-run" : "write"}`);
  console.log(
    `  npm:    ${
      publication.published
        ? `already published (${publication.versions.length} version(s))`
        : "not published"
    }`,
  );
  console.log();
  console.log("Files:");

  for (const { relativePath } of files) {
    console.log(`  ${path.relative(repoRoot, path.join(outDir, relativePath))}`);
  }
}

function printPublishedWarning(name) {
  console.warn();
  console.warn(
    styleWarning(
      `WARNING: ${name} already exists on the public npm registry.`,
      ansi.bold,
      ansi.yellow,
    ),
  );
  console.warn(
    styleWarning(
      "Do not publish the generated placeholder. Bootstrap publishing is not required.",
      ansi.bold,
      ansi.yellow,
    ),
  );
}

export function getTrustedPublisherInstructions(name) {
  const packageSettingsUrl = new URL(
    `/package/${name}/access`,
    npmWebsite,
  );

  return [
    "Method 1: npmjs.com",
    "",
    `  URL: ${packageSettingsUrl}`,
    "  Publisher: GitHub Actions",
    "  Organization or user: lynx-family",
    "  Repository: lynx-examples",
    `  Workflow: ${trustedPublisher.workflow}`,
    `  Environment: ${trustedPublisher.environment}`,
    "  Allowed action: npm publish",
    "",
    "Method 2: npm CLI (requires npm >= 11.15.0)",
    "",
    `  npm trust github ${name} \\`,
    `    --repo ${trustedPublisher.repository} \\`,
    `    --file ${trustedPublisher.workflow} \\`,
    `    --environment ${trustedPublisher.environment} \\`,
    "    --allow-publish \\",
    `    --registry=${npmRegistry} \\`,
    "    --otp=YOUR_OTP",
  ];
}

function printTrustedPublisherInstructions(name, indentation) {
  for (const line of getTrustedPublisherInstructions(name)) {
    if (!line) {
      console.log();
    } else if (line.startsWith("Method ")) {
      console.log(`${indentation}${styleOutput(line, ansi.bold, ansi.cyan)}`);
    } else if (
      line.startsWith("  npm ")
      || line.startsWith("    --")
    ) {
      console.log(`${indentation}${styleOutput(line, ansi.green)}`);
    } else if (line.startsWith("  URL: ")) {
      console.log(`${indentation}${styleOutput(line, ansi.cyan)}`);
    } else {
      console.log(`${indentation}${line}`);
    }
  }
}

function printBootstrapPublishCommands(outDir) {
  printHeading(
    "Next steps (requires @lynx-example package publish access):",
  );
  console.log();

  for (const command of getBootstrapPublishCommands(outDir)) {
    printCommand(command);
  }
}

function printNextSteps(name, outDir, publication, showPublishCommands) {
  console.log();

  if (publication.published && !showPublishCommands) {
    printHeading(
      "Trusted Publisher setup (choose one method):",
    );
    console.log();
    printTrustedPublisherInstructions(name, "  ");
    return;
  }

  if (publication.published) {
    printHeading("Unpublished-package flow preview:");
    console.log(
      `  ${
        styleOutput(
          "The package already exists. Do not run these publish commands.",
          ansi.yellow,
        )
      }`,
    );
    console.log();
  }

  printBootstrapPublishCommands(outDir);
  console.log();
  printHeading("After publish:");
  console.log();
  console.log(
    "  1. Configure Trusted Publisher on npmjs.com (see setup details below).",
  );
  console.log("  2. Delete the generated output directory.");
  console.log("  3. Future releases should use OIDC Trusted Publishing.");
  console.log();
  printHeading("Trusted Publisher setup details (choose one method):");
  console.log();
  printTrustedPublisherInstructions(name, "  ");
}

export async function main(
  args = process.argv.slice(2),
  fetchImpl = fetch,
) {
  const {
    allowPrivate,
    dryRun,
    force,
    help,
    input,
    out,
    showPublishCommands,
  } = parseArguments(args);

  if (help || !input) {
    process.stdout.write(helpText);
    process.exitCode = help ? 0 : 1;
    return;
  }

  const inputDir = path.resolve(process.cwd(), input);
  const packageJsonPath = path.join(inputDir, "package.json");
  validateInput(inputDir, packageJsonPath);

  const sourcePackage = readJson(packageJsonPath);

  if (sourcePackage.private === true && !allowPrivate) {
    throw new Error(
      `Refusing to bootstrap a private package: ${path.relative(repoRoot, packageJsonPath)}`,
    );
  }

  if (typeof sourcePackage.name !== "string" || !sourcePackage.name) {
    throw new Error(`Missing or invalid "name" in ${packageJsonPath}`);
  }

  validatePackageName(sourcePackage.name);
  const publication = await getPackagePublication(
    sourcePackage.name,
    fetchImpl,
  );

  const description = typeof sourcePackage.description === "string"
    ? sourcePackage.description.trim()
    : "";
  const outDir = path.join(out, safeFolderName(sourcePackage.name));
  const files = buildFiles({ description, name: sourcePackage.name });

  printSummary({
    dryRun,
    files,
    inputDir,
    name: sourcePackage.name,
    outDir,
    publication,
  });

  if (publication.published) {
    printPublishedWarning(sourcePackage.name);
  }

  if (dryRun) {
    const packageJson = files.find(file => file.relativePath === "package.json");
    console.log();
    console.log("--- package.json (preview) ---");
    console.log(packageJson.content);

    return;
  }

  writeFiles(outDir, files, { force });
  console.log();
  console.log("Bootstrap package generated.");
  printNextSteps(
    sourcePackage.name,
    outDir,
    publication,
    showPublishCommands,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    await main();
  } catch (error) {
    console.error(
      "Error:",
      error instanceof Error ? error.message : String(error),
    );
    process.exitCode = 1;
  }
}
