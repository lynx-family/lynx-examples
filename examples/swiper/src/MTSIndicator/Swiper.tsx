import "./styles.scss";
import { useState } from "@lynx-js/react";
import { Indicator } from "../Components/Indicator/index.jsx";
import { SwiperItem } from "./SwiperItem";
import { useOffset } from "./useOffset";
import { useUpdateSwiperStyle } from "./useUpdateSwiperStyle";

export function Swiper({
  data,
  itemWidth = lynx.__globalProps.screenWidth,
}: {
  data: string[];
  itemWidth?: number;
}) {
  const [current, setCurrent] = useState(0);

  const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
  const { handleTouchStart, handleTouchMove, handleTouchEnd, updateIndex } = useOffset({
    onOffsetUpdate: updateSwiperStyle,
    onIndexUpdate: setCurrent,
    itemWidth,
  });

  return (
    <view class="swiper-wrapper">
      <view
        class="swiper-container"
        main-thread:ref={containerRef}
        main-thread:bindtouchstart={handleTouchStart}
        main-thread:bindtouchmove={handleTouchMove}
        main-thread:bindtouchend={handleTouchEnd}
      >
        {data.map((pic) => <SwiperItem pic={pic} itemWidth={itemWidth} />)}
      </view>
      <Indicator total={data.length} current={current} onItemClick={updateIndex} />
    </view>
  );
}
