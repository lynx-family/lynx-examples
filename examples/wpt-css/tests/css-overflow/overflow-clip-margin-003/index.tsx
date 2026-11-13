/*
Source: imported/wpt-upstream/css/css-overflow/overflow-clip-margin-003.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: Verifies overflow-clip-margin doesn't impact paint effects
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"You should see a green box with a blue box shadow."}
</text>
<text className={"__ua-p"}>
</text>
<view className={"parent"}>
</view>
<view className={"fail"}>
</view>
</view>
</>);
