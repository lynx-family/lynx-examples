/*
Source: imported/wpt-upstream/css/css-backgrounds/background-color-clip.html
WPT-Revision: a86c04befa07
Adapted-By: codex
Adapted-Date: 2026-06-01
Reference-Mode: web-test-render
Lynx-Status: failing
Title: Background Color Clip
Assert: Check that the background color is clipped according to the background-clip value associated with the bottom-most background image layer.
Adapter-Note: Android WebView paints the background color using the content-box clip associated with the bottom image layer; Lynx paints the border-box area, so the case fails at 1.2514% on 2026-06-01.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"test"}>
</view>
</view>
</>);
