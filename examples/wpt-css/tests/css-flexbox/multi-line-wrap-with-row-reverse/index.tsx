/*
Source: imported/wpt-upstream/css/css-flexbox/flex-lines/multi-line-wrap-with-row-reverse.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: flex container multiline wrapping in row-reverse direction
Assert: This test check that a flex container wraps blocks multiline in row-reverse direction.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
<text id={"row1-col3"} className={"__ua-p"}>
{"1-3"}
</text>
<text id={"row1-col2"} className={"__ua-p"}>
{"1-2"}
</text>
<text id={"row1-col1"} className={"__ua-p"}>
{"1-1"}
</text>
<text id={"row2-col2"} className={"__ua-p"}>
{"2-2"}
</text>
<text id={"row2-col1"} className={"__ua-p"}>
{"2-1"}
</text>
<text id={"row3-col1"} className={"__ua-p"}>
{"3-1"}
</text>
</view>
</view>
</>);
