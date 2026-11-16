/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-color-175.xht
WPT-Revision: 748511b87500
Adapted-By: codex
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: Background-color set to inherit
Assert: Background-color set to inherit causes the background-color of the box to be the background-color designated on the parent element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the hollow black square is filled completely by a green background."}
</text>
<view id={"wrapper"}>
<view id={"test"}>
</view>
</view>
</view>
</>);
