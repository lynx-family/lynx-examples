/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-fixed-001.xht
WPT-Revision: (to be filled during import)
Adapted-By: atlas
Adapted-Date: 2026-05-28
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Fixed position elements impact on later siblings
Assert: Fixed positioned elements do not impact later siblings.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and "}
<text>
{"no red"}
</text>
{"."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
<view id={"div3"}>
</view>
</view>
</view>
</>);
