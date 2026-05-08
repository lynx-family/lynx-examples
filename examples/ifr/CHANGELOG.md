# @lynx-example/ifr

## 0.5.6

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

## 0.5.5

### Patch Changes

- 51dd423: Upgrade ReactLynx version to 0.115 minor version

## 0.5.4

### Patch Changes

- 8b73c55: unify @lynx-js/types version.

## 0.5.3

### Patch Changes

- d5e1943: set filename to '[name].[platform].bundle' to eliminate difference between different versions.

## 0.5.2

### Patch Changes

- 4146aae: Publish with npm trusted publishing

## 0.5.1

### Patch Changes

- ac0e23b: Bump `@lynx-js/types` 3.4.11

## 0.5.0

### Minor Changes

- 09fd471: Bump React v0.109.0 with Rspeedy v0.9.7

### Patch Changes

- f1d4d6e: Fix TypeScript errors.

## 0.4.0

### Minor Changes

- 97de59b: Upgrade to Rspeedy v0.9.3.

## 0.3.0

### Minor Changes

- df7bb3d: Upgrade to Rspeedy v0.9.0.

## 0.2.0

### Minor Changes

- b0f16b3: Bump to `@lynx-js/rspeedy` v0.8.2 with `@lynx-js/react` v0.105.0

## 0.1.1

### Patch Changes

- fbd246d: Update App.tsx

## 0.1.0

### Minor Changes

- f37d873: Initial Release
