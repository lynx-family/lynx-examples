/*
Source: imported/wpt-upstream/css/css-flexbox/percentage-heights-005.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: Tests that we consider main axis sizes to be definite in column flexboxes
when the height is an explicit definite height, even if the container does
not have a definite main axis size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
