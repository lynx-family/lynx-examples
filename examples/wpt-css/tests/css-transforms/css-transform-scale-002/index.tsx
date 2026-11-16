/*
Source: imported/wpt-upstream/css/css-transforms/css-transform-scale-002.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Transforms Test: transform property with scale function and move its origin
Assert: The transform scales the element to twice its size in both the X and Y directions and moves its origin to the top left corner.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if the green square completely covers the red square."}
</text>
<view className={"container"}>
{/* This is the square that should not be visible if the test passes */}
<view className={"redSquare"}>
</view>
{/* This is the square being tested with the transform */}
<view className={"greenSquare"}>
</view>
</view>
</view>
</>);
