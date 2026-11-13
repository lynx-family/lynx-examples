/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-007.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background with (color repeat)
Assert: Background with (color repeat) sets the background of the element to the color specified. Repeat does nothing since there is no image.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green rectangle across the page."}
</text>
<view className={"background-swatch"}>
</view>
</view>
</>);
