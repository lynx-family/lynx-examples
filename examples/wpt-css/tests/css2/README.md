# CSS2 Tests

Adapted WPT CSS2 tests for Lynx.

## Subdirectories

- [`backgrounds/`](backgrounds/) — Background and background-color tests from WPT `css/CSS2/backgrounds/`
- [`margin-padding-clear/`](margin-padding-clear/) — Margin, padding, and clear tests from WPT `css/CSS2/margin-padding-clear/`
- Border shorthand samples from WPT `css/CSS2/borders/`
- Border-width longhand samples from WPT `css/CSS2/borders/`
- Border-style shorthand samples from WPT `css/CSS2/borders/`

## Tests

| Test | Status | Notes |
|------|--------|-------|
| background color representative batch | partial | 13 selected CSS2 background/background-color static visual cases adapted under `backgrounds/` from upstream WPT `css/CSS2/backgrounds/` @ `748511b87500`; Android `emulator-5554` result is 8 passing / 5 failing. See `docs/wpt-background-color-coverage.md`. |
| TODO property ten-more CSS2 subset | passing | 7 CSS2 cases from WPT @ `af38980d2fcd74af19a226f5f651051cc15940ed`: two-axis `background-repeat`, italic `font-style`, percentage `line-height`, and nominal `96px` top/right/bottom/left border widths. All 7 pass on physical Pixel 6 Pro at 0.0108%-0.2206%. See `docs/wpt-todo-css-properties-20260723-ten-more-coverage.md` and `docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv`. |
| border length shorthand representative batch | passing | 6 selected CSS2 border shorthand cases adapted from upstream WPT `css/CSS2/borders/` @ `5a18ac447a1968a0446e11a9024a5ee23941cfad`; Android `emulator-5554` result is 6/6 passing. See `docs/wpt-border-length-coverage.md` and `docs/evidence/css2-border-length-20260623-summary.tsv`. |
| border style/color shorthand representative batch | passing | 3 selected CSS2 border shorthand cases adapted from upstream WPT `css/CSS2/borders/` @ `1492dda6f254cf98840113cbca00b072fe06b9c5`; Android `Pixel_9_Pro` emulator result is 3/3 passing. See `docs/wpt-border-length-coverage.md` and `docs/evidence/css2-border-style-color-20260703-summary.tsv`. |
| border-width representative batch | partial | 6 selected CSS2 `border-width` longhand/shorthand cases adapted from upstream WPT `css/CSS2/borders/` @ `d8a9dbef4d9623b05c0d69a822ce8a0067cc23d2`; the four `border-{top,right,bottom,left}-width-006` cards are superseded by the master adaptation (see the TODO ten-more row above), leaving `border-width-shorthand-004` and `border-width-comparison-001` unique to this batch. Android validation of the unique cases is pending. See `docs/wpt-border-width-coverage.md`. |
| border-style side shorthand batch | passing | 4 selected CSS2 side shorthand cases (`border-top-002`, `border-right-002`, `border-bottom-002`, `border-left-002`) adapted from upstream WPT `css/CSS2/borders/` @ `722934828a1f4269dea6f6763fb30d993a404cb7`; 4/4 have valid passing Android evidence on device `B6SKZPAA89ONCIUO` at 0.1691%-0.3601% diff. The `border-002` card from the same batch is superseded by the master adaptation (see the border style/color row above). See `docs/wpt-border-style-coverage.md`, `docs/evidence/css2-border-style-20260624-summary.tsv`, and `docs/evidence/css2-border-style-left-20260625-summary.tsv`. |
| border-right-style representative batch | partial | 5 selected direct-value cases from upstream WPT `css/CSS2/borders/` @ `8e3d3261432a28800a28676d9b7617b3e7bc0f33`; `none`, `solid`, `double`, and `groove` pass at 0.0075%-0.0576%, while `dotted` fails a strict 0% comparison because Lynx paints rectangular segments instead of WebView's circular dots. Evidence: `docs/evidence/css-property-border-right-style-20260813-summary.tsv`; diagnosis: `docs/diagnostics/border-right-style-20260813.md`. |
