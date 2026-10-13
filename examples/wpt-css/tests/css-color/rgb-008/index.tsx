/*
Source: imported/wpt-upstream/css/css-color/rgb-008.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Color 4: RGB functions rgb() and rgba()
Assert: legacy rgb() with 8-bit numbers and percent alpha, with commas
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"instruction"}>
{"Test passes if you see a green square, and no red."}
</text>
<view className={"swatch ref"}>
</view>
<view className={"swatch test"}>
</view>
</view>
</>);
