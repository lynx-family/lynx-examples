/*
Source: imported/wpt-upstream/css/css-flexbox/gap-012.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The two source flex items and row-gap: 50px determine two 50px columns under column wrapping; no resulting width is hardcoded. A relative scene wrapper and explicit red-backdrop insets preserve the source overlap without relying on Web static positioning.
Title: Flex gaps
Assert: Gaps are respected when gathering items into lines for column flexboxes.
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
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</view>
</>);
