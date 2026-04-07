# AGENTS

## Toolchain and setup

- Use Node `>=22` and pnpm `10.30.3` (enforced by `package.json` engines and `packageManager`).
- Enable pnpm via Corepack before install: `corepack enable && pnpm install`.
- Formatting and manifest checks are part of CI; keep local tooling aligned with root configs (`.dprint.jsonc`, `.meta-updater/main.mjs`).

## Workspace layout (pnpm + turbo)

- Monorepo packages are defined in `pnpm-workspace.yaml`: `api/*`, `examples/*`, plus nested workspaces under `examples/web-platform/packages/*` and `examples/with-solidjs/packages/*`.
- Most examples are standalone packages with `src/`, `lynx.config.ts|mjs`, and scripts `build/dev/preview`.
- Two notable multi-package examples:
  - `examples/web-platform`: container package delegates to `react-container` (dev) and `lynx-project` (build).
  - `examples/with-solidjs`: app package depends on local workspace package `@lynx-js/solid`.

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
- `.changeset/config.json` tracks changes under `src/**`, `lynx.config.ts`, and `lynx.config.mjs`; edits there are what CI uses for change detection.
- Release flow on `main` runs `pnpm run release` (`build` then `changeset publish`).

## Repo-specific gotchas

- Pre-commit hook runs `nano-staged`, which runs `dprint fmt` on staged code/docs/json files.
- `meta-updater --test` fails if `package.json` metadata/order diverges from `.meta-updater/main.mjs` (for example `author` and sorted keys).
- `examples/external-bundle` must build bundle artifacts first; rely on its package scripts (`build`/`dev`) instead of calling `rspeedy` directly.
- `examples/web-platform` dev workflow is ordered: build Lynx package first, then start React container (as documented in `examples/web-platform/README.md`).
