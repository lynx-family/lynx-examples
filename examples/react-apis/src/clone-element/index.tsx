import { cloneElement, root, useState } from "@lynx-js/react";

import "./index.css";

const products = ["Cabbage", "Garlic", "Apple"];

const nativeRows = products.map((title) => (
  <view key={title}>
    <text className="RowText">{title}</text>
  </view>
));

function CloneElementExample() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNext = () => {
    setSelectedIndex((current) => (current + 1) % nativeRows.length);
  };

  return (
    <view className="App">
      <view className="List">
        {nativeRows.map((row, index) =>
          cloneElement(row, {
            className: index === selectedIndex ? "Row RowHighlighted" : "Row",
          })
        )}
      </view>

      <view className="Button" bindtap={selectNext}>
        <text className="ButtonText">Next</text>
      </view>
    </view>
  );
}

root.render(<CloneElementExample />);
