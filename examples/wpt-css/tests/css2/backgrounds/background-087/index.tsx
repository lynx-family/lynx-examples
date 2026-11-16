/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-087.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0097%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Test: Background with (color image repeat position)
Assert: Background with (color image repeat position) sets the background to the color specified, with the image overlaid across the x-axis at the bottom.
Note: The shorthand under test ('background: orange url(blue15x15.png) repeat-x bottom') is kept verbatim with a card-local copy of the image. The empty source div becomes a view. Verified on Android emulator-5554 (2026-07-29) at 0.0097% diff (354 px); visual inspection confirms the orange rectangle above the blue stripe, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is an orange rectangle above a blue stripe."}
</text>
<view id={"div1"}>
</view>
</view>
</>);
