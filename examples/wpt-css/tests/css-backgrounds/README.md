# CSS Backgrounds Tests

Adapted WPT `css/css-backgrounds/` static visual tests for Lynx.

These cases are validated against the original WPT test HTML rendered in WebView (`Reference-Mode: web-test-render`). Match-reference HTML is not used.

## Tests

| Test | Status | Notes |
|------|--------|-------|
| background-color-body-propagation-001 | passing | Android `emulator-5554`, diff 0.2773%. |
| background-color-body-propagation-002 | passing | Android `emulator-5554`, diff 0.1359%. |
| simple-bg-color | passing | Android `emulator-5554`, diff 0.0000%; verifies simple solid `background-color` boxes. |
| background-color-clip | failing | Android `emulator-5554`, diff 1.2514%; Lynx paints through the transparent border while WebView clips color to the content box for the bottom layer. |
| background-image-001 | passing | Android `emulator-5554`, diff 0.3721%; direct `background-image:url(...)` raster coverage. |
| background-image-none-001 | passing | Android `emulator-5556`, diff 0.1879%; `background-image: none` clears the inherited 1x1 red image sentinel, with zero red pixels in both WebView and Lynx. |
| background-size-cover-001 | passing | Android `emulator-5554`, diff 0.0170%; `cover` produces the expected 100px green square with no red sentinel. |
| background-size-contain-001 | passing | Physical Pixel 6 Pro, diff 0.0465%; `contain` produces the expected 100px green square with no red sentinel. |
| background-repeat-repeat-x | passing | Physical Pixel 6 Pro, diff 0.0575%; a 96px by 60px bitmap repeats only across the 240px-wide axis. |
| background-repeat-repeat-y | passing | Physical Pixel 6 Pro, diff 0.0769%; a 96px by 60px bitmap repeats only down the 150px-high axis. |
| background-shorthand-repeat-y | partial | The exact `background: url(...) repeat-y` shorthand paints a WebView-identical vertical cat column; full screenshot fails at 1.3518% because explanatory text wraps to 9 WebView lines versus 8 Lynx lines. |
| background-shorthand-cover-001 | failing | Exact `background: url(...) 0 0 / cover no-repeat` leaves the lower 100x50 red sentinel visible; Android diff 1.2528%. |
| background-shorthand-contain-001 | passing | Exact `background: url(...) 0 0 / contain no-repeat` produces the same 300x300-device-pixel green square as WebView; diff 0.0219%. |
| background-shorthand-repeat-001 | passing | Exact `background: url(...) repeat` fills the 1202x600-device-pixel inner rectangle blue in both renders; diff 0.0118%. |
| background-334 | failing | Android `emulator-5554`, diff 1.9995%; length-focused `background` shorthand coverage. |
| background-none-none-and-color | failing | Android `emulator-5554`, diff 0.7101%. |
| border-top-left-radius-002 | passing | Android `emulator-5554`, diff 0.4531%; one length `25px`. |
| border-top-left-radius-010 | passing | Android `emulator-5554`, diff 0.4384%; `25px 0` zero component keeps the corner square, matching the in-page `#reference` box. |
| border-top-left-radius-014 | passing | Android `emulator-5554`, diff 0.4384%; `50px -25px` invalid negative length keeps the corner square, matching the in-page `#reference` box. |
| border-top-left-radius-values-001 | passing | Android `emulator-5554`, diff 0.0222%; two lengths `50px 80px` checked against the in-page blue `#reference` ruler. |
| border-bottom-right-radius-002 | passing | Android `emulator-5554`, diff 0.4877%; one length `25px`. |
| border-bottom-right-radius-010 | passing | Android `emulator-5554`, diff 0.4384%; `25px 0` zero component keeps the corner square, matching the in-page `#reference` box. |
| border-bottom-right-radius-014 | passing | Android `emulator-5554`, diff 0.4384%; `50px -25px` invalid negative length keeps the corner square, matching the in-page `#reference` box. |
| background-image-centered-with-border-radius | passing | Android `emulator-5554`, diff 0.0081%; `no-repeat center` shorthand keeps the image centered inside the rounded border box. |

See `docs/wpt-background-image-coverage.md` for the direct raster image case, `docs/wpt-background-length-coverage.md` for the selected length-focused shorthand cases, `docs/wpt-todo-css-properties-20260723-coverage.md` for the direct `background-size: cover` sample, `docs/wpt-todo-css-properties-20260723-ten-more-coverage.md` for `contain` plus single-axis repeat coverage, `docs/wpt-border-radius-coverage.md` for the border-radius corner cases, and `docs/wpt-background-shorthand-coverage.md` for the `background` shorthand component cases (including the centered no-repeat card).

Current `background-image: none` evidence: `docs/evidence/css-property-background-image-none-20260813-summary.tsv`.

Current `background: ... repeat-y` evidence: `docs/evidence/css-property-background-shorthand-repeat-y-20260813-summary.tsv`.

Current `background` shorthand value evidence: `docs/evidence/css-property-background-shorthand-values-20260813-summary.tsv`.
