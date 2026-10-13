/*
Source: imported/wpt-upstream/css/css-flexbox/percentage-padding-005.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: The flex container becomes 100px tall because the padding percentage of the item resolves against its width.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"__inline-001"}>
<view className={"__inline-002"}>
</view>
</view>
</view>
</>);
