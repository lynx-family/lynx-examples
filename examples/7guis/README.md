# 7GUIs

The [7GUIs](https://eugenkiss.github.io/7guis/) benchmark implemented in ReactLynx. Each task exercises a different aspect of UI programming.

## Tasks

### Counter

Basic `useState` with a tap handler. The simplest possible state management example.

### Temperature Converter

Two-way data binding between Celsius and Fahrenheit `<input>` fields using controlled components.

### Flight Booker

Form validation and conditional logic — a date-based flight booking form with one-way / return toggle and input validation.

### Timer

Elapsed-time progress driven by `setInterval`, with a draggable duration control. Demonstrates timer lifecycle and cleanup with `useEffect`.

### CRUD

Filterable list with create, update, and delete operations. Shows list rendering with `v-for`-style mapping, text input binding, and selection state.

### Circle Drawer

Tap-to-draw circles on a canvas-like area with undo/redo history and radius adjustment. Exercises complex state (history stack, selection, adjustment mode) and absolute positioning.

### Cells

A 5x10 spreadsheet grid supporting formulas (`=A0+B1`). Demonstrates dynamic expression evaluation, cell references, and inline editing with `<input>`.

## Getting Started

```bash
pnpm install
pnpm run dev
```

Each task is a separate entry point — the dev server will list all of them. Scan the QR code with [LynxExplorer](https://lynxjs.org/guide/start/quick-start.html#setting-up-the-development-environment) to preview on device.
