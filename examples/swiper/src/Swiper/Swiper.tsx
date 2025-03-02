import "./styles.scss";
import { useState } from "@lynx-js/react";
import { Indicator } from "../Components/Indicator/index.jsx";
import { SwiperItem } from "./SwiperItem";
import { useOffset } from "./useOffset";
import { useUpdateSwiperStyle } from "./useUpdateSwiperStyle";

export function Swiper({
  data,
  itemWidth = lynx.__globalProps.screenWidth,
  duration,
  "main-thread:easing": MTEasing,
}: {
  data: string[];
  itemWidth?: number;

  duration?: number;
  "main-thread:easing"?: (t: number) => number;
}) {
  const [current, setCurrent] = useState(0);

  const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
  const { handleTouchStart, handleTouchMove, handleTouchEnd, updateIndex } = useOffset({
    itemWidth,
    dataLength: data.length,
    onIndexUpdate: setCurrent,
    onOffsetUpdate: updateSwiperStyle,
    duration,
    MTEasing,
  });

  function handleItemClick(index: number) {
    setCurrent(index);
    updateIndex(index);
  }

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
      <Indicator total={data.length} current={current} onItemClick={handleItemClick} />
    </view>
  );
}
