/*
Source: imported/wpt-upstream/css/css-backgrounds/parsing/background-repeat-computed.html
WPT-Revision: e76551e297725c137eb696a5f6258a59adee5999
Adapted-By: agent
Adapted-Date: 2026-08-18
Reference-Mode: testharness-computed-style
Lynx-Status: failing
Assert: Generated background-repeat computed-style assertions for text.target.
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
<text className={"target"}>
</text>
</>);
}

root.render(<TestCard />);
