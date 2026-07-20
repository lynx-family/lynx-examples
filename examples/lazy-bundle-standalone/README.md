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

This produces `dist/producer/MyLazyBundle.lynx.bundle` and `dist/consumer/main.lynx.bundle`. The consumer bundle references the producer bundle via `http://<LAN host>:43721/`, so serve `dist/producer` on that port (or set `LYNX_STANDALONE_PRODUCER_HOST` / `LYNX_STANDALONE_PRODUCER_PORT` before building to point elsewhere).
