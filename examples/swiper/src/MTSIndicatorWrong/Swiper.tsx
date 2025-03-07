import "./styles.scss";
import { useState } from "@lynx-js/react";
import { Indicator } from "../Components/Indicator/index.jsx";
import { SwiperItem } from "./SwiperItem";
import { useOffset } from "./useOffset";
import { useUpdateSwiperStyle } from "./useUpdateSwiperStyle";

export function Swiper({
  data,
  itemWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio,
  itemHeight = 300,
}: {
  data: string[];
  itemWidth?: number;
}) {
  const [current, setCurrent] = useState(0);

  const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useOffset({
    itemWidth,
    onIndexUpdate: setCurrent,
    onOffsetUpdate: updateSwiperStyle,
  });

  return (
    <view>
      <view
        class="swiper-container"
        main-thread:ref={containerRef}
        main-thread:bindtouchstart={handleTouchStart}
        main-thread:bindtouchmove={handleTouchMove}
        main-thread:bindtouchend={handleTouchEnd}
      >
        {data.map((pic) => <SwiperItem pic={pic} itemWidth={itemWidth} itemHeight={itemHeight} />)}
      </view>
      <Indicator total={data.length} current={current} />
    </view>
  );
}
