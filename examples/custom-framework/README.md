# Custom framework

This example implements the teaching DSL from the Lynx framework-development
guide. `Greeting.lynx` is deliberately small and is not a built-in Lynx file
format. It demonstrates the complete contract a custom UI framework must own:

```text
src/Greeting.lynx
  -> parser -> in-memory component IR
       -> main-thread layer -> main-thread.js + CSS import
       -> background layer  -> background.js
            -> CSS pipeline + template encoder
                 -> dist/greeting.lynx.bundle
                 -> dist/greeting.web.bundle
```

The generated main-thread entry creates and updates Element PAPI nodes. The
background entry owns state and asynchronous tasks. A tap sends an `Intent` to
the background thread; `fetchGreeting()` updates `title`, and a serializable
`Patch` returns to the main thread for the actual UI mutation and flush.
The business DSL declares its own `view #id` and `text #id` tree, while the
framework recursively renders those generic nodes. It never inserts a
container of its own, and the host `<page>` remains unstyled.

## Run the example

From the repository root:

```bash
pnpm --filter @lynx-example/custom-framework build
pnpm --filter @lynx-example/custom-framework dev
```

`build` creates native Lynx and Web bundles from the same component IR. Each
Rspack layer generates only its own thread module, while the main-thread module
pulls the generated styles through the regular CSS pipeline.

### Web template formats

`WebEncodePlugin` supports both Web template generations. With
`EXPERIMENTAL_USE_WEB_BINARY_TEMPLATE` unset (or set to `true`), it emits the
current binary format. Setting the variable to `false` or `0` emits the legacy
JSON format:

```bash
pnpm --filter @lynx-example/custom-framework build:web:binary
pnpm --filter @lynx-example/custom-framework build:web:json
```

Both commands write `dist/greeting.web.bundle`, so run them separately. The
regular package and repository builds use the JSON format; the binary command
exercises the current Web format explicitly.

`dev` prints a QR code that opens the bundle in Lynx Explorer. The compiler does
not write source files: generated thread modules and CSS remain inside Rspack's
module graph. Rspeedy's JavaScript and encoding inputs are still emitted under
`dist/.rspeedy/greeting/`.

## Source layout

- `bundle/compiler.ts` parses the DSL into an IR and contains the separate
  main-thread, background-thread, and CSS generators.
- `bundle/compiler-rule.ts` runs the compiler loader in both thread layers and
  sends generated CSS through Rsbuild's existing CSS loader chain.
- `bundle/compiler-loader.cjs` bridges Rspack's loader context to the compiler.
- `bundle/entries.ts` imports each logical `.lynx` entry once per thread layer.
- `bundle/thread-assets.ts` marks main-thread assets for template grouping.
- `bundle/background-assets.ts` wraps native background-thread code.
- `bundle/template.ts` groups both threads and styles into template encoding
  input.
- `bundle/encode.ts` selects the Lynx or Web template encoder.
- `bundle/plugin-my-lynx.ts` connects those steps to the Rsbuild lifecycle.
- `runtime/main-thread.ts` owns lifecycle events, Element references, event
  handlers, patch application, and cleanup.
- `runtime/background.ts` owns state, task execution, patch generation, and
  cross-thread cleanup.
