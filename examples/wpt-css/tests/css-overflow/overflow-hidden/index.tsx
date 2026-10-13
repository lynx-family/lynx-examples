/*
Source: imported/wpt-upstream/css/css-overflow/overflow-hidden-resize-with-stacking-context-child.html
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-17
Lynx-Status: passing
Title: overflow:hidden changes size with stacking context child
Assert: overflow:hidden clips a stacking-context child after the container reaches the 100px final reference size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"container"}>
<text className={"test-description"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"clip-box"}>
<view className={"stacking-context"}>
<view className={"content"}>
</view>
<view className={"content"}>
</view>
<view className={"content"}>
</view>
<view className={"content"}>
</view>
<view className={"content"}>
</view>
</view>
</view>
<view className={"fail"}>
</view>
</view>
</>);
