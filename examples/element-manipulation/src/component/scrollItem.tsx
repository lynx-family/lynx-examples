export const ScrollItem = (props: { width: string; height: string; index: number }) => {
  // Calculate gradient angle based on index to create wave effect
  const angle = 90 + 6 * props.index;

  return (
    <view
      style={{
        width: props.width,
        height: props.height,
        background: `linear-gradient(${angle}deg, rgb(255,53,26), rgb(0,235,235))`,
        margin: "3px",
        borderRadius: "10px",
      }}
    >
    </view>
  );
};
