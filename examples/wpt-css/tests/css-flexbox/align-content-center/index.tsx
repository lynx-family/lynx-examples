/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-content-center.html
WPT-Revision: N/A
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | align-content: center
Assert: align-content: center packs flex lines in the center of the cross axis.
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
