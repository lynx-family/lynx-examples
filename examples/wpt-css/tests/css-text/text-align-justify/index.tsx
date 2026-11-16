/*
Source: imported/wpt-upstream/css/CSS2/text/text-align-004.xht
Reference-Mode: web-test-render
WPT-Revision: d850624df
Adapted-By: agent
Adapted-Date: 2026-05-19
Lynx-Status: passing
Title: CSS Test: Text-align set to 'justify'
Assert: Text-align justify on a block element aligns the text on both the left and right sides.
*/
import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<text className={"test-description"}>
{"Test passes if the words \"Filler Text\" are justified and spaced out on the first two lines of text inside the blue box. The final line of text does not have to be justified but can be based on user agent implementation."}
</text>
<view className={"container"}>
<text className={"justify-text"}>
{"Filler Text Filler Text Filler Text Filler Text Filler Text Filler Text"}
</text>
</view>
</>);
