# CSS Transform Tests

Adapted WPT CSS transform tests for Lynx.

## Source

- WPT: https://github.com/web-platform-tests/wpt/tree/master/css/css-transforms
- Spec: https://drafts.csswg.org/css-transforms-1/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| rotate-180-degrees-001 | passing | Adapted from WPT `rotate-180-degrees-001.html`; web-test-render diff 0.1344%; setup-only absolute static position materialized, tested `rotate(180deg)` unchanged. |
| rotate-270-degrees-001 | passing | Adapted from WPT `rotate-270-degrees-001.html`; web-test-render diff 0.1500%; setup-only absolute static position materialized, tested `rotate(270deg)` unchanged. |
| scale-optional-second-001 | passing | Adapted from WPT `scale-optional-second-001.html`; web-test-render diff 0.0005%; verifies one-argument `scale(2)` uses the same scale factor on both axes. |
| transform-rotate-001 | passing | Adapted from WPT `transform-rotate-001.html`; web-test-render diff 0.0006%; explicit `.test-box` avoids broad `view {}` styling the wrapper. |
| transform-scale-001 | passing | Adapted from WPT `transform-scale-001.html`; web-test-render diff 0%; explicit `.test-box` avoids broad `view {}` styling the wrapper. |
| transform-scale-002 | passing | Adapted from WPT `transform-scale-002.html`; web-test-render diff 0%; explicit `.test-box` avoids broad `view {}` styling the wrapper. |
| transform-scalex-001 | passing | Adapted from WPT `transform-scalex-001.html`; web-test-render diff 0%; preserves Web default body margin with `page { padding: 8px; }`. |
| transform-scaley-001 | passing | Adapted from WPT `transform-scaley-001.html`; web-test-render diff 0%; explicit `.test-box` avoids broad `view {}` styling the wrapper. |
| transform-translate-001 | passing | Adapted from WPT `transform-translate-001.html`; web-test-render diff 0.0079%; explicit `.test-box` avoids broad `view {}` styling the wrapper. |
| transform-translatex-006 | passing | Adapted from WPT `transform-translatex-006.html`; web-test-render diff 0.1264%; setup-only absolute static position materialized, tested `translateX(50px)` unchanged. |
| transform-origin-007 | passing | `transform-origin: 50% bottom` matches the `50% 100%` control; web-test-render diff 0.0234%; setup-only static position materialized as `top: 70px`. |
| transform-origin-009 | passing | `transform-origin: 0% center` matches the `0% 50%` control; web-test-render diff 0.0234% on `emulator-5554` (2026-08-07 deepening batch). |
| transform-origin-010 | passing | `transform-origin: left 0%` matches the `0% 0%` control; web-test-render diff 0.0234% on `emulator-5554` (2026-08-07 deepening batch). |
| transform-origin-004 | passing | `transform-origin: 101px 50%` (length x percentage) matches the default `50% 50%`; web-test-render diff 0.0001%, confirming border-box percentage resolution. |
| transform-origin-005 | passing | `transform-origin: 50% 51px` (percentage x length) matches the default `50% 50%`; web-test-render diff 0.0001%. |
| transform-origin-006 | passing | `transform-origin: 50% 50%` with nonzero margin/border/padding resolves percentages against the border box; web-test-render diff 0.0001%. |
| transform-origin-name-003 | passing | `transform-origin: top` computes to `50% 0%`; web-test-render diff 0.0000%. |
| transform-origin-name-006 | passing | `transform-origin: top right` computes to `100% 0%`; web-test-render diff 0.0000%. |
| transform-origin | passing | `transform-origin: right bottom` with `rotate(90deg)`: green square fully covers red; web-test-render diff 0.0049%. |
| transforms-rotate-degree-45 | passing | Adapted from WPT `transforms-rotate-degree-45.html`; web-test-render diff 0.1234%. |
| transforms-rotate-degree-90 | passing | Adapted from WPT `transforms-rotate-degree-90.html`; web-test-render diff 0.1330%. |
| translate-optional-second-001 | passing | Adapted from WPT `translate-optional-second-001.html`; web-test-render diff 0.1162%. |
| ttwf-transform-translatex-001 | passing | Adapted from WPT `ttwf-transform-translatex-001.html`; web-test-render diff 0.1162%. |
| ttwf-transform-translatey-001 | passing | Adapted from WPT `ttwf-transform-translatey-001.html`; web-test-render diff 0.1162%. |

## Adaptation Notes

- WPT visual cases that rely on `position: absolute` with omitted `top`/`left` can use Web's static-position fallback for helper geometry. Materialize that helper position in TTSS only when needed for WebView parity; do not change the transform value under test.
- Reject a candidate if the original WPT test HTML produces a blank or non-observable WebView expected screenshot. In this batch, `translate.html` was not used because its x-webview expected image was blank.
- For simple scale boxes, prefer explicit target classes such as `.test-box`; broad converted selectors like `view { ... }` can accidentally style adapter wrapper views.
- One-argument `scale()` parity is covered by `scale-optional-second-001`; `transform-origin-007` adds one `bottom` keyword/computed-value sample. This does not cover other origin keywords/lengths, 3D scale, animation/interpolation, or SVG transforms.

## Running

```bash
ANDROID_SERIAL=<device> ./scripts/run-tests-android.sh --filter=css-transforms --use-test-as-ref --diff-percent=0.5 --wait-time=10
```
