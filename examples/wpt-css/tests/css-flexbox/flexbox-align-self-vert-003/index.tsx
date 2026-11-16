/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-align-self-vert-003.xhtml
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Column align-self positions intrinsic and 50px items overflowing a 4px cross axis.
Title: CSS Test: Testing the behavior of 'align-self' with a vertical flex container that's skinnier than its items
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flexbox"}>
<view className={"flex-start"}>
<text className={"source-token"}>
{"start"}
</text>
</view>
<view className={"flex-start big"}>
<text>
{"a b"}
</text>
</view>
<view className={"flex-end"}>
<text className={"source-token"}>
{"end"}
</text>
</view>
<view className={"flex-end big"}>
<text>
{"a b"}
</text>
</view>
<view className={"center"}>
<text className={"source-token"}>
{"center"}
</text>
</view>
<view className={"center big"}>
<text>
{"a b"}
</text>
</view>
<view className={"baseline"}>
<text className={"source-token"}>
{"base"}
</text>
</view>
<view className={"baseline big"}>
<text className={"source-token"}>
{"abc"}
</text>
</view>
<view className={"stretch"}>
<text className={"source-token"}>
{"stretch"}
</text>
</view>
<view className={"stretch big"}>
<text>
{"a b"}
</text>
</view>
</view>
</view>
</>);
