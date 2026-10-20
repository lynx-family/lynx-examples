/*
Source: imported/wpt-upstream/css/css-flexbox/order-painting.html
WPT-Revision: 9bc42055a930f29289ba627ed42bfa7cd0fb7a58
Adapted-By: agent
Adapted-Date: 2026-08-24
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Issue: Lynx applies flex order to layout but retains DOM/render-sibling order for painting, so the later red item paints over the overlapping order-2 green item. Diff: 1.25% @0.5% limit (Pixel_9_Pro emulator-5554, 2026-08-24; run 20260824-flex-visual-10b-order-painting; diagnosis results/auto-adapt/reports/20260824-order-painting-rca.md).
Title: CSS Flexbox: painting order.
Assert: This test ensures that the 'order' style properly changes the paint order of flex items.
Note: The adaptation preserves the order: 1/order: 2 values and the source's -50px overlap without adding z-index or positioning, so hiding red still depends on order-modified flex painting. It also restores Web content-box, row, flex-start, and collapsed setup-margin behavior.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"This test passes if there is no red showing."}
</text>
<view id={"test"}>
<view className={"later-green-item"}>
</view>
<view className={"earlier-red-item"}>
</view>
</view>
</view>
</>);
