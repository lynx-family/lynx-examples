/*
Source: imported/wpt-upstream/css/css-flexbox/gap-016.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The first item's two source 10px zero-height inline-blocks are represented by an intrinsic horizontal flex row, preserving their 20px max-content contribution without hardcoding it. The outer max-content width still derives from 20px + 70px gap + 10px; an unconstrained relative scene and explicit red-backdrop insets preserve overlap.
Title: Flex gaps
Assert: Intrinsic max size includes gaps
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
<view className={"item intrinsic-row"}>
<view className={"intrinsic-child"}>
</view>
<view className={"intrinsic-child"}>
</view>
</view>
<view className={"item second-item"}>
</view>
</view>
</view>
</view>
</>);
