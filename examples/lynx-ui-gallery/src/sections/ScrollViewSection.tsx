import { ScrollView } from "@lynx-js/lynx-ui";

const ITEMS = Array.from({ length: 12 }, (_, i) => String.fromCharCode(65 + i));

export function ScrollViewSection() {
  return (
    <view className="section">
      <text className="section-title">ScrollView</text>
      <view className="section-content">
        <text className="row-label">Horizontal Scroll</text>
        <ScrollView scrollOrientation="horizontal" className="gallery-scroll-view">
          <view className="scroll-content-h">
            {ITEMS.map((letter, i) => (
              <view key={`h-${i}`} className="scroll-item">
                <text className="scroll-item-text">{letter}</text>
              </view>
            ))}
          </view>
        </ScrollView>
      </view>
    </view>
  );
}
