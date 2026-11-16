/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-203.xht
WPT-Revision: 35cfbe8b9261
Adapted-By: codex
Adapted-Date: 2026-05-26
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 9.5474%
Title: CSS Test: CSS background position: parsing
Assert: No assert provided. Visual parser coverage for background shorthand position values, including px, percentages, keywords, and invalid combinations.
Lynx-Note: Source uses float-based wrapping; adapted with flex wrapping because Lynx does not support float. Paragraph margins preserve the Web default spacing so the grid aligns with the WebView render before judging background-position parsing.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"In all the following boxes, the fuchsia diamond should be surrounded by a ring."}
</text>
<view className={"case-grid"}>
<view className={"case a"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case b"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case c"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case d"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case e"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case f"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case g"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case h"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case i"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case j"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case k"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case l"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case m"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case n"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case o"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case p"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case q"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r0"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r1"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r2"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r3"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r4"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r5"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r6"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r7"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r8"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r9"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case r r10"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t1"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t2"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t3"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t4"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t5"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t6"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t7"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t8"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t9"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t10"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t11"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t12"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t13"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t14"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t15"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t16"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t17"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t18"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t19"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t20"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t21"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
<view className={"case negative t22"}>
<view className={"test"}>
<view className={"control"}>
</view>
</view>
</view>
</view>
</view>
</>);
