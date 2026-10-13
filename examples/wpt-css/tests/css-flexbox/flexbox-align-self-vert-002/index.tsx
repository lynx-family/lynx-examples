/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-align-self-vert-002.xhtml
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: failing
Assert: Column align-self preserves asymmetric box decorations and self-start/self-end behavior for RTL items.
Title: CSS Test: Testing the behavior of 'align-self' with a vertical flex container, with margin/padding/border on the items
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
</view>
<view className={"flexbox"}>
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
</view>
<view className={"flexbox"}>
<view className={"self-start dirrtl"}>
<text>
{"self-start"}
</text>
</view>
<view className={"self-start dirrtl big"}>
<text>
{"a b c d e f"}
</text>
</view>
<view className={"self-end dirrtl"}>
<text>
{"self-end"}
</text>
</view>
<view className={"self-end dirrtl big"}>
<text>
{"a b c d e f"}
</text>
</view>
</view>
</view>
</>);
