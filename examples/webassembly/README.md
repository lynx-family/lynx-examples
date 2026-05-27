# WebAssembly

This example runs a minimal WebAssembly module in the Lynx background runtime.

Tap the button in LynxExplorer to calculate `1 + 2`. The exported `add` function comes from WebAssembly bytes and is loaded with the constructor-based API:

```ts
const module = new WebAssembly.Module(wasmBytes);
const instance = new WebAssembly.Instance(module);
```

## Getting Started

Install dependencies from the repository root:

```bash
corepack enable
pnpm install
```

Then run the example:

```bash
pnpm --filter @lynx-example/webassembly run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.
