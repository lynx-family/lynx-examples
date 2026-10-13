/*
Source: imported/wpt-upstream/css/CSS2/borders/border-bottom-width-006.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2206%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: Border-bottom-width using pixels with a nominal value, 96px
Assert: The 'border-bottom-width' property supports a nominal length value in pixels that sets the width of the bottom border.
Note: The source's setup-only 1in dimensions are normalized to 96px. A row flex scene replaces unsupported inline-block while preserving the tested border-bottom-width: 96px and the 5px inter-square gap.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the 2 filled black squares have the same height."}
</text>
<view className={"scene"}>
<view id={"test"}>
</view>
<view id={"reference"}>
</view>
</view>
</view>
</>);
