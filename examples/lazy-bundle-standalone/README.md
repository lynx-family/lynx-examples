# lazy-bundle-standalone

This example shows the same page as [`lazy-bundle`](../lazy-bundle), but the lazy bundle is built **standalone** in a separate Rspeedy build instead of being code-split from the main bundle:

- **Producer** (`lynx.config.producer.js`): builds `src/MyLazyBundle.tsx` into an independent `MyLazyBundle.lynx.bundle` with `pluginReactLynx({ experimental_isLazyBundle: true })`.
- **Consumer** (`lynx.config.consumer.js`): the main app, which loads the producer's bundle at runtime by URL with `lazy(() => import(url, { with: { type: "component" } }))`.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run both the producer and consumer development servers:

```bash
pnpm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result. In development, the consumer dev server proxies `/producer/*` requests to the producer dev server, so the lazy bundle is fetched through the same origin as the main bundle.

You can start editing the page by modifying `src/App.tsx`, or the lazy bundle by modifying `src/MyLazyBundle.tsx`. The page auto-updates as you edit the files.

## Production build

```bash
pnpm run build
```

This produces `dist/producer/MyLazyBundle.lynx.bundle` and `dist/consumer/main.lynx.bundle`.

The consumer bundle loads the producer bundle from unpkg, pinned to this package's version:

```
https://unpkg.com/@lynx-example/lazy-bundle-standalone@<version>/dist/producer/MyLazyBundle.lynx.bundle
```

The version is read from `package.json` at build time (see `demo-config.js`), so a published consumer bundle always loads the producer bundle it was built against rather than whatever happens to be latest.

## Previewing a production build

That unpkg URL only resolves once this package is published, so a plain `pnpm run build` cannot be previewed locally. Build with `build:local` instead, which points the consumer at the local producer server:

```bash
pnpm run build:local
pnpm run preview
```

`build:local` is the only difference; `preview` just serves whatever was built. Use plain `pnpm run build` for anything you intend to publish — the default has to stay unpkg, because releases run a plain `build` and a LAN address must never end up in a published bundle.

The `LYNX_STANDALONE_PRODUCER_HOST` / `LYNX_STANDALONE_PRODUCER_PORT` environment variables affect the development servers and `build:local`; they do not change the published URL.
