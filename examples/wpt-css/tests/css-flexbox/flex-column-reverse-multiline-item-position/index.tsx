/*
Source: imported/wpt-upstream/css/css-flexbox/flex-column-reverse-multiline-item-position.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Flexbox: multi-line column-reverse item positions
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"Test passes if there is a green step shape (a short block at the lower left, a taller block to its right) and no red."}
</text>
{/* max-height forces a wrap: the 40px item fills line 1, the 80px item wraps to line 2, and the container's
     auto height resolves to the taller line (80px). Each column-reverse line packs at the main-start (bottom)
     against that finalized height, so the short line is bottom-aligned. */}
<view id={"target"}>
<view className={"short"}>
</view>
<view className={"tall"}>
</view>
</view>
</view>
</>);
