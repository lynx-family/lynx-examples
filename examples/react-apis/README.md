# ReactLynx APIs

This package groups examples for APIs exported by `@lynx-js/react`.

- `clone-element`: clone native view elements and add a highlight class.
- `create-element`: toggle a custom greeting component rendered without JSX.
- `create-portal`: render a ReactLynx subtree into a host element
  elsewhere in the page.

See the [`cloneElement` API reference](https://lynxjs.org/next/zh/api/react/Function.cloneElement.html),
[`createElement` API reference](https://lynxjs.org/next/zh/api/react/Function.createElement.html),
and [`createPortal` API reference](https://lynxjs.org/next/zh/api/react/Function.createPortal)
for their signatures and parameter types.

## Getting Started

Install the workspace dependencies from the repository root:

```bash
corepack enable
pnpm install
```

Then start the examples:

```bash
pnpm --filter @lynx-example/react-apis run dev
```

The dev server lists every API demo as a separate entry point.
