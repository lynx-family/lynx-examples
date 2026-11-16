/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-080.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.2238%
Evidence: docs/evidence/css2-backgrounds-background-position-em-nonzero-20260921-summary.tsv
Title: CSS Test: Background-position using 'em' units with a nominal value and a plus sign, +6em
Assert: The 'background-position' property correctly applies a nominal length value in 'em' units with a plus sign.
Note: Ahem is embedded as a byte-exact base64 data URL from the pinned source font. An invisible absolute-positioned text probe triggers an auditable runtime font load without participating in layout. The setup-only shorthand is expanded and source 1in height is normalized to 96px; the tested +6em value and deliberate inner overflow remain unchanged. On Android Honor Magic7 (2026-09-21), Web readiness and Lynx FontFaceManager success were both observed before the 0.2238% source-faithful pass.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"font-readiness-probe"}>
{"x"}
</text>
<text className={"instructions"}>
{"Test passes if the black square below is vertically centered and on the right inner edge of the orange box."}
</text>
<view id={"div1"} className={"em-box frame"}>
<view className={"em-box test-image"}>
</view>
</view>
</view>
</>);
