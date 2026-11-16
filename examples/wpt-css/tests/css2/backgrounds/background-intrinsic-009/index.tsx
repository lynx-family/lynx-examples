/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-intrinsic-009.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-16
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 0.8673%
Evidence: docs/evidence/css2-backgrounds-intrinsic-a-20260916-summary.tsv
Lynx-Issue: Authenticated explicit-size SVG assets are served successfully but do not paint through CSS background-image, exposing one complete 40px by 60px red control before intrinsic sizing is evaluated.
Title: CSS Test: Background Intrinsic Sizes: Intrinsic Width and Height (Vector)
Assert: A background with an intrinsic width and height
    is drawn at that size.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"There must be two green boxes below and no red."}
</text>
<view className={"cover"}>
<view className={"control"}>
</view>
<view className={"test"}>
</view>
</view>
<view className={"limit"}>
<view className={"test"}>
</view>
<view className={"control"}>
</view>
</view>
</view>
</>);
