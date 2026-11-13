/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-align-self-vert-rtl-001.xhtml
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: failing
Assert: Column align-self in an RTL container reverses cross-axis alignment while preserving default and inherited values.
Title: CSS Test: Testing the behavior of 'align-self' property values on flex items that are blocks, in a vertical flex container with 'direction: rtl'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox"}>
<view className={"flex-start"}>
<text>
{"start"}
</text>
</view>
<view className={"flex-start big"}>
<text>
{"a b c d e f"}
</text>
</view>
<view className={"flex-end"}>
<text>
{"end"}
</text>
</view>
<view className={"flex-end big"}>
<text>
{"a b c d e f"}
</text>
</view>
<view className={"center"}>
<text>
{"center"}
</text>
</view>
<view className={"center big"}>
<text>
{"a b c d e f"}
</text>
</view>
<view className={"baseline"}>
<text>
{"base"}
</text>
</view>
<view className={"baseline big"}>
<text>
{"abc"}
</text>
</view>
<view className={"stretch"}>
<text>
{"stretch"}
</text>
</view>
<view className={"stretch big"}>
<text>
{"a b c d e f"}
</text>
</view>
<view className={"auto"}>
<text>
{"auto"}
</text>
</view>
<view className={"unspecified"}>
<text>
{"unspec"}
</text>
</view>
<view className={"initial"}>
<text>
{"initial"}
</text>
</view>
<view className={"inherit"}>
<text>
{"inherit"}
</text>
</view>
</view>
</view>
</>);
