/*
Source: imported/wpt-upstream/css/css-flexbox/flex-lines/multi-line-wrap-with-column-reverse.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: flex container multiline wrapping in column-reverse direction
Assert: This test check that a flex container wraps blocks multiline in column-reverse direction.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
<text id={"col1-row3"} className={"__ua-p"}>
{"1-3"}
</text>
<text id={"col1-row2"} className={"__ua-p"}>
{"1-2"}
</text>
<text id={"col1-row1"} className={"__ua-p"}>
{"1-1"}
</text>
<text id={"col2-row2"} className={"__ua-p"}>
{"2-2"}
</text>
<text id={"col2-row1"} className={"__ua-p"}>
{"2-1"}
</text>
<text id={"col3-row1"} className={"__ua-p"}>
{"3-1"}
</text>
</view>
</view>
</>);
