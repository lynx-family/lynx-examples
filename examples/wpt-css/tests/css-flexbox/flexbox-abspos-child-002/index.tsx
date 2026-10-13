/*
Source: imported/wpt-upstream/css/css-flexbox/abspos/flexbox-abspos-child-002.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Test that "flex-basis" doesn't affect layout of abspos flex child
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* In all cases below, flex-basis should have no effect on layout (because
       it's on an element that is abspos and hence not a flex item). */}
{/* Abspos child has auto width (which should end up 0): */}
<view className={"flex"}>
<view className={"__inline-001"}>
</view>
</view>
<view className={"flex"}>
<view className={"__inline-002"}>
</view>
</view>
<view className={"flex"}>
<view className={"__inline-003"}>
</view>
</view>
<view className={"flex"}>
<view className={"__inline-004"}>
</view>
</view>
{/* Abspos child has explicit 10px width: */}
<view className={"flex"}>
<view className={"sized __inline-005"}>
</view>
</view>
<view className={"flex"}>
<view className={"sized __inline-006"}>
</view>
</view>
<view className={"flex"}>
<view className={"sized __inline-007"}>
</view>
</view>
<view className={"flex"}>
<view className={"sized __inline-008"}>
</view>
</view>
{/* Abspos child has implicit 10px width (implied by auto width and
       constrained left/right properties): */}
<view className={"flex"}>
<view className={"implied __inline-009"}>
</view>
</view>
<view className={"flex"}>
<view className={"implied __inline-010"}>
</view>
</view>
<view className={"flex"}>
<view className={"implied __inline-011"}>
</view>
</view>
<view className={"flex"}>
<view className={"implied __inline-012"}>
</view>
</view>
</view>
</>);
