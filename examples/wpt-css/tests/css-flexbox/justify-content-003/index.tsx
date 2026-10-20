/*
Source: imported/wpt-upstream/css/css-flexbox/justify-content-003.htm
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-14
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Setup gradient px stops are exact percentage equivalents on the fixed 300px axis. Selectors target only source boxes; body/paragraph margins compensate for absent collapsing.
Title: CSS Test: A flex container with the 'justify-content' property set to 'flex-end'
Assert: This test checks that the flex container with 'justify-content: flex-end' packs flex items toward the end of the main axis of each line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view>
</view>
<view>
</view>
</view>
</view>
</>);
