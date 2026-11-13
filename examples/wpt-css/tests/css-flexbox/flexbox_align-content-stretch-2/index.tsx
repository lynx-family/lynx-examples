/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-content-stretch-2.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-content: stretch
Assert: align-content: stretch makes flex lines stretch to fill the cross axis.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"test-box"}>
<view className={"item item-1"}>
<text className={"item-text"}>
{"one"}
</text>
</view>
<view className={"item item-2"}>
<text className={"item-text"}>
{"two"}
</text>
</view>
<view className={"item item-3"}>
<text className={"item-text"}>
{"three"}
</text>
</view>
</view>
</view>
</>);
