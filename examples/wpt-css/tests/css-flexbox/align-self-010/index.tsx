/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-010.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - auto and align-items - baseline
Assert: The 'align-self' property set 'auto' aligns the flex items to the baseline of content when 'align-items' set 'baseline'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the underline of all 'a' characters within black border box is horizontal and no breaking."}
</text>
<view id={"test"}>
<view id={"div1"}>
<text className={"__html-a"}>
{"aaa"}
</text>
</view>
<view id={"div2"}>
<text className={"__html-a"}>
{"aaaaa"}
</text>
</view>
<view id={"div3"}>
<text className={"__html-a"}>
{"aa"}
</text>
</view>
<view id={"div4"}>
<text className={"__html-a"}>
{"aaa"}
</text>
</view>
</view>
</view>
</>);
