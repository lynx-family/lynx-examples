export const StickyItem = (props: { index: number; height: number; sticky: boolean }) => {
  return (
    <view
      flatten={false}
      style={{
        width: "calc(100% - 10px)",
        height: `${props.height}px`,
        backgroundColor: props.sticky ? "lightcoral" : "grey",
        marginTop: "5px",
        position: "sticky",
        top: "0px",
      }}
    >
      <text className="sub-title">{`Scroll-Item-${props.index}-sticky-${props.sticky}`}</text>
    </view>
  );
};
