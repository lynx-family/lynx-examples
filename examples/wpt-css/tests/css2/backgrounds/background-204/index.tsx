/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-204.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Background with (position attachment repeat color)
Assert: Background with (position attachment repeat color) sets the background of the element to the color specified. Repeat, position, and attachment only apply if image is set.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"background-swatch"}>
</view>
</view>
</>);
