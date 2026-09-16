# AGENTS

## Contributor guide map

[`CONTRIBUTING.md`][contributing] is the source of truth for contributor-facing
workflows. Use this map to read the relevant section before changing the
repository:

| Task                                          | Required guidance                        |
| --------------------------------------------- | ---------------------------------------- |
| Install required tools                        | [Prerequisites]                          |
| Clone the repository and install dependencies | [Setup]                                  |
| Build packages                                | [Building Projects]                      |
| Run an example                                | [Running Examples]                       |
| Add an example                                | [Creating a New Example]                 |
| Prepare or merge a pull request               | [Pull Requests] and [Merge Requirements] |
| Write a commit                                | [Commits]                                |
| Format changes                                | [Code Style]                             |
| Locate packages and repository tooling        | [Project Structure]                      |
| Add a new publishable workspace package       | [Publishing a New Package]               |
| Find project support channels                 | [Need Help?]                             |

## Commit requirements

- Follow [Commits] and [Conventional Commits], and keep every commit message
  line at or below 72 characters.
- Use the body to explain what changed, why it was needed, and how it was
  verified or affects users.
- The `issue`, `doc`, and `TEST` footers are optional. Keep `issue` and `doc`
  lowercase and `TEST` uppercase.
- When including `TEST`, use exactly one `TEST` footer and combine multiple
  checks on that line with semicolons. Never emit one `TEST` footer per command.

## Toolchain and setup

- Use Node `>=22` and pnpm `11.13.0` (enforced by `package.json` engines and `packageManager`).
- Enable pnpm via Corepack before install: `corepack enable && pnpm install`.
- Formatting and manifest checks are part of CI; keep local tooling aligned with root configs (`.dprint.jsonc`, `.meta-updater/main.mjs`).

## Workspace layout (pnpm + turbo)

- Monorepo packages are defined in `pnpm-workspace.yaml`: `api/*`, `examples/*`, plus nested workspaces under `examples/web-platform/packages/*` and `examples/with-solidjs/packages/*`.
- Most examples are standalone packages with `src/`, `rsbuild.config.ts|mjs`, and scripts `build/dev/preview`.
- Two notable multi-package examples:
  - `examples/web-platform`: container package delegates to `react-container` (dev) and `lynx-project` (build).
  - `examples/with-solidjs`: app package depends on local workspace package `@lynx-js/solid`.

## Example maintenance

- When adding, removing, or renaming an example, update both the categorized
  example list and its reference link in the root `README.md` in the same
  change.
- When adding local images, fonts, or media, decide explicitly whether each
  asset should be inlined. Use `?inline` for small assets that must remain
  self-contained when bundles are relocated. Otherwise, verify that emitted
  assets are packaged and reachable from the final `output.assetPrefix`. Do
  not rely on a hard-coded asset prefix for variable or versioned deployment
  paths.

## Commands that match CI

- Full build: `pnpm turbo run build` (same as root `pnpm build`).
- Build one package: `pnpm --filter <package-name-or-path> run build`.
- Run one example: `pnpm --filter <package-name-or-path> run dev`.
- CI lint stage is command-driven (no root `lint` script):
  1. `pnpm meta-updater --test`
  2. `pnpm dprint check`
  3. `pnpm changeset status --verbose --since <base-sha>`
- CI build stage: `pnpm turbo run build --affected`.

## Release and changeset expectations

- Changesets are required for publishable package changes; follow existing `.changeset/*.md` format.
- `.changeset/config.json` tracks changes under `src/**`, `rsbuild.config.ts`, `rsbuild.config.mjs`, `lynx.config.ts`, and `lynx.config.mjs`; edits there are what CI uses for change detection.
- Release flow on `main` uses Changesets Action v2 sub-actions: it creates or updates the version PR when changesets exist; after that PR is merged, it builds and packs publishable packages before publishing the tarballs with npm Trusted Publishing.

## Repo-specific gotchas

- Pre-commit hook runs `nano-staged`, which runs `dprint fmt` on staged code/docs/json files.
- `meta-updater --test` fails if `package.json` metadata/order diverges from `.meta-updater/main.mjs` (for example `author` and sorted keys).
- `examples/external-bundle` must build bundle artifacts first; rely on its package scripts (`build`/`dev`) instead of calling `rsbuild` directly.
- `examples/web-platform` dev workflow is ordered: build Lynx package first, then start React container (as documented in `examples/web-platform/README.md`).

[contributing]: ./CONTRIBUTING.md
[Building Projects]: ./CONTRIBUTING.md#building-projects
[Code Style]: ./CONTRIBUTING.md#code-style
[Commits]: ./CONTRIBUTING.md#commits
[Conventional Commits]: https://www.conventionalcommits.org/
[Creating a New Example]: ./CONTRIBUTING.md#creating-a-new-example
[Merge Requirements]: ./CONTRIBUTING.md#merge-requirements
[Need Help?]: ./CONTRIBUTING.md#need-help
[Prerequisites]: ./CONTRIBUTING.md#prerequisites
[Project Structure]: ./CONTRIBUTING.md#project-structure
[Publishing a New Package]: ./CONTRIBUTING.md#publishing-a-new-package
[Pull Requests]: ./CONTRIBUTING.md#pull-requests
[Running Examples]: ./CONTRIBUTING.md#running-examples
[Setup]: ./CONTRIBUTING.md#setup
