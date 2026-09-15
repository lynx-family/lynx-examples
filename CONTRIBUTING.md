# Contributing to Lynx Examples

Thank you for your interest in contributing to Lynx Examples! Contributions are always welcome, no matter how large or small.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Development Workflow](#development-workflow)
  - [Building Projects](#building-projects)
  - [Running Examples](#running-examples)
  - [Creating a New Example](#creating-a-new-example)
- [Contribution Guidelines](#contribution-guidelines)
  - [Pull Requests](#pull-requests)
  - [Merge Requirements](#merge-requirements)
  - [Commits](#commits)
  - [Code Style](#code-style)
- [Project Structure](#project-structure)
- [Publishing a New Package](#publishing-a-new-package)
- [Need Help?](#need-help)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version `>= 22`. You can check this with `node -v`
- **pnpm**: We use pnpm as our package manager. Enable it with `corepack enable`

### Setup

To set up the project, run:

```sh
# Clone the repository
git clone https://github.com/lynx-family/lynx-examples.git
cd lynx-examples

# Install dependencies
pnpm install
```

## Development Workflow

### Building Projects

To build all projects in the workspace:

```sh
pnpm turbo build
```

To build a specific example:

```sh
pnpm --filter <example-name> build
```

### Running Examples

To run a specific example in development mode:

```sh
pnpm --filter <example-name> run dev
```

For instance, to run the CSS example:

```sh
pnpm --filter css run dev
```

> [!NOTE]
> You need [Lynx Explorer](https://lynxjs.org/guide/start/quick-start.html#installation) to develop with these examples. Make sure it's installed before running the examples.

### Creating a New Example

1. Create a new directory in the `examples` folder
2. Copy the structure from an existing example as a starting point
3. Update the `package.json` with appropriate name and dependencies
4. Add your example code
5. Update the README.md to include your new example

## Contribution Guidelines

### Pull Requests

1. Fork the repository and create a new branch for your feature or bugfix
2. Make your changes, following our code style guidelines
3. Add or update tests if necessary
4. Ensure your code passes all tests and builds successfully
5. Submit a pull request with a clear description of the changes

### Merge Requirements

> **Important**
>
> This repository has enabled GitHub's **Require branches to be up to date
> before merging** setting. Do not merge an out-of-date branch. Update it with
> the latest `main` and wait for all required checks to pass again. This
> repository builds the entire workspace together, so shared dependencies and
> build configuration can affect packages outside the files changed by a pull
> request.

### Commits

- Follow [Conventional Commits] for commit subjects
- Keep the subject focused, and limit every commit message line to 72
  characters
- Use concise, direct English
- Use the body to explain what changed, why it was needed, and how it was
  verified or affects users. Use clear paragraphs or bullets; fixed subsection
  headings are not required
- Use optional footers in the following form:

```text
issue: #12345
doc: `https://example.com`
TEST: Relevant test cases
```

Use lowercase `issue` and `doc`. Summarize verification in one concise `TEST`
footer; do not list every command as a separate footer.

### Code Style

- We use [dprint](https://dprint.dev/) for code formatting
- Our formatting is automatically applied using git hooks when you commit

## Project Structure

The repository is organized as follows:

- `examples/`: Contains all the example projects
- `api/`: API-related code and examples
- `tools/`: Repository maintenance scripts and their tests
- `.changeset/`: Used for managing versioning of packages
- `.github/`: GitHub specific files (workflows, templates, etc.)

## Publishing a New Package

New non-private workspace packages must exist on npm before they are merged.
This allows npm Trusted Publishing to be configured before the release workflow
attempts its first OIDC publish.

Bootstrap publishing is a maintainer-only operation. It requires an npm account
with permission to create and publish packages under the `@lynx-example` scope.
When CI reports a new unpublished package, a maintainer should check out the
pull request and verify that the reviewed generator and copied license are
identical to the latest `main` versions before running it:

```sh
PR_NUMBER=123
PACKAGE_DIR=examples/example-name

gh pr checkout "$PR_NUMBER"
git fetch origin
git diff --exit-code origin/main -- \
  LICENSE tools/bootstrap-package/index.mjs
node tools/bootstrap-package/index.mjs "$PACKAGE_DIR"
```

The generator uses only Node.js built-ins, so no dependency installation is
required. The diff command must succeed; if it reports changes, stop and land
the tooling changes separately before continuing. Do not run package manager
commands or scripts from the contributor-controlled checkout.

The bootstrap command generates a minimal placeholder instead of publishing
directly from the workspace, where dependencies may use pnpm catalog
references. Review the generated package, then follow the printed commands to
log in to the public npm registry and publish it under the `oidc-bootstrap`
tag. The placeholder version is `0.0.0-oidc-bootstrap.0` and contains no
functional source or dependencies. If the package already exists on the public
registry, the command highlights that status and warns the maintainer not to
publish the generated placeholder.

The maintainer must then configure the package's [npm Trusted Publisher] with:

- Repository: `lynx-family/lynx-examples`
- Workflow filename: `release.yml`
- Environment: `npm`
- Allowed action: `npm publish`

From an authenticated maintainer shell using npm `>=11.15.0`, verify the
current configuration:

```sh
npm trust list @lynx-example/<package-name> --json --registry=https://registry.npmjs.org/
```

Confirm that the output has `type: "github"`, repository
`lynx-family/lynx-examples`, file `release.yml`, environment `npm`, and that
the `permissions` array contains `createPackage`. The current release workflow
publishes directly through Changesets, so `createPackage` is required;
`createStagedPackage` alone is insufficient. A future migration to npm staged
publishing must update the release workflow to use `npm stage publish` and
change this verification requirement to `createStagedPackage` in the same
change. Empty output means that no Trusted Publisher is configured.

Pull request CI rejects newly publishable packages that have no versions on the
public npm registry. Rerun the failed CI job after the bootstrap publish and
Trusted Publisher setup are complete.

## Need Help?

- Visit [Lynx's documentation](https://lynxjs.org/) for more information
- Join our community channels for support
- Open an issue if you encounter any problems

Thank you for contributing to Lynx Examples!

[Conventional Commits]: https://www.conventionalcommits.org/
[npm Trusted Publisher]: https://docs.npmjs.com/trusted-publishers
