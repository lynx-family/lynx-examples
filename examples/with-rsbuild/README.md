# with-rsbuild

The same app as `hello-world`, built by the Rsbuild CLI instead of the Rspeedy
CLI.

`pluginLynx` carries the Lynx build engine, so `rsbuild.config.ts` needs nothing
beyond it and the framework plugin:

```
plugins: [pluginLynx(), pluginReactLynx()]
```

## Canary packages

The engine is not in a stable release yet, so this example pins the canary
builds — `@lynx-js/rsbuild-plugin-canary` and
`@lynx-js/react-rsbuild-plugin-canary`. `@lynx-js/react` is here as well because
the alias plugin resolves `@lynx-js/react/jsx-runtime` by that name. Once the
engine ships in a stable release, all three go back to the catalog entries.

## Scripts

- `pnpm build` / `pnpm dev` — build or serve through the Rsbuild CLI.
