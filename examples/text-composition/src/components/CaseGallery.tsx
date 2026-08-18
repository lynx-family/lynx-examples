// Copyright 2026 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { useState } from "@lynx-js/react";

import { sourceCases } from "../cases/registry.jsx";

export function CaseGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = sourceCases[activeIndex];
  const caseNumber = `${activeIndex + 1}`.padStart(2, "0");
  const goPrevious = () => setActiveIndex((activeIndex - 1 + sourceCases.length) % sourceCases.length);
  const goNext = () => setActiveIndex((activeIndex + 1) % sourceCases.length);

  return (
    <view className="case-page" lynx-test-tag="text-composition-page">
      <view className="case-navigator">
        <view className="case-navigator-copy">
          <text className="case-progress">{`${caseNumber} / ${sourceCases.length}`}</text>
          <text className="case-source-name" lynx-test-tag="active-case-name">{activeCase.name}</text>
          <text className="case-source-title">{activeCase.title}</text>
          <text className="case-source-note">{activeCase.note}</text>
        </view>
        <view className="case-navigation-controls">
          <view className="case-navigation-button" bindtap={goPrevious} lynx-test-tag="previous-case">
            <text className="case-navigation-button-text">{"Previous"}</text>
          </view>
          <view
            className="case-navigation-button case-navigation-button--primary"
            bindtap={goNext}
            lynx-test-tag="next-case"
          >
            <text className="case-navigation-button-text case-navigation-button-text--primary">{"Next"}</text>
          </view>
        </view>
      </view>
      <scroll-view
        className="case-scroll"
        key={activeCase.name}
        scroll-orientation="vertical"
        lynx-test-tag="active-case-scroll"
      >
        <view className="case-stage" lynx-test-tag={`case-${activeCase.name}`}>
          <view className="case-stage-heading">
            <text className="case-stage-kicker">{"SOURCE PARITY FIXTURE"}</text>
            <text className="case-stage-id">{`${caseNumber}-${activeCase.name}`}</text>
          </view>
          {activeCase.render()}
          <view className="case-stage-footer">
            <text className="case-stage-footer-text">
              {"This page renders one source case. Use the controls above to switch cases."}
            </text>
          </view>
        </view>
      </scroll-view>
    </view>
  );
}
