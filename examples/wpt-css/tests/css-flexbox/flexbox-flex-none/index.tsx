/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_flex-none.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | flex: none
Assert: flex: none lays items out at their specified size without growing or shrinking, identical to flex: 0 0 auto (second container).
Note: broad div/span selectors converted to explicit classes; span display: inline-block dropped (unsupported; items are blockified flex items with explicit sizing); collapsing 1em sibling margins reduced to a single side (no margin collapsing in Lynx).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"container"}>
<text className={"item"}>
{"one"}
</text>
<text className={"item"}>
{"two"}
</text>
<text className={"item"}>
{"three"}
</text>
<text className={"item"}>
{"four"}
</text>
</view>
<view className={"container container-flex"}>
<text className={"item item-flex"}>
{"one"}
</text>
<text className={"item item-flex"}>
{"two"}
</text>
<text className={"item item-flex"}>
{"three"}
</text>
<text className={"item item-flex"}>
{"four"}
</text>
</view>
</view>
</>);
