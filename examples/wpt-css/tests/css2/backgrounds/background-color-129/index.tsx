/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-color-129.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background-color set to aqua
Assert: Background-color set to aqua causes the background-color of the box to be aqua.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there are 2 squares with the same color."}
</text>
<view id={"test"}>
</view>
<view id={"reference"}>
</view>
</view>
</>);
