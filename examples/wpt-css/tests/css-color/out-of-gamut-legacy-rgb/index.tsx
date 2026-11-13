/*
Source: imported/wpt-upstream/css/css-color/out-of-gamut-legacy-rgb.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: passing
Title: CSS Color 4: Out Of Gamut Legacy SRGB Color with Transparency
Assert: Legacy sRGB channels outside the device gamut are clipped before alpha is applied.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<view className={"sample"}>
</view>
</view>
</>);
