/*
Source: imported/wpt-upstream/css/css-flexbox/gap-011.html
WPT-Revision: 58b15ece0
Adapted-By: agent
Adapted-Date: 2026-07-08
Reference-Mode: web-test-render
Lynx-Status: passing
Title: Flex gaps
Assert: Gaps are respected when gathering items into lines for row flexboxes.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"reference-overlapped-red"}>
</view>
<view className={"__inline-001"}>
<view className={"item"}>
</view>
<view className={"item"}>
</view>
</view>
</view>
</>);
