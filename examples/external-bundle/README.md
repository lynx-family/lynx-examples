# external-bundle

This example shows how to build and consume several kinds of Lynx external
bundles. The application stays a ReactLynx application, but a producer only
needs `pluginReactLynx` when its source uses ReactLynx JSX or other ReactLynx
transforms.

## Scenarios

| Request          | Producer                          | Sections                              | Producer plugin         | Loading        | Use case                                                            |
| ---------------- | --------------------------------- | ------------------------------------- | ----------------------- | -------------- | ------------------------------------------------------------------- |
| ReactLynx preset | Managed by `pluginExternalBundle` | Background and main thread            | N/A                     | Preset-managed | Share the ReactLynx runtime instead of embedding it in every bundle |
| `lodash-es`      | `lodash.rslib.config.js`          | `lodash-es`, `lodash-es__main-thread` | Layer declarations only | Synchronous    | Share a plain JavaScript library between both Lynx threads          |
| `./utils`        | `utils.rslib.config.js`           | `utils`                               | Layer declarations only | Synchronous    | Load business logic only in the background thread                   |
| `./components`   | `comp.rslib.config.js`            | `component`, `component__main-thread` | `pluginReactLynx`       | Asynchronous   | Ship ReactLynx components and their CSS in a separate bundle        |

The `pluginReactLynx()` call in `lynx.config.mjs` is still required because the
consumer application is written with ReactLynx. The lodash and utils producer
configs do not depend on that plugin.

## ReactLynx runtime preset

The consumer enables the built-in preset in `lynx.config.mjs`:

```js
pluginExternalBundle({
  externalsPresets: {
    reactlynx: true,
  },
});
```

The preset supplies the standard ReactLynx external mappings and manages the
`react.lynx.bundle` asset. Use this when multiple bundles depend on the same
ReactLynx runtime.

## Plain JavaScript in both threads

`lodash.rslib.config.js` uses a string entry without an explicit layer. The
external bundle config expands it into two sections:

- `lodash-es` for the background thread
- `lodash-es__main-thread` for the main thread

Because lodash does not contain ReactLynx JSX, its producer only exposes the
layer names required by `defineExternalBundleRslibConfig`; it does not run the
ReactLynx transform.

The consumer declares both sections for the `lodash-es` request. This is the
appropriate shape for plain logic that can be imported from either thread.

## Background-only TypeScript logic

`utils.rslib.config.js` gives its entry an explicit background layer:

```js
entry: {
  utils: {
    import: "./src/utils/index.ts",
    layer: LAYERS.BACKGROUND,
  },
},
```

As a result, `utils.lynx.bundle` contains `utils` but no
`utils__main-thread` section. The matching consumer config also declares only
the background side:

```js
"./utils": {
  bundlePath: "utils.lynx.bundle",
  background: { sectionPath: "utils" },
  async: false,
},
```

`src/index.jsx` calls the exported `add` and `minus` functions from handlers
marked with `"background only"`. Use this pattern for business logic, data
processing, and other modules that must never execute on the main thread.

## ReactLynx component library

`comp.rslib.config.js` builds JSX and CSS, so its producer uses
`pluginReactLynx()` and the `reactlynx` externals preset. Its entry has no
explicit layer, which produces background and main-thread sections.

The consumer maps `./components` to both sections and sets `async: true`. This
uses a promise external, while `async: false` in the lodash and utils examples
uses a synchronous external. Choose the mode expected by the importing bundle
and keep the producer and consumer library names aligned.

## Build and run

From the repository root:

```bash
pnpm --filter @lynx-example/external-bundle run dev
```

The package builds all external bundles before starting Rspeedy. To create a
production build:

```bash
pnpm --filter @lynx-example/external-bundle run build
```

The build has two output stages:

1. Each `*.rslib.config.js` produces a bundle in `dist-external-bundle/`.
2. `pluginExternalBundle` emits those managed assets with the application into
   `dist/`.

Use the package scripts instead of invoking Rspeedy directly. The
`build:bundle` script cleans `dist-external-bundle/` once and then runs the
individual bundle builds in parallel with `cleanDistPath: false`, preventing
one producer from deleting another producer's output.

To build one producer while iterating:

```bash
pnpm --filter @lynx-example/external-bundle run build:bundle:utils
```

## Adding another external bundle

1. Add a source entry and an Rslib config that writes to
   `dist-external-bundle/`.
2. Use `pluginReactLynx()` only when the producer needs ReactLynx transforms;
   otherwise expose only the layer declarations.
3. Set an explicit layer for a single-thread bundle, or omit it to generate
   both thread sections.
4. Add a `build:bundle:<name>` script and Turbo task.
5. Map the exact import request in `pluginExternalBundle`, declaring only the
   sections that the producer emits.
6. Import the request from the application and keep background-only usage in a
   background context.
