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

## Types

The navigator is registered with the type system once, and every hook picks it
up from there:

```tsx
type RootStackType = typeof Stack;

declare module "@react-navigation/lynx" {
  interface RootNavigator extends RootStackType {}
}
```

After that `useNavigation("Details")` is typed, `navigate` rejects unknown route
names and checks params, and a screen reads its own params through
`StaticScreenProps` rather than a cast.

## Configuration worth copying

`tsconfig.json` needs a `target` past ES5. `@react-navigation/lynx` and
`lynx-screens` publish TypeScript sources, so they are compiled by this app's
config, and they use `Map`, `Set` and `Object.fromEntries`.

One thing in `rsbuild.config.mjs` is not optional: `@react-navigation/core` is
written against React, so `react` has to be aliased onto ReactLynx's compat
entry, `@lynx-js/react/compat`. It adds `use`, `useInsertionEffect` and
`startTransition` on top of the core API; `use` needs `@lynx-js/react` 0.126.1
or later to work on the main thread.
