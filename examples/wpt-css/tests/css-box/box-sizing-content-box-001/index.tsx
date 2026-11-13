/*
Source: imported/wpt-upstream/css/css-sizing/box-sizing-content-box-001.xht
WPT-Revision: f90a67969
Adapted-By: traecli
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: partial
Android-Status: failing
Android-Diff: 1.0325%
Lynx-Note: Compared against original WPT HTML rendered in x-webview via --use-test-as-ref. Box-sizing assertion satisfied (two halves side-by-side, no red visible). Pixel diff comes from a few-pixel vertical offset of the absolute container vs WebView baseline.
Title: CSS Test: Box Sizing - Content-Box with specified width/height
Assert: box-sizing: content-box should make the element's (percentage) width be the distance from the left content edge to the right content edge and the height be the distance from the top content edge to the bottom content edge.
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
