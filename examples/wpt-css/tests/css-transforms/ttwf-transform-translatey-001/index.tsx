/*
Source: imported/wpt-upstream/css/css-transforms/ttwf-transform-translatey-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1162%
Lynx-Note: Removed the generated non-positioned wrapper so the absolute red and green helper squares keep the WPT viewport-relative placement; the tested translateY() value is unchanged.
Title: CSS Transform Using translateY() function
Assert: Test that the green square is moved on Y axis 100px
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
<view className={"redSquare"}>
</view>
<view className={"greenSquare"}>
</view>
</>);
