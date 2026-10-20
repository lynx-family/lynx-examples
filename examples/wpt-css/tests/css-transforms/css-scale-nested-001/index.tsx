/*
Source: imported/wpt-upstream/css/css-transforms/css-scale-nested-001.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Transforms Test: scale 0 on a parent with a child
Assert: Child square element is transformed (scaled to zero) along with the parent element
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"greenSquare"}>
</view>
<view className={"parentredSquare"}>
<view className={"childredSquare"}>
</view>
</view>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
</view>
</>);
