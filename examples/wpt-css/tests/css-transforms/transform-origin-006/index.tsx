/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-006.html
WPT-Revision: 320db3b1a6cf19b4de520ad7a2f6a152faa77780
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0001%
Evidence: docs/evidence/css-transforms-transform-origin-deepening-20260807-summary.tsv
Title: CSS Test (Transforms): transform-origin percentages 4
Assert: Percentages in transform-origin refer to the size of the element's border box. This tests that they don't refer to the content, padding, or margin box by applying nonzero margin, border, and padding.
Note: The declaration under test ('transform-origin: 50% 50%') plus the nonzero margin/border/padding and the relative 5px shift are verbatim; the global content-box reset keeps the box model Web-compatible so the border box is 202x102px as the source asserts. The source 'body > div' margin: 5px is normalized to 'margin: 0 5px': Web collapses the 8px body margin with the div's 5px top/bottom margins (max = 8px) while Lynx would add them, so zeroing the div's vertical margins reproduces the WebView oracle offsets; horizontal margins never collapse in either engine. Verified on Android emulator-5554 (2026-08-07) at 0.0001% diff (3 px); the rotated box matches the oracle exactly, confirming percentages resolve against the border box even with nonzero margin/border/padding.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"outer"}>
<view id={"inner"}>
<text>
{"Some text!"}
</text>
</view>
</view>
</view>
</>);
