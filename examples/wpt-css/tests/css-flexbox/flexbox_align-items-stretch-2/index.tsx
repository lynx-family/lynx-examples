/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-items-stretch-2.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-items: stretch
Assert: Flex items with automatic cross sizes are stretched by align-items: stretch.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test"}>
<view className={"item item-one"}>
<text>
{"PASS"}
</text>
</view>
<view className={"item"}>
</view>
<view className={"item"}>
<text>
{"x"}
</text>
</view>
</view>
</view>
</>);
