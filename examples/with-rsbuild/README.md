# with-rsbuild

The same app as `hello-world`, built by the Rsbuild CLI instead of the Rspeedy
CLI.

`pluginReactLynx` applies the Lynx build engine when it is not already there, so
this is the whole plugin list:

```
plugins: [pluginReactLynx()]
```

## Canary package

The engine is not in a stable release yet, so this example pins
`@lynx-js/react-rsbuild-plugin-canary`; the released
`@lynx-js/react-rsbuild-plugin` predates the engine and leaves JSX
untransformed. Everything else, the React runtime included, is on its released
version. The pin goes back to the catalog entry once the engine ships.

## Scripts

- `pnpm build` / `pnpm dev` — build or serve through the Rsbuild CLI.
