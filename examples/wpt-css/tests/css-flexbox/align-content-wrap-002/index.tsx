/*
Source: imported/wpt-upstream/css/css-flexbox/align-content-wrap-002.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: css-flexbox: Tests align-content with flex-wrap: wrap
Assert: Wrapping changes the stretched cross size of flex items in horizontal and vertical flex containers.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"log"}>
</view>
<text className={"__ua-p"}>
{"Test for crbug.com/362848: Flex box word-wrap is not adhering to spec"}
</text>
<view className={"flex-horizontal"}>
<view className={"item-horizontal"} data-expected-height={"80"}>
<view className={"content1-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"80"}>
<view className={"content2-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"80"}>
<view className={"content3-horizontal"}>
</view>
</view>
</view>
<view className={"flex-horizontal __inline-001"}>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content1-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content2-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content3-horizontal"}>
</view>
</view>
</view>
<view className={"flex-horizontal __inline-002"}>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content1-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content2-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content3-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content1-horizontal"}>
</view>
</view>
<view className={"item-horizontal"} data-expected-height={"150"}>
<view className={"content2-horizontal"}>
</view>
</view>
</view>
<view className={"flex-vertical"}>
<view className={"item-vertical"} data-expected-width={"80"}>
<view className={"content1-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"80"}>
<view className={"content2-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"80"}>
<view className={"content3-vertical"}>
</view>
</view>
</view>
<view className={"flex-vertical __inline-003"}>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content1-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content2-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content3-vertical"}>
</view>
</view>
</view>
<view className={"flex-vertical __inline-004"}>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content1-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content2-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content3-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content1-vertical"}>
</view>
</view>
<view className={"item-vertical"} data-expected-width={"150"}>
<view className={"content2-vertical"}>
</view>
</view>
</view>
</view>
</>);
