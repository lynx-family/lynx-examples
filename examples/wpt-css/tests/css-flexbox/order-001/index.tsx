/*
Source: imported/wpt-upstream/css/css-flexbox/order-001.htm
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-06-08
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: The 'order' property on flex items set to a value of '-1'
Assert: This test checks that a flex container will lay out its content in the order specified by the ordinal groups.
Note: order: -1 reorders the blue item before the orange item (blue left, orange right, no red). Setup paragraph uses .body margin: 0 8px + .__ua-p margin: 1em to match the WebView body/<p> collapsed margins (no margin collapsing in Lynx).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view id={"flexItem1"}>
</view>
<view id={"flexItem2"}>
</view>
</view>
</view>
</>);
