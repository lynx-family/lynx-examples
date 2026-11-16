/*
Source: imported/wpt-upstream/css/css-color/t422-rgba-clamping-a1.0-b.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-22
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: rgba() colors
Assert: Alpha components of rgba() colors greater than 1 are clamped to 1.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text id={"one"} className={"__ua-p"}>
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
