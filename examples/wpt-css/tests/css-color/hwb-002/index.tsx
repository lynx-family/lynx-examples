/*
Source: imported/wpt-upstream/css/css-color/hwb-002.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Color 4: hwb
Assert: hwb() with no alpha
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if you see a black square, and no red."}
</text>
<view className={"test"}>
</view>
</view>
</>);
