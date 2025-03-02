export const Default = ({ src }: { src: string }) => {
  return (
    <view>
      <text>Hello world</text>
      <image auto-size style="width:100px" src={src} />
    </view>
  );
};
