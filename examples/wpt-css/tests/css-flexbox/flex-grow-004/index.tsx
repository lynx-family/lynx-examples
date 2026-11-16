/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-004.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-grow - (invalid when no space distributed)
Assert: The 'flex-grow' property is invalid when the flex container has no space distributed.
Note: Android WebView-reference pass at 0.0219% on Pixel_9_Pro emulator-5554, 2026-08-24 (run 20260824-flex-visual-09b-flex-grow-004); audited case-local PNG evidence, matching summary, and Git LFS attributes verified. The adaptation preserves both flex-grow factors and the exact 50px + 50px no-free-space boundary; it scopes original items explicitly, retains the relative-positioned cover oracle, restores Web content-box and flex-start defaults, and compensates for Lynx not collapsing setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"container"}>
<view id={"test1"} className={"flex-item"}>
</view>
<view id={"test2"} className={"flex-item"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
