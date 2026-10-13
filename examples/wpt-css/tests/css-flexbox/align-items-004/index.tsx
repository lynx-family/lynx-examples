/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-004.htm
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: pending
Title: CSS Test: A flex container with the 'align-items' property set to 'baseline'
Assert: This test checks that the flex container with 'align-items: baseline' places each flex item's margin box so that their baselines align.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view id={"div1"}>
<text>
{"d1"}
</text>
</view>
<view id={"div2"}>
<text>
{"d2"}
</text>
</view>
<view id={"div3"}>
<text>
{"d3"}
</text>
</view>
<view id={"div4"}>
<text>
{"d4"}
</text>
</view>
<view id={"div5"}>
<text>
{"d5"}
</text>
</view>
<view id={"div6"}>
<text>
{"d6"}
</text>
</view>
<view id={"div7"}>
<text>
{"d7"}
</text>
</view>
<view id={"div8"}>
<text>
{"d8"}
</text>
</view>
</view>
</view>
</>);
