import { ScrollItem } from "../component/scrollItem.jsx";

export const App = () => {
  const handleTap = () => {
    lynx
      .createSelectorQuery()
      .select("scroll-view")
      .invoke({
        method: "autoScroll",
        params: {
          rate: 120,
          start: true,
        },
      })
      .exec();
  };

  return (
    <view
      style={{
        width: "100%",
        height: "100%",
        padding: "10px",
        display: "linear",
        marginTop: "20px",
      }}
    >
      <view bindtap={handleTap}>
        <text
          style={{
            fontSize: "20px",
            height: "40px",
            paddingLeft: "10px",
            marginTop: "10px",
          }}
        >
          Tap me to enable auto-scroll
        </text>
      </view>
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "100%", paddingLeft: "5px" }}
      >
        {Array.from({ length: 20 }).map((item, index) => (
          <ScrollItem width="calc(100% - 10px)" height="100px" index={index} />
        ))}
      </scroll-view>
    </view>
  );
};
