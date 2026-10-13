/*
Source: imported/wpt-upstream/css/css-flexbox/flex-flow-003.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: flex-flow - row wrap-reverse
Assert: The 'flex-flow' property set 'row wrap-reverse' controls the flex container is multi-line
but the cross-start and cross-end directions are swapped
Note: Android WebView-reference pass at 0.0289% on Pixel_9_Pro emulator-5554, 2026-08-24 (run 20260824-flex-visual-05-flex-flow-003); audited case-local PNG evidence, matching summary, and Git LFS attributes verified. The adaptation preserves flex-flow: row wrap-reverse, maps original flex items to explicit classes, restores Web content-box and flex-start defaults, and compensates for Lynx not collapsing setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red, the number within square is '1 2 3 4' from left to right, top to bottom."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
<text>
{"3"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"4"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"1"}
</text>
</view>
<view className={"flex-item"}>
<text>
{"2"}
</text>
</view>
</view>
</view>
</>);
