/*
Source: imported/wpt-upstream/css/CSS2/backgrounds/background-003.xht
WPT-Revision: 7071993d531b18a91e503bd1e537f180b90cdff5
Adapted-By: agent
Adapted-Date: 2026-07-29
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 47.0215%
Evidence: docs/evidence/css2-background-shorthand-20260729-summary.tsv
Lynx-Issue: The repeat-only 'background: repeat-x' shorthand does not set background-repeat on Lynx (the declaration appears to be dropped), so the trailing background-image longhand tiles with the initial repeat value in both directions.
Title: CSS Test: Background with repeat
Assert: Background shorthand with repeat only sets its background-repeat subproperty. In such case, the other background subproperties are set to their initial values: 'background-image' is set to 'none', 'background-color' is set to transparent, 'background-attachment' is set to 'scroll', 'background-position' is set to '0% 0%'.
Note: The shorthand under test ('background: repeat-x') and the trailing longhand cascade ('background-image: url(...)') are kept verbatim. Source 'height: 5in' is setup geometry normalized to 480px (1in = 96px). The empty source div becomes a view. Verified on Android emulator-5554 (2026-07-29): FAILS at 47.0215% diff. The oracle shows a single 15px green stripe at the top of the box; Lynx tiles the image over the whole 480px box, proving the repeat-only shorthand left background-repeat at its initial value (repeat). The image+repeat shorthand form works (background-011 passes), so the gap is specific to a shorthand that carries only a repeat keyword. Recorded as a suspected engine gap for the decision list.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green stripe across the page."}
</text>
<view id={"div1"}>
</view>
</view>
</>);
