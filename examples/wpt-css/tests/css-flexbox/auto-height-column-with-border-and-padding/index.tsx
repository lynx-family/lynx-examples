/*
Source: imported/wpt-upstream/css/css-flexbox/auto-height-column-with-border-and-padding.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Diff: 0.0337%
Title: CSS Flexbox: auto-height with border and padding
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Tests that auto-height column flexboxes with border and padding correctly size their height to their content."}
</text>
<view className={"flexbox column __inline-001"}>
<view className={"flex-one-one-auto __inline-002"}>
<view className={"__inline-003"}>
</view>
</view>
</view>
</view>
</>);
