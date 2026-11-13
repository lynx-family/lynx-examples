/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-007.htm
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The source paragraph uses one parent text node with an explicit entity space before nested bold text, and explicit Web body/paragraph spacing avoids Lynx margin accumulation; the tested stretch fallback and overflow geometry are unchanged.
Title: CSS Test: Fallback alignment of 'align-content: stretch'
Assert: The fallback alignment for `align-content: stretch` is `flex-start`, not `safe flex-start`.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text className={"strong"}>
{"no red"}
</text>
{"."}
</text>
<view className={"clip"}>
<view id={"flex"}>
<view id={"item"}>
</view>
</view>
</view>
</view>
</>);
