/*
Source: imported/wpt-upstream/css/CSS2/abspos/static-fixed-inside-abspos.html
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Assert: Tests that a position:fixed element inside a position:absolute element uses correct static position.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Static position fixed inside static position absolute"}
</text>
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
