/*
Source: imported/wpt-upstream/css/css-transforms/transform-translatex-006.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1264%
Lynx-Note: Materialized the Web static-position result for the absolutely positioned helper container; the tested translateX(50px) value is unchanged.
Title: CSS Transforms Test: transform property with translateX function
Assert: This tests that translateX(50px) translates a box by 50 pixels in the X direction.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"The test passes if there is a green square and no red."}
</text>
<view className={"container"}>
{/* This is the square that should not be visible if the test passes */}
<view className={"redSquare"}>
</view>
{/* This is the square being tested with the transform */}
<view className={"greenSquare"}>
</view>
</view>
</>);
