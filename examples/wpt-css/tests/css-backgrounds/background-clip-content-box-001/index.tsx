/*
Source: imported/wpt-upstream/css/css-backgrounds/background-clip-content-box-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Backgrounds and Borders Test: background-clip Reference
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the orange box has a 10px width blue edge."}
</text>
{/* background */}
<view id={"test-color-blue"}>
</view>
<view id={"test-color-orange"}>
</view>
</view>
</>);
