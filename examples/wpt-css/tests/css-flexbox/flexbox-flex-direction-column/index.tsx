/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-direction-column.htm
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-15
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Note: Device border rounding enlarges content-box items, causing two items per column instead of three. See docs/diagnostics/flexbox-next-ten-20260915.md; tested geometry is unchanged.
Title: CSS Flexbox Test: Flex-direction = column
Assert: Test checks that flex container's main axis has the same orientation as the block axis of the current writing mode, when flex-direction = column. This assumes writing-direction = horizontal-tb', and direction = 'ltr'.
Adaptation: Retains the default horizontal LTR setup; does not test writing-mode or direction support.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if there is a 3x3 grid of green squares, numbered 1-9 left-to-right and top-to-bottom, and there is no red."}
</text>
<view className={"flex-wrapper"}>
<view className={"flex-item"}>
<text className={"item-text"}>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"4"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"7"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"5"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"8"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"3"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"6"}
</text>
</view>
<view className={"flex-item"}>
<text className={"item-text"}>
{"9"}
</text>
</view>
</view>
</view>
</>);
