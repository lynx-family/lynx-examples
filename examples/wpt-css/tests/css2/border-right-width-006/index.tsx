/*
Source: imported/wpt-upstream/css/CSS2/borders/border-right-width-006.xht
WPT-Revision: af38980d2fcd74af19a226f5f651051cc15940ed
Adapted-By: agent
Adapted-Date: 2026-07-23
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0258%
Evidence: docs/evidence/todo-css-properties-20260723-ten-more-summary.tsv
Title: CSS Test: Border-right-width using pixels with a nominal value, 96px
Assert: The 'border-right-width' property supports a nominal length value in pixels that sets the width of the right border.
Note: The source's setup-only 1in dimensions are normalized to 96px. Explicit zero content width preserves the visible border square in Lynx linear layout; border-right-width: 96px remains unchanged.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the 2 black squares have the same width."}
</text>
<view id={"test"}>
</view>
<view id={"reference"}>
</view>
</view>
</>);
