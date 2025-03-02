import "./styles.scss";
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
  const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useOffset({
    onOffsetUpdate: updateSwiperStyle,
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
    </view>
  );
}
