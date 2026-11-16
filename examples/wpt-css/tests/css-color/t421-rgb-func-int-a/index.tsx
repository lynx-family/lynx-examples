/*
Source: imported/wpt-upstream/css/css-color/t421-rgb-func-int-a.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: rgb() colors
Assert: Test that rgb() values produce correct colors.
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
