/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-006.xht
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0859%
Android-Device: Pixel_9_Pro (emulator-5556)
Evidence: docs/evidence/text-decoration-underline-20260812-corrected-006-summary.tsv
Title: CSS Test: Text-decoration set to 'underline line-through'
Assert: Ensure that text-decoration underline, line-through applied to paragraph element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the \"Filler Text\" below has a line under it and a line through it."}
</text>
<text className={"target"}>
{"Filler Text"}
</text>
</view>
</>);
