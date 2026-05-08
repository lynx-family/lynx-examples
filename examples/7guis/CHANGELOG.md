# @lynx-example/7guis

## 0.2.1

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

## 0.2.0

### Minor Changes

- 80a5c50: Add 7GUIs benchmark suite ported to ReactLynx

### Patch Changes

- e5361dd: Fix `import.meta` ts types error
- 20c0361: Enable `pluginTypeCheck()` in the 7guis rspeedy config so TypeScript issues are checked during builds.
