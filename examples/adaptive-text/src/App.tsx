import { useState } from "@lynx-js/react";

import "./App.css";
import { AdaptiveText } from "./components/AdaptiveText.jsx";
import { textSamples } from "./mockData.js";

export function App() {
  const [sampleIndex, setSampleIndex] = useState(2);
  const [renderKey, setRenderKey] = useState(0);
  const [resolvedSize, setResolvedSize] = useState(0);
  const sample = textSamples[sampleIndex];

  const selectSample = (index: number) => {
    setSampleIndex(index);
    setResolvedSize(0);
    setRenderKey(renderKey + 1);
  };

  return (
    <page className="Page">
      <view className="Card">
        <text className="Eyebrow">LAYOUT FEEDBACK</text>
        <text className="Title">Adaptive headline</text>
        <view className="SampleTabs">
          {textSamples.map((item, index) => (
            <view
              key={item.id}
              className={`SampleTab${sampleIndex === index ? " SampleTab--active" : ""}`}
              bindtap={() => selectSample(index)}
            >
              <text
                className={`SampleTab__text${sampleIndex === index ? " SampleTab__text--active" : ""}`}
              >
                {item.label}
              </text>
            </view>
          ))}
        </view>
        <view className="HeadlineFrame">
          <AdaptiveText
            key={renderKey}
            className="Headline"
            text-maxline="2"
            maxFontSize={52}
            minFontSize={28}
            autoSizeStep={4}
            lineHeightMultiplier={1.12}
            onSizeResolved={setResolvedSize}
          >
            {sample.text}
          </AdaptiveText>
        </view>
        <view className="Status">
          <text className="Status__label">Resolved size</text>
          <text className="Status__value">
            {resolvedSize ? `${resolvedSize}rpx` : "Measuring"}
          </text>
        </view>
        <view
          className="Reset"
          bindtap={() => {
            setResolvedSize(0);
            setRenderKey(renderKey + 1);
          }}
        >
          <text className="Reset__text">Measure again</text>
        </view>
      </view>
    </page>
  );
}
