/*
Source: imported/wpt-upstream/css/CSS2/visufx/visibility-layout-001.xht
WPT-Revision: d850624df
Adapted-By: codex
Adapted-Date: 2026-05-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0158%
Lynx-Note: The WPT setup-only 1in box dimensions are normalized to the CSS-equivalent 96px in TTSS; the tested visibility:hidden value is unchanged. Android expected screenshot is generated from the original WPT test HTML with --use-test-as-ref.
Title: CSS Test: Hidden elements still affect layout
Assert: Invisible boxes still affect layout.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if the blue and orange boxes below are not touching and there is no red visible on the page."}
</text>
<view id={"div1"}>
</view>
<view id={"div2"}>
<text className={"hidden-text"}>
{"FAIL FAIL"}
</text>
</view>
<view id={"div3"}>
</view>
</>);
