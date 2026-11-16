/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-028.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0678%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Test: Background with (color image position)
Assert: Background with (color image position) sets the background of the element to the image specified. Since the initial value for background-repeat is repeat the position designates where the image tiles from and color is completely overlapped by the placements of the image.
Note: The shorthand under test ('background: green url(cat.png) right top') is kept verbatim with a card-local copy of the image. The empty source div becomes a view. Verified on Android emulator-5554 (2026-07-29) at 0.0678% diff (2478 px); visual inspection confirms the box is filled with cat images and the right-top one is not cut off, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a box filled with cat images and the one in the right top corner is not cut off."}
</text>
<view id={"div1"}>
</view>
</view>
</>);
