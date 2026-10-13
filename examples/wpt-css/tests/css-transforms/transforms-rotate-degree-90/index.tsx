/*
Source: imported/wpt-upstream/css/css-transforms/transforms-rotate-degree-90.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1330%
Title: CSS Transforms Test: transform property with rotate function and one parameter
Assert: If the rotate with parameter not provided, greenRectangle will not cover redRectangle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a green rectangle and no red."}
</text>
<view className={"redRectangl"}>
</view>
<view className={"greenRectangle"}>
</view>
</>);
