/*
Source: imported/wpt-upstream/css/css-backgrounds/background-image-001.html
WPT-Revision: 09ce9a86b58452cd73977c921259e40e525def0c
Adapted-By: codex
Adapted-Date: 2026-06-02
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3721%
Title: CSS Backgrounds: background-image div
Assert: Test checks that background-image displays raster image for div background.
Lynx-Note: Uses the original WPT raster URL. The source top/left declarations are omitted because they are no-ops on the static Web div but offset an unpositioned Lynx view.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if green image shows and no red visable."}
</text>
<view className={"container"}>
</view>
</view>
</>);
