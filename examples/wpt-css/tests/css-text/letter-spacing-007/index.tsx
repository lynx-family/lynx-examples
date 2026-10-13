/*
Source: imported/wpt-upstream/css/CSS2/text/letter-spacing-007.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0144%
Evidence: docs/evidence/todo-css-properties-20260723-summary.tsv
Title: CSS Test: Letter-spacing using pixels with a nominal value, 96px
Assert: The 'letter-spacing' property sets a nominal length value in pixels.
Note: Ahem is embedded as base64 in TTSS; explicit row and column containers reproduce HTML block/inline flow without changing the 96px value under test.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if there are only two boxes below (with no jagged edges)."}
</text>
<view className={"sample"}>
<view className={"control-row"}>
<text className={"glyph"}>
{"x"}
</text>
<text id={"span1"} className={"glyph"}>
{"x"}
</text>
</view>
<text id={"test"} className={"glyph"}>
{"xx"}
</text>
</view>
</view>
</>);
