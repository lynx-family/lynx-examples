# CSS Color Tests

Adapted WPT CSS color and opacity tests for Lynx.

## Source

- WPT CSS Color: https://github.com/web-platform-tests/wpt/tree/master/css/css-color
- Spec: https://drafts.csswg.org/css-color-3/

## Tests

| Test | Status | Notes |
|------|--------|-------|
| t32-opacity-basic-0.0-a | passing | Adapted from WPT `t32-opacity-basic-0.0-a.xht`; historical pre-policy run; text rendering, no opacity applied; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-basic-0.6-a | passing | Adapted from WPT `t32-opacity-basic-0.6-a.xht`; historical pre-policy run; solid color blocks with `opacity: 0.6`; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-basic-1.0-a | passing | Adapted from WPT `t32-opacity-basic-1.0-a.xht`; historical pre-policy run; `opacity: 1.0` no-op; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-clamping-0.0-b | passing | Adapted from WPT `t32-opacity-clamping-0.0-b.xht`; historical pre-policy run; opacity zero case with text rendering; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-clamping-1.0-b | passing | Adapted from WPT `t32-opacity-clamping-1.0-b.xht`; historical pre-policy run; values above 1.0; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-offscreen-b | passing | Adapted from WPT `t32-opacity-offscreen-b.xht`; historical pre-policy run; nested boxes with opacity; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-offscreen-multiple-boxes-1-c | failing | Adapted from WPT `t32-opacity-offscreen-multiple-boxes-1-c.xht`; fails due to margin collapsing and nested layout differences. |
| t32-opacity-offscreen-multiple-boxes-2-c | passing | Adapted from WPT `t32-opacity-offscreen-multiple-boxes-2-c.xht`; historical pre-policy run; nested layout variant with `line-height: 0`; revalidate with web-test-render before treating as final parity evidence. |
| t32-opacity-zorder-c | failing | Adapted from WPT `t32-opacity-zorder-c.xht`; fails because `opacity < 1` does not create the expected stacking context in Lynx. |
| t421-rgb-hex3-a | passing | Adapted from WPT `t421-rgb-hex3-a.xht`; CSS Color 3 `#rgb` text matrix; Android diff 0.2134% on 2026-05-21. |
| t421-rgb-hex6-a | passing | Adapted from WPT `t421-rgb-hex6-a.xht`; CSS Color 3 `#rrggbb` text matrix; Android diff 0.2134% on 2026-05-21. |
| t421-rgb-hex3-expand-b | passing | Adapted from WPT `t421-rgb-hex3-expand-b.xht`; css-color swatch assertion passes; full-screenshot diff is 0.5378% only because explanatory text rendering differs from WebView. |
| t421-rgb-hex-parsing-f | failing | Adapted from WPT `t421-rgb-hex-parsing-f.xht`; invalid hex declarations do not preserve the green fallback in Lynx; Android diff 0.7509%. |
| color-computed-hex-color | skipped | Static equivalent of WPT testharness computed hex parser cases; no direct visual oracle. |
| color-invalid-hex-color | skipped | Static equivalent of WPT testharness invalid hex parser cases; no direct visual oracle. |
| rgb-001 | passing | Adapted from WPT `rgb-001.html`; `rgb(0% 50% 0%)` passes WebView screenshot comparison at 0.0888%. |
| rgb-002 | passing | Adapted from WPT `rgb-002.html`; `rgb(0 128.0 0)` passes WebView screenshot comparison at 0.0888%. |
| rgb-003 | passing | Adapted from WPT `rgb-003.html`; `rgb(0% 50% 0% / 1.0)` passes WebView screenshot comparison at 0.0888%. |
| rgb-004 | passing | Adapted from WPT `rgb-004.html`; `rgb(0 128.0 0 / 1)` passes WebView screenshot comparison at 0.0888%. |
| rgb-005 | passing | Adapted from WPT `rgb-005.html`; `rgb(0% 50% 0% / 100%)` passes WebView screenshot comparison at 0.0888%. |
| rgb-006 | passing | Adapted from WPT `rgb-006.html`; `rgb(0 128.0 0 / 100%)` passes WebView screenshot comparison at 0.0888%. |
| rgb-007 | passing | Adapted from WPT `rgb-007.html`; `rgb(0%, 50%, 0%, 100%)` passes WebView screenshot comparison at 0.0888%. |
| rgb-008 | passing | Adapted from WPT `rgb-008.html`; `rgb(0, 128.0, 0, 100%)` passes WebView screenshot comparison at 0.0888%. |
| rgba-001 | failing | Adapted from WPT `rgba-001.html`; `rgba(0% 50% 0%)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-002 | failing | Adapted from WPT `rgba-002.html`; `rgba(0 128.0 0)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-003 | failing | Adapted from WPT `rgba-003.html`; `rgba(0% 50% 0% / 1.0)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-004 | failing | Adapted from WPT `rgba-004.html`; `rgba(0 128.0 0 / 1)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-005 | failing | Adapted from WPT `rgba-005.html`; `rgba(0% 50% 0% / 100%)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-006 | failing | Adapted from WPT `rgba-006.html`; `rgba(0 128.0 0 / 100%)` leaves the red fallback visible in Lynx, Android diff 4.9888%. |
| rgba-007 | passing | Adapted from WPT `rgba-007.html`; `rgba(0%, 50%, 0%, 100%)` passes WebView screenshot comparison at 0.0888%. |
| rgba-008 | passing | Adapted from WPT `rgba-008.html`; `rgba(0, 128.0, 0, 100%)` passes WebView screenshot comparison at 0.0888%. |
| out-of-gamut-legacy-rgb | passing | Adapted from WPT `out-of-gamut-legacy-rgb.html`; `rgba(500, 500, 500, 0.5)` clamps to WebView-compatible gray, Android diff 0.0000%. |
| background-color-rgb-001 | passing | Adapted from WPT `background-color-rgb-001.html`; `background-color: rgb(...)` alpha, non-integer, comment separator, and comma-less forms pass WebView screenshot comparison at 0.0185%. |
| background-color-rgb-002 | failing | Adapted from WPT `background-color-rgb-002.html`; only the first two explicit-alpha legacy comma `rgba(...)` rows paint in Lynx, Android diff 15.3307%. |
| background-color-rgb-003 | failing | Adapted from WPT `background-color-rgb-003.html`; `rgb()` four-argument alias rows paint, but `rgba()` no-alpha alias rows are missing, Android diff 9.5886%. |
| hsl-001 | failing | Adapted from WPT `hsl-001.html`; `hsl(120 100% 25%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-002 | failing | Adapted from WPT `hsl-002.html`; `hsl(120deg 100% 25%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-003 | failing | Adapted from WPT `hsl-003.html`; `hsl(120 100% 25% / 1.0)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-004 | failing | Adapted from WPT `hsl-004.html`; `hsl(120deg 100% 25% / 1)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-005 | failing | Adapted from WPT `hsl-005.html`; `hsl(120 100% 25% / 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-006 | failing | Adapted from WPT `hsl-006.html`; `hsl(120deg 100% 25% / 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-007 | failing | Adapted from WPT `hsl-007.html`; `hsl(120, 100%, 25%, 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-008 | failing | Adapted from WPT `hsl-008.html`; `hsl(120deg, 100%, 25%, 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsl-clamp-negative-saturation | failing | Adapted from WPT `hsl-clamp-negative-saturation.html`; negative saturation clamping diverges from WebView, Android diff 2.0716%. |
| hsla-001 | failing | Adapted from WPT `hsla-001.html`; `hsla(120 100% 25%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-002 | failing | Adapted from WPT `hsla-002.html`; `hsla(120deg 100% 25%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-003 | failing | Adapted from WPT `hsla-003.html`; `hsla(120 100% 25% / 1.0)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-004 | failing | Adapted from WPT `hsla-004.html`; `hsla(120deg 100% 25% / 1)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-005 | failing | Adapted from WPT `hsla-005.html`; `hsla(120 100% 25% / 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-006 | failing | Adapted from WPT `hsla-006.html`; `hsla(120deg 100% 25% / 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-007 | passing | Adapted from WPT `hsla-007.html`; `hsla(120, 100%, 25%, 100%)` passes WebView screenshot comparison at 0.0888%. |
| hsla-008 | failing | Adapted from WPT `hsla-008.html`; `hsla(120deg, 100%, 25%, 100%)` leaves the test swatch unpainted and does not preserve the red fallback in Lynx, Android diff 4.9888%. |
| hsla-clamp-negative-saturation | failing | Adapted from WPT `hsla-clamp-negative-saturation.html`; negative saturation clamping and alpha compositing diverge from WebView, Android diff 1.4947%. |
| background-color-hsl-001 | failing | Adapted from WPT `background-color-hsl-001.html`; only a narrow legacy comma explicit-alpha subset of `hsla(...)` background rows paint, Android diff 15.3304%. |
| background-color-hsl-002 | failing | Adapted from WPT `background-color-hsl-002.html`; `hsl()` alpha and modern/comment separator paths mostly do not paint, Android diff 17.2444%. |
| background-color-hsl-003 | failing | Adapted from WPT `background-color-hsl-003.html`; HSL/HSLA `<angle>` hue background rows diverge from WebView, Android diff 15.3297%. |
| background-color-hsl-004 | failing | Adapted from WPT `background-color-hsl-004.html`; `hsl()` / `hsla()` alias background behavior is not aligned and all test rows are missing in Lynx, Android diff 19.1584%. |
| border-color-currentcolor | revalidate | Adapted from WPT `border-color-currentcolor.html`; broad `view` selector was scoped to `.case-box`, so the old 6.6529% Android result is pre-fix evidence and needs rerun. |
| border-top-color | passing | Adapted from WPT `border-top-color.xht`; setup-only `1in` geometry normalized to `96px` with Web content-box sizing, Android diff 0.0735%. |
| border-right-color | passing | Adapted from WPT `border-right-color.xht`; setup-only `1in` geometry normalized to `96px` with Web content-box sizing, Android diff 0.0735%. |
| border-bottom-color | passing | Adapted from WPT `border-bottom-color.xht`; setup-only `1in` geometry normalized to `96px` with Web content-box sizing, Android diff 0.0735%. |
| border-left-color | passing | Adapted from WPT `border-left-color.xht`; setup-only `1in` geometry normalized to `96px` with Web content-box sizing, Android diff 0.0735%. |
| t31-color-currentcolor-b | passing | Adapted from WPT `t31-color-currentColor-b.xht`; matches through normal `color` inheritance, not generic `currentColor` keyword support, Android diff 0.0169%. |
| t44-currentcolor-background-b | failing | Adapted from WPT `t44-currentcolor-background-b.xht`; `background-color: currentColor` diverges from WebView, Android diff 3.4448%. |
| t44-currentcolor-border-b | failing | Adapted from WPT `t44-currentcolor-border-b.xht`; `border-color: currentColor` diverges from WebView, Android diff 2.2908%. |
| t44-currentcolor-inherited-c | failing | Adapted from WPT `t44-currentcolor-inherited-c.xht`; inherited `currentColor` path diverges from WebView, Android diff 1.5594%. |
| t423-transparent-1-a | passing | Adapted from WPT `t423-transparent-1-a.xht`; `color: transparent` hides text on white background, Android diff 0.1285%. |
| t423-transparent-2-a | passing | Adapted from WPT `t423-transparent-2-a.xht`; `color: transparent` hides text on black background, Android diff 0.1278%. |
| t421-rgb-func-int-a | passing | Adapted from WPT `t421-rgb-func-int-a.xht`; legacy CSS3 `rgb()` integer channels pass WebView comparison, Android diff 0.2135%. |
| t421-rgb-func-pct-a | passing | Adapted from WPT `t421-rgb-func-pct-a.xht`; legacy CSS3 `rgb()` percentage channels pass WebView comparison, Android diff 0.2135%. |
| t421-rgb-func-whitespace-b | passing | Adapted from WPT `t421-rgb-func-whitespace-b.xht`; legacy CSS3 `rgb()` whitespace forms pass WebView comparison, Android diff 0.0998%. |
| t421-rgb-func-no-mixed-f | failing | Adapted from WPT `t421-rgb-func-no-mixed-f.xht`; invalid mixed integer/percentage channels do not preserve the WebView fallback, Android diff 0.7924%. |
| t421-rgb-values-meaning-b | failing | Adapted from WPT `t421-rgb-values-meaning-b.xht`; CSS3 RGB values matrix diverges from WebView, Android diff 33.0844%. |
| t421-rgb-clip-outside-gamut-b | failing | Adapted from WPT `t421-rgb-clip-outside-gamut-b.xht`; RGB out-of-gamut clipping diverges from WebView, Android diff 10.2806%. |
| t422-rgba-a0.0-a | passing | Adapted from WPT `t422-rgba-a0.0-a.xht`; legacy `rgba(..., 0.0)` passes WebView comparison, Android diff 0.1285%. |
| t422-rgba-a0.6-a | passing | Adapted from WPT `t422-rgba-a0.6-a.xht`; legacy `rgba(..., 0.6)` passes WebView comparison, Android diff 0.0307%. |
| t422-rgba-a1.0-a | passing | Adapted from WPT `t422-rgba-a1.0-a.xht`; legacy `rgba(..., 1.0)` passes WebView comparison, Android diff 0.2292%. |
| t422-rgba-clamping-a0.0-b | passing | Adapted from WPT `t422-rgba-clamping-a0.0-b.xht`; legacy rgba alpha clamping to 0 passes WebView comparison, Android diff 0.1285%. |
| t422-rgba-clamping-a1.0-b | failing | Adapted from WPT `t422-rgba-clamping-a1.0-b.xht`; legacy rgba alpha clamping above 1 diverges from WebView, Android diff 0.9901%. |
| t422-rgba-clip-outside-device-gamut-b | failing | Adapted from WPT `t422-rgba-clip-outside-device-gamut-b.xht`; RGBA out-of-gamut clipping diverges from WebView, Android diff 12.1557%. |
| t422-rgba-func-int-a | passing | Adapted from WPT `t422-rgba-func-int-a.xht`; legacy CSS3 `rgba()` integer channels pass WebView comparison, Android diff 0.2135%. |
| t422-rgba-func-pct-a | passing | Adapted from WPT `t422-rgba-func-pct-a.xht`; legacy CSS3 `rgba()` percentage channels pass WebView comparison, Android diff 0.2135%. |
| t422-rgba-func-whitespace-b | passing | Adapted from WPT `t422-rgba-func-whitespace-b.xht`; legacy CSS3 `rgba()` whitespace forms pass WebView comparison, Android diff 0.0998%. |
| t422-rgba-func-no-mixed-f | failing | Adapted from WPT `t422-rgba-func-no-mixed-f.xht`; invalid mixed integer/percentage channels do not preserve the WebView fallback, Android diff 0.7924%. |
| t422-rgba-values-meaning-b | failing | Adapted from WPT `t422-rgba-values-meaning-b.xht`; CSS3 RGBA values matrix diverges from WebView, Android diff 29.0055%. |

## Running

```bash
./scripts/run-tests-android.sh --filter=css-color --diff-percent=0.5
```
