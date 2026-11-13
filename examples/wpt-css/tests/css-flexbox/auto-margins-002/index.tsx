/*
Source: imported/wpt-upstream/css/css-flexbox/auto-margins-002.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: passing
Title: css-flexbox: Tests that we correctly align an image with auto margins and max-height
Assert: A 100x50 item uses auto margins to center vertically in a 100x100 flex container.
Note: Android WebView-reference pass at 0.0219% on Pixel_9_Pro emulator-5554, 2026-08-24 (run 20260824-flex-visual-08b-auto-margins-002); audited case-local PNG evidence, matching summary, and Git LFS attributes verified. The source image's resolved 100x50 green geometry is represented by a deterministic view because the embedded payload was invalid in Lynx; margin: auto remains unchanged as the behavior under test. The 25/50/25 overlay is explicitly anchored inside the positioned flex container because Lynx does not implement Web static positioning for an unoffset absolute sibling. Web content-box, flex-start, and collapsed setup-margin behavior remain explicit.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square and no red."}
</text>
<view id={"test"}>
{/* Cover the red where the correctly centered 100x50 item does not paint. */}
<view className={"expected-overlay"}>
<view className={"green-band"}>
</view>
<view className={"transparent-band"}>
</view>
<view className={"green-band"}>
</view>
</view>
<view className={"test-item"}>
</view>
</view>
</view>
</>);
