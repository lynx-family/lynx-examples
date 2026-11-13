/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-326.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Lynx-Note: Uses 96px for the source 1in height because Lynx does not support physical CSS units.
Title: CSS Test: Background with inherit inheriting one value
Assert: Background set to
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red."}
</text>
<view id={"wrapper"}>
<view id={"test"}>
</view>
</view>
</view>
</>);
