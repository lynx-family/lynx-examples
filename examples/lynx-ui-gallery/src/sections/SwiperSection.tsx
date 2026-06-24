import { useState } from "@lynx-js/react";

import { Swiper, SwiperItem } from "@lynx-js/lynx-ui";

const ITEMS = [1, 2, 3, 4, 5];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"];

export function SwiperSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <view className="section">
      <text className="section-title">Swiper</text>
      <view className="section-content">
        <text className="row-label">Current: {currentIndex + 1} / {ITEMS.length}</text>
        <Swiper
          data={ITEMS}
          itemWidth={280}
          containerWidth={350}
          duration={400}
          initialIndex={0}
          onChange={setCurrentIndex}
          mode="normal"
          modeConfig={{
            align: "center",
            spaceBetween: 12,
          }}
          autoPlay={false}
          style={{ overflow: "visible", height: "160px" }}
        >
          {({ index }) => (
            <SwiperItem>
              <view
                className="swiper-card"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              >
                <text className="swiper-card-text">Card {index + 1}</text>
              </view>
            </SwiperItem>
          )}
        </Swiper>
      </view>
    </view>
  );
}
