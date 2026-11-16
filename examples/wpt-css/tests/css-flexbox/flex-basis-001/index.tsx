/*
Source: imported/wpt-upstream/css/css-flexbox/flex-basis-001.html
WPT-Revision: f90a67969
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: The 'flex-basis' property set positive number, the actual value of test element size is same as the positive number
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"} style={"margin-bottom: 1em;"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test"} className={"test-view container-view"}>
</view>
<view id={"ref"} className={"ref-view container-view"}>
</view>
</view>
</view>
</>);
