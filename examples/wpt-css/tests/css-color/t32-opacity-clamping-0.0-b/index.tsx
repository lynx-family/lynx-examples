/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-clamping-0.0-b.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: opacity
Assert: Opacity values less than 0.0 are clamped to 0.0
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
