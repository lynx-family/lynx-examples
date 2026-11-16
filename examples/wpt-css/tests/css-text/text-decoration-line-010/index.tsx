/*
Source: imported/wpt-upstream/css/css-text-decor/text-decoration-line-010.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2295%
Evidence: docs/evidence/css-property-text-decoration-line-20260813-summary.tsv
Title: CSS Text Decoration Test: text-decoration-line - none
Assert: This test checks that 'text-decoration-line: none' does not produce any text decoration.
Note: The source Mplus font is reused from the adjacent text-decoration-line-011 card. Source divs become text elements; the tested longhand and shorthand control remain unchanged. Verified visually on Android Pixel_9_Pro/emulator-5556 (2026-08-13), but matching no-decoration output does not by itself prove parser-level acceptance of none.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the 2 \"Text sample サンプル文\" are identical."}
</text>
<text id={"test"} className={"sample"}>
{"Text sample サンプル文"}
</text>
<text id={"control"} className={"sample"}>
{"Text sample サンプル文"}
</text>
</view>
</>);
