# @lynx-example/tanstack-router

## 0.6.9

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

## 0.6.8

### Patch Changes

- 51dd423: Upgrade ReactLynx version to 0.115 minor version

## 0.6.7

### Patch Changes

- 8b73c55: unify @lynx-js/types version.

## 0.6.6

### Patch Changes

- d5e1943: set filename to '[name].[platform].bundle' to eliminate difference between different versions.

## 0.6.5

### Patch Changes

- 4146aae: Publish with npm trusted publishing

## 0.6.4

### Patch Changes

- 8b4ae84: Resolve breaking change introduced in `@tanstack/router@1.127.9`.

  Fix white screen issue on ReactLynx by explicitly setting `isServer: false` in router configuration to override incorrect server environment detection.

## 0.6.3

### Patch Changes

- ac0e23b: Bump `@lynx-js/types` 3.4.11

## 0.6.2

### Patch Changes

- 30485f5: Fix production build by disabling `tanstackRouter.autoCodeSplitting`.

## 0.6.1

### Patch Changes

- 97391eb: Add TanStack Router example
