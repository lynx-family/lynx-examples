/*
Source: imported/wpt-upstream/css/css-position/position-absolute-fit-content.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: max-height: fit-content does not correctly limit height of absolutely positioned element with top:0; bottom:0. Element stretches to full containing block height instead of content height.
Title: CSS Position: max-height fit-content with absolute positioned element using right:0
Assert: A position:absolute element with top:0; bottom:0; left:0; right:0 and max-height:fit-content should size to its content height.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
