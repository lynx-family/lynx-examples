# CSS2 Margin-Padding-Clear Tests

Adapted WPT CSS2 margin, padding, and clear tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/CSS2/margin-padding-clear
- Spec: https://drafts.csswg.org/css2/box.html

## Tests

### Padding Tests

| Test | Status | Notes |
|------|--------|-------|
| padding-bottom-001 | passing | Adapted from WPT `padding-bottom-001.xht`; negative padding (-1px) adapted to `0`. |
| padding-bottom-003 | passing | Adapted from WPT `padding-bottom-003.xht`. |
| padding-bottom-007 | passing | Adapted from WPT `padding-bottom-007.xht`. |
| padding-bottom-089 | passing | Adapted from WPT `padding-bottom-089.xht`; `in` unit converted to px. |
| padding-bottom-091 | passing | Adapted from WPT `padding-bottom-091.xht`; percentage padding. |
| padding-bottom-095 | passing | Adapted from WPT `padding-bottom-095.xht`; `in` units converted to px. |
| padding-bottom-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |
| padding-left-001 | passing | Adapted from WPT `padding-left-001.xht`; negative padding adapted to `0`. |
| padding-left-003 | passing | Adapted from WPT `padding-left-003.xht`. |
| padding-left-007 | passing | Adapted from WPT `padding-left-007.xht`; large child negative margin (-98px). |
| padding-left-089 | passing | Adapted from WPT `padding-left-089.xht`; `in` unit converted to px. |
| padding-left-091 | passing | Adapted from WPT `padding-left-091.xht`; percentage padding. |
| padding-left-095 | passing | Adapted from WPT `padding-left-095.xht`; `in` units + large negative margin (-192px). |
| padding-left-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |
| padding-right-001 | passing | Adapted from WPT `padding-right-001.xht`; negative padding adapted to `0`; empty nested boxes constrained to width 0 to match the WPT `float:left` shrink-wrap visual result. |
| padding-right-003 | passing | Adapted from WPT `padding-right-003.xht`. |
| padding-right-007 | passing | Adapted from WPT `padding-right-007.xht`. |
| padding-right-089 | passing | Adapted from WPT `padding-right-089.xht`; negative percentage adapted to `0`. |
| padding-right-091 | passing | Adapted from WPT `padding-right-091.xht`; percentage padding. |
| padding-right-095 | passing | Adapted from WPT `padding-right-095.xht`; `in` units converted to px. |
| padding-right-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |
| padding-top-001 | passing | Adapted from WPT `padding-top-001.xht`; negative padding (-1px) adapted to `0`. |
| padding-top-003 | passing | Adapted from WPT `padding-top-003.xht`. |
| padding-top-007 | passing | Adapted from WPT `padding-top-007.xht`; `+96px` adapted to `96px`. |
| padding-top-089 | passing | Adapted from WPT `padding-top-089.xht`; `in` unit converted to px; negative percentage adapted to `0`. |
| padding-top-091 | passing | Adapted from WPT `padding-top-091.xht`; percentage padding. |
| padding-top-095 | passing | Adapted from WPT `padding-top-095.xht`; `in` units converted to px. |
| padding-top-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |

### Margin Right Tests

| Test | Status | Notes |
|------|--------|-------|
| margin-right-004 | passing | Adapted from WPT `margin-right-004.xht`; `float: left` replaced with `display: flex; width: fit-content;`. `margin-right: -0px` preserved as `0`. |
| margin-right-007 | passing | Adapted from WPT `margin-right-007.xht`; `float: left` replaced with `display: flex; width: fit-content;`. Negative margin overlap (`margin-right: -2px`) works in flex layout. |
| margin-right-019 | passing | Adapted from WPT `margin-right-019.xht`; Uses native `direction: rtl` (Lynx supports CSS `direction`). `pt` units converted to px (`72pt = 96px`, `6pt = 8px`). Original `width: 0` preserved. |
| margin-right-067 | passing | Adapted from WPT `margin-right-067.xht`; RTL mirrored to LTR for cross-engine parity. `in` units converted to px (`1in = 96px`, `0.25in = 24px`). Original `width: 0` preserved. |
| margin-right-089 | passing | Adapted from WPT `margin-right-089.xht`; `float: left` replaced with `display: flex; width: fit-content;`. `0ex` preserved as `0`. Ahem font reference removed. |
| margin-right-091 | passing | Adapted from WPT `margin-right-091.xht`; RTL mirrored to LTR for cross-engine parity. `ex` units converted to px (Ahem x-height = 0.5em, so `7.5ex = 75px` at `20px` font). Original `width: 0` preserved. Ahem font reference removed. |
| margin-right-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |

