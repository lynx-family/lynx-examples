/*
Source: imported/wpt-upstream/css/CSS2/text/text-decoration-081.xht
WPT-Revision: ce9441ee673c68c5d175d2363c9ff2e4893b827c
Adapted-By: agent
Adapted-Date: 2026-08-12
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0436%
Android-Device: Pixel_9_Pro (emulator-5556)
Evidence: docs/evidence/text-decoration-underline-20260812-corrected-081-summary.tsv
Title: CSS Test: text-decoration underlining and spaces
Assert: The orange underline must continue through the space between the two blue squares.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There must be an "}
<text className={"orange-underline"}>
{"orange underline"}
</text>
{" in the space between the two blue squares."}
</text>
<text className={"square-line"}>
{"\n    "}
<image className={"square"} src={"support/swatch-blue.png"} />
{" "}
<image className={"square"} src={"support/swatch-blue.png"} />
{"\n  "}
</text>
</view>
</>);
