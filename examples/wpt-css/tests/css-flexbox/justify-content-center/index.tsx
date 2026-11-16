/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content-001.htm
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-15
Lynx-Status: passing
Lynx-Note: Linear gradient background adapted with layered solid-color views.
Title: CSS Test: A flex container with the 'justify-content' property set to 'center'
Assert: This test checks that the flex container with 'justify-content: center' centers flex items in the main axis of each line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view className={"flexbox"}>
<view className={"bg-blue"}>
</view>
<view className={"bg-red"}>
</view>
<view className={"bg-orange"}>
</view>
<view className={"flex-item-blue"}>
</view>
<view className={"flex-item-orange"}>
</view>
</view>
</>);
