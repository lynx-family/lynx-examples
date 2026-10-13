/*
Source: imported/wpt-upstream/css/CSS2/margin-padding-clear/padding-bottom-091.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Added explicit width: 100% to child views to ensure they stretch in linear layout.
Title: CSS Test: Padding-bottom using percentage with a minimum plus one value, 1%
Assert: The 'padding-bottom' property handles a minimum plus one length value in percentage.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"wrapper"} style={"margin-top: 8px"}>
<view id={"div1"}>
</view>
<view id={"div2"}>
</view>
</view>
</view>
</>);
