/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-horiz-002.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Intrinsic min/max-width interaction yields 100px instead of 120px; semantic fail despite 0.0747% runner pass. See docs/diagnostics/flexbox-flex-wrap-horiz-002-20260921.md.
Assert: A shrink-to-fit multiline flex container honors min-width and max-width during line collection.
Title: CSS Test: Ensure that min-width is honored for horizontal multi-line flex containers
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* No flex items */}
<view className={"flexbox"}>
</view>
{/* Single small flex item */}
<view className={"flexbox"}>
<view className={"smallItem"}>
</view>
</view>
{/* Multiple flex items, larger than flex container's min-size: */}
<view className={"flexbox"}>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
</view>
{/*- ...and now with flex container constrained by both min and max-size */}
<view className={"flexbox __inline-001"}>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
<view className={"smallItem"}>
</view>
</view>
</view>
</>);
