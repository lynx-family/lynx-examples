/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-005.xht
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.1269%
Android-Device: Pixel_9_Pro (emulator-5556)
Evidence: docs/evidence/text-decoration-underline-20260812-corrected-005-summary.tsv
Title: CSS Test: Text-decoration set to 'underline overline'
Assert: Ensure that text-decoration underline, overline applied to paragraph element.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the \"Filler Text\" below has a line over it and a line under it."}
</text>
<text className={"target"}>
{"Filler Text"}
</text>
</view>
</>);
