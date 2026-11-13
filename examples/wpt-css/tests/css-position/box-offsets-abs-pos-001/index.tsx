/*
Source: imported/wpt-upstream/css/CSS2/visuren/box-offsets-abs-pos-001.xht
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: box offsets - containing block for absolute positioned boxes
Assert: Box offsets (bottom, left, right, top) for an absolutely positioned box refers to the padding box of its nearest positioned ancestor; such padding box forms and acts as the containing block of the absolutely positioned box.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a blue square at each corner of the yellow square."}
</text>
<view id={"nearest-positioned-ancestor"}>
<view className={"lime-content"}>
</view>
<view className={"corner"} id={"top-left"}>
</view>
<view className={"corner"} id={"top-right"}>
</view>
<view className={"corner"} id={"bottom-left"}>
</view>
<view className={"corner"} id={"bottom-right"}>
</view>
</view>
</view>
</>);
