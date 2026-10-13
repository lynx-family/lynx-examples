/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-clamping-a0.0-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: rgba() colors
Assert: Alpha components of rgba() colors less than 0 are clamped to 0.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This should be the only text visible on this page."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
<text id={"three"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
<text id={"four"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
<text id={"five"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
<text id={"six"} className={"__ua-p"}>
{"This text should NOT be visible."}
</text>
</view>
</>);
