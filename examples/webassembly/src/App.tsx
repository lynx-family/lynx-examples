import { useCallback, useState } from "@lynx-js/react";

import { addWithWasm } from "./addWasm.js";

import "./App.css";

export function App() {
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = useCallback(() => {
    "background-only";
    setError(null);

    try {
      setResult(addWithWasm(1, 2));
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "Failed to run WebAssembly");
    }
  }, []);

  return (
    <page>
      <view className="App">
        <view className="Panel">
          <text className="Eyebrow">WebAssembly on Lynx</text>
          <text className="Title">1 + 2</text>
          <text className="Formula">Calculated by a Wasm add function</text>

          <view className="Button" bindtap={calculate}>
            <text className="ButtonText">Run add(1, 2)</text>
          </view>

          <view className="ResultBox">
            <text className="ResultLabel">Result</text>
            <text className="ResultValue">
              {error ?? (result == null ? "Tap to calculate" : String(result))}
            </text>
          </view>
        </view>
      </view>
    </page>
  );
}
