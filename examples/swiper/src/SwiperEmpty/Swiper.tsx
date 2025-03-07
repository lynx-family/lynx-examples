import "./styles.scss";
import { SwiperItem } from "./SwiperItem";

export function Swiper({
  data,
  itemWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio,
}: {
  data: string[];
  itemWidth?: number;
}) {
  return (
    <view class="swiper-wrapper">
      <view class="swiper-container">
        {data.map((pic) => <SwiperItem pic={pic} itemWidth={itemWidth} />)}
      </view>
    </view>
  );
}
