/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content-005.htm
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-14
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Setup gradient stops use percentage equivalents on the fixed 300px axis (recurring thirds rounded to nine decimal places). Source-only selectors preserve the blue item's specificity; body/paragraph margins compensate for absent collapsing.
Title: CSS Test: A flex container with the 'justify-content' property set to 'space-around'
Assert: This test checks that the flex container with 'justify-content: space-around' evenly distributes flex items in the main axis of each line, with half-size spaces on either end.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view id={"blue"}>
</view>
<view>
</view>
</view>
</view>
</>);
