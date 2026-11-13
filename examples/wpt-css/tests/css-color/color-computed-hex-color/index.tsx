/*
Source: imported/wpt-upstream/css/css-color/parsing/color-computed-hex-color.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: manual-visual
Lynx-Status: skipped
Lynx-Note: Original WPT is a testharness.js computed-style parser test with no visual oracle; this static card covers the same valid hex forms and is skipped by the Android screenshot runner until manual reference support exists.
Title: CSS Color Level 4: Computation of colors using hex color notation
Assert: Valid hex color notations map to their expected sRGB colors.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"description"}>
{"Each row should show matching left and right swatches."}
</text>
<view className={"row"}>
<view className={"swatch hex-fff"}>
</view>
<view className={"swatch rgb-white"}>
</view>
<text className={"label"}>
{"#fff = rgb(255, 255, 255)"}
</text>
</view>
<view className={"row"}>
<view className={"swatch hex-ffff"}>
</view>
<view className={"swatch rgb-white"}>
</view>
<text className={"label"}>
{"#ffff = rgb(255, 255, 255)"}
</text>
</view>
<view className={"row"}>
<view className={"swatch hex-ffffff"}>
</view>
<view className={"swatch rgb-white"}>
</view>
<text className={"label"}>
{"#ffffff = rgb(255, 255, 255)"}
</text>
</view>
<view className={"row"}>
<view className={"swatch hex-ffffffff"}>
</view>
<view className={"swatch rgb-white"}>
</view>
<text className={"label"}>
{"#ffffffff = rgb(255, 255, 255)"}
</text>
</view>
<view className={"row"}>
<view className={"swatch hex-ffcc99"}>
</view>
<view className={"swatch rgb-ffcc99"}>
</view>
<text className={"label"}>
{"#FFCc99 = rgb(255, 204, 153)"}
</text>
</view>
<view className={"row"}>
<view className={"swatch hex-369"}>
</view>
<view className={"swatch rgb-336699"}>
</view>
<text className={"label"}>
{"#369 = rgb(51, 102, 153)"}
</text>
</view>
</view>
</>);
