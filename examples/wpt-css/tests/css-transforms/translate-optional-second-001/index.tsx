/*
Source: imported/wpt-upstream/css/css-transforms/translate-optional-second-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1162%
Title: CSS Transforms Test: transform property with translate function and one parameter
Assert:  If the second parameter is not provided, it has zero as a value. This transform moves the element by 100 pixels in X direction.
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
