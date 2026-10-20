/*
Source: imported/wpt-upstream/css/css-flexbox/flexbox-min-width-auto-001.html
WPT-Revision: 719d5e38fdd0903a18ed9007aba816c98cc491e0
Adapted-By: agent
Adapted-Date: 2026-08-27
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Test: Testing min-width:auto
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
{/* Check for min-width:auto resolving correctly when the smallest
         candidate value is: */}
{/* *** (a) Used 'flex-basis' (from 'width') *** */}
{/* First, without definite max-width: */}
<view className={"flexbox"}>
<view className={"__inline-001"}>
<view>
</view>
</view>
</view>
{/* ...and now with definite (& large) 'max-width': */}
<view className={"flexbox"}>
<view className={"__inline-002"}>
<view>
</view>
</view>
</view>
{/* ...and now with used 'flex-basis' being a calc expression:*/}
<view className={"flexbox"}>
<view className={"__inline-003"}>
<view>
</view>
</view>
</view>
{/* *** (b) The computed 'max-width' *** */}
{/* First, with a larger candidate 'flex-basis' value (from 'width') */}
<view className={"flexbox"}>
<view className={"__inline-004"}>
<view>
</view>
</view>
</view>
{/* ...and now with a larger explicit 'flex-basis' value (which shouldn't
         be considered for 'min-width:auto' anyway) */}
<view className={"flexbox"}>
<view className={"__inline-005"}>
<view>
</view>
</view>
</view>
{/* ...and now with a smaller explicit 'flex-basis' value (which shouldn't
         be considered for 'min-width:auto' anyway) */}
<view className={"flexbox"}>
<view className={"__inline-006"}>
<view>
</view>
</view>
</view>
{/* *** (c) (no intrinsic aspect ratio) The min-content size *** */}
{/* First, with a larger candidate 'flex-basis' value (from 'width') */}
<view className={"flexbox"}>
<view className={"__inline-007"}>
<view>
</view>
</view>
</view>
{/* ...and now with a larger explicit 'flex-basis' value (which shouldn't
         be considered for 'min-width:auto' anyway) */}
<view className={"flexbox"}>
<view className={"__inline-008"}>
<view>
</view>
</view>
</view>
{/* ...and now with a smaller explicit 'flex-basis' value (which shouldn't
         be considered for 'min-width:auto' anyway) */}
<view className={"flexbox"}>
<view className={"__inline-009"}>
<view>
</view>
</view>
</view>
</view>
</>);
