/*
Source: imported/wpt-upstream/css/css-color/t421-rgb-hex6-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Android screenshot validation on emulator-5554 passed at 0.2134% diff after normalizing the local XHTML CDATA style wrapper for WebView test-render.
Title: CSS Test: #rrggbb colors
Assert: Test that #rrggbb values produce correct colors.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
{"This should be black text on a white background."}
</text>
<text id={"two"} className={"__ua-p"}>
{"This should be white text on a black background."}
</text>
<text id={"three"} className={"__ua-p"}>
{"This text should be red."}
</text>
<text id={"four"} className={"__ua-p"}>
{"This text should be green."}
</text>
<text id={"five"} className={"__ua-p"}>
{"This text should be blue."}
</text>
</view>
</>);