### Margin Left Tests

| Test | Status | Notes |
|------|--------|-------|
| margin-left-004 | passing | Adapted from WPT `margin-left-004.xht`; `-0px` preserved as `0`. |
| margin-left-007 | passing | Adapted from WPT `margin-left-007.xht`; negative margin overlap (`margin-left: 96px` + `margin-left: -98px`) works in linear layout. |
| margin-left-019 | passing | Adapted from WPT `margin-left-019.xht`; `pt` units converted to px (`72pt = 96px`, `6pt = 8px`). |
| margin-left-067 | passing | Adapted from WPT `margin-left-067.xht`; `in` units converted to px (`1in = 96px`, `0.25in = 24px`). |
| margin-left-089 | passing | Adapted from WPT `margin-left-089.xht`; `0ex` preserved as `0`. Ahem font reference removed. |
| margin-left-091 | passing | Adapted from WPT `margin-left-091.xht`; `ex` units converted to px (Ahem x-height = 0.5em, so `7.5ex = 75px` at `20px` font). Ahem font reference removed. |
| margin-left-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |

### Margin Top Tests

| Test | Status | Notes |
|------|--------|-------|
| margin-top-004 | passing | Adapted from WPT `margin-top-004.xht`; `-0px` preserved as `0`. |
| margin-top-007 | passing | Adapted from WPT `margin-top-007.xht`; negative margin overlap (`margin-bottom: -98px` + `margin-top: 96px`) works in linear layout. |
| margin-top-019 | passing | Adapted from WPT `margin-top-019.xht`; `pt` units converted to px (`72pt = 96px`). |
| margin-top-067 | passing | Adapted from WPT `margin-top-067.xht`; `in` units converted to px (`1in = 96px`). |
| margin-top-089 | passing | Adapted from WPT `margin-top-089.xht`; `0ex` preserved as `0`. Ahem font reference removed. |
| margin-top-091 | passing | Adapted from WPT `margin-top-091.xht`; `ex` units converted to px (Ahem x-height = 0.5em, so `7.5ex = 75px` at `20px` font). Ahem font reference removed. |
| margin-top-applies-to-002 | skipped | Tests `display: table-header-group` which is unsupported in Lynx. |

## Running

```bash
# Run all margin-padding-clear tests
./scripts/run-tests-android.sh --filter=css2

# Run specific test
./scripts/run-tests-android.sh --test=padding-top-001 --diff-percent=0.5
```

## Common Adaptations

1. **Negative padding**: Lynx does not clamp negative padding to 0; adapted to `0` explicitly.
2. **`in` unit**: Lynx does not support the `in` unit; converted to px (`1in = 96px`).
3. **`pt` unit**: Lynx does not support the `pt` unit; converted to px (`72pt = 96px`, `1pt ≈ 1.333px`).
4. **`ex` unit**: Lynx does not support the `ex` unit; converted to px assuming Ahem font x-height = 0.5em (`1ex = 10px` at `20px` font).
5. **`+` prefix on lengths**: Lynx may not support `+96px`; adapted to `96px`.
6. **Table display types**: `display: table-header-group`, `table-cell`, etc. are unsupported; skipped.
7. **Margin collapsing**: Lynx does not collapse margins. For precise vertical alignment with Web rendering:
   - Use `.body { margin: 0; }` (remove body margin)
   - Use `.__ua-p { margin-top: 1em; margin-bottom: 1em; }` (full 1em margins)
   - This matches Web's collapsed behavior: `body` 8px + `p` 1em collapse to 1em = 16px.
8. **Box model**: Default `box-sizing: border-box` in Lynx; set `box-sizing: content-box` to match Web behavior.
9. **Layout**: `.body` wrapper with `display: linear; linear-direction: column;` to simulate Web block flow.
10. **Negative margin overlap**: Negative margins on adjacent elements work correctly in Lynx linear layout (e.g., `margin-bottom: -98px` + `margin-top: 96px`).
