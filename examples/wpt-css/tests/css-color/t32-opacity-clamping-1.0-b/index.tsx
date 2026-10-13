/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-clamping-1.0-b.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-15
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Fix: margin-top set to 0 on .__ua-p to compensate for no margin collapsing
Title: CSS Test: opacity
Assert: Opacity values greater than 1.0 are clamped to 1.0
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text style={"margin-top: 8px"} id={"one"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [1 of 6]"}
</text>
<text id={"two"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [2 of 6]"}
</text>
<text id={"three"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [3 of 6]"}
</text>
<text id={"four"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [4 of 6]"}
</text>
<text id={"five"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [5 of 6]"}
</text>
<text id={"six"} className={"__ua-p"}>
{"There should be six lines of text on this page, all the same color. [6 of 6]"}
</text>
</view>
</>);
