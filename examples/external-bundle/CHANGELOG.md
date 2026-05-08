# @lynx-example/external-bundle

## 0.0.5

### Patch Changes

- a16f885: Upgrade Lynx packages to latest:

  - `@lynx-js/react`: `0.117.0` → `0.120.0`
  - `@lynx-js/react-umd`: `0.117.1` → `0.120.0`
  - `@lynx-js/react-rsbuild-plugin`: `0.13.0` → `0.16.1`
  - `@lynx-js/rspeedy`: `0.13.6` → `0.14.3`
  - `@lynx-js/template-webpack-plugin`: `0.10.6` → `0.11.0`
  - `@lynx-js/external-bundle-rsbuild-plugin`: `0.1.0` → `0.1.1`
  - `@lynx-js/lynx-bundle-rslib-config`: `0.3.0` → `0.3.2`
  - `@lynx-js/web-core`: `^0.19.8` → `^0.20.3`
  - `@lynx-js/web-elements`: `^0.11.3` → `^0.12.1`

  Migrate `@lynx-example/react-container` to the new `@lynx-js/web-core` entry points (`./client`) and use `createElement('lynx-view', ...)` instead of the JSX intrinsic, which is no longer auto-augmented.

- afd164a: Fix a race condition in `pnpm build:bundle` where `comp` and `lodash-es` rslib builds run in parallel and both clean the shared `dist-external-bundle/` output dir at startup.

  When the slower bundle's startup clean lands after the faster bundle has already written its template, the faster bundle's file gets deleted, and the subsequent rspeedy build fails with `external-bundle-rsbuild-plugin could not find local bundle .../dist-external-bundle/comp.template.js`.

  The fix:

  - Set `cleanDistPath: false` on both `comp.rslib.config.js` and `lodash.rslib.config.js` so neither parallel build can wipe the shared dir.
  - Clean `dist-external-bundle/` once before the parallel builds in the `build:bundle` script, so stale outputs from previous runs are still cleared.

- f45a2d1: Include `*.rslib.config.js` files in the published package so the bundle build configs (`comp.rslib.config.js`, `lodash.rslib.config.js`) are available to consumers.
- a07db67: Add `tsconfig.json`.

## 0.0.4

### Patch Changes

- b3affe3: Add css rule to dummy class to avoid being shaken away by css minimizer.

## 0.0.3

### Patch Changes

- 0e5fe5c: Add a consumer CSS entry for the external bundle example so Lynx loads the CSS engine before applying styles from external bundles.

## 0.0.2

### Patch Changes

- 4bfba51: Update the external bundle example to use the simplified externals setup on top of the latest stable external bundle dependencies.

## 0.0.1

### Patch Changes

- 26f1e98: Init example.
