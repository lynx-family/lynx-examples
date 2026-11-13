/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-004.htm
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-28
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: The setup-only repeating gradient is expressed as an equivalent fixed-axis linear gradient; source-only selectors and explicit Web body/paragraph spacing avoid wrapper styling and Lynx margin accumulation.
Title: CSS Test: A multi-line flex container with the 'align-content' property set to 'space-between'
Assert: This test checks that a multi-line flex container with 'align-content: space-between' distributes lines evenly in the flex container.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</view>
</>);
