/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-flex-start.html
WPT-Revision: N/A
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: flexbox | justify-content: flex-start
Assert: justify-content: flex-start aligns flex items to the start of the main axis.
Note: Opera test with flex: 1 0 0% preserved so expected/actual layouts match.
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
