# @lynx-example/css-api

## 0.9.1

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

- 379696c: Skip CSS API type checking during CI builds to avoid out-of-memory failures.

## 0.9.0

### Minor Changes

- 505c163: Move the `cursor` and `mouse-cursor` demos into a new desktop example package,
  and align the `mouse-cursor` drag flow with W3C-style mouse events for
  consistent Lynx and web behavior. Remove the old `cursor` entry from `css-api`.

## 0.8.1

### Patch Changes

- cff0b4c: Add a mouse cursor interaction example that keeps only the Lynx UI part of the
  `pc-mouse-cursor` desktop showcase, add a CSS cursor API demo entry, and
  refresh the SVG example with a single card-style logo preview.

## 0.8.0

### Minor Changes

- 579f297: Add background-clip: border-area showcase

## 0.7.1

### Patch Changes

- 7bf4853: Add example for `conic-gradient()`.
- 51dd423: Upgrade ReactLynx version to 0.115 minor version

## 0.7.0

### Minor Changes

- a4465bf: set filename of css-api to '[name].[platform].bundle' to keep consistent with other packages

## 0.6.6

### Patch Changes

- fdbd80d: Add `brightness()`, `contrast()` and `saturate()` example for the `filter` property.

## 0.6.5

### Patch Changes

- 8b73c55: unify @lynx-js/types version.

## 0.6.4

### Patch Changes

- 8bc6f7c: Add examples for `pointer-events: 'none'` and `pointer-events: 'auto'`.

## 0.6.3

### Patch Changes

- 4146aae: Publish with npm trusted publishing

## 0.6.2

### Patch Changes

- ac0e23b: Bump `@lynx-js/types` 3.4.11

## 0.6.1

### Patch Changes

- 82af4da: Add `font-optical-sizing`, `font-feature-settings` and `font-variation-settings`

## 0.6.0

### Minor Changes

- 09fd471: Bump React v0.109.0 with Rspeedy v0.9.7

### Patch Changes

- f1d4d6e: Fix TypeScript errors.

## 0.5.1

### Patch Changes

- 89ec087: feat: update `grid-template-columns`, `grid-template-rows` api demo

## 0.5.0

### Minor Changes

- 97de59b: Upgrade to Rspeedy v0.9.3.

## 0.4.0

### Minor Changes

- df7bb3d: Upgrade to Rspeedy v0.9.0.

## 0.3.1

### Patch Changes

- 4b435a4: Changed `class` to `className` for all Examples

## 0.3.0

### Minor Changes

- b0f16b3: Bump to `@lynx-js/rspeedy` v0.8.2 with `@lynx-js/react` v0.105.0

### Patch Changes

- ecee9c5: fix: use image and text directly, no need to use inline-image and inline-text, the web already supports this.

## 0.2.0

### Minor Changes

- 6739e06: Add `repository` to `package.json`.

### Patch Changes

- 9644d84: Update Lynx logo.
- 5a56b54: Add `output.assetPrefix` for Lynx Website

## 0.1.0

### Minor Changes

- d2aabf6: feat: update @lynx-js/react from "^0.103.3" to "^0.104.1", @lynx-js/react-rsbuild-plugin and @lynx-js/rspeedy to "^0.8.1".

## 0.0.8

### Patch Changes

- 5d9836f: feat: update layout css demo about grid

## 0.0.7

### Patch Changes

- 2ecd5da: Modify some CSS demos

## 0.0.6

### Patch Changes

- 1ae54b7: feat: add examples for `clip-path` api doc

## 0.0.5

### Patch Changes

- Use `scroll-orientation` instead of `scroll-y`.
