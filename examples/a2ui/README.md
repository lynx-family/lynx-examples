# A2UI 1.0 with ReactLynx

This example uses `@lynx-js/genui` to render A2UI 1.0 messages with trusted ReactLynx components. It includes three entries:

- `weather`: streams a weather card and forwards city-switch actions to a mock Agent.
- `gallery`: replays weather, product, chart, and trip messages. Each dataset starts a new Renderer session.
- `actions`: handles answer selection locally and streams a mock Agent's quiz result after submission.

## Run the Example

Install dependencies from the repository root, then start this example:

```sh
pnpm install
pnpm --filter @lynx-example/a2ui run dev
```

Choose an entry from the development server and scan its QR code with Lynx Explorer. The same entries also build for Web.

To regenerate the custom Loading Catalog and build every entry:

```sh
pnpm --filter @lynx-example/a2ui run build
```

## Protocol and Catalog

All messages use `version: "1.0"`. Dynamic bindings use `@path`; `updateDataModel.path` and collection-template `children.path` remain unprefixed. Data updates replace the value at the specified path, so each mock response includes the complete subtree it updates.

`src/catalogId.ts` identifies the example's trusted Catalog. Every Surface and Renderer uses this ID. Each entry registers its selected built-in components together with the local Loading component; the ID does not cause the Renderer to download code.

The `catalog` script generates `src/catalog.json` and `src/catalog/Loading/catalog.json` from `LoadingProps`. Regenerate these files after changing the component's props.

Renderer events pass through `onMessage` with a `version: "1.0"` envelope. User actions are in `message.action`. Weather forwards those actions to the mock Agent, while Actions handles selection and submission in the host. The mocks do not implement remote functions. Protocol errors are logged so invalid messages are visible during development.

Create a new message store and change the Renderer `key` when starting a new session. Updating an existing Surface uses `updateComponents` or `updateDataModel`, without another `createSurface` for the same ID.

See the [A2UI 1.0 specification](https://a2ui.org/specification/v1.0-a2ui/) and the [Lynx A2UI guide](https://lynx-stack.dev/guide/genui/a2ui).
