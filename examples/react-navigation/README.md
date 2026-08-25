# React Navigation

[React Navigation](https://reactnavigation.org) 8 on Lynx, through
`@react-navigation/lynx` and its stack navigator.

The navigator is not a JavaScript reimplementation of a stack: every screen is a
platform view driven by [`lynx-screens`](https://github.com/software-mansion-labs/lynx-screens),
so transitions, the system back gesture and the swipe-to-dismiss behaviour are
the ones the platform provides.

## Requires a host app

**This example will not render in LynxExplorer.** `lynx-screens` ships Android
and iOS code that has to be linked into the app through
[Lynx autolinking](https://lynxjs.org/4.0/guide/autolink.html), and LynxExplorer
does not carry it. Open the bundle in an app that links `lynx-screens` — the
`LynxExample/` app in that repository is one.

## What it shows

- `createLynxStackNavigator` with a static config, and `createStaticNavigation`
- `navigate` with params, `goBack`, `popToTop`
- `usePreventRemove`, which blocks the system back gesture while a screen has
  unsaved work

## Configuration worth copying

Two things in `lynx.config.mjs` are not optional.

`@react-navigation/core` is written against React, so `react` has to be aliased
onto the compat layer that `@react-navigation/lynx` ships. It fills in what
ReactLynx does not have yet — `use`, `useInsertionEffect`, `startTransition`.

`@react-navigation/lynx` and `lynx-screens` both publish TypeScript sources
rather than compiled output, and `@react-navigation/core`'s published bundle
uses `??=`, which the main thread's compiler cannot parse. All three go through
`source.include` so they are transpiled with the app.
