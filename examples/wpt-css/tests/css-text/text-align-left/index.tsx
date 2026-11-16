/*
Source: imported/wpt-upstream/css/CSS2/text/text-align-001.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Text-align set to 'left'
Assert: The 'text-align' property set to 'left' on a block element aligns the text to the left.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" below are aligned to the left, inside the blue box."}
</text>
<view className={"container"}>
<text className={"left-text"}>
{"Filler Text"}
</text>
</view>
</>);
