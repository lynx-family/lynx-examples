/*
Source: imported/wpt-upstream/css/css-transforms/transforms-rotate-degree-45.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1234%
Title: CSS Transforms Test: transform property with rotate function and one parameter
Assert: If the rotate and scale with parameter not provided, greenSquare will not cover redSquare.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
<view className={"redSquare-up"}>
</view>
<view className={"redSquare-down"}>
</view>
<view className={"greenSquare"}>
</view>
</>);
