/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-002.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: The 'flex-grow' property initial value is '0', the flex item will keep the width when 'flex-grow' set '0'
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"} style={"margin-bottom: 1em;"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view className={"child-view test-1"}>
</view>
<view className={"child-view test-2"}>
</view>
<view className={"child-view test-3"}>
</view>
</view>
<view className={"cover-view"}>
</view>
</view>
</>);
