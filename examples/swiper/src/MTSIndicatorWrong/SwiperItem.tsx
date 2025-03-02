function SwiperItem({ pic, itemWidth, itemHeight }: { pic: string; itemWidth: number; itemHeight: number }) {
  return (
    <view style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}>
      <image mode="aspectFill" src={pic} style={{ width: "100%", height: "100%" }}></image>
    </view>
  );
}
export { SwiperItem };
