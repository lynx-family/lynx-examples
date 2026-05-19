> **⚠️ Demo only — do not expose to untrusted networks.**
> This example has no authentication. Running it on a public network may allow others to consume your OpenAI API quota. Use it only on trusted local networks for development and demonstration purposes.

## Hono + ReactLynx chat

This project combines:

- ReactLynx on the client
- `@lynx-js/lynx-ui` as the base UI component library
- Hono on the server
- Vercel AI SDK on the server for model integration

## Run it

1. Install dependencies:

```bash
npm install
```

2. Start local preview:

```bash
npm run dev
```

`npm run dev` prompts for the required environment values, builds the client bundle, then starts the Hono server. The server automatically binds to the current device IP and an available port, serves both the API and the built client assets, and the CLI prints the client resource URL after startup.

## Environment variables

The CLI prompts for these on first run and writes them to `.env.local`:

- `OPENAI_API_KEY` — your OpenAI (or compatible) API key
- `OPENAI_BASE_URL` — base URL for the chat completions endpoint (defaults to `https://api.openai.com/v1`)
- `OPENAI_MODEL` — model identifier (defaults to `gpt-4o-mini`)

If none are set the server falls back to a built-in mock that requires no external API.

Useful commands:

```bash
npm run build
npm run typecheck
```
