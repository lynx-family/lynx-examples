/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-013.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0217%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Test: Background with (image position)
Assert: Background with (image position) sets the background to the image specified, tiling it to cover the full area from the position specified.
Note: The shorthand under test ('background: url(cat.png) bottom left') is kept verbatim with a card-local copy of the image. The empty source div becomes a view. Verified on Android emulator-5554 (2026-07-29) at 0.0217% diff (794 px); visual inspection confirms the cat images tile from the bottom left and are not cut off at the bottom, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if the box below has a cat image tiled throughout it, and the cat image is not cut off at the bottom (it can appear cut off at the top)."}
</text>
<view id={"div1"}>
</view>
</view>
</>);
