/*
Source: imported/wpt-upstream/css/css-masking/clip-path/clip-path-ellipse-006.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: web-test-render
Lynx-Status: failing
Title: CSS Masking: Test clip-path property and ellipse function with absolute values
Assert: The clip-path property takes the basic shape
	'ellipse' for clipping. Test absolute values for radii and position
	arguments. On pass you should see a green circle.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view className={"body"}>
<text className={"__ua-p"}>
{"The test passes if there is a full green ellipse."}
</text>
<view className={"__inline-001"}>
</view>
</view>
</>);
