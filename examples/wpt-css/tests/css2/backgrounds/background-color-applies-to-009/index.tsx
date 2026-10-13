/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-color-applies-to-009.xht
WPT-Revision: a86c04befa07
Adapted-By: codex
Adapted-Date: 2026-06-01
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Background-color applied to elements with 'display' set to 'block'
Assert: The 'background-color' property applies to elements with 'display' set to 'block'.
Adapter-Note: Source setup uses 1in square; normalized to 96px for Lynx because physical units are not supported.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled black square."}
</text>
<view>
<view id={"test"}>
</view>
</view>
</view>
</>);
