/*
Source: imported/wpt-upstream/css/filter-effects/clip-under-filter-001.html
WPT-Revision: 54f8f933629e7c010ae98a246729af01f8abcda5
Adapted-By: agent
Adapted-Date: 2026-08-07
Reference-Mode: web-test-render
Lynx-Status: failing
Android-Status: failing
Android-Diff: 1.7574%
Evidence: docs/evidence/css-filter-effects-filter-20260807-summary.tsv
Title: CSS Filters: Clips on descendants of filter elements are applied
Assert: Check that there is a blurred square, left half blue and right half green.
Note: Probe case for the blur family. The declaration under test ('filter: blur(10px)') and the descendant clip geometry (100px blue clipper with overflow: hidden, green child shifted right: -50px) are verbatim, extracted from source inline styles to TTSS unchanged. Cross-engine gaussian kernel differences are expected, so this case may fail the pixel threshold; the audit goal is whether Lynx implements blur at all and whether the descendant clip still applies, not pixel parity. Verified on Android emulator-5554 (2026-08-07): FAILS the 0.5% pixel threshold at 1.7574% diff, but the audit answers both questions positively — the actual screenshot shows a genuinely blurred square with the left-blue/right-green composition intact (descendant clip applies), and the residual diff is the cross-engine gaussian kernel spread at the blur halo. Classified as a non-defect cross-engine difference, not a missing feature.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view id={"filtered"}>
<view id={"clipper"}>
<view id={"inner"}>
</view>
</view>
</view>
</view>
</>);
