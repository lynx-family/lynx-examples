/*
Source: imported/wpt-upstream/css/css-sizing/box-sizing-border-box-002.xht
WPT-Revision: f90a67969
Adapted-By: traecli
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.4457%
Lynx-Note: Compared against original WPT HTML rendered in x-webview via --use-test-as-ref. flex-shrink:0 keeps the box-sizing assertion intact.
Title: CSS Test: Box Sizing - Border-Box with specified width
Assert: box-sizing: border-box should make the element's (percentage) width be the distance from the left border edge to the right border edge.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"hint"}>
{"The two divs should be side-by-side, not one on top of another. No red should be visible."}
</text>
<view className={"container"}>
<view className={"box-sized one"}>
<text>
{"LEFT HALF"}
</text>
</view>
<view className={"box-sized two"}>
<text>
{"RIGHT HALF"}
</text>
</view>
</view>
</>);
