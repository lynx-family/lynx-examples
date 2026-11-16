/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_flex-0-1-N-shrink.html
WPT-Revision: 58b15ece027c804281a1874cbe0569cca12747e9
Adapted-By: agent
Adapted-Date: 2026-09-15
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Item dimensions match WebView; residual comparison differences include a one-physical-pixel border-origin offset and text rasterization.
Assert: Unit shrink distributes negative free space among four 4em-basis items in a 12em container.
Title: flexbox | flex: 0 1 N | shrinking
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"flex-container"}>
<view className={"flex-item item-1"}>
<text className={"item-text"}>
{"one"}
</text>
</view>
<view className={"flex-item item-2"}>
<text className={"item-text"}>
{"two"}
</text>
</view>
<view className={"flex-item item-3"}>
<text className={"item-text"}>
{"three"}
</text>
</view>
<view className={"flex-item item-4"}>
<text className={"item-text"}>
{"four"}
</text>
</view>
</view>
</view>
</>);
