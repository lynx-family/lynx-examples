/*
Source: imported/wpt-upstream/css/css-flexbox/flex-direction.html
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: partial
Title: CSS Test: flex flow direction
Assert: The flow of flex items in the flex container should observe the flex-direction property.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"section"}>
<text className={"heading"}>
{"flex-direction:row"}
</text>
<view className={"flex-container flex-direction-row"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
</view>
</view>
<view className={"section"}>
<text className={"heading"}>
{"flex-direction:row-reverse"}
</text>
<view className={"flex-container flex-direction-row-reverse"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
</view>
</view>
<view className={"section"}>
<text className={"heading"}>
{"flex-direction:column"}
</text>
<view className={"flex-container flex-direction-column"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
</view>
</view>
<view className={"section"}>
<text className={"heading"}>
{"flex-direction:column-reverse"}
</text>
<view className={"flex-container flex-direction-column-reverse"}>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
</view>
</view>
</>);
