/*
Source: imported/wpt-upstream/css/css-color/t421-rgb-hex-parsing-f.xht
WPT-Revision: d39ecc058
Adapted-By: agent
Adapted-Date: 2026-05-21
Reference-Mode: web-test-render
Lynx-Status: failing
Lynx-Note: Android screenshot validation fails at 0.7509%; invalid hex color declarations after a green fallback prevent the text from remaining green in Lynx.
Title: CSS Test: parsing of hexidecimal color values
Assert: Test that hexidecimal values are only accepted if they have 3 or six digits.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"sample"}>
{"This text should be green."}
</text>
<text className={"note"}>
{"Note: the rules tested by this test may be changed in future levels of the CSS Color Module."}
</text>
</view>
</>);
