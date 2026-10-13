/*
Source: imported/wpt-upstream/css/CSS2/text/text-align-003.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-05-17
Lynx-Status: passing
Title: CSS Test: Text-align set to 'center'
Assert: The 'text-align' property set to 'center' on a block element aligns the text in the center.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" below are aligned in the center, inside the blue box."}
</text>
<view className={"container"}>
<text className={"centered-text"}>
{"Filler Text"}
</text>
</view>
</>);
