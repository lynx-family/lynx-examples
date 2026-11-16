/*
Source: imported/wpt-upstream/css/css-transforms/transform-origin-01.html
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: codex
Adapted-Date: 2026-08-06
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0111%
Evidence: docs/evidence/css-transforms-transform-origin-20260806-summary.tsv
Title: CSS Test: SVG Transform using transform-origin
Assert: If only one value is specified, the second value is assumed to be 'center'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"The test passes if there is a green square and no red or blue square."}
</text>
<view id={"container"}>
<view id={"blue"} className={"square"}>
</view>
<view id={"red"} className={"square"}>
</view>
<view id={"green"} className={"square"}>
</view>
</view>
</view>
</>);
