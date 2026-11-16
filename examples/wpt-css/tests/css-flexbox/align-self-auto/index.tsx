/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-self-auto.html
WPT-Revision: 58b15ec
Adapted-By: agent
Adapted-Date: 2026-07-22
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-self: auto
Assert: align-self: auto on the third item makes it follow the container's align-items: flex-end, so all three items align to the bottom.
Note: broad div/span selectors and :nth-child converted to explicit classes; span display: inline-block dropped (unsupported; items are blockified flex items sized by content); body/first-child margin collapse compensated via .body margin.
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
