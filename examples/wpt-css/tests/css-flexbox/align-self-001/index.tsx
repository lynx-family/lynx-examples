/*
Source: imported/wpt-upstream/css/css-flexbox/align-self-001.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox Test: align-self - flex-start
Assert: The 'align-self' property set 'flex-start' aligns the flex items to the start edge of cross axis
Note: Android WebView-reference pass at 0.0219% on Pixel_9_Pro emulator-5554, 2026-08-24 (run 20260824-flex-visual-07-align-self-001); audited case-local PNG evidence, matching summary, and Git LFS attributes verified. The adaptation preserves align-self: flex-start and the source's negative-margin cover oracle; it scopes original flex items explicitly, restores Web content-box and flex-start defaults, and compensates for Lynx not collapsing setup paragraph/body margins.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"test"}>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
<view className={"flex-item"}>
</view>
</view>
<view id={"cover"}>
</view>
</view>
</>);
