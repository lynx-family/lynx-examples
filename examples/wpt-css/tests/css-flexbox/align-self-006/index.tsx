/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-006.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - baseline
Assert: The 'align-self' property set 'baseline' aligns the flex items to the baseline of content
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the underline of all 'a' characters within black border box is horizontal and no breaking."}
</text>
<view id={"test"}>
<view id={"div1"} className={"flex-item"}>
<text className={"link"}>
{"aaa"}
</text>
</view>
<view id={"div2"} className={"flex-item"}>
<text className={"link"}>
{"aaaaa"}
</text>
</view>
<view id={"div3"} className={"flex-item"}>
<text className={"link"}>
{"aa"}
</text>
</view>
<view id={"div4"} className={"flex-item"}>
<text className={"link"}>
{"aaa"}
</text>
</view>
</view>
</view>
</>);
