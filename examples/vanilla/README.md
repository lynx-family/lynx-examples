# Vanilla Element PAPI

This example builds Lynx bundles directly with Element PAPI and TypeScript, without ReactLynx, JSX, or a virtual DOM.

## Examples

- `counter`: a main-thread-only counter. It has no background thread entry; tap events are handled directly on the main thread.
- `event-card`: a standalone main-thread event card with reminder and join-schedule interactions.
- `product-card`: a standalone main-thread product card with save and add-to-cart interactions.
- `todolist`: a double-thread todo list. The main thread renders Element PAPI nodes and forwards tap events to the background thread, while the background thread updates data and sends patches back to the main thread.
- `weather-card`: a standalone main-thread weather card with refreshable local conditions.

## Getting Started

First, install the dependencies from the repository root:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm --filter @lynx-example/vanilla run dev
```

Scan the QR code in the terminal with LynxExplorer to preview the entries.

## Build

```bash
pnpm --filter @lynx-example/vanilla run build
```

The build outputs `dist/counter.bundle`, `dist/event-card.bundle`, `dist/product-card.bundle`, `dist/todolist.bundle`, and `dist/weather-card.bundle`.

The custom template plugin targets Lynx Engine `3.5`, and `lynx.config.js` enables the event listener refactor with `pluginLynxConfig`.

## Project Structure

- `src/common/main-thread`: shared main-thread lifecycle, Element PAPI, and event helpers.
- `src/common/background`: shared background-thread event and data helpers.
- `src/counter`: main-thread-only counter entry and styles.
- `src/event-card`: standalone main-thread event card entry and styles.
- `src/product-card`: standalone main-thread product card entry and styles.
- `src/todolist`: double-thread todo list entry, background event logic, types, and styles.
- `src/weather-card`: standalone main-thread weather card entry and styles.
- `plugin.js`: custom Rspeedy/Rspack wiring for main-thread bundles, optional background bundles, CSS, and Lynx template encoding.

## Shared Helpers

Main-thread helpers:

- `setupMainThread`: listens to engine lifecycle events with `lynx.getEngine().addEventListener`, including `__RenderPage`, `__UpdatePage`, and `__DestroyLifetime`. Destroy is also forwarded to the background thread for cleanup.
- `createPage`, `createText`, `createView`, `replaceChildren`: small wrappers around Element PAPI node creation and replacement.
- `bindMainThreadEvent`: binds events that are handled on the main thread.
- `bindBackgroundEvent`: binds events that are forwarded to and handled on the background thread.

Background-thread helpers:

- `setupBackground`: listens for `UpdateDataFromMainThread` from the main thread and clears background listeners on `__DestroyLifetime`.
- `getData` and `setData`: read and update background data. `setData` automatically dispatches changed data back to the main thread.
- `setBackgroundEventHandler`: receives event handler names forwarded from the main thread and runs background-side logic.

The first data update from the main thread is treated as first-screen data and does not dispatch `UpdateDataFromBackground`; later updates use the normal `setData` flow and can dispatch patches back to the main thread.
