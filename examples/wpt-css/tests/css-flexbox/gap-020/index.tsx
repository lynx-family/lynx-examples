/*
Source: imported/wpt-upstream/css/css-flexbox/gap-020.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The sole empty child remains absolutely positioned and therefore does not become a flex item. The tested row container retains column-gap: 10px, width: max-content, and min-width: 100px; an unconstrained relative scene and explicit backdrop insets preserve overlap without hardcoding the intrinsic result.
Title: Flex gaps
Assert: Intrinsic max size of item-less but not childless row container doesn't underflow
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
<view className={"test-scene"}>
<view id={"reference-overlapped-red"}>
</view>
<view className={"flexbox"}>
<view className={"out-of-flow-child"}>
</view>
</view>
</view>
</view>
</>);
