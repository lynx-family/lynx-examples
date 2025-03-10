import "./styles.scss";
import { SwiperItem } from "./SwiperItem";
import { useOffset } from "./useOffset";
import { useUpdateSwiperStyle } from "./useUpdateSwiperStyle";

export function Swiper({
  data,
  itemWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio,
}: {
  data: string[];
  itemWidth?: number;
}) {
  const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useOffset({
    onOffsetUpdate: updateSwiperStyle,
  });

  return (
    <view className="swiper-wrapper">
      <view
        className="swiper-container"
        ref={containerRef}
        bindtouchstart={handleTouchStart}
        bindtouchmove={handleTouchMove}
        bindtouchend={handleTouchEnd}
      >
        {data.map((pic) => <SwiperItem pic={pic} itemWidth={itemWidth} />)}
      </view>
    </view>
  );
}
