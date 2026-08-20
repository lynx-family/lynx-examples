# with-rsbuild

The same app as `hello-world`, built by the Rsbuild CLI instead of the Rspeedy
CLI.

`pluginLynx` carries the Lynx build engine, so `rsbuild.config.ts` needs nothing
beyond it and the framework plugin:

```
plugins: [pluginLynx(), pluginReactLynx()]
```

## Canary packages

The engine is not in a stable release yet, so this example pins two canary
builds: `@lynx-js/rsbuild-plugin-canary` and
`@lynx-js/react-rsbuild-plugin-canary`. Both are needed — the released
`@lynx-js/react-rsbuild-plugin` predates the engine and leaves JSX untransformed
against the canary engine. The runtime, `@lynx-js/react`, stays on the released
version. Both canary pins go back to the catalog once the engine ships.

## Scripts

- `pnpm build` / `pnpm dev` — build or serve through the Rsbuild CLI.
