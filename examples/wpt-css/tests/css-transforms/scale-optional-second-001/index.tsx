/*
Source: imported/wpt-upstream/css/css-transforms/scale-optional-second-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0005%
Title: CSS Transforms Test: transform property with scale function and one parameter
Assert: If the second parameter of scale function is not provided, it takes a value equal to the first. This transform causes the element to appear twice as long in both the X and Y axes.
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
