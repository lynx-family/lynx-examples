import { root } from '@lynx-js/react';
import './index.css';

root.render(<>
<view style={"width:100%;height:100%"}>
<x-webview src={"http://10.0.2.2:8080/temp-web-html/test-no-float.html"} style={"width:100%;height:100%"} />
</view>
</>);
