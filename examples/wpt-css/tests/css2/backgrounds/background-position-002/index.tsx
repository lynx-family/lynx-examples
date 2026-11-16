/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-002.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 2.5533%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Test: background-position - ex unit
Assert: ex unit is the 'x-height' of the relevant font. 'em' and 'ex' length values when defining 'font-size' property refer to the computed font size of the parent element.
Note: Probe case — the ex units, the Ahem font setup ('font: 20px/1 Ahem' on html -> page, verbatim), and the body-to-canvas background propagation are all kept verbatim on purpose; failure is a valid conclusion and the root cause is recorded after validation. The shorthand under test ('background: url(1x1-lime.png) repeat-y 12.5ex 0'), the ex-based 'font-size: 2.5ex', and the source body margin (80px top) are verbatim. The in-paragraph <img> ruler becomes an <image> sibling whose HTML width/height attributes (700x18) are materialized as explicit geometry. Ahem is embedded as base64 in TTSS (same block as tests/css-text/letter-spacing-007); the WebView oracle loads /fonts/ahem.css from the repo-root fonts/ directory. Verified on Android emulator-5554 (2026-07-29): FAILS at 2.5533% diff, as anticipated for this probe. The oracle shows the lime vertical line at exactly 400px (Ahem x-height is 0.8em, so body font-size 2.5ex computes to 40px and 12.5ex = 12.5 x 32px = 400px), propagated canvas-wide; Lynx paints no lime line anywhere, so the ex-valued position invalidates the whole shorthand declaration (ex is documented as unsupported). Secondary observations: 'font: 20px/1 Ahem' on page does not take effect (text renders at default metrics), and 'font-family: serif' falls back to the default sans. Classification: known unsupported unit (non-defect difference), not an engine bug.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"expected-results"}>
{"A thin green vertical line should appear at exactly 400px"}
</text>
<image className={"ruler"} src={"support/ruler-h-200px-400px.png"} />
</view>
</>);
