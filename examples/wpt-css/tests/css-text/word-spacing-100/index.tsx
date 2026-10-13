/*
Source: imported/wpt-upstream/css/CSS2/text/word-spacing-100.xht
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0170%
Evidence: docs/evidence/css-property-word-spacing-20260813-summary.tsv
Title: CSS Test: Word-spacing set to 'normal'
Assert: The 'word-spacing' property set to normal does not change spacing between words.
Note: The pinned Ahem bytes are embedded using the repository's proven Android-compatible path. Source divs become two Ahem text rows; the second keeps word-spacing: normal unchanged. Verified on Android Pixel_9_Pro/emulator-5556 (2026-08-13), but this visual equality does not by itself prove parser-level support because normal is the initial behavior.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there are only two boxes below (with no jagged edges)."}
</text>
<text className={"sample"}>
{"x x"}
</text>
<text id={"test"} className={"sample"}>
{"x x"}
</text>
</view>
</>);
