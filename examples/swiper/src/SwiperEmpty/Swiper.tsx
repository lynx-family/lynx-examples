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
    <view className="swiper-wrapper">
      <view className="swiper-container">
        {data.map((pic) => <SwiperItem pic={pic} itemWidth={itemWidth} />)}
      </view>
    </view>
  );
}
