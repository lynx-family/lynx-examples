/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-006.html
WPT-Revision: dd432b1d351796d3f25e1d1f243ba52da16c3a0a
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: A flex container with 'column' direction and 'align-items' property set to 'flex-start'
Assert: This test checks that 'align-items: flex-start' implies the flex item's 'auto' width to be resolved as 'fit-content'.
Lynx-Note: The source Ahem stylesheet is merged into TTSS as an embedded font and its font longhands are applied to the required Lynx text element. A local positioned scene materializes the source absolute block's static-position overlay without changing the tested flex item's auto width.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red visible on the page."}
</text>
<view className={"scene"}>
<view className={"block"}>
<view className={"green-cover"}>
</view>
</view>
<view id={"flexbox"}>
<view className={"flex-item"}>
<text className={"item-text"}>
{"XXXX"}
</text>
</view>
</view>
</view>
</view>
</>);
