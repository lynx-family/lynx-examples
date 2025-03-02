import { useState } from "@lynx-js/react";

import "./App.css";

export function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const currentValue = e.detail.value.trim();
    setInputValue(currentValue);
  };

  const requestFocus = () => {
    lynx
      .createSelectorQuery()
      .select("#input-id")
      .invoke({
        method: "focus",
        params: {},
        success: function(res) {
          console.log("lynx", "request focus success");
        },
        fail: function(res) {
          console.log("lynx", "request focus fail");
        },
      })
      .exec();
  };

  return (
    <view className="input-card-url">
      <text className="bold-text">Card URL</text>
      <input
        id="input-id"
        className="input-box"
        bindinput={handleInput}
        value={inputValue}
        placeholder="Enter Card URL"
      />
      <view className="connect-button" bindtap={requestFocus}>
        <text className="button-text">Go</text>
      </view>
    </view>
  );
}
