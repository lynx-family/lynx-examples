/*
Source: imported/wpt-upstream/css/CSS2/text/text-align-002.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Text-align set to 'right'
Assert: The 'text-align' property set to 'right' on a block element aligns the text to the right.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" below are aligned to the right, inside the blue box."}
</text>
<view className={"container"}>
<text className={"right-text"}>
{"Filler Text"}
</text>
</view>
</>);
