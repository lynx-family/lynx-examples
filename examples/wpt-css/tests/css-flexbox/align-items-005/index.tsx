/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-005.htm
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: pending
Title: CSS Test: A flex container with the 'align-items' property set to 'stretch'
Assert: This test checks that the flex container with 'align-items: stretch' places each flex item's margin box so that its cross size is the same as the cross size of the line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view>
</view>
<view>
</view>
</view>
</view>
</>);
