import { useState } from "@lynx-js/react";

import "./App.css";
import { TagChoice } from "./components/TagChoice.jsx";
import { choices, initialChoices } from "./mockData.js";

export function App() {
  const [selectedChoices, setSelectedChoices] = useState(initialChoices);

  const handleChoice = (choice: string, isSelected: boolean) => {
    setSelectedChoices(
      isSelected
        ? selectedChoices.filter((item) => item !== choice)
        : [...selectedChoices, choice],
    );
  };

  return (
    <page className="Page">
      <view className="Card">
        <text className="Eyebrow">FEEDBACK PATTERN</text>
        <text className="Title">What worked well?</text>
        <text className="Description">
          Select any number of tags. Tap a selected tag again to remove it.
        </text>
        <TagChoice
          choices={choices}
          selectedChoices={selectedChoices}
          onClickChoice={handleChoice}
        />
        <view className="Summary">
          <text className="Summary__count">{selectedChoices.length}</text>
          <text className="Summary__label">selected</text>
          <view
            className="Reset"
            bindtap={() => setSelectedChoices(initialChoices)}
          >
            <text className="Reset__text">Reset choices</text>
          </view>
        </view>
      </view>
    </page>
  );
}
