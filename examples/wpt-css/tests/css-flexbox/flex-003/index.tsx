/*
Source: imported/wpt-upstream/css/css-flexbox/flex-003.htm
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Comparing two different elements using different values for the 'flex-grow' sub-property on the 'flex' shorthand
Assert: This test checks that the flex items with a different flex grow factor have different flexibilities.
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
<view className={"reference-row"}>
<view id={"ref1"}>
</view>
<view id={"ref2"}>
</view>
</view>
</view>
</>);
