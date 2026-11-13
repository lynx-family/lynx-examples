/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-self-baseline.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-self: baseline
Assert: The third item (align-self: baseline) aligns to the flex line baseline instead of being centered like the other two items.
Note: broad div/span selectors and :nth-child converted to explicit classes; span display: inline-block dropped (unsupported; items are blockified flex items with explicit sizing); body/first-child margin collapse compensated via .body margin.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"container"}>
<text className={"item item-1"}>
{"one"}
</text>
<text className={"item item-2"}>
{"two"}
</text>
<text className={"item item-3"}>
{"three"}
</text>
</view>
</view>
</>);
