# WPT CSS cards

Build the 1,000 ReactLynx cards imported from `lynx/lynx-wpt` branch
`migrate/react-lynx-tsx-css`, commit
`91460074c1cc2e1c465d89b03a4b299edff60ce3`, with public `@lynx-js/*` packages.
This private workspace is a test corpus, not a new npm release.
The adapted WPT content retains the upstream license in `LICENSE.wpt`.

## Build and preview

From the repository root:

```sh
pnpm --filter @lynx-example/wpt-css run build
pnpm --filter @lynx-example/wpt-css run preview
```

Each case is a separate bundle. For a smaller development build, select the
case names (not module names). Existing visual names are preserved from the
source config; nonvisual entries use their generated manifest's `entry`:

```sh
LYNX_WPT_TESTS=flex-direction pnpm --filter @lynx-example/wpt-css run dev
LYNX_WPT_TESTS=flex-direction,css-cascade-layer-basic pnpm --filter @lynx-example/wpt-css run build
pnpm --filter @lynx-example/wpt-css run test
pnpm --filter @lynx-example/wpt-css run type-check
```

## Layout and migration boundary

```text
tests/<module>/<case>/
  index.tsx
  index.css
  support/                 # when required
  processor.ts             # nonvisual cases only
  generated/               # nonvisual manifests and hash-bound stylesheets
tools/nonvisual-runtime/
tools/plugins/
```

The original relative paths, markup, CSS, manifest contents and WPT metadata
remain intact. Only internal package imports are redirected to public
dependencies or the main-thread environment adapter. Support assets are inlined
so bundles do not depend on a fixed deployment prefix.

Legacy per-card `index.json` files are omitted: ReactLynx builds use the TSX
entry map in `lynx.config.ts`, not those card descriptors. Nonvisual
`generated/manifest.json` files are still required and preserved.

`migration.json` records the source revision and complete card inventory.
To repeat the source import from that checkout:

```sh
cd examples/wpt-css
node tools/import-cards.mjs /path/to/lynx-wpt
```

Materialize Git LFS support assets in the source checkout before importing.
The imported `tests/` snapshot is excluded from formatting: it contains
intentional invalid CSS and generated CSS bound to SHA-256 hashes. This also
preserves the original JSX whitespace.

The 145 nonvisual cards include their runtime and compiled CSS custom sections,
but the background collector session is disabled in this standalone example.
Running their assertions requires the session/collector workflow in `lynx-wpt`;
an ordinary build or preview is not a nonvisual conformance result.

The four helper entries `ref-viewer`, `timing-test`, `test-float-ref` and
`test-no-float-ref` are also preserved. They require a host that registers
`x-webview`; their original local HTTP URLs refer to the `lynx-wpt` runner,
not to a standalone Lynx Explorer preview. The local JSX declaration describes
that host element but does not implement it.

Historical `Lynx-Status` values and module notes describe the source repository's
runs. They are not renewed support claims for the public toolchain.
Screenshots under `evidence/`, upstream HTML, device runners and evidence
publication stay in `lynx-wpt`. No WPT match references are imported here.
