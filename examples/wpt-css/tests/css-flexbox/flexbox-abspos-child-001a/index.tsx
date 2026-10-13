/*
Source: imported/wpt-upstream/css/css-flexbox/abspos/flexbox-abspos-child-001a.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Testing that "min-width", "max-width", "min-height", and "max-height" are applied on absolutely positioned children of a horizontal flex container
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexContainer"}>
<view className={"absPos testMinWidth"}>
</view>
</view>
<view className={"flexContainer"}>
<view className={"absPos testMaxWidth"}>
</view>
</view>
<view className={"flexContainer"}>
<view className={"absPos testMinHeight"}>
</view>
</view>
<view className={"flexContainer"}>
<view className={"absPos testMaxHeight"}>
</view>
</view>
</view>
</>);
