/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-offscreen-multiple-boxes-2-c.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: opacity
Assert: Opacity is group opacity over elements (not boxes).
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The following two boxes should be the same color:"}
</text>
<view className={"test"}>
<text className={"__html-span __html-a"}>
{"XXXXX"}
</text>
</view>
<view className={"ref"}>
</view>
</view>
</>);
