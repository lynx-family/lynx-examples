# lazy-bundle

This example loads the same lazy component, `src/MyLazyBundle.tsx`, in the two ways Lynx supports. Both entries render the same page.

| Entry        | Bundle                        | How the lazy component is loaded                                                                    |
| ------------ | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| `main`       | `dist/main.lynx.bundle`       | Code-split out of this build by the bundler, via `import("./MyLazyBundle.jsx")`                     |
| `standalone` | `dist/standalone.lynx.bundle` | Fetched at runtime by URL from a separate build, via `import(url, { with: { type: "component" } })` |

The standalone variant is built by `lynx.config.producer.js`, which compiles `src/MyLazyBundle.tsx` as its own entry with `pluginReactLynx({ experimental_isLazyBundle: true })` into `dist/producer/`.

## Keeping the lazy bundle URL stable

The code-split lazy bundle URL is baked into `main.lynx.bundle`. By default its filename carries a hash (`async/src/MyLazyBundle.tsx.<hash>.bundle`), which changes whenever the component changes — so anything pinning that URL has to be updated on every release.

`lynx.config.ts` drops the hash by passing a function to `output.filename.bundle`, which controls the main bundle and the lazy bundles separately:

```ts
filename: {
  bundle: ({ lazyBundle, platform }) =>
    lazyBundle ? "async/[name].bundle" : `[name].${platform}.bundle`,
}
```

The lazy bundle is then always emitted at `async/src/MyLazyBundle.tsx.bundle`.

The standalone variant solves the same problem differently: its URL points at unpkg, pinned to this package's version, so a published bundle always loads the producer bundle it was built against.

```
https://unpkg.com/@lynx-example/lazy-bundle@<version>/dist/producer/MyLazyBundle.lynx.bundle
```

## Loader variants: QueryComponent and FetchBundle

The engine has two ways of loading a lazy bundle, selected by `engineVersion`. The sources are identical; only the config differs, so each variant gets its own output root — Rspeedy cleans the output directory before every build, and the second pass would otherwise wipe the first.

| Variant                  | `engineVersion`        | Output root         |
| ------------------------ | ---------------------- | ------------------- |
| QueryComponent (default) | `3.2` (plugin default) | `dist/`             |
| FetchBundle              | `3.9`                  | `dist-fetchbundle/` |

`pnpm run build` produces both. To build just one, use `build:querycomponent` or `build:fetchbundle`; `dev:fetchbundle` and `preview:fetchbundle` run the FetchBundle variant locally.

Both roots are published, so the FetchBundle artifacts are reachable at the matching paths:

```
https://unpkg.com/@lynx-example/lazy-bundle@<version>/dist-fetchbundle/producer/MyLazyBundle.lynx.bundle
```

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development servers:

```bash
pnpm run dev
```

This starts the app (both entries) and the producer server. Scan a QRCode in the terminal with your LynxExplorer App to see the result. In development the app server proxies `/producer/*` to the producer server, so the standalone entry fetches its bundle through the same origin.

You can start editing the page by modifying `src/App.tsx` or `src/standalone/App.tsx`, or the lazy component itself in `src/MyLazyBundle.tsx`. The page auto-updates as you edit the files.

## Previewing a production build

The unpkg URL only resolves once this package is published, so a plain `pnpm run build` cannot be previewed locally. Build with `build:local` instead, which points the standalone entry at the local producer server:

```bash
pnpm run build:local
pnpm run preview
```

Use plain `pnpm run build` for anything you intend to publish — the default has to stay unpkg, because releases run a plain `build` and a LAN address must never end up in a published bundle.

The `LYNX_STANDALONE_PRODUCER_HOST` / `LYNX_STANDALONE_PRODUCER_PORT` environment variables affect the development servers and `build:local`; they do not change the published URL.
