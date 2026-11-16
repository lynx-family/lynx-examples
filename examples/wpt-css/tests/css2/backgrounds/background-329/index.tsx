/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-329.xht
WPT-Revision: 35cfbe8b9261
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 3.5404%
Title: CSS Test: Background with inherit inheriting four values
Assert: Ensure that inherit works when inheriting four values.
Lynx-Note: Source uses 0.5in and 1in as helper geometry; TTSS normalizes to px for Web visual parity and does not claim native physical-unit support. Failure shows repeated bitmap seams in the inherited repeat-x background.
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
