# Vanilla Element PAPI

This example builds Lynx bundles directly with Element PAPI and TypeScript, without ReactLynx, JSX, or a virtual DOM.

## Examples

- `background-interaction`: a double-thread page that sends a title update to background state and applies the returned Element Patch on the main thread.
- `counter`: a counter whose tap events and UI updates are handled directly on the main thread.
- `event-card`: a standalone main-thread event card with reminder and join-schedule interactions.
- `hello-lynx`: a minimal main-thread page that handles Lynx render, update, and destroy lifecycle events directly.
- `product-card`: a standalone main-thread product card with save and add-to-cart interactions.
- `simple-interaction`: a main-thread page with a minimal `useState` implementation that updates its greeting when the title is tapped.
- `todolist`: a double-thread todo list. The main thread renders Element PAPI nodes and forwards tap events to the background thread, while the background thread updates data, measures its rendering pipeline, and sends patches back to the main thread.
- `weather-card`: a standalone main-thread weather card with refreshable local conditions.

## Performance Evaluation

The `todolist` entry registers a `PerformanceObserver` on the background
thread as early as possible. Tap the floating `Perf` button to expand a panel
with the initial `loadBundle` Lynx FCP and each user-triggered update pipeline.
Every measured update has a unique timing flag and forwards the generated pipeline options to
`__FlushElementTree`; full entries remain in the background-thread logs.

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

The build outputs `dist/<entry>.lynx.bundle` and `dist/<entry>.web.bundle` for every entry.

`@lynx-js/vanilla-rsbuild-plugin` targets Lynx Engine `3.5` and enables the event listener refactor.

## Project Structure

- `src/common/main-thread`: shared main-thread lifecycle, Element PAPI, and event helpers.
- `src/common/background`: shared background-thread event and data helpers.
- `src/background-interaction`: minimal double-thread state, Patch, and Element PAPI entry for documentation.
- `src/counter`: main-thread-only counter entry and styles.
- `src/event-card`: standalone main-thread event card entry and styles.
- `src/hello-lynx`: minimal main-thread lifecycle and Element PAPI entry for documentation.
- `src/product-card`: standalone main-thread product card entry and styles.
- `src/simple-interaction`: minimal main-thread event and UI update entry for documentation.
- `src/todolist`: double-thread todo list entry, background event logic, types, and styles.
- `src/weather-card`: standalone main-thread weather card entry and styles.
- `lynx.config.ts`: configures Rspeedy and `@lynx-js/vanilla-rsbuild-plugin` for Lynx and Web main-thread bundles, optional background bundles, CSS, and template encoding.

Entries that do not need background-thread logic still include an empty `background.ts`. This temporarily supplies the app-service entry required by the current Web encoder while keeping all business and UI work on the main thread.

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
