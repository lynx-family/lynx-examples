/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-flex-wrap-horiz-001.html
WPT-Revision: 269bca0dd35c303639f3c9cf1d8bcb3d911bdb60
Adapted-By: agent
Adapted-Date: 2026-09-21
Reference-Mode: web-test-render
Lynx-Status: passing
Assert: Horizontal line collection accounts for margins, oversized items, and flex:none before shrink.
Title: CSS Test: Testing flex-wrap in horizontal flex containers
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* Single small flex item */}
<view className={"flexbox"}>
<view className={"halfMainSize"}>
</view>
</view>
{/* Single small flex item with 'margin-left' set to push it to protrude
       from the far edge of the container (and to shrink as a result) */}
<view className={"flexbox"}>
<view className={"halfMainSize __inline-001"}>
</view>
</view>
{/* Single small inflexible flex item with 'margin-left' set to push it to
       protrude from the far edge of the container */}
<view className={"flexbox"}>
<view className={"halfMainSize __inline-002"}>
</view>
</view>
{/* Two flex items, exactly large enough to fit in line (no wrapping): */}
<view className={"flexbox"}>
<view className={"halfMainSize"}>
</view>
<view className={"halfMainSize"}>
</view>
</view>
{/* and now with some margin on first item, to force second item to wrap: */}
<view className={"flexbox"}>
<view className={"halfMainSize __inline-003"}>
</view>
<view className={"halfMainSize"}>
</view>
</view>
{/* and now with some margin on second item, again forcing it to wrap: */}
<view className={"flexbox"}>
<view className={"halfMainSize"}>
</view>
<view className={"halfMainSize __inline-004"}>
</view>
</view>
{/* Single large flex item: overflows (but does not wrap) and is shrunk
       to fit container's main-size */}
<view className={"flexbox"}>
<view className={"hugeMainSize"}>
</view>
</view>
{/* Single large flex item: overflows (but does not wrap) */}
<view className={"flexbox"}>
<view className={"hugeMainSize __inline-005"}>
</view>
</view>
{/* Small flex item, followed by large flex item (which wraps to
       its own line and then shrink to container's main-size) */}
<view className={"flexbox"}>
<view className={"halfMainSize"}>
</view>
<view className={"hugeMainSize"}>
</view>
</view>
{/* Small flex item, followed by large inflexible flex item (which wraps to
       its own line and then shrink to container's main-size) */}
<view className={"flexbox"}>
<view className={"halfMainSize"}>
</view>
<view className={"hugeMainSize __inline-006"}>
</view>
</view>
</view>
</>);
