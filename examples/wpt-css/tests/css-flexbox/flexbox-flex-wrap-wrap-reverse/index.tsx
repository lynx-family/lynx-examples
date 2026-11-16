/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-wrap-reverse.htm
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3550%
Lynx-Note: Removed WPT's direction/writing-mode helper declarations because Lynx does not support them; default LTR horizontal row order preserves the tested flex-wrap behavior. The flex item footprint is set to 40px border-box to match the source-intended geometry; the tested flex-wrap value is unchanged.
Title: CSS Flexbox Test: Flex-wrap = wrap-reverse
Assert: Test checks that flex elements wrap left-to-right and bottom-to-top within their flex container when flex-wrap = 'wrap-reverse'. This assumes writing-direction = horizontal-tb', and direction = 'ltr'.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a 3x3 grid of green squares, numbered 1-9 left-to-right and top-to-bottom, and there is no red."}
</text>
<view className={"flex-wrapper"}>
<view className={"flex-item"}>
<text className={"item-label"}>
{"7"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"8"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"9"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"4"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"5"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"6"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-label"}>
{"3"}
</text>
</view>
</view>
</>);
