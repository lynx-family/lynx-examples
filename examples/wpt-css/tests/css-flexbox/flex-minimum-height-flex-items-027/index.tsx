/*
Source: imported/wpt-upstream/css/css-flexbox/flex-minimum-height-flex-items-027.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-20
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Nested flex item shrinks correctly when its parent has a % height that resolves to smaller than the item's flex-basis.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"OuterFlexbox"}>
<view className={"InnerFlexbox"}>
<view className={"InnerFlexbox-body"}>
<view className={"__inline-001"}>
</view>
</view>
</view>
</view>
</view>
</>);
