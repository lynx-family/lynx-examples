/*
Source: imported/wpt-upstream/css/css-masking/mask-image/mask-image-data-url-image.html
WPT-Revision: 8e3d3261432a28800a28676d9b7617b3e7bc0f33
Adapted-By: agent
Adapted-Date: 2026-08-13
Reference-Mode: web-test-render
Lynx-Status: passing
Android-Status: passing
Android-Diff: 0.0740%
Title: CSS Test: mask-image: url(data:...)
Assert: mask-image can use a data: URL as an image
Lynx-Note: Materializes the two absolutely positioned elements' shared static position as an explicit 200px relative scene; the tested data URL mask is unchanged. The three masked scene colors have identical pixel counts and bounding boxes in WebView and Lynx.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if there is a blue-ish square with a 20px green border around it and a 40px blue-green-ish border around that."}
</text>
<view className={"scene"}>
<view id={"back"}>
</view>
<view id={"front"}>
</view>
</view>
</view>
</>);
