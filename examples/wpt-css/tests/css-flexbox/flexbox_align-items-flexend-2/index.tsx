/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-items-flexend-2.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-items: flex-end
Assert: Flex items with different cross sizes are aligned to the cross-end by align-items: flex-end.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test"}>
<view className={"item item-one"}>
<text>
{"one"}
</text>
</view>
<view className={"item item-two"}>
<text>
{"two"}
</text>
</view>
<view className={"item item-three"}>
<text>
{"three"}
</text>
</view>
</view>
</view>
</>);
