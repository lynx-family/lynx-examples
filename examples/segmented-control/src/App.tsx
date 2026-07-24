import { useState } from "@lynx-js/react";

import "./App.css";
import { SegmentedControl } from "./components/SegmentedControl.jsx";
import { initialSegment, segmentItems } from "./mockData.js";

export function App() {
  const [selectedValue, setSelectedValue] = useState(initialSegment);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <page className="Page">
      <view className="Card">
        <text className="Eyebrow">CONTROL PATTERN</text>
        <text className="Title">Choose a reporting range</text>
        <text className="Description">
          The selected value is owned by the parent and updated by item taps.
        </text>
        <SegmentedControl
          value={selectedValue}
          onChange={setSelectedValue}
          items={segmentItems}
          isDisabled={isDisabled}
        />
        <view className="Status">
          <text className="Status__label">Selected value</text>
          <text className="Status__value">{selectedValue}</text>
        </view>
        <view className="Actions">
          <view
            className="Button Button--secondary"
            bindtap={() => setIsDisabled(!isDisabled)}
          >
            <text className="Button__text">
              {isDisabled ? "Restore opacity" : "Show disabled state"}
            </text>
          </view>
          <view
            className="Button Button--primary"
            bindtap={() => {
              setSelectedValue(initialSegment);
              setIsDisabled(false);
            }}
          >
            <text className="Button__text Button__text--primary">Reset</text>
          </view>
        </view>
      </view>
    </page>
  );
}
