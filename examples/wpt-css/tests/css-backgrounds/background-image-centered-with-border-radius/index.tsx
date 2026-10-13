/*
Source: imported/wpt-upstream/css/css-backgrounds/background-image-centered-with-border-radius.html
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0081%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Title: CSS Background Test: Centered background image with border radius
Assert: A background image with 'no-repeat center' stays centered inside a border-radius box.
Note: The shorthand under test ('background: url(...) no-repeat center') and the explicit 'box-sizing: border-box' are kept verbatim with a card-local copy of the image. The source span uses 'display: inline-block', which Lynx does not support; it is materialized as a fixed-size (60px) block-level view, which renders the same single-box geometry. Verified on Android emulator-5554 (2026-07-29) at 0.0081% diff (296 px); visual inspection confirms the centered image inside the rounded border box, matching the oracle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"box"}>
</view>
</view>
</>);
