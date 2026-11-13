/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_justifycontent-spacebetween.html
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-17
Lynx-Status: passing
Title: flexbox | justify-content: space-between
Assert: justify-content: space-between distributes the remaining inline free space between flex items.
Note: Setup-only em lengths from the WPT source are converted to px using the 16px base font size; the property under test is unchanged.
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
