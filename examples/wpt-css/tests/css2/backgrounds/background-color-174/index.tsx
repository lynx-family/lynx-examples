/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-color-174.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background-color set to transparent
Assert: Background-color is set to transparent.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view id={"wrapper"}>
<view id={"test"}>
</view>
</view>
</view>
</>);
