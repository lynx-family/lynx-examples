/*
Source: imported/wpt-upstream/css/css-color/t32-opacity-zorder-c.xht
WPT-Revision: (to be filled during import)
Adapted-By: agent
Adapted-Date: 2026-05-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Test: opacity
Assert: Opacity has z-ordering treatment of positioned elements and z-index applies.
Lynx-Note: Adapted for Lynx by adding explicit z-index values. In Lynx all elements are positioned (relative/absolute), so z-index must be used explicitly to control stacking order. Current status: FAIL (0.65% diff) — z-index stacking context bug: opacity < 1 does not create proper stacking context in Lynx, causing incorrect element layering.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text style={"margin-top: 8px"} className={"__ua-p"}>
{"Each of the following boxes should have a green or\n\t\tvery-nearly-green square inside of it:"}
</text>
<view className={"table-row"}>
{/* baseline */}
<view className={"td"}>
<view className={"red"}>
</view>
<view className={"up green"}>
</view>
</view>
{/* z-index auto or 0 is in positioned elements layer */}
<view className={"td"}>
<view className={"pos red"}>
</view>
<view className={"up opc green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
<view className={"td"}>
<view className={"opc red"}>
</view>
<view className={"up pos green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
<view className={"td"}>
<view className={"pos red"}>
</view>
<view className={"up opc green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
<view className={"td"}>
<view className={"opc red"}>
</view>
<view className={"up pos green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
<view className={"td"}>
<view className={"pos red z0"}>
</view>
<view className={"up opc green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
<view className={"td"}>
<view className={"opc red z0"}>
</view>
<view className={"up pos green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
{/* baseline: make sure z-index: auto works */}
<view className={"td"}>
<view className={"pos"}>
<view className={"pos green z1"}>
</view>
<view className={"up pos red zm1"}>
</view>
</view>
<view className={"up pos red z0"}>
</view>
<view className={"up pos red"}>
</view>
<view className={"up red z1"}>
</view>
</view>
{/* baseline: make sure z-index: 0 works */}
<view className={"td"}>
<view className={"pos z0"}>
<view className={"pos red z1"}>
</view>
<view className={"up pos red zm1"}>
</view>
</view>
<view className={"up pos green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
{/* make sure opacity acts like z-index: 0, not auto */}
<view className={"td"}>
<view className={"opc"}>
<view className={"pos red z1"}>
</view>
<view className={"up pos red zm1"}>
</view>
</view>
<view className={"up pos green z1"}>
</view>
<view className={"up red"}>
</view>
</view>
{/* make sure z-index does not apply to elements with opacity if they aren't positioned */}
<view className={"td"}>
<view className={"opc red"}>
</view>
<view className={"up opc red z1"}>
</view>
<view className={"up opc z0 red"}>
</view>
<view className={"up opc zm1 green z1"}>
</view>
</view>
{/* ... but that it does if they are positioned */}
<view className={"td"}>
<view className={"pos opc z1 green"}>
</view>
<view className={"up pos opc red"}>
</view>
<view className={"up pos opc z0 red"}>
</view>
<view className={"up pos opc zm1 red"}>
</view>
</view>
</view>
</view>
</>);
