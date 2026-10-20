/*
Source: imported/wpt-upstream/css/CSS2/positioning/position-absolute-002.xht
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3667%
Android-Evidence: docs/evidence/css-position-absolute-css2-20260526-summary.tsv
Title: CSS Test: Position absolute size and positioning
Assert: Absolutely positioned elements can be sized and positioned using 'top', 'right', 'bottom' and 'left' properties.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"__ua-p"}>
{"Test passes if an orange square fills the bottom-right corner of a bigger blue square."}
</text>
<view id={"div1"}>
<view id={"div2"}>
</view>
</view>
</>);
