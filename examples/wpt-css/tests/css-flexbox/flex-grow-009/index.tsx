/*
Source: imported/wpt-upstream/css/css-flexbox/flex-grow-009.html
WPT-Revision: 5ce815a83b2601ce920e39f001cd7e77642ea860
Adapted-By: agent
Adapted-Date: 2026-09-01
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: 2026-09-01 | Pixel_9_Pro emulator (emulator-5554) | run css-flexbox-135-20260901-flex-grow-009-r1 | diff 2.4759% >= 0.5% | Lynx parses calc(infinity) in the flex shorthand as flex-basis, so the following zero becomes flex-grow and leaves the infinite-grow item zero-width | RCA: results/auto-adapt/reports/20260901-css-flexbox-flex-grow-009-rca.md
Title: CSS Flexbox Test: infinite flex-grow factor
Assert: An infinite flex-grow factor receives all positive free space, leaving the finite flex-grow item with zero width.
Lynx-Note: The tested flex: calc(infinity) 0 0px declaration is retained verbatim with no adapter normalization. Web content-box, row, flex-start, and collapsed setup-margin behavior are made explicit.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a filled green square."}
</text>
<view className={"container"}>
<view className={"infinite-grow"}>
</view>
<view className={"normal-grow"}>
</view>
</view>
</view>
</>);
