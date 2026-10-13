/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-reset-001.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Background resets all background settings
Assert: Background sets all properties to initial and then applies specified ones.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is no red."}
</text>
<view className={"background-swatch"}>
</view>
</view>
</>);
