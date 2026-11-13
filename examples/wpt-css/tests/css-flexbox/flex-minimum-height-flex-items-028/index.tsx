/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-028.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Intermediate column flex item's specified min-height is honored.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"flexbox column"}>
<view className={"flexbox column __inline-001"}>
<view className={"__inline-002"}>
</view>
</view>
</view>
</view>
</>);
