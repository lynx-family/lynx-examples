/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-default.htm
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-15
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: Flex-wrap defaults to nowrap
Assert: Test checks that flex elements default to flex-wrap: nowrap if flex-wrap is not set. With wrapping disabled, the .green flex item should extend outside the bounds of its container, as it is set to flex:none.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
<view className={"flex-wrapper"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item green"}>
</view>
</view>
</view>
</>);
