# with-rspeedy

The same app as `hello-world`, built by the Rspeedy CLI instead of the Rsbuild
CLI. Rspeedy wraps Rsbuild, applies the Lynx build engine and the `lynx`
environment on its own, so the config only lists the framework plugin:

```
plugins: [pluginReactLynx()]
```

## Scripts

- `pnpm build` / `pnpm dev` / `pnpm preview` — build, serve or preview through the Rspeedy CLI.
