import "./index.scss";

export const ScrollItem = (props: { title: string; value?: string; height?: string }) => {
  return (
    <view className="scroll-item-container" style={{ height: props.height ? props.height : "100%" }}>
      <text className="scroll-item-title">{props.title}</text>
      <scroll-view className="scroll" scroll-orientation="vertical">
        <text>{props.value}</text>
      </scroll-view>
    </view>
  );
};
