/*
Source: imported/wpt-upstream/css/css-cascade/layer-basic.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: wpt-adapter agent
Adapted-Date: 2026-08-04
Reference-Mode: testharness-computed-style
Lynx-Status: passing
Assert: Basic CSS Cascade Layers functionality makes green win for both targets in all 34 generated cases (68 computed color assertions).
*/
import { root } from '@lynx-js/react';
import './index.css';
import './processor';
import { useTestharness } from "../../../tools/nonvisual-runtime/react";

function invokeMainThread(name: string, input: Record<string, unknown>) {
  'main thread';
  const bridge = globalThis as typeof globalThis & Record<string, (input: Record<string, unknown>) => Record<string, unknown>>;
  if (!['start', 'poll', 'cancel'].includes(name)) throw new Error('Unknown testharness method');
  return bridge[name](input);
}

function TestCard() {
  useTestharness(invokeMainThread);
  return (<>
<text className={"first"}>
</text>
<text className={"second"}>
</text>
</>);
}

root.render(<TestCard />);
