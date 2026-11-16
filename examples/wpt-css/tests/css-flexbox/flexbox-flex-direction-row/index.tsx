/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-direction-row.htm
WPT-Revision: f90a67969
Adapted-By: agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: Flex-direction = row
Assert: Test checks that flex container's main axis has the same orientation as the inline axis of the current writing mode, when flex-direction = row. This assumes writing-direction = horizontal-tb, and direction = ltr.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a 3x3 grid of green squares, numbered 1-9 left-to-right and top-to-bottom, and there is no red."}
</text>
<view className={"flex-wrapper"}>
<view>
<text>
{"1"}
</text>
</view>
<view>
<text>
{"2"}
</text>
</view>
<view>
<text>
{"3"}
</text>
</view>
<view>
<text>
{"4"}
</text>
</view>
<view>
<text>
{"5"}
</text>
</view>
<view>
<text>
{"6"}
</text>
</view>
<view>
<text>
{"7"}
</text>
</view>
<view>
<text>
{"8"}
</text>
</view>
<view>
<text>
{"9"}
</text>
</view>
</view>
</>);
