/*
Source: imported/wpt-upstream/css/css-flexbox/align-items-001.htm
WPT-Revision: d850624df
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-14
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Android screenshot diff 0.0111%; source gradient adapted with layered views because Lynx background-image support is partial.
Title: CSS Test: A flex container with the 'align-items' property set to 'center'
Assert: This test checks that the flex container with 'align-items: center' centers each flex item's margin box in the cross-axis of its line.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if there is no red visible on the page."}
</text>
<view className={"flexbox"}>
<view className={"red-band"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
</>);
