/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-justify-content-horiz-003.xhtml
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: #justify-content-space-fallback — after the runner fix that serves .xhtml references as application/xhtml+xml (2026-07-22), the oracle renders the intended flat structure. Residual failure: with negative free space, WebView packs space-between rows like flex-start and left/right per physical side, while Lynx distributes space-around/space-evenly rows with gaps and falls back to start packing for the unsupported logical `left`/`right` values. Default, flex-start, flex-end, center, and space-between groups match. Diff: 4.8762% @0.5% limit (emulator-5554, 2026-07-22, runner-fixed oracle).
Title: CSS Test: Testing 'justify-content' in a horizontal flex container, and its effects on flex items that overflow
Assert: Each justify-content value positions overflowing items correctly in a 30px horizontal flexbox: flex-start/space-between overflow on the right, flex-end overflows on the left, center/space-around overflow equally on both sides.
Note: inline justify-content styles converted to per-value classes; self-closing item divs rewritten as empty <view> elements; body margin-left:100px mapped to .body margin.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-flex-start"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-flex-start"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-flex-start"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-flex-end"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-flex-end"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-flex-end"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-center"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-center"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-center"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-space-between"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-space-between"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-space-between"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-space-around"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-space-around"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-space-around"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-space-evenly"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-space-evenly"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-space-evenly"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-left"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-left"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-left"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
<view className={"flexbox jc-right"}>
<view className={"a"}>
</view>
</view>
<view className={"flexbox jc-right"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
</view>
<view className={"flexbox jc-right"}>
<view className={"a"}>
</view>
<view className={"b"}>
</view>
<view className={"c"}>
</view>
</view>
</view>
</>);
