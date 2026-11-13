/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-position-103.xht
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-09-17
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.3893%
Evidence: docs/evidence/css2-backgrounds-background-position-percentage-five-20260917-summary.tsv
Title: CSS Test: Background-position using percentages with a nominal value, 50%
Assert: The 'background-position' property correctly applies a nominal length value in percentages.
Note: The tested 50% remains unchanged and resolves against the 212px by 96px inner positioning area; explicit original-node selectors, Web box sizing, body/paragraph geometry, and text wrapping are used for Lynx parity.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instructions"}>
{"Test passes if the black square below is vertically centered and on the right inner edge of the orange box."}
</text>
<view id={"div1"} className={"position-box frame"}>
<view className={"position-box test-image"}>
</view>
</view>
</view>
</>);
