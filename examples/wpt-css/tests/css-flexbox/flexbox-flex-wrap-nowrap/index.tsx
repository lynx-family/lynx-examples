/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-nowrap.htm
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0005%
Title: CSS Flexbox Test: Flex-wrap = nowrap
Assert: Test checks that flex elements set to flex-wrap: nowrap will not wrap their flex items. With wrapping disabled, the .green flex item should extend outside the bounds of its container, as it is set to flex:none.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
<view className={"flex-wrapper"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item green"}>
</view>
</view>
</>);
