# OpenUI for Lynx

This example renders an [OpenUI](https://www.openui.com/) response in a
ReactLynx application with `@lynx-js/genui`.

The demo simulates an LLM streaming OpenUI Lang text into `OpenUiRenderer`,
then handles the structured action emitted by the generated buttons. Use the
Replay button to restart the stream.

## Getting Started

Install dependencies from the repository root:

```bash
corepack pnpm install
```

Start this example:

```bash
corepack pnpm --filter @lynx-example/openui run dev
```

Scan the QR code in the terminal with LynxExplorer, or open the web preview.

The OpenUI response used by the mock agent is in
[`src/demoResponse.ts`](./src/demoResponse.ts). Edit it to try another OpenUI
Lang response.
