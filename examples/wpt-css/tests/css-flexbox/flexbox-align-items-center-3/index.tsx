/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox_align-items-center-3.html
WPT-Revision: 1e91be47ac599571cde8a98b0a11cafc3a9e281c
Adapted-By: agent
Adapted-Date: 2026-09-30
Reference-Mode: web-test-render
Lynx-Status: pending
Assert: This checks that an orthogonal flex-item with center alignment doesn't stretch.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"container"}>
<view className={"child"}>
<view className={"__inline-001"}>
</view>
</view>
</view>
</view>
</>);
