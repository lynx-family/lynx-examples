/*
Source: imported/wpt-upstream/css/css-will-change/will-change-contents-crash.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0034%
Title: CSS will-change contents: Chrome crash with partial cache hit
Assert: Applying will-change: contents to both text containers does not crash and the page completes rendering.
Lynx-Note: This is crash-safety evidence only; it does not prove any rendering optimization or cache behavior.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
<text>
{"Test passes"}
</text>
</view>
</view>
<view className={"__inline-003"}>
<view className={"__inline-004"}>
<text>
{"if it does not crash."}
</text>
</view>
</view>
</view>
</>);
