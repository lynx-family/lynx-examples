/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-items-flexstart.html
WPT-Revision: N/A
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-items: flex-start
Assert: align-items: flex-start aligns flex items to the start of the cross axis.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"test-box"}>
<view className={"item item-1"}>
<text className={"item-text"}>
{"one"}
</text>
</view>
<view className={"item item-2"}>
<text className={"item-text"}>
{"two"}
</text>
</view>
<view className={"item item-3"}>
<text className={"item-text"}>
{"three"}
</text>
</view>
</view>
</>);
