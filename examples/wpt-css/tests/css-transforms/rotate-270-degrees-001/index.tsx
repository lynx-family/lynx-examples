/*
Source: imported/wpt-upstream/css/css-transforms/rotate-270-degrees-001.html
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-25
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1500%
Lynx-Note: Materialized the Web static-position result for absolutely positioned helper boxes; the tested rotate(270deg) value is unchanged.
Title: CCSS Test: transform - rotate 270 deg
Assert: Test passes if there is a black line on the right of green box and no red.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if there is a black line on the right of green box and no red."}
</text>
<view id={"redDiv"}>
</view>
<view id={"greenBottomDiv"}>
</view>
</>);
