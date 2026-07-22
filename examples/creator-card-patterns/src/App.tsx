import { useState } from "@lynx-js/react";

import { AdaptiveText } from "./components/AdaptiveText.jsx";
import { InfoCards } from "./components/InfoCards.jsx";
import { MediaCard } from "./components/MediaCard.jsx";
import { infoCards, longHeadline, mediaCards } from "./mockData.jsx";

import "./App.css";

export function App() {
  const [selectedCardId, setSelectedCardId] = useState(mediaCards[0].id);
  const [statusMessage, setStatusMessage] = useState("Tap a card, author, action, or close button.");
  const [showLongText, setShowLongText] = useState(true);

  return (
    <page>
      <scroll-view scroll-orientation="vertical" className="PageScroll">
        <view className="App">
          <view className="Hero">
            <text className="Eyebrow">UI migration sample</text>
            <text className="Title">Creator card patterns</text>
            <text className="Description">
              Three behavior-complete slices are wired with deterministic mock data and local callbacks.
            </text>
          </view>

          <view className="Section">
            <view className="CardHeaderRow">
              <text className="SectionTitle">Adaptive text</text>
              <text className="ToggleText" catchtap={() => setShowLongText(!showLongText)}>
                Toggle copy
              </text>
            </view>
            <view className="Panel">
              <AdaptiveText
                className="AdaptiveHeadline"
                text-maxline="2"
                maxFontSize={22}
                minFontSize={14}
                autoSizeStep={2}
                lineHeightMultiplier={1.18}
              >
                {showLongText ? longHeadline : "Short titles keep their maximum size."}
              </AdaptiveText>
              <text className="SmallNote">
                The text stays hidden while layout feedback steps the font down, then fades in when it fits.
              </text>
            </view>
          </view>

          <view className="Section">
            <text className="SectionTitle">Media cards</text>
            <view className="Panel">
              {mediaCards.map((card) => (
                <MediaCard
                  key={card.id}
                  {...card}
                  selected={card.id === selectedCardId}
                  onSelect={(id) => {
                    setSelectedCardId(id);
                    setStatusMessage(`Selected media card ${id}.`);
                  }}
                  onAuthorSelect={(id) => setStatusMessage(`Selected author area for ${id}.`)}
                />
              ))}
            </view>
          </view>

          <view className="Section">
            <InfoCards
              cards={infoCards}
              onShow={(key) => setStatusMessage(`Information card ${key} became visible.`)}
              onAction={(key) => setStatusMessage(`Triggered action from ${key}.`)}
            />
          </view>

          <view className="StatusPanel">
            <text className="StatusLabel">Last event</text>
            <text className="StatusText">{statusMessage}</text>
          </view>
        </view>
      </scroll-view>
    </page>
  );
}
