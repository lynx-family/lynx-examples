/*
Source: imported/wpt-upstream/css/css-color/parsing/color-invalid-hex-color.html
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: manual-visual
Lynx-Status: skipped
Lynx-Note: Original WPT is a testharness.js parser test with no visual oracle; this static card applies the same invalid color values after a green fallback and is skipped by the Android screenshot runner until manual reference support exists.
Title: CSS Color Level 4: Parsing and serialization of colors using invalid hex color notation
Assert: Invalid hex color values must not parse as color declarations.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"description"}>
{"All rows should remain green; any non-green row means an invalid hex color parsed."}
</text>
<text className={"case invalid-hash"}>
{"#"}
</text>
<text className={"case invalid-f"}>
{"#f"}
</text>
<text className={"case invalid-ff"}>
{"#ff"}
</text>
<text className={"case invalid-ffg"}>
{"#ffg"}
</text>
<text className={"case invalid-fffg"}>
{"#fffg"}
</text>
<text className={"case invalid-fffff"}>
{"#fffff"}
</text>
<text className={"case invalid-fffffg"}>
{"#fffffg"}
</text>
<text className={"case invalid-fffffff"}>
{"#fffffff"}
</text>
<text className={"case invalid-fffffffg"}>
{"#fffffffg"}
</text>
<text className={"case invalid-fffffffff"}>
{"#fffffffff"}
</text>
</view>
</>);
