/*
Source: imported/wpt-upstream/css/css-color/currentcolor-002.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-20
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Color 4: currentcolor
Assert: This happens at used-value time, which means that if the value is inherited, it’s inherited as currentcolor, not as the value of the color property, so descendants will use their own color property to resolve it.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see a green square, and no red."}
</text>
<view className={"outer"}>
<view className={"middle"}>
<view className={"inner"}>
<text className={"label"}>
{"FAIL"}
</text>
</view>
</view>
</view>
</view>
</>);
