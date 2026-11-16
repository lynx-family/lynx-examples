/*
Source: imported/wpt-upstream/css/css-flexbox/flex-001.htm
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: This test checks that the flex grow factor determines the distribution of positive free space.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"} style={"margin-bottom: 1em;"}>
{"Test passes if there is a single blue rectangle on the left, a single orange rectangle directly to its right, and there is no red visible on the page."}
</text>
<view id={"flexbox"}>
<view className={"flex-item flex-item-1"}>
</view>
<view className={"flex-item flex-item-2"}>
</view>
</view>
</view>
</>);
